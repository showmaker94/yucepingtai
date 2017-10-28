<template>
  <nav class="navbar navbar-inverse navbar-static-top">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">CoinBet</a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-left">
          <li v-bind:class="{ active: tab===1 }" v-on:click="tab=1"><a href="#">BROWSE CONTRACTS</a></li>
          <li v-bind:class="{ active: tab===2 }" v-on:click="tab=2"><a href="#">CREATE CONTRACT</a></li>
          <li v-bind:class="{ active: tab===3 }" v-on:click="tab=3"><a href="#">FAQ</a></li>
          <li v-bind:class="{ active: tab===4 }" v-on:click="tab=4"><a href="#">STATS</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Language <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">English</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">中文（简体）</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">中文（繁体）</a></li>
            </ul>
          </li>
          <form class="navbar-form navbar-right">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Keywords, addresses">
            </div>
            <button type="submit" class="btn btn-default btn-primary">Search</button>
          </form>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'


export default {
  components: {
  },
  data(){
    return {
      tab:1
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
*/

.navbar-inverse {
  background-color: #282c34;
  border:0px;
  border-color: #282c34;
}

.navbar-inverse .navbar-nav>.active>a, .navbar-inverse .navbar-nav>.active>a:focus, .navbar-inverse .navbar-nav>.active>a:hover {
  background-color: #21252b;
}

.navbar-inverse .navbar-toggle {
  border-color: #444A58;
  background-color: #444A58;
}

.navbar-inverse .navbar-toggle:hover{
  background-color: #282c34;
}

</style>
