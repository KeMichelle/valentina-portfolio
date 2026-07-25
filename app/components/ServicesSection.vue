<template>
  <section
    id="work"
    ref="section"
    class="relative z-10 w-full"
    style="background-color: #262624"
  >
    <!-- Section header -->
    <div
      class="mx-auto max-w-screen-xl px-6 lg:px-12 pt-24 pb-12 flex items-end justify-between"
    >
      <h2
        ref="sectionTitle"
        class="font-serif text-white leading-none tracking-tight"
        style="font-size: clamp(2rem, 4vw, 4rem); opacity: 0"
      >
        The Chapters
      </h2>
      <p
        class="font-sans text-xs uppercase tracking-[0.3em] text-stone-400 pb-1"
      >
        Services
      </p>
    </div>

    <!-- Unified sticky stack — single scroll axis (Lenis / window) on all screen sizes -->
    <div class="services-stack relative h-[calc(300dvh+100dvh)]">
      <div
        v-for="(service, i) in featuredServices"
        :key="service.id"
        class="service-card sticky top-0 h-[100dvh] w-full overflow-hidden"
        :style="`z-index: ${i + 1};`"
      >
        <NuxtLink
          :to="`/services/${service.slug}`"
          class="group block relative w-full h-full"
        >
          <!-- Using object-cover automatically resizes the image to fit the vertical container on phone -->
          <NuxtImg
            :src="service.cover"
            format="webp"
            width="1920"
            height="1080"
            :alt="service.title"
            class="service-img absolute inset-0 w-full h-full object-cover lg:will-change-transform"
            loading="lazy"
          />

          <!-- Gradient overlay -->
          <div class="absolute inset-0 bg-black/40" />

          <!-- Content padding -->
          <div
            class="absolute inset-0 flex flex-col justify-end px-8 pb-12 md:px-12 md:pb-16 lg:px-20 lg:pb-20"
          >
            <p
              class="service-tag font-sans text-xs uppercase tracking-[0.3em] text-stone-300 mb-2 md:mb-3"
            >
              {{ service.heroTag }}
            </p>

            <h3
              class="service-title font-serif text-white leading-none tracking-tight"
              style="font-size: clamp(2.2rem, 8vw, 5.5rem)"
            >
              {{ service.title }}
            </h3>

            <p
              class="service-text mt-3 md:mt-4 font-sans text-sm text-stone-300 font-light max-w-md leading-relaxed"
            >
              {{ service.excerpt }}
            </p>

            <span
              class="scopri-btn lg:magnetic mt-6 md:mt-8 self-start font-sans text-xs uppercase tracking-[0.25em] text-white border-b border-white/50 pb-0.5"
            >
              Scopri
            </span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useServices } from '~/composables/useServices';

gsap.registerPlugin(ScrollTrigger);

const { featuredServices } = useServices();
const section = ref<HTMLElement | null>(null);
const sectionTitle = ref<HTMLElement | null>(null);

let mm: gsap.MatchMedia;

onMounted(() => {
  if (!section.value) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  mm = gsap.matchMedia();

  // ── 1. GLOBAL TITLE REVEAL (All devices) ──────────────────────────
  mm.add('all', () => {
    if (sectionTitle.value) {
      gsap.fromTo(
        sectionTitle.value,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section.value,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        },
      );
    }
  });

  if (reduced) return;

  // ── 2. DESKTOP ANIMATIONS (Heavy Parallax & Scrub) ────────────────
  mm.add('(min-width: 1024px)', () => {
    const cards = gsap.utils.toArray<HTMLElement>('.service-card');

    cards.forEach((card) => {
      const img = card.querySelector('.service-img');
      const title = card.querySelector('.service-title');
      const text = card.querySelector('.service-text');
      const tag = card.querySelector('.service-tag');

      // Image Parallax
      if (img) {
        gsap.fromTo(
          img,
          { scale: 1.08, y: -30 },
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
          },
        );
      }

      // Text Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top 70%',
          end: 'top 30%',
          toggleActions: 'play none none reverse',
        },
      });

      if (tag && title && text) {
        tl.fromTo(
          tag,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        )
          .fromTo(
            title,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
            '-=0.3',
          )
          .fromTo(
            text,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
            '-=0.4',
          );
      }
    });

    // Magnetic Buttons (Desktop Only)
    const btns = section.value!.querySelectorAll<HTMLElement>('.scopri-btn');
    btns.forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const r = btn.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        gsap.to(btn, {
          x: dx * 0.28,
          y: dy * 0.28,
          duration: 0.35,
          ease: 'power2.out',
        });
      });
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.55,
          ease: 'elastic.out(1, 0.45)',
        });
      });
    });
  });

  // ── 3. MOBILE ANIMATIONS (Lightweight Text Fade-up + GSAP Snap) ──────────
  mm.add('(max-width: 1023px)', () => {
    const cards = gsap.utils.toArray<HTMLElement>('.service-card');
    const stack = section.value!.querySelector<HTMLElement>('.services-stack');

    // GSAP snap — single scroll axis, no nested containers, works with Lenis
    if (stack && cards.length > 1) {
      ScrollTrigger.create({
        trigger: stack,
        start: 'top top',
        end: `+=${(cards.length - 1) * 100}%`,
        snap: {
          snapTo: 1 / (cards.length - 1),
          duration: { min: 0.2, max: 0.5 },
          ease: 'power2.inOut',
          delay: 0.05,
        },
      });
    }

    cards.forEach((card) => {
      // Select the inner text elements instead of the whole card
      const title = card.querySelector('.service-title');
      const text = card.querySelector('.service-text');
      const tag = card.querySelector('.service-tag');
      const btn = card.querySelector('.scopri-btn');

      gsap.fromTo(
        [tag, title, text, btn],
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1, // Fades them in one after the other
          ease: 'power3.out',
          force3D: true,
          scrollTrigger: {
            trigger: card,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        },
      );
    });
  });
});

onBeforeUnmount(() => {
  mm?.revert();
});
</script>
