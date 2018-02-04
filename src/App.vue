<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { SUBSCRIBE_EVENT } from './common/eventManager';
export default {
  name: 'app',
  created() {
    SUBSCRIBE_EVENT('test',function(data){
      console.log(data);
    });
  }
};
</script>

<style lang="scss">
@import './assets/scss/main.scss';


#app {
  color: $base-font-color;
  font-family: $base-font-family;
}
</style>
