<template>
  <div class="page-loader" :class="{ hidden: !loading }">
    <div class="loader-content">
      <div class="loader-logo">
        <img src="/sd.png" alt="SD" />
      </div>
      <div class="loader-text">Loading</div>
      <div class="loader-bar">
        <div class="loader-progress"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  loading: {
    type: Boolean,
    default: true
  }
})
</script>
