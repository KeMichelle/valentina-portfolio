<template>
  <div class="bg-cream text-charcoal font-sans antialiased">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import Lenis from '@studio-freight/lenis'

const lenis = ref<Lenis | null>(null)

onMounted(() => {
  lenis.value = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true,
  })

  function raf(time: number) {
    lenis.value?.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
})

onBeforeUnmount(() => {
  lenis.value?.destroy()
})
</script>

