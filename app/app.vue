<template>
  <div class="bg-cream text-charcoal font-sans antialiased">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <!-- No transition prop — the blob navigation controller owns the sequence -->
      <NuxtPage />
    </NuxtLayout>

    <!-- Blob overlay — expanded before router.push(), retracted after mount -->
    <BlobTransition ref="blobRef" />

    <!-- Cursor gallery — active in the hero zone only -->
    <CursorGallery ref="cursorGalleryRef" />
  </div>
</template>

<script setup lang="ts">
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BlobTransition from '~/components/BlobTransition.vue';
import CursorGallery from '~/components/CursorGallery.vue';

gsap.registerPlugin(ScrollTrigger);

// ── Smooth scroll ────────────────────────────────────────────────
const lenis = ref<Lenis | null>(null);

onMounted(() => {
  lenis.value = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true,
  });

  // Expose on window so default.vue smart nav can call lenis.scrollTo()
  (window as any).__lenis = lenis.value;

  function raf(time: number) {
    lenis.value?.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Mark as visited — child onMounted hooks run first, so they read the
  // correct "is first visit?" value before we write the flag here.
  localStorage.setItem('v-visited', '1');
});

onBeforeUnmount(() => {
  lenis.value?.destroy();
});

// ── Component refs ───────────────────────────────────────────────
const blobRef = ref<InstanceType<typeof BlobTransition> | null>(null);
const cursorGalleryRef = ref<InstanceType<typeof CursorGallery> | null>(null);

// ── Navigation controller ────────────────────────────────────────
// Coordinates of the click that last triggered a navigation.
// Consumed once per guard invocation; back/forward falls back to center.
let pendingClickOrigin: { x: number; y: number } | null = null;

// Whether the blob is currently mid-sequence (expand → navigate → retract).
// Prevents re-entrancy if a second navigation fires before the first completes.
let isNavigating = false;

if (import.meta.client) {
  // Capture the cursor position before every click so beforeEach can read it.
  window.addEventListener(
    'click',
    (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href]');
      if (anchor) {
        pendingClickOrigin = { x: e.clientX, y: e.clientY };
      }
    },
    true,
  );
}

const router = useRouter();

// STEP 1 — Intercept every cross-page navigation, expand blob, THEN allow it.
// Being async means Vue Router waits for the Promise to resolve before
// performing the actual route swap — the blob is guaranteed to cover the
// viewport before the new page ever renders.
router.beforeEach(async (to, from) => {
  // Same-path navigations are hash scrolls or query changes — skip blob.
  if (to.path === from.path) return true;

  // Blob not yet mounted (e.g. initial SSR hydration pass) — skip.
  if (!blobRef.value) return true;

  // Already animating — let the second navigation through undecorated.
  if (isNavigating) return true;

  isNavigating = true;
  lenis.value?.stop();

  const origin = pendingClickOrigin ?? {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  };
  pendingClickOrigin = null; // consume so back/forward never reuses a stale coord

  // Gallery converges toward the click point as the blob begins expanding.
  // Runs concurrently — finishes well before the blob covers the screen.
  cursorGalleryRef.value?.collapse(origin.x, origin.y);

  // Await full viewport coverage — router.push() fires only after this resolves.
  await new Promise<void>((resolve) => {
    blobRef.value!.expand(origin.x, origin.y, resolve);
  });

  return true; // proceed with navigation; new page renders behind the blob
});

// STEP 2 — After the new route is committed and components are mounted,
// reset scroll, refresh ScrollTrigger, then retract the blob to reveal the page.
router.afterEach(async (_to, _from, failure) => {
  // Navigation was cancelled or errored — clean up and restore scroll.
  if (failure) {
    blobRef.value?.retract(() => {
      lenis.value?.start();
      cursorGalleryRef.value?.restore();
    });
    isNavigating = false;
    return;
  }

  // Guard fired without blob expansion (initial load, same-path nav, etc.).
  if (!isNavigating) return;

  // afterEach fires before components mount. Wait for the full tree.
  await nextTick();
  await new Promise<void>((r) => requestAnimationFrame(() => r()));
  await new Promise<void>((r) => requestAnimationFrame(() => r()));

  // Reset scroll position while the blob still covers everything.
  window.scrollTo(0, 0);
  if (lenis.value) {
    (lenis.value as any).scrollTo(0, { immediate: true, force: true });
  }

  // Recalculate every ScrollTrigger for the incoming page layout.
  ScrollTrigger.refresh(true);

  // One extra frame so GSAP settles all scrub positions.
  await new Promise<void>((r) => requestAnimationFrame(() => r()));

  // Retract the blob to reveal the fully-ready page, then re-enable scrolling.
  blobRef.value?.retract(() => {
    isNavigating = false;
    lenis.value?.start();
    // Soft reappear — only fires if ScrollTrigger placed us in the hero zone.
    cursorGalleryRef.value?.restore();
  });
});
</script>
