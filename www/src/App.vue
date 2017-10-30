<template>
  <div id="app">
    <top></top>
    <!-- start content -->
    <div class="container">
      <div class="row">
        <!-- start left sidebar -->
        <div class="col-md-2 col-sm-2 col-md-2 col-lg-2 hidden-xs">.col-md-1</div>
        <!-- end left sidebar -->
        <!-- start main content -->
        <div class="col-sm-8 col-md-8 col-lg-8">
          <img src="./assets/logo.png">
          <router-view/>
        </div>
        <!-- end main content -->
        <!-- start right sidebar -->
        <div class="col-md-2 col-sm-2 col-md-2 col-lg-2 hidden-xs">.col-md-1</div>
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

export default {
  name: 'app',
  components:{
    top,
    bottom,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

*:focus {outline:none}

body {
  background-color: #21252b;
}
</style>
