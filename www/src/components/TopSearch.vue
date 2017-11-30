<template lang="html">
  <div class="">
      <h3>所有合约</h3><hr>
      <div class="panel panel-default mypanel">
        <br>
        <div class="form-group">
          <input type="text" class="form-control panelinput" placeholder="按关键字搜索" v-model="searchTitle">
        </div>
        <div class="panel-body">

          <div class="mypanel">
            <ul class="nav navbar-nav">
              <li class="dropdown" v-bind:class="{ open: langOpen0 }" v-on:click="(langOpen0)?langOpen0=false:langOpen0=true">
                <span href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                v-bind:aria-expanded="{ false: langOpen===0,true: langOpen===1 }">{{seltype0}} <span class="caret"></span></span>
                <ul class="dropdown-menu">

                  <li v-for="item in type0"><span @click="changeVal0($event,item)">{{item}}</span></li>

                </ul>
              </li>
            </ul>
          </div>

          <div class="mypanel">
            <ul class="nav navbar-nav">
              <li class="dropdown" v-bind:class="{ open: langOpen1 }" v-on:click="(langOpen1)?langOpen1=false:langOpen1=true">
                <span href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                v-bind:aria-expanded="{ false: langOpen===0,true: langOpen===1 }">{{seltype1}} <span class="caret"></span></span>
                <ul class="dropdown-menu">

                  <li v-for="item in type1"><span @click="changeVal1($event,item)">{{item}}</span></li>

                </ul>
              </li>
            </ul>
          </div>


          <div class="mypanel">
            <ul class="nav navbar-nav">
              <li class="dropdown" v-bind:class="{ open: langOpen2 }" v-on:click="(langOpen2)?langOpen2=false:langOpen2=true">
                <span href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                v-bind:aria-expanded="{ false: langOpen===0,true: langOpen===1 }">{{seltype2}}<span class="caret"></span></span>
                <ul class="dropdown-menu">

                  <li v-for="item in type2"><span @click="changeVal2($event,item)">{{item}}</span></li>

                </ul>
              </li>
            </ul>
          </div>

        </div>
        <div class="" style="padding:10px 0px">
            <button type="button" class="btn searchbtn" style="background:#444A58" @click="searchcontracts()">搜索</button>
        </div>
      </div>
      <div class="panel panel-default mypanel">
          <div class="panel-body">
            <p class="searchresult">共搜索到{{length}}条信息</p>
          </div>
      </div>
      <div class="" v-for="item in dataList">
          <contract :title="item.title" :desc="item.des" :confirbet='item.totalbetnum' :resdate='item.resdate' :bettingends="item.bettingends" :contract_id='item._id'></contract>
      </div>

      <!-- <h3>{{ $t("home.lastcomments") }}</h3><hr>
      <div class="" v-for="item in comment"> -->
        <!-- {{item}} -->
        <!-- <comment :postmen="item.name" :postcontent="item.comment" :title="item.title" :time="item.time"></comment>
      </div> -->


  </div>

</template>

<script>
import axios from 'axios'
import contract from "./format/lgContract.vue"
import comment from "./format/comment.vue"
export default {
  data(){
    return {
      tab:0,
      langOpen0:false,
      langOpen1:false,
      langOpen2:false,
      collapseOpen:false,
      type0:['全部','杂项','比特币','政治','体育','娱乐'],
      type1:['全部','新合约','关闭的合约','解决的合约'],
      type2:['生成日期','关闭日期','解决日期','押注多少'],
      seltype0:"类型",
      seltype1:"状态",
      seltype2:"排序",
      dataList:[],
      length:'',
      searchTitle:'',
      comment:[]
    }
  },
components:{
  contract,
  comment
},
mounted:function(){
  this.topsearch()

},
watch:{
  "$route":"topsearch"
},
methods:{
  changeVal0:function(event,item){
      this.seltype0=item;
  }
  ,
  changeVal1:function(event,item){
      this.seltype1=item;
  }
  ,
  changeVal2:function(event,item){
      this.seltype2=item;
  },
  searchcontracts:function(){
    if(this.seltype0=="类型" && this.seltype1=="状态" && this.seltype2=="排序" &&this.searchTitle==''){
      alert("请输入关键字或选择搜索条件！");
      return false;
    }
    var that =this;
    axios.get('http://120.92.192.127:3000/api/searchbrowse',{
      params:{
        type:7,
        title:this.searchTitle,
        category:this.seltype0,
        status:this.seltype1,
        order:this.seltype2
      }
    }).then(function(response){
      that.dataList=response.data;//显示查询结果的数组
      that.length=response.data.length;
    })
  },
  topsearch:function(){
    // alert(this.$route.params.searchword);
    var that =this;
    axios.get('http://120.92.192.127:3000/api/searchinput',{
      params:{
        type:12,
        title:this.$route.params.searchword,
      }
    }).then(function(response){
      that.dataList=response.data;//显示查询结果的数组
      console.log(that.dataList);
    })
  }
}
}
</script>

<style lang="css">
option{
  border: none;
  color: red;
}
.mypanel{
  border: none;
}
.panelinput{
  margin-left: 10%;
  margin-top: 5%;
  width: 60%;
  background: #282c34;
}
.option{
  margin-left: 10%;
  margin-bottom: 2%;
  float: left;
  width: 50%
}
.panel-body{
  padding: 0;
}
.searchbtn{
  margin-top: 5%;
  margin-left: 80%
}
.searchbtn:hover{
  color: white;
}
.searchresult{
  margin: 0;
  padding: 10px;
}
.panel{
  background: #282c34
}
a{
  text-decoration: none;
}
.navbar-inverse {
  background-color: #282c34;
  border: 0px;
  border-color: #282c34;
  font-weight: bold !important;
}
.mypanel .navbar-nav{
  margin-left: 10%;
  margin-top: 5%;
}
.mypanel .navbar-nav > li > a{
  padding: 7px 10px;
  width: 200px;
}
.mypanel .nav > li > a{
  border: 1px solid #9d9d9d;
  color: #9d9d9d;
}
.mypanel .nav > li > a:focus, .mypanel .nav > li > a:hover{
    background-color: #282c34;;
    border: 1px solid #9d9d9d;
}
.mypanel .nav .open > a, .mypanel .nav .open > a:focus, .mypanel .nav .open > a:hover{
  background-color: #282c34;;
  border: 1px solid #9d9d9d;
}
/*dropdown menu*/
.navbar-inverse .navbar-nav>.open>a, .navbar-inverse .navbar-nav>.open>a:focus, .navbar-inverse .navbar-nav>.open>a:hover{
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
.dropdown-menu>li>a {color: #fff;}
.open{display:block}
</style>
