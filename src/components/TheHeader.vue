<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const links = [
  { href: '#methode', label: 'Notre méthode' },
  { href: '#avantages', label: 'Nos avantages' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#faq', label: 'FAQ' },
]

const menuOuvert = ref(false)
const estDefile = ref(false)

function basculerMenu() {
  menuOuvert.value = !menuOuvert.value
}

function fermerMenu() {
  menuOuvert.value = false
}

function surDefilement() {
  estDefile.value = window.scrollY > 12
}

onMounted(() => {
  surDefilement()
  window.addEventListener('scroll', surDefilement, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', surDefilement)
})
</script>

<template>
  <header class="entete" :class="{ 'entete--defile': estDefile }">
    <a class="skip-link" href="#contenu">Aller au contenu</a>

    <div class="container entete__inner">
      <a href="#accueil" class="logo" @click="fermerMenu">
        <span class="logo__mark" aria-hidden="true">B</span>
        <span class="logo__texte">
          Bouchra <span class="logo__accent">Web Studio</span>
        </span>
      </a>

      <nav class="nav" :class="{ 'nav--ouvert': menuOuvert }" aria-label="Navigation principale">
        <ul class="nav__liste">
          <li v-for="lien in links" :key="lien.href">
            <a :href="lien.href" class="nav__lien" @click="fermerMenu">{{ lien.label }}</a>
          </li>
          <li class="nav__cta">
            <a href="#contact" class="btn btn--primary btn--sm" @click="fermerMenu">
              Nous contacter
            </a>
          </li>
        </ul>
      </nav>

      <button
        class="burger"
        type="button"
        :aria-expanded="menuOuvert"
        aria-controls="menu-principal"
        @click="basculerMenu"
      >
        <span class="sr-only">{{ menuOuvert ? 'Fermer le menu' : 'Ouvrir le menu' }}</span>
        <span class="burger__barre" :class="{ 'burger__barre--1': menuOuvert }"></span>
        <span class="burger__barre" :class="{ 'burger__barre--2': menuOuvert }"></span>
        <span class="burger__barre" :class="{ 'burger__barre--3': menuOuvert }"></span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.entete {
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: rgba(255, 255, 255, 0.86);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid transparent;
  transition: box-shadow 0.2s ease, border-color 0.2s ease;
}

.entete--defile {
  border-bottom-color: var(--c-border);
  box-shadow: var(--shadow-sm);
}

.entete__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-height: var(--header-h);
}

.skip-link {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -200%);
  padding: 10px 18px;
  background: var(--c-primary);
  color: #fff;
  border-radius: 0 0 var(--radius-sm) var(--radius-sm);
  transition: transform 0.2s ease;
}

.skip-link:focus {
  transform: translate(-50%, 0);
  color: #fff;
}

/* Logo */
.logo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--c-ink);
  font-weight: 700;
  font-size: 1.05rem;
  letter-spacing: -0.01em;
}

.logo__mark {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--c-primary), var(--c-accent));
  color: #fff;
  font-size: 1.15rem;
  font-weight: 800;
}

.logo__accent {
  color: var(--c-primary);
}

/* Navigation */
.nav__liste {
  display: flex;
  align-items: center;
  gap: 30px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav__lien {
  color: var(--c-text);
  font-weight: 500;
  font-size: 0.98rem;
  position: relative;
}

.nav__lien::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 0;
  height: 2px;
  border-radius: 2px;
  background-color: var(--c-primary);
  transition: width 0.22s ease;
}

.nav__lien:hover {
  color: var(--c-primary);
}

.nav__lien:hover::after {
  width: 100%;
}

.btn--sm {
  padding: 10px 20px;
  font-size: 0.95rem;
}

/* Burger */
.burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 44px;
  height: 44px;
  padding: 0 10px;
  border: 1px solid var(--c-border);
  border-radius: 12px;
  background-color: var(--c-surface);
}

.burger__barre {
  display: block;
  height: 2px;
  width: 100%;
  border-radius: 2px;
  background-color: var(--c-ink);
  transition: transform 0.22s ease, opacity 0.22s ease;
}

.burger__barre--1 {
  transform: translateY(7px) rotate(45deg);
}

.burger__barre--2 {
  opacity: 0;
}

.burger__barre--3 {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 900px) {
  .burger {
    display: flex;
  }

  .nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--c-surface);
    border-bottom: 1px solid var(--c-border);
    box-shadow: var(--shadow);
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.28s ease;
  }

  .nav--ouvert {
    max-height: 420px;
  }

  .nav__liste {
    flex-direction: column;
    align-items: stretch;
    gap: 4px;
    padding: 14px 20px 22px;
  }

  .nav__lien {
    display: block;
    padding: 12px 4px;
    border-bottom: 1px solid var(--c-bg-soft);
  }

  .nav__lien::after {
    display: none;
  }

  .nav__cta {
    margin-top: 12px;
  }

  .nav__cta .btn {
    width: 100%;
  }
}
</style>
