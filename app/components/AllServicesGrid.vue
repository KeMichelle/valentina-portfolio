<template>
  <section
    class="relative z-10 w-full pb-24 lg:pb-32"
    style="background-color: #262624;"
  >
    <div class="mx-auto max-w-screen-xl px-6 lg:px-12">

      <!-- Header -->
      <div class="flex items-end justify-between pt-12 pb-12 lg:pb-16 border-t border-stone-800">
        <h2
          class="font-serif text-white leading-none tracking-tight"
          style="font-size: clamp(1.4rem, 2.5vw, 2.5rem);"
        >
          Tutti i Servizi
        </h2>
        <NuxtLink
          to="/contact"
          class="font-sans text-xs uppercase tracking-[0.25em] text-stone-500
                 border-b border-stone-700 pb-0.5
                 hover:text-white hover:border-white transition-colors duration-300"
        >
          Richiedi un preventivo
        </NuxtLink>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px" style="background-color: #333330;">
        <NuxtLink
  v-for="service in services"
  :key="service.id"
  :to="`/services/${service.slug}`"
  class="group relative aspect-[4/5] overflow-hidden"
>
  <NuxtImg
    :src="service.cover"
    :alt="service.title"
    width="900"
    height="1100"
    format="webp"
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
      style="font-size: clamp(1.6rem,2vw,2.2rem)"
    >
      {{ service.title }}
    </h3>

    <div class="flex items-center justify-between mt-5">

      <span
        class="font-serif text-stone-200 text-lg"
      >
        {{ service.pricing[0]?.price }}
      </span>

      <span
        class="uppercase tracking-[0.25em] text-xs text-white opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
      >
        Discover →
      </span>

    </div>

  </div>

</NuxtLink>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { useServices } from '~/composables/useServices'
const { services } = useServices()
</script>
