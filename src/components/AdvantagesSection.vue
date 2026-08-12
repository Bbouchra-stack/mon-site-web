<script setup>
const avantages = [
  {
    id: 'personnalise',
    titre: 'Site 100 % personnalisé',
    description:
      "Pas de template revendu à des centaines d'entreprises : chaque site est dessiné à partir de votre univers, de vos couleurs et de vos besoins réels.",
  },
  {
    id: 'accompagnement',
    titre: 'Accompagnement et formation',
    description:
      'Nous vous formons à la prise en main de votre site pour que vous puissiez modifier vos textes, vos photos et vos horaires en toute autonomie.',
  },
  {
    id: 'maintenance',
    titre: 'Suivi et maintenance',
    description:
      'Mises à jour, sauvegardes, sécurité et corrections : votre site reste rapide et fiable dans la durée, avec un interlocuteur unique et réactif.',
  },
]
</script>

<template>
  <section id="avantages" class="section section--alt">
    <div class="container">
      <div class="section__head">
        <span class="eyebrow">Nos avantages</span>
        <h2 class="section__title">Pourquoi nous confier votre site&nbsp;?</h2>
        <p class="section__subtitle">
          Un studio à taille humaine, disponible avant, pendant et après la mise
          en ligne.
        </p>
      </div>

      <ul class="avantages">
        <li v-for="avantage in avantages" :key="avantage.id" class="avantage">
          <span class="avantage__icone" aria-hidden="true">
            <!-- Site 100 % personnalisé -->
            <svg
              v-if="avantage.id === 'personnalise'"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 19H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5" />
              <path d="M3 9h18" />
              <path d="m17.5 19.8 3.2-3.2a1.6 1.6 0 0 0-2.3-2.3l-3.2 3.2-.5 2.8z" />
            </svg>

            <!-- Accompagnement et formation -->
            <svg
              v-else-if="avantage.id === 'accompagnement'"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20" />
              <circle cx="10" cy="8" r="3.4" />
              <path d="M17.5 11.5 19 13l3-3.4" />
            </svg>

            <!-- Suivi et maintenance -->
            <svg
              v-else
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 3 4 6v5.6c0 4.2 3.2 7.6 8 9.4 4.8-1.8 8-5.2 8-9.4V6z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </span>

          <h3 class="avantage__titre">{{ avantage.titre }}</h3>
          <p class="avantage__description">{{ avantage.description }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.avantages {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 26px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.avantage {
  padding: 34px 28px;
  border: 1px solid var(--c-border);
  border-radius: var(--radius-lg);
  background: linear-gradient(180deg, #ffffff 0%, var(--c-bg) 100%);
  transition: transform 0.22s ease, box-shadow 0.22s ease;
}

.avantage:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow);
}

.avantage__icone {
  display: grid;
  place-items: center;
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
  border-radius: 18px;
  background-color: var(--c-primary-light);
  color: var(--c-primary);
}

.avantage__icone svg {
  width: 28px;
  height: 28px;
}

.avantage:nth-child(2) .avantage__icone {
  background-color: var(--c-accent-light);
  color: var(--c-accent);
}

.avantage__titre {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.avantage__description {
  margin: 0;
  color: var(--c-muted);
  font-size: 0.98rem;
}

@media (max-width: 900px) {
  .avantages {
    grid-template-columns: 1fr;
    max-width: 560px;
    margin-inline: auto;
  }
}
</style>
