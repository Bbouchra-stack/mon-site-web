<script setup>
import { choixCookies, rouvrirBanniere } from '../composables/consentement.js'

const familles = [
  {
    id: 'essentiels',
    titre: 'Cookies essentiels',
    description:
      'Mémorisation de votre choix et sécurité des formulaires. Aucun suivi publicitaire.',
    statut: 'Toujours actifs',
  },
  {
    id: 'mesure',
    titre: "Mesure d'audience",
    description:
      "Statistiques anonymes de fréquentation, déposées uniquement après votre accord.",
    statut: 'Soumis à votre accord',
  },
  {
    id: 'choix',
    titre: 'Vos choix, à tout moment',
    description:
      'Ni cookie publicitaire, ni revente de données. Vous pouvez changer d’avis quand vous voulez.',
    statut: 'Modifiable',
  },
]

const libelleChoix = {
  accepte: 'Vous avez accepté la mesure d’audience.',
  refuse: 'Vous avez refusé la mesure d’audience.',
}
</script>

<template>
  <!-- Bandeau volontairement discret : l'attention doit rester sur les services. -->
  <section id="cookies" class="cookies">
    <div class="container">
      <div class="cookies__inner" v-reveal>
        <div class="cookies__intro">
          <h2 class="cookies__titre">Cookies &amp; confidentialité</h2>
          <p class="cookies__chapeau">
            Nous utilisons le strict nécessaire, et rien ne se fait sans votre
            accord.
          </p>
        </div>

        <ul class="familles">
          <li v-for="famille in familles" :key="famille.id" class="famille">
            <span class="famille__statut">{{ famille.statut }}</span>
            <h3 class="famille__titre">{{ famille.titre }}</h3>
            <p class="famille__description">{{ famille.description }}</p>
          </li>
        </ul>
      </div>

      <div class="cookies__pied" v-reveal="80">
        <p v-if="choixCookies" class="cookies__choix">
          {{ libelleChoix[choixCookies] }}
        </p>
        <button type="button" class="cookies__bouton" @click="rouvrirBanniere">
          Gérer mes cookies
        </button>
        <a class="cookies__lien" href="/politique-de-confidentialite.html">
          Politique de confidentialité
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cookies {
  padding: 44px 0 48px;
  background-color: var(--bw-bg-alt);
  border-top: 1px solid var(--bw-border);
  color: var(--bw-text-muted);
  scroll-margin-top: var(--header-h);
}

.cookies__inner {
  display: grid;
  grid-template-columns: 0.8fr 2.2fr;
  gap: 40px;
  align-items: start;
}

.cookies__titre {
  font-family: var(--font-display);
  font-weight: 560;
  color: var(--bw-text);
  font-size: 1.12rem;
  margin-bottom: 6px;
}

.cookies__chapeau {
  margin: 0;
  font-size: 0.84rem;
  line-height: 1.55;
  color: var(--bw-text-muted);
  max-width: 34ch;
}

.familles {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 26px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.famille {
  padding-left: 16px;
  border-left: 1px solid var(--bw-border);
}

.famille__statut {
  display: block;
  margin-bottom: 7px;
  color: var(--bw-purple);
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.famille__titre {
  font-family: var(--font-texte);
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--bw-text);
  margin-bottom: 5px;
}

.famille__description {
  margin: 0;
  font-size: 0.8rem;
  line-height: 1.55;
  color: var(--bw-text-muted);
}

.cookies__pied {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px 22px;
  margin-top: 32px;
  padding-top: 20px;
  border-top: 1px solid var(--bw-border);
  font-size: 0.8rem;
}

.cookies__choix {
  margin: 0;
  color: var(--bw-text-muted);
}

.cookies__bouton {
  padding: 7px 16px;
  border: 1px solid var(--bw-border-strong);
  border-radius: var(--bw-radius-pill);
  background-color: transparent;
  color: var(--bw-text);
  font-size: 0.78rem;
  font-weight: 600;
  transition: border-color var(--bw-duration-fast) var(--bw-ease),
    background-color var(--bw-duration-fast) var(--bw-ease);
}

.cookies__bouton:hover {
  border-color: transparent;
  background: var(--bw-gradient);
}

.cookies__lien {
  color: var(--bw-text-muted);
  border-bottom: 1px solid var(--bw-border-strong);
}

.cookies__lien:hover {
  color: var(--bw-text);
  border-bottom-color: var(--bw-coral);
}

@media (max-width: 900px) {
  .cookies__inner {
    grid-template-columns: 1fr;
    gap: 26px;
  }

  .familles {
    grid-template-columns: 1fr;
    gap: 18px;
  }
}
</style>
