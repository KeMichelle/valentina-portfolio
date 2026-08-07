<template>
  <section
    id="about"
    ref="section"
    class="relative z-10 w-full overflow-visible py-40 lg:py-56"
    style="background-color: #f5f2ec"
  >
    <div
      ref="flowerContainer"
      class="absolute left-[-3vw] top-[55%] h-[70vh] w-[26vw] max-w-[360px] z-0 pointer-events-none text-[#7A7E63]/20"
    >
      <AnimatedFlowers class="w-full h-full" />
    </div>

    <div class="mx-auto max-w-screen-xl px-6 lg:px-16 relative z-10">
      <div class="relative mb-36 lg:mb-48">
        <span
          class="absolute left-0 top-1 font-sans text-[10px] uppercase tracking-[0.4em] text-stone-400"
        >
          Chapter I
        </span>

        <h2
          ref="titleEl"
          class="pl-[14%] font-serif leading-[0.93] tracking-tight text-stone-900"
          style="font-size: clamp(3.2rem, 7vw, 8rem)"
        >
          La luce<br />non si cattura<br />
          <em class="italic">si&nbsp;sente.</em>
        </h2>

        <div
          class="absolute left-[14%] w-px bg-stone-300/70"
          style="bottom: -1.5rem; height: 2rem"
        />
      </div>

      <!-- ── ROW 1: Mobile Vertical / Desktop Grid ──────── -->
      <div
        class="flex flex-col lg:grid lg:grid-cols-12 gap-y-12 lg:gap-x-6 items-start"
      >
        <div
          ref="imgWrap1"
          class="img-reveal-wrap w-full lg:col-start-1 lg:col-span-5 relative z-10 will-change-transform"
        >
          <NuxtImg
            ref="img1"
            src="/images/about-01.jpg"
            format="webp"
            width="640"
            height="853"
            loading="lazy"
            alt="Valentina Cometti fotografa Bergamo — ritratto"
            class="w-full object-cover will-change-transform block"
            style="aspect-ratio: 3/4; height: auto"
          />
        </div>

        <div class="w-full lg:col-start-6 lg:col-span-7 relative flex flex-col">
          <div
            class="relative lg:absolute z-30 self-end w-3/4 sm:w-1/2 lg:w-[46%] mb-8 lg:mb-0 lg:-top-[7vw] lg:right-0"
          >
            <div ref="imgWrap2" class="img-reveal-wrap will-change-transform">
              <NuxtImg
                ref="img2"
                src="/images/about-02.jpg"
                format="webp"
                width="400"
                height="500"
                loading="lazy"
                alt="Valentina Cometti — fotografa di maternità e famiglia a Bergamo"
                class="w-full object-cover will-change-transform block"
                style="aspect-ratio: 4/5; height: auto"
              />
            </div>
          </div>

          <div
            ref="bioEl"
            class="relative z-20 flex flex-col gap-6 lg:gap-8 lg:pt-[10%] lg:pr-[50%] xl:pr-[48%]"
          >
            <p
              class="font-sans text-sm lg:text-[15px] leading-[2.1] text-stone-600 font-light"
            >
              Sono Valentina, un'artista che racconta il mondo attraverso la
              fotografia. Le mie fotografie raccontano storie di Bergamo,
              Brescia, Milano e ovunque una storia meriti di essere raccontata.
            </p>
            <p
              class="font-sans text-sm lg:text-[15px] leading-[2.1] text-stone-600 font-light"
            >
              Ho imparato ad osservare il mondo viaggiando. Dai boschi vicino
              casa alle foreste del Borneo, è la natura ad avermi insegnato che
              la bellezza non ha bisogno di essere costruita: esiste già,
              bisogna solo saperla vedere.
            </p>
            <p
              class="font-sans text-sm lg:text-[15px] leading-[2.0] text-stone-500 font-light italic"
            >
              Questa è la visione che troverete in ogni servizio fotografico
              fatto insieme.
            </p>
          </div>
        </div>
      </div>

      <!-- ── ROW 2: Mobile Reverse Stack / Desktop Grid ──────── -->
      <div
        class="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-y-16 lg:gap-x-6 items-start mt-20 lg:-mt-[7vw]"
      >
        <div
          class="w-full lg:col-start-1 lg:col-span-5 relative z-20 flex flex-col gap-10 lg:pt-[12vw]"
        >
          <div ref="bioEl2" class="flex flex-col gap-6 lg:gap-8">
            <p
              class="font-sans text-sm lg:text-[15px] leading-[2.1] text-stone-600 font-light"
            >
              Mi piace prendermi il tempo di conoscervi, ascoltarvi e creare uno
              spazio in cui possiate sentirvi completamente voi stessi, ma
              soprattutto coccolati. La priorità per me è farvi stare bene.
            </p>
            <p
              class="font-sans text-sm lg:text-[15px] leading-[2.1] text-stone-600 font-light"
            >
              Niente fretta, il tempo con me scorre sempre lento. Viviamo ogni
              giorno in modo frenetico e nello spazio che ricaverete insieme a
              me, vivremo un momento tranquillo e sereno.
            </p>
          </div>

          <blockquote
            ref="quoteEl"
            class="font-serif italic text-stone-500"
            style="
              font-size: clamp(1.8rem, 3vw, 3.6rem);
              line-height: 1.07;
              padding-top: 1.5rem;
            "
          >
            Se vuoi fotografie<br />poetiche e luminose,<br /><em
              >sono qui per te.</em
            >
          </blockquote>
        </div>

        <div
          class="w-full lg:col-start-7 lg:col-span-6 relative z-10 lg:translate-x-[4%] lg:rotate-[0.5deg]"
        >
          <div ref="imgWrap3" class="img-reveal-wrap will-change-transform">
            <NuxtImg
              ref="img3"
              src="/images/about-03.jpg"
              format="webp"
              width="640"
              height="800"
              loading="lazy"
              alt="Valentina Cometti fotografa — sessione fotografica Bergamo"
              class="w-full object-cover will-change-transform block"
              style="aspect-ratio: 4/5; height: auto"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedFlowers from '~/components/AnimatedFlowers.vue';

