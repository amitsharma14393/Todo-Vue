<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang="scss">
 @import './assets/scss/main.scss';
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
