<template>
  <div class="relative min-h-screen bg-cream">
    <!-- Fixed Header Navigation -->
    <header
      ref="headerEl"
      class="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-8 py-6 transition-all duration-500"
      :class="
        scrolled && !isMobileMenuOpen ? 'header-frosted' : 'bg-transparent'
      "
    >
      <nav aria-label="Home" class="relative z-50">
        <NuxtLink
          to="/"
          class="font-serif text-charcoal text-sm tracking-widest2 uppercase nav-wordmark"
          @click="isMobileMenuOpen = false"
        >
          Valentina
        </NuxtLink>
      </nav>

      <!-- Main nav — Desktop Only (hidden on mobile) -->
      <nav
        class="hidden md:flex items-center gap-8"
        aria-label="Main navigation"
        @click.capture="handleNavClick"
      >
        <NuxtLink to="/#work" class="nav-link">Servizi</NuxtLink>
        <NuxtLink to="/#about" class="nav-link">About</NuxtLink>
        <NuxtLink to="/#faq" class="nav-link">FAQ</NuxtLink>
        <NuxtLink to="/contact" class="nav-link">Contatto</NuxtLink>
      </nav>

      <!-- Hamburger Button — Mobile Only -->
      <button
        class="md:hidden relative z-50 flex flex-col items-center justify-center w-8 h-8 gap-1.5 focus:outline-none"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        aria-label="Toggle mobile menu"
      >
        <span
          class="block w-6 h-px bg-charcoal transition-transform duration-300 origin-center"
          :class="isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''"
        />
        <span
          class="block w-6 h-px bg-charcoal transition-opacity duration-300"
          :class="isMobileMenuOpen ? 'opacity-0' : 'opacity-100'"
        />
        <span
          class="block w-6 h-px bg-charcoal transition-transform duration-300 origin-center"
          :class="isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''"
        />
      </button>
    </header>

    <!-- Mobile Full-Screen Overlay Menu -->
    <div
      class="fixed inset-0 bg-cream z-40 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out md:hidden"
      :class="isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'"
    >
      <nav
        class="flex flex-col items-center gap-10"
        aria-label="Mobile navigation"
        @click.capture="handleNavClick"
      >
        <NuxtLink to="/#work" class="nav-link text-lg">Servizi</NuxtLink>
        <NuxtLink to="/#about" class="nav-link text-lg">About</NuxtLink>
        <NuxtLink to="/#faq" class="nav-link text-lg">FAQ</NuxtLink>
        <NuxtLink to="/contact" class="nav-link text-lg">Contatto</NuxtLink>
      </nav>
    </div>

    <!-- Page Content -->
    <main class="relative z-10">
      <slot />
    </main>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';

const route = useRoute();
const scrolled = ref(false);
const isMobileMenuOpen = ref(false); // <-- ADD THIS

// ── Frosted-glass header on scroll ──────────────────────────────
onMounted(() => {
  window.addEventListener(
    'scroll',
    () => {
      scrolled.value = window.scrollY > 60;
    },
    { passive: true },
  );
});

// ── Smart navigation — smooth scroll for hash links on home ─────
function handleNavClick(e: MouseEvent) {
  const link = (e.target as HTMLElement).closest('a');
  if (!link) return;

  // Close the mobile menu whenever a link is clicked
  isMobileMenuOpen.value = false;

  const href = link.getAttribute('href');
  if (!href?.startsWith('/#')) return; // not a hash link — let router handle it
  if (route.path !== '/') return; // not on home page — let router navigate normally

  // We're on home + clicking a section link: smooth scroll instead of reload
  e.preventDefault();

  const id = href.slice(2); // '/#work' → 'work'
  const el = document.getElementById(id);
  if (!el) return;

  const lenis = (window as any).__lenis;
  if (lenis) {
    lenis.scrollTo(el, {
      offset: -88, // account for fixed header height
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  } else {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<style scoped>
/* ─── Nav links ─────────────────────────────────────────────── */
.nav-link {
  position: relative;
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #262624;
  transition: color 0.3s;
  padding-bottom: 2px;
}

/* Animated underline: slides in from right on hover/active */
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 1px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: right center;
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
.nav-link:hover,
.nav-link.router-link-active {
  color: #7a7e63;
}
.nav-link:hover::after,
.nav-link.router-link-active::after {
  transform: scaleX(1);
  transform-origin: left center;
}

/* ─── Wordmark hover ────────────────────────────────────────── */
.nav-wordmark {
  transition: opacity 0.3s;
}
.nav-wordmark:hover {
  opacity: 0.6;
}

/* ─── Frosted header (appears on scroll) ────────────────────── */
.header-frosted {
  background: rgba(245, 242, 236, 0.82);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(38, 38, 36, 0.06);
}
</style>
