<template>
  <div id="app">
      父组件:
      <input type="text" v-model="name">
      <br>
      <br>
      <child :inputName="name"></child>
  </div>
</template>

<script>
import child from './Child.vue'
export default {
    components:{
      child
    },
    data(){
      return{
        name:""
      }
    }
}
</script>

<style>

</style>
