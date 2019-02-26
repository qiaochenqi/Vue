<template lang="html">
        <ul>
            <li v-for="item in 9">11111111111{{item}}</li>
        </ul>
</template>

<script>
export default {
    data:function(){
        return{
            
        }
    }
}
</script>

<style>
    ul{
        list-style-type: none;
        padding: 0;
        width: 45%;
        border: 1px solid #cccccc;
        float: left;
    }

    li{
        margin: 0 10px;
    }
</style>


