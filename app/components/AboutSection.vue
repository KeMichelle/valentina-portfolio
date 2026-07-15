<template>
  <section
    id="about"
    ref="section"
    class="relative z-10 w-full overflow-visible py-32 lg:py-48"
    style="background-color: #F5F2EC;"
  >
    <div
      ref="flowerContainer"
      class="absolute left-[-2vw] bottom-[-5vh] h-[65vh] w-[30vw] max-w-[400px] z-0 pointer-events-none text-[#7A7E63]/30"
    >
      <AnimatedFlowers class="w-full h-full" />
    </div>

    <div class="mx-auto max-w-screen-xl px-6 lg:px-12">

      <!-- Row 1 -->
      <div class="grid grid-cols-12 gap-x-6 mb-16 lg:mb-24">
        <p class="col-start-1 col-span-2 self-end font-sans text-xs uppercase tracking-[0.3em] text-stone-400 pb-1">
          Chapter I
        </p>

        <h2
          ref="titleEl"
          class="col-start-3 col-span-10 lg:col-start-3 lg:col-span-7
                 font-serif leading-[1.05] tracking-tight text-stone-900"
          style="font-size: clamp(2.4rem, 5.5vw, 5.5rem);"
        >
          La luce non si cattura —<br />
          si sente.
        </h2>
      </div>

      <!-- Row 2 -->
      <div class="grid grid-cols-12 gap-x-6 items-start">

        <div class="col-start-1 col-span-5 -mt-12 relative z-20">
          <NuxtImg
            src="/images/about-01.jpg"
            format="webp"
            width="640"
            height="800"
            class="w-full h-auto object-cover"
          />
        </div>

        <div ref="bioEl" class="col-start-6 col-span-4 pt-24 flex flex-col gap-8">
          <p class="font-sans text-base lg:text-lg leading-relaxed text-stone-700 font-light">
            Sono Valentina, fotografa tra Brescia e il lago.
          </p>

          <p class="font-sans text-base lg:text-lg leading-relaxed text-stone-700 font-light">
            Racconto maternità, neonati, famiglie e momenti autentici.
          </p>

          <p class="font-sans text-base lg:text-lg leading-relaxed text-stone-700 font-light">
            Lavoro con luce naturale, silenzio e gesti veri.
          </p>

          <p class="font-sans text-base lg:text-lg leading-relaxed text-stone-700 font-light">
            Non costruisco scene: le osservo accadere.
          </p>
        </div>

        <div class="col-start-10 col-span-3 -ml-8 mt-16 relative z-20">
          <NuxtImg
            src="/images/about-02.jpg"
            format="webp"
            width="400"
            height="560"
            class="w-full h-auto object-cover"
          />
        </div>

      </div>

      <!-- Row 3 -->
      <div class="grid grid-cols-12 gap-x-6 mt-20 lg:mt-32 items-end">

        <blockquote
          ref="quoteEl"
          class="col-start-2 col-span-6 lg:col-span-5
                 font-serif italic text-stone-500 leading-snug"
          style="font-size: clamp(1.5rem, 3vw, 2.8rem);"
        >
          “Voglio che vi dimentichiate della macchina fotografica.”
        </blockquote>

        <div class="col-start-8 col-span-5 -mt-32 relative z-20">
          <NuxtImg
            src="/images/about-03.jpg"
            format="webp"
            width="560"
            height="720"
            class="w-full h-auto object-cover"
          />
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimatedFlowers from '~/components/AnimatedFlowers.vue'

gsap.registerPlugin(ScrollTrigger)

const section = ref<HTMLElement | null>(null)
const flowerContainer = ref<HTMLElement | null>(null)

const titleEl = ref<HTMLElement | null>(null)
const bioEl = ref<HTMLElement | null>(null)
const quoteEl = ref<HTMLElement | null>(null)

let ctx: gsap.Context

onMounted(() => {
  if (!section.value) return

  ctx = gsap.context(() => {

    // FLOWER DRAW (fix timing)
    const svgEl = flowerContainer.value?.querySelector('svg')

    if (svgEl) {
      const paths = Array.from(svgEl.querySelectorAll('path'))

      paths.forEach((path) => {
        const len = path.getTotalLength()
        path.style.fill = 'none'
        path.style.stroke = 'currentColor'
        path.style.strokeWidth = '1'
        path.style.strokeDasharray = String(len)
        path.style.strokeDashoffset = String(len)
      })

      gsap.to(paths, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: section.value,
          start: 'top 80%',
          end: 'bottom top',
          scrub: 1,
        },
      })
    }

    // FLOWER MOTION (single clean tween)
    if (flowerContainer.value) {
      gsap.to(flowerContainer.value, {
        y: -40,
        x: 15,
        scale: 1.03,
        ease: 'none',
        scrollTrigger: {
          trigger: section.value,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })
    }

    // TEXT FIX (visible + earlier trigger)
    gsap.fromTo(
      titleEl.value,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: section.value,
          start: 'top 75%',
          end: 'bottom 25%',
          scrub: 0.6,
        },
      }
    )

    gsap.fromTo(
      bioEl.value,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: section.value,
          start: 'top 70%',
          end: 'bottom 30%',
          scrub: 0.8,
        },
      }
    )

    gsap.fromTo(
      quoteEl.value,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: section.value,
          start: 'top 60%',
          end: 'bottom 10%',
          scrub: 0.8,
        },
      }
    )

    ScrollTrigger.refresh()
  })
})

onBeforeUnmount(() => ctx?.revert())
</script>