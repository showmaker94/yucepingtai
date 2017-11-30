<template>
  <div class="">
    <h3>{{ $t("sides.resolved") }}</h3><hr>
    <div class="" v-for="item in solveddataList">
        <contract :yesbtc="item.totalyesbet" :nobtc="item.totalnobet" :title="item.title" :desc="item.des" :contract_id='item._id'></contract>
    </div>
    <h3>{{ $t("sides.closed") }}</h3><hr>
    <div class="" v-for="item in closeddataList">
        <contract :yesbtc="item.totalyesbet" :nobtc="item.totalnobet" :title="item.title" :desc="item.des" :contract_id='item._id'></contract>
    </div>
  </div>
</template>

<script>
/*
type 1 new 2 solved 3 closing 4 closed
*/
import contract from "./format/mdContract.vue"
import axios from "axios"
export default {
  data(){
    return{
        solveddataList:[],
        closeddataList:[]
    }
  },
  mounted:function(){
    this.getsolveData(),
    this.getclosedData()
  },
  methods:{
    getsolveData(){
      axios.get('http://120.92.192.127:3000/api/showresolve',{
        params:{
          obj1:{
            isok:'1',
            currentstatus:'3'
          },
          obj2:{
            cretime:-1
          }
          }
      }
    ).then((result)=>{
        var res=result.data;
        // console.log(res);
        this.solveddataList=res;
      })
    },
    getclosedData(){
      axios.get('http://120.92.192.127:3000/api/showclosed',{
        params:{
          obj1:{
            isok:'1',
            currentstatus:'2'
          },
          obj2:{
            cretime:-1
          }
          }
      }
    ).then((result)=>{
        var res=result.data;
        // console.log(res);
        this.closeddataList=res;
      })
    }
  },
  components:{
    contract,
  },
}
</script>

<style scoped>
h3 {text-align: left;margin-top: 20px;margin-bottom: 0px;font-weight: bold;}
hr {margin-top:0px;margin-bottom: 10px;border:1px #9d9d9d solid; }
</style>
