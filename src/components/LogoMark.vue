<script setup>
/**
 * Marque BELWEB — reprise du logo (deux lames inclinées or et turquoise).
 * Provisoire : à remplacer par le fichier définitif fourni par le studio.
 */
defineProps({
  taille: { type: Number, default: 40 },
})
</script>

<template>
  <span class="marque" :style="{ width: `${taille}px`, height: `${taille}px` }" aria-hidden="true">
    <svg viewBox="0 0 48 48" role="presentation">
      <defs>
        <linearGradient :id="`or-${taille}`" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0%" stop-color="#f5d24e" />
          <stop offset="100%" stop-color="#e3b93f" />
        </linearGradient>
        <linearGradient :id="`turquoise-${taille}`" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stop-color="#f5d24e" />
          <stop offset="55%" stop-color="#6bc9b4" />
          <stop offset="100%" stop-color="#2fb3a8" />
        </linearGradient>
      </defs>
      <path d="M15 7 L26 11 L20 43 L9 39 Z" :fill="`url(#or-${taille})`" />
      <path d="M30 5 L40 9 L34 41 L24 37 Z" :fill="`url(#turquoise-${taille})`" />
    </svg>
  </span>
</template>

<style scoped>
.marque {
  display: block;
  flex: none;
}

.marque svg {
  width: 100%;
  height: 100%;
}
</style>
