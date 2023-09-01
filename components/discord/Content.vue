<template>
  <div id="content">
    <h1 class="discord_title">TOUT SE PASSE SUR DISCORD</h1>
    <p class="discord_text">
      Rejoins le Discord de Mineaurion : La communauté ultime pour les fans de
      Modpack! Échange, joue et découvre avec des membres passionnés .
      Actualités, astuces, événements et plus encore. Rejoins-nous dès
      maintenant et plonge dans l'aventure !
    </p>
    <button class="discord_button" type="button">
      <span class="discord_button_content"> Rejoins nous ! </span>
    </button>
  </div>
</template>

<style>
.discord_title {
  font-size: 1.375em;
  color: var(--fc-secondary);
  font-weight: 600;
}
.discord_text {
  font-size: 1.5em;
  margin-top: 24px;
  color: var(--fc-secondary);
  line-height: 44px;
  max-width: 590px;
}
.discord_button {
  /* height: 68px; */
  max-width: 50%;
  width: 100%;
  margin-top: 20px;
  background: #3774ab;
  border-radius: 2px;
  border: none;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
}
.discord_button_content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  transform: translateY(-6px);
  background: var(--c-primary);
  color: var(--fc-secondary);
  padding: 12px;
  font-weight: bold;
  border-radius: 2px;
  font-size: 24px;
}
.discord_button:active .discord_button_content {
  transform: translateY(0px);
}
.discord_button:focus {
  outline: none;
}
</style>
