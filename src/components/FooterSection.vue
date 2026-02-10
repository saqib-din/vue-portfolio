<template>
  <footer class="footer-elite">
    <div class="footer-container">
      <div class="footer-divider">
        <span class="divider-line"></span>
        <span class="divider-icon">◆</span>
        <span class="divider-line"></span>
      </div>

      <div class="social-links">
        <a 
          v-for="social in socialLinks" 
          :key="social.name"
          :href="social.url" 
          target="_blank" 
          rel="noopener" 
          class="social-link"
          :aria-label="social.name"
        >
          <i :class="social.icon"></i>
        </a>
      </div>

      <div class="footer-copyright">
        <p>
          <span>© <span>{{ currentYear }}</span></span>
          <span class="copyright-divider">·</span>
          <span>Saqib Din</span>
          <span class="copyright-divider">·</span>
          <span>Crafted with Passion & Precision</span>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())

const socialLinks = [
  {
    name: 'GitHub',
    icon: 'bi bi-github',
    url: '#'
  },
  {
    name: 'LinkedIn',
    icon: 'bi bi-linkedin',
    url: 'https://www.linkedin.com/in/saqib-din/'
  },
  {
    name: 'Instagram',
    icon: 'bi bi-instagram',
    url: 'https://www.instagram.com/saqib_din/'
  },
  {
    name: 'WhatsApp',
    icon: 'bi bi-whatsapp',
    url: 'https://wa.me/923168336096?text=Assalam%20o%20Alaikum'
  }
]
</script>
