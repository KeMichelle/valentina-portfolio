<template>
  <div class="relative min-h-screen bg-cream">
    <!-- Fixed Header Navigation -->
    <header
      ref="headerEl"
      class="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 transition-all duration-500"
      :class="scrolled ? 'header-frosted' : 'bg-transparent'"
    >
      <nav aria-label="Home">
        <NuxtLink
          to="/"
          class="font-serif text-charcoal text-sm tracking-widest2 uppercase nav-wordmark"
        >
          Valentina
        </NuxtLink>
      </nav>

      <!-- Main nav — handles smart hash scrolling on home page -->
      <nav
        class="flex items-center gap-8"
        aria-label="Main navigation"
        @click.capture="handleNavClick"
      >
        <NuxtLink to="/#work" class="nav-link">Servizi</NuxtLink>
        <NuxtLink to="/#about" class="nav-link">About</NuxtLink>
        <NuxtLink to="/#faq" class="nav-link">FAQ</NuxtLink>
        <NuxtLink to="/contact" class="nav-link">Contatto</NuxtLink>
      </nav>
    </header>

    <!-- Page Content -->
    <main class="relative z-10">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const scrolled = ref(false);

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
