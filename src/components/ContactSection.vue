<script setup>
import { reactive, ref } from 'vue'

const champsVides = () => ({
  prenom: '',
  nom: '',
  email: '',
  telephone: '',
  projet: '',
})

const formulaire = reactive(champsVides())
const erreurs = reactive({})
const touches = reactive({})
const envoye = ref(false)
const envoiEnCours = ref(false)

const regexEmail = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i
// Numéros français : 06 12 34 56 78, +33 6 12 34 56 78, 0612345678…
const regexTelephone = /^(?:\+33|0033|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/

function valider(champ) {
  const valeur = formulaire[champ].trim()

  switch (champ) {
    case 'prenom':
      if (!valeur) return 'Merci d’indiquer votre prénom.'
      if (valeur.length < 2) return 'Le prénom doit contenir au moins 2 caractères.'
      return ''
    case 'nom':
      if (!valeur) return 'Merci d’indiquer votre nom.'
      if (valeur.length < 2) return 'Le nom doit contenir au moins 2 caractères.'
      return ''
    case 'email':
      if (!valeur) return 'Merci d’indiquer votre adresse e-mail.'
      if (!regexEmail.test(valeur)) return 'Cette adresse e-mail ne semble pas valide.'
      return ''
    case 'telephone':
      if (!valeur) return 'Merci d’indiquer un numéro de téléphone.'
      if (!regexTelephone.test(valeur)) return 'Numéro invalide (ex. : 06 12 34 56 78).'
      return ''
    case 'projet':
      if (!valeur) return 'Décrivez-nous votre projet en quelques mots.'
      if (valeur.length < 20) return 'Merci de détailler un peu plus (20 caractères minimum).'
      return ''
    default:
      return ''
  }
}

function validerChamp(champ) {
  touches[champ] = true
  erreurs[champ] = valider(champ)
}

function effacerErreur(champ) {
  if (touches[champ]) {
    erreurs[champ] = valider(champ)
  }
}

async function soumettre() {
  let premierChampInvalide = null

  Object.keys(champsVides()).forEach((champ) => {
    touches[champ] = true
    erreurs[champ] = valider(champ)
    if (erreurs[champ] && !premierChampInvalide) premierChampInvalide = champ
  })

  if (premierChampInvalide) {
    document.getElementById(premierChampInvalide)?.focus()
    return
  }

  // Pas de backend pour l'instant : on simule l'envoi.
  envoiEnCours.value = true
  await new Promise((resolve) => setTimeout(resolve, 600))
  envoiEnCours.value = false
  envoye.value = true
}

function nouveauMessage() {
  Object.assign(formulaire, champsVides())
  Object.keys(erreurs).forEach((champ) => delete erreurs[champ])
  Object.keys(touches).forEach((champ) => delete touches[champ])
  envoye.value = false
}
</script>

<template>
  <section id="contact" class="section contact">
    <div class="container contact__inner">
      <div class="contact__intro">
        <span class="eyebrow">Contact</span>
        <h2 class="section__title">Parlons de votre projet</h2>
        <p>
          Décrivez-nous votre activité et vos besoins en quelques lignes. Nous
          revenons vers vous sous 24&nbsp;h ouvrées avec une première
          proposition et un devis gratuit.
        </p>

        <ul class="contact__points">
          <li>Premier échange gratuit et sans engagement</li>
          <li>Devis détaillé sous 48&nbsp;h</li>
          <li>Un interlocuteur unique du début à la fin</li>
        </ul>

        <div class="contact__coordonnees">
          <p><strong>Téléphone</strong><br /><a href="tel:+33612345678">06 12 34 56 78</a></p>
          <p>
            <strong>E-mail</strong><br />
            <a href="mailto:contact@bouchrawebstudio.fr">contact@bouchrawebstudio.fr</a>
          </p>
        </div>
      </div>

      <div class="contact__carte">
        <Transition name="fondu" mode="out-in">
          <div v-if="envoye" key="confirmation" class="confirmation" role="status">
            <span class="confirmation__icone" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m5 12.5 4.5 4.5L19 7.5" />
              </svg>
            </span>
            <h3>Merci, votre message est bien parti&nbsp;!</h3>
            <p>
              Nous avons bien reçu votre demande et revenons vers vous sous
              24&nbsp;h ouvrées à l'adresse indiquée.
            </p>
            <button type="button" class="btn btn--ghost" @click="nouveauMessage">
              Envoyer un autre message
            </button>
          </div>

          <form v-else key="formulaire" class="formulaire" novalidate @submit.prevent="soumettre">
            <div class="formulaire__ligne">
              <div class="champ">
                <label for="prenom">Prénom <span aria-hidden="true">*</span></label>
                <input
                  id="prenom"
                  v-model="formulaire.prenom"
                  type="text"
                  name="prenom"
                  autocomplete="given-name"
                  placeholder="Bouchra"
                  :class="{ 'champ--erreur': erreurs.prenom }"
                  :aria-invalid="Boolean(erreurs.prenom)"
                  :aria-describedby="erreurs.prenom ? 'erreur-prenom' : undefined"
                  @blur="validerChamp('prenom')"
                  @input="effacerErreur('prenom')"
                />
                <p v-if="erreurs.prenom" id="erreur-prenom" class="champ__erreur">
                  {{ erreurs.prenom }}
                </p>
              </div>

              <div class="champ">
                <label for="nom">Nom <span aria-hidden="true">*</span></label>
                <input
                  id="nom"
                  v-model="formulaire.nom"
                  type="text"
                  name="nom"
                  autocomplete="family-name"
                  placeholder="Dupont"
                  :class="{ 'champ--erreur': erreurs.nom }"
                  :aria-invalid="Boolean(erreurs.nom)"
                  :aria-describedby="erreurs.nom ? 'erreur-nom' : undefined"
                  @blur="validerChamp('nom')"
                  @input="effacerErreur('nom')"
                />
                <p v-if="erreurs.nom" id="erreur-nom" class="champ__erreur">
                  {{ erreurs.nom }}
                </p>
              </div>
            </div>

            <div class="formulaire__ligne">
              <div class="champ">
                <label for="email">E-mail <span aria-hidden="true">*</span></label>
                <input
                  id="email"
                  v-model="formulaire.email"
                  type="email"
                  name="email"
                  autocomplete="email"
                  placeholder="vous@exemple.fr"
                  :class="{ 'champ--erreur': erreurs.email }"
                  :aria-invalid="Boolean(erreurs.email)"
                  :aria-describedby="erreurs.email ? 'erreur-email' : undefined"
                  @blur="validerChamp('email')"
                  @input="effacerErreur('email')"
                />
                <p v-if="erreurs.email" id="erreur-email" class="champ__erreur">
                  {{ erreurs.email }}
                </p>
              </div>

              <div class="champ">
                <label for="telephone">Téléphone <span aria-hidden="true">*</span></label>
                <input
                  id="telephone"
                  v-model="formulaire.telephone"
                  type="tel"
                  name="telephone"
                  autocomplete="tel"
                  placeholder="06 12 34 56 78"
                  :class="{ 'champ--erreur': erreurs.telephone }"
                  :aria-invalid="Boolean(erreurs.telephone)"
                  :aria-describedby="erreurs.telephone ? 'erreur-telephone' : undefined"
                  @blur="validerChamp('telephone')"
                  @input="effacerErreur('telephone')"
                />
                <p v-if="erreurs.telephone" id="erreur-telephone" class="champ__erreur">
                  {{ erreurs.telephone }}
                </p>
              </div>
            </div>

            <div class="champ">
              <label for="projet">Description du projet <span aria-hidden="true">*</span></label>
              <textarea
                id="projet"
                v-model="formulaire.projet"
                name="projet"
                rows="5"
                placeholder="Votre activité, vos objectifs, le type de site souhaité, vos délais…"
                :class="{ 'champ--erreur': erreurs.projet }"
                :aria-invalid="Boolean(erreurs.projet)"
                :aria-describedby="erreurs.projet ? 'erreur-projet' : undefined"
                @blur="validerChamp('projet')"
                @input="effacerErreur('projet')"
              ></textarea>
              <p v-if="erreurs.projet" id="erreur-projet" class="champ__erreur">
                {{ erreurs.projet }}
              </p>
            </div>

            <p class="formulaire__mention">
              Les champs marqués d'un <span aria-hidden="true">*</span> sont
              obligatoires. Vos données servent uniquement à répondre à votre
              demande.
            </p>

            <button
              type="submit"
              class="btn btn--primary btn--block"
              :disabled="envoiEnCours"
              :aria-busy="envoiEnCours"
            >
              {{ envoiEnCours ? 'Envoi en cours…' : 'Envoyer ma demande' }}
            </button>
          </form>
        </Transition>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  background: linear-gradient(180deg, var(--c-bg) 0%, #eef2ff 100%);
}

.contact__inner {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 52px;
  align-items: start;
}

.contact__intro p {
  color: var(--c-muted);
  max-width: 46ch;
}

.contact__points {
  margin: 26px 0;
  padding: 0;
  list-style: none;
}

.contact__points li {
  position: relative;
  padding-left: 30px;
  margin-bottom: 12px;
  color: var(--c-text);
}

.contact__points li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 18px;
  height: 10px;
  border-left: 2.5px solid var(--c-accent);
  border-bottom: 2.5px solid var(--c-accent);
  transform: rotate(-45deg);
  border-radius: 2px;
}

