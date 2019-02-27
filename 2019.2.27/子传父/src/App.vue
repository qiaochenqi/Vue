<template>
  <div id="app">
    父组件:
    <span>{{name}}</span>
    <br>

    <child v-on:childByValue="childByValue"></child>
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
        name:''
      }
    },
    methods:{
      childByValue:function(childValue){
          this.name = childValue
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
