<template>
  <section class="md:h-14 bg-dark-blue">
    <Transition name="fade" mode="out-in">
    <div class="container md:mx-auto flex md:flex-row flex-col justify-center md:justify-between items-center py-4">
      <ul class="flex flex-col md:flex-row">
        <li v-if="infos.onlinePlayers <= 1" class="text-gray-light font-sans">{{infos.onlinePlayers}} joueur est en ligne</li>
        <li v-else class="text-gray-light font-sans">{{infos.onlinePlayers}} joueur(s) sont en ligne</li>
      </ul>
      <div class="flex">
        <span class="text-gray-light font-sans">Rejoins nous:</span>
        <ul class="flex">
          <li class="ml-2 brightness-90 hover:brightness-100 hover:rotate-360 duration-500""><a href=""><img class="" src="~/assets/img/discord.svg" /></a></li>
          <li class="ml-2 brightness-70 hover:brightness-100 duration-500"><a href=""><img src="~/assets/img/ytb.svg" /></a></li>
        </ul>
      </div>
    </div>
  </Transition>
  </section>
</template>


<script>
export default {
  data() {
    return {
      infos: []
    }
  },
  async fetch() {
    const infos = await this.infosArray()
  },
  mounted() {
    this.intervalData = setInterval(this.infosArray, 12000)
  },
  destroyed() {
    clearInterval(this.intervalData)
  },
  methods: {
    async infosArray() {
      const url = "https://api.mineaurion.com/query/online-players"
      this.infos = await fetch(url).then(res => res.json())
    },
  }
}
</script>