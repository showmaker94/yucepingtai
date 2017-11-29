<template lang="html">
  <div class="">
    <contractbet :contract_id="$route.params.contract_id"></contractbet>
  </div>

</template>

<script>
import contractbet from "./format/contractbet.vue"
export default {
  components:{
    contractbet
  }
}
</script>

<style lang="css">
  hr {margin-top:0px;margin-bottom: 10px;border:1px #9d9d9d solid; }
  .text { padding : 3px; }

  .title{font-weight: bold;text-align: left;}
</style>
