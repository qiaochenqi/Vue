<template>
  <div id="app">
      <input type="text" v-color:fontSize="'40px'">
      <button v-aa:click="fn1">点击</button>

      <p v-bb:color.delay="'red'">好好学习</p>
  </div>
</template>

<script>
export default {
      methods:{
        fn1(){
          console.log("123456")
        }
      }
}
</script>

<style>

</style>
