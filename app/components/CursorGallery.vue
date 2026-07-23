<template>
  <Teleport to="body">
    <!-- Precision cursor dot -->
    <div ref="cursorDot" class="cursor-dot" aria-hidden="true" />

    <!-- Trail ribbon: 7 slots rendered back→front so front sits on top in DOM -->
    <div
      v-for="(cfg, i) in TRAIL_CFG"
      :key="i"
      :ref="
        (el) => {
          if (el) trailEls[i] = el as HTMLElement;
        }
      "
      class="cursor-trail-item"
      :style="{
        width: cfg.w + 'px',
        height: cfg.h + 'px',
        zIndex: 9990 + (TRAIL_CFG.length - i),
      }"
      aria-hidden="true"
    >
      <img
        :src="images[imageQueue[i] ?? 0]?.src"
        :alt="images[imageQueue[i] ?? 0]?.alt"
        loading="eager"
        draggable="false"
      />
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ── Gallery images ──────────────────────────────────────────────
const images = [
  { src: '/images/service-maternity.jpg', alt: 'Maternità' },
  { src: '/images/mommy-me-01.png', alt: 'Ritratto I' },
  { src: '/images/service-maternity.jpg', alt: 'Maternità' },
  { src: '/images/details-02.jpg', alt: 'Ritratto II' },
  { src: '/images/family-06.jpg', alt: 'Ritratto III' },
  { src: '/images/mother-nature-03.jpg', alt: 'Smash Cake' },
  { src: '/images/service-famiglia.jpg', alt: 'Storia' },
  { src: '/images/smash-cake-03.jpg', alt: 'Smash Cake' },
];

// ── Trail slots: index 0 = front (cursor), index 6 = back (oldest) ──
const TRAIL_CFG = [
  { w: 148, h: 185, opacity: 0.95, rot: -3 },
  { w: 132, h: 165, opacity: 0.82, rot: 6 },
  { w: 118, h: 148, opacity: 0.68, rot: -2 },
  { w: 106, h: 133, opacity: 0.54, rot: 8 },
  { w: 96, h: 120, opacity: 0.4, rot: -5 },
  { w: 86, h: 108, opacity: 0.26, rot: 3 },
  { w: 76, h: 95, opacity: 0.14, rot: -7 },
  { w: 66, h: 82, opacity: 0.08, rot: 4 },
] as const;

const TRAIL = TRAIL_CFG.length;
const LERP = 0.08;

// ── DOM refs & quick setters ────────────────────────────────────
const cursorDot = ref<HTMLElement | null>(null);
const trailEls: HTMLElement[] = [];

type QS = ReturnType<typeof gsap.quickSetter>;
let dotSetX: QS, dotSetY: QS;
const setters: Array<{ x: QS; y: QS }> = [];

// ── Positions (plain objects — no Vue reactivity needed) ────────
const target = { x: -400, y: -400 };
const positions = Array.from({ length: TRAIL }, () => ({ x: -400, y: -400 }));

// ── Image queue — index 0 = front slot, index N-1 = back slot ──
// Reactive so the template re-renders when the queue advances
const imageQueue = ref<number[]>(
  Array.from({ length: TRAIL }, (_, i) => i % images.length),
);
let queueHead = TRAIL - 1; // tracks which image index comes next at the front

// ── Visibility & cycling ────────────────────────────────────────
let isVisible = false;
let isOverInteractive = false;
let lastSwapX = -9999;
let lastSwapY = -9999;

const SWAP_DISTANCE = 180;

// ── Show / hide (whole gallery) ─────────────────────────────────
function show() {
  if (isVisible) return;
  isVisible = true;
  document.body.classList.add('cursor-custom');

  if (cursorDot.value)
    gsap.to(cursorDot.value, { opacity: 1, duration: 0.4, ease: 'power2.out' });
  if (!isOverInteractive) {
    trailEls.forEach((el, i) => {
      if (!el) return;
      gsap.to(el, {
        opacity: TRAIL_CFG[i]!.opacity,
        duration: 0.5 + i * 0.04,
        delay: i * 0.02,
        ease: 'power2.out',
      });
    });
  }
}

