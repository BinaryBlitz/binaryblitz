<template>
  <Header />

  <slot />

  <Footer />
</template>

<style>
@import '~/assets/css/main.css';

body {
  @apply text-gray-900 antialiased;
}
</style>
