<template>
  <div class="min-h-screen bg-bg-secondary text-text-primary font-sans pt-32 pb-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <h1 class="text-7xl md:text-9xl font-bold tracking-tighter uppercase mb-20 leading-none">Selected Work</h1>

      <div class="space-y-6">
        <ul v-if="projects && projects.length" class="flex flex-col border-t-4 border-text-primary">
          <li v-for="project in projects" :key="project.id" class="border-b-4 border-text-primary group hover:bg-text-primary hover:text-bg-secondary transition-colors duration-300">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-end py-12 px-4 gap-6">
              
              <div class="flex-1">
                <h2 class="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-4">{{ project.title }}</h2>
                <p class="text-2xl md:text-3xl font-medium max-w-3xl text-text-secondary group-hover:text-bg-secondary/70">{{ project.description }}</p>
              </div>

              <div class="flex-shrink-0 text-left md:text-right">
                <span class="text-xl md:text-2xl font-bold uppercase tracking-widest">{{ project.category }}</span>
              </div>
              
            </div>
          </li>
        </ul>
        <div v-else>
          <p class="text-3xl font-bold text-text-secondary">No projects to display.</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
const { projects, profile } = useConfig()

useHead({
  title: computed(() => profile.value ? `Portfolio | ${profile.value.name}` : 'Portfolio'),
  meta: [{ name: 'description', content: 'Project portfolio and work samples' }]
})
</script>
