<template>
  <section id="contact" class="section-contact">
    <div class="section-container">
      <div class="section-header" data-aos="fade-up">
        <div class="section-label">
          <span class="label-line"></span>
          <span class="label-text">Chapter Five</span>
          <span class="label-line"></span>
        </div>
        <h2 class="section-title">Let's Create Together</h2>
        <p class="section-subtitle">
          Ready to bring your vision to life? Let's discuss how we can collaborate
        </p>
      </div>

      <div class="contact-grid">
        <div class="contact-content" data-aos="fade-right">
          <h3 class="contact-heading">Begin Your Journey</h3>
          <p class="contact-text">
            I'm always excited to collaborate on meaningful projects that
            push boundaries and create real value. Whether you're looking to
            build a sophisticated web application, redesign your digital
            presence, or need a reliable partner for your development needs,
            I'm here to help transform your vision into reality.
          </p>
          <div class="contact-benefits">
            <div 
              v-for="benefit in benefits" 
              :key="benefit"
              class="benefit-item"
            >
              <i :class="benefit.icon"></i>
              <span>{{ benefit.text }}</span>
            </div>
          </div>
        </div>

        <div class="contact-card" data-aos="fade-left">
          <div class="contact-profile">
            <div class="profile-image">
              <img src="/sd.png" alt="Saqib Din" />
              <div class="profile-ring"></div>
            </div>
            <h3 class="profile-name">Saqib Din</h3>
            <p class="profile-role">Full Stack Developer & Laravel Artisan</p>
            <div class="profile-status">
              <span class="status-dot"></span>
              <span>Available for Projects</span>
            </div>
          </div>

          <div class="contact-info">
            <div 
              v-for="info in contactInfo" 
              :key="info.label"
              class="info-item"
            >
              <div class="info-icon">
                <i :class="info.icon"></i>
              </div>
              <div class="info-content">
                <span class="info-label">{{ info.label }}</span>
                <a 
                  v-if="info.link" 
                  :href="info.link" 
                  class="info-value"
                >
                  {{ info.value }}
                </a>
                <span v-else class="info-value">{{ info.value }}</span>
              </div>
            </div>
          </div>

          <div class="remote-notice">
            <i class="bi bi-globe2"></i>
            <span>Available for Remote Work Only</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

const benefits = [
  { icon: 'bi bi-lightning-charge-fill', text: 'Rapid response within 24 hours' },
  { icon: 'bi bi-shield-check', text: 'Commitment to quality and deadlines' },
  { icon: 'bi bi-chat-dots-fill', text: 'Clear, transparent communication' },
  { icon: 'bi bi-award-fill', text: 'Proven track record with successful projects' },
  { icon: 'bi bi-people-fill', text: 'Dedicated personalized support for every client' },
  { icon: 'bi bi-lightbulb-fill', text: 'Excellence through innovative solutions' }
]

const contactInfo = [
  {
    icon: 'bi bi-telephone-fill',
    label: 'Phone',
    value: '+92 312 8336290',
    link: 'tel:+923128336290'
  },
  {
    icon: 'bi bi-envelope-fill',
    label: 'Email',
    value: 'din.97legend@gmail.com',
    link: 'mailto:din.97legend@gmail.com'
  },
  {
    icon: 'bi bi-geo-alt-fill',
    label: 'Location',
    value: 'Akbar town Street 5, Kamra Cantt, Pakistan',
    link: null
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
