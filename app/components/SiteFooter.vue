<template>
  <div class="flex flex-col h-full" style="background-color: #262624;">

    <!-- Instagram strip -->
    <div class="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 flex-shrink-0 border-b border-[#333330]">
      <a
        v-for="(ig, i) in instagramImages"
        :key="i"
        href="https://www.instagram.com/by.mothernature.fotografie/"
        target="_blank"
        rel="noopener noreferrer"
        class="relative overflow-hidden aspect-square block group"
        :aria-label="`Visita @by.mothernature.fotografie su Instagram`"
      >
        <div
          class="absolute inset-0"
          :style="`background-color: ${ig.bg};`"
          aria-hidden="true"
        />
        <NuxtImg
          :src="ig.src"
          format="webp"
          width="300"
          height="300"
          :alt="`@by.mothernature.fotografie — post ${i + 1}`"
          class="relative w-full h-full object-cover opacity-60 group-hover:opacity-85 transition-opacity duration-500"
          loading="lazy"
        />
      </a>
    </div>

    <!-- Footer content -->
    <div class="flex-1 flex flex-col justify-center px-6 lg:px-20 py-8 lg:py-12 min-h-0">
      <p
        class="font-serif leading-none tracking-tight mb-6 lg:mb-8"
        style="font-size: clamp(2rem, 4.5vw, 5.5rem); color: #F5F2EC;"
      >
        Raccontiamo<br /><em class="not-italic" style="color: #7A7E63;">la tua storia.</em>
      </p>

      <div class="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">

        <div class="flex flex-col gap-3">
          <a
            href="mailto:valentinacomettifotografa@outlook.it"
            class="font-sans text-sm text-[#F5F2EC]/70 hover:text-[#F5F2EC] transition-colors duration-300"
          >
            valentinacomettifotografa@outlook.it
          </a>
          <span class="flex items-center gap-2 font-sans text-sm text-[#F5F2EC]/50">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M12 21C12 21 5 13.5 5 8.5a7 7 0 0 1 14 0c0 5-7 12.5-7 12.5z"/>
              <circle cx="12" cy="8.5" r="2.5"/>
            </svg>
            Studio Valentina Cometti — Bergamo
          </span>
        </div>

        <nav class="flex flex-wrap gap-6 lg:gap-8" aria-label="Footer navigation">
          <NuxtLink to="/#about"   class="footer-nav-link">About</NuxtLink>
          <NuxtLink to="/#work"    class="footer-nav-link">Servizi</NuxtLink>
          <NuxtLink to="/#faq"     class="footer-nav-link">FAQ</NuxtLink>
          <NuxtLink to="/contact"  class="footer-nav-link">Contatto</NuxtLink>
          <a
            href="https://www.instagram.com/by.mothernature.fotografie/"
            target="_blank"
            rel="noopener noreferrer"
            class="footer-nav-link"
          >
            Instagram
          </a>
        </nav>

      </div>

      <p class="mt-5 font-sans text-[0.62rem] uppercase tracking-widest" style="color: rgba(245,242,236,0.2);">
        © {{ year }} Valentina Cometti Fotografia — P.IVA in fase di registrazione
      </p>
    </div>

  </div>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()

const instagramImages = [
  { src: '/images/ig-01.jpg', bg: '#8C7B6B' },
  { src: '/images/ig-02.jpg', bg: '#7A7E63' },
  { src: '/images/ig-03.jpg', bg: '#6B7C7A' },
  { src: '/images/ig-04.jpg', bg: '#7E6B6B' },
  { src: '/images/ig-05.jpg', bg: '#8C7B6B' },
  { src: '/images/ig-06.jpg', bg: '#7A7E63' },
  { src: '/images/ig-07.jpg', bg: '#6B7C7A' },
  { src: '/images/ig-08.jpg', bg: '#7E6B6B' },
]
</script>

<style scoped>
.footer-nav-link {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  color: rgba(245, 242, 236, 0.4);
  transition: color 0.3s;
}
.footer-nav-link:hover {
  color: #F5F2EC;
}
</style>
