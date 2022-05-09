<template>
  <router-link :to="`/projects/${project.slug}`"
    class="bg-cover p-12 flex flex-col justify-between items-start gap-y-20"
    :style="`background-image: url(${project.background_url})`">
    <img alt="" :src="project.icon_src" class="h-12">

    <div class="font-medium" :class="textColor">
      <p class="text-sm">{{ project.category }}</p>
      <p class="text-lg font-semibold">{{ project.headline }}</p>
    </div>
  </router-link>
</template>

<script lang="ts">
export default {
  props: {
    project: Object
  },
  computed: {
    textColor(): string {
      return this.project.text_color_theme === 'dark' ? 'text-gray-900' : 'text-white'
    }
  }
}
</script>
