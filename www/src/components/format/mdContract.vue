<template>
  <!-- <a href="#"> -->
    <div class="contract-wrapper">
      <div class="progress">
        <div class="leftbar bar">4.5 BTC</div>
        <div class="rightbar bar">5.5 BTC</div>
      </div>
      <div class="text">
        <h4 class="title">Bitcoin to top 6000 usd in 2017</h4>
        <hr>
        <p>
          If the price of one Bitcoin goes strictly above 6000 USD strictly before January 1st 2018, this contract resolves to "YES".
        </p>
      </div>

    </div>
  <!-- </a> -->
</template>

<script>
export default {
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
}

.bar {
  float:left;
}

.leftbar {
  width:40%;
  height: 20px;
  background-color: #e06c75;
  padding-left:4px;
  text-align: left;
}
.rightbar {
  width:60%;
  height: 20px;
  background-color: #56b6c2;
  padding-right:4px;
  text-align: right;
}

.text { padding : 3px;}

.title{font-weight: bold}

h4 {text-align: left}

p{text-align: left}
</style>
