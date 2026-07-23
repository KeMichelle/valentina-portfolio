<template>
  <!-- Main canvas — sits above the fixed curtain footer -->
  <div class="relative" style="z-index: 10; isolation: isolate">
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <AllServicesGrid />
    <GallerySection />
    <FAQSection />

    <!-- Curtain footer: fixed at z-0, revealed as canvas scrolls away -->
    <footer
      id="contact"
      class="fixed bottom-0 left-0 w-full z-0 overflow-hidden"
      style="height: 75vh"
      aria-label="Footer"
    >
      <SiteFooter />
    </footer>

    <!-- Scroll buffer — same height as footer, lifts canvas clear of viewport -->
    <div
      class="relative z-10 pointer-events-none"
      style="height: 75vh"
      aria-hidden="true"
    />
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

useHead({ title: 'Valentina Cometti — Fotografa' });

onMounted(async () => {
  await nextTick();

  if (import.meta.client) {
    window.scrollTo(0, 0);
    const lenis = (window as any).__lenis;
    if (lenis) lenis.scrollTo(0, { immediate: true });
  }

  setTimeout(() => ScrollTrigger.refresh(), 300);
});
</script>
