<template>
  <section id="home" class="hero-elite">
    <div class="hero-container">
      <div class="hero-content">
        <div class="hero-badge" data-aos="fade-down">
          <i class="bi bi-star-fill" style="animation: iconRotate 4s linear infinite;"></i>
          <span>Alhamdulillah</span>
          <i class="bi bi-star-fill" style="animation: iconRotate 4s linear infinite;"></i>
        </div>

        <h1 class="hero-title" data-aos="fade-up" data-aos-delay="100">
          <span class="title-line">Architecting</span>
          <span class="title-line title-highlight">Digital Masterpieces</span>
          <span class="title-line">With Precision Code</span>
        </h1>

        <p class="hero-description" data-aos="fade-up" data-aos-delay="200">
          I am <strong>Saqib Din</strong>, a dedicated full-stack web
          developer committed to creating impactful digital solutions that
          serve real needs. <strong>By the grace of Allah</strong>, I
          combine technical expertise in
          <strong>Laravel backend development</strong>,
          <strong>responsive frontend design</strong>, and
          <strong>database architecture</strong> to deliver reliable,
          scalable applications built on principles of quality, integrity,
          and purposeful innovation.
        </p>

        <div class="hero-stats" data-aos="fade-up" data-aos-delay="300">
          <div class="stat-item">
            <div class="stat-icon">
              <i class="bi bi-trophy-fill"></i>
            </div>
            <div class="stat-content">
              <div class="stat-number" ref="premiumProjects">0</div>
              <div class="stat-label">Premium Projects</div>
            </div>
          </div>

          <div class="stat-divider"></div>

          <div class="stat-item">
            <div class="stat-icon">
              <i class="bi bi-code-slash"></i>
            </div>
            <div class="stat-content">
              <div class="stat-number" ref="techMastered">0</div>
              <div class="stat-label">Technologies Mastered</div>
            </div>
          </div>

          <div class="stat-divider"></div>

          <div class="stat-item">
            <div class="stat-icon">
              <i class="bi bi-infinity"></i>
            </div>
            <div class="stat-content">
              <div class="stat-number">∞</div>
              <div class="stat-label">Passion & Dedication</div>
            </div>
          </div>
        </div>

        <div class="hero-actions" data-aos="fade-up" data-aos-delay="400">
          <a href="#works" class="btn-elite btn-primary" @click.prevent="scrollTo('works')">
            <span>Explore My Work</span>
            <i class="bi bi-arrow-right"></i>
          </a>
          <a href="#contact" class="btn-elite btn-secondary" @click.prevent="scrollTo('contact')">
            <span>Let's Collaborate</span>
            <i class="bi bi-send"></i>
          </a>
        </div>
      </div>

      <div class="hero-visual" data-aos="fade-left" data-aos-delay="200">
        <div class="visual-frame">
          <div class="frame-decoration corner-tl"></div>
          <div class="frame-decoration corner-tr"></div>
          <div class="frame-decoration corner-bl"></div>
          <div class="frame-decoration corner-br"></div>

          <div class="visual-image">
            <div class="image-glow"></div>
            <img src="/WhatsApp Image 2024-07-21 at 03.11.09_a021493a.jpg" alt="Saqib Din" />
            <div class="image-overlay"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="scroll-indicator">
      <div class="scroll-wheel"></div>
      <span>Scroll to Explore</span>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const premiumProjects = ref(null)
const techMastered = ref(null)
let countersAnimated = false

const animateCounter = (element, target) => {
  const duration = 2000
  const increment = target / (duration / 16)
  let current = 0

  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      element.textContent = target
      clearInterval(timer)
    } else {
      element.textContent = Math.ceil(current)
    }
  }, 16)
}

const scrollTo = (sectionId) => {
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

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !countersAnimated) {
        countersAnimated = true
        animateCounter(premiumProjects.value, 7)
        animateCounter(techMastered.value, 8)
      }
    })
  }, { threshold: 0.5 })

  const statsSection = document.querySelector('.hero-stats')
  if (statsSection) {
    observer.observe(statsSection)
  }

  // Initialize AOS-like animations
  initAOS()
})

const initAOS = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate')
      }
    })
  }, observerOptions)

  document.querySelectorAll('[data-aos]').forEach((el) => {
    observer.observe(el)
  })
}
</script>
