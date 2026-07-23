<template>
  <section
    id="gallery"
    ref="section"
    class="relative w-full overflow-hidden bg-[#F5F2EC] z-20"
  >
    <div class="sticky top-0 h-screen flex items-center overflow-hidden">
      <p
        class="absolute top-10 left-6 lg:left-12 font-sans text-xs uppercase tracking-[0.3em] text-stone-400 z-10"
      >
        Experience
      </p>

      <div
        ref="track"
        class="flex flex-row gap-6 pl-[10vw] will-change-transform"
        style="width: max-content"
      >
        <div
          v-for="(img, i) in images"
          :key="i"
          class="relative flex-shrink-0 overflow-hidden"
          style="width: 32vw; max-width: 420px; aspect-ratio: 4/5"
        >
          <div
            class="absolute inset-0 flex flex-col items-start justify-end p-6"
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
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const section = ref<HTMLElement | null>(null);
const track = ref<HTMLElement | null>(null);

const images = [
  {
    src: '/images/oldborn-03.png',
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
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
  });
});

onBeforeUnmount(() => ctx?.revert());
</script>
