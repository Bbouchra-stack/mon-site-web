<script setup>
const etapes = [
  {
    numero: '01',
    titre: 'Premier échange',
    description:
      "On prend le temps de discuter de votre activité, de vos clients et de vos objectifs. À l'issue de cet échange gratuit, vous recevez un devis clair et sans engagement.",
  },
  {
    numero: '02',
    titre: 'Conception sur mesure',
    description:
      "Nous imaginons l'arborescence, les textes et la maquette graphique de votre site. Vous validez le design avant la moindre ligne de code.",
  },
  {
    numero: '03',
    titre: 'Développement',
    description:
      'Votre site prend vie : intégration responsive, optimisation des performances, référencement naturel et mise en place des formulaires de contact.',
  },
  {
    numero: '04',
    titre: 'Lancement et accompagnement',
    description:
      "Mise en ligne, nom de domaine, hébergement : on s'occupe de tout. Puis nous vous formons pour que vous restiez autonome au quotidien.",
  },
]
</script>

<template>
  <section id="methode" class="section">
    <div class="container">
      <div class="section__head">
        <span class="eyebrow">Notre méthode</span>
        <h2 class="section__title">Un projet en 4 étapes, sans jargon</h2>
        <p class="section__subtitle">
          Une démarche simple et transparente, où vous savez toujours où en est
          votre projet.
        </p>
      </div>

      <ol class="etapes">
        <li v-for="etape in etapes" :key="etape.numero" class="etape">
          <span class="etape__numero" aria-hidden="true">{{ etape.numero }}</span>
          <h3 class="etape__titre">{{ etape.titre }}</h3>
          <p class="etape__description">{{ etape.description }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.etapes {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin: 0;
  padding: 0;
  list-style: none;
  counter-reset: etape;
}

.etape {
  position: relative;
  padding: 30px 24px 28px;
  background-color: var(--c-surface);
  border: 1px solid var(--c-border);
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
  transition: transform 0.22s ease, box-shadow 0.22s ease,
    border-color 0.22s ease;
}

.etape:hover {
  transform: translateY(-4px);
  border-color: rgba(79, 70, 229, 0.35);
  box-shadow: var(--shadow);
}

/* Trait de liaison entre les étapes (desktop) */
.etape::after {
  content: '';
  position: absolute;
  top: 52px;
  right: -24px;
  width: 24px;
  height: 2px;
  background: linear-gradient(90deg, var(--c-border), transparent);
}

.etape:last-child::after {
  display: none;
}

.etape__numero {
  display: inline-grid;
  place-items: center;
  width: 48px;
  height: 48px;
  margin-bottom: 18px;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--c-primary), var(--c-accent));
  color: #fff;
  font-weight: 700;
  font-size: 1.05rem;
}

.etape__titre {
  font-size: 1.15rem;
  margin-bottom: 10px;
}

.etape__description {
  margin: 0;
  font-size: 0.97rem;
  color: var(--c-muted);
}

@media (max-width: 960px) {
  .etapes {
    grid-template-columns: repeat(2, 1fr);
  }

  .etape:nth-child(2)::after {
    display: none;
  }
}

@media (max-width: 620px) {
  .etapes {
    grid-template-columns: 1fr;
  }

  .etape::after {
    display: none;
  }
}
</style>
