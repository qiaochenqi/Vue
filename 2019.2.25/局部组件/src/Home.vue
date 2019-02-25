<template>
    <div>
        <p>ServerStatus : {{status}}</p>
        <hr>
        <button @click="change">change</button>
    </div>
</template>

<script>
export default {
    data :function(){
        return{
            status : "AAAA"
        }
    },
    methods:{
        change(){
            this.status = "BBBB"
        }
    }
}
</script>
