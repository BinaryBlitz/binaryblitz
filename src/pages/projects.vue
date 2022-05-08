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

      <router-link to="/projects/fitmost" class="bg-cover p-12 flex flex-col justify-between items-start gap-y-20"
        style="background-image: url('/images/works-bg5.jpg')">
        <img alt="" src="/assets/images/works-logo5.png" class="h-12">

        <div class="font-medium text-gray-900">
          <p class="text-sm">Mobile app</p>
          <p class="text-lg font-semibold">Diet food delivery</p>
        </div>
      </router-link>
      <router-link to="/projects/fitmost" class="bg-cover p-12 flex flex-col justify-between items-start gap-y-20"
        style="background-image: url('/images/works-bg6.jpg')">
        <img alt="" src="/assets/images/works-logo6.png" class="h-12">

        <div class="font-medium text-gray-900">
          <p class="text-sm">Mobile app</p>
          <p class="text-lg font-semibold">Chain of city cafes</p>
        </div>
      </router-link>
      <router-link to="/projects/fitmost" class="bg-cover p-12 flex flex-col justify-between items-start gap-y-20"
        style="background-image: url('/images/works-bg7.jpg')">
        <img alt="" src="/assets/images/works-logo7.png" class="h-12">

        <div class="font-medium text-white">
          <p class="text-sm">Mobile app</p>
          <p class="text-lg font-semibold">Trivia game</p>
        </div>
      </router-link>
      <router-link to="/projects/fitmost" class="bg-cover p-12 flex flex-col justify-between items-start gap-y-20"
        style="background-image: url('/images/works-bg2.jpg')">
        <img alt="" src="/assets/images/works-logo2.png" class="h-12">

        <div class="font-medium text-white">
          <p class="text-sm">Mobile app</p>
          <p class="text-lg font-semibold">Study assistant</p>
        </div>
      </router-link>
      <router-link to="/projects/fitmost" class="bg-cover p-12 flex flex-col justify-between items-start gap-y-20"
        style="background-image: url('/images/works-bg1.jpg')">
        <img alt="" src="/assets/images/works-logo1.png" class="h-12">

        <div class="font-medium text-gray-900">
          <p class="text-sm">Mobile app</p>
          <p class="text-lg font-semibold">Search for sporting events</p>
        </div>
      </router-link>

    </div>
  </div>
</template>
