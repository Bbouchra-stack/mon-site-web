<script setup>
import TheHeader from './TheHeader.vue'
import TheFooter from './TheFooter.vue'
import WhatsAppButton from './WhatsAppButton.vue'
import CookieBanner from './CookieBanner.vue'

defineProps({
  titre: { type: String, required: true },
  chapeau: { type: String, default: '' },
  miseAJour: { type: String, default: '' },
})
</script>

<template>
  <TheHeader prefixe-ancres="/" />

  <main id="contenu">
    <header class="legal-hero">
      <div class="container">
        <a href="/" class="legal-hero__retour">← Retour à l'accueil</a>
        <h1 class="legal-hero__titre">{{ titre }}</h1>
        <p v-if="chapeau" class="legal-hero__chapeau">{{ chapeau }}</p>
        <p v-if="miseAJour" class="legal-hero__date">
          Dernière mise à jour : {{ miseAJour }}
        </p>
      </div>
    </header>

    <div class="container legal-corps">
      <article class="prose">
        <slot />
      </article>
    </div>
  </main>

  <TheFooter prefixe-ancres="/" />
  <WhatsAppButton />
  <CookieBanner />
</template>

<style scoped>
.legal-hero {
  background-color: var(--c-navy);
  color: rgba(255, 255, 255, 0.72);
  padding: 72px 0 64px;
}

.legal-hero__retour {
  display: inline-block;
  margin-bottom: 26px;
  color: var(--c-gold);
  font-size: 0.86rem;
  font-weight: 500;
  letter-spacing: 0.04em;
}

.legal-hero__retour:hover {
  color: #fff;
}

.legal-hero__titre {
  font-size: clamp(2rem, 1.4rem + 2.4vw, 2.9rem);
  color: #fff;
  margin-bottom: 16px;
}

.legal-hero__chapeau {
  max-width: 62ch;
  margin: 0 0 14px;
  color: rgba(255, 255, 255, 0.62);
}

.legal-hero__date {
  margin: 0;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.42);
}

.legal-corps {
  padding-block: 68px 96px;
}

.prose {
  max-width: 76ch;
  margin-inline: auto;
}

@media (max-width: 640px) {
  .legal-hero {
    padding: 48px 0 44px;
  }

  .legal-corps {
    padding-block: 44px 64px;
  }
}
</style>
