// beforeCreate
// created
// beforeMount
// mounted
// beforeUpdate
// updated
// activated
// deactivated
// beforeDestroy
// destroyed

var Test = {
    template:`<div>
    我是test组建{{text}}
    <button @click="text=text+1;">点击</button>
    </div>`,
    data:function(){
        return{
            text:'hello world'
        }
    },
    activated:function(){
        console.log('组件被激活')
    },
    deactivated:function(){
        console.log('组件被停用')
    },
    beforeDestroy:function(){//销毁之前
        console.log('beforeDestroy')
    },
    destroyed:function(){//销毁之后
        console.log('destroyed')
    },
    //销毁，最终都是做一些其他功能的释放
    beforeCreate:function(){
        //组建创建之前
        //console.log(this.text)
        console.log('beforeCreate')
    },
    created:function(){
        //组建创建之后
        //console.log(this.text)
        console.log('created')
        //发起ajax请求
    },

    // beforeMount:function(){
    //     //vue起作用，装载数据到DOM前
    //     //console.log(document.body.innerHTML)
    //     console.log('beforeMount')
    // },
    // mounted:function(){
    //     //vue起作用，装载数据到DOM后  //只执行一次
    //     //console.log(document.body.innerHTML)
    //     console.log('mounted')
    // },
    // //基于数据改变，影响页面
    // beforeUpdate:function(){
    //     //前  原来
    //     console.log(document.body.innerHTML)
    // },
    // updated:function(){
    //     //后  以后
    //     console.log(document.body.innerHTML)
    // }

    //以上两个更改数据才会出发

}

var App={
    components:{
        test:Test
    },
    data:function(){
        return{
            isExist:true
        }
    },
    template:`
        <div>
        <keep-alive>
            <test v-if="isExist"></test>
        </keep-alive>
            <button @click="isExist = !isExist">事关子组件</button>
        </div>
    `
}
new Vue({
    el:"#app",
    components:{
        app:App
    },
    template:'<app/>'
})