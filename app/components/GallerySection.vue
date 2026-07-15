<template>
  <section
    id="gallery"
    ref="section"
    class="relative w-full overflow-hidden bg-[#F5F2EC] z-20"
  >
    <div class="sticky top-0 h-screen flex items-center overflow-hidden">
      <p class="absolute top-10 left-6 lg:left-12 font-sans text-xs uppercase tracking-[0.3em] text-stone-400 z-10">
        Experience
      </p>

      <div
        ref="track"
        class="flex flex-row gap-6 pl-[10vw] will-change-transform"
        style="width: max-content;"
      >
        <div
          v-for="(img, i) in images"
          :key="i"
          class="relative flex-shrink-0 overflow-hidden"
          style="width: 32vw; max-width: 420px; aspect-ratio: 4/5;"
        >
          <div
            class="absolute inset-0 flex flex-col items-start justify-end p-6"
            :style="`background-color: ${img.placeholder};`"
            aria-hidden="true"
          >
            <span class="font-sans text-[0.6rem] uppercase tracking-[0.3em] text-white/40 mb-2">
              {{ String(i + 1).padStart(2, '0') }} / {{ images.length }}
            </span>
            <span
              class="font-serif text-white/70 leading-none"
              style="font-size: clamp(1.4rem, 2.5vw, 2.2rem);"
            >
              {{ img.label }}
            </span>
          </div>

          <NuxtImg
            :src="img.src"
            format="webp"
            width="840"
            height="1050"
            :alt="img.alt"
            class="relative w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const section = ref<HTMLElement | null>(null)
const track   = ref<HTMLElement | null>(null)

const images = [
  { src: '/images/gallery-01.jpg', alt: 'Portfolio image — maternità', label: 'Portfolio I',   placeholder: '#7A7E63' },
  { src: '/images/gallery-02.jpg', alt: 'Portfolio image — neonati',   label: 'Portfolio II',  placeholder: '#8C7B6B' },
  { src: '/images/gallery-03.jpg', alt: 'Portfolio image — famiglia',  label: 'Portfolio III', placeholder: '#6B7C7A' },
  { src: '/images/gallery-04.jpg', alt: 'Portfolio image — bambini',   label: 'Portfolio IV',  placeholder: '#7E6B6B' },
  { src: '/images/gallery-05.jpg', alt: 'Portfolio image — ritratto',  label: 'Portfolio V',   placeholder: '#6B7473' },
  { src: '/images/gallery-06.jpg', alt: 'Portfolio image — outdoor',   label: 'Portfolio VI',  placeholder: '#76746B' },
]

let ctx: gsap.Context

onMounted(() => {
  if (!section.value || !track.value) return

  ctx = gsap.context(() => {
    const getDistance = () =>
      track.value!.scrollWidth - window.innerWidth

    gsap.to(track.value, {
      x: () => -getDistance(),
      ease: "none",
      scrollTrigger: {
        trigger: section.value,
        start: "top top",
        end: () => `+=${getDistance()}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    })
  })
})

onBeforeUnmount(() => ctx?.revert())
</script>
