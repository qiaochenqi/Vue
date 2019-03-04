<template lang="html">
    <div id="app" style="margin: 0 auto;width: 960px">
        <input type="text" v-model="searchK" name="" id="">
        <input type="button" value="搜索" @click="search">
        <ul>
            <li v-for="item,i in clist">{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list :["1", "2", "3", "4"],
            clist :["1", "2", "3", "4"],
            searchK:"",
        }
    },
    methods:{
        search(){
            this.clist = this.list.filter(item =>{
                      //如果包含了
                if (item.includes(this.searchK)) {
                    return item
                }
            })
        }
    }
}
</script>

<style scoped>

</style>
