<script setup>
const etapes = [
  {
    numero: '01',
    ton: 'or',
    titre: 'Premier échange',
    description:
      "On prend le temps de discuter de votre activité, de celles et ceux que vous recevez, et de vos objectifs. À l'issue de cet échange gratuit, vous recevez un devis clair et sans engagement.",
  },
  {
    numero: '02',
    ton: 'turquoise',
    titre: 'Conception sur mesure',
    description:
      "Nous imaginons l'arborescence, les textes et la maquette graphique de votre site. Vous validez le design avant la moindre ligne de code.",
  },
  {
    numero: '03',
    ton: 'navy',
    titre: 'Développement',
    description:
      'Votre site prend vie : intégration responsive, optimisation des performances, référencement naturel et mise en place des formulaires de contact et de prise de rendez-vous.',
  },
  {
    numero: '04',
    ton: 'bronze',
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
        <span class="eyebrow" v-reveal>Notre méthode</span>
        <h2 class="section__title" v-reveal="60">Un projet en 4 étapes, sans jargon</h2>
        <p class="section__subtitle" v-reveal="120">
          Une démarche simple et transparente, où vous savez toujours où en est
          votre projet.
        </p>
      </div>

      <ol class="etapes">
        <li
          v-for="(etape, index) in etapes"
          :key="etape.numero"
          class="etape"
          :class="`etape--${etape.ton}`"
          v-reveal="index * 140"
        >
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
}

.etape {
  position: relative;
  padding: 36px 26px 32px;
  border: 1px solid var(--teinte-bordure);
  border-radius: var(--radius);
  background: linear-gradient(170deg, var(--teinte-fond) 0%, var(--c-surface) 72%);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Filet coloré en haut de carte */
.etape::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--teinte);
}

.etape:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow);
}

.etape--or {
  --teinte: linear-gradient(90deg, #f5d24e, #e3b93f);
  --teinte-fond: #fdf6e3;
  --teinte-bordure: #f0e3bd;
  --teinte-texte: #a8801d;
}

.etape--turquoise {
  --teinte: linear-gradient(90deg, #6bc9b4, #2fb3a8);
  --teinte-fond: #e6f6f3;
  --teinte-bordure: #c6e8e2;
  --teinte-texte: #1c8578;
}

.etape--navy {
  --teinte: linear-gradient(90deg, #2b3a7d, #16225c);
  --teinte-fond: #ebedf6;
  --teinte-bordure: #d2d7ea;
  --teinte-texte: #16225c;
}

.etape--bronze {
  --teinte: linear-gradient(90deg, #d9a54a, #b8822a);
  --teinte-fond: #f8f0e2;
  --teinte-bordure: #ecdcc0;
  --teinte-texte: #8f6417;
}

.etape__numero {
  display: block;
  font-family: var(--font-titre);
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 1;
  color: var(--teinte-texte);
  opacity: 0.85;
  margin-bottom: 20px;
}

.etape__titre {
  font-size: 1.16rem;
  margin-bottom: 12px;
}

.etape__description {
  margin: 0;
  font-size: 0.95rem;
  color: var(--c-muted);
}

@media (max-width: 980px) {
  .etapes {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 620px) {
  .etapes {
    grid-template-columns: 1fr;
  }
}
</style>
