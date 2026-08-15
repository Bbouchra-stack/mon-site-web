<script setup>
import PerformancePanel from './PerformancePanel.vue'
</script>

<template>
  <section id="accueil" class="hero">
    <div class="hero__halo" aria-hidden="true"></div>
    <div class="hero__grille" aria-hidden="true"></div>

    <div class="container hero__inner">
      <div class="hero__contenu">
        <span class="eyebrow" v-reveal>Création de sites web · Casablanca</span>

        <h1 class="hero__titre" v-reveal="80">
          On vous choisit
          <em>avant</em>
          de vous rencontrer
        </h1>

        <p class="hero__sous-titre" v-reveal="180">
          BELWEB Studio dessine et développe des sites sur mesure pour les
          professionnels et les entreprises de Casablanca. Élégants, rapides,
          et pensés pour que celles et ceux qui vous cherchent vous trouvent.
        </p>

        <div class="hero__actions" v-reveal="280">
          <a href="#contact" class="btn btn--primary">Nous contacter</a>
          <a href="#portfolio" class="btn btn--ghost-clair">Voir nos réalisations</a>
        </div>

        <p class="hero__signature" v-reveal="360">
          Premier échange gratuit · Devis sous 48&nbsp;h · Sans engagement
        </p>
      </div>

      <div class="hero__preuve" v-reveal="200">
        <PerformancePanel />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  padding: 116px 0 124px;
  background-color: var(--c-navy);
  color: rgba(255, 255, 255, 0.74);
  scroll-margin-top: var(--header-h);
}

.hero__halo {
  position: absolute;
  top: -300px;
  right: -200px;
  width: 820px;
  height: 820px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(227, 185, 63, 0.15) 0%,
    rgba(47, 179, 168, 0.08) 44%,
    transparent 68%
  );
  pointer-events: none;
}

/* Fine trame décorative */
.hero__grille {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(255, 255, 255, 0.026) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.026) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: radial-gradient(circle at 62% 42%, #000 0%, transparent 70%);
  pointer-events: none;
}

.hero__inner {
  position: relative;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 72px;
  align-items: center;
}

.hero__titre {
  font-size: clamp(2.4rem, 1.2rem + 4.2vw, 4rem);
  line-height: 1.08;
  color: #fff;
  margin-bottom: 26px;
  text-wrap: balance;
}

.hero__titre em {
  display: block;
  font-style: italic;
  color: var(--c-gold);
}

.hero__sous-titre {
  font-size: 1.08rem;
  color: rgba(255, 255, 255, 0.68);
  max-width: 46ch;
  margin-bottom: 38px;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 28px;
}

.hero__signature {
  margin: 0;
  color: rgba(255, 255, 255, 0.42);
  font-size: 0.85rem;
  letter-spacing: 0.02em;
}

.hero__preuve {
  position: relative;
}

@media (max-width: 1024px) {
  .hero__inner {
    grid-template-columns: 1fr;
    gap: 56px;
  }

  .hero__preuve {
    max-width: 460px;
  }
}

@media (max-width: 640px) {
  .hero {
    padding: 70px 0 80px;
  }

  .hero__actions .btn {
    width: 100%;
  }

  .hero__signature {
    font-size: 0.8rem;
  }
}
</style>
