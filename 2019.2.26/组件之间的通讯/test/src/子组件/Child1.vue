<template>
    <div>
        <h2>这是子组件</h2>
        <p>我的名字:{{myName}}</p>
        <button @click="changg">Annie</button>
    </div>
</template>
<script>
export default {
    props:["myName"],
    methods:{
        changg(){
            this.myName = "我想好好学习";
            this.$emit("pro",this.myName)
        }
    }
}
</script>