.contact__coordonnees {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 40px;
  padding-top: 24px;
  border-top: 1px solid var(--c-border);
}

.contact__coordonnees p {
  margin: 0;
  color: var(--c-muted);
  font-size: 0.95rem;
}

.contact__coordonnees strong {
  color: var(--c-ink);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

/* Carte formulaire */
.contact__carte {
  padding: 34px;
  background-color: var(--c-surface);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
}

.formulaire__ligne {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}

.champ {
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
}

.champ label {
  margin-bottom: 7px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--c-ink);
}

.champ label span {
  color: var(--c-primary);
}

.champ input,
.champ textarea {
  width: 100%;
  padding: 13px 15px;
  font: inherit;
  font-size: 0.98rem;
  color: var(--c-ink);
  background-color: var(--c-bg);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-sm);
  transition: border-color 0.18s ease, box-shadow 0.18s ease,
    background-color 0.18s ease;
}

.champ textarea {
  resize: vertical;
  min-height: 130px;
}

.champ input::placeholder,
.champ textarea::placeholder {
  color: #94a3b8;
}

.champ input:focus,
.champ textarea:focus {
  outline: none;
  background-color: var(--c-surface);
  border-color: var(--c-primary);
  box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.14);
}

.champ--erreur {
  border-color: var(--c-error) !important;
  background-color: #fef2f2;
}

