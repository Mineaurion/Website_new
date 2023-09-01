<template>
  <h1>
    <img src="~/assets/img/logo_letter.svg" alt="" srcset="">
  </h1>
</template>

<script>
export default {
  props: {
    heroTitle: String,
  },
};
</script>
<style scoped>
h1 {
  font-size: 56px;
  font-weight: bold;
  text-transform: uppercase;
  color: var(--fc-primary);
}
</style>
