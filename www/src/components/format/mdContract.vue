<template>
  <!-- <a href="#"> -->
    <div class="contract-wrapper" @click="linkTo()" style="height:300px;overflow:hidden">
      <div class="progress">
        <div class="yesbar" style="color:white">
          {{yesbtc}} Tcash
        </div>
        <div class="nobar" style="color:white">
          {{nobtc}} Tcash
        </div>
        <div class="leftbar bar" v-bind:style="{width: YP+'%'}"></div>
        <div class="rightbar bar" v-bind:style="{width: (100-YP)+'%'}"></div>
      </div>
      <div class="text">
        <h4 class="title">{{title}}</h4>
        <hr>
        <p>
          {{desc}}
        </p>
      </div>

    </div>
  <!-- </a> -->
</template>

<script>
import axios from 'axios'
export default {
  props:['yesbtc','nobtc','title','desc','contract_id'],
  data(){
    return{
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
  margin-bottom: 10px;
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
  position: relative;
}

.bar {
  float:left;
  font-weight: bold;
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
.leftbar {
  width:50%;
  height: 20px;
  background-color: #e06c75;
  padding-left:4px;
  text-align: left;
}
.rightbar {
  width:50%;
  height: 20px;
  background-color: #56b6c2;
  padding-right:4px;
  text-align: right;
}

.text { padding : 3px;}

.title{font-weight: bold}

h4 {text-align: left}

p{text-align: left;
display: -webkit-box;
text-overflow: ellipsis;
overflow : hidden;
text-overflow: ellipsis;
-webkit-line-clamp: 11;
-webkit-box-orient: vertical;
}
</style>
