<template>
  <div class="portfolio-supreme">
    <!-- Background Effects -->
    <ImmersiveBackground />
    <NoiseOverlay />
    <GridOverlay />

    <!-- Custom Cursor -->
    <CustomCursor />

    <!-- Page Loader -->
    <PageLoader :loading="loading" />

    <!-- Navigation -->
    <Navigation />

    <!-- Sections -->
    <HeroSection />
    <AboutSection />
    <ExpertiseSection />
    <WorksSection />
    <SkillsSection />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ImmersiveBackground from './components/ImmersiveBackground.vue'
import NoiseOverlay from './components/NoiseOverlay.vue'
import GridOverlay from './components/GridOverlay.vue'
import CustomCursor from './components/CustomCursor.vue'
import PageLoader from './components/PageLoader.vue'
import Navigation from './components/Navigation.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExpertiseSection from './components/ExpertiseSection.vue'
import WorksSection from './components/WorksSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'

const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 2000)
})
</script>
