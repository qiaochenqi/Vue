<template>
  <div id="app">
      <div class="qcq_zhu">
        <button @click="comss='marquee'">第1个</button>
        <button @click="comss='TabControl'">第2个</button>
        <button @click="comss='TabControlq'">第3个</button>
        <button @click="comss='CheckAll'">第4个</button>
        <button @click="comss='Search'">第5个</button>
        <button @click="comss='Search1'">第6个</button>
        <div></div>
      </div>
      <keep-alive>
          <component :is="comss"></component>
      </keep-alive>
  </div>
</template>

<script>
import Marquee from './component/Marquee.vue'
import TabControl from './component/TabControl.vue'
import TabControlq from './component/TabControl.1.vue'
import CheckAll from './component/CheckAll.vue'
import Search from './component/Search.vue'
import Search1 from './component/Search1.vue'
export default {
    components:{
      "marquee" : Marquee,
      TabControl,
      TabControlq,
      CheckAll,
      Search,
      Search1
    },
    data:function(){
      return{
        comss:"marquee"
      }
  }
}
</script>

<style scoped>
#app{
  margin: 20px auto;
}
.qcq_zhu{
  margin: 20px auto;
  width: 500px;
  height:200px;
  border: 1px solid #ccc;
}
button{
  padding: 10px;
  background: blueviolet;
  margin: 12px;
  border: none;
  float: left;
}
</style>
