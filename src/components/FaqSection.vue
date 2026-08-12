<script setup>
import { ref } from 'vue'

const questions = [
  {
    id: 'delai',
    question: 'Combien de temps faut-il pour créer un site ?',
    reponse:
      "Comptez en moyenne 3 à 4 semaines pour un site vitrine, à partir du moment où nous avons vos contenus (textes, photos, logo). Les projets plus complexes (boutique en ligne, réservation) demandent généralement 6 à 8 semaines. Un planning précis vous est remis avec le devis.",
  },
  {
    id: 'mobile',
    question: 'Le site sera-t-il adapté au mobile ?',
    reponse:
      "Oui, systématiquement. Chaque site est conçu « mobile d'abord » puis vérifié sur téléphone, tablette et ordinateur. Plus de 7 visiteurs sur 10 arrivent depuis un mobile : c'est une priorité, pas une option.",
  },
  {
    id: 'hebergement',
    question: "Qui gère l'hébergement et le nom de domaine ?",
    reponse:
      "Nous nous chargeons de la réservation du nom de domaine et de la mise en place de l'hébergement, puis nous vous en transmettons la pleine propriété. Vous pouvez aussi nous confier la gestion technique dans le cadre du forfait de maintenance.",
  },
  {
    id: 'modification',
    question: 'Puis-je modifier mon site moi-même ensuite ?',
    reponse:
      "Bien sûr. Votre site est livré avec une interface d'administration simple et une session de formation d'une heure. Vous pouvez modifier vos textes, vos photos, vos horaires ou publier des actualités sans connaissance technique.",
  },
  {
    id: 'tarif',
    question: 'Combien coûte un site vitrine ?',
    reponse:
      "Un site vitrine démarre à partir de 1 200 € TTC, hébergement et nom de domaine de la première année inclus. Le tarif final dépend du nombre de pages et des fonctionnalités souhaitées. Le devis est gratuit, détaillé et sans engagement.",
  },
]

const ouverte = ref(questions[0].id)

function basculer(id) {
  ouverte.value = ouverte.value === id ? null : id
}
</script>

<template>
  <section id="faq" class="section section--alt">
    <div class="container">
      <div class="section__head">
        <span class="eyebrow">FAQ</span>
        <h2 class="section__title">Les questions que l'on nous pose souvent</h2>
        <p class="section__subtitle">
          Vous ne trouvez pas votre réponse&nbsp;? Écrivez-nous, nous répondons
          sous 24&nbsp;h ouvrées.
        </p>
      </div>

      <div class="faq">
        <div v-for="item in questions" :key="item.id" class="faq__item">
          <h3 class="faq__titre">
            <button
              class="faq__bouton"
              type="button"
              :aria-expanded="ouverte === item.id"
              :aria-controls="`reponse-${item.id}`"
              :id="`question-${item.id}`"
              @click="basculer(item.id)"
            >
              <span>{{ item.question }}</span>
              <span class="faq__chevron" :class="{ 'faq__chevron--ouvert': ouverte === item.id }" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </span>
            </button>
          </h3>

          <Transition name="repli">
            <div
              v-show="ouverte === item.id"
              :id="`reponse-${item.id}`"
              role="region"
              :aria-labelledby="`question-${item.id}`"
              class="faq__reponse"
            >
              <p>{{ item.reponse }}</p>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq {
  max-width: 780px;
  margin-inline: auto;
  border: 1px solid var(--c-border);
  border-radius: var(--radius-lg);
  background-color: var(--c-surface);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
}

.faq__item + .faq__item {
  border-top: 1px solid var(--c-border);
}

.faq__titre {
  margin: 0;
  font-size: 1rem;
}

.faq__bouton {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  width: 100%;
  padding: 22px 24px;
  border: 0;
  background: none;
  text-align: left;
  color: var(--c-ink);
  font-size: 1.05rem;
  font-weight: 600;
  transition: background-color 0.18s ease, color 0.18s ease;
}

.faq__bouton:hover {
  background-color: var(--c-bg);
  color: var(--c-primary);
}

.faq__chevron {
  display: grid;
  place-items: center;
  flex: 0 0 32px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--c-primary-light);
  color: var(--c-primary);
  transition: transform 0.25s ease;
}

.faq__chevron svg {
  width: 18px;
  height: 18px;
}

.faq__chevron--ouvert {
  transform: rotate(180deg);
}

.faq__reponse {
  padding: 0 24px 24px;
  color: var(--c-muted);
  overflow: hidden;
}

.faq__reponse p {
  margin: 0;
  max-width: 68ch;
}

/* Animation d'ouverture / fermeture */
.repli-enter-active,
.repli-leave-active {
  transition: opacity 0.24s ease, transform 0.24s ease;
}

.repli-enter-from,
.repli-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

@media (max-width: 640px) {
  .faq__bouton {
    padding: 18px 18px;
    font-size: 1rem;
  }

  .faq__reponse {
    padding: 0 18px 20px;
  }
}
</style>
