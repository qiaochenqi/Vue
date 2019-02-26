<template>
  <div id="app">
      <Head></Head>
      <Bor></Bor>
      <Bor1></Bor1>
      <Food></Food>
  </div>
</template>

<script>
import Head from './head-food/Head.vue';
import Food from './head-food/Food.vue';
import Bor from './bor/bor.vue';
import Bor1 from './bor/bor1.vue'
export default {
    components:{
      Head,
      Food,
      Bor,
      Bor1
    }
}
</script>

<style>

</style>
