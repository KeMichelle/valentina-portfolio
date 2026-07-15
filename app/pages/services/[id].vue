<template>
  <div class="relative z-10 min-h-screen bg-cream pt-32 pb-40 px-8 md:px-20 lg:px-36">

    <template v-if="service">

      <!-- Back link -->
      <NuxtLink
        to="/#work"
        class="inline-block font-sans text-xs tracking-widest uppercase text-clay mb-20 hover:text-charcoal transition-colors duration-300"
      >
        ← Back
      </NuxtLink>

      <!-- Title block -->
      <div class="mb-20 max-w-3xl">
        <p class="font-sans text-xs tracking-widest2 uppercase text-clay mb-4">
          {{ service.subtitle }}
        </p>
        <h1 class="font-serif text-[clamp(3rem,8vw,7rem)] font-light leading-editorial text-charcoal">
          {{ service.title }}
        </h1>
      </div>

      <!-- Description -->
      <div class="max-w-xl mb-24">
        <p class="font-sans text-sm leading-relaxed text-charcoal/70 font-light">
          {{ service.description }}
        </p>
      </div>

      <!-- Pricing items -->
      <div class="border-t border-sand">
        <div
          v-for="(item, index) in service.pricing"
          :key="index"
          class="flex items-start justify-between py-8 border-b border-sand gap-8"
        >
          <div class="flex-1">
            <h3 class="font-serif text-2xl font-light text-charcoal mb-2">{{ item.name }}</h3>
            <p class="font-sans text-xs text-charcoal/50 leading-relaxed font-light max-w-sm">{{ item.includes }}</p>
          </div>
          <span class="font-serif text-2xl font-light text-clay whitespace-nowrap">{{ item.price }}</span>
        </div>
      </div>

    </template>

    <!-- 404 state -->
    <template v-else>
      <p class="font-sans text-sm text-charcoal/40 tracking-widest uppercase">Service not found.</p>
    </template>

  </div>
</template>

<script setup lang="ts">
interface PricingItem {
  name: string
  includes: string
  price: string
}

interface Service {
  id: string
  title: string
  subtitle: string
  description: string
  pricing: PricingItem[]
}

const services: Service[] = [
  {
    id: 'maternita',
    title: 'Maternità',
    subtitle: 'Servizio fotografico',
    description:
      'Un momento sospeso, intimo e luminoso. Il tuo corpo che cambia, la luce che racconta. Ogni sessione di maternità è pensata per celebrare questa fase unica della tua vita con immagini senza tempo.',
    pricing: [
      {
        name: 'Essenziale',
        includes: 'Sessione da 1 ora · 15 immagini ritoccate · Gallery privata online',
        price: '€ 350',
      },
      {
        name: 'Nido',
        includes: 'Sessione da 2 ore · 30 immagini ritoccate · Gallery privata online · 1 stampa fine art 30×40',
        price: '€ 580',
      },
      {
        name: 'Storia Completa',
        includes: 'Sessione da 3 ore · location multipla · 50 immagini ritoccate · Gallery · Stampe e album inclusi',
        price: '€ 950',
      },
    ],
  },
  {
    id: 'neonati',
    title: 'Neonati',
    subtitle: 'Servizio fotografico',
    description:
      'I primi giorni sono irripetibili. Fotografie morbide, calde e delicate realizzate nei primi dieci giorni di vita. Uno studio sicuro, attrezzato e pensato per il massimo comfort del piccolo e della famiglia.',
    pricing: [
      {
        name: 'Primo Respiro',
        includes: 'Sessione da 2–3 ore · 20 immagini ritoccate · Gallery privata online',
        price: '€ 420',
      },
      {
        name: 'Familia',
        includes: 'Sessione da 3–4 ore · 35 immagini ritoccate · ritratti individuali e di famiglia · Gallery',
        price: '€ 650',
      },
      {
        name: 'Racconto',
        includes: 'Sessione completa · 50 immagini · Gallery · Album artigianale 20×20 · Stampe fine art',
        price: '€ 1.050',
      },
    ],
  },
  {
    id: 'famiglia',
    title: 'Famiglia',
    subtitle: 'Servizio fotografico',
    description:
      'La famiglia in movimento, nel suo ritmo quotidiano. Reportage autentico o ritratti curati: catturiamo la connessione reale tra le persone che ami, nei luoghi che appartengono alla vostra storia.',
    pricing: [
      {
        name: 'Incontro',
        includes: 'Sessione da 1 ora · location a scelta · 20 immagini ritoccate · Gallery privata',
        price: '€ 320',
      },
      {
        name: 'Giornata',
        includes: 'Sessione da 2 ore · 40 immagini ritoccate · Gallery privata · 1 stampa fine art',
        price: '€ 520',
      },
      {
        name: 'Archivio',
        includes: 'Sessione da 3 ore · location multipla · 60 immagini · Gallery · Album e stampe incluse',
        price: '€ 880',
      },
    ],
  },
]

const route = useRoute()
const service = computed(() =>
  services.find((s) => s.id === route.params.id)
)

useHead({
  title: computed(() =>
    service.value ? `${service.value.title} — Valentina` : 'Servizio — Valentina'
  ),
})
</script>
