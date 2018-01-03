<template>
<nav class="navbar navbar-inverse navbar-static-bottom" >
  <p class="left">
                © POWERED BY TINY-CALF 2017
                <a href="http://coinbet.com">COINBET.COM</a>
  </p>
</nav>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'


export default {
  components: {
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
字体白色 #abb2bf
*/
.navbar-inverse {
  background-color: #282c34;
  border:0px;
  border-color: #282c34;
  color:#abb2bf;

}

p{text-align: center;line-height:50px;height: 50px;margin:0px;font-weight: bold;}

.navbar-inverse .navbar-nav>.active>a, .navbar-inverse .navbar-nav>.active>a:focus, .navbar-inverse .navbar-nav>.active>a:hover {
  background-color: #21252b;
  width: 100%;
}
.navbar{margin-bottom:0px;  position: fixed;
  bottom:0;width: 100%;}



</style>