gsap.registerPlugin(ScrollTrigger);

const section = ref<HTMLElement | null>(null);
const flowerContainer = ref<HTMLElement | null>(null);
const titleEl = ref<HTMLElement | null>(null);
const bioEl = ref<HTMLElement | null>(null);
const bioEl2 = ref<HTMLElement | null>(null);
const quoteEl = ref<HTMLElement | null>(null);

const imgWrap1 = ref<HTMLElement | null>(null);
const imgWrap2 = ref<HTMLElement | null>(null);
const imgWrap3 = ref<HTMLElement | null>(null);
const img1 = ref<{ $el?: HTMLElement } | null>(null);
const img2 = ref<{ $el?: HTMLElement } | null>(null);
const img3 = ref<{ $el?: HTMLElement } | null>(null);

let ctx: gsap.Context;

// ── Hover tilt ───────────────────────────────────────────────────────────────
// GSAP preserves the base rotation set via gsap.set when updating rotateX/Y.
function setupTilt(wrap: HTMLElement, innerRef: { $el?: HTMLElement } | null) {
  const inner = innerRef?.$el as HTMLElement | null;

  wrap.addEventListener('mousemove', (e) => {
    const r = wrap.getBoundingClientRect();
    const rx = ((e.clientY - r.top) / r.height - 0.5) * -5;
    const ry = ((e.clientX - r.left) / r.width - 0.5) * 5;
    gsap.to(wrap, {
      rotateX: rx,
      rotateY: ry,
      transformPerspective: 900,
      duration: 0.45,
      ease: 'power2.out',
    });
    if (inner)
      gsap.to(inner, { scale: 1.04, duration: 0.45, ease: 'power2.out' });
  });

  wrap.addEventListener('mouseleave', () => {
    gsap.to(wrap, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.7,
      ease: 'power2.out',
    });
    if (inner) gsap.to(inner, { scale: 1, duration: 0.7, ease: 'power2.out' });
  });
}

