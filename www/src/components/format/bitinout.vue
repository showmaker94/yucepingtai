<template>
  <!-- <a href="#"> -->
    <div class="contract-wrapper">
      <div class="text">
        <table class="table table-condensed">
            <thead>
              <tr>
                <td>时间</td>
                <td>投注</td>
                <td>权重</td>
                <td>押入</td>
                <td>押入地址</td>
                <td>转出</td>
                <td>转出地址</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>05-08-17 09:13</td>
                <td>是</td>
                <td>99`132</td>
                <td>0.06619418</td>
                <td>16sXe</td>
                <td>/</td>
                <td>16sXe</td>
              </tr>
              <tr>
                <td>05-08-17 09:13</td>
                <td>是</td>
                <td>99`132</td>
                <td>0.06619418</td>
                <td>16sXe</td>
                <td>0.06619418</td>
                <td>16sXe</td>
              </tr>
            </tbody>
        </table>
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

.text { padding : 3px;overflow:scroll;overflow-y:hidden;}

.title{font-weight: bold}

p{padding:24px;font-size:18px;}


</style>
