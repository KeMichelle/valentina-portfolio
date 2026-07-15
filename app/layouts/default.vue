<template>
  <div class="relative min-h-screen bg-cream">

    <!-- Fixed Header Navigation -->
    <header class="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 bg-transparent">
      <nav aria-label="Home">
        <NuxtLink to="/" class="font-serif text-charcoal text-sm tracking-widest2 uppercase">
          Valentina
        </NuxtLink>
      </nav>
      <nav class="flex items-center gap-8" aria-label="Main navigation">
        <NuxtLink to="/#work"    class="nav-link">Servizi</NuxtLink>
        <NuxtLink to="/#about"   class="nav-link">About</NuxtLink>
        <NuxtLink to="/#faq"     class="nav-link">FAQ</NuxtLink>
        <NuxtLink to="/contact"  class="nav-link">Contatto</NuxtLink>
      </nav>
    </header>

    <!-- Page Content -->
    <main class="relative z-10">
      <slot />
    </main>

  </div>
</template>

<style scoped>
.nav-link {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #262624;
  transition: color 0.3s;
}
.nav-link:hover {
  color: #7A7E63;
}
</style>
