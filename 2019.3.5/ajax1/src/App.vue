<template>
  <div id="app">
      <button @click="get">点击</button>

      <input type="text" :input="get" name="" id="">
      <ul v-for="item in array">
        <li>
          <a :href="item.url">{{item.desc}}</a>
        </li>
      </ul>

      <hr>

      <div class="add">
          <input type="text" v-model="earchId" name="" id="">
           <input type="text" v-model="earchName" @input="search" name="" id="">
          <button @click="search">查询</button>
      </div>
      <ul v-for="item1 in array1">
        <li>{{item1.name}}</li>
         <li>{{item1.address}}</li>
          <li>{{item1.latitude}}</li>
           <li>{{item1.longitude}}</li>
            <li>{{item1.geohash}}</li>
        
      </ul>
  </div>
</template>

<script>

import axios from 'axios'
export default {
      data(){
        return{
            array:"",
            earchId:"",
            earchName:"",
            array1:[]
        }
      },
      methods:{
        search(){
            axios.get("./pois",{params:{city_id:this.earchId,keyword:this.earchName}}).then(res =>{
                this.array1 = res.data
            },erro =>{
              console.log("错误"+erro)
            })
        },
          get(){
              axios.get("http://gank.io/api/search/query/listview/category/Android/count/10/page/1?category:福利&count:50").then(res=>{
                    this.array = res.data.results
              },error=>{
                console.log("错误信息" + error)
              })
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
  display: block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
