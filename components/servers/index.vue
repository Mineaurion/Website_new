<template>
  <section id="servers">
    <h1>NOS SERVEURS</h1>
    <div id="cards">
      <ServersCard />
      <ServersCard />
      <ServersCard />
      <ServersCard />
    </div>
  </section>
</template>
<script></script>
<style>
#servers {
  background: #0c1a24;
  height: 749px;
}
#servers h1 {
  color: #f6efef;
  font-size: 2em;
  display: flex;
  justify-content: center;
  padding-top: 1em;
  font-weight: 600;
}
#cards {
    display: flex;
    gap: 32px;
    justify-content: center;
    align-items: center;
    margin-top: 64px;
}
</style>
