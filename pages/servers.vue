<template>
  <main class="bg-servers-pattern min-h-screen bg-full">
    <h1 class="flex justify-center text-5xl text-gray-light pt-8">NOS SERVEURS</h1>
    <div class="container mx-auto grid lg:grid-cols-3 grid-rows-4 gap-6 mt-8">

      <div v-for="(server, index) in servers" v-bind:key="index" class="h-auto w-4/5 mb-5  mx-auto lg:mb-0 lg:w-96 border-4 solid border-blue rounded-lg">
        <div class="h-14 flex items-center pl-4 bg-dark-blue w-full">
          <h1 class="font-sans font-semibold text-xl uppercase text-gray-light">{{ server.name }}</h1>
          <div class="flex pl-4">
            <a class="text-gray-light ml-2 h-6 w-full pl-2 pr-2 rounded-lg text-badge bg-marine-blue brightness-75 hover:brightness-100 duration-100" v-if="server.access.beta === true" title="Plus d'informations sur notre discord" target="_blank" href="https://mineaurion.com/discord">Beta</a>
            <a class="text-gray-light ml-2 h-6 w-full pl-2 pr-2 rounded-lg text-badge bg-marine-blue brightness-75 hover:brightness-100 duration-100" v-if="server.access.paying === true" target="_blank" title="Obtenir l'accès au serveur" href="http://shop.mineaurion.com/category/acces-aux-serveurs">Payant</a>
            <a class="text-gray-light ml-2 h-6 w-full pl-2 pr-2 rounded-lg text-badge bg-marine-blue brightness-75 hover:brightness-100 duration-100" v-if="server.access.donator === true" title="Obtenez votre grade Donateur afin de rejoindre l'aventure !" target="_blank" href="http://shop.mineaurion.com/category/726483">Donateur</a>
          </div>
        </div>
        <div class="ml-2 mt-2 text-gray-light">Adresse : {{ server.dns }}</div>
        <div class="ml-2 text-gray-light">Version du serveur : {{ server["version"].minecraft }}</div>
        <div class="ml-2 text-gray-light">Version du modpack : {{ server["version"].modpack }}</div>
        <div class="ml-2 text-gray-light flex flex-row" v-for="(time, index) in server.schedule" v-bind:key="index">
          Reboot :
          <div class="ml-2 text-gray-light" v-for="(schedule, index) in time" :key="index">
            {{ schedule }}
          </div>
        </div>
        <div class="ml-2 text-gray-light">Joueurs(s) :
          <span v-if="server.onlinePlayers == 0 && server.maxPlayers == 0">Aucunes infos</span>
          <span v-if="server.maxPlayers > 1">{{ server.onlinePlayers }} / {{ server.maxPlayers }}</span>
        </div>
        <div class="ml-2 text-gray-light">Statut :
          <span class="text-green" v-if="server.status == true">Allumé</span>
          <span class="text-red" v-else-if="server.status == false">Éteint</span>
          <span class="text-red" v-else>Aucunes infos</span>
        </div>
        <div class="ml-2 text-gray-light">Joueur(s) en ligne :</div>
        <div class="flex mt-4">
          <div v-for="(player, index) in server.players" v-bind:key="index">
            <img :src="getImgUrl(player)" class="ml-2 pb-2" :title="player">
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      servers: []
    }
  },
  head(){
    return {
      title: 'Mineaurion - Liste des serveurs'
    }
  },
  async fetch() {
    const servers = await this.serversArray();
    mode: 'no-cors'
  },
  mounted() {
    this.intervalData = setTimeout(this.serversArray, 12000)
  },
  destroyed() {
    clearInterval(this.intervalData)
  },
  methods: {
    getImgUrl(player) {
      const url = "https://cravatar.eu/avatar/" + player + "/30"
      return url
    },
    async serversArray() {
      const url = "https://api.mineaurion.com/query"
      this.servers = await fetch(url).then(res => res.json())
    },
  }
}
</script>