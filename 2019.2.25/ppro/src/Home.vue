<template>
    <div>
        <p>ServerStatus : {{status}}</p>
        <hr>
        <button @click="change">change</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            status : "circle"
        }
    },
    methods :{
        change(){
            this.status = "NNNNNN0"
        }
    }
}
</script>

