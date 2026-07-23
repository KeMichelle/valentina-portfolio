<template>
  <section
    ref="gridSection"
    class="relative z-10 w-full pb-24 lg:pb-32"
    style="background-color: #262624"
  >
    <div class="mx-auto max-w-screen-xl px-6 lg:px-12">
      <!-- Header -->
      <div
        class="flex items-end justify-between pt-12 pb-12 lg:pb-16 border-t border-stone-800"
      >
        <h2
          ref="gridTitle"
          class="font-serif text-white leading-none tracking-tight"
          style="font-size: clamp(1.4rem, 2.5vw, 2.5rem); opacity: 0"
        >
          Tutti i Servizi
        </h2>
        <NuxtLink
          to="/contact"
          class="cta-link magnetic font-sans text-xs uppercase tracking-[0.25em] text-stone-500 border-b border-stone-700 pb-0.5 hover:text-white hover:border-white transition-colors duration-300"
        >
          Richiedi un preventivo
        </NuxtLink>
      </div>

      <!-- Grid — each card reveals with a clip-path wipe on scroll -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px"
        style="background-color: #333330"
      >
        <NuxtLink
          v-for="service in services"
          :key="service.id"
          :to="`/services/${service.slug}`"
          class="grid-card group relative aspect-[4/5] overflow-hidden transition-transform duration-500 ease-out hover:-translate-y-1"
        >
          <NuxtImg
            :src="service.cover"
            :alt="service.title"
            width="900"
            height="1100"
            format="webp"
            loading="lazy"
            class="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div
            class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition duration-500 group-hover:from-black/60"
          />

          <div class="absolute inset-x-0 bottom-0 p-7">
            <p
              class="text-[11px] uppercase tracking-[0.3em] text-stone-300 mb-2"
            >
              {{ service.category }}
            </p>
            <h3
              class="font-serif text-white leading-none"
              style="font-size: clamp(1.6rem, 2vw, 2.2rem)"
            >
              {{ service.title }}
            </h3>
            <div class="flex items-center justify-between mt-5">
              <span class="font-serif text-stone-200 text-lg">
                {{ service.pricing[0]?.price }}
              </span>
              <span
                class="uppercase tracking-[0.25em] text-xs text-white opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
              >
                Scopri →
              </span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useServices } from '~/composables/useServices';

gsap.registerPlugin(ScrollTrigger);

const { services } = useServices();
const gridSection = ref<HTMLElement | null>(null);
const gridTitle = ref<HTMLElement | null>(null);

let ctx: gsap.Context;

onMounted(() => {
  if (!gridSection.value) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) {
    if (gridTitle.value) gsap.set(gridTitle.value, { opacity: 1 });
    return;
  }

  ctx = gsap.context(() => {
    // ── TITLE REVEAL ─────────────────────────────────────────
    gsap.fromTo(
      gridTitle.value,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gridSection.value,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      },
    );

    // ── CARD STAGGERED CLIP-PATH REVEAL ──────────────────────
    // Cards reveal with a wave effect as the grid enters view
    const cards = gsap.utils.toArray<HTMLElement>(
      gridSection.value!.querySelectorAll('.grid-card'),
    );

    gsap.fromTo(
      cards,
      { clipPath: 'inset(0 0 100% 0)' },
      {
        clipPath: 'inset(0 0 0% 0)',
        duration: 1.0,
        ease: 'power3.out',
        stagger: { each: 0.08, from: 'start' },
        scrollTrigger: {
          trigger: gridSection.value,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      },
    );
  });

  // ── MAGNETIC CTA ──────────────────────────────────────────
  const cta = gridSection.value.querySelector<HTMLElement>('.cta-link');
  if (cta) {
    cta.addEventListener('mousemove', (e) => {
      const r = cta.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      gsap.to(cta, {
        x: dx * 0.3,
        y: dy * 0.3,
        duration: 0.35,
        ease: 'power2.out',
      });
    });
    cta.addEventListener('mouseleave', () => {
      gsap.to(cta, {
        x: 0,
        y: 0,
        duration: 0.55,
        ease: 'elastic.out(1, 0.45)',
      });
    });
  }
});

onBeforeUnmount(() => ctx?.revert());
</script>
