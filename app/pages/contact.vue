<template>
  <div>
    <!-- ═══════════════════════════════════════════════════════
         1. HERO — full-height editorial photograph
    ══════════════════════════════════════════════════════════ -->
    <section ref="heroSection" class="relative h-screen w-full overflow-hidden">
      <!-- Parallax image -->
      <div
        ref="heroBg"
        class="absolute inset-0 scale-[1.12] will-change-transform"
      >
        <NuxtImg
          src="/images/about-01.jpg"
          format="webp"
          width="1920"
          height="1280"
          alt="Valentina Cometti — fotografia"
          class="h-full w-full object-cover"
          loading="eager"
        />
      </div>

      <!-- Gradient veil -->
      <div
        class="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60"
        aria-hidden="true"
      />

      <!-- Eyebrow -->
      <p
        ref="heroEyebrow"
        class="absolute bottom-[calc(50%-1rem)] left-8 lg:left-14 font-sans text-xs uppercase tracking-[0.3em] text-white/50 z-20"
        style="opacity: 0"
        aria-hidden="true"
      >
        Contatto
      </p>

      <!-- Headline -->
      <div
        class="absolute bottom-24 lg:bottom-20 left-8 lg:left-14 right-8 z-20"
      >
        <h1
          ref="heroHeadline"
          class="font-serif text-white leading-none tracking-tight"
          style="font-size: clamp(3.2rem, 8vw, 9rem); opacity: 0"
        >
          Parliamo<br /><em
            class="not-italic"
            style="color: rgba(245, 242, 236, 0.55)"
            >della tua storia.</em
          >
        </h1>
      </div>

      <!-- Scroll indicator -->
      <div
        ref="heroScroll"
        class="absolute bottom-16 lg:bottom-8 right-8 lg:right-14 flex flex-col items-center gap-3 z-20"
        style="opacity: 0"
        aria-hidden="true"
      >
        <span
          class="font-sans text-[0.6rem] uppercase tracking-[0.3em] text-white/40 [writing-mode:vertical-rl]"
          >Scorri</span
        >
        <span class="w-px h-12 bg-white/25 block" />
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════
         2. EDITORIAL INTRODUCTION
    ══════════════════════════════════════════════════════════ -->
    <section class="w-full py-16 lg:py-52" style="background-color: #f5f2ec">
      <div class="mx-auto max-w-screen-xl px-6 lg:px-14">
        <div class="grid grid-cols-12 gap-x-6">
          <div
            class="col-span-12 lg:col-start-3 lg:col-span-8 xl:col-start-3 xl:col-span-7"
          >
            <p
              class="fade-up font-sans text-xs uppercase tracking-[0.3em] text-stone-400 mb-10"
            >
              Il primo passo
            </p>
            <p
              class="fade-up font-serif text-stone-800 leading-[1.2] tracking-tight"
              style="font-size: clamp(1.8rem, 3.5vw, 3.2rem)"
            >
              Ogni sessione inizia con una conversazione.<br />
              Non un contratto <br />
              una&nbsp;<em>connessione</em>.
            </p>
            <div
              class="fade-up mt-10 lg:mt-16 h-px bg-stone-200 w-24"
              aria-hidden="true"
            />
            <p
              class="fade-up mt-10 lg:mt-14 font-sans text-base lg:text-lg text-stone-500 font-light leading-loose max-w-xl"
            >
              Scrivimi cosa stai vivendo, cosa vuoi ricordare, o semplicemente
              come ti senti in questo momento. La tua storia merita di essere
              raccontata con tutta la cura che si merita.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════
         3. CONTACT SECTION — portrait + form
    ══════════════════════════════════════════════════════════ -->
    <section class="w-full pb-16 lg:pb-52" style="background-color: #f5f2ec">
      <div class="mx-auto max-w-screen-xl px-6 lg:px-14">
        <div class="grid grid-cols-12 gap-x-6 gap-y-12 lg:gap-y-20 items-start">
          <!-- LEFT: Portrait + info -->
          <aside
            class="col-span-12 lg:col-span-4 xl:col-span-4 lg:sticky lg:top-28"
          >
            <div class="fade-up img-reveal-wrap mb-10 overflow-hidden">
              <NuxtImg
                src="/images/about-01.jpg"
                format="webp"
                width="640"
                height="800"
                alt="Valentina Cometti — fotografa"
                class="contact-portrait w-full object-cover will-change-transform"
                style="aspect-ratio: 4/5"
                loading="lazy"
              />
            </div>

            <div class="fade-up space-y-8">
              <div>
                <p
                  class="font-serif text-stone-900 leading-tight mb-2"
                  style="font-size: clamp(1.3rem, 2vw, 1.6rem)"
                >
                  Valentina Cometti
                </p>
                <p
                  class="font-sans text-xs uppercase tracking-[0.3em] text-stone-400"
                >
                  Fotografa — Bergamo
                </p>
              </div>

              <div class="space-y-6 pt-2">
                <div>
                  <p
                    class="font-sans text-[0.6rem] uppercase tracking-[0.3em] text-stone-400 mb-2"
                  >
                    Email
                  </p>
                  <a
                    href="mailto:valentinacomettifotografa@outlook.it"
                    class="font-sans text-sm text-stone-600 hover:text-stone-900 transition-colors duration-300 break-all"
                  >
                    valentinacomettifotografa@outlook.it
                  </a>
                </div>
                <div>
                  <p
                    class="font-sans text-[0.6rem] uppercase tracking-[0.3em] text-stone-400 mb-2"
                  >
                    Instagram
                  </p>
                  <a
                    href="https://www.instagram.com/by.mothernature.fotografie/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="font-sans text-sm text-stone-600 hover:text-stone-900 transition-colors duration-300"
                  >
                    @by.mothernature.fotografie
                  </a>
                </div>
                <div>
                  <p
                    class="font-sans text-[0.6rem] uppercase tracking-[0.3em] text-stone-400 mb-2"
                  >
                    Studio
                  </p>
                  <p
                    class="font-sans text-sm text-stone-600 font-light leading-relaxed"
                  >
                    Bergamo, Lombardia<br />Disponibile in tutta Italia
                  </p>
                </div>
                <div>
                  <p
                    class="font-sans text-[0.6rem] uppercase tracking-[0.3em] text-stone-400 mb-2"
                  >
                    Risposta
                  </p>
                  <p class="font-sans text-sm text-stone-600 font-light">
                    Entro 24 ore
                  </p>
                </div>
              </div>
            </div>
          </aside>

          <!-- RIGHT: Form -->
          <div
            class="col-span-12 lg:col-start-6 lg:col-span-7 xl:col-start-6 xl:col-span-7"
          >
            <div class="fade-up mb-10 lg:mb-14">
              <p
                class="font-sans text-xs uppercase tracking-[0.3em] text-stone-400 mb-6"
              >
                Raccontami
              </p>
              <p
                class="font-serif text-stone-700 leading-tight"
                style="font-size: clamp(1.5rem, 2.5vw, 2.2rem)"
              >
                Ogni messaggio viene letto<br />con attenzione personale.
              </p>
            </div>

            <form
              class="fade-up space-y-10 lg:space-y-12"
              novalidate
              @submit.prevent="handleSubmit"
            >
              <!-- Name + Email -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
                <div class="field-group">
                  <label for="name" class="field-label">Nome *</label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    name="name"
                    autocomplete="name"
                    required
                    class="field-input"
                    placeholder="Il tuo nome"
                  />
                </div>
                <div class="field-group">
                  <label for="email" class="field-label">Email *</label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    name="email"
                    autocomplete="email"
                    required
                    class="field-input"
                    placeholder="La tua email"
                  />
                </div>
              </div>

              <!-- Phone + Service -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
                <div class="field-group">
                  <label for="phone" class="field-label">Telefono</label>
                  <input
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    name="phone"
                    autocomplete="tel"
                    class="field-input"
                    placeholder="+39 000 000 0000"
                  />
                </div>
                <div class="field-group">
                  <label for="service" class="field-label"
                    >Servizio di interesse</label
                  >
                  <select
                    id="service"
                    v-model="form.service"
                    name="service"
                    class="field-input"
                  >
                    <option value="" disabled>Seleziona un servizio</option>
                    <option v-for="s in services" :key="s.id" :value="s.title">
                      {{ s.title }}
                    </option>
                    <option value="Altro">Altro</option>
                  </select>
                </div>
              </div>

              <!-- Message -->
              <div class="field-group">
                <label for="message" class="field-label"
                  >Il tuo momento *</label
                >
                <textarea
                  id="message"
                  v-model="form.message"
                  name="message"
                  rows="7"
                  required
                  class="field-input resize-none"
                  placeholder="Raccontami la tua storia — il momento che vuoi immortalare, come ti senti, cosa sogni di conservare per sempre..."
                />
              </div>

              <!-- Submit -->
              <div class="pt-4">
                <button
                  type="submit"
                  :disabled="submitting"
                  class="contact-btn w-full sm:w-auto inline-block text-center font-sans text-xs uppercase tracking-[0.3em] text-[#262624] border border-[#262624] px-14 py-5 hover:bg-[#262624] hover:text-[#F5F2EC] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-500"
                >
                  {{ submitting ? 'Invio in corso...' : 'Invia messaggio' }}
                </button>

                <p
                  v-if="submitted"
                  class="mt-8 font-sans text-sm text-stone-600 font-light"
                  role="status"
                >
                  ✓ Messaggio inviato. Ti rispondo entro 24 ore.
                </p>
                <p
                  v-if="error"
                  class="mt-8 font-sans text-sm text-red-500 font-light"
                  role="alert"
                >
                  Si è verificato un errore. Riprova o scrivimi direttamente.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════
         4. TESTIMONIALS
    ══════════════════════════════════════════════════════════ -->
    <section
      class="w-full py-16 lg:py-52 overflow-hidden"
      style="background-color: #262624"
    >
      <div class="mx-auto max-w-screen-xl px-6 lg:px-14">
        <p
          class="fade-up font-sans text-xs uppercase tracking-[0.3em] text-stone-500 mb-10 lg:mb-24"
        >
          Le loro parole
        </p>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          <blockquote
            v-for="(t, i) in testimonials"
            :key="i"
            class="fade-up"
            :style="`transition-delay: ${i * 0.12}s`"
          >
            <span
              class="block font-serif text-stone-600 leading-none select-none mb-6"
              style="font-size: 5rem; line-height: 0.6"
              aria-hidden="true"
              >"</span
            >
            <p
              class="font-serif text-white/90 leading-relaxed mb-8"
              style="font-size: clamp(1rem, 1.6vw, 1.25rem)"
            >
              {{ t.quote }}
            </p>
            <footer class="space-y-1">
              <cite
                class="font-sans text-xs uppercase tracking-[0.3em] text-stone-400 not-italic block"
              >
                {{ t.name }}
              </cite>
              <span class="font-sans text-xs text-stone-600 font-light">{{
                t.service
              }}</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════
         5. FAQ
    ══════════════════════════════════════════════════════════ -->
    <section class="w-full py-16 lg:py-52" style="background-color: #f5f2ec">
      <div class="mx-auto max-w-screen-xl px-6 lg:px-14">
        <div class="grid grid-cols-12 gap-x-6">
          <div class="col-span-12 lg:col-span-4 mb-16 lg:mb-0">
            <p
              class="fade-up font-sans text-xs uppercase tracking-[0.3em] text-stone-400 mb-6"
            >
              Domande frequenti
            </p>
            <h2
              class="fade-up font-serif text-stone-900 leading-tight tracking-tight"
              style="font-size: clamp(2rem, 3.5vw, 3.2rem)"
            >
              Tutto quello<br />che vuoi sapere.
            </h2>
          </div>
          <div class="col-span-12 lg:col-start-6 lg:col-span-7">
            <dl>
              <div
                v-for="(item, i) in faqItems"
                :key="i"
                class="fade-up border-b border-stone-200"
                :style="`transition-delay: ${i * 0.06}s`"
              >
                <dt>
                  <button
                    class="w-full flex items-start justify-between gap-8 text-left py-8 group"
                    :aria-expanded="faqOpen === i"
                    :aria-controls="`faq-c-${i}`"
                    @click="faqOpen = faqOpen === i ? null : i"
                  >
                    <span
                      class="font-serif text-stone-900 leading-snug group-hover:text-stone-500 transition-colors duration-300"
                      style="font-size: clamp(1rem, 1.8vw, 1.4rem)"
                    >
                      {{ item.q }}
                    </span>
                    <span
                      class="flex-shrink-0 mt-1 w-5 h-5 flex items-center justify-center text-stone-400 transition-transform duration-400"
                      :class="faqOpen === i ? 'rotate-45' : ''"
                      aria-hidden="true"
                    >
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                        fill="none"
                      >
                        <line
                          x1="5.5"
                          y1="0"
                          x2="5.5"
                          y2="11"
                          stroke="currentColor"
                          stroke-width="1.2"
                        />
                        <line
                          x1="0"
                          y1="5.5"
                          x2="11"
                          y2="5.5"
                          stroke="currentColor"
                          stroke-width="1.2"
                        />
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd
                  :id="`faq-c-${i}`"
                  class="grid transition-[grid-template-rows] duration-500 ease-in-out"
                  :style="
                    faqOpen === i
                      ? 'grid-template-rows: 1fr'
                      : 'grid-template-rows: 0fr'
                  "
                >
                  <div class="overflow-hidden">
                    <p
                      class="pb-8 font-sans text-sm lg:text-base text-stone-500 font-light leading-loose max-w-xl"
                    >
                      {{ item.a }}
                    </p>
                  </div>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════
         7. FINAL CTA
    ══════════════════════════════════════════════════════════ -->
    <section
      ref="ctaSection"
      class="relative w-full overflow-hidden"
      style="min-height: 90vh; display: flex; align-items: flex-end"
    >
      <div
        ref="ctaBg"
        class="absolute inset-0 scale-[1.08] will-change-transform"
      >
        <NuxtImg
          src="/images/story-card.jpg"
          format="webp"
          width="1920"
          height="1280"
          alt="Un momento raccontato — Valentina Cometti"
          class="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent"
        aria-hidden="true"
      />

      <div class="relative z-10 w-full px-8 lg:px-14 pb-20 lg:pb-28">
        <p
          class="fade-up font-sans text-xs uppercase tracking-[0.3em] text-white/50 mb-8"
        >
          Il tuo capitolo
        </p>
        <h2
          class="fade-up font-serif text-white leading-none tracking-tight mb-12"
          style="font-size: clamp(2.6rem, 6vw, 7rem)"
        >
          Non vedo l'ora<br /><em
            class="not-italic"
            style="color: rgba(245, 242, 236, 0.5)"
            >di conoscere la tua storia.</em
          >
        </h2>
        <a
          href="#contact-form"
          class="fade-up inline-block font-sans text-xs uppercase tracking-[0.3em] text-white border border-white/40 px-14 py-5 hover:bg-white hover:text-[#262624] transition-all duration-500"
          @click.prevent="scrollToForm"
        >
          Inizia qui
        </a>
      </div>
    </section>

    <!-- Footer -->
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useServices } from '~/composables/useServices';

