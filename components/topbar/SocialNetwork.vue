<template>
  <section id="social_networks">
    <h2 id="social_networks_title">Rejoins nous :</h2>
    <ul id="social_networks_list">
      <li>
        <Icon
          class="icon"
          icon="ic:baseline-discord"
          color="white"
          width="28"
        />
      </li>
      <li><Icon class="icon" icon="mdi:youtube" color="white" width="28" /></li>
      <li><Icon class="icon" icon="mdi:twitter" color="white" width="28" /></li>
      <li>
        <Icon class="icon" icon="ic:baseline-tiktok" color="white" width="28" />
      </li>
    </ul>
  </section>
</template>
<style scoped>
#social_networks {
  display: flex;
  flex-direction: row;
  gap: 1em;
  align-items: center;
}
#social_networks_title {
  font-family: "Open Sans";
  font-weight: bolder;
}
#social_networks_list {
  display: flex;
  gap: 1em;
}
.icon:hover {
  rotate: 360deg;
  transition-duration: 500ms;
  cursor: pointer;
}
</style>
