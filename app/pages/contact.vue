<template>
  <div class="min-h-screen bg-bg-secondary text-text-primary font-sans pt-32 pb-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-between">
      
      <div v-if="profile" class="flex-1 flex flex-col justify-center">
        <h1 class="text-7xl md:text-[12rem] font-bold tracking-tighter uppercase leading-none mb-12">Contact</h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 mt-12">
          
          <div class="space-y-12">
            <div>
              <span class="text-2xl font-bold uppercase tracking-widest text-text-secondary block mb-4">Drop a line</span>
              <a :href="`mailto:${profile.contact.email}`" class="text-4xl md:text-6xl font-bold hover:underline tracking-tighter break-words">
                {{ profile.contact.email }}
              </a>
            </div>

            <div>
              <span class="text-2xl font-bold uppercase tracking-widest text-text-secondary block mb-4">Location</span>
              <p class="text-3xl md:text-4xl font-bold tracking-tighter max-w-md">{{ profile.contact.location }}</p>
            </div>
          </div>

          <div>
            <span class="text-2xl font-bold uppercase tracking-widest text-text-secondary block mb-8">Socials</span>
            <ul class="space-y-6">
              <li v-for="social in profile.socialLinks" :key="social.platform">
                <a 
                  :href="social.url" 
                  target="_blank"
                  class="text-4xl md:text-6xl font-bold uppercase tracking-tighter hover:underline flex items-center gap-4 group"
                >
                  <span class="group-hover:translate-x-4 transition-transform duration-300 ease-out">{{ social.platform }}</span>
                  <span class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-accent">↗</span>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup lang="ts">
const { profile } = useConfig()

useHead({
  title: computed(() => profile.value ? `Contact | ${profile.value.name}` : 'Contact'),
  meta: [{ name: 'description', content: 'Get in touch for opportunities and collaborations' }]
})
</script>
