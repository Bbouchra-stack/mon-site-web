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

    <div class="container hero__inner">
      <div class="hero__contenu">
        <span class="eyebrow">Création de sites web</span>
        <h1 class="hero__titre">
          Votre activité mérite un site
          <span class="hero__surligne">à la hauteur</span>
        </h1>
        <p class="hero__sous-titre">
          Bouchra Web Studio conçoit des sites vitrines sur mesure pour les
          artisans, indépendants et petites entreprises. Un site élégant,
          rapide, visible sur Google — et pensé pour vous amener de vrais
          clients.
        </p>

        <div class="hero__actions">
          <a href="#contact" class="btn btn--primary">Nous contacter</a>
          <a href="#portfolio" class="btn btn--ghost">Voir nos réalisations</a>
        </div>

        <ul class="hero__reperes">
          <li v-for="repere in reperes" :key="repere.libelle">
            <strong>{{ repere.valeur }}</strong>
            <span>{{ repere.libelle }}</span>
          </li>
        </ul>
      </div>

      <div class="hero__visuel" aria-hidden="true">
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
  padding: 84px 0 92px;
  background: linear-gradient(180deg, #ffffff 0%, var(--c-bg) 100%);
  scroll-margin-top: var(--header-h);
}

.hero__halo {
  position: absolute;
  top: -220px;
  right: -160px;
  width: 620px;
  height: 620px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(79, 70, 229, 0.16) 0%,
    rgba(14, 165, 164, 0.1) 45%,
    transparent 70%
  );
  pointer-events: none;
}

.hero__inner {
  position: relative;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 56px;
  align-items: center;
}

.hero__titre {
  font-size: clamp(2.1rem, 1.3rem + 3.4vw, 3.4rem);
  margin-bottom: 20px;
}

.hero__surligne {
  position: relative;
  display: inline-block;
  isolation: isolate;
  color: var(--c-primary);
}

.hero__surligne::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 4px;
  height: 10px;
  border-radius: 6px;
  background: linear-gradient(
    90deg,
    rgba(79, 70, 229, 0.18),
    rgba(14, 165, 164, 0.28)
  );
  z-index: -1;
}

.hero__sous-titre {
  font-size: 1.1rem;
  color: var(--c-muted);
  max-width: 52ch;
  margin-bottom: 32px;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 44px;
}

.hero__reperes {
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: start;
  gap: 22px 38px;
  margin: 0;
  padding: 26px 0 0;
  list-style: none;
  border-top: 1px solid var(--c-border);
}

.hero__reperes li {
  display: flex;
  flex-direction: column;
}

.hero__reperes strong {
  font-size: 1.5rem;
  color: var(--c-ink);
  line-height: 1.2;
}

.hero__reperes span {
  font-size: 0.9rem;
  color: var(--c-muted);
}

/* Maquette décorative */
.hero__visuel {
  position: relative;
  padding-bottom: 30px;
}

.maquette {
  border-radius: var(--radius-lg);
  background-color: var(--c-surface);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--c-border);
  overflow: hidden;
  margin-right: 52px;
  transform: rotate(-1.2deg);
}

.maquette__barre {
  display: flex;
  gap: 7px;
  padding: 13px 16px;
  background-color: var(--c-bg-soft);
  border-bottom: 1px solid var(--c-border);
}

.maquette__barre span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #cbd5e1;
}

.maquette__barre span:first-child {
  background-color: #f9a8a8;
}

.maquette__barre span:nth-child(2) {
  background-color: #fcd9a0;
}

.maquette__ecran {
  padding: 26px 24px 30px;
}

.maquette__bloc {
  border-radius: 8px;
  background-color: var(--c-bg-soft);
  margin-bottom: 12px;
}

.maquette__bloc--titre {
  height: 26px;
  width: 65%;
  background: linear-gradient(90deg, var(--c-primary), var(--c-accent));
  opacity: 0.85;
}

.maquette__bloc--texte {
  height: 12px;
  width: 100%;
}

.maquette__bloc--texte.court {
  width: 72%;
  margin-bottom: 26px;
}

.maquette__cartes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.maquette__carte {
  height: 78px;
  border-radius: 12px;
  background: linear-gradient(160deg, var(--c-primary-light), var(--c-accent-light));
  border: 1px solid var(--c-border);
}

.maquette-mobile {
  position: absolute;
  right: 0;
  bottom: -4px;
  width: 122px;
  padding: 16px 12px;
  border-radius: 20px;
  background-color: var(--c-surface);
  border: 1px solid var(--c-border);
  box-shadow: var(--shadow-lg);
  transform: rotate(3deg);
}

.maquette-mobile__bloc {
  height: 10px;
  border-radius: 6px;
  background-color: var(--c-bg-soft);
  margin-bottom: 8px;
}

.maquette-mobile__bloc.court {
  width: 60%;
}

.maquette-mobile__carte {
  height: 62px;
  border-radius: 12px;
  background: linear-gradient(160deg, var(--c-primary), var(--c-accent));
  opacity: 0.9;
  margin-top: 12px;
}

@media (max-width: 1024px) {
  .hero__inner {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .hero__visuel {
    max-width: 480px;
  }
}

@media (max-width: 640px) {
  .hero {
    padding: 56px 0 64px;
  }

  .hero__actions .btn {
    width: 100%;
  }

  .hero__reperes {
    grid-template-columns: repeat(2, auto);
    gap: 20px 30px;
  }

  .maquette-mobile {
    display: none;
  }
}
</style>
