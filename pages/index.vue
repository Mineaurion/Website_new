<template>
  <main>
    <section class="h-128 bg-hero-pattern flex">
      <div class="container mx-auto flex flex-row items-center xl:space-x-28 xl:justify-around">
        <div class="flex flex-col items-center justify-center">
          <h1 class="text-gray-light text-6xl font-sans font-medium uppercase">Mineaurion</h1>
          <p class="text-gray-light text-2xl text-center xl:w-max">Une expérience unique, des modpacks, une communauté.</p>
          <p class="text-gray-light text-2xl xl:w-max">Viens nous rejoindre !</p>
          <button @click="scrollToLauncher" class="w-60 h-14 uppercase bg-blue text-gray-light brightness-75 rounded-lg mt-2 hover:brightness-100 duration-200 xl:w-96  xl:h-16">jouer maintenant</button>
        </div>
        <div>
          <img class="border-b-orange hidden xl:flex xl:h-128 xl:w-full" src="~/assets/img/llama.png" alt="" srcset="">
        </div>
      </div>
    </section>
    <section class="container mx-auto text-marine-blue mt-5">
      <div class="flex flex-col font-sans ml-12 xl:flex-row">
        <div>
          <div class="flex">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-14 h-14 text-gray flex">
              <path fill-rule="evenodd" d="M19.449 8.448L16.388 11a4.52 4.52 0 010 2.002l3.061 2.55a8.275 8.275 0 000-7.103zM15.552 19.45L13 16.388a4.52 4.52 0 01-2.002 0l-2.55 3.061a8.275 8.275 0 007.103 0zM4.55 15.552L7.612 13a4.52 4.52 0 010-2.002L4.551 8.45a8.275 8.275 0 000 7.103zM8.448 4.55L11 7.612a4.52 4.52 0 012.002 0l2.55-3.061a8.275 8.275 0 00-7.103 0zm8.657-.86a9.776 9.776 0 011.79 1.415 9.776 9.776 0 011.414 1.788 9.764 9.764 0 010 10.211 9.777 9.777 0 01-1.415 1.79 9.777 9.777 0 01-1.788 1.414 9.764 9.764 0 01-10.212 0 9.776 9.776 0 01-1.788-1.415 9.776 9.776 0 01-1.415-1.788 9.764 9.764 0 010-10.212 9.774 9.774 0 011.415-1.788A9.774 9.774 0 016.894 3.69a9.764 9.764 0 0110.211 0zM14.121 9.88a2.985 2.985 0 00-1.11-.704 3.015 3.015 0 00-2.022 0 2.985 2.985 0 00-1.11.704c-.326.325-.56.705-.704 1.11a3.015 3.015 0 000 2.022c.144.405.378.785.704 1.11.325.326.705.56 1.11.704.652.233 1.37.233 2.022 0a2.985 2.985 0 001.11-.704c.326-.325.56-.705.704-1.11a3.016 3.016 0 000-2.022 2.985 2.985 0 00-.704-1.11z" clip-rule="evenodd" />
            </svg>
            <h2 class="text-2xl uppercase flex items-center">Support Actif</h2>
          </div>
          <p class="text-xl w-4/5 pl-14 font-light flex">Les membres du staff sont présents pour vous, sur les serveurs, sur le forum mais aussi sur le discord.</p>        
        </div>
        <div>
          <div class="flex">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-14 h-14 text-gray">
              <path fill-rule="evenodd" d="M19.449 8.448L16.388 11a4.52 4.52 0 010 2.002l3.061 2.55a8.275 8.275 0 000-7.103zM15.552 19.45L13 16.388a4.52 4.52 0 01-2.002 0l-2.55 3.061a8.275 8.275 0 007.103 0zM4.55 15.552L7.612 13a4.52 4.52 0 010-2.002L4.551 8.45a8.275 8.275 0 000 7.103zM8.448 4.55L11 7.612a4.52 4.52 0 012.002 0l2.55-3.061a8.275 8.275 0 00-7.103 0zm8.657-.86a9.776 9.776 0 011.79 1.415 9.776 9.776 0 011.414 1.788 9.764 9.764 0 010 10.211 9.777 9.777 0 01-1.415 1.79 9.777 9.777 0 01-1.788 1.414 9.764 9.764 0 01-10.212 0 9.776 9.776 0 01-1.788-1.415 9.776 9.776 0 01-1.415-1.788 9.764 9.764 0 010-10.212 9.774 9.774 0 011.415-1.788A9.774 9.774 0 016.894 3.69a9.764 9.764 0 0110.211 0zM14.121 9.88a2.985 2.985 0 00-1.11-.704 3.015 3.015 0 00-2.022 0 2.985 2.985 0 00-1.11.704c-.326.325-.56.705-.704 1.11a3.015 3.015 0 000 2.022c.144.405.378.785.704 1.11.325.326.705.56 1.11.704.652.233 1.37.233 2.022 0a2.985 2.985 0 001.11-.704c.326-.325.56-.705.704-1.11a3.016 3.016 0 000-2.022 2.985 2.985 0 00-.704-1.11z" clip-rule="evenodd" />
            </svg>
            <h2 class="text-2xl uppercase flex items-center ">Support Actif</h2>
          </div>
          <p class="text-xl w-4/5 pl-14 font-light">Les membres du staff sont présents pour vous, sur les serveurs, sur le forum mais aussi sur le discord.</p>        
        </div>
        <div>
          <div class="flex">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-14 h-14 text-gray">
              <path fill-rule="evenodd" d="M19.449 8.448L16.388 11a4.52 4.52 0 010 2.002l3.061 2.55a8.275 8.275 0 000-7.103zM15.552 19.45L13 16.388a4.52 4.52 0 01-2.002 0l-2.55 3.061a8.275 8.275 0 007.103 0zM4.55 15.552L7.612 13a4.52 4.52 0 010-2.002L4.551 8.45a8.275 8.275 0 000 7.103zM8.448 4.55L11 7.612a4.52 4.52 0 012.002 0l2.55-3.061a8.275 8.275 0 00-7.103 0zm8.657-.86a9.776 9.776 0 011.79 1.415 9.776 9.776 0 011.414 1.788 9.764 9.764 0 010 10.211 9.777 9.777 0 01-1.415 1.79 9.777 9.777 0 01-1.788 1.414 9.764 9.764 0 01-10.212 0 9.776 9.776 0 01-1.788-1.415 9.776 9.776 0 01-1.415-1.788 9.764 9.764 0 010-10.212 9.774 9.774 0 011.415-1.788A9.774 9.774 0 016.894 3.69a9.764 9.764 0 0110.211 0zM14.121 9.88a2.985 2.985 0 00-1.11-.704 3.015 3.015 0 00-2.022 0 2.985 2.985 0 00-1.11.704c-.326.325-.56.705-.704 1.11a3.015 3.015 0 000 2.022c.144.405.378.785.704 1.11.325.326.705.56 1.11.704.652.233 1.37.233 2.022 0a2.985 2.985 0 001.11-.704c.326-.325.56-.705.704-1.11a3.016 3.016 0 000-2.022 2.985 2.985 0 00-.704-1.11z" clip-rule="evenodd" />
            </svg>
            <h2 class="text-2xl uppercase flex items-center">Support Actif</h2>
          </div>
          <p class="text-xl w-4/5 pl-14 font-light">Les membres du staff sont présents pour vous, sur les serveurs, sur le forum mais aussi sur le discord.</p>        
        </div>
      </div>
    </section>
    <section ref="launcher" class="h-128 bg-gray-dark mt-5 flex flex-col justify-center font-sans items-center">
      <div class="container mx-auto text-gray-light ">
        <div class="flex justify-center items-center flex-col">
          <h2 class="text-2xl text-center lg:text-4xl font-light">Télécharger notre propre launcher</h2>
          <p class="text-xl text-center lg:text-2xl w-full lg:w-3/4 mt-5 font-thin">Nous avons développé notre launcher pour vous !</p>
          <p class="text-xl text-center lg:text-2xl w-full lg:w-3/4 font-thin">Il permet de vous connecter avec plus de facilités, d'avoir accès à certains contenus exclusifs.</p>
          <p class="text-xl text-center lg:text-2xl w-full lg:w-3/4 font-thin">Alors n'hésitez pas, téléchargez le !</p>
        </div>
        <div class="flex flex-col lg:flex-row mt-5 items-center justify-center">
          <button class="flex text-gray-light relative items-center justify-center h-16 bg-blue w-72 lg:w-3/12 ml-4 text-xl font-light rounded-md brightness-75 hover:brightness-100 duration-100">
            <img class="absolute left-8" src="~/assets/img/Windows.svg" alt="">
            Windows
          </button>
          <button class="flex text-gray-light relative items-center justify-center h-16 bg-blue w-72 mt-5 lg:mt-0 lg:w-3/12 ml-4 text-xl font-light rounded-md brightness-75 hover:brightness-100 duration-100">
            <img class="absolute left-10" src="~/assets/img/Linux.svg" alt="">
            Linux
          </button>
        </div>
      </div>
    </section>
    <TabList ref=""></TabList>
  </main>
</template>
<script>
import TabList from '../components/TabList.vue'
export default {
  components: {
    TabList
  },
  name: 'index',
  methods: {
    scrollToLauncher(){
      this.$refs["launcher"].scrollIntoView({behavior: 'smooth'})
    },
  },
  head(){
    return {
      title: 'Mineaurion - Accueil'
    }
  },
}
</script>
