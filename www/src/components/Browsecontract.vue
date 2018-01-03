<template lang="html">
  <div class="">
      <h3>{{ $t("browse.allcontract") }}</h3><hr>
      <div class="panel panel-default mypanel">
        <br>
        <!-- <div class="form-group"> -->
          <input type="text" style="color:#9d9d9d" class="form-control panelinput" v-bind:placeholder='$t("top.searchPlaceholder")' v-model="searchTitle">
        <!-- </div> -->
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
            <button type="button" class="btn searchbtn" style="background:#444A58" @click="searchcontracts()">{{$t("top.search")}}</button>
        </div>
      </div>
      <div class="panel panel-default mypanel">
          <div class="panel-body">
            <p class="searchresult">{{ $t("browse.all") }}&nbsp;&nbsp;{{length}}&nbsp;&nbsp;{{ $t("browse.info") }}</p>
          </div>
      </div>
      <div class="" v-for="item in dataList">
          <contract :yesbtc="item.totalyesbet" :nobtc="item.totalnobet" :title="item.title" :desc="item.des" :confirbet='item.totalbetnum' :resdate='item.resdate' :bettingends="item.bettingends" :contract_id="item._id"></contract>
      </div>

      <!-- <h3>{{ $t("home.lastcomments") }}</h3><hr>
      <div class="" v-for="item in comment"> -->
        <!-- {{item}} -->
        <!-- <comment :postmen="item.name" :postcontent="item.comment" :title="item.title" :time="item.time"></comment>
      </div> -->


  </div>

</template>

<script>
import contract from "./format/lgContract.vue"
import comment from "./format/comment.vue"
export default {
  data(){
    return {
      tab:0,
      langOpen:'',
      langOpen0:false,
      langOpen1:false,
      langOpen2:false,
      collapseOpen:false,
      type0:['全部','杂项','比特币','政治','体育','娱乐'],
      type1:['全部','新合约','即将关闭的合约','关闭的合约','解决的合约'],
      type2:['生成日期','解决日期','押注多少'],
      seltype0:"类型",
      seltype1:"状态",
      seltype2:"排序",
      dataList:[],
      length:'',
      searchTitle:'',
      // comment:[]
    }
  },
components:{
  contract,
  // comment
},
mounted:function(){
  this.showAllContracts()
  // this.searchcomment();
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
  showAllContracts:function(){
    var that =this;
    this.$http.get('search',{
      params:{
        type:5
      }
    }).then(function(response){
      that.dataList=response.data;
      that.length=response.data.length;
      that.dataList=that.dataList.slice(0,4);
    })
  },
  // searchcomment:function(){
  //   var that =this;
  //   this.$http.get('search',{
  //     params:{
  //       type:8
  //     }
  //   }).then(function(response){
  //     that.comment=response.data.slice(0,4);
  //     // console.log(that.comment);
  //   })
  // },
  searchcontracts:function(){
    if(this.seltype0=="类型" && this.seltype1=="状态" && this.seltype2=="排序" &&this.searchTitle==''){
      alert("请输入关键字或选择搜索条件！");
      return false;
    }
    var that =this;
    this.$http.get('search',{
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
  }
}
}
</script>

<style lang="css">
.mypanel{
  border: none;
}
.panelinput{
  margin-left: 10%;
  margin-top: 5%;
  width: 260px;
  background: #282c34;
}
/*.option{
  margin-left: 10%;
  margin-bottom: 2%;
  float: left;
  width: 50%
}*/
.panel-body{
  padding: 0;
}
.searchbtn{
  margin-top: 5%;
  margin-left: 70%;
  width: 80px;
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
/*.navbar-inverse {
  background-color: #282c34;
  border: 0px;
  border-color: #282c34;
  font-weight: bold !important;
}*/
.mypanel .navbar-nav{
  margin-left: 10%;
  margin-top: 5%;
}
.mypanel .navbar-nav > li > a{
  padding: 7px 10px;
  width: 200px;
}
.mypanel .navbar-nav > li > span{
  display: block;
  padding: 7px 10px;
  width: 260px;
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
.mypanel .dropdown-menu li span{
  width: 260px;
  padding:5px;
}
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
