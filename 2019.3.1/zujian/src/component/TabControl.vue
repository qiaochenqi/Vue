<template lang="html">
    <div class="contronl">
        <input
        v-for="item,i in tabData"
        type="button"
        :value="item.title"
        :class="{red:i === index}"
        @click ="tabHandle(i)"
        />
        <ul
        v-for="item,j in tabData"
        v-show="index===j"
        >
            <li v-for="option in item.list">
                {{option.subTitle}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data:function(){
        return{
                tabData : [
				{
					title:"新闻",
					list: [
						{
							subTitle:'今天很好'
						},
						{
							subTitle:'今天很好'
						},
						{
							subTitle:'今天很好'
						}
					]
				},
				{
					title:'娱乐',
					list: [
						{
							subTitle:'结婚了'
						},
						{
							subTitle:'出轨了'
						}
					]
				},
				{
					title:'体育',
					list: [
						{
							subTitle:'冠军'
						},
						{
							subTitle:'冠军'
						}
					]
				}
            ],
            index:0
        }
    },
    methods:{
        tabHandle(i){
            this.index = i;
        }
    }
}
</script>

<style>
.contronl{
    width: 300px;
    height: 200px;
    border: 1px solid #ccc;
    margin: 0 auto;
}
.contronl div{
    display: none;
}
.red{
    background: red;
}
</style>
