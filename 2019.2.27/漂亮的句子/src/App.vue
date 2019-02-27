<template>
    <div class="container">
        <app-header :maxQuotes="maxQuotes" :currentQuote="quotes.length"></app-header>
        <app-new @add="getQu($event)"></app-new>
        <app-quote-grid @del="delt($event)" :quotes="quotes"></app-quote-grid>

        <div class="row">
           <div class="col-sm-12 text-center">
               <div class="alert alert-info">
                  Info : Click on a Quote to delete it!
               </div>
           </div>
       </div>
    </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue'
import NewQuote from './components/NewQuote.vue'
import Header from './components/Header.vue'
export default {
  data () {
    return {
        maxQuotes : 10 ,
        quotes :[
          "只是第一条"
        ]
    }
  },
  components :{
    appQuoteGrid : QuoteGrid,
    appNew : NewQuote,
    appHeader: Header
  },
  methods:{
    getQu(data){
      if (this.quotes.length >= this.maxQuotes) {
          return alert("请删除一条再添加")
      }
        this.quotes.push(data)
    },
    delt(data){
        this.quotes.splice(data,1)
    }
  }
}
</script>

<style>

</style>
