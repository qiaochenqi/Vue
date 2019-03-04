<template lang="html">
    <div class="wrap" id="app">
        <div class="baidu">
            <ul class="list list-head">
                <li>
                    <div>
                        <input type="checkbox"
                            v-model="isAll"
                        />全选
                    </div>
                    <span>歌单</span>
                    <span>歌手</span>
                    <span>专辑</span>
                </li>
            </ul>
            <ul class="list list-body">
                <li v-for="item in data">
                    <div>
                        <input type="checkbox" v-model="item.checked">
                        <span>{{item.song}}</span>
                        <span>{{item.name}}</span>
                        <span>{{item.album}}</span>
                    </div>
                </li>
            </ul>
            <div class="select">
               <span class="selectAll">

                  <span>统计：</span>
               </span>
            </div>
        </div>
        {{isAll}}
    </div>
</template>
<script>
export default {
    data(){
        return{
            data : [
            {
               id:Date.now()+Math.random(),
               name: '邓紫棋',
               song: '泡沫',
               checked: true,
               album: 10
            },
            {
               id:Date.now()+Math.random(),
               name: '王杰',
               song: '泡沫',
               checked: true,
               album: 10
            },
            {
               id:Date.now()+Math.random(),
               name: '邓紫棋',
               song: '泡沫123',
               checked: false,
               album: 10
            }
         ]
        }
    },
    computed:{
        isAll:{
            get(){
                return this.data.every(function(item){
                    return item.checked
                });
            },
            set(newValue){
                this.data.forEach(element => {
                    element.checked = newValue
                });
            }
        }
    }
}
</script>

<style scoped>
        body,
         ul,
         li {
            margin: 0;
            padding: 0;
            list-style: none;
         }
         .list-body li:nth-child(even) {
            background: yellow;
         }
         .list-body li:nth-child(odd) {
            background: #fff;
         }
         .list-body li:hover {
            background: green;
         }
         .list-body li.checkedColor {
            background: green;
         }
</style>
