<template>
  <section ref="servers-list" class="mt-14 mb-24 flex flex-col items-center justify-center">
    <servers-list>
      <h2 class="text-5xl font-light uppercase text-center">Nos serveurs</h2>
      <div class="flex items-center justify-center flex-col lg:flex-row gap-6 mt-20 lg:container lg:mx-auto">
        <div v-for="server in servers" :key="server.id">
          <img v-on:click="activetab = server.id" v-bind:class="[ activetab === server.id ? 'active brightness-100 duration-100 scale-110 border-4  border-marine-blue border-solid  ' : '' ]" class="h-52 w-52 brightness-75 hover:brightness-100 duration-150 hover:cursor-pointer hover:scale-110" :src="server.img" alt="">
        </div>
      </div>
      <article class="w-full lg:h-96 bg-marine-blue mt-6">
        <div v-for="server in servers" :key="server.id">
            <div v-if="activetab === server.id" class="max-w-fit text-gray-light pl-12">
              <h2 class="text-4xl pt-14">{{server.name}}</h2>
              <p class="text-2xl text-ip font-light mt-5">{{server.ip}}</p>
              <p class="text-2xl mt-5 animate-in zoom-in">{{server.description}}</p>
            </div>
        </div>
      </article>
    </servers-list>
  </section>
</template>
<script>
import serversData from "../static/serverslist.json";
el: "#tabs"
export default {
  data() {
    return {
      activetab: 0,
      servers: serversData
    }
    
  },
  
  methods: {
    
  }
}
</script>