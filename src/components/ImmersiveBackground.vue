<template>
  <div class="immersive-bg">
    <canvas ref="particleCanvas" id="particleCanvas"></canvas>
    <div class="gradient-orb orb-1"></div>
    <div class="gradient-orb orb-2"></div>
    <div class="gradient-orb orb-3"></div>
    <div class="gradient-orb orb-4"></div>
    <div class="gradient-orb orb-5"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const particleCanvas = ref(null)
let animationId = null

class Particle {
  constructor(canvasWidth, canvasHeight) {
    this.x = Math.random() * canvasWidth
    this.y = Math.random() * canvasHeight
    this.size = Math.random() * 2 + 1
    this.speedX = Math.random() * 0.5 - 0.25
    this.speedY = Math.random() * 0.5 - 0.25
    this.opacity = Math.random() * 0.5 + 0.2
    this.canvasWidth = canvasWidth
    this.canvasHeight = canvasHeight
  }

  update() {
    this.x += this.speedX
    this.y += this.speedY

    if (this.x < 0 || this.x > this.canvasWidth) this.speedX *= -1
    if (this.y < 0 || this.y > this.canvasHeight) this.speedY *= -1
  }

  draw(ctx) {
    ctx.fillStyle = `rgba(212, 175, 55, ${this.opacity})`
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fill()
  }
}

onMounted(() => {
  const canvas = particleCanvas.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const particles = []
  const particleCount = 50

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle(canvas.width, canvas.height))
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particles.forEach((particle) => {
      particle.update()
      particle.draw(ctx)
    })

    // Connect particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 150) {
          ctx.strokeStyle = `rgba(212, 175, 55, ${0.2 * (1 - distance / 150)})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.stroke()
        }
      }
    }

    animationId = requestAnimationFrame(animate)
  }

  animate()

  const handleResize = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    particles.forEach(particle => {
      particle.canvasWidth = canvas.width
      particle.canvasHeight = canvas.height
    })
  }

  window.addEventListener('resize', handleResize)

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    if (animationId) {
      cancelAnimationFrame(animationId)
    }
  })
})
</script>
