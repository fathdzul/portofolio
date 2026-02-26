<template>
  <div class="min-h-screen bg-bg-secondary text-text-primary font-sans">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div v-if="profile" class="flex flex-col gap-12">
        
        <div class="space-y-8">
          <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none max-w-6xl">
            Hi — I'm {{ profile.name.split(' ')[0] }}, {{ profile.title }}
          </h1>
          <p class="text-xl md:text-3xl lg:text-4xl leading-tight text-text-secondary max-w-4xl font-medium border-l-4 border-text-primary pl-6">
            {{ profile.bio.replace(/\n\n/g, ' ⏤ ') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 pt-20 border-t-2 border-border mt-12">
          
          <div v-if="projects && projects.length">
            <h2 class="text-2xl md:text-3xl font-bold mb-10 tracking-tighter uppercase text-text-muted">Selected Work</h2>
            <ul class="space-y-8">
              <li v-for="project in projects.slice(0, 3)" :key="project.id">
                <NuxtLink to="/portfolio" class="group block">
                  <div class="flex flex-col">
                    <span class="text-2xl md:text-4xl font-bold group-hover:text-text-muted transition-colors tracking-tighter">• {{ project.title }}</span>
                    <span class="text-text-secondary text-lg md:text-xl ml-5 md:ml-8 mt-2">{{ project.description }}</span>
                  </div>
                </NuxtLink>
              </li>
            </ul>
             <div class="mt-12">
               <NuxtLink to="/portfolio" class="text-lg font-bold hover:underline tracking-widest uppercase">View All Projects →</NuxtLink>
             </div>
          </div>
          
          <div>
            <h2 class="text-2xl md:text-3xl font-bold mb-10 tracking-tighter uppercase text-text-muted">Contact Info</h2>
            <div class="space-y-6">
              <a :href="`mailto:${profile.contact.email}`" class="block text-2xl md:text-4xl font-bold hover:underline tracking-tighter">
                {{ profile.contact.email }}
              </a>
              <p class="text-xl text-text-secondary max-w-sm">{{ profile.contact.location }}</p>
            </div>
            
            <div class="mt-12 flex flex-col gap-4">
              <span class="text-lg font-bold uppercase tracking-widest text-text-muted">Socials</span>
              <div class="flex gap-6">
                <a 
                  v-for="social in profile.socialLinks" 
                  :key="social.platform"
                  :href="social.url"
                  target="_blank"
                  class="text-xl hover:underline font-bold"
                >
                  {{ social.platform }}
                </a>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { profile, projects } = useConfig()

useHead({
  title: computed(() => profile.value ? `Home | ${profile.value.name}` : 'Home'),
  meta: [
    { name: 'description', content: computed(() => profile.value?.bio || 'Portfolio') }
  ]
})
</script>
