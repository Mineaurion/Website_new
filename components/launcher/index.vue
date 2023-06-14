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
  height: 400px;
  background: var(--c-secondary);
  display: flex;
  align-items: center;
}
.launcher-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
