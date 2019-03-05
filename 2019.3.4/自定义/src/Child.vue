<template>
    <div id="app">
        <input v-focus type="text">
        <hr>
        <button v-bg.delay  v-aa:click="fn1">fn1</button>
     <button v-aa:mouseout="fn2">fn2</button>
    </div>
</template>

<script>
export default {
    directives :{
        focus : {
            inserted(el,binding,vnode){
                el.focus();
            }
        },
        bg:{
            bind(el,binding){
                var delay = 0;
                if(binding.modifiers['delay']){
                    delay = 3000;
                }
                setTimeout(()=>{
                    el.style.background = "red";
                },delay)
            }
        }
    },
    methods:{
        fn1(){
            alert("hello")
        },
        fn2(){
            alert("world")
        }
    }
}
</script>
