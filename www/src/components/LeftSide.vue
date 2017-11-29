<template>
  <div class="">
    <h3>{{ $t("sides.new") }}</h3><hr>
    <div class="" v-for="item in newdataList">
        <contract :yesbtc="item.totalyesbet" :nobtc="item.totalnobet" :title="item.title" :desc="item.des" :contract_id='item._id'></contract>
    </div>

    <h3>{{ $t("sides.closing") }}</h3><hr>
    <div class="" v-for="item in closingdataList">
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
        newdataList:[],
        closingdataList:[],
        yesbtc:'',
        nobtc:'',
        title:'',
        desc:''
    }
  },
  mounted:function(){
    this.getnewData(),
    this.getclosingData()
  },
  methods:{
    getnewData(){
      axios.get('http://localhost:3000/api/shownew',{
        params:{
            obj1:{
              isok:'1',
              currentstatus:'0'
            },
            obj2:{
              cretime:-1
            }
          }
      }
    ).then((result)=>{
        var res=result.data.slice(0,result.data.length>4?4:result.data.length);
        this.newdataList=res;
      })
    },
    getclosingData(){
      axios.get('http://localhost:3000/api/showclosing',{
        params:{
            obj1:{
              isok:'1',
              currentstatus:'1'
            },
            obj2:{
              cretime:-1
            }
        }
      }
    ).then((result)=>{
        var res=result.data.slice(0,result.data.length>4?4:result.data.length);
        this.closingdataList=res;
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
