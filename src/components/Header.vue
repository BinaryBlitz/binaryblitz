<template>
  <div class="container py-8 flex justify-between items-center gap-x-8">
    <div class="flex flex-row items-center gap-x-8 md:gap-x-12">
      <router-link to="/">
        <img src="@/assets/images/logo.png" alt="Binary Blitz logo">
      </router-link>
      <ul class="flex gap-8 font-medium">
        <li>
          <router-link to="/">Projects</router-link>
        </li>
      </ul>
    </div>

    <div class="flex items-center gap-x-8">
      <a href="mailto:app@binaryblitz.ru" class="button">Contact</a>
    </div>
  </div>
</template>
