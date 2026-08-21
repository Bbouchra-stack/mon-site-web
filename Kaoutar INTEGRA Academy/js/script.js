(function () {
  "use strict";

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Nav: solid background on scroll + mobile toggle
  var nav = document.getElementById("nav");
  var navToggle = document.getElementById("navToggle");

  function onScroll() {
    if (window.scrollY > 24) {
      nav.classList.add("is-scrolled");
    } else {
      nav.classList.remove("is-scrolled");
    }
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (navToggle) {
    navToggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
    });

    document.querySelectorAll(".nav__mobile a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Scroll reveal
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealEls = document.querySelectorAll(".reveal");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  }

  // Cookie consent banner
  var cookieBanner = document.getElementById("cookieBanner");
  var cookieAccept = document.getElementById("cookieAccept");
  if (cookieBanner && cookieAccept) {
    var consentKey = "integra-cookie-consent";
    var hasConsent = false;
    try {
      hasConsent = window.localStorage.getItem(consentKey) === "true";
    } catch (err) {
      hasConsent = false;
    }
    if (!hasConsent) {
      cookieBanner.hidden = false;
    }
    cookieAccept.addEventListener("click", function () {
      cookieBanner.hidden = true;
      try {
        window.localStorage.setItem(consentKey, "true");
      } catch (err) {
        // Stockage indisponible (navigation privée) — le bandeau réapparaîtra à la prochaine visite.
      }
    });
  }

  // Contact form (front-end only — no backend wired yet)
  var form = document.getElementById("contactForm");
  var status = document.getElementById("formStatus");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.textContent = "Formulaire prêt côté design — connectez-le à votre service d'envoi d'emails pour l'activer.";
    });
  }
})();
