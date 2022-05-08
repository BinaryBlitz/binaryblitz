<template>
  <div class="flex flex-col gap-y-8 items-start">
    <img :src="currentTechnology.logo_src" :alt="currentTechnology.name" class="max-h-20">
    <h3 class="text-lg font-semibold">
      {{ currentTechnology.name }}
    </h3>
    <p>
      {{ currentTechnology.description }}
    </p>
  </div>
</template>

<script>
const TECHNOLOGIES = [
  {
    id: 'swift',
    name: 'Swift',
    logo_src: '/images/technologies/swift.png',
    description: 'General-purpose programming language built using a modern approach to safety, performance, and software design patterns.'
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    logo_src: '/images/technologies/kotlin.png',
    description: 'Statically typed programming language for modern multiplatform applications. 100% interoperable with Java and Android.'
  },
  {
    id: 'rails',
    name: 'Ruby on Rails',
    logo_src: '/images/technologies/rails.png',
    description: 'Rails is a full-stack framework. It ships with all the tools needed to build amazing web apps on both the front and back end.'
  },
]

export default {
  props: {
    name: String
  },
  data() {
    return {
      technologies: TECHNOLOGIES
    }
  },
  computed: {
    currentTechnology() {
      return this.technologies.find(technology => technology.id === this.name)
    }
  }
}
</script>
