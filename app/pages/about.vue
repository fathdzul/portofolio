<template>
  <div class="min-h-screen bg-bg-secondary text-text-primary font-sans pt-32 pb-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <h1 class="text-7xl md:text-9xl font-bold tracking-tighter uppercase mb-20 leading-none">About</h1>

      <div class="space-y-32">
        
        <section v-if="skills && skills.concepts && skills.concepts.length">
          <h2 class="text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-12 border-b-8 border-text-primary pb-4">Skills & Focus</h2>
          <div class="flex flex-wrap gap-4">
            <span v-for="skill in skills.concepts" :key="skill.name" class="text-2xl md:text-4xl font-bold uppercase tracking-tighter border-2 border-text-primary px-4 py-2 hover:bg-text-primary hover:text-bg-secondary transition-colors">
              {{ skill.name }}
            </span>
          </div>
        </section>

        <section v-if="experience && experience.length">
          <h2 class="text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-12 border-b-8 border-text-primary pb-4">Experience</h2>
          <ul class="space-y-16">
            <li v-for="(exp, idx) in experience" :key="idx" class="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-16 border-l-4 border-text-primary pl-6">
              <div class="w-full md:w-1/4">
                <span class="text-2xl font-bold uppercase tracking-widest text-text-secondary">{{ exp.period }}</span>
              </div>
              <div class="w-full md:w-3/4">
                <h3 class="text-4xl md:text-5xl font-bold tracking-tighter leading-none">{{ exp.title }}</h3>
                <p class="text-2xl md:text-3xl text-text-secondary mt-4">{{ exp.company }}</p>
                <div v-if="exp.responsibilities && exp.responsibilities.length" class="mt-6 space-y-2">
                  <p v-for="resp in exp.responsibilities" :key="resp" class="text-xl md:text-2xl leading-tight font-medium">{{ resp }}</p>
                </div>
              </div>
            </li>
          </ul>
        </section>

        <section v-if="organizations && organizations.length">
          <h2 class="text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-12 border-b-8 border-text-primary pb-4">Organizations</h2>
          <ul class="space-y-16">
            <li v-for="(org, idx) in organizations" :key="idx" class="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-16 border-l-4 border-text-primary pl-6">
              <div class="w-full md:w-1/4">
                <span class="text-2xl font-bold uppercase tracking-widest text-text-secondary">{{ org.period }}</span>
              </div>
              <div class="w-full md:w-3/4">
                <h3 class="text-4xl md:text-5xl font-bold tracking-tighter leading-none">{{ org.title }}</h3>
                <p class="text-2xl md:text-3xl text-text-secondary mt-4">{{ org.organization }}</p>
                <div v-if="org.responsibilities && org.responsibilities.length" class="mt-6 space-y-2">
                  <p v-for="resp in org.responsibilities" :key="resp" class="text-xl md:text-2xl leading-tight font-medium">{{ resp }}</p>
                </div>
              </div>
            </li>
          </ul>
        </section>

        <section v-if="achievements && achievements.length">
          <h2 class="text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-12 border-b-8 border-text-primary pb-4">Achievements & Priorities</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div v-for="(ach, idx) in achievements" :key="idx" class="border-2 border-text-primary p-8 hover:bg-black hover:text-white transition-colors group">
              <div class="flex justify-between items-start mb-6">
                <span class="text-6xl font-black tracking-tighter opacity-20 group-hover:opacity-100 transition-opacity">{{ ach.rank }}</span>
                <span class="text-xl font-bold uppercase tracking-widest">{{ ach.year }}</span>
              </div>
              <h3 class="text-3xl md:text-4xl font-bold tracking-tighter leading-tight">{{ ach.title }}</h3>
              <p class="text-xl text-text-muted mt-4 group-hover:text-gray-300">{{ ach.description }}</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { profile, skills, achievements, organizations, experience } = useConfig()

useHead({
  title: computed(() => profile.value ? `About | ${profile.value.name}` : 'About'),
  meta: [
    { name: 'description', content: 'About, Skills, Experience, and Achievements' }
  ]
})
</script>
