<template>
  <section
    id="work"
    ref="section"
    class="relative z-10 w-full"
    style="background-color: #262624;"
  >
    <!-- Section header -->
    <div class="mx-auto max-w-screen-xl px-6 lg:px-12 pt-24 pb-12 flex items-end justify-between">
      <h2
        class="font-serif text-white leading-none tracking-tight"
        style="font-size: clamp(2rem, 4vw, 4rem);"
      >
        The Chapters
      </h2>
      <p class="font-sans text-xs uppercase tracking-[0.3em] text-stone-400 pb-1">
        Services
      </p>
    </div>

    <!-- Sticky card stack — 3 cards × 100vh each + exit space -->
    <div class="relative" style="height: calc(300vh + 100vh);">
      <div
        v-for="(service, i) in featuredServices"
        :key="service.id"
        class="sticky top-0 h-screen w-full overflow-hidden"
        :style="`z-index: ${i + 1};`"
      >
        <NuxtLink
  :to="`/services/${service.slug}`"
  class="group block relative w-full h-full"
>
  <NuxtImg
    :src="service.cover"
    format="webp"
    width="1920"
    height="1080"
    :alt="service.title"
    class="service-img absolute inset-0 w-full h-full object-cover will-change-transform"
    loading="lazy"
  />

  <div class="absolute inset-0 bg-black/40" />

  <div class="absolute inset-0 flex flex-col justify-end px-10 pb-16 lg:px-20 lg:pb-20">

    <p class="service-tag font-sans text-xs uppercase tracking-[0.3em] text-stone-300 mb-3">
      {{ service.heroTag }}
    </p>

    <h3
      class="service-title font-serif text-white leading-none tracking-tight"
      style="font-size: clamp(3rem, 7vw, 7.5rem);"
    >
      {{ service.title }}
    </h3>

    <p class="service-text mt-4 font-sans text-sm text-stone-300 font-light max-w-md leading-relaxed">
      {{ service.excerpt }}
    </p>

    <span class="mt-8 self-start font-sans text-xs uppercase tracking-[0.25em] text-white border-b border-white/50 pb-0.5">
      Scopri
    </span>

  </div>
</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useServices } from '~/composables/useServices'

gsap.registerPlugin(ScrollTrigger)

const { featuredServices } = useServices()
const section = ref<HTMLElement | null>(null)

let ctx: gsap.Context

onMounted(() => {
  if (!section.value) return

  ctx = gsap.context(() => {
    const cards = gsap.utils.toArray<HTMLElement>(
      section.value!.querySelectorAll('.sticky.top-0.h-screen')
    )

    cards.forEach((card, i) => {

      const img = card.querySelector('.service-img')
      const title = card.querySelector('.service-title')
      const text = card.querySelector('.service-text')
      const tag = card.querySelector('.service-tag')

      // ─────────────────────────────
      // PARALLAX + SCALE IMMAGINE
      // ─────────────────────────────
      gsap.fromTo(
        img,
        {
          scale: 1.08,
          y: -30,
        },
        {
          scale: 1,
          y: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      )

      // ─────────────────────────────
      // ANIMAZIONE TESTO
      // ─────────────────────────────
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top 70%',
          end: 'top 30%',
          toggleActions: 'play none none reverse',
        },
      })

      tl.fromTo(
        tag,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
      )
        .fromTo(
          title,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.3'
        )
        .fromTo(
          text,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.4'
        )
    })
  })
})

onBeforeUnmount(() => ctx?.revert())
</script>
