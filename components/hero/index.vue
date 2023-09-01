<template>
  <section id="hero">
    <div class="filter-bg container hero-content">
      <div class="hero-left">
        <HeroName/>
        <HeroTagLine />
        <HeroCallToAction />
      </div>
      <div class="hero-right">
        <HeroImage />
      </div>
    </div>
  </section>
</template>

<style>
#hero {
  height: 400px;
  font-family: "Open Sans", sans-serif;
}
.hero-content {
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
}
</style>
