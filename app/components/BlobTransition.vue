<template>
  <Teleport to="body">
    <div ref="blob" class="blob-overlay" aria-hidden="true" />
  </Teleport>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';

const blob = ref<HTMLElement | null>(null);

// Track whether blob is currently covering the screen
let isActive = false;

/**
 * Expand the blob from (x, y) click coordinates until it fills the viewport,
 * then call done() so Vue can swap the outgoing page with the incoming one.
 *
 * Feel: ink drop placed on paper — a brief surface tension beat, then a
 * confident, slow-then-fast spread that settles into full coverage.
 */
function expand(x: number, y: number, done: () => void, duration = 0.9) {
  if (!blob.value) {
    done();
    return;
  }

  gsap.killTweensOf(blob.value);

  const seed = 10;

  const maxDist = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y),
  );

  // Add 2% to guarantee no viewport gap at any scale
  const scale = Math.ceil((maxDist * 2.2) / seed) * 1.02;

  gsap.set(blob.value, {
    x: x - seed / 2,
    y: y - seed / 2,
    scale: 0,
    opacity: 1,
    rotation: -4,
  });

  isActive = true;
  blob.value.style.pointerEvents = 'auto';

  const tl = gsap.timeline({
    // Hold 65 ms after full coverage — viewer registers the change
    onComplete: () => setTimeout(done, 65),
  });

  // ── Phase 1: surface-tension beat ──
  // The ink drop swells slightly before it commits to spreading.
  // 90 ms, very subtle — felt more than seen.
  tl.to(blob.value, {
    scale: 0.9,
    duration: 0.09,
    ease: 'power2.out',
  });

  // ── Phase 2: full expansion ──
  // expo.inOut: almost-still start → fast middle → graceful deceleration.
  // Rotation adds the organic quality — at small scale it reads as a slight
  // spin, at full scale it's invisible and costs nothing.
  tl.to(
    blob.value,
    {
      scale,
      rotation: 45,
      borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
      duration,
      ease: 'expo.inOut',
    },
    '<0.05', // begin 50 ms into phase 1 — avoids a dead frame
  );
}

/**
 * Reveal the incoming page by fading the blob away.
 * A subtle upward drift — like a curtain being lifted — gives
 * the reveal directionality without drawing attention to itself.
 */
function retract(done: () => void, duration = 0.65) {
  if (!blob.value || !isActive) {
    done();
    return;
  }

  gsap.killTweensOf(blob.value);

  gsap.to(blob.value, {
    opacity: 0,
    y: '-=32', // curtain lifts 32 px — imperceptible at full scale,
    duration, // but gives the fade a sense of physical direction
    ease: 'power3.inOut',
    onComplete: () => {
      gsap.set(blob.value!, { scale: 0, y: 0, borderRadius: '50%' });
      blob.value!.style.pointerEvents = 'none';
      isActive = false;
      done();
    },
  });
}

defineExpose({ expand, retract });
</script>

<style scoped>
.blob-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(245, 242, 236, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  pointer-events: none;
  z-index: 9999;
  opacity: 0;
  will-change: transform, opacity, backdrop-filter;
  /* Soft depth: outer glow for the lit-from-within feel at small scale,
     drop shadow for perceived weight as it spreads across the page. */
  box-shadow:
    0 0 0 1px rgba(245, 242, 236, 0.06),
    0 0 80px 24px rgba(245, 242, 236, 0.1),
    0 16px 100px -8px rgba(0, 0, 0, 0.22);
}
</style>
