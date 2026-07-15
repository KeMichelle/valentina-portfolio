<template>
  <section id="hero" class="relative z-10 h-screen w-full overflow-hidden">
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
      style="opacity: 0;"
      aria-hidden="true"
    />

    <div class="absolute inset-0 flex items-center justify-center px-6 text-center">
      <h1
        ref="headline"
        class="font-serif text-white leading-none tracking-tight"
        style="font-size: clamp(3.5rem, 10vw, 10rem);"
      >
        Where Light<br />Tells Stories
      </h1>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const headline = ref<HTMLElement | null>(null)
const overlay  = ref<HTMLElement | null>(null)

let ctx: gsap.Context

onMounted(() => {
  const section = document.getElementById('hero')
  if (!section || !headline.value || !overlay.value) return

  ctx = gsap.context(() => {
    gsap.to(headline.value, {
      yPercent: -100,
      ease: 'none',
      scrollTrigger: { trigger: section, start: 'top top', end: 'bottom top', scrub: true },
    })
    gsap.to(overlay.value, {
      opacity: 1,
      ease: 'none',
      scrollTrigger: { trigger: section, start: 'top top', end: 'bottom top', scrub: true },
    })
  })
})

onBeforeUnmount(() => ctx?.revert())
</script>
