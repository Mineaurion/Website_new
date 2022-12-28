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
      <div class="container mx-auto flex flex-col md:flex-row items-center justify-center lg:justify-between pt-10">
        <ul class="flex flex-col">
          <h3 class="text-lg uppercase mb-4">Liens utiles</h3>
          <li><a href="https://forum.mineaurion.com">Forum</a></li>
          <li><a href="/servers">Serveurs</a></li>
          <li><a href="https://shop.mineaurion.com">Boutique</a></li>
        </ul>
        <ul class="flex flex-col">
          <h3 class="text-lg uppercase mb-4">Retrouvez nous sur :</h3>
          <div class="flex flex-col md:flex-row">
            <li><a href="https://twitter.com/mineaurion" target="_blank" title="Accéder à notre compte Twitter"><img src="~/assets/img/twitter.svg" alt="" class="h-16 w-16 bg-dark-blue rounded-xl"></a></li>
            <li><a href="https://www.youtube.com/user/Mineaurion" title="Accéder à notre compte Youtube" target="_blank" class=""><img src="~/assets/img/youtube.svg" alt="" class=" ml-2 h-16 w-16 bg-dark-blue rounded-xl"></a></li>
            <li><a href="https://mineaurion.com/discord" target="_blank"><img class="ml-2 rounded-xl" src="https://discordapp.com/api/guilds/99116990634950656/widget.png?style=banner2"></a></li>
          </div>
        </ul>
        <ul class="flex flex-col">
          <h3 class="text-lg uppercase mb-4">Nos partenaires :</h3>
          <li class="w-max"><a href="https://www.twitch.tv/mukamultigaming/" target="_blank" title="Accéder à la chaîne Twitch de mukamultigaming"><img class="brightness-75 hover:brightness-100 duration-100" src="~/assets/img/muka.png" alt="Accéder à la chaîne twitch de mukamultigaming"></a></li>
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