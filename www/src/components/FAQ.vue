<template lang="html">
  <div class="">
    <div class="" v-for="item in dataList">
      <faq :content="item.content" :firtitle="item.firtitle"></faq>
    </div>

  </div>
</template>

<script>
import faq from './format/faq.vue'
export default {
  data(){
    return{
        dataList:[]
    }
  },
  components:{
    faq
  },
  mounted:function(){
    this.getData()
  },
  methods:{
    getData(){
      this.$http.get("faqData").then((result)=>{
        var res=result.data;
        this.dataList=res.result;
      })
    }
  },
}
</script>

<style lang="css">
</style>
