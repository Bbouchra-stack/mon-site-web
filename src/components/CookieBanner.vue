<script setup>
import {
  accepterCookies,
  banniereVisible,
  refuserCookies,
} from '../composables/consentement.js'
</script>

<template>
  <Transition name="bandeau">
    <aside
      v-if="banniereVisible"
      class="bandeau"
      role="dialog"
      aria-live="polite"
      aria-label="Gestion des cookies"
    >
      <div class="container bandeau__inner">
        <div class="bandeau__texte">
          <h2 class="bandeau__titre">Nous respectons votre vie privée</h2>
          <p>
            Ce site utilise des cookies pour assurer son bon fonctionnement et,
            avec votre accord, mesurer son audience. Vous pouvez refuser sans
            que cela n'affecte votre navigation.
            <a href="/politique-de-confidentialite.html">En savoir plus</a>
          </p>
        </div>

        <div class="bandeau__actions">
          <button type="button" class="btn btn--ghost" @click="refuserCookies">
            Refuser
          </button>
          <button type="button" class="btn btn--primary" @click="accepterCookies">
            Tout accepter
          </button>
        </div>
      </div>
    </aside>
  </Transition>
</template>

<style scoped>
.bandeau {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 70;
  background-color: var(--c-surface);
  border-top: 2px solid var(--c-gold);
  box-shadow: 0 -14px 40px rgba(10, 20, 64, 0.16);
}

.bandeau__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding-block: 22px;
}

.bandeau__titre {
  font-size: 1.05rem;
  margin-bottom: 6px;
}

.bandeau__texte p {
  margin: 0;
  font-size: 0.92rem;
  color: var(--c-muted);
  max-width: 74ch;
}

.bandeau__texte a {
  color: var(--c-navy-soft);
  border-bottom: 1px solid var(--c-gold);
  white-space: nowrap;
}

.bandeau__actions {
  display: flex;
  flex: none;
  gap: 12px;
}

.bandeau__actions .btn {
  padding: 13px 26px;
  font-size: 0.78rem;
}

.bandeau-enter-active,
.bandeau-leave-active {
  transition: transform 0.4s ease, opacity 0.4s ease;
}

.bandeau-enter-from,
.bandeau-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

@media (max-width: 860px) {
  .bandeau__inner {
    flex-direction: column;
    align-items: stretch;
    gap: 18px;
    padding-block: 20px;
  }

  .bandeau__actions .btn {
    flex: 1;
  }
}
</style>
