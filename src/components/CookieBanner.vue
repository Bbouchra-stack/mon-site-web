<script setup>
import { onBeforeUnmount, ref, watch } from 'vue'
import {
  accepterCookies,
  banniereReduite,
  banniereVisible,
  deplierBanniere,
  refuserCookies,
  reduireBanniere,
} from '../composables/consentement.js'

// Sans réponse au bout de ce délai, la carte s'efface au profit de la pastille.
const DELAI_AVANT_REDUCTION = 12000

let minuterie = null

function armerReduction() {
  clearTimeout(minuterie)
  if (!banniereVisible.value || banniereReduite.value) return
  minuterie = setTimeout(reduireBanniere, DELAI_AVANT_REDUCTION)
}

armerReduction()

// Toute réouverture (pied de page, pastille) relance le compte à rebours.
watch([banniereVisible, banniereReduite], armerReduction)

onBeforeUnmount(() => clearTimeout(minuterie))

// Suspend la réduction automatique tant que la souris survole la carte.
const survolee = ref(false)

function surEntree() {
  survolee.value = true
  clearTimeout(minuterie)
}

function surSortie() {
  survolee.value = false
  armerReduction()
}
</script>

<template>
  <Transition name="pastille">
    <button
      v-if="banniereVisible && banniereReduite"
      type="button"
      class="pastille"
      @click="deplierBanniere"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
        <path d="M12 3a9 9 0 1 0 9 9 3.4 3.4 0 0 1-4.3-4.6A3.4 3.4 0 0 1 12 3z" stroke-linejoin="round" />
        <circle cx="9.2" cy="10.4" r="1" fill="currentColor" stroke="none" />
        <circle cx="13.4" cy="14.8" r="1" fill="currentColor" stroke="none" />
        <circle cx="8.8" cy="15.2" r="1" fill="currentColor" stroke="none" />
      </svg>
      <span>Cookies</span>
    </button>
  </Transition>

  <Transition name="carte">
    <aside
      v-if="banniereVisible && !banniereReduite"
      class="carte"
      role="dialog"
      aria-live="polite"
      aria-label="Gestion des cookies"
      @mouseenter="surEntree"
      @mouseleave="surSortie"
    >
      <button type="button" class="carte__reduire" @click="reduireBanniere">
        <span class="sr-only">Masquer pour l'instant</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true">
          <path d="m6 6 12 12M18 6 6 18" />
        </svg>
      </button>

      <p class="carte__texte">
        Nous utilisons quelques cookies pour mesurer l'audience du site.
        <a href="/politique-de-confidentialite.html">En savoir plus</a>
      </p>

      <div class="carte__actions">
        <button type="button" class="carte__refuser" @click="refuserCookies">
          Refuser
        </button>
        <button type="button" class="carte__accepter" @click="accepterCookies">
          Accepter
        </button>
      </div>
    </aside>
  </Transition>
</template>

<style scoped>
/* ---------- Carte compacte, en bas à gauche ---------- */

.carte {
  position: fixed;
  left: 22px;
  bottom: 22px;
  z-index: 70;
  width: min(330px, calc(100vw - 44px));
  padding: 18px 20px 16px;
  border: 1px solid var(--c-border);
  border-left: 3px solid var(--c-gold);
  border-radius: var(--radius-sm);
  background-color: var(--c-surface);
  box-shadow: 0 16px 40px rgba(10, 20, 64, 0.18);
}

.carte__reduire {
  position: absolute;
  top: 8px;
  right: 8px;
  display: grid;
  place-items: center;
  width: 26px;
  height: 26px;
  border: 0;
  border-radius: 50%;
  background: none;
  color: var(--c-muted);
  transition: color 0.2s ease, background-color 0.2s ease;
}

.carte__reduire:hover {
  color: var(--c-navy);
  background-color: var(--c-cream-soft);
}

.carte__reduire svg {
  width: 13px;
  height: 13px;
}

.carte__texte {
  margin: 0 20px 14px 0;
  font-size: 0.82rem;
  line-height: 1.5;
  color: var(--c-muted);
}

.carte__texte a {
  color: var(--c-navy-soft);
  border-bottom: 1px solid var(--c-gold);
  white-space: nowrap;
}

.carte__actions {
  display: flex;
  gap: 8px;
}

.carte__refuser,
.carte__accepter {
  flex: 1;
  padding: 8px 14px;
  border-radius: 3px;
  border: 1px solid var(--c-border);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  transition: background-color 0.2s ease, border-color 0.2s ease,
    color 0.2s ease;
}

.carte__refuser {
  background-color: transparent;
  color: var(--c-muted);
}

.carte__refuser:hover {
  border-color: var(--c-navy);
  color: var(--c-navy);
}

.carte__accepter {
  background-color: var(--c-gold);
  border-color: var(--c-gold);
  color: var(--c-navy);
}

.carte__accepter:hover {
  background-color: var(--c-gold-bright);
  border-color: var(--c-gold-bright);
}

/* ---------- Pastille discrète ---------- */

.pastille {
  position: fixed;
  left: 22px;
  bottom: 22px;
  z-index: 70;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 8px 14px 8px 11px;
  border: 1px solid var(--c-border);
  border-radius: 999px;
  background-color: rgba(255, 255, 255, 0.94);
  backdrop-filter: blur(6px);
  color: var(--c-muted);
  font-size: 0.76rem;
  font-weight: 500;
  box-shadow: var(--shadow-sm);
  opacity: 0.75;
  transition: opacity 0.25s ease, color 0.25s ease, border-color 0.25s ease,
    transform 0.25s ease;
}

.pastille:hover,
.pastille:focus-visible {
  opacity: 1;
  color: var(--c-navy);
  border-color: var(--c-gold);
  transform: translateY(-2px);
}

.pastille svg {
  width: 16px;
  height: 16px;
  color: var(--c-gold);
}

/* ---------- Transitions ---------- */

.carte-enter-active,
.carte-leave-active,
.pastille-enter-active,
.pastille-leave-active {
  transition: transform 0.35s cubic-bezier(0.22, 0.61, 0.36, 1),
    opacity 0.35s ease;
}

.carte-enter-from,
.carte-leave-to,
.pastille-enter-from,
.pastille-leave-to {
  opacity: 0;
  transform: translateY(14px);
}

@media (max-width: 640px) {
  .carte {
    left: 12px;
    right: 12px;
    bottom: 12px;
    width: auto;
    padding: 16px 18px 14px;
  }

  .pastille {
    left: 14px;
    bottom: 16px;
  }
}
</style>
