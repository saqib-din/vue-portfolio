<template>
  <template v-if="showCursor">
    <div ref="cursorDot" class="cursor-dot" :style="dotStyle"></div>
    <div ref="cursorOutline" class="cursor-outline" :style="outlineStyle"></div>
  </template>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const cursorDot = ref(null)
const cursorOutline = ref(null)
const mouseX = ref(0)
const mouseY = ref(0)
const outlineX = ref(0)
const outlineY = ref(0)
const isHovering = ref(false)
const showCursor = ref(false)

const dotStyle = computed(() => ({
  left: `${mouseX.value}px`,
  top: `${mouseY.value}px`,
  transform: isHovering.value 
    ? 'translate(-50%, -50%) scale(2)' 
    : 'translate(-50%, -50%) scale(1)'
}))

const outlineStyle = computed(() => ({
  left: `${outlineX.value - 20}px`,
  top: `${outlineY.value - 20}px`,
  transform: isHovering.value 
    ? 'translate(0, 0) scale(1.5)' 
    : 'translate(0, 0) scale(1)'
}))

let animationId = null

const animateOutline = () => {
  outlineX.value += (mouseX.value - outlineX.value) * 0.15
  outlineY.value += (mouseY.value - outlineY.value) * 0.15
  animationId = requestAnimationFrame(animateOutline)
}

const handleMouseMove = (e) => {
  mouseX.value = e.clientX
  mouseY.value = e.clientY
}

const handleMouseEnter = () => {
  isHovering.value = true
}

const handleMouseLeave = () => {
  isHovering.value = false
}

onMounted(() => {
  if (window.innerWidth < 768) {
    showCursor.value = false
    return
  }

  showCursor.value = true

  document.addEventListener('mousemove', handleMouseMove)
  animateOutline()

  // Add hover effects
  const hoverElements = document.querySelectorAll('a, button, .project-card, .expertise-card')
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', handleMouseEnter)
    el.addEventListener('mouseleave', handleMouseLeave)
  })

  onUnmounted(() => {
    document.removeEventListener('mousemove', handleMouseMove)
    if (animationId) {
      cancelAnimationFrame(animationId)
    }
    hoverElements.forEach(el => {
      el.removeEventListener('mouseenter', handleMouseEnter)
      el.removeEventListener('mouseleave', handleMouseLeave)
    })
  })
})
</script>
