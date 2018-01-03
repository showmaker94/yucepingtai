<template>
  <!-- <a href="#"> -->
  <div class="">
    <h4 class="title">发出你的Tcash</h4>
    <hr>
      <div class="contract-wrapper">
        <div class="text">
          <p>将Tcash打到下方地址：</p>
          <p>{{sendcionto}}</p>
          <!-- <erweima></erweima> -->
          <div class="notice" style="margin:0 auto;width:105px">
            <!-- <img src="./../assets/logo.png" style="width:80px;height:80px;"alt=""> -->
            <qr-code
            :text=sendcionto
            :size=100
            color="#000000"
            bg-color="#ffffff"
            error-level="L">
            </qr-code>
          </div>
          <p>押注：{{title}}</p>
          <p>您的Tcash交易收到第一个确认后，您的下注将在确认的堵住清单中显示</p>
              <span class="postbtn" @click="linkTo()">返回</span>
        </div>

        </div>
      </div>
  </div>

  <!-- </a> -->
</template>

<script>
import qrCode from 'vue-qrcode-component/src/QRCode.vue'
// import erweima from "./format/erweima.vue"
export default {
  data:function(){
    return{
      title:this.$route.params.title,
      sendcionto:'',
      qrsize:100
      // inaddr:''
    }
  },
  mounted:function(){
    this.getSendAddr()
  },
  components:{
    qrCode
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
      this.$http.get("api/showSendAddr",{
        params:{
          contract_id:this.$route.params.addr,
        }
      }).then(function(res){
        that.sendcionto=res.data[0].inaddr;
        // console.log(that.sendcionto);
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

.text { padding : 3px;height: 400px}

.title{font-weight: bold;text-align: left;}

p{font-size:14px;padding: 5px}
.comment{
  padding: 10px
}
.text .notice span {
  display: block;
  width: 80px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin-top: 50px;
}
.comment input,.comment textarea{
  background: #282c34;
  border: 1px #9d9d9d solid;
  border-radius: 3px;
}
.postbtn{
  width: 70px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  display: block;
  background: #282c34;
  border: 1px #9d9d9d solid;
  border-radius: 3px;
  margin-top: 40px;
  margin-left: 70%;

}
</style>
