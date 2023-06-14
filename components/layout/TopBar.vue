<template>
  <section id="topbar">
    <div class="container content">
      <TopbarInfosPlayers />
      <TopbarSocialNetwork />
    </div>
  </section>
</template>

<style>
#topbar {
  height: 50px;
  background: var(--c-secondary);
  display: flex;
  align-items: center;
  color: var(--fc-primary);
  font-size: 14px;
}
.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
