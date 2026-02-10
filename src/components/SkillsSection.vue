<template>
  <section id="skills" class="section-skills">
    <div class="section-container">
      <div class="section-header" data-aos="fade-up">
        <div class="section-label">
          <span class="label-line"></span>
          <span class="label-text">Chapter Four</span>
          <span class="label-line"></span>
        </div>
        <h2 class="section-title">Technical Arsenal</h2>
        <p class="section-subtitle">
          Comprehensive mastery of modern technologies and development tools
        </p>
      </div>

      <div class="skills-grid">
        <div v-for="(category, index) in skillCategories" :key="category.title" class="skills-category"
          data-aos="fade-up" :data-aos-delay="index * 100">
          <div class="category-header">
            <div class="category-icon">
              <i :class="category.icon"></i>
            </div>
            <h3 class="category-title">{{ category.title }}</h3>
            <p class="category-subtitle">{{ category.subtitle }}</p>
          </div>

          <div class="skills-list">
            <div v-for="skill in category.skills" :key="skill.name" class="skill-item">
              <div class="skill-header">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-percent">{{ skill.percent }}%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-fill"
                  :style="{ '--skill': skill.percent + '%', width: animated ? skill.percent + '%' : '0%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const animated = ref(false)

const skillCategories = [
  {
    icon: 'bi bi-palette2',
    title: 'Front-End Artistry',
    subtitle: 'Creating beautiful, responsive interfaces',
    skills: [
      { name: 'HTML5 & Semantic Markup', percent: 95 },
      { name: 'CSS3 & Responsive Design', percent: 90 },
      { name: 'Bootstrap Framework', percent: 85 },
      { name: 'JavaScript ES6+', percent: 70 },
      { name: 'Vue.js Framework', percent: 65 }
    ]
  },

  {
    icon: 'bi bi-cpu-fill',
    title: 'Back-End',
    subtitle: 'Building robust, scalable systems',
    skills: [
      { name: 'Laravel Framework', percent: 70 },
      { name: 'MySQL Database', percent: 75 },
      { name: 'RESTful API Development', percent: 70 },
      { name: 'PHP Programming', percent: 75 },
      { name: 'Git & Version Control', percent: 80 }
    ]
  },
  {
    icon: 'bi bi-box-seam-fill',
    title: 'Tools & Platforms',
    subtitle: 'Essential productivity and creative suite',
    skills: [
      { name: 'WordPress Development', percent: 80 },
      { name: 'Wix Website Builder', percent: 75 },
      { name: 'Microsoft Office Suite', percent: 90 },
      { name: 'Figma UI/UX Design', percent: 80 },
      { name: 'Canva Graphics', percent: 85 }
    ]
  }
]

onMounted(() => {
  const observerOptions = {
    threshold: 0.3
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !animated.value) {
        setTimeout(() => {
          animated.value = true
        }, 300)
      }
    })
  }, observerOptions)

  const skillsSection = document.querySelector('.section-skills')
  if (skillsSection) {
    observer.observe(skillsSection)
  }

  // AOS animations
  const aosObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate')
      }
    })
  }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' })

  document.querySelectorAll('[data-aos]').forEach((el) => {
    aosObserver.observe(el)
  })
})
</script>

<style scoped>
.skill-fill {
  transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
