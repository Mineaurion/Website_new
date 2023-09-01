<template>
  <section id="launcher">
    <div class="container launcher-container">
      <LauncherContent />
      <LauncherDownloadButton />
    </div>
  </section>
</template>
<style>
#launcher {
  padding: 50px;
  background: url("~/assets/img/section_launcher_background.svg");
  background-size: contain;
  display: flex;
  align-items: center;
}
.launcher-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
