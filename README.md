# Bouchra Web Studio

Site vitrine (une seule page, navigation par ancre) pour **Bouchra Web Studio**,
activité de création de sites web. Réalisé en **Vue 3** avec **Vite**, en
français et entièrement responsive (mobile, tablette, desktop).

## Démarrer

```bash
npm install
npm run dev      # serveur de développement (http://localhost:5173)
npm run build    # build de production dans dist/
npm run preview  # prévisualisation du build
```

## Sections de la page

| Section | Composant | Ancre |
| --- | --- | --- |
| Héro | `HeroSection.vue` | `#accueil` |
| Notre méthode (4 étapes) | `MethodSection.vue` | `#methode` |
| Nos avantages (3 points forts) | `AdvantagesSection.vue` | `#avantages` |
| Portfolio (3 projets) | `PortfolioSection.vue` | `#portfolio` |
| FAQ (accordéon, 5 questions) | `FaqSection.vue` | `#faq` |
| Formulaire de contact | `ContactSection.vue` | `#contact` |
| Pied de page | `TheFooter.vue` | — |

L'en-tête (`TheHeader.vue`) est collant, avec un menu burger en dessous de
900 px. Le défilement vers les ancres est géré en CSS
(`scroll-behavior: smooth` + `scroll-margin-top`).

## Structure

```
public/
  favicon.svg
  portfolio/           # visuels placeholders des projets (SVG)
src/
  components/          # une section = un composant
  App.vue
  main.js
  style.css            # variables de design et styles globaux
```

## Design

Palette définie en variables CSS dans `src/style.css` :

- Primaire : indigo `#4f46e5`
- Accent : turquoise `#0ea5a4`
- Texte : ardoise `#0f172a` / `#334155`
- Fonds : blanc `#ffffff` et ivoire `#f8fafc`

## Points à compléter

- Les visuels du portfolio sont des **placeholders** (`public/portfolio/*.svg`),
  à remplacer par les vraies captures de projets.
- Les coordonnées du pied de page et de la section contact sont **fictives**.
- Le formulaire de contact valide les champs côté client puis affiche un message
  de confirmation : **aucun backend n'est branché** pour l'instant (voir la
  fonction `soumettre()` dans `src/components/ContactSection.vue`).
