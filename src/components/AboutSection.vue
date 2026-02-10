<template>
  <section id="about" class="section-about">
    <div class="section-container">
      <div class="section-header" data-aos="fade-up">
        <div class="section-label">
          <span class="label-line"></span>
          <span class="label-text">Chapter One</span>
          <span class="label-line"></span>
        </div>
        <h2 class="section-title">The Story Behind The Craft</h2>
        <p class="section-subtitle">
          A journey of passion, dedication, and relentless pursuit of
          digital excellence
        </p>
      </div>

      <div class="about-grid">
        <div class="about-content" data-aos="fade-right">
          <div class="content-card">
            <p class="text-lead">
              As a dedicated full-stack developer, I'm committed to crafting
              meaningful digital solutions that serve both technical excellence
              and human purpose. Alhamdulillah, I approach each project as an
              opportunity to apply knowledge with integrity, deliver value with
              precision, and contribute positively to the digital landscape.
            </p>

            <p class="text-body">
              My professional foundation encompasses comprehensive expertise
              in modern web technologies—from building scalable backend
              systems with <strong>Laravel and MySQL</strong> to developing
              responsive, user-centric interfaces using
              <strong>HTML5, CSS3, and JavaScript</strong>. Through
              continuous learning and practice, I strive to merge technical
              competence with thoughtful problem-solving and ethical
              development practices.
            </p>

            <p class="text-body">
              What truly motivates my work is the responsibility to create
              solutions that genuinely benefit users and stakeholders. I
              believe in the principle of <em>Ihsan</em>—excellence in all
              endeavors—approaching every line of code with diligence, every
              challenge with patience, and every commitment with
              accountability. Quality, honesty, and purposeful innovation
              guide my professional journey.
            </p>

            <div class="signature-block">
              <div class="signature-line"></div>
              <span class="signature-text">Saqib Din</span>
            </div>
          </div>
        </div>

        <div class="about-sidebar" data-aos="fade-left">
          <div class="philosophy-card">
            <div class="card-icon">
              <i class="bi bi-heart-fill"></i>
            </div>
            <h3 class="card-title">Professional Philosophy</h3>
            <p class="card-text">
              "Every line of code is an opportunity to serve with excellence
              and integrity. I believe in crafting solutions that honor both
              technical precision and ethical responsibility—where
              innovation meets purpose, and where quality reflects
              commitment to delivering value with Ihsan (excellence in all
              we do)."
            </p>
            <div class="philosophy-attribution">
              <small class="text-muted">— Guided by principles of craftsmanship and accountability</small>
            </div>
          </div>

          <div class="values-grid">
            <div v-for="value in values" :key="value.title" class="value-card">
              <div class="value-icon">
                <i :class="value.icon"></i>
              </div>
              <div class="d-flex flex-column">
                <h4 class="value-title">{{ value.title }}</h4>
                <p class="value-text">{{ value.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

const values = [
  {
    icon: 'bi bi-shield-fill-check',
    title: 'Integrity & Excellence',
    text: 'Delivering quality work with honesty, precision, and unwavering commitment to ethical standards'
  },
  {
    icon: 'bi bi-book-fill',
    title: 'Continuous Learning',
    text: 'Pursuing knowledge relentlessly and adapting to evolving technologies with humility'
  },
  {
    icon: 'bi bi-people-fill',
    title: 'Trust & Collaboration',
    text: 'Building meaningful partnerships through transparency, reliability, and mutual respect'
  },
  {
    icon: 'bi bi-bullseye',
    title: 'Purpose-Driven Impact',
    text: 'Creating solutions that serve genuine needs and contribute positively to communities'
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
