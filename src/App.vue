<template>
  <div id="app" v-on:click="handleEvents">
    <router-view/>
  </div>
</template>

<script>
import { EVENTS } from './common/constant';
import { SUBSCRIBE_EVENT, PUBLISH_EVENT } from './common/eventManager';
export default {
  name: 'app',
  created() {
    SUBSCRIBE_EVENT('test',function(data){
    });
  },
  methods:{
    handleEvents(){
      PUBLISH_EVENT(EVENTS.CLOSE_HEADER_DIALOG);
    }
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
