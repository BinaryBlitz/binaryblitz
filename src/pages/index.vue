<page>
title: Software design and development
</page>

<script setup lang="ts">
const projects = useDocuments('~/pages/projects')
</script>

<template>
  <div class="bg-gray-50">
    <div class="container py-12 grid grid-cols-1 md:grid-cols-2">
      <ProjectCard :project="project" v-for="project in projects" />
    </div>
  </div>
</template>
