<template>
  <section
    id="hero"
    class="relative z-10 w-full overflow-hidden bg-charcoal h-[100dvh]"
  >
    <video
      ref="bgVideo"
      class="absolute inset-0 h-full w-full object-cover"
      autoplay
      loop
      muted
      playsinline
      preload="auto"
      aria-hidden="true"
    >
      <source src="/video/hero.mp4" type="video/mp4" />
    </video>

    <div
      ref="overlay"
      class="absolute inset-0 bg-black"
      style="opacity: 0"
      aria-hidden="true"
    />

    <div
      class="absolute inset-0 flex items-center justify-center px-8 md:px-12 text-center"
    >
      <h1
        ref="headline"
        class="font-serif text-white leading-none tracking-tight"
        style="font-size: clamp(3rem, 10vw, 10rem); opacity: 0"
      >
        Where Light<br />Tells Stories
      </h1>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const headline = ref<HTMLElement | null>(null);
const overlay = ref<HTMLElement | null>(null);

let ctx: gsap.Context;

onMounted(() => {
  const section = document.getElementById('hero');
  if (!section || !headline.value || !overlay.value) return;

  // Skip complex animations if user prefers reduced motion
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ── First-visit check ─────────────────────────────────────────
  // app.vue's onMounted sets 'v-visited' AFTER all children mount,
  // so this correctly reads null on the very first page load.
  const isFirstVisit = !localStorage.getItem('v-visited');

  ctx = gsap.context(() => {
    // ── Headline entrance ─────────────────────────────────────
    if (reduced) {
      gsap.set(headline.value, { opacity: 1 });
    } else if (isFirstVisit) {
      // First ever visit: cinematic rise — headline floats up with presence
      gsap.fromTo(
        headline.value,
        { opacity: 0, y: 56, filter: 'blur(8px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.5,
          delay: 0.35,
          ease: 'power3.out',
          clearProps: 'filter',
        },
      );
    } else {
      // Repeat visitor: quick, confident entrance
      gsap.fromTo(
        headline.value,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.1, ease: 'power2.out' },
      );
    }

    // ── Scroll: headline drifts up + scene fades to black ─────
    gsap.to(headline.value, {
      yPercent: -100,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.to(overlay.value, {
      opacity: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  });
});

onBeforeUnmount(() => ctx?.revert());
</script>
