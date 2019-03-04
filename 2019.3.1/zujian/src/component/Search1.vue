<template lang="html">
    <div id="app" style="margin: 0 auto;width: 960px">
        <input type="text" v-model="search" name="" id="">
        <ul>
            <li v-for="item in clist">{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list :["aaa", "bbb", "add", "ebds"],
            search:"",
        }
    },
    computed:{
        clist(){
            return this.list.filter(item=>{
                //如果不是-1则返回
                return item.indexOf(this.search) != -1
            })
        }
    }
}
</script>

<style scoped>

</style>
