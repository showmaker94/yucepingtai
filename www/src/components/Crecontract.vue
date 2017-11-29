<template lang="html">
  <div class="createcontract">
    <p>在创建合约之前，请 <span class="stress">阅读相关FAQ部分</span></p>
    <p>我们建议，您参加您即将创建的合约</p>
    <p>所以，您还应 <span class="stress">阅读投注相关的问题解答部分</span> </p>
    <hr>
    <h4 class="title">标题</h4>
    <div class="form-group pos">
      <input type="text" class="form-control" placeholder="" v-model="titleval" >
      <span class="glyphicon glyphicon-remove "  :class="{'erricon':titleiserr}" aria-hidden="true" style="position:absolute;right:2%;top:40%"></span>
    </div>
    <h4 class="title">描述</h4>
    <div class="pos">
      <textarea class="form-control" rows="6" v-model="desval"></textarea>
      <span class="glyphicon glyphicon-remove "  :class="{'erricon':desiserr}" aria-hidden="true" style="position:absolute;right:2%;top:10%"></span>
    </div>


    <h4 class="title">开奖时间</h4>
    <div class="pos">
      <datepicker :readonly="true" format="YYYY-MM-DD" v-model="resdateval" ref="resdate"></datepicker>
      <span class="glyphicon glyphicon-remove "  :class="{'erricon':resiserr}" aria-hidden="true" style="position:absolute;right:2%;top:40%"></span>
    </div>


    <div class="" style="clear:both">

    </div>
    <h4 class="title">结束投注时间</h4>
    <div class="pos">
      <form class="form-inline">
      <div style="float:left;text-align:left">
          <label>距离公布结果</label>
          <input type="text" class="form-control" style="width:20%;display:inline-block" v-model="enddateval">
          <input id="hiddenText" type="text" style="display:none" />
            <label>天</label>
      </div>
      </form>
      <!-- <div class="pos">
        <datepicker :readonly="true" format="YYYY-MM-DD" v-model="enddateval" ref="enddate"></datepicker>
        <input id="hiddenText" type="text" style="display:none" />
        <span class="glyphicon glyphicon-remove "  :class="{'erricon':endiserr}" aria-hidden="true" style="position:absolute;right:2%;top:40%"></span>
      </div> -->
      <span class="glyphicon glyphicon-remove "  :class="{'erricon':endiserr}" aria-hidden="true" style="position:absolute;right:2%;top:40%"></span>
    </div>

    <div style="clear:both"></div>
    <!-- <h4 class="title">押注权重最低 <span class="stress">(查看FAQ)</span></h4> -->
    <div class="pos">
      <!-- <form class="form-inline">
      <div style="float:left;text-align:left">
          <label>权重从100`000截止到</label>
          <input type="text" class="form-control" style="width:20%;display:inline-block" v-model="weightvalue">
          <input id="hiddenText" type="text" style="display:none" />
      </div>
      </form> -->
        <span class="glyphicon glyphicon-remove "  :class="{'erricon':weightiserr}" aria-hidden="true" style="position:absolute;right:2%;top:50%"></span>
    </div>
    <div style="clear:both"></div>
    <h4 class="title">类型</h4>
    <div class="mypanel">
      <ul class="nav navbar-nav">
        <li class="dropdown" v-bind:class="{ open: langOpen }" v-on:click="(langOpen)?langOpen=false:langOpen=true">
          <span href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
          v-bind:aria-expanded="{ false: langOpen===0,true: langOpen===1 }">{{type}} <span class="caret"></span></span>
          <ul class="dropdown-menu">

            <li v-for="item in type1"><span @click="changeVal($event,item)">{{item}}</span></li>

          </ul>
        </li>
      </ul>
    </div>

    <div style="clear:both"></div>
    <h4 class="title">你的收币地址</h4>
    <div class="form-group" style="position:relative">
      <input type="text" class="form-control" placeholder="" v-model="outaddrval" >
      <span class="glyphicon glyphicon-remove "  :class="{'erricon':outaddriserr,'okicon':outaddrisok}" aria-hidden="true" style="position:absolute;right:2%;top:40%"></span>
    </div>
    <h4 class="title">你的押注选项</h4>
    <div class="pos">
      <label  class="betop" for="yes"><input type="radio" name="betop" id="yes" v-model="pick" v-bind:value="'yes'">YES</label>
      <label  class="betop" for="no"><input  type="radio" name="betop" id="no" v-model="pick" v-bind:value="'no'">NO</label>
      <div style="clear:both"></div>
      <span class="glyphicon glyphicon-remove "  :class="{'erricon':pickiserr}" aria-hidden="true" style="position:absolute;right:2%;top:40%"></span>
    </div>
    <br>
    <br>
    <br>
    <br>
    <p> <span class="stress">重要提示:</span>  所有合同必须以最少0.01BCC的投资，才会被批准</p>
    <p> <span class="stress">请填写有意义的合约，如果合约无任何意义将不会被通过</span></p>
    <button type="button" class="btn btn-primary" @click="checktitlevalue">提交</button>
  </div>

</template>
<script>
import datepicker from 'vue-date-picker'
import axios from 'axios'
export default {
  data(){
    return {
      pick:'',
      titleval:'',
      desval:'',
      outaddrval:'',
      enddateval:'',
      betendsdateval:'',
      weightvalue:'',
      type:"杂项",
      type1:["杂项","政治","体育","比特币"],
      tab:0,
      langOpen:false,
      collapseOpen:false,
      titleiserr:true,
      desiserr:true,
      resiserr:true,
      endiserr:true,
      betendsiserr:true,
      weightiserr:true,
      outaddriserr:true,
      pickiserr:true

    }
  },
  components:{
    datepicker
  },
  methods:{
      changeVal:function(event,item){
          this.type=item;
      },
      checktitlevalue:function(){
        if(this.titleval.trim()==''){
            this.titleiserr=false;
            return false;
        }else {
          this.titleiserr=true;
        }
        if(this.desval.trim()==''){
            this.desiserr=false;
            return false;
        }else {
          this.desiserr=true;
        }

        if(this.$refs['resdate'].value.trim()==''){
          this.resiserr=false;
          return false;
        }else {
          //console.log(this.$refs['setdate'].value); //获取组件内部的数据
          this.resiserr=true;
        }
        if(this.enddateval.trim()==''){
          this.endiserr=false;
          return false;
        }else {
          this.endiserr=true;
        }
        // if(this.weightvalue.trim()==''){
        //     this.weightiserr=false;
        //     return false;
        // }else {
        //   this.weightiserr=true;
        // }
        if(this.outaddrval.trim()==''){
            this.outaddriserr=false;
            return false;
        }else {
          this.outaddriserr=true;
        }
        //
        if(this.pick==''){
          this.pickiserr=false;
          return false;
        }else {
            this.pickiserr=true;
            // console.log(this.pick);
        }
        //访问后端，ajax传送数据，之后存储到数据库
        let data={
        title:this.titleval,
        des:this.desval,
        bet:this.pick,
        resdate:this.$refs['resdate'].value,
        bettingends:this.enddateval,
        // betweightendpoint:this.weightvalue,
        category:this.type,
        // creaddr:this.outaddrval,
        bet:this.pick,
        cretime:''
      };
      console.log(data);
        axios.post('http://localhost:3000/api/creContract',data).then((res)=>{
                alert("创建成功，等待审核！");
                this.$router.push("/")

          })

      }
    }
}
</script>

<style lang="css">
  .pos{
    position: relative;
  }
  .erricon{
    display: none;
  }
  .okicon{
    display: block;
  }
  .stress{
    color: #f06c75
  }
  hr {margin-top:0px;margin-bottom: 10px;border:1px #9d9d9d solid; }
  .text { padding : 3px; }

  .title{font-weight: bold;text-align: left;}
  /*select{
    padding: 6px 12px;
    background: white;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
  }*/
  .option,.betop{
    float: left;
  }
  .betop{
    opacity: 1;
    background-color: #333;
    cursor: pointer;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
  }
  .createcontract input,.createcontract textarea{
    background: #282c34;
    border: 1px #9d9d9d solid;
    border-radius: 3px;
  }

  .mypanel .navbar-nav > li > span{
    display: block;
    padding: 7px 10px;
    width: 200px;
  }
  .mypanel .nav > li > span{
    display: block;
    border: 1px solid #9d9d9d;
    color: #9d9d9d;
  }
  .mypanel .nav > li > span:focus, .mypanel .nav > li > span:hover{
      background-color: #282c34;;
      border: 1px solid #9d9d9d;
  }
  .mypanel .nav .open > span, .mypanel .nav .open > span:focus, .mypanel .nav .open > span:hover{
    background-color: #282c34;;
    border: 1px solid #9d9d9d;
  }
  .navbar-inverse .navbar-nav>.open>span, .navbar-inverse .navbar-nav>.open>span:focus, .navbar-inverse .navbar-nav>.open>span:hover{
    background-color: #21252b;
  }
  .mypanel .dropdown-menu li :hover { background-color: #5294e2}

  .navbar-inverse .navbar-toggle {
    border-color: #444A58;
  }

  .navbar-inverse .navbar-toggle:hover{
    background-color: #282c34;
  }

  .dropdown-menu{background-color: #383c4a;border-color:#626773;border-radius: 0px;}
  .dropdown-menu>li>span {display: block;color: #fff;text-align: center;}
  .open{display:block}
</style>
