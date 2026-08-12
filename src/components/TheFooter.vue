<script setup>
const annee = new Date().getFullYear()

const liensNav = [
  { href: '#methode', label: 'Notre méthode' },
  { href: '#avantages', label: 'Nos avantages' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

const reseaux = [
  { id: 'instagram', libelle: 'Instagram', url: 'https://instagram.com' },
  { id: 'linkedin', libelle: 'LinkedIn', url: 'https://linkedin.com' },
  { id: 'facebook', libelle: 'Facebook', url: 'https://facebook.com' },
]
</script>

<template>
  <footer class="pied">
    <div class="container pied__inner">
      <div class="pied__marque">
        <a href="#accueil" class="logo">
          <span class="logo__mark" aria-hidden="true">B</span>
          <span>Bouchra <span class="logo__accent">Web Studio</span></span>
        </a>
        <p class="pied__baseline">
          Création de sites web sur mesure pour les artisans, indépendants et
          petites entreprises.
        </p>

        <ul class="reseaux">
          <li v-for="reseau in reseaux" :key="reseau.id">
            <a
              :href="reseau.url"
              class="reseaux__lien"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="sr-only">{{ reseau.libelle }}</span>

              <svg v-if="reseau.id === 'instagram'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
              </svg>

              <svg v-else-if="reseau.id === 'linkedin'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="4" />
                <path d="M7.5 10.5V17" />
                <circle cx="7.5" cy="7.3" r="1.1" fill="currentColor" stroke="none" />
                <path d="M11.5 17v-3.6a2.6 2.6 0 0 1 5.2 0V17" />
                <path d="M11.5 10.5V17" />
              </svg>

              <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M14.5 21v-7.5h2.6l.5-3h-3.1V8.6c0-.9.3-1.5 1.6-1.5h1.6V4.4A21 21 0 0 0 15.3 4c-2.4 0-4 1.4-4 4.1v2.4H8.6v3h2.7V21" />
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <nav class="pied__colonne" aria-label="Navigation de bas de page">
        <h2 class="pied__titre">Navigation</h2>
        <ul class="pied__liste">
          <li v-for="lien in liensNav" :key="lien.href">
            <a :href="lien.href">{{ lien.label }}</a>
          </li>
        </ul>
      </nav>

      <div class="pied__colonne">
        <h2 class="pied__titre">Contact</h2>
        <ul class="pied__liste">
          <li><a href="tel:+33612345678">06 12 34 56 78</a></li>
          <li>
            <a href="mailto:contact@bouchrawebstudio.fr">contact@bouchrawebstudio.fr</a>
          </li>
          <li>12 rue des Lilas<br />75011 Paris, France</li>
          <li>Du lundi au vendredi, 9h – 18h</li>
        </ul>
      </div>
    </div>

    <div class="container pied__bas">
      <p>© {{ annee }} Bouchra Web Studio — Tous droits réservés.</p>
      <p class="pied__mentions">
        <a href="#accueil">Mentions légales</a>
        <span aria-hidden="true">·</span>
        <a href="#accueil">Politique de confidentialité</a>
      </p>
    </div>
  </footer>
</template>

<style scoped>
.pied {
  background-color: var(--c-ink);
  color: #cbd5e1;
  padding-top: 64px;
}

.pied__inner {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1.1fr;
  gap: 40px;
  padding-bottom: 48px;
}

.logo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #fff;
  font-weight: 700;
  font-size: 1.05rem;
  margin-bottom: 16px;
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
  color: #a5b4fc;
}

.pied__baseline {
  max-width: 38ch;
  color: #94a3b8;
  font-size: 0.95rem;
}

.reseaux {
  display: flex;
  gap: 12px;
  margin: 22px 0 0;
  padding: 0;
  list-style: none;
}

.reseaux__lien {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #e2e8f0;
  transition: background-color 0.2s ease, color 0.2s ease,
    transform 0.2s ease, border-color 0.2s ease;
}

.reseaux__lien:hover {
  background: linear-gradient(135deg, var(--c-primary), var(--c-accent));
  border-color: transparent;
  color: #fff;
  transform: translateY(-2px);
}

.reseaux__lien svg {
  width: 20px;
  height: 20px;
}

.pied__titre {
  color: #fff;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 16px;
}

.pied__liste {
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 0.95rem;
}

.pied__liste li {
  margin-bottom: 10px;
  color: #94a3b8;
}

.pied__liste a {
  color: #cbd5e1;
}

.pied__liste a:hover {
  color: #fff;
  text-decoration: underline;
}

.pied__bas {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px 24px;
  padding-top: 22px;
  padding-bottom: 28px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.88rem;
  color: #94a3b8;
}

.pied__bas p {
  margin: 0;
}

.pied__mentions {
  display: flex;
  gap: 12px;
}

.pied__mentions a {
  color: #94a3b8;
}

.pied__mentions a:hover {
  color: #fff;
}

@media (max-width: 900px) {
  .pied__inner {
    grid-template-columns: 1fr 1fr;
  }

  .pied__marque {
    grid-column: 1 / -1;
  }
}

@media (max-width: 560px) {
  .pied__inner {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .pied__bas {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
