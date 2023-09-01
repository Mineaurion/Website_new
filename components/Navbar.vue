<template>
  <nav class="lg:h-32 bg-marine-blue flex">
    <div class="mx-auto flex flex-col lg:flex-row justify-around items-center">
      
      <div class="flex flex-row items-center relative mt-5 lg:mt-0">
        <div class="flex lg:hidden flex-row items-center mx-auto relative justify-center mb-5">
          <a href="/"><img class="h-24 brightness-75 hover:brightness-100 duration-300 flex justify-center" src="~/assets/img/logo.svg" alt="Responsive Logo"></a>
        </div>
        <svg class="lg:hidden -right-full absolute cursor-pointer" width="50" height="45" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg" @click="showMenu()">
          <rect width="25" height="3" fill="#D9D9D9"/>
          <rect y="9" width="25" height="3" fill="#D9D9D9"/>
          <rect y="18" width="25" height="3" fill="#D9D9D9"/>
        </svg>
      </div>
      <!-- Left menu desktop version -->
      <ul :class="this.showMobileMenu ? 'flex' : 'hidden'" class="lg:gap-10 mt-5 flex-col mr-2 xl:mr-9 lg:mt-0 lg:flex lg:flex-row">
        <li><a class="text-xl text-gray-light brightness-75 hover:brightness-100 duration-300" href="">FORUM</a></li>
        <li><a class="text-xl text-gray-light brightness-75 hover:brightness-100 duration-300" href="">WIKI</a></li>
        <li><a class="text-xl text-gray-light brightness-75 hover:brightness-100 duration-300" href="">RECOMPENSE</a></li>
        <li><a class="text-xl text-gray-light brightness-75 hover:brightness-100 duration-300" href="">BOUTIQUE</a></li>
      </ul>
      
      <!-- Logo Desktop -->   
      <div class="lg:flex flex-row items-center mx-auto relative justify-center hidden">
        <a href="/"><img class="h-28 brightness-75 hover:brightness-100 duration-300 flex justify-center" src="~/assets/img/logo.svg" alt="Desktop Logo"></a>
      </div>
      <!-- Right menu desktop version -->
      <ul :class="this.showMobileMenu ? 'flex' : 'hidden'" class="lg:gap-10 xl:ml-9 flex-col lg:flex lg:flex-row">
        <li><a  v-scroll-to="{ el: '#servers', duration: 300 }" @click="$router.push({ name: 'index', hash: '' })" class="text-xl text-gray-light brightness-75 hover:brightness-100 duration-300 hover:cursor-pointer">NOS SERVEURS</a></li>
        <li><NuxtLink class="text-xl text-gray-light brightness-75 hover:brightness-100 duration-300" to="/servers/">STATUS</NuxtLink></li>
        <li><a class="text-xl text-gray-light brightness-75 hover:brightness-100 duration-300" href="">RECOMPENSES</a></li>
      </ul>
    </div>
  </nav>
  
</template>
<script>
export default {
  data(){
    return {
      showMobileMenu: false,
    };
  },
  methods: {
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    }
  }
}
</script>

