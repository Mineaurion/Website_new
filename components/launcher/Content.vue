<template>
  <section class="launcher-content">
    <h1 class="launcher-title">Télécharger notre propre launcher</h1>
    <p class="launcher-text">
      Nous avons développé notre launcher pour vous ! Il permet de vous
      connecter avec plus de facilités, d'avoir accès à certains contenus
      exclusifs. Alors n'hésitez pas, téléchargez le !
    </p>
  </section>
</template>

<style>
.launcher-content {
  display: flex;
  flex-direction: column;
  font-family: "Open Sans", sans-serif;
  justify-content: center;
  align-items: center;
}
.launcher-title {
  font-size: 36px;
  margin-bottom: 40px;
  font-weight: lighter;
  color: var(--fc-primary);
}
.launcher-text {
  color: var(--fc-primary);
  max-width: 40%;
  line-height: 30px;
  font-size: 17px;
  font-weight: lighter;
}
</style>
