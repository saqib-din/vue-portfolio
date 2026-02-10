<template>
  <section id="expertise" class="section-expertise">
    <div class="section-container">
      <div class="section-header" data-aos="fade-up">
        <div class="section-label">
          <span class="label-line"></span>
          <span class="label-text">Chapter Two</span>
          <span class="label-line"></span>
        </div>
        <h2 class="section-title">Credentials & Expertise</h2>
      </div>

      <div class="expertise-grid">
        <div 
          v-for="(item, index) in expertiseItems" 
          :key="index"
          class="expertise-card" 
          data-aos="fade-up" 
          :data-aos-delay="index * 100"
        >
          <div class="card-number">{{ item.number }}</div>
          <div class="card-icon">
            <i :class="item.icon"></i>
          </div>
          <h3 class="card-title">{{ item.title }}</h3>
          <div class="card-divider"></div>
          <p class="card-text">{{ item.text }}</p>
          <div class="card-tags">
            <span 
              v-for="tag in item.tags" 
              :key="tag"
              class="tag"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

const expertiseItems = [
  {
    number: '01',
    icon: 'bi bi-mortarboard-fill',
    title: 'Professional Foundation & Excellence',
    text: 'Developed comprehensive technical expertise through intensive professional training at Scrumad Company, mastering full-stack web development under expert guidance. This transformative journey encompassed advanced frontend frameworks, robust backend architecture, database optimization, and industry-standard development practices—Alhamdulillah for the opportunity to pursue knowledge and professional growth with dedication and integrity.',
    tags: ['Full Stack Engineering', 'Professional Mentorship']
  },
  {
    number: '02',
    icon: 'bi bi-diagram-3-fill',
    title: 'Applied Development Experience',
    text: 'Successfully delivered enterprise-grade web solutions across diverse domains, including comprehensive management systems, data-driven dashboards, and client-focused digital platforms. Each project reflects commitment to quality, ethical development practices, and delivering measurable value to stakeholders while maintaining professional integrity and excellence.',
    tags: ['Enterprise Solutions', 'Client Relations']
  },
  {
    number: '03',
    icon: 'bi bi-gear-wide-connected',
    title: 'Technical Competencies',
    text: 'Proficient in modern development technologies with emphasis on clean architecture and best practices: Laravel MVC framework, MySQL database design, responsive UI/UX implementation, version control systems, and comprehensive API development. Committed to continuous learning and applying knowledge with precision, accountability, and professional ethics.',
    tags: ['Laravel · MySQL', 'HTML5 · CSS3 · JavaScript', 'Bootstrap · Git']
  }
]

onMounted(() => {
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
})
</script>
