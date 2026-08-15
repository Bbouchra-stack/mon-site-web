<script setup>
/**
 * Statuts affichés sur chaque carte. Le studio démarre : deux projets sont
 * des concepts de démonstration, un seul est un chantier réel en cours.
 * Le statut est visible sur la vignette pour ne jamais laisser croire à une
 * réalisation livrée — un portfolio inventé se retourne toujours contre son
 * auteur, et la loi 31-08 sanctionne la publicité trompeuse.
 */
const projets = [
  {
    id: 1,
    image: '/portfolio/projet-1.svg',
    alt: "Aperçu du concept de site pour un cabinet dentaire",
    categorie: 'Cabinet médical',
    statut: 'Concept',
    titre: 'Cabinet Dentaire Sérénité',
    description:
      "Présentation de l'équipe et des spécialités, horaires, plan d'accès et prise de rendez-vous en ligne : le patient trouve tout avant même d'appeler.",
  },
  {
    id: 2,
    image: '/portfolio/projet-3.svg',
    alt: "Aperçu du site d'un restaurant méditerranéen à Casablanca",
    categorie: 'Restauration',
    statut: 'En cours',
    titre: 'Table méditerranéenne · Casablanca',
    description:
      "Carte du jour actualisable en autonomie, horaires, plan d'accès et réservations. Projet en cours de création — le site sera mis en ligne prochainement.",
  },
  {
    id: 3,
    image: '/portfolio/projet-2.svg',
    alt: "Aperçu du concept de site pour un cabinet d'avocats",
    categorie: 'Profession libérale',
    statut: 'Concept',
    titre: "Cabinet d'avocats — Droit des affaires",
    description:
      "Domaines d'intervention, parcours des associés et prise de contact confidentielle. Une image sobre et rassurante, adaptée à une clientèle d'entreprise.",
  },
]
</script>

<template>
  <section id="portfolio" class="section section--surface">
    <div class="container">
      <div class="section__head">
        <span class="eyebrow" v-reveal>Portfolio</span>
        <h2 class="section__title" v-reveal="60">Un aperçu de ce que nous créons</h2>
        <p class="section__subtitle" v-reveal="120">
          Le studio démarre : voici deux concepts de démonstration et un
          chantier en cours. Nos premières réalisations livrées seront publiées
          ici.
        </p>
      </div>

      <ul class="projets">
        <li
          v-for="(projet, index) in projets"
          :key="projet.id"
          class="projet"
          v-reveal="index * 150"
        >
          <div class="projet__media">
            <img :src="projet.image" :alt="projet.alt" loading="lazy" width="800" height="560" />
            <span class="projet__categorie">{{ projet.categorie }}</span>
            <span
              class="projet__statut"
              :class="`projet__statut--${projet.statut === 'En cours' ? 'cours' : 'concept'}`"
            >
              {{ projet.statut }}
            </span>
          </div>
          <div class="projet__corps">
            <h3 class="projet__titre">{{ projet.titre }}</h3>
            <p class="projet__description">{{ projet.description }}</p>
          </div>
        </li>
      </ul>

      <p class="projets__note" v-reveal="120">
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
  gap: 28px;
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
  border-radius: var(--radius);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.projet:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow);
}

.projet__media {
  position: relative;
  overflow: hidden;
  background-color: var(--c-navy);
}

.projet__media img {
  width: 100%;
  height: auto;
  aspect-ratio: 10 / 7;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.projet:hover .projet__media img {
  transform: scale(1.05);
}

.projet__categorie {
  position: absolute;
  top: 16px;
  left: 16px;
  padding: 6px 14px;
  border-radius: 2px;
  background-color: var(--c-gold);
  color: var(--c-navy);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.projet__statut {
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 5px 12px;
  border-radius: 2px;
  font-size: 0.66rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.projet__statut--concept {
  background-color: rgba(255, 255, 255, 0.92);
  color: var(--c-navy-soft);
}

.projet__statut--cours {
  background-color: var(--c-teal);
  color: #04302c;
}

.projet__corps {
  padding: 28px 26px 30px;
}

.projet__titre {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.projet__description {
  margin: 0;
  color: var(--c-muted);
  font-size: 0.95rem;
}

.projets__note {
  margin: 46px 0 0;
  text-align: center;
  color: var(--c-muted);
}

.projets__note a {
  font-weight: 600;
  border-bottom: 1px solid var(--c-gold);
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
