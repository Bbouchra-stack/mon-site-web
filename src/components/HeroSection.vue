<script setup>
const reperes = [
  { valeur: '3 sem.', libelle: 'Délai moyen de livraison' },
  { valeur: '100 %', libelle: 'Sites responsives' },
  { valeur: '6 mois', libelle: "D'accompagnement inclus" },
]
</script>

<template>
  <section id="accueil" class="hero">
    <div class="hero__halo" aria-hidden="true"></div>
    <div class="hero__grille" aria-hidden="true"></div>

    <div class="container hero__inner">
      <div class="hero__contenu">
        <span class="eyebrow" v-reveal>Création de sites web · Casablanca</span>

        <h1 class="hero__titre" v-reveal="80">
          Votre activité mérite un site
          <em>à la hauteur</em>
        </h1>

        <p class="hero__sous-titre" v-reveal="180">
          BELWEB Studio conçoit des sites vitrines sur mesure pour les cabinets
          médicaux, les indépendants et les petites entreprises. Une image
          soignée, un site rapide et visible sur Google — pensé pour vous
          amener de vrais patients et clients.
        </p>

        <div class="hero__actions" v-reveal="280">
          <a href="#contact" class="btn btn--primary">Nous contacter</a>
          <a href="#portfolio" class="btn btn--ghost-clair">Voir nos réalisations</a>
        </div>

        <ul class="hero__reperes" v-reveal="380">
          <li v-for="repere in reperes" :key="repere.libelle">
            <strong>{{ repere.valeur }}</strong>
            <span>{{ repere.libelle }}</span>
          </li>
        </ul>
      </div>

      <div class="hero__visuel" aria-hidden="true" v-reveal="200">
        <div class="maquette">
          <div class="maquette__barre">
            <span></span><span></span><span></span>
          </div>
          <div class="maquette__ecran">
            <div class="maquette__bloc maquette__bloc--titre"></div>
            <div class="maquette__bloc maquette__bloc--texte"></div>
            <div class="maquette__bloc maquette__bloc--texte court"></div>
            <div class="maquette__cartes">
              <div class="maquette__carte"></div>
              <div class="maquette__carte"></div>
              <div class="maquette__carte"></div>
            </div>
          </div>
        </div>
        <div class="maquette-mobile">
          <div class="maquette-mobile__bloc"></div>
          <div class="maquette-mobile__bloc court"></div>
          <div class="maquette-mobile__carte"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  padding: 108px 0 116px;
  background-color: var(--c-navy);
  color: rgba(255, 255, 255, 0.74);
  scroll-margin-top: var(--header-h);
}

.hero__halo {
  position: absolute;
  top: -280px;
  right: -180px;
  width: 760px;
  height: 760px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(227, 185, 63, 0.16) 0%,
    rgba(47, 179, 168, 0.09) 42%,
    transparent 68%
  );
  pointer-events: none;
}

/* Fine trame décorative */
.hero__grille {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(255, 255, 255, 0.028) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.028) 1px, transparent 1px);
  background-size: 68px 68px;
  mask-image: radial-gradient(circle at 60% 40%, #000 0%, transparent 72%);
  pointer-events: none;
}

.hero__inner {
  position: relative;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 64px;
  align-items: center;
}

.hero__titre {
  font-size: clamp(2.3rem, 1.3rem + 3.6vw, 3.7rem);
  color: #fff;
  margin-bottom: 24px;
}

.hero__titre em {
  display: block;
  font-style: italic;
  color: var(--c-gold);
}

.hero__sous-titre {
  font-size: 1.06rem;
  color: rgba(255, 255, 255, 0.66);
  max-width: 52ch;
  margin-bottom: 38px;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 54px;
}

.hero__reperes {
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: start;
  gap: 22px 44px;
  margin: 0;
  padding: 30px 0 0;
  list-style: none;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
}

.hero__reperes li {
  display: flex;
  flex-direction: column;
}

.hero__reperes strong {
  font-family: var(--font-titre);
  font-size: 1.7rem;
  font-weight: 600;
  color: var(--c-gold);
  line-height: 1.2;
}

.hero__reperes span {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.55);
}

/* Maquette décorative */
.hero__visuel {
  position: relative;
  padding-bottom: 30px;
}

.maquette {
  border-radius: var(--radius);
  background-color: var(--c-surface);
  box-shadow: 0 34px 70px rgba(0, 0, 0, 0.42);
  overflow: hidden;
  margin-right: 52px;
  transform: rotate(-1.2deg);
}

.maquette__barre {
  display: flex;
  gap: 7px;
  padding: 13px 16px;
  background-color: var(--c-cream-soft);
  border-bottom: 1px solid var(--c-border);
}

.maquette__barre span {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: #cfc9ba;
}

.maquette__barre span:first-child {
  background-color: var(--c-gold);
}

.maquette__ecran {
  padding: 26px 24px 30px;
}

.maquette__bloc {
  border-radius: 4px;
  background-color: var(--c-cream-soft);
  margin-bottom: 12px;
}

.maquette__bloc--titre {
  height: 24px;
  width: 62%;
  background: linear-gradient(90deg, var(--c-navy), var(--c-navy-soft));
}

.maquette__bloc--texte {
  height: 10px;
  width: 100%;
}

.maquette__bloc--texte.court {
  width: 70%;
  margin-bottom: 26px;
}

.maquette__cartes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.maquette__carte {
  height: 76px;
  border-radius: 6px;
  background-color: var(--c-cream);
  border: 1px solid var(--c-border);
}

.maquette__carte:first-child {
  background: linear-gradient(160deg, var(--c-gold-soft), var(--c-cream));
  border-color: var(--c-gold-soft);
}

.maquette-mobile {
  position: absolute;
  right: 0;
  bottom: -4px;
  width: 124px;
  padding: 16px 12px;
  border-radius: 14px;
  background-color: var(--c-surface);
  box-shadow: 0 26px 50px rgba(0, 0, 0, 0.4);
  transform: rotate(3deg);
}

.maquette-mobile__bloc {
  height: 9px;
  border-radius: 4px;
  background-color: var(--c-cream-soft);
  margin-bottom: 8px;
}

.maquette-mobile__bloc.court {
  width: 60%;
}

.maquette-mobile__carte {
  height: 62px;
  border-radius: 8px;
  background: linear-gradient(160deg, var(--c-gold), var(--c-teal));
  margin-top: 12px;
}

@media (max-width: 1024px) {
  .hero__inner {
    grid-template-columns: 1fr;
    gap: 52px;
  }

  .hero__visuel {
    max-width: 480px;
  }
}

@media (max-width: 640px) {
  .hero {
    padding: 68px 0 76px;
  }

  .hero__actions .btn {
    width: 100%;
  }

  .hero__reperes {
    grid-template-columns: repeat(2, auto);
    gap: 20px 32px;
  }

  .maquette-mobile {
    display: none;
  }
}
</style>
