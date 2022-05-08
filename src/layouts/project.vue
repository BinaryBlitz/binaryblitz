<template layout="default">
  <div :style="`background-color: ${$frontmatter.background_color}`">
    <div class="container py-12 text-white grid grid-cols-2">
      <div>
        <div class="mb-2">&leftarrow; &nbsp; Projects</div>

        <div class="mb-12 font-medium">{{ $frontmatter.category }}</div>

        <img alt="" :src="$frontmatter.logo_src" class="block h-16 mb-12">

        <h1 class="mb-8 text-2xl font-semibold">{{ $frontmatter.name }}</h1>

        <p class="text-lg mb-8">Universal fitness pass</p>

        <div class="flex items-center gap-x-2">
          <a :href="$frontmatter.app_store_url" target="_blank" v-if="$frontmatter.app_store_url">
            <img alt="App Store" src="@/assets/images/app-store.png">
          </a>
          <a :href="$frontmatter.google_play_url" target="_blank" v-if="$frontmatter.google_play_url">
            <img alt="Google Play" src="@/assets/images/google-play.png">
          </a>
        </div>
      </div>

      <div class="flex items-center justify-center">
        <img :src="$frontmatter.screenshot_src" alt="FITMOST on iPhone" style="max-height: 30rem;">
      </div>
    </div>
  </div>
  <div class="container py-16 grid grid-cols-2">
    <div class="flex flex-col gap-y-10">
      <h2 class="text-2xl font-semibold">About</h2>

      <p>{{ $frontmatter.description }}</p>
    </div>
    <div class="flex items-center justify-center gap-x-8">
      <img :src="screenshot" alt="FITMOST screenshot iPhone" class="shadow-lg rounded"
        v-for="screenshot in $frontmatter.screenshots">
    </div>
  </div>
  <div class="bg-gray-50">
    <div class="container py-16 grid md:grid-cols-3 gap-10">
      <Technology name="swift" />
      <Technology name="kotlin" />
    </div>
  </div>
  <slot />
</template>
