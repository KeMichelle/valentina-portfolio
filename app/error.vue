<template>
  <div
    class="error-root"
    style="
      background: #262624;
      min-height: 100svh;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      position: relative;
      overflow: hidden;
    "
  >
    <!-- Giant background number -->
    <span
      ref="bigNum"
      class="error-bg-num"
      aria-hidden="true"
      style="opacity: 0"
      >{{ error?.statusCode ?? 404 }}</span
    >

    <!-- Gradient veil -->
    <div
      class="absolute inset-0 bg-gradient-to-t from-[#262624] via-[#262624]/60 to-transparent"
      aria-hidden="true"
    />

    <!-- Content -->
    <div
      ref="content"
      class="relative z-10 px-8 lg:px-14 pb-20 lg:pb-28"
      style="opacity: 0"
    >
      <p
        class="font-sans text-[0.6rem] uppercase tracking-[0.3em] text-white/30 mb-8"
      >
        {{ error?.statusCode ?? 404 }} — Pagina non trovata
      </p>

      <h1
        class="font-serif text-white leading-none tracking-tight mb-10"
        style="font-size: clamp(2.8rem, 7vw, 8rem)"
      >
        Questa storia<br />
        <em class="not-italic" style="color: rgba(245, 242, 236, 0.38)"
          >non esiste ancora.</em
        >
      </h1>

      <div class="h-px bg-white/10 w-16 mb-10" aria-hidden="true" />

      <p
        class="font-sans text-sm font-light text-white/40 leading-loose mb-14 max-w-sm"
      >
        La pagina che cerchi non è qui — forse è stata spostata,<br
          class="hidden sm:block"
        />
        o forse non è ancora stata scritta.
      </p>

      <NuxtLink
        to="/"
        class="inline-block font-sans text-xs uppercase tracking-[0.3em] text-white border border-white/25 px-12 py-5 hover:bg-white hover:text-[#262624] transition-all duration-500"
      >
        Torna all'inizio
      </NuxtLink>
    </div>

    <!-- Thin top border accent -->
    <div
      class="absolute top-0 left-0 right-0 h-px bg-white/8"
      aria-hidden="true"
    />
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';

defineProps<{
  error?: { statusCode?: number; statusMessage?: string } | null;
}>();

useHead({ title: 'Pagina non trovata — Valentina Cometti' });

const bigNum = ref<HTMLElement | null>(null);
const content = ref<HTMLElement | null>(null);

onMounted(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) {
    gsap.set([bigNum.value, content.value], { opacity: 1 });
    return;
  }

  const tl = gsap.timeline({ delay: 0.1 });
  tl.fromTo(
    bigNum.value,
    { opacity: 0, scale: 1.06 },
    { opacity: 1, scale: 1, duration: 1.4, ease: 'power3.out' },
    0,
  ).fromTo(
    content.value,
    { opacity: 0, y: 32 },
    { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
    0.25,
  );
});
</script>

<style scoped>
.error-root {
  font-family: 'Inter', system-ui, sans-serif;
}

.error-bg-num {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: clamp(14rem, 38vw, 38rem);
  font-weight: 300;
  color: rgba(255, 255, 255, 0.04);
  line-height: 1;
  white-space: nowrap;
  user-select: none;
  pointer-events: none;
  letter-spacing: -0.04em;
}
</style>
