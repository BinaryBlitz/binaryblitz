<template>
  <header>
    <div>
      <HelloWorld :msg="$frontmatter.title" />

      <div>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </div>
  </header>

  <slot />
</template>

<style>
@import '~/assets/main.css';
</style>