gsap.registerPlugin(ScrollTrigger);

useHead({ title: 'Contatto — Valentina Cometti' });

const { services } = useServices();

// ── Form state (unchanged) ────────────────────────────────────────────────────
const form = reactive({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
});

const submitting = ref(false);
const submitted = ref(false);
const error = ref(false);

async function handleSubmit() {
  if (!form.name || !form.email || !form.message) return;
  submitting.value = true;
  error.value = false;
  try {
    await new Promise((resolve) => setTimeout(resolve, 800));
    submitted.value = true;
    Object.assign(form, {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
  } catch {
    error.value = true;
  } finally {
    submitting.value = false;
  }
}

// ── FAQ state ─────────────────────────────────────────────────────────────────
const faqOpen = ref<number | null>(null);

const faqItems = [
  {
    q: 'Come si svolge una sessione di maternità?',
    a: 'Le sessioni si tengono solitamente tra la 28ª e la 36ª settimana. Ci troviamo in un luogo significativo per te — casa, un bosco, la costa — e lavoriamo con la luce naturale del momento. Nessuna posa forzata: solo presenza.',
  },
  {
    q: 'Quanto tempo prima devo prenotare?',
    a: 'Consiglio almeno 8–10 settimane prima. Per i newborn, il periodo ideale è il 5°–14° giorno di vita: meglio prenotare già in gravidanza per non perdere quella finestra così preziosa.',
  },
  {
    q: 'Quando riceverò le fotografie?',
    a: 'La gallery online viene consegnata entro 3–4 settimane. Per i newborn, entro 2 settimane. Ogni immagine è selezionata e ritoccata singolarmente non filtri in blocco.',
  },
  {
    q: 'Posso stampare le foto?',
    a: 'Sì, ogni pacchetto include licenza di stampa personale illimitata. Collaboro anche con un laboratorio artigianale per album fine-art e stampe museum-quality.',
  },
  {
    q: 'Lavori anche fuori dalla Lombardia?',
    a: "Assolutamente sì. Sono disponibile a viaggiare in tutta Italia e all'estero. Le spese di trasferta vengono concordate in modo trasparente prima della prenotazione.",
  },
];

// ── Testimonials ──────────────────────────────────────────────────────────────
const testimonials = [
  {
    quote:
      'Valentina ha catturato qualcosa che non sapevo come descrivere a parole. Le foto sono diventate il tesoro più prezioso di tutta la mia gravidanza.',
    name: 'Martina R.',
    service: 'Servizio Maternità',
  },
  {
    quote:
      'Avevo paura di non essere fotogenica. Valentina mi ha fatto sentire a mio agio in ogni istante. Le immagini sembrano un sogno.',
    name: 'Sofia B.',
    service: 'Servizio Newborn',
  },
  {
    quote:
      'Non sono mai riuscita a definire cosa cercavo — lei lo ha capito ancora prima che io parlassi. Un\u2019artista vera.',
    name: 'Chiara M.',
    service: 'Servizio Maternità',
  },
];

// ── Instagram grid ────────────────────────────────────────────────────────────
const instagramGrid = [
  { src: '/images/about-01.jpg', alt: 'Maternità', tall: false },
  {
    src: '/images/service-maternity.jpg',
    alt: 'Maternità golden hour',
    tall: true,
  },
  { src: '/images/about-02.jpg', alt: 'Ritratto', tall: false },
  { src: '/images/service-neonati.jpg', alt: 'Neonato', tall: false },
  { src: '/images/story-card.jpg', alt: 'Luce naturale', tall: false },
  { src: '/images/about-03.jpg', alt: 'Outdoor', tall: false },
  { src: '/images/service-matrimonio.jpg', alt: 'Matrimonio', tall: false },
  { src: '/images/service-smash-cake.jpg', alt: 'Smash Cake', tall: false },
];

// ── Scroll to form ────────────────────────────────────────────────────────────
function scrollToForm() {
  const el = document.getElementById('name');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ── GSAP animations ───────────────────────────────────────────────────────────
const heroSection = ref<HTMLElement | null>(null);
const heroBg = ref<HTMLElement | null>(null);
const heroBack = ref<{ $el?: HTMLElement } | null>(null);
const heroEyebrow = ref<HTMLElement | null>(null);
const heroHeadline = ref<HTMLElement | null>(null);
const heroScroll = ref<HTMLElement | null>(null);
const ctaSection = ref<HTMLElement | null>(null);
const ctaBg = ref<HTMLElement | null>(null);

let ctx: gsap.Context;

onMounted(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  ctx = gsap.context(() => {
    if (!reduced) {
      // Hero entrance
      const backEl = (heroBack.value as any)?.$el ?? heroBack.value;
      const tl = gsap.timeline({ delay: 0.15 });
      tl.fromTo(
        heroEyebrow.value,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' },
        0,
      )
        .fromTo(
          heroHeadline.value,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' },
          0.1,
        )
        .fromTo(
          heroScroll.value,
          { opacity: 0 },
          { opacity: 1, duration: 0.8, ease: 'power2.out' },
          0.6,
        )
        .fromTo(
          backEl,
          { opacity: 0 },
          { opacity: 1, duration: 0.8, ease: 'power2.out' },
          0.2,
        );

      // Hero parallax
      if (heroBg.value) {
        gsap.to(heroBg.value, {
          yPercent: 22,
          ease: 'none',
          scrollTrigger: {
            trigger: heroSection.value,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // CTA parallax
      if (ctaBg.value) {
        gsap.to(ctaBg.value, {
          yPercent: 18,
          ease: 'none',
          scrollTrigger: {
            trigger: ctaSection.value,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // Portrait slow scale on scroll
      gsap.fromTo(
        '.contact-portrait',
        { scale: 1.06 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.contact-portrait',
            start: 'top bottom',
            end: 'center center',
            scrub: true,
          },
        },
      );

      // Generic fade-up reveals
      document.querySelectorAll('.fade-up').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          },
        );
      });
    } else {
      // Reduced motion: just ensure everything is visible
      gsap.set([heroEyebrow.value, heroHeadline.value, heroScroll.value], {
        opacity: 1,
      });
      const backEl = (heroBack.value as any)?.$el ?? heroBack.value;
      if (backEl) gsap.set(backEl, { opacity: 1 });
      document
        .querySelectorAll('.fade-up')
        .forEach((el) => gsap.set(el, { opacity: 1, y: 0 }));
    }
  });
});

onUnmounted(() => ctx?.revert());
</script>

<style scoped>
/* ── Form fields ─────────────────────────────────────────── */
.field-group {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.field-label {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: #78716c;
  transition: color 0.3s;
}

.field-group:focus-within .field-label {
  color: #262624;
}

.field-input {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 1rem;
  font-weight: 300;
  color: #262624;
  background: transparent;
  border: none;
  border-bottom: 1px solid #d6d3d1;
  padding: 1rem 0;
  width: 100%;
  outline: none;
  transition: border-color 0.35s;
  -webkit-appearance: none;
  appearance: none;
}

.field-input::placeholder {
  color: #c4bfbb;
}

.field-input:focus {
  border-bottom-color: #262624;
}

select.field-input {
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 7L11 1' stroke='%23262624' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.25rem center;
  padding-right: 1.5rem;
}

/* ── Instagram grid ──────────────────────────────────────── */
.ig-item {
  display: block;
}
</style>
