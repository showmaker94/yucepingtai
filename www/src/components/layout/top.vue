<template>
  <nav class="navbar navbar-inverse navbar-static-top">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" v-on:click="(collapseOpen)?collapseOpen=false:collapseOpen=true">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <span class="navbar-brand" v-on:click="tab=0"><router-link to="/">CoinBet</router-link></span>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" v-bind:class="{open:collapseOpen}" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-left" >
          <li v-bind:class="{ active: tab===1 }" v-on:click="tab=1,(collapseOpen)?collapseOpen=false:collapseOpen=true"><router-link to="/browse">{{ $t("top.BrowseContracts") }}</router-link></li>
          <!-- <li v-bind:class="{ active: tab===2 }" v-on:click="tab=2"><a href="#">{{ $t("top.CreateContract") }}</a></li> -->
          <li v-bind:class="{ active: tab===2 }" v-on:click="tab=2,(collapseOpen)?collapseOpen=false:collapseOpen=true"><router-link to="/new">{{ $t("top.CreateContract") }}</router-link></li>
          <li v-bind:class="{ active: tab===3 }" v-on:click="tab=3,(collapseOpen)?collapseOpen=false:collapseOpen=true"><router-link to="/faq">FAQ</router-link></li>
          <li v-bind:class="{ active: tab===4 }" v-on:click="tab=4,(collapseOpen)?collapseOpen=false:collapseOpen=true"><a href="#">{{ $t("top.Stat") }}</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li class="dropdown" v-bind:class="{ open: langOpen }" v-on:click="(langOpen)?langOpen=false:langOpen=true">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" v-bind:aria-expanded="{ false: langOpen===0,true: langOpen===1 }">{{ $t("top.language") }} <span class="caret"></span></a>
            <ul class="dropdown-menu" style="text-align:center">
              <li><a href="#" v-on:click="langOpen==false,changeLang('en')">English</a></li>
              <li><a href="#" v-on:click="langOpen==false,changeLang('zh')">中文（简体）</a></li>
              <li><a href="#" v-on:click="langOpen==false,changeLang('zh')">中文（繁体）</a></li>
            </ul>
          </li>
          <li>
            <form class="navbar-form">
              <div class="form-group">
                <input id="searchInput" type="text" class="form-control" v-model='searchword' v-bind:placeholder='$t("top.searchPlaceholder")'>
              </div>
              <button id="topbtn" type="button" class="btn btn-default btn-primary" @click='searchData'>{{$t("top.search")}}</button>
            </form>
          </li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>

<script>
import axios from 'axios'
export default {
  components: {
  },
  data(){
    return {
      tab:0,
      langOpen:false,
      collapseOpen:false,
      searchword:'',
      dataList:[]
    }
  },
  methods:{
    changeLang:function(lang){
      this.$i18n.locale=lang;
    },
    searchData:function(){
      if (this.searchword.trim()=='') {
        this.$router.replace('/')
      }else {
        this.$router.replace('/topsearch/'+this.searchword)
      }

    }
  },
}

</script>

<style scoped>

/*
背景底色 #21252b
导航底色 #282c34
按钮底色 #444A58
按钮按下 #383c4a
选中蓝色 #5294e2
输入背景 #282c34
字体白色 #9d9d9d
字体蓝色 #61afef
字体绿色 #98c379
*/
a{
  text-decoration: none;
}
.navbar-inverse {
  background-color: #282c34;
  border: 0px;
  border-color: #282c34;
  font-weight: bold !important;
}

.navbar-inverse .navbar-nav>.active>a, .navbar-inverse .navbar-nav>.active>a:focus, .navbar-inverse .navbar-nav>.active>a:hover {
  background-color: #21252b;
}

/*dropdown menu*/
.navbar-inverse .navbar-nav>.open>a, .navbar-inverse .navbar-nav>.open>a:focus, .navbar-inverse .navbar-nav>.open>a:hover{
  background-color: #21252b;
}
.dropdown-menu li :hover { background-color: #5294e2}

.navbar-inverse .navbar-toggle {
  border-color: #444A58;
}

.navbar-inverse .navbar-toggle:hover{
  background-color: #282c34;
}

.dropdown-menu{background-color: #383c4a;border-color:#626773;border-radius: 0px;}
.dropdown-menu>li>a {color: #fff;}
.open{display:block}

#searchInput{background-color: #282c34;color:#9d9d9d;border-color: #9d9d9d;}
#topbtn{background-color: #282c34;border-color: #9d9d9d; color: #9d9d9d}
#topbtn:hover{ background-color: #383c4a;color: white;}
</style>
