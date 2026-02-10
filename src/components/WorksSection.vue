<template>
  <section id="works" class="section-works">
    <div class="section-container">
      <div class="section-header" data-aos="fade-up">
        <div class="section-label">
          <span class="label-line"></span>
          <span class="label-text">Chapter Three</span>
          <span class="label-line"></span>
        </div>
        <h2 class="section-title">Portfolio of Excellence</h2>
        <p class="section-subtitle">
          A curated selection of projects showcasing craftsmanship and innovation
        </p>
      </div>

      <!-- Featured Project -->
      <div class="project-featured" data-aos="fade-up">
        <div class="project-badge">Featured Project</div>
        <div class="project-content">
          <div class="project-visual">
            <div class="project-number">01</div>
            <div class="project-icon">
              <i class="bi bi-basket-fill"></i>
            </div>
          </div>
          <div class="project-info">
            <h3 class="project-title">
              Agricultural Products Distribution Platform
            </h3>
            <p class="project-description">
              Comprehensive web-based solution for agricultural product
              management and distribution. Developed with Laravel 12 and
              MySQL, this enterprise platform facilitates complete product
              lifecycle management—from catalog organization and quotation
              requests to order processing and financial analytics—serving
              both administrative operations and customer engagement through
              a secure, role-based system.
            </p>
            <div class="project-features">
              <div 
                v-for="feature in featuredProject.features" 
                :key="feature"
                class="feature-item"
              >
                <i class="bi bi-check-circle-fill"></i>
                <span>{{ feature }}</span>
              </div>
            </div>
            <div class="project-tech">
              <span 
                v-for="tech in featuredProject.tech" 
                :key="tech"
                class="tech-tag"
                :class="{ primary: tech === 'Laravel 12' }"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Other Projects Grid -->
      <div class="projects-grid">
        <div 
          v-for="project in projects" 
          :key="project.number"
          class="project-card" 
          data-aos="fade-up" 
          :data-aos-delay="(parseInt(project.number) - 2) * 100"
        >
          <div class="project-header">
            <div class="project-number">{{ project.number }}</div>
            <div class="project-icon">
              <i :class="project.icon"></i>
            </div>
          </div>
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-description">{{ project.description }}</p>
          <div class="project-tech">
            <span 
              v-for="tech in project.tech" 
              :key="tech"
              class="tech-tag"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

const featuredProject = {
  features: [
    'Multi-Category Product Management System',
    'Quotation Workflow & Client Conversion',
    'Order Processing & Invoice Generation',
    'Automated Notifications & Activity Tracking',
    'Analytics Dashboard with Business Intelligence',
    'Secure Authentication & Access Control'
  ],
  tech: ['Laravel 12', 'MySQL', 'JavaScript', 'Bootstrap 5', 'RESTful API']
}

const projects = [
  {
    number: '02',
    icon: 'bi bi-mortarboard-fill',
    title: 'School Management System',
    description: 'Enterprise educational platform featuring comprehensive student/teacher/employee management, automated payroll and fee processing, class assignment system, voucher generation, role-based authentication, real-time analytics dashboard, and integrated financial tracking—built to streamline institutional operations with efficiency and transparency.',
    tech: ['Laravel 12', 'MySQL', 'JavaScript', 'Bootstrap 5', 'Chart.js']
  },
  {
    number: '03',
    icon: 'bi bi-person-badge-fill',
    title: 'Professional Portfolio Website',
    description: 'Modern, responsive portfolio showcasing professional work and technical capabilities. Built with semantic HTML5, advanced CSS3 animations, and vanilla JavaScript—emphasizing clean code, accessibility, and optimal performance across all devices.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design']
  },
  {
    number: '04',
    icon: 'bi bi-building-fill',
    title: 'Business Management Platform',
    description: 'Comprehensive enterprise solution for employee management, project tracking, and organizational reporting. Features secure authentication, complete CRUD operations, and structured data management for efficient business operations.',
    tech: ['Laravel', 'MySQL', 'Bootstrap 5', 'RESTful API']
  },
  {
    number: '05',
    icon: 'bi bi-moon-stars-fill',
    title: 'Masjid Management System',
    description: 'Community-focused platform featuring automated prayer time displays with location-based scheduling, event management calendar, donation tracking, and announcement system—Alhamdulillah, designed to serve the Muslim community with mobile-optimized accessibility.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Prayer Times API']
  },
  {
    number: '06',
    icon: 'bi bi-graph-up-arrow',
    title: 'Business Intelligence Dashboard',
    description: 'Professional data analytics suite with advanced Excel automation, dynamic visualizations, and interactive reporting tools. Designed for business intelligence and decision-making support through comprehensive data analysis.',
    tech: ['Microsoft Excel', 'Data Analytics', 'Automation']
  },
  {
    number: '07',
    icon: 'bi bi-cart-check-fill',
    title: 'Responsive E-Commerce Interface',
    description: 'Modern online shopping experience featuring dynamic product filtering, interactive shopping cart, real-time price calculations, and fully responsive design ensuring seamless functionality across desktop, tablet, and mobile devices.',
    tech: ['HTML5', 'Bootstrap 5', 'JavaScript', 'Responsive Design']
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
