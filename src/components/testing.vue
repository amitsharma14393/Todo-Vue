<template>

</template>

<script>
import { SUBSCRIBE_EVENT } from '../common/eventManager';
export default {
  created(){
    SUBSCRIBE_EVENT('test',(data)=>{ console.log('You passed:',data)})
  }
}
</script>

<style>

</style>
