<template>
  <div id="app">
    <top></top>
    <!-- start content -->
    <div class="container">
      <div class="row">
        <!-- start left sidebar -->
        <div class="col-md-3 col-sm-3 col-md-3 col-lg-3 hidden-xs">
          <leftside></leftside>
        </div>
        <!-- end left sidebar -->
        <!-- start main content -->
        <div class="col-sm-6 col-md-6 col-lg-6">
          <router-view/>
        </div>
        <!-- end main content -->
        <!-- start right sidebar -->
        <div class="col-md-3 col-sm-3 col-md-3 col-lg-3 hidden-xs">
          <rightside></rightside>
        </div>
        <!-- end right sidebar -->
      </div>
    </div>
    <!-- end content -->
    <bottom></bottom>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import top from "./components/layout/top.vue"
import bottom from "./components/layout/bottom.vue"
import leftside from "./components/LeftSide.vue"
import rightside from "./components/RightSide.vue"

export default {
  name: 'app',
  components:{
    top,
    bottom,
    leftside,
    rightside,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #9d9d9d;
}

*:focus {outline:none}

body {background-color: #21252b;}
</style>
