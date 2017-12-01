<template>
  <div id="app">
    <top></top>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import top from './components/top.vue'
export default {
  name: 'app',
  components:{
    top
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  background: 
}
</style>
