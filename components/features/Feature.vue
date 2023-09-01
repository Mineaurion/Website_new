<template>
  <section class="feature">
    <div class="feature-icon">
      <Icon icon="line-md:discord" color="#4d9ed8" width="46" />
    </div>
    <div class="feature-content">
      <h2 class="feature-title">support actif</h2>
      <p class="feature-text">
        Les membres du staff sont présents pour vous, sur les serveurs, sur le
        forum mais aussi sur le discord.
      </p>
    </div>
  </section>
</template>
<style>
.feature {
  display: flex;
  flex-direction: row;
}

.feature-icon {
  padding-right: 10px;
}
.feature-content {
  display: flex;
  flex-direction: column;
  color: var(--c-third);
}
.feature-title {
  font-size: 24px;
  text-transform: uppercase;
  font-family: "Open Sans", sans-serif;
  font-weight: normal;
}
.feature-text {
  font-family: "Open Sans", sans-serif;
  font-weight: normal;
  width: 80%;
  line-height: 30px;
  margin-top: 5px;
}
</style>
