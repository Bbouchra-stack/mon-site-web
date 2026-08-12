import { ref } from 'vue'

/**
 * État partagé du consentement aux cookies.
 * Stocké dans le navigateur (localStorage) pour ne plus réafficher
 * le bandeau une fois le choix effectué.
 */

const CLE = 'belweb-consentement-cookies'

function lireChoix() {
  try {
    return localStorage.getItem(CLE)
  } catch {
    // Navigation privée ou stockage bloqué : on considère qu'aucun choix n'a été fait.
    return null
  }
}

function ecrireChoix(valeur) {
  try {
    localStorage.setItem(CLE, valeur)
  } catch {
    // Sans stockage disponible, le choix ne vaut que pour la visite en cours.
  }
}

export const choixCookies = ref(lireChoix())
export const banniereVisible = ref(choixCookies.value === null)

/**
 * Horodatage du dernier choix effectué pendant cette visite.
 * Sert à ne pas enchaîner immédiatement le bandeau et la fenêtre
 * d'invitation : une seule sollicitation à la fois.
 */
export const momentDuChoix = ref(0)

function enregistrer(valeur) {
  choixCookies.value = valeur
  ecrireChoix(valeur)
  momentDuChoix.value = Date.now()
  banniereVisible.value = false
}

export function accepterCookies() {
  enregistrer('accepte')
}

export function refuserCookies() {
  enregistrer('refuse')
}

export function rouvrirBanniere() {
  banniereVisible.value = true
}
