<template>
    <div>
        <h1>这是父组件</h1>
        <p>父组件名称:{{name}}</p>
        <button @click="change">按钮</button>
        <ChildOne @pro="cir($event)" :myName="name"></ChildOne>
        <ChildTwo></ChildTwo>
        <hr>
    </div>
</template>

<script>
import ChildOne from '../子组件/Child1.vue';
import ChildTwo from '../子组件/Child2.vue';
export default {
    data:function(){
        return{
            name : "Hello"
        }
    },
    methods:{
        change(){
            this.name = "World"
        },
        cir(data){
            this.name = data
        }
    },
    components:{
        ChildOne,
        ChildTwo
    }
}
</script>

