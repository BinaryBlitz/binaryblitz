<script setup lang="ts">
const projects = useDocuments('~/pages/projects')
</script>

<template>
  <div class="bg-gray-50">
    <div class="container py-12 grid grid-cols-2">

      <router-link :to="`/projects/${project.slug}`"
        class="bg-cover p-12 flex flex-col justify-between items-start gap-y-20" v-for="project in projects"
        :style="`background-image: url(${project.background_url})`">
        <img alt="" :src="project.icon_src" class="h-12">

        <div class="font-medium text-white">
          <p class="text-sm">{{ project.category }}</p>
          <p class="text-lg font-semibold">{{ project.headline }}</p>
        </div>
      </router-link>

    </div>
  </div>
</template>
