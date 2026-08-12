<script setup>
const projets = [
  {
    id: 1,
    image: '/portfolio/projet-1.svg',
    alt: "Aperçu du site vitrine d'un artisan (visuel d'illustration)",
    categorie: 'Artisanat',
    titre: 'Atelier Céramique — Site vitrine',
    description:
      "Une vitrine chaleureuse pour présenter les collections, les ateliers et les points de vente, avec une galerie photo et un formulaire de réservation.",
  },
  {
    id: 2,
    image: '/portfolio/projet-2.svg',
    alt: "Aperçu du site d'une coach indépendante (visuel d'illustration)",
    categorie: 'Indépendant',
    titre: 'Coach Bien-être — Prise de rendez-vous',
    description:
      "Un site pensé mobile d'abord, avec présentation des accompagnements, témoignages clients et prise de rendez-vous en deux clics.",
  },
  {
    id: 3,
    image: '/portfolio/projet-3.svg',
    alt: "Aperçu du site d'un restaurant (visuel d'illustration)",
    categorie: 'Restauration',
    titre: 'Restaurant Le Cèdre — Carte en ligne',
    description:
      'Carte du jour actualisable en autonomie, horaires, plan d’accès et réservations : tout ce qu’un client cherche avant de pousser la porte.',
  },
]
</script>

<template>
  <section id="portfolio" class="section">
    <div class="container">
      <div class="section__head">
        <span class="eyebrow">Portfolio</span>
        <h2 class="section__title">Quelques exemples de réalisations</h2>
        <p class="section__subtitle">
          Des projets d'illustration qui donnent un aperçu de ce que nous
          pouvons créer pour votre activité.
        </p>
      </div>

      <ul class="projets">
        <li v-for="projet in projets" :key="projet.id" class="projet">
          <div class="projet__media">
            <img :src="projet.image" :alt="projet.alt" loading="lazy" width="800" height="560" />
            <span class="projet__categorie">{{ projet.categorie }}</span>
          </div>
          <div class="projet__corps">
            <h3 class="projet__titre">{{ projet.titre }}</h3>
            <p class="projet__description">{{ projet.description }}</p>
          </div>
        </li>
      </ul>

      <p class="projets__note">
        Un projet en tête&nbsp;?
        <a href="#contact">Parlons-en, le premier échange est gratuit.</a>
      </p>
    </div>
  </section>
</template>

<style scoped>
.projets {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 26px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.projet {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: var(--c-surface);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition: transform 0.22s ease, box-shadow 0.22s ease;
}

.projet:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow);
}

.projet__media {
  position: relative;
  overflow: hidden;
  background-color: var(--c-bg-soft);
}

.projet__media img {
  width: 100%;
  height: auto;
  aspect-ratio: 10 / 7;
  object-fit: cover;
  transition: transform 0.35s ease;
}

.projet:hover .projet__media img {
  transform: scale(1.04);
}

.projet__categorie {
  position: absolute;
  top: 14px;
  left: 14px;
  padding: 5px 12px;
  border-radius: 999px;
  background-color: rgba(255, 255, 255, 0.94);
  color: var(--c-primary-dark);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.03em;
}

.projet__corps {
  padding: 24px 22px 26px;
}

.projet__titre {
  font-size: 1.1rem;
  margin-bottom: 8px;
}

.projet__description {
  margin: 0;
  color: var(--c-muted);
  font-size: 0.95rem;
}

.projets__note {
  margin: 36px 0 0;
  text-align: center;
  color: var(--c-muted);
}

.projets__note a {
  font-weight: 600;
}

@media (max-width: 900px) {
  .projets {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 620px) {
  .projets {
    grid-template-columns: 1fr;
    max-width: 460px;
    margin-inline: auto;
  }
}
</style>
