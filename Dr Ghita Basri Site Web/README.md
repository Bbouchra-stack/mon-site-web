# Dr Ghita Basri — Site de démonstration (luxe)

Maquette de démonstration commerciale, inspirée de la direction artistique de
Clinique Grimaldi (palette or/bronze sur fond ivoire, typographie serif
élégante, sections en bandeaux, beaucoup d'animations au scroll).

**Statut** : maquette commerciale, pas un site de production.

## À faire avant présentation / mise en ligne réelle

- **Photos réelles du cabinet** : les 3 zones (hero en diaporama + section
  "Le cabinet") sont actuellement des dégradés placeholder. Dès réception
  des fichiers image (upload en pièce jointe, pas collés dans le chat), à
  intégrer en `assets/` et référencer dans le CSS/HTML à la place des
  `.ph` en dégradé.
- **Coordonnées** : adresse exacte, téléphone fixe et WhatsApp sont en
  placeholder (`05 22 XX XX XX`, `wa.me/212600000000`) — à remplacer par
  les vraies informations.
- **Horaires** : placeholder non vérifié.
- **Liste des soins** (dermatologie médicale / médecine esthétique /
  pédiatrique) : établie à partir des spécialités et diplômes communiqués,
  à valider et compléter avec Dr Ghita Basri.
- **Texte de la politique de cookies** : générique, à faire valider par un
  professionnel avant mise en ligne réelle.
- **Palette de référence Clinique Grimaldi** : reprise de mémoire à partir
  de captures d'écran (or/bronze `#C6A052`/`#9A7830`, fond ivoire
  `#FBF7EF`) — à ajuster si des captures plus précises sont fournies.

## Contenu vérifié (fourni par l'utilisateur)

- Spécialités : Dermatologue, Médecin Esthétique
- Diplôme de Spécialité en Dermatologie-Vénéréologie
- Diplôme interuniversitaire des manifestations cutanées des maladies de système
- Diplôme interuniversitaire de dermatologie pédiatrique

## Technique

Fichier HTML autonome (`index.html`), CSS et JS vanilla inline, aucune
dépendance hormis Google Fonts (Playfair Display, Jost). Animations :
diaporama hero avec effet Ken Burns, révélation du titre ligne par ligne,
apparition au scroll (IntersectionObserver) sur toutes les sections,
survols animés sur boutons/cartes, pulsation sur les CTA "Prendre
rendez-vous", respect de `prefers-reduced-motion`.
