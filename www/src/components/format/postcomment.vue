<template>
  <!-- <a href="#"> -->
    <div class="contract-wrapper">
      <div class="text">
          <div class="commentname comment" style="text-align:left">
            <span>姓名</span>
            <input type="text" name="" value="">
          </div>
          <div class="commentcontent comment" style="text-align:left;">
            <span style="vertical-align:top">内容</span>
            <textarea name="name" rows="6" cols="30"></textarea>

          </div>
          <div class="">
            <button type="button" name="button" class="postbtn">提交</button>
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

.text { padding : 3px;}

.title{font-weight: bold}

p{font-size:18px;}
.comment{
  padding: 10px
}
.comment input,.comment textarea{
  background: #282c34;
  border: 1px #9d9d9d solid;
  border-radius: 3px;
}
.postbtn{
  background: #282c34;
  border: 1px #9d9d9d solid;
  border-radius: 3px;
  vertical-align: bottom;
  margin-left: 70%

}
</style>
