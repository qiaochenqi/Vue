<template lang="html">
    <div class="marquee_01">
        <button @click="start">开始</button>
        <button @click="stopButton">停止</button>
        <h4>{{msg}}</h4>
    </div>
</template>

<script>
export default {
    data:function(){
        return{
            timeId:null,
            msg:'我是跑马灯效果,文字滚动'
        }
    },
    methods:{
        start(){  
            if (this.timeId == null) {
               this.timeId = setInterval(() => {
                    let startMsg = this.msg.slice(0,1);
                    let endMsg = this.msg.slice(1,this.msg.length+1);
                    this.msg = endMsg+startMsg;
                },400); 
            } 
        },
        stopButton(){
            if (this.timeId) {
                clearInterval(this.timeId);
                this.timeId = null;
            }
        }
    }
}
</script>

<style lang="css" scoped>
    .marquee_01{
        margin: 0 auto;width: 960px;text-align: center;
    }
</style>