function hide() {
  if (!isVisible) return;
  isVisible = false;
  document.body.classList.remove('cursor-custom');

  if (cursorDot.value) gsap.to(cursorDot.value, { opacity: 0, duration: 0.35 });
  trailEls.forEach((el) => {
    if (el) gsap.to(el, { opacity: 0, duration: 0.35 });
  });
}

// ── Trail-only hide/show (used when cursor is over a link/button) ─
function hideTrail() {
  trailEls.forEach((el) => {
    if (el) gsap.to(el, { opacity: 0, duration: 0.18, ease: 'power2.out' });
  });
}

function showTrail() {
  if (!isVisible) return;
  trailEls.forEach((el, i) => {
    if (el)
      gsap.to(el, {
        opacity: TRAIL_CFG[i]!.opacity,
        duration: 0.3,
        ease: 'power2.out',
      });
  });
}

// ── Queue advance: push new image to front, drop oldest from back ─
function advanceQueue() {
  queueHead = (queueHead + 1) % images.length;
  imageQueue.value = [queueHead, ...imageQueue.value.slice(0, TRAIL - 1)];
}

// ── Mouse tracking ──────────────────────────────────────────────
function onMouseMove(e: MouseEvent) {
  target.x = e.clientX;
  target.y = e.clientY;

  dotSetX?.(e.clientX - 4);
  dotSetY?.(e.clientY - 4);

  // Hide the image trail when hovering over links / buttons so text is
  // always readable and clickable without the images getting in the way.
  const overInteractive = !!(e.target as Element)?.closest(
    'a, button, [role="button"], input, textarea, select, label',
  );
  if (overInteractive !== isOverInteractive) {
    isOverInteractive = overInteractive;
    if (overInteractive) hideTrail();
    else showTrail();
  }

  if (!isVisible) return;

  const dx = e.clientX - lastSwapX;
  const dy = e.clientY - lastSwapY;

  if (Math.hypot(dx, dy) >= SWAP_DISTANCE) {
    advanceQueue();

    lastSwapX = e.clientX;
    lastSwapY = e.clientY;
  }
}

// ── Ticker — chained lerp builds the ribbon path ────────────────
function tick() {
  if (!setters.length) return;

  // Slot 0 chases the cursor
  positions[0]!.x += (target.x - positions[0]!.x) * LERP;
  positions[0]!.y += (target.y - positions[0]!.y) * LERP;

  // Each subsequent slot chases the slot in front of it
  for (let i = 1; i < TRAIL; i++) {
    positions[i]!.x += (positions[i - 1]!.x - positions[i]!.x) * LERP;
    positions[i]!.y += (positions[i - 1]!.y - positions[i]!.y) * LERP;
  }

  // Apply, centering each card on its slot position
  for (let i = 0; i < TRAIL; i++) {
    if (!setters[i]) continue;
    setters[i]!.x(positions[i]!.x - TRAIL_CFG[i]!.w / 2);
    setters[i]!.y(positions[i]!.y - TRAIL_CFG[i]!.h / 2);
  }
}

// ── Route guard ─────────────────────────────────────────────────
const route = useRoute();

function resetPositions() {
  const off = -800;
  target.x = off;
  target.y = off;
  for (const p of positions) {
    p.x = off;
    p.y = off;
  }
  trailEls.forEach((el, i) => {
    if (!el) return;
    setters[i] = {
      x: gsap.quickSetter(el, 'x', 'px'),
      y: gsap.quickSetter(el, 'y', 'px'),
    };
    gsap.set(el, { x: off, y: off, rotation: TRAIL_CFG[i]!.rot });
  });
}

watch(
  () => route.path,
  (path) => {
    if (path !== '/') {
      hide();
    } else {
      nextTick(() => {
        ctx?.revert();
        resetPositions();
        ctx = gsap.context(() => {
          const hero = document.querySelector('#hero');
          if (!hero) return;
          ScrollTrigger.create({
            trigger: '#hero',
            start: 'top top',
            end: 'bottom 88%',
            onEnter: show,
            onLeave: hide,
            onEnterBack: show,
          });
          ScrollTrigger.create({
            trigger: '#about',
            start: 'top 88%',
            onEnter: hide,
            onLeaveBack: show,
          });
          const rect = hero.getBoundingClientRect();
          if (rect.top <= 0 && rect.bottom >= window.innerHeight * 0.12) show();
        });
      });
    }
  },
);