onMounted(() => {
  if (!section.value) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  ctx = gsap.context(() => {
    // ── FLOWER PARALLAX ───────────────────────────────────────────────────────
    if (flowerContainer.value) {
      gsap.to(flowerContainer.value, {
        y: -50,
        x: -12,
        ease: 'none',
        scrollTrigger: {
          trigger: section.value,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
      });
    }

    // ── BASE ROTATION ─────────────────────────────────────────────────────────
    // Image 2 gets a permanent -1° tilt via GSAP so hover tilt preserves it.
    if (imgWrap2.value) gsap.set(imgWrap2.value, { rotation: -1 });

    // ── CLIP-PATH REVEALS ─────────────────────────────────────────────────────
    // play-once — scrolling back doesn't re-clip images already in context.
    if (!reduced) {
      const wrapEls = [imgWrap1.value, imgWrap2.value, imgWrap3.value];
      const innerRefs = [img1.value, img2.value, img3.value];
      const delays = [0, 0.18, 0.08];

      wrapEls.forEach((wrap, i) => {
        if (!wrap) return;
        const inner = innerRefs[i]?.$el as HTMLElement | null;

        gsap.fromTo(
          wrap,
          { clipPath: 'inset(100% 0 0 0)' },
          {
            clipPath: 'inset(0% 0 0 0)',
            duration: 1.3,
            delay: delays[i],
            ease: 'power4.out',
            scrollTrigger: {
              trigger: wrap,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          },
        );

        if (inner) {
          gsap.fromTo(
            inner,
            { scale: 1.12 },
            {
              scale: 1,
              duration: 1.5,
              delay: delays[i],
              ease: 'power3.out',
              scrollTrigger: {
                trigger: wrap,
                start: 'top 88%',
                toggleActions: 'play none none none',
              },
            },
          );
        }
      });
    }

    // ── IMAGE PARALLAX ────────────────────────────────────────────────────────
    // clipPath and y/x are separate CSS properties — GSAP handles both
    // on the same element without conflict.

    // Image 1: rises quickly — drives the composition upward
    if (imgWrap1.value) {
      gsap.fromTo(
        imgWrap1.value,
        { y: 50 },
        {
          y: -80,
          ease: 'none',
          scrollTrigger: {
            trigger: imgWrap1.value,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        },
      );
    }

    // Image 2: falls & drifts left — counter-motion to Image 1 creates tension
    if (imgWrap2.value) {
      gsap.fromTo(
        imgWrap2.value,
        { y: -25, x: 5 },
        {
          y: 65,
          x: -10,
          ease: 'none',
          scrollTrigger: {
            trigger: imgWrap2.value,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.9,
          },
        },
      );
    }

    // Image 3: rises at its own slower pace
    if (imgWrap3.value) {
      gsap.fromTo(
        imgWrap3.value,
        { y: 40 },
        {
          y: -60,
          ease: 'none',
          scrollTrigger: {
            trigger: imgWrap3.value,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.8,
          },
        },
      );
    }

    // ── TITLE REVEAL + PARALLAX ───────────────────────────────────────────────
    // Opacity-only reveal avoids y-conflict with the separate parallax tween.
    gsap.fromTo(
      titleEl.value,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleEl.value,
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
      },
    );
    gsap.fromTo(
      titleEl.value,
      { y: 0 },
      {
        y: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: section.value,
          start: 'top 60%',
          end: 'center top',
          scrub: 1.2,
        },
      },
    );

    // ── BIO 1-3 REVEAL ────────────────────────────────────────────────────────
    gsap.fromTo(
      bioEl.value,
      { opacity: 0, y: 18 },
      {
        opacity: 1,
        y: 0,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: bioEl.value,
          start: 'top 84%',
          toggleActions: 'play none none none',
        },
      },
    );

    // ── BIO 4-5 REVEAL ────────────────────────────────────────────────────────
    // Staggered slightly after the quote reveal — text layers in as you scroll.
    gsap.fromTo(
      bioEl2.value,
      { opacity: 0, y: 18 },
      {
        opacity: 1,
        y: 0,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: bioEl2.value,
          start: 'top 86%',
          toggleActions: 'play none none none',
        },
      },
    );

    // ── QUOTE (para 6) REVEAL + PARALLAX ─────────────────────────────────────
    // Opacity-only reveal — y is owned by the parallax tween below.
    gsap.fromTo(
      quoteEl.value,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: quoteEl.value,
          start: 'top 86%',
          toggleActions: 'play none none none',
        },
      },
    );
    gsap.fromTo(
      quoteEl.value,
      { y: 40 },
      {
        y: -45,
        ease: 'none',
        scrollTrigger: {
          trigger: quoteEl.value,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.3,
        },
      },
    );

    ScrollTrigger.refresh();
  });

  // ── HOVER TILT — outside gsap.context so it survives ctx.revert() ────────
  if (!reduced) {
    if (imgWrap1.value) setupTilt(imgWrap1.value, img1.value);
    if (imgWrap2.value) setupTilt(imgWrap2.value, img2.value);
    if (imgWrap3.value) setupTilt(imgWrap3.value, img3.value);
  }
});

onBeforeUnmount(() => ctx?.revert());
</script>
