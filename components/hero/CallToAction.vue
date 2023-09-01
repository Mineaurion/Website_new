<template>
  <div id="call_to_action_component">
    <button class="call_to_action_btn" type="button" @click="getAddressIp()">
      <span ref="ip" class="call_to_action_front">PLAY.MINEAURION.COM</span>
    </button>
    <em class="call_to_action_description">Cliquez sur le bouton pour copier l'adresse IP</em>
  </div>
</template>
<script>
export default {
  methods: {
    getAddressIp: function () {
      navigator.clipboard.writeText("play.mineaurion.com");
    },
  },
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
.call_to_action_description {
  color: white;
  margin-top: 4px;
  font-size: 0.6em;
}
#call_to_action_component {
  display: flex;
  flex-direction: column;
}
</style>
