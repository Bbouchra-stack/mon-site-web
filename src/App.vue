<script setup>
import TheHeader from './components/TheHeader.vue'
import HeroSection from './components/HeroSection.vue'
import MethodSection from './components/MethodSection.vue'
import AdvantagesSection from './components/AdvantagesSection.vue'
import PortfolioSection from './components/PortfolioSection.vue'
import FaqSection from './components/FaqSection.vue'
import ContactSection from './components/ContactSection.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <TheHeader />
  <main id="contenu">
    <HeroSection />
    <MethodSection />
    <AdvantagesSection />
    <PortfolioSection />
    <FaqSection />
    <ContactSection />
  </main>
  <TheFooter />
</template>
