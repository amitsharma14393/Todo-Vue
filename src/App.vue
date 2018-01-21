<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
};
</script>

<style lang="scss">
@import './assets/scss/main.scss';

#app {
  color: #2c3e50;
  font-family: $base-font;
  padding: 16px;
}
</style>
