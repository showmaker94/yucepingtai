<template>
  <!-- <a href="#"> -->
    <div class="contract-wrapper">
      <div class="">
        <div class="detail detail-left">
          <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>分类
        </div>
        <div class="detail detail-right">
            政治
        </div>
      </div>
      <div class="">
        <div class="detail detail-left">
          <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>投注开始时间
        </div>
        <div class="detail detail-right">
            05-08-2017
        </div>
      </div>
      <div class="">
        <div class="detail detail-left">
          <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>投注结束时间
        </div>
        <div class="detail detail-right">
            30-01-2018
        </div>
      </div>
      <div class="">
        <div class="detail detail-left">
          <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>合约解决时间
        </div>
        <div class="detail detail-right">
            01-03-2018
        </div>
      </div>
      <hr>
      <div class="">
        <div class="detail detail-left">
          <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>NO 的权重
        </div>
        <div class="detail detail-right">
            5`557
        </div>
      </div>
      <div class="">
        <div class="detail detail-left">
          <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>YES 的权重
        </div>
        <div class="detail detail-right">
            5`557
        </div>
      </div>
      <div class="">
        <div class="detail detail-left">
          <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>当前 的权重
        </div>
        <div class="detail detail-right">
            5`557 （从1到100`000）
        </div>
      </div>
      <div class="">
        <div class="detail detail-left">
          <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>确认的投注
        </div>
        <div class="detail detail-right">
            5（NO：2/YES：3）
        </div>
        <hr>
        <div class="detail detail-left">
          <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>计算
        </div>
        <div class="detail detail-right">
            <p>投注 <input class="calinput" type="text" name="" value="">BTC</p>
            <p><b>YES </b>pays:<span>1.100001</span></p>
            <p><b>NO </b>pays:<span>1.0500001</span></p>
        </div>
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

hr {margin :4px 0;border:1px #9d9d9d solid; width: 90%;margin: 0 auto}

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
.detail{
  display: inline-block;
  padding: 10px;
  width: 40%;
}
.detail-left{
  text-align: left;
  vertical-align: top;

}
.detail-right{
  text-align: left;

}
.calinput{
  width: 50px;
  background: #282c34;
  border: 1px #9d9d9d solid;
  border-radius: 3px;
}
</style>
