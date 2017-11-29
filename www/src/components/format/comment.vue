<template>
  <!-- <a href="#"> -->
    <div class="comment-wrapper">
      <div class="who">
        <b style="color: #98c379">{{postmen}}</b> post in:
        <b style="color: #61afef">{{title}}</b><br>

        <b style="color: purple">time</b> &nbsp;{{new Date(time)}}
      </div>
      <hr>
      <div class="comment">
        {{postcontent}}
      <br>
      </div>
    </div>
  <!-- </a> -->
</template>

<script>
export default {
  props:['postmen','postcontent','title','time'],
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

hr {
  border-color: #11151b;
  border-style: solid solid none;
  border-width: 1px 1px medium;
  margin-top:2px;
  margin-bottom:2px;
  box-shadow:0 1px 0 #444;
}

.who{
  padding: 4px 10px;
  text-align:left;
}

.comment {
  padding: 8px 8px;
  text-align:left;
}

.comment-wrapper{
  /*width:100%;*/
  border-radius: 4px;
  background-color: #282c34;
  margin-bottom: 10px;
}

.comment-wrapper:hover{
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
