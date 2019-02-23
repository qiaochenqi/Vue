new Vue({
    el:"#app",
    data:{
        array : [
            {name:"Tom",age:20,email:"tom@itany.com"},
            {name:"Jack",age:21,email:"jack@itany.com"}
        ],
        user :{},
        nowIndex : -1
    },
    methods :{
        Add(){
            this.array.push(this.user);
            this.user = ""
        },
        Del(){
            if (this.nowIndex == -1) {
                this.array = []
            }else{
                this.array.splice(this.nowIndex,1)
            }
        }
    }
})