<script setup>
import { choixCookies, rouvrirBanniere } from '../composables/consentement.js'

const familles = [
  {
    id: 'essentiels',
    titre: 'Cookies essentiels',
    description:
      "Indispensables au fonctionnement du site : mémorisation de votre choix de consentement et sécurité des formulaires. Ils ne peuvent pas être désactivés et ne servent à aucun suivi publicitaire.",
    statut: 'Toujours actifs',
  },
  {
    id: 'mesure',
    titre: "Mesure d'audience",
    description:
      "Statistiques anonymes de fréquentation : pages consultées, durée de visite, type d'appareil. Elles nous aident à améliorer le site. Déposées uniquement après votre accord.",
    statut: 'Soumis à votre accord',
  },
  {
    id: 'choix',
    titre: 'Vos choix, à tout moment',
    description:
      "Vous pouvez accepter, refuser ou changer d'avis quand vous le souhaitez. Aucun cookie publicitaire ni revente de données à des tiers : ce n'est pas notre façon de travailler.",
    statut: 'Modifiable à tout moment',
  },
]

const libelleChoix = {
  accepte: 'Vous avez accepté la mesure d’audience.',
  refuse: 'Vous avez refusé la mesure d’audience.',
}
</script>

<template>
  <section id="cookies" class="section section--surface">
    <div class="container">
      <div class="section__head">
        <span class="eyebrow" v-reveal>Cookies &amp; confidentialité</span>
        <h2 class="section__title" v-reveal="60">Transparence sur vos données</h2>
        <p class="section__subtitle" v-reveal="120">
          Nous utilisons le strict nécessaire, et rien ne se fait sans votre
          accord.
        </p>
      </div>

      <ul class="familles">
        <li
          v-for="(famille, index) in familles"
          :key="famille.id"
          class="famille"
          v-reveal="index * 140"
        >
          <span class="famille__statut">{{ famille.statut }}</span>
          <h3 class="famille__titre">{{ famille.titre }}</h3>
          <p class="famille__description">{{ famille.description }}</p>
        </li>
      </ul>

      <div class="cookies__pied" v-reveal="120">
        <p v-if="choixCookies" class="cookies__choix">
          {{ libelleChoix[choixCookies] }}
        </p>
        <button type="button" class="btn btn--ghost" @click="rouvrirBanniere">
          Gérer mes cookies
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.familles {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 26px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.famille {
  padding: 34px 28px 32px;
  border: 1px solid var(--c-border);
  border-radius: var(--radius);
  background-color: var(--c-cream);
  transition: border-color 0.3s ease, transform 0.3s ease,
    box-shadow 0.3s ease;
}

.famille:hover {
  border-color: var(--c-gold);
  transform: translateY(-4px);
  box-shadow: var(--shadow);
}

.famille__statut {
  display: inline-block;
  margin-bottom: 16px;
  padding: 5px 12px;
  border: 1px solid #eddfb6;
  border-radius: 2px;
  background-color: #fdf6e3;
  color: #8f6417;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.famille__titre {
  font-size: 1.16rem;
  margin-bottom: 10px;
}

.famille__description {
  margin: 0;
  font-size: 0.93rem;
  color: var(--c-muted);
}

.cookies__pied {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 18px 26px;
  margin-top: 48px;
  text-align: center;
}

.cookies__choix {
  margin: 0;
  font-size: 0.92rem;
  color: var(--c-muted);
}

@media (max-width: 900px) {
  .familles {
    grid-template-columns: 1fr;
    max-width: 560px;
    margin-inline: auto;
  }
}
</style>
