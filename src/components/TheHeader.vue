<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import LogoMark from './LogoMark.vue'

// Sur les pages légales, les ancres doivent repartir vers l'accueil ("/#methode").
const props = defineProps({
  prefixeAncres: { type: String, default: '' },
})

const links = computed(() =>
  [
    { ancre: '#methode', label: 'Notre méthode' },
    { ancre: '#avantages', label: 'Nos avantages' },
    { ancre: '#portfolio', label: 'Portfolio' },
    { ancre: '#faq', label: 'FAQ' },
  ].map((lien) => ({ ...lien, href: `${props.prefixeAncres}${lien.ancre}` })),
)

const lienAccueil = computed(() => `${props.prefixeAncres}#accueil`)
const lienContact = computed(() => `${props.prefixeAncres}#contact`)

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
      <a :href="lienAccueil" class="logo" @click="fermerMenu">
        <LogoMark :taille="38" />
        <span class="logo__texte">
          <span class="logo__nom">BELWEB</span>
          <span class="logo__studio">Studio</span>
        </span>
      </a>

      <nav
        id="menu-principal"
        class="nav"
        :class="{ 'nav--ouvert': menuOuvert }"
        aria-label="Navigation principale"
      >
        <ul class="nav__liste">
          <li v-for="lien in links" :key="lien.ancre">
            <a :href="lien.href" class="nav__lien" @click="fermerMenu">{{ lien.label }}</a>
          </li>
          <li class="nav__cta">
            <a :href="lienContact" class="btn btn--primary btn--sm" @click="fermerMenu">
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
  background-color: var(--c-navy);
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  transition: box-shadow 0.3s ease, background-color 0.3s ease;
}

.entete--defile {
  background-color: rgba(6, 12, 43, 0.96);
  backdrop-filter: blur(12px);
  box-shadow: 0 10px 30px rgba(6, 12, 43, 0.35);
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
  background: var(--c-gold);
  color: var(--c-navy);
  font-weight: 600;
  transition: transform 0.2s ease;
}

.skip-link:focus {
  transform: translate(-50%, 0);
  color: var(--c-navy);
}

/* Logo */
.logo {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: #fff;
}

.logo:hover {
  color: #fff;
}

.logo__texte {
  display: flex;
  flex-direction: column;
  line-height: 1.05;
}

.logo__nom {
  font-family: var(--font-titre);
  font-size: 1.24rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: var(--c-gold);
}

.logo__studio {
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.42em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.72);
}

/* Navigation */
.nav__liste {
  display: flex;
  align-items: center;
  gap: 34px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav__lien {
  position: relative;
  color: rgba(255, 255, 255, 0.82);
  font-size: 0.92rem;
  font-weight: 500;
  letter-spacing: 0.02em;
}

.nav__lien::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -7px;
  width: 0;
  height: 1px;
  background-color: var(--c-gold);
  transition: width 0.28s ease;
}

.nav__lien:hover {
  color: var(--c-gold);
}

.nav__lien:hover::after {
  width: 100%;
}

.btn--sm {
  padding: 11px 24px;
  font-size: 0.76rem;
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
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 4px;
  background-color: transparent;
}

.burger__barre {
  display: block;
  height: 1.5px;
  width: 100%;
  background-color: #fff;
  transition: transform 0.22s ease, opacity 0.22s ease;
}

.burger__barre--1 {
  transform: translateY(6.5px) rotate(45deg);
}

.burger__barre--2 {
  opacity: 0;
}

.burger__barre--3 {
  transform: translateY(-6.5px) rotate(-45deg);
}

@media (max-width: 940px) {
  .burger {
    display: flex;
  }

  .nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--c-navy-deep);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.32s ease;
  }

  .nav--ouvert {
    max-height: 440px;
  }

  .nav__liste {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 10px 24px 26px;
  }

  .nav__lien {
    display: block;
    padding: 15px 2px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .nav__lien::after {
    display: none;
  }

  .nav__cta {
    margin-top: 20px;
  }

  .nav__cta .btn {
    width: 100%;
  }
}
</style>
