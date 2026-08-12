/**
 * Directive v-reveal : fait apparaître un élément en fondu + glissement
 * lorsqu'il entre dans le champ de vision.
 *
 * Usage :
 *   <div v-reveal>…</div>          apparition immédiate
 *   <div v-reveal="120">…</div>    apparition retardée de 120 ms (effet cascade)
 *
 * L'animation est neutralisée si la personne a demandé à son système de
 * réduire les animations (prefers-reduced-motion).
 */

const animationsReduites =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

let observateur = null

function obtenirObservateur() {
  if (observateur) return observateur

  observateur = new IntersectionObserver(
    (entrees) => {
      entrees.forEach((entree) => {
        if (!entree.isIntersecting) return
        entree.target.classList.add('reveal--visible')
        observateur.unobserve(entree.target)
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
  )

  return observateur
}

export default {
  mounted(element, liaison) {
    if (animationsReduites || typeof IntersectionObserver === 'undefined') {
      element.classList.add('reveal', 'reveal--visible')
      return
    }

    const delai = Number(liaison.value) || 0
    if (delai) element.style.setProperty('--delai', `${delai}ms`)

    element.classList.add('reveal')
    obtenirObservateur().observe(element)
  },

  unmounted(element) {
    observateur?.unobserve(element)
  },
}