// ── Lifecycle ───────────────────────────────────────────────────
let ctx: gsap.Context;

onMounted(() => {
  images.forEach(({ src }) => {
    const img = new Image();
    img.src = src;
    img.decode?.().catch(() => {});
  });

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  if (cursorDot.value) {
    dotSetX = gsap.quickSetter(cursorDot.value, 'x', 'px');
    dotSetY = gsap.quickSetter(cursorDot.value, 'y', 'px');
    gsap.set(cursorDot.value, { opacity: 0 });
  }

  trailEls.forEach((el, i) => {
    if (!el) return;
    setters[i] = {
      x: gsap.quickSetter(el, 'x', 'px'),
      y: gsap.quickSetter(el, 'y', 'px'),
    };
    gsap.set(el, { opacity: 0, rotation: TRAIL_CFG[i]!.rot, x: -400, y: -400 });
  });

  window.addEventListener('mousemove', onMouseMove, { passive: true });
  gsap.ticker.add(tick);

  ctx = gsap.context(() => {
    const hero = document.querySelector('#hero');
    if (!hero) return; // not on home page — skip
    ScrollTrigger.create({
      trigger: '#hero',
      start: 'top top',
      end: 'bottom 88%',
      onEnter: show,
      onLeave: hide,
      onEnterBack: show,
    });
    ScrollTrigger.create({
      trigger: '#about',
      start: 'top 88%',
      onEnter: hide,
      onLeaveBack: show,
    });
    // Fire immediately if already inside the hero zone on load
    const rect = hero.getBoundingClientRect();
    if (rect.top <= 0 && rect.bottom >= window.innerHeight * 0.12) show();
  });
});

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onMouseMove);
  gsap.ticker.remove(tick);
  ctx?.revert();
  document.body.classList.remove('cursor-custom');
});

// ── Transition API ──────────────────────────────────────────────
// Called by the nav controller just before the blob expands.
// All elements converge toward the click origin and fade away so the
// blob feels like it's gathering from the gallery rather than replacing it.
function collapse(x: number, y: number) {
  const dot = cursorDot.value;
  if (dot) {
    gsap.to(dot, {
      opacity: 0,
      scale: 0.3,
      duration: 0.25,
      ease: 'power3.in',
    });
  }
  trailEls.forEach((el, i) => {
    if (!el) return;
    gsap.to(el, {
      opacity: 0,
      scale: 0.25,
      duration: 0.22 + i * 0.015,
      delay: i * 0.012,
      ease: 'power3.in',
    });
  });
}

// Called by the nav controller after the blob retracts.
// Fades the gallery back in only if ScrollTrigger has decided it should
// be visible (i.e. we're in the hero zone on the home page).
function restore() {
  if (!isVisible) return;
  const dot = cursorDot.value;
  if (dot) {
    gsap.to(dot, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: 'power2.out',
      delay: 0.12,
    });
  }
  trailEls.forEach((el, i) => {
    if (!el) return;
    gsap.to(el, {
      opacity: TRAIL_CFG[i]!.opacity,
      scale: 1,
      duration: 0.55,
      delay: 0.08 + i * 0.03,
      ease: 'power2.out',
    });
  });
}

defineExpose({ collapse, restore });
</script>

<style scoped>
/* ─── Cursor dot ────────────────────────────────────────────── */
.cursor-dot {
  position: fixed;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #262624;
  pointer-events: none;
  z-index: 9998;
  mix-blend-mode: difference;
  will-change: transform;
  opacity: 0;
}

/* ─── Ribbon trail cards ────────────────────────────────────── */
.cursor-trail-item {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  overflow: hidden;
  will-change: transform, opacity;
  opacity: 0;
}

.cursor-trail-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
  -webkit-user-drag: none;
  display: block;
}
</style>
