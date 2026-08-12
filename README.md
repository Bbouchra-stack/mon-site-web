# BELWEB Studio

Site vitrine de **BELWEB Studio**, création de sites web sur mesure à
Casablanca. Réalisé en **Vue 3** avec **Vite**, en français, entièrement
responsive (mobile, tablette, ordinateur).

## Démarrer

```bash
npm install
npm run dev      # serveur de développement (http://localhost:5173)
npm run build    # build de production dans dist/
npm run preview  # prévisualisation du build
```

## Pages

| Page | Fichier d'entrée | URL |
| --- | --- | --- |
| Accueil (une seule page, ancres) | `index.html` | `/` |
| Mentions légales | `mentions-legales.html` | `/mentions-legales.html` |
| Politique de confidentialité | `politique-de-confidentialite.html` | `/politique-de-confidentialite.html` |

## Sections de l'accueil

| Section | Composant | Ancre |
| --- | --- | --- |
| Héro | `HeroSection.vue` | `#accueil` |
| Notre méthode (4 étapes colorées) | `MethodSection.vue` | `#methode` |
| Nos avantages (3 points forts) | `AdvantagesSection.vue` | `#avantages` |
| Ce que comprend votre site | `IncludedSection.vue` | `#inclus` |
| Portfolio (3 projets) | `PortfolioSection.vue` | `#portfolio` |
| FAQ (accordéon, 5 questions) | `FaqSection.vue` | `#faq` |
| Formulaire de contact | `ContactSection.vue` | `#contact` |
| Cookies & confidentialité | `CookiesSection.vue` | `#cookies` |
| Pied de page | `TheFooter.vue` | — |

Éléments flottants : `WhatsAppButton.vue` (bouton vert permanent),
`CookieBanner.vue` (bandeau de consentement), `ProjectModal.vue` (invitation à
décrire son projet).

## Où modifier quoi

| Ce que vous voulez changer | Fichier |
| --- | --- |
| **Téléphone, e-mail, adresse, WhatsApp** | `src/composables/coordonnees.js` — un seul endroit pour tout le site |
| Couleurs, typographie, espacements | `src/style.css` (bloc `:root` en haut) |
| Les 4 étapes de la méthode | `src/components/MethodSection.vue` (tableau `etapes`) |
| Les 3 avantages | `src/components/AdvantagesSection.vue` (tableau `avantages`) |
| La liste « tout inclus » | `src/components/IncludedSection.vue` (tableau `prestations`) |
| Les projets du portfolio | `src/components/PortfolioSection.vue` (tableau `projets`) |
| Les questions/réponses | `src/components/FaqSection.vue` (tableau `questions`) |
| Liens réseaux sociaux | `src/components/TheFooter.vue` (tableau `reseaux`) |
| Textes légaux | `src/pages/MentionsLegales.vue`, `src/pages/PolitiqueConfidentialite.vue` |

## Charte graphique

Définie en variables CSS dans `src/style.css`, d'après le logo :

- Navy : `#0a1440` — fonds sombres, textes
- Navy profond : `#060c2b` — pied de page
- Or : `#e3b93f` (`#f5d24e` en version claire) — accents, boutons, filets
- Turquoise : `#2fb3a8` — accent secondaire
- Ivoire : `#fbf9f4` — fond général
- Titres en *Playfair Display*, textes en *Inter* (chargés depuis Google Fonts,
  avec repli sur Georgia / système si indisponibles)

## Animations

Une directive maison `v-reveal` (`src/directives/reveal.js`) fait apparaître les
éléments en fondu quand ils entrent dans l'écran. Utilisation&nbsp;:

```vue
<div v-reveal>…</div>        <!-- apparition immédiate -->
<div v-reveal="140">…</div>  <!-- retard de 140 ms, pour un effet cascade -->
```

Les animations sont automatiquement désactivées si le visiteur a activé
« réduire les animations » dans son système.

## À compléter avant la mise en ligne

- **Photos du portfolio** : les visuels de `public/portfolio/*.svg` sont des
  placeholders, à remplacer par les vraies captures de projets.
- **Logo définitif** : `src/components/LogoMark.vue` et `public/favicon.svg`
  reprennent l'esprit du logo, à remplacer par le fichier officiel.
- **Mentions légales** : renseigner RC, ICE, IF, forme juridique, directeur de
  publication et hébergeur (champs signalés en jaune sur la page).
- **Politique de confidentialité** : renseigner le numéro de déclaration CNDP.
  Les textes citent la **loi n° 09-08** et son décret d'application n° 2-09-165.
  Une relecture par un juriste est recommandée avant publication.
- **Réseaux sociaux** : remplacer les URL génériques par les vrais comptes.
- **Formulaire de contact** : la validation est faite côté navigateur, puis un
  message de confirmation s'affiche. **Aucun backend n'est branché** — voir la
  fonction `soumettre()` dans `src/components/ContactSection.vue`.
