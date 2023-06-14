<template>
  <div v-if="pending">Chargement...</div>
  <section v-else id="nbrs_players">
    <span v-if="onlinePlayers === 0">aucun joueur en ligne</span>
    <span v-else-if="onlinePlayers === 1"
      >{{ onlinePlayers }} joueur en ligne</span
    >
    <span v-else-if="onlinePlayers > 1"
      >{{ onlinePlayers }} joueurs en ligne</span
    >
    <span v-else="onlinePlayers">{{ errors }}</span>
  </section>
</template>
<script setup>
const {
  pending,
  data: onlinePlayers,
  error: errors
} = useFetch("https://api.mineaurion.com/query/online-players", {
  transform: (_onlinePlayers) => _onlinePlayers.onlinePlayers,
  lazy: true,
  server: false
});
</script>
<style>
#nbrs_players {
  display: flex;
}
</style>
