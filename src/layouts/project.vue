<template layout="default">
  <div :style="`background-color: ${$frontmatter.background_color}`">
    <div class="container py-12 grid md:grid-cols-2" :class="textColor">
      <div>
        <router-link to="/" class="block mb-2">&leftarrow; &nbsp; Projects</router-link>

        <div class="mb-12 font-medium">{{ $frontmatter.category }}</div>

        <img alt="" :src="$frontmatter.logo_src" class="block h-16 mb-12">

        <h1 class="mb-8 text-2xl font-semibold">{{ $frontmatter.headline }}</h1>

        <p class="text-lg mb-8">{{ $frontmatter.summary }}</p>

        <div class="flex items-center gap-x-2">
          <a :href="$frontmatter.app_store_url" target="_blank" v-if="$frontmatter.app_store_url">
            <img alt="App Store" src="@/assets/images/app-store.png">
          </a>
          <a :href="$frontmatter.google_play_url" target="_blank" v-if="$frontmatter.google_play_url">
            <img alt="Google Play" src="@/assets/images/google-play.png">
          </a>
        </div>
      </div>

      <div class="hidden md:flex items-center justify-center">
        <img :src="$frontmatter.screenshot_src" alt="FITMOST on iPhone" style="max-height: 30rem;">
      </div>
    </div>
  </div>
  <div class="container py-16 grid gap-y-12 lg:grid-cols-2 gap-x-16">
    <div class="flex flex-col gap-y-10">
      <h2 class="text-2xl font-semibold">About</h2>

      <div v-html="$frontmatter.about" class="flex flex-col gap-y-4"></div>
    </div>
    <div class="flex items-center justify-center gap-x-8">
      <img :src="screenshot" alt="FITMOST screenshot iPhone" class="shadow-lg rounded"
        v-for="screenshot in $frontmatter.screenshots">
    </div>
  </div>
  <div class="bg-gray-50">
    <div v-if="$frontmatter.technologies" class="container py-16 grid md:grid-cols-3 gap-10">
      <Technology :name="technology" v-for="technology in $frontmatter.technologies" />
    </div>
  </div>
  <slot />
</template>

<script>
export default {
  computed: {
    textColor() {
      return this.$frontmatter.text_color_theme === 'dark' ? 'text-gray-900' : 'text-white'
    }
  }
}
</script>
