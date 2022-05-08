<template>
  <div style="background-color: #A19AAA;">
    <div class="container py-12 text-white grid grid-cols-2">
      <div>
        <div class="mb-2">&leftarrow; &nbsp; Projects</div>

        <div class="mb-12 font-medium">Mobile app</div>

        <img alt="" src="@/assets/images/projects/fitmost/logo.png" class="block h-16 mb-12">

        <h1 class="mb-8 text-2xl font-semibold">FITMOST</h1>

        <p class="text-lg mb-8">Universal fitness pass</p>

        <div class="flex items-center gap-x-2">
          <a href="https://itunes.apple.com/us/app/fitmost/id1282198170?mt=8" target="_blank">
            <img alt="App Store" src="@/assets/images/app-store.png">
          </a>
          <a href="https://play.google.com/store/apps/details?id=ru.binaryblitz.fitmost" target="_blank">
            <img alt="Google Play" src="@/assets/images/google-play.png">
          </a>
        </div>
      </div>

      <div class="flex items-center justify-center">
        <img src="@/assets/images/projects/fitmost/fitmost-iphone.png" alt="FITMOST on iPhone"
          style="max-height: 30rem;">
      </div>
    </div>
  </div>
  <div class="container py-16 grid grid-cols-2">
    <div class="flex flex-col gap-y-10">
      <h2 class="text-2xl font-semibold">About</h2>

      <p>Universal fitness pass</p>
    </div>
    <div class="flex items-center justify-center gap-x-8">
      <img src="@/assets/images/projects/fitmost/fitmost-screen-01.png" alt="FITMOST screenshot iPhone"
        class="shadow-lg rounded">
      <img src="@/assets/images/projects/fitmost/fitmost-screen-02.png" alt="FITMOST screenshot iPhone"
        class="shadow-lg rounded">
    </div>
  </div>
  <div class="bg-gray-50">
    <div class="container py-16 grid md:grid-cols-3 gap-10">
      <div class="flex flex-col gap-y-8 items-start">
        <img src="@/assets/images/technologies/swift.png" alt="Swift" class="max-h-20">
        <h3 class="text-lg font-semibold">Swift</h3>
        <p>General-purpose programming language built using a modern approach to safety, performance, and software
          design
          patterns.</p>
      </div>
      <div class="flex flex-col gap-y-8 items-start">
        <img src="@/assets/images/technologies/kotlin.png" alt="Swift" class="max-h-20">
        <h3 class="text-lg font-semibold">Kotlin</h3>
        <p>Statically typed programming language for modern multiplatform applications. 100% interoperable with Java and
          Android.</p>
      </div>
    </div>
  </div>
</template>