.champ--erreur:focus {
  box-shadow: 0 0 0 4px rgba(220, 38, 38, 0.14) !important;
}

.champ__erreur {
  margin: 7px 0 0;
  color: var(--c-error);
  font-size: 0.85rem;
}

.formulaire__mention {
  margin: 4px 0 20px;
  font-size: 0.85rem;
  color: var(--c-muted);
}

.formulaire__mention span {
  color: var(--c-primary);
}

.btn[disabled] {
  opacity: 0.65;
  cursor: not-allowed;
  transform: none;
}

/* Confirmation */
.confirmation {
  text-align: center;
  padding: 26px 8px 12px;
}

.confirmation__icone {
  display: grid;
  place-items: center;
  width: 64px;
  height: 64px;
  margin: 0 auto 22px;
  border-radius: 50%;
  background-color: var(--c-accent-light);
  color: var(--c-success);
}

.confirmation__icone svg {
  width: 32px;
  height: 32px;
}

.confirmation h3 {
  font-size: 1.35rem;
}

.confirmation p {
  color: var(--c-muted);
  max-width: 42ch;
  margin: 0 auto 26px;
}

.fondu-enter-active,
.fondu-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.fondu-enter-from,
.fondu-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

@media (max-width: 960px) {
  .contact__inner {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

@media (max-width: 620px) {
  .contact__carte {
    padding: 24px 20px 26px;
  }

  .formulaire__ligne {
    grid-template-columns: 1fr;
    gap: 0;
  }
}
</style>
