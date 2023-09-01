<template>
  <section id="launcher_buttons">
    <button class="launcher_button" type="button">
      <span class="launcher_button_content">
        <Icon
          icon="codicon:terminal-linux"
          color="#242231"
          width="36"
          height="36"
        />
        Launcher Linux
      </span>
    </button>
    <button class="launcher_button" type="button">
      <span class="launcher_button_content">
        <Icon icon="bi:windows" color="#242231" width="36" height="36" />
        Launcher Windows
      </span>
    </button>
  </section>
</template>

<style>
#launcher_buttons {
  display: flex;
  flex-direction: row;
  margin-top: 32px;
  align-items: center;
  gap: 32px;
  border: none;
}

.launcher_button {
  /* height: 68px; */
  /* width: 100%; */
  background: #3774ab;
  border-radius: 2px;
  border: none;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
}
.launcher_button_content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  transform: translateY(-6px);
  background: var(--c-primary);
  color: var(--fc-secondary);
  text-transform: uppercase;
  padding: 12px;
  border-radius: 2px;
  font-size: 24px;
}
.launcher_button:active .launcher_button_content {
  transform: translateY(0px);
}
.launcher_button:focus {
  outline: none;
}
</style>
