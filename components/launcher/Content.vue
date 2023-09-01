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
  font-size: 32px;
  margin-bottom: 40px;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--fc-secondary);
}
.launcher-text {
  color: var(--fc-secondary);
  max-width: 70%;
  text-align: center;
  line-height: 30px;
  font-size: 20px;
  font-weight: lighter;
}
</style>
