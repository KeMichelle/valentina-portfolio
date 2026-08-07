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

const {
  public: { siteUrl },
} = useRuntimeConfig();

useSeoMeta({
  title: 'Valentina Cometti — Fotografa Bergamo | Maternità, Newborn, Famiglia',
  description:
    'Valentina Cometti, fotografa di maternità, newborn e famiglia a Bergamo, Brescia e Milano. Immagini poetiche e luminose per i momenti più importanti della tua vita.',
  ogTitle: 'Valentina Cometti — Fotografa Bergamo',
  ogDescription:
    'Fotografa di maternità, newborn e famiglia a Bergamo. Immagini poetiche per i momenti più importanti.',
  ogImage: `${siteUrl}/images/service-maternity.jpg`,
  ogUrl: `${siteUrl}/`,
  twitterTitle: 'Valentina Cometti — Fotografa Bergamo',
  twitterDescription: 'Fotografa di maternità, newborn e famiglia a Bergamo.',
  twitterImage: `${siteUrl}/images/service-maternity.jpg`,
});

useHead({
  link: [{ rel: 'canonical', href: `${siteUrl}/` }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Person',
            '@id': `${siteUrl}/#person`,
            name: 'Valentina Cometti',
            jobTitle: 'Fotografa',
            url: siteUrl,
            image: `${siteUrl}/images/about-01.jpg`,
            email: 'valentinacomettifotografa@outlook.it',
            sameAs: ['https://www.instagram.com/by.mothernature.fotografie/'],
          },
          {
            '@type': 'LocalBusiness',
            '@id': `${siteUrl}/#business`,
            name: 'Valentina Cometti Fotografa',
            image: `${siteUrl}/images/about-01.jpg`,
            url: siteUrl,
            email: 'valentinacomettifotografa@outlook.it',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Via della Morlana 23',
              addressLocality: 'Romano di Lombardia',
              addressRegion: 'Bergamo',
              postalCode: '24058',
              addressCountry: 'IT',
            },
            areaServed: ['Bergamo', 'Brescia', 'Milano', 'Italia'],
            priceRange: '€€',
            sameAs: ['https://www.instagram.com/by.mothernature.fotografie/'],
            knowsAbout: [
              'Fotografia di maternità',
              'Fotografia newborn',
              'Fotografia di famiglia',
              'Smash cake fotografia',
              'Fotografia matrimoniale',
            ],
          },
          {
            '@type': 'WebSite',
            '@id': `${siteUrl}/#website`,
            url: siteUrl,
            name: 'Valentina Cometti Fotografa',
            inLanguage: 'it',
            publisher: { '@id': `${siteUrl}/#person` },
          },
        ],
      }),
    },
  ],
});

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
