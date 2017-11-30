<template>
<div class="">
  <h3>{{ $t("home.highroller") }}</h3><hr>
  <div class="">
    <div class="" v-for="item in dataList">

      <!-- <contract :yesbtc="item.totalyesbet" :nobtc="item.totalnobet" :title="item.title" :desc="item.des" :confirbet="item.totalbetnum" :resdate="item.resdate" :bettingends="item.bettingends" :contract_id='item._id'></contract> -->
      <contract :yesbtc="item.totalyesbet" :nobtc="item.totalnobet" :title="item.title" :desc="item.des" :contract_id='item._id' :confirbet="item.totalbetnum" :resdate="item.resdate" :bettingends="item.bettingends" ></contract>
    </div>
    <button type="button" name="button" class="searchInput" @click='getnewData'>{{$t("home.loadmore") }}</button>
  </div>

  <h3>{{ $t("home.lastcomments") }}</h3><hr>
  <div class="" v-for="item in comment">
    <comment :postmen="item.name" :postcontent="item.comment" :title="item.title" :time="item.time"></comment>
  </div>
  <button type="button" name="button" class="searchInput" @click="getnewComment">{{$t("home.loadmore") }}</button>
  <h3>{{ $t("home.latestbet") }}</h3><hr>
  <div class="" v-for='item in bet'>
    <latestbet :innum="item.innum" :title='item.title' :bet='item.bet' :time="item.time"></latestbet>
  </div>
  <button type="button" name="button" class="searchInput" @click='getnewBet'>{{$t("home.loadmore") }}</button>
</div>
</template>

<script>
import contract from "./format/lgContract.vue"
import comment from "./format/comment.vue"
import latestbet from "./format/latestbet.vue"
import axios from "axios"
export default {
  data(){
    return{
        dataList:[],
        comment:[],
        bet:[],
        hotcontractnum:0,
        latestcommentnum:0,
        latestbetnum:0
    }
  },
  mounted:function(){
    this.getnewData(),
    this.getnewComment(),
    this.getnewBet()
  },
  methods:{
    getnewData(){
        var that=this;
      axios.get('http://120.92.192.127:3000/api/showhot',{
        params:{
          obj1:{
            isok:'1'
          },
          obj2:{
            totalbetnum:'-1'
          }
          }
      }
    ).then((result)=>{
        var res=result.data;
        if (that.hotcontractnum==0) {
          that.hotcontractnum=4;
        }
        else if ( (that.hotcontractnum+4)<res.length) {
          that.hotcontractnum+=4
        }
        else {
          that.hotcontractnum=res.length;
        }
        this.dataList=res.slice(0,that.hotcontractnum);
      })
    },
    getnewComment(){
      var that=this;
      axios.get('http://120.92.192.127:3000/api/showcomment',{
        params:{
          obj1:{
          },
          obj2:{
            time:-1
          }
          }
      }
    ).then((result)=>{
      var res=result.data;
      if (that.latestcommentnum==0) {
        that.latestcommentnum=4;
      }
      else if ( (that.latestcommentnum+4)<res.length) {
        that.latestcommentnum+=4
      }
      else {
        that.latestcommentnum=res.length;
      }
      that.comment=res.slice(0,that.latestcommentnum);
      })
    },
    getnewBet(){
      var that=this;
      axios.get('http://120.92.192.127:3000/api/showbet',{
        params:{
          obj1:{
          },
          obj2:{
            time:-1
          }
          }
      }
    ).then((result)=>{
      var res=result.data;
      if (that.latestbetnum==0) {
        that.latestbetnum=4;
      }
      else if ( (that.latestbetnum+4)<res.length) {
        that.latestbetnum+=4
      }
      else {
        that.latestbetnum=res.length;
      }
      // console.log(that.hotcontractnum);
      this.bet=res.slice(0,that.latestbetnum);
      })
    },

  },
  components:{
    contract,
    comment,
    latestbet
  },
}
</script>

<style scoped>
h3 {text-align: left;margin-top: 20px;margin-bottom: 0px;font-weight: bold;}
hr {margin-top:0px;margin-bottom: 10px;border:1px #9d9d9d solid; }
.searchInput{background-color: #282c34;font-weight: bold;;color:#9d9d9d;border: 1px solid #9d9d9d;padding: 5px ;border-radius: 3px}
</style>
