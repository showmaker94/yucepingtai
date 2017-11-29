<template>
  <!-- <a href="#"> -->
  <div class="">
    <h4 class="title">发出你的比特币</h4>
    <hr>
      <div class="contract-wrapper">
        <div class="text">
          <p>将比特币打到下方地址：</p>
          <p>{{sendcionto}}</p>
          <div class="">
            <img src="./../assets/logo.png" style="width:80px;height:80px;"alt="">
          </div>
          <p>押注：{{title}}</p>
          <p>您的比特币交易收到第一个确认后，您的下注将在确认的堵住清单中显示</p>
              <button type="button" name="button" class="postbtn" @click="linkTo()">返回</button>
        </div>

        </div>
      </div>
  </div>

  <!-- </a> -->
</template>

<script>
import axios from 'axios'
export default {
  data:function(){
    return{
      title:this.$route.params.title,
      sendcionto:'',
      // inaddr:''
    }
  },
  mounted:function(){
    this.getSendAddr()
  },
  components:{
  },
  methods:{
    linkTo:function(){
      var contract_id=this.$route.params.contract_id;
      var yesorno=this.$route.params.yesorno;
      var addr=this.$route.params.addr;
      this.$router.push("/browse/detail/"+contract_id+"/"+yesorno);
    },
    getSendAddr:function(){
      //查询刚才的下注，并且显示收币地址
      var that=this;
      axios.get("http://localhost:3000/api/showSendAddr",{
        params:{
          contract_id:this.$route.params.addr,
        }
      }).then(function(res){
        that.sendcionto=res.data[0].inaddr;
      })

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

.text { padding : 3px;}

.title{font-weight: bold;text-align: left;}

p{font-size:14px;padding: 5px}
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

}
</style>
