<template>
  <!-- <a href="#"> -->
  <div class="">
    <h4 class="title">设置你的地址</h4>
    <hr>

      <div class="contract-wrapper">
        <div class="text">
          <p>在投注之前，请确认阅读了投注相关的FAQ，确信你已经明白 <br><span class="strong">如果地址错误，您将不会收到任何的盈利，请谨慎填写</span> </p>
            <div class="commentname comment" style="text-align:left">
              <span>收币地址</span>
              <input type="text" v-model="outaddr">
            </div>
            <div class="">
              <p>注：如果你将收币地址和押注时冲币的地址写的一样的话，这种方式可能会让你的比特币丢失！</p>
            </div>
              <button type="button" name="button" class="postbtn" @click="linkTo()">提交</button>
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
      addr:'',
      outaddr:'',
      betid:''
    }
  },
  components:{
  },
  methods:{
      linkTo:function(){
        var contract_id=this.$route.params.contract_id;
        var yesorno=this.$route.params.yesorno;
        var outaddr=this.outaddr;
        var that=this;
        if (outaddr.trim()!='') {
          axios.get("http://120.92.192.127:3000/api/insertbet",{
            params:{
              contract_id:contract_id,
              yesorno:yesorno,
              outaddr:outaddr
            }
          }).then(function(res){
            // console.log(typeof res);
            that.betid=res.data;
            // console.log(res._id);
            that.$router.push("/browse/detail/"+contract_id+"/"+yesorno+"/"+that.betid);
          })

        }else {
          alert('请填写收币地址')
        }


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

p{font-size:14px;padding: 10px;text-align: left;}
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
.strong{
  color: #e06c75;
}
</style>
