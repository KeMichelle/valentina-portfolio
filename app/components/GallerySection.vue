<template>
  <section
    id="gallery"
    ref="section"
    class="relative w-full overflow-hidden bg-[#F5F2EC] z-20"
  >
    <!-- FIX 1: Changed h-[100dvh] back to h-screen so it stops resizing while pinned -->
    <div class="sticky top-0 h-screen flex items-center overflow-hidden">
      <p
        class="absolute top-10 left-6 lg:left-12 font-sans text-xs uppercase tracking-[0.3em] text-stone-400 z-10"
      >
        Experience
      </p>

      <!-- Mobile Scroll Cue -->
      <div
        class="absolute bottom-12 left-6 flex items-center gap-3 md:hidden z-20 transition-opacity duration-500"
        :class="hasScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'"
      >
        <span
          class="text-[0.65rem] font-sans uppercase tracking-[0.2em] text-stone-500"
        >
          Scroll
        </span>
        <svg
          class="w-3 h-3 text-stone-500 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>

      <!-- Gallery Track -->
      <div
        ref="track"
        class="flex flex-row gap-4 md:gap-6 pl-[8vw] lg:pl-[10vw] will-change-transform"
        style="width: max-content"
      >
        <div
          v-for="(img, i) in images"
          :key="i"
          class="relative flex-shrink-0 overflow-hidden w-[75vw] md:w-[45vw] lg:w-[32vw] max-w-[420px] aspect-[4/5]"
        >
          <div
            class="absolute inset-0 flex flex-col items-start justify-end p-5 lg:p-6"
            :style="`background-color: ${img.placeholder};`"
            aria-hidden="true"
          >
            <span
              class="font-sans text-[0.6rem] uppercase tracking-[0.3em] text-white/40 mb-2"
            >
              {{ String(i + 1).padStart(2, '0') }} / {{ images.length }}
            </span>
            <span
              class="font-serif text-white/70 leading-none"
              style="font-size: clamp(1.4rem, 2.5vw, 2.2rem)"
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
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// It is safe to register the plugin at the top level
gsap.registerPlugin(ScrollTrigger);

const section = ref<HTMLElement | null>(null);
const track = ref<HTMLElement | null>(null);
const hasScrolled = ref(false);

const images = [
  {
    src: '/images/oldborn-03.jpg',
    alt: 'Newborn',
    label: 'Newborn',
    placeholder: '#EDE9E3',
  },
  {
    src: '/images/details-01.jpg',
    alt: 'Maternità',
    label: 'Maternity',
    placeholder: '#EDE9E3',
  },
  {
    src: '/images/smash-cake-03.jpg',
    alt: 'Newborn',
    label: 'Newborn',
    placeholder: '#EDE9E3',
  },
  {
    src: '/images/maternity-02.jpg',
    alt: 'Maternità',
    label: 'Maternity',
    placeholder: '#EDE9E3',
  },
  {
    src: '/images/newborn-01.jpg',
    alt: 'Newborn',
    label: 'Newborn',
    placeholder: '#EDE9E3',
  },
  {
    src: '/images/nature-01.jpg',
    alt: 'Maternità',
    label: 'Maternity',
    placeholder: '#EDE9E3',
  },
  {
    src: '/images/oldborn-04.jpg',
    alt: 'Newborn',
    label: 'Newborn',
    placeholder: '#EDE9E3',
  },
  {
    src: '/images/details-02.jpg',
    alt: 'Maternità',
    label: 'Maternity',
    placeholder: '#EDE9E3',
  },
];

let ctx: gsap.Context;

onMounted(() => {
  // FIX: Run these only in the browser (client-side) once mounted
  ScrollTrigger.normalizeScroll(true);
  ScrollTrigger.config({ ignoreMobileResize: true });

  if (!section.value || !track.value) return;

  ctx = gsap.context(() => {
    const getDistance = () => track.value!.scrollWidth - window.innerWidth;

    gsap.to(track.value, {
      x: () => -getDistance(),
      ease: 'none',
      scrollTrigger: {
        trigger: section.value,
        start: 'top top',
        end: () => `+=${getDistance()}`,
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          hasScrolled.value = self.progress > 0.02;
        },
      },
    });
  });
});

onBeforeUnmount(() => ctx?.revert());
</script>
