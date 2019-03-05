<template>
  <div id="app">
        <button @click="gets">点击</button>
        <ul v-for="item in arrAy">
            <li>{{item.id}}</li>
            <li>
              <audio controls :src="item.url"></audio>
            </li>
        </ul>
        <hr>

        <p>
          <input type="text" v-model="user.username">  
        </p>  

        <p>
          <input type="text" v-model="user.password" name="" id="">
        </p>

        <button @click="sumbile">提交</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      arrAy : "",
      user:{
        username:"",
        password:""
      }
    }
  },
    methods:{
        sumbile(){
            this.$http.post("http://cloud.bmob.cn/2ed8d24bced59944/_User/",this.user).then(res=>{
                console.log(res)
            },error =>{
              console.log(error.message)
            })
        },
        // gets:function(){
        //   this.$http.get('https://api.imjad.cn/cloudmusic/?type=song&id=123234').then(res=>{
        //       this.arrAy = res.data.data
        //   }, function(){
        //       console.log('请求失败')
        //   })
        // }
        gets:function(){
          this.$http.get('https://api.imjad.cn/cloudmusic/',{params : {type:'song',id:"123412"}}).then(res=>{
              this.arrAy = res.data.data
          }, function(){
              console.log('请求失败')
          })
        }
    }
}
</script>

<style>

</style>
