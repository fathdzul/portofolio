<template>
  <div class="bg-bg-secondary min-h-screen text-text-primary selection:bg-text-primary selection:text-bg-secondary">
    <Navigation />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const { loadConfig } = useConfig()

// Load all configuration on app mount
onMounted(async () => {
  await loadConfig()
})
</script>

<style>
/* Global styles are in assets/css/main.css */
body {
  background-color: #ffffff;
}
</style>
