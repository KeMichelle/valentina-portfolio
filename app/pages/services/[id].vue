<template>
  <div class="bg-cream overflow-x-hidden">
    <template v-if="service">
      <!-- ═══════════════════════════════════════════════════
           1. HERO — full viewport, parallax, editorial type
      ════════════════════════════════════════════════════ -->
      <section ref="heroRef" class="relative h-screen w-full overflow-hidden">
        <!-- Parallax image layer -->
        <div
          ref="heroImageWrap"
          class="absolute inset-0 will-change-transform"
          style="transform: scale(1.12)"
        >
          <NuxtImg
            :src="service.cover"
            :alt="service.title"
            format="webp"
            width="1920"
            height="1080"
            loading="eager"
            class="w-full h-full object-cover"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/10 to-charcoal/20"
          />
        </div>

        <!-- Back button -->
        <div class="absolute top-10 left-8 md:left-16 z-20">
          <NuxtLink
            to="/#work"
            class="group inline-flex items-center gap-3 font-sans text-xs tracking-widest uppercase text-white/60 hover:text-white transition-colors duration-500"
          >
            <span
              class="block w-6 h-px bg-white/40 group-hover:w-10 transition-all duration-500 ease-out"
            />
            Back
          </NuxtLink>
        </div>

        <!-- Hero content — bottom left -->
        <div
          class="absolute inset-0 flex flex-col justify-end px-8 md:px-16 pb-16 md:pb-24 z-10"
        >
          <div ref="heroContent">
            <p
              class="hero-label font-sans text-xs tracking-widest3 uppercase text-white/45 mb-5"
            >
              {{ service.heroTag }} {{ service.category }}
            </p>
            <h1
              class="hero-title font-serif text-white leading-none"
              style="
                font-size: clamp(4.5rem, 11vw, 10rem);
                opacity: 0;
                letter-spacing: -0.01em;
              "
            >
              {{ service.title }}
            </h1>
            <p
              class="hero-excerpt font-sans text-sm text-white/55 mt-7 max-w-sm font-light leading-loose"
              style="opacity: 0"
            >
              {{ service.excerpt }}
            </p>
          </div>
        </div>

        <!-- Scroll indicator -->
        <div
          class="absolute bottom-12 right-8 md:right-16 z-20 flex flex-col items-center gap-3"
        >
          <span
            class="font-sans text-[10px] tracking-widest3 uppercase text-white/30 [writing-mode:vertical-rl]"
            >Scroll</span
          >
          <div
            class="w-px h-14 bg-white/15 relative overflow-hidden rounded-full"
          >
            <div
              class="scroll-indicator absolute top-0 left-0 w-full bg-white/50 rounded-full"
              style="height: 40%"
            />
          </div>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════════
           2. STORY — editorial two-column layout
      ════════════════════════════════════════════════════ -->
      <section ref="storyRef" class="py-20 md:py-28 px-8 md:px-16 lg:px-28">
        <div
          class="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-8 items-start max-w-screen-xl mx-auto"
        >
          <!-- Decorative large number -->
          <div
            class="md:col-span-4 lg:col-span-3 md:sticky md:top-32 self-start"
          >
            <div
              ref="storyNumber"
              class="font-serif leading-none select-none text-sand"
              style="font-size: clamp(7rem, 14vw, 16rem); opacity: 0"
            >
              {{ (service.heroTag || '01').replace(' —', '') }}
            </div>
          </div>

          <!-- Story text block -->
          <div class="md:col-span-8 lg:col-span-8 lg:col-start-5">
            <p
              ref="storyLabel"
              class="font-sans text-xs tracking-widest2 uppercase text-clay mb-8"
              style="opacity: 0"
            >
              Il progetto
            </p>
            <div ref="storyBody" style="opacity: 0">
              <p
                class="font-serif font-light text-charcoal leading-relaxed mb-10"
                style="font-size: clamp(1.6rem, 3.2vw, 2.8rem)"
              >
                {{ service.excerpt }}
              </p>
              <div class="w-8 h-px bg-clay mb-10" />
              <p
                class="font-sans text-sm leading-loose text-charcoal/55 font-light max-w-lg"
              >
                {{ service.description }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════════
           3. GALLERY — vertical portrait layout
      ════════════════════════════════════════════════════ -->
      <section
        ref="galleryRef"
        class="py-12 md:py-16 px-8 md:px-16 lg:px-28"
        v-if="galleryImages.length"
      >
        <div class="columns-2 md:columns-3 gap-3 md:gap-4">
          <div
            v-for="(img, i) in galleryImages"
            :key="i"
            class="img-reveal-wrap overflow-hidden break-inside-avoid mb-3 md:mb-4"
          >
            <NuxtImg
              :src="img"
              :alt="`${service.title} — ${i + 1}`"
              format="webp"
              width="800"
              height="1000"
              loading="lazy"
              class="gallery-img w-full h-auto object-cover block"
            />
          </div>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════════
           4. EXPERIENCE — elegant process timeline
      ════════════════════════════════════════════════════ -->
      <section
        ref="experienceRef"
        class="py-16 md:py-24 px-8 md:px-16 lg:px-28 border-t border-sand/40"
      >
        <div
          class="grid grid-cols-1 md:grid-cols-12 gap-y-20 md:gap-8 items-start max-w-screen-xl mx-auto"
        >
          <!-- Left label + heading -->
          <div
            ref="experienceLeft"
            class="md:col-span-4 md:sticky md:top-32 self-start"
          >
            <p
              class="experience-label font-sans text-xs tracking-widest2 uppercase text-clay mb-5"
              style="opacity: 0"
            >
              Il processo
            </p>
            <h2
              class="experience-heading font-serif font-light leading-editorial text-charcoal"
              style="font-size: clamp(2.5rem, 5vw, 4.5rem); opacity: 0"
            >
              Come<br />funziona
            </h2>
            <!-- Animated step counter -->
            <div class="mt-10 overflow-hidden">
              <span
                ref="stepCounterEl"
                class="font-serif font-light leading-none text-sand/35 select-none block"
                style="font-size: clamp(5rem, 10vw, 8rem); opacity: 0"
                >01</span
              >
            </div>
            <!-- Step progress dots -->
            <div class="mt-5 flex gap-1.5 items-center">
              <div
                v-for="(_, i) in experienceSteps"
                :key="i"
                class="step-dot h-px rounded-full bg-sand/30"
                style="width: 0.4rem"
              />
            </div>
          </div>

          <!-- Steps — one visible at a time, stacked absolutely -->
          <div
            class="md:col-span-7 md:col-start-6 relative"
            style="min-height: 52vh"
          >
            <div
              v-for="(step, i) in experienceSteps"
              :key="i"
              class="experience-step absolute inset-x-0 top-0"
              style="opacity: 0; transform: translateY(32px)"
            >
              <div class="pt-2 pb-10 border-t border-sand/40">
                <span
                  class="font-sans text-[10px] tracking-widest text-clay/40 tabular-nums block mb-7"
                  >0{{ i + 1 }}</span
                >
                <h3
                  class="font-serif font-light text-charcoal mb-5"
                  style="font-size: clamp(1.6rem, 3vw, 2.4rem)"
                >
                  {{ step.title }}
                </h3>
                <p
                  class="font-sans text-sm text-charcoal/50 font-light leading-loose max-w-md"
                >
                  {{ step.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════════
           5. INCLUDED — editorial typographic manifest
      ════════════════════════════════════════════════════ -->
      <section
        ref="includedRef"
        class="py-20 md:py-28 px-8 md:px-16 lg:px-28 bg-charcoal"
      >
        <div class="max-w-screen-xl mx-auto">
          <p
            class="font-sans text-xs tracking-widest2 uppercase text-clay mb-14 included-label"
            style="opacity: 0"
          >
            Cosa ottieni
          </p>

          <div class="border-t border-white/[0.07]">
            <div
              v-for="(feature, i) in includedFeatures"
              :key="i"
              class="included-item border-b border-white/[0.07] group cursor-default"
              style="opacity: 0"
            >
              <div class="flex items-start justify-between gap-6 py-8 md:py-10">
                <div class="flex items-start gap-5 md:gap-10 flex-1 min-w-0">
                  <span
                    class="font-sans text-[10px] tracking-widest text-clay/35 tabular-nums pt-2 flex-shrink-0"
                    >0{{ i + 1 }}</span
                  >
                  <h3
                    class="included-title font-serif font-light text-cream leading-tight transition-none"
                    style="font-size: clamp(1.4rem, 2.8vw, 2.1rem)"
                  >
                    {{ feature.title }}
                  </h3>
                </div>
                <p
                  class="included-desc font-sans text-xs text-white/28 font-light leading-relaxed max-w-xs text-right flex-shrink-0 hidden md:block pt-1"
                  style="opacity: 0; transform: translateX(10px)"
                >
                  {{ feature.description }}
                </p>
              </div>
            </div>
          </div>

          <p
            class="included-tagline font-serif font-light text-sand/25 mt-20"
            style="
              font-size: clamp(2rem, 5vw, 4rem);
              opacity: 0;
              line-height: 1.1;
            "
          >
            Ogni dettaglio,<br />curato per te.
          </p>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════════
           6. PRICING — editorial accordion
      ════════════════════════════════════════════════════ -->
      <section ref="pricingRef" class="py-20 md:py-28 px-8 md:px-16 lg:px-28">
        <div class="max-w-screen-xl mx-auto">
          <div class="mb-16 md:mb-20">
            <p
              class="font-sans text-xs tracking-widest2 uppercase text-clay mb-5 pricing-label"
              style="opacity: 0"
            >
              Investimento
            </p>
            <h2
              class="font-serif font-light text-charcoal pricing-heading"
              style="
                font-size: clamp(2.5rem, 5.5vw, 5rem);
                opacity: 0;
                line-height: 1;
              "
            >
              Scegli la tua<br />esperienza
            </h2>
          </div>

          <div class="border-t border-sand/20">
            <div
              v-for="(pkg, i) in service.pricing"
              :key="i"
              class="pricing-item border-b border-sand/20 cursor-pointer group"
              style="opacity: 0"
              @click="activePkg = activePkg === i ? null : i"
            >
              <!-- Collapsed row -->
              <div
                class="flex items-center justify-between gap-6 py-10 md:py-12 select-none"
              >
                <div class="flex items-baseline gap-5 md:gap-12 flex-1 min-w-0">
                  <span
                    class="font-sans text-[10px] tracking-widest text-clay/40 tabular-nums flex-shrink-0"
                    >0{{ i + 1 }}</span
                  >
                  <h3
                    class="font-serif font-light text-charcoal transition-colors duration-500 group-hover:text-clay"
                    style="font-size: clamp(1.8rem, 4vw, 3.2rem)"
                  >
                    {{ pkg.name }}
                  </h3>
                </div>
                <div class="flex items-center gap-6 md:gap-12 flex-shrink-0">
                  <span
                    class="font-serif font-light text-charcoal/55"
                    style="font-size: clamp(1.2rem, 2.5vw, 2rem)"
                    >{{ pkg.price }}</span
                  >
                  <span
                    class="font-sans text-xs tracking-widest transition-all duration-500 w-6 text-center"
                    :class="
                      activePkg === i
                        ? 'text-clay rotate-45 inline-block'
                        : 'text-charcoal/25 group-hover:text-clay/60'
                    "
                    >+</span
                  >
                </div>
              </div>

              <!-- Expanded content -->
              <div
                class="overflow-hidden"
                :style="{
                  maxHeight: activePkg === i ? '280px' : '0px',
                  opacity: activePkg === i ? 1 : 0,
                  transition:
                    'max-height 0.7s cubic-bezier(0.4,0,0.2,1), opacity 0.5s ease',
                }"
              >
                <div
                  class="pb-12 pl-8 md:pl-28 flex flex-col md:flex-row items-start gap-8 md:gap-20"
                >
                  <p
                    class="font-sans text-sm text-charcoal/45 font-light leading-loose max-w-md"
                  >
                    {{ pkg.includes }}
                  </p>
                  <NuxtLink
                    to="/contact"
                    class="flex-shrink-0 self-start font-sans text-xs tracking-widest uppercase text-clay border-b border-clay/40 pb-0.5 hover:text-charcoal hover:border-charcoal/40 transition-colors duration-300"
                  >
                    Prenota →
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════════
           7. FAQ — elegant accordion
      ════════════════════════════════════════════════════ -->
      <section
        ref="faqRef"
        class="py-36 md:py-52 px-8 md:px-16 lg:px-28 border-t border-sand/40"
      >
        <div
          class="grid grid-cols-1 md:grid-cols-12 gap-y-20 md:gap-8 items-start max-w-screen-xl mx-auto"
        >
          <div class="md:col-span-4 md:sticky md:top-32 self-start">
            <p
              class="faq-label font-sans text-xs tracking-widest2 uppercase text-clay mb-5"
              style="opacity: 0"
            >
              Domande frequenti
            </p>
            <h2
              class="faq-heading font-serif font-light leading-editorial text-charcoal"
              style="font-size: clamp(2rem, 4vw, 3.5rem); opacity: 0"
            >
              Tutto quello<br />che vuoi<br />sapere
            </h2>
          </div>

          <div class="md:col-span-7 md:col-start-6">
            <div
              v-for="(faq, i) in faqItems"
              :key="i"
              class="faq-item border-b border-sand/40"
              style="opacity: 0"
            >
              <button
                class="w-full flex items-start justify-between py-7 text-left group gap-6 cursor-pointer"
                @click="toggleFaq(i)"
                :aria-expanded="openFaq === i"
              >
                <span
                  class="font-serif text-lg md:text-xl font-light text-charcoal group-hover:text-clay transition-colors duration-400 leading-snug"
                >
                  {{ faq.question }}
                </span>
                <span
                  class="flex-shrink-0 mt-1 w-5 h-5 flex items-center justify-center text-clay transition-transform duration-500"
                  :class="{ 'rotate-45': openFaq === i }"
                >
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    aria-hidden="true"
                  >
                    <line
                      x1="5.5"
                      y1="0"
                      x2="5.5"
                      y2="11"
                      stroke="currentColor"
                      stroke-width="1"
                    />
                    <line
                      x1="0"
                      y1="5.5"
                      x2="11"
                      y2="5.5"
                      stroke="currentColor"
                      stroke-width="1"
                    />
                  </svg>
                </span>
              </button>
              <div
                class="overflow-hidden transition-[max-height] duration-700 ease-in-out"
                :style="{ maxHeight: openFaq === i ? '600px' : '0px' }"
              >
                <p
                  class="font-sans text-xs text-charcoal/48 font-light leading-loose pb-8 max-w-lg"
                >
                  {{ faq.answer }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════════
           8. FINAL CTA — full-screen, parallax, emotional
      ════════════════════════════════════════════════════ -->
      <section ref="ctaRef" class="relative h-screen overflow-hidden">
        <!-- Parallax image -->
        <div
          ref="ctaImageWrap"
          class="absolute inset-0 will-change-transform"
          style="transform: scale(1.12)"
        >
          <NuxtImg
            :src="service.cover"
            :alt="service.title"
            format="webp"
            width="1920"
            height="1080"
            loading="lazy"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-charcoal/52" />
        </div>

        <!-- CTA content — centred -->
        <div
          class="relative z-10 h-full flex flex-col items-center justify-center text-center px-8"
        >
          <p
            class="cta-label font-sans text-[10px] tracking-widest3 uppercase text-white/35 mb-8"
            style="opacity: 0"
          >
            Iniziamo
          </p>
          <h2
            ref="ctaHeading"
            class="font-serif text-white leading-editorial mb-14"
            style="
              font-size: clamp(3rem, 8.5vw, 9rem);
              opacity: 0;
              letter-spacing: -0.01em;
            "
          >
            Raccontiamo<br />la tua storia.
          </h2>
          <NuxtLink
            to="/contact"
            class="cta-button group inline-flex items-center gap-5 font-sans text-xs tracking-widest uppercase text-white/65 hover:text-white transition-colors duration-500 border border-white/18 hover:border-white/45 px-10 py-5"
            style="opacity: 0"
          >
            Prenota la tua sessione
            <span
              class="w-5 h-px bg-current group-hover:w-9 transition-all duration-500"
            />
          </NuxtLink>
        </div>
      </section>
    </template>

    <!-- 404 state -->
    <template v-else>
      <div class="min-h-screen flex items-center justify-center">
        <p class="font-sans text-sm text-charcoal/40 tracking-widest uppercase">
          Servizio non trovato.
        </p>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { services } from '~/composables/useServices';

gsap.registerPlugin(ScrollTrigger);

// ── Data ─────────────────────────────────────────────────────────────
const route = useRoute();
const service = computed(() => services.find((s) => s.id === route.params.id));

const galleryImages = computed(() => {
  if (!service.value) return [];
  const imgs = [...(service.value.gallery?.filter(Boolean) ?? [])];
  const fillers = [
    '/images/service-maternity.jpg',
    '/images/service-neonati.jpg',
    '/images/service-famiglia.jpg',
  ];
  let fi = 0;
  while (imgs.length < 4 && fi < fillers.length) {
    const filler = fillers[fi]!;
    if (!imgs.includes(filler)) imgs.push(filler);
    fi++;
  }
  return imgs;
});

const experienceSteps = [
  {
    title: 'Consulenza iniziale',
    description:
      'Una chiamata conoscitiva per capire i tuoi desideri, scegliere la location e pianificare ogni dettaglio.',
  },
  {
    title: 'Preparazione',
    description:
      'Guida completa su abbigliamento e styling. Arrivi il giorno della sessione senza pensieri.',
  },
  {
    title: 'Sessione fotografica',
    description:
      "Un'esperienza rilassante e autentica. Non servono pose forzate — ti guido io, naturalmente.",
  },
  {
    title: 'Post-produzione',
    description:
      'Ogni immagine viene selezionata e ritoccata a mano con cura artigianale. Nessun filtro, solo luce vera.',
  },
  {
    title: 'Consegna gallery',
    description:
      'La tua gallery privata è pronta entro 2–3 settimane. Download ad alta risoluzione incluso.',
  },
];

const includedFeatures = [
  {
    title: 'Consulenza stilistica',
    description:
      'Guida personalizzata su abbigliamento e acconciature per valorizzare ogni scatto.',
  },
  {
    title: 'Gallery privata online',
    description:
      'Accesso esclusivo alla tua collezione, protetta e disponibile per sempre.',
  },
  {
    title: 'File alta risoluzione',
    description:
      'Tutte le immagini in qualità professionale, pronte per la stampa in qualsiasi formato.',
  },
  {
    title: 'Stampe fine art',
    description:
      'Disponibili à la carte o incluse nei pacchetti superiori. Carta certificata, colori duraturi.',
  },
  {
    title: 'Consegna digitale',
    description:
      'Download immediato dalla gallery online. Condividi con chi ami in un solo click.',
  },
  {
    title: 'Supporto post-sessione',
    description:
      'Sono disponibile per ogni domanda anche dopo la consegna della gallery.',
  },
];

const faqItems = [
  {
    question: 'Quanto dura una sessione fotografica?',
    answer:
      'La durata varia in base al pacchetto scelto, in genere tra 1 e 3 ore. Non fissiamo limiti rigidi — prendiamo sempre il tempo che serve.',
  },
  {
    question: 'Posso scegliere la location?',
    answer:
      'Assolutamente sì. Lavoriamo insieme per trovare il luogo più adatto alla tua storia, che sia in studio o in un contesto naturale.',
  },
  {
    question: 'Quando ricevo le fotografie?',
    answer:
      'La gallery privata è pronta entro 2–3 settimane dalla sessione. Riceverai una notifica via email appena sarà disponibile.',
  },
  {
    question: 'Posso ordinare stampe in seguito?',
    answer:
      'Sì. Dopo la consegna della gallery puoi ordinare stampe fine art e album in qualsiasi momento.',
  },
  {
    question: 'Come avviene il pagamento?',
    answer:
      'È richiesto un acconto del 30% alla prenotazione. Il saldo viene completato entro il giorno della sessione.',
  },
];

// ── Package accordion state ─────────────────────────────────────────
const activePkg = ref<number | null>(null);

// ── FAQ state ────────────────────────────────────────────────────────
const openFaq = ref<number | null>(null);
function toggleFaq(i: number) {
  openFaq.value = openFaq.value === i ? null : i;
}

// ── Template refs ────────────────────────────────────────────────────
const heroRef = ref<HTMLElement>();
const heroImageWrap = ref<HTMLElement>();
const heroContent = ref<HTMLElement>();
const storyRef = ref<HTMLElement>();
const storyNumber = ref<HTMLElement>();
const storyLabel = ref<HTMLElement>();
const storyBody = ref<HTMLElement>();
const galleryRef = ref<HTMLElement>();
const experienceRef = ref<HTMLElement>();
const experienceLeft = ref<HTMLElement>();
const stepCounterEl = ref<HTMLElement>();
const includedRef = ref<HTMLElement>();
const pricingRef = ref<HTMLElement>();
const faqRef = ref<HTMLElement>();
const ctaRef = ref<HTMLElement>();
const ctaImageWrap = ref<HTMLElement>();
const ctaHeading = ref<HTMLElement>();

// ── GSAP animations ──────────────────────────────────────────────────
let ctx: gsap.Context;

onMounted(() => {
  if (!service.value) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) {
    // Make everything visible immediately
    document.querySelectorAll('[style*="opacity: 0"]').forEach((el) => {
      (el as HTMLElement).style.opacity = '1';
    });
    return;
  }

  ctx = gsap.context(() => {
    // ── Hero entrance ────────────────────────────────────────────────
    const heroTitle =
      heroContent.value?.querySelector<HTMLElement>('.hero-title');
    const heroExcerpt =
      heroContent.value?.querySelector<HTMLElement>('.hero-excerpt');

    if (heroTitle) {
      gsap.fromTo(
        heroTitle,
        { opacity: 0, y: 70, filter: 'blur(6px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.6,
          delay: 0.2,
          ease: 'power3.out',
          clearProps: 'filter',
        },
      );
    }
    if (heroExcerpt) {
      gsap.fromTo(
        heroExcerpt,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.3, delay: 0.65, ease: 'power3.out' },
      );
    }

    // ── Hero parallax ────────────────────────────────────────────────
    if (heroImageWrap.value) {
      gsap.to(heroImageWrap.value, {
        y: '22%',
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.value,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      });
    }

    // ── Scroll indicator loop ────────────────────────────────────────
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
      gsap.fromTo(
        scrollIndicator,
        { y: '-100%' },
        {
          y: '300%',
          duration: 1.8,
          repeat: -1,
          ease: 'power1.inOut',
          delay: 1.2,
        },
      );
    }

    // ── Story section ────────────────────────────────────────────────
    if (storyRef.value) {
      if (storyNumber.value) {
        gsap.fromTo(
          storyNumber.value,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 1.4,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: storyRef.value,
              start: 'top 78%',
              toggleActions: 'play none none reverse',
            },
          },
        );
      }
      const storyTargets = [storyLabel.value, storyBody.value].filter(
        (el): el is HTMLElement => !!el,
      );
      if (storyTargets.length) {
        gsap.fromTo(
          storyTargets,
          { opacity: 0, y: 45 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.18,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: storyRef.value,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          },
        );
      }
    }

    // ── Gallery — clip-path + scale reveals ──────────────────────────
    if (galleryRef.value) {
      galleryRef.value
        .querySelectorAll<HTMLElement>('.img-reveal-wrap')
        .forEach((wrap) => {
          const img = wrap.querySelector('img');
          gsap.fromTo(
            wrap,
            { clipPath: 'inset(100% 0% 0% 0%)' },
            {
              clipPath: 'inset(0% 0% 0% 0%)',
              duration: 1.5,
              ease: 'power4.out',
              scrollTrigger: {
                trigger: wrap,
                start: 'top 88%',
                toggleActions: 'play none none reverse',
              },
            },
          );
          if (img) {
            gsap.fromTo(
              img,
              { scale: 1.18 },
              {
                scale: 1,
                duration: 1.5,
                ease: 'power4.out',
                scrollTrigger: {
                  trigger: wrap,
                  start: 'top 88%',
                  toggleActions: 'play none none reverse',
                },
              },
            );
          }
        });
    }

    // ── Gallery — physical print hover ───────────────────────────────
    if (galleryRef.value) {
      galleryRef.value
        .querySelectorAll<HTMLElement>('.img-reveal-wrap')
        .forEach((wrap) => {
          gsap.set(wrap, {
            boxShadow:
              '0 4px 18px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)',
          });
          wrap.addEventListener('mouseenter', () => {
            gsap.to(wrap, {
              y: -7,
              scale: 1.015,
              boxShadow:
                '0 20px 56px rgba(0,0,0,0.17), 0 5px 18px rgba(0,0,0,0.09)',
              duration: 0.5,
              ease: 'power3.out',
            });
          });
          wrap.addEventListener('mouseleave', () => {
            gsap.to(wrap, {
              y: 0,
              scale: 1,
              boxShadow:
                '0 4px 18px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)',
              duration: 0.65,
              ease: 'power3.out',
            });
          });
        });
    }

    // ── Experience — pinned section, scrubbed timeline ───────────────
    if (experienceRef.value) {
      const steps = Array.from(
        experienceRef.value.querySelectorAll<HTMLElement>('.experience-step'),
      );
      const dots =
        experienceRef.value.querySelectorAll<HTMLElement>('.step-dot');
      const counterEl = stepCounterEl.value;
      const SCROLL_PER_STEP = 320;
      let currentStep = -1;

      gsap.set(steps, { opacity: 0, y: 36 });

      // Reveal label + heading when section enters view
      gsap.fromTo(
        [
          experienceRef.value.querySelector('.experience-label'),
          experienceRef.value.querySelector('.experience-heading'),
        ],
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: experienceRef.value,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        },
      );
      if (counterEl) {
        gsap.fromTo(
          counterEl,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: experienceRef.value,
              start: 'top 72%',
              toggleActions: 'play none none reverse',
            },
          },
        );
      }

      // Build timeline: each step dismisses the previous and reveals itself
      const tl = gsap.timeline({ paused: true });
      steps.forEach((step, i) => {
        if (i > 0) {
          tl.to(steps[i - 1]!, {
            opacity: 0,
            y: -28,
            duration: 0.3,
            ease: 'power2.in',
          });
        }
        tl.fromTo(
          step,
          { y: 36, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.3, ease: 'power3.out' },
          i === 0 ? '>' : '>-0.05',
        );
        // Hold this step in view before advancing
        if (i < steps.length - 1) tl.to({}, { duration: 1 });
      });

      // Pin + scrub drives the timeline
      ScrollTrigger.create({
        trigger: experienceRef.value,
        pin: true,
        anticipatePin: 1,
        start: 'top top',
        end: `+=${steps.length * SCROLL_PER_STEP}`,
        scrub: 1,
        animation: tl,
        onUpdate: (self) => {
          const idx = Math.min(
            Math.floor(self.progress * steps.length),
            steps.length - 1,
          );
          if (idx === currentStep) return;
          currentStep = idx;
          if (counterEl)
            counterEl.textContent = String(idx + 1).padStart(2, '0');
          dots.forEach((dot, di) => {
            gsap.to(dot, {
              width: di <= idx ? '2rem' : '0.4rem',
              backgroundColor:
                di <= idx
                  ? 'var(--color-clay, #b5775a)'
                  : 'rgba(180,160,140,0.3)',
              duration: 0.3,
              overwrite: true,
            });
          });
        },
      });

      // Subtle parallax on the heading text while pinned
      const heading = experienceRef.value.querySelector<HTMLElement>(
        '.experience-heading',
      );
      if (heading) {
        gsap.to(heading, {
          y: -24,
          ease: 'none',
          scrollTrigger: {
            trigger: experienceRef.value,
            start: 'top top',
            end: `+=${steps.length * SCROLL_PER_STEP}`,
            scrub: 1.2,
          },
        });
      }
    }

    // ── Included — editorial typographic list ────────────────────────
    if (includedRef.value) {
      gsap.fromTo(
        includedRef.value.querySelector('.included-label'),
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: includedRef.value,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        },
      );

      // Stagger rows in from the left
      includedRef.value
        .querySelectorAll<HTMLElement>('.included-item')
        .forEach((item, i) => {
          gsap.fromTo(
            item,
            { opacity: 0, x: -24 },
            {
              opacity: 1,
              x: 0,
              duration: 0.65,
              ease: 'power3.out',
              delay: i * 0.06,
              scrollTrigger: {
                trigger: includedRef.value,
                start: 'top 72%',
                toggleActions: 'play none none reverse',
              },
            },
          );

          // Hover: title drifts right, description slides in from right
          const title = item.querySelector<HTMLElement>('.included-title');
          const desc = item.querySelector<HTMLElement>('.included-desc');
          item.addEventListener('mouseenter', () => {
            if (title)
              gsap.to(title, { x: 10, duration: 0.4, ease: 'power3.out' });
            if (desc)
              gsap.to(desc, {
                opacity: 1,
                x: 0,
                duration: 0.45,
                ease: 'power3.out',
              });
          });
          item.addEventListener('mouseleave', () => {
            if (title)
              gsap.to(title, { x: 0, duration: 0.35, ease: 'power2.out' });
            if (desc)
              gsap.to(desc, {
                opacity: 0,
                x: 10,
                duration: 0.3,
                ease: 'power2.in',
              });
          });
        });

      // Tagline drifts in late
      gsap.fromTo(
        includedRef.value.querySelector('.included-tagline'),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: includedRef.value,
            start: 'bottom 90%',
            toggleActions: 'play none none reverse',
          },
        },
      );
    }

    // ── Pricing — editorial accordion ─────────────────────────────────
    if (pricingRef.value) {
      gsap.fromTo(
        [
          pricingRef.value.querySelector('.pricing-label'),
          pricingRef.value.querySelector('.pricing-heading'),
        ],
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.14,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: pricingRef.value,
            start: 'top 78%',
            toggleActions: 'play none none reverse',
          },
        },
      );

      pricingRef.value
        .querySelectorAll<HTMLElement>('.pricing-item')
        .forEach((item, i) => {
          gsap.fromTo(
            item,
            { opacity: 0, y: 18 },
            {
              opacity: 1,
              y: 0,
              duration: 0.75,
              ease: 'power3.out',
              delay: i * 0.1,
              scrollTrigger: {
                trigger: pricingRef.value,
                start: 'top 68%',
                toggleActions: 'play none none reverse',
              },
            },
          );
        });
    }

    // ── FAQ ──────────────────────────────────────────────────────────
    if (faqRef.value) {
      gsap.fromTo(
        [
          faqRef.value.querySelector('.faq-label'),
          faqRef.value.querySelector('.faq-heading'),
        ],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: faqRef.value,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        },
      );
      gsap.fromTo(
        faqRef.value.querySelectorAll('.faq-item'),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.09,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: faqRef.value,
            start: 'top 68%',
            toggleActions: 'play none none reverse',
          },
        },
      );
    }

    // ── CTA parallax + reveal ─────────────────────────────────────────
    if (ctaImageWrap.value) {
      gsap.to(ctaImageWrap.value, {
        y: '18%',
        ease: 'none',
        scrollTrigger: {
          trigger: ctaRef.value,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
      });
    }

    if (ctaRef.value) {
      gsap.fromTo(
        [
          ctaRef.value.querySelector('.cta-label'),
          ctaHeading.value,
          ctaRef.value.querySelector('.cta-button'),
        ],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ctaRef.value,
            start: 'top 72%',
            toggleActions: 'play none none reverse',
          },
        },
      );
    }
  });
});

onUnmounted(() => {
  ctx?.revert();
});

// ── Head ─────────────────────────────────────────────────────────────
useHead({
  title: computed(() =>
    service.value
      ? `${service.value.title} — Valentina`
      : 'Servizio — Valentina',
  ),
});
</script>
