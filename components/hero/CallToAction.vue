<template>
  <NuxtLink class="" to="#launcher" @click="goToLauncher()">
    <button class="call_to_action_btn" type="button">
      <span class="call_to_action_front">jouer gratuitement</span>
    </button>
  </NuxtLink>
</template>
<script>
export default {
  methods: {
    goToLauncher: function () {
      history.pushState(
        "",
        document.title,
        window.location.pathname + window.location.search
      );
    }
  }
};
</script>
<style scoped>
.call_to_action_btn {
  margin-top: 1em;
  background: #3774ab;
  border-radius: 2px;
  border: none;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  text-transform: uppercase;
  border: solid var(--fc-primary) 2px;
  font-weight: bold;
  width: 24em;
}
.call_to_action_front {
  display: block;
  padding: 12px 42px;
  border-radius: 2px;
  font-size: 1.25rem;
  background: var(--c-primary);
  color: white;
  transform: translateY(-6px);
}
.call_to_action_btn:active .call_to_action_front {
  transform: translateY(-1px);
}
.call_to_action_btn:focus {
  outline: none;
}
</style>
