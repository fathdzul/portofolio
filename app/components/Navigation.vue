<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-bg-secondary/90 font-sans border-b border-border">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center group">
          <span class="text-text-primary font-bold text-2xl uppercase tracking-tighter">
            {{ ((profile?.name || 'Portfolio').split(' ')[0] || 'portfolio') }}
          </span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-6">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="text-text-primary hover:text-text-muted transition-colors text-sm font-bold uppercase tracking-widest"
            active-class="underline decoration-2 underline-offset-4"
          >
            {{ link.name }}
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 text-text-primary"
        >
          <svg v-if="!mobileMenuOpen" class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
          </svg>
          <svg v-else class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition-all duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="mobileMenuOpen" class="md:hidden bg-bg-secondary w-full h-screen fixed top-16 left-0">
        <div class="flex flex-col p-8 space-y-6">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            @click="mobileMenuOpen = false"
            class="text-4xl font-bold text-text-primary uppercase tracking-tighter"
            active-class="underline decoration-4 underline-offset-8"
          >
            {{ link.name }}
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </nav>

  <div class="h-16" />
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Assignments', path: '/assignments' },
  { name: 'Contact', path: '/contact' },
]

const route = useRoute()
const { profile } = useConfig()

watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
</script>
