<template>
  <section
    id="faq"
    class="relative z-10 w-full py-24 lg:py-40"
    style="background-color: #F5F2EC;"
  >
    <div class="mx-auto max-w-screen-xl px-6 lg:px-12">
      <div class="grid grid-cols-12 gap-x-6 items-start">

        <!-- Vertical title — desktop only -->
        <div class="col-span-3 hidden lg:flex items-start pt-2">
          <p
            class="font-serif text-stone-200 select-none leading-none tracking-tighter whitespace-nowrap"
            style="
              font-size: clamp(4rem, 7vw, 8rem);
              writing-mode: vertical-rl;
              text-orientation: mixed;
              transform: rotate(180deg);
            "
            aria-hidden="true"
          >
            Domande Frequenti
          </p>
        </div>

        <!-- Accordion -->
        <div class="col-span-12 lg:col-span-9">
          <p class="lg:hidden font-sans text-xs uppercase tracking-[0.3em] text-stone-400 mb-10">
            Domande Frequenti
          </p>

          <dl class="divide-y divide-stone-200">
            <div
              v-for="(item, i) in items"
              :key="i"
              class="py-6 lg:py-8"
            >
              <dt>
                <button
                  class="w-full flex items-start justify-between gap-8 text-left group"
                  :aria-expanded="open === i"
                  :aria-controls="`faq-answer-${i}`"
                  @click="open = open === i ? null : i"
                >
                  <span
                    class="font-serif text-stone-900 leading-snug transition-colors duration-200 group-hover:text-stone-500"
                    style="font-size: clamp(1.1rem, 2vw, 1.6rem);"
                  >
                    {{ item.q }}
                  </span>
                  <span
                    class="flex-shrink-0 mt-1 w-6 h-6 flex items-center justify-center
                           rounded-full border border-stone-300 text-stone-500
                           transition-transform duration-300"
                    :class="open === i ? 'rotate-45' : 'rotate-0'"
                    aria-hidden="true"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <line x1="6" y1="0" x2="6" y2="12" stroke="currentColor" stroke-width="1.5"/>
                      <line x1="0" y1="6" x2="12" y2="6" stroke="currentColor" stroke-width="1.5"/>
                    </svg>
                  </span>
                </button>
              </dt>

              <dd
                :id="`faq-answer-${i}`"
                class="grid transition-[grid-template-rows] duration-500 ease-in-out"
                :style="open === i ? 'grid-template-rows: 1fr;' : 'grid-template-rows: 0fr;'"
              >
                <div class="overflow-hidden">
                  <p class="pt-4 pb-1 font-sans text-stone-600 font-light leading-relaxed text-sm lg:text-base max-w-2xl">
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
</template>

<script setup lang="ts">
const open = ref<number | null>(null)

const items = [
  {
    q: 'Come si svolge una sessione di maternità?',
    a: 'Le sessioni di maternità si tengono solitamente tra la 28ª e la 36ª settimana. Ci troviamo in un luogo significativo per te — casa tua, un bosco, la costa — e lavoriamo con la luce naturale del momento. Non ci sono pose forzate: solo movimento, respiro e presenza.',
  },
  {
    q: 'Quanto tempo prima devo prenotare?',
    a: "Consiglio di prenotare almeno 8–10 settimane prima della data desiderata, soprattutto per sessioni di maternità dove il timing è delicato. Per i newborn, il periodo ideale è tra il 5° e il 14° giorno di vita — meglio prenotare durante la gravidanza.",
  },
  {
    q: 'Quando riceverò le fotografie?',
    a: 'La gallery online viene consegnata entro 3–4 settimane dalla sessione. Per i newborn, entro 2 settimane. Ogni gallery include immagini selezionate e ritoccate singolarmente, non filtri applicati in blocco.',
  },
  {
    q: 'Posso stampare le foto?',
    a: 'Sì. Con ogni pacchetto ricevi una licenza di stampa personale illimitata. Collaboro anche con un laboratorio artigianale per album fine-art e stampe museum-quality — possiamo parlarne durante la nostra call conoscitiva.',
  },
  {
    q: 'Lavori anche fuori dalla Lombardia?',
    a: "Assolutamente sì. Sono disponibile a viaggiare in tutta Italia e all'estero. Le spese di trasferta vengono concordate in modo trasparente prima della prenotazione.",
  },
]
</script>
