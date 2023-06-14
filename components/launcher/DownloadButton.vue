<template>
  <section id="launcher-buttons">
    <button class="launcher-button" type="button">
      <Icon
        icon="codicon:terminal-linux"
        color="#242231"
        width="36"
        height="36"
      />
      Launcher Linux
    </button>
    <button class="launcher-button" type="button">
      <Icon
        icon="bi:windows"
        color="#242231"
        width="36"
        height="36"
      />
      Launcher Windows
    </button>
  </section>
</template>

<style>
#launcher-buttons {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  align-items: center;
  gap: 10px;
  border: none;
}

.launcher-button {
  height: 60px;
  width: 18em;
  background: var(--c-primary);
  text-transform: capitalize;
  cursor: pointer;
  vertical-align: middle;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
  gap: 20px;
  color: var(--c-secondary);
  border: none;
  filter: brightness(0.9);
}
.launcher-button:hover {
    filter: brightness(1);
}
.launcher-button:focus {
  border-style: none;
  outline: none;
}

</style>
