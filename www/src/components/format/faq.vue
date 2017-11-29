<template>
  <!-- <a href="#"> -->
    <div class="contract-wrapper">
      <div class="text">
        <h2 class="title">{{firtitle}}</h2>
        <hr>
        <div class="" v-for="item in content">
          <h3>{{item.sedtitle}}</h3>
          <p>{{item.answer}}</p>
        </div>

      </div>
    </div>
  <!-- </a> -->
</template>

<script>
export default {
  props:[
    'firtitle',
    'content'
  ],
  components:{
  },
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
}

.bar {
  float:left;
  font-size: 18px;
  font-weight: bold;
  line-height: 40px;
}

.leftbar {
  width:40%;
  height: 40px;
  background-color: #e06c75;
  padding-left:4px;
  text-align: left;
}
.rightbar {
  width:60%;
  height: 40px;
  background-color: #56b6c2;
  padding-right:4px;
  text-align: right;
}

.text { padding : 3px;}

.title{font-weight: bold}

p{padding:24px;font-size:18px;}

.bottom{padding:1px;}
.bottom-left {text-align: left;width:49%;display:inline-block;}
.bottom-right {text-align: right;width:49%;display:inline-block;}
</style>
