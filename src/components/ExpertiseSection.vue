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
        <div v-for="(item, index) in expertiseItems" :key="index" class="expertise-card" data-aos="fade-up"
          :data-aos-delay="index * 100">
          <div class="card-number">{{ item.number }}</div>
          <div class="card-icon">
            <i :class="item.icon"></i>
          </div>
          <h3 class="card-title">{{ item.title }}</h3>
          <div class="card-divider"></div>
          <p class="card-text">{{ item.text }}</p>
          <div class="card-tags">
            <span v-for="tag in item.tags" :key="tag" class="tag">
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
    title: 'Professional Excellence at Scrumad Company',
    text: 'Alhamdulillah, blessed with the opportunity to embark on a transformative two-year journey at Scrumad Company, where I developed comprehensive technical expertise through intensive professional training and expert mentorship. Mastered full-stack web development encompassing advanced frontend frameworks (HTML5, CSS3, JavaScript, Vue.js), robust backend architecture (Laravel, PHP, MySQL), API development, and industry-standard practices. This dedicated pursuit of knowledge, guided by the principle of excellence in all endeavors, has shaped me into a versatile developer committed to continuous growth and delivering impactful solutions.',
    tags: ['Full Stack Engineering', 'Professional Mentorship', '2 Years Experience']
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
