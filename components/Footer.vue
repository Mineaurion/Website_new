<template>
  <footer class="">
    <div class="w-full h-16 bg-dark-blue">
      <div class="container mx-auto flex justify-end">
        <div @click="scrollToTop" class="h-16 w-16 right-0 bg-blue brightness-75 hover:brightness-100 hover:cursor-pointer duration-100">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        </div>
      </div>
    </div>
    <div class="lg:h-52 bg-blue w-full">
      <div class="container mx-auto grid lg:grid-flow-col items-center justify-center lg:justify-around">
        <ul class="flex flex-col">
          <h3>Title</h3>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
        </ul>
        <ul class="flex flex-col">
          <h3>Title</h3>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
        </ul>
        <ul class="flex flex-col">
          <h3>Title</h3>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
        </ul>
        <ul class="flex flex-col">
          <h3 class="text-lg uppercase mb-4">Nos partenaires :</h3>
          <li class="w-max"><a href="https://www.twitch.tv/mukamultigaming/" target="_blank"><img class="brightness-75 hover:brightness-100 duration-100" src="~/assets/img/muka.png"></a></li>
        </ul>
      </div>
    </div>
    <div class="w-full h-12 bg-dark-blue flex items-center">
      <div class="container mx-auto flex justify-center">
        <p class="text-gray-light">Créé par Killian Vaillant - Copyright © 2022 Mineaurion inc. </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>