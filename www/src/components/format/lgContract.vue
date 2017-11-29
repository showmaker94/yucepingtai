<template>
  <!-- <a href="#"> -->
    <div class="contract-wrapper" @click="linkTo()">
      <div class="progress">
        <!-- <div class="leftbar bar">4.5 BTC</div>
        <div class="rightbar bar">5.5 BTC</div> -->
        <div class="yesbar">
          {{yesbtc}} BcC
        </div>
        <div class="nobar">
          {{nobtc}} BCC
        </div>
        <div class="leftbar bar" v-bind:style="{width: YP+'%'}"></div>
        <div class="rightbar bar" v-bind:style="{width: (100-YP)+'%'}"></div>
      </div>
      <div class="text">
        <h2 class="title">{{title}}</h2>
        <hr>
        <div class="">
          <p>{{desc}}
          </p>
        </div>

      </div>
      <div class="bottom">
        <div class="bottom-left">Confirmed Bets: <b>{{confirbet}}</b></div>
        <div class="bottom-right">Closing in: <b>{{parseInt((new Date(resdate)-new Date())/86400000)-bettingends}} days</b></div>
      </div>
    </div>
  <!-- </a> -->
</template>

<script>
export default {
  props:['yesbtc','nobtc','title','desc','confirbet','resdate','bettingends','contract_id'],
  data(){
    return{
      resdate:'',
      contract_id:''
    }
  },
  computed:{
    YP:function(){
      return parseFloat(this.yesbtc)/(parseFloat(this.nobtc)+parseFloat(this.yesbtc))*100;
    }
  },
  components:{
  },
  methods:{
    linkTo:function(){
      var url="/browse/detail/"+this.contract_id;
      this.$router.push(url);
     }
  }
}
</script>

<style scoped>
/*
red  #e06c75
green #56b6c2
*/

div {margin:0;}

hr {margin :4px 0;border:1px #9d9d9d solid; }

.contract-wrapper{
  /*width:100%;*/
  border-radius: 4px;
  background-color: #282c34;
  margin-bottom: 20px;
}

.contract-wrapper:hover{
  cursor: pointer;
  transform:scale(1.03);
  -webkit-transform:scale(1.03);
  -moz-transform:scale(1.03);
  -o-transform:scale(1.03);
  -ms-transform:scale(1.03);
  box-shadow: 0 0 10px #61afef;
}

.progress{
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  color: white;
  height:40px;
  position: relative;
  line-height: 40px;
}

.bar {
  float:left;
  font-size: 18px;
  font-weight: bold;
  line-height: 40px;
}

.leftbar {
  width:50%;
  height: 40px;
  background-color: #e06c75;
  padding-left:4px;
  text-align: left;
}
.rightbar {
  width:50%;
  height: 40px;
  background-color: #56b6c2;
  padding-right:4px;
  text-align: right;
}
.yesbar{
  position: absolute;
  width: 50%;
  left: 0;
  top: 0;
  text-align: left;
  padding-left: 3px;
}

.nobar{
  position: absolute;
  width: 50%;
  right: 0;
  top: 0;
  text-align: right;
  padding-right: 3px;
}
.text { padding : 3px;}

.title{font-weight: bold}

p{padding:24px;font-size:18px;}

.bottom{padding:1px;}
.bottom-left {text-align: left;width:49%;display:inline-block;}
.bottom-right {text-align: right;width:49%;display:inline-block;}
</style>
