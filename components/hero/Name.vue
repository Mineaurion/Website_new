<template>
  <h1>{{ heroTitle }}</h1>
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
