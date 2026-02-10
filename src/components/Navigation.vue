<template>
  <nav class="nav-supreme" :class="{ scrolled: isScrolled }">
    <div class="nav-container">
      <a href="#home" class="nav-brand" @click.prevent="scrollToSection('home')">
        <div class="brand-icon">
          <img src="/sd.png" alt="Saqib Din" />
          <div class="brand-glow"></div>
        </div>
        <div class="brand-info d-flex flex-column lh-sm" style="display: flex; flex-direction: column; line-height: 1.3;">
          <span class="brand-name">Saqib Din</span>
          <span class="brand-title">Laravel Artisan</span>
        </div>
      </a>

      <div class="nav-links" :class="{ active: menuActive }">
        <a 
          v-for="link in navLinks" 
          :key="link.id"
          :href="`#${link.id}`" 
          class="nav-link" 
          :class="{ 'nav-cta': link.cta, active: activeSection === link.id }"
          :data-text="link.text"
          @click.prevent="handleNavClick(link.id)"
        >
          <span v-if="!link.cta">{{ link.number }}</span>
          {{ link.text }}
          <i v-if="link.cta" class="bi bi-arrow-right"></i>
        </a>
      </div>

      <button 
        class="nav-toggle" 
        :class="{ active: menuActive }"
        aria-label="Toggle Menu"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const menuActive = ref(false)
const activeSection = ref('home')

const navLinks = [
  { id: 'about', number: '01', text: 'About' },
  { id: 'expertise', number: '02', text: 'Expertise' },
  { id: 'works', number: '03', text: 'Works' },
  { id: 'skills', number: '04', text: 'Skills' },
  { id: 'contact', text: "Let's Connect", cta: true }
]

const scrollToSection = (sectionId) => {
  const target = document.getElementById(sectionId)
  if (target) {
    const headerOffset = 100
    const elementPosition = target.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

const handleNavClick = (sectionId) => {
  scrollToSection(sectionId)
  menuActive.value = false
  document.body.style.overflow = ''
}

const toggleMenu = () => {
  menuActive.value = !menuActive.value
  document.body.style.overflow = menuActive.value ? 'hidden' : ''
}

const handleScroll = () => {
  isScrolled.value = window.pageYOffset > 100
  highlightActiveSection()
}

const highlightActiveSection = () => {
  const sections = document.querySelectorAll('section[id]')
  let currentSection = 'home'

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    if (window.pageYOffset >= sectionTop - 200) {
      currentSection = section.getAttribute('id')
    }
  })

  activeSection.value = currentSection
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
