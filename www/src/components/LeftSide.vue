<template>
  <div class="">
    <h3>{{ $t("sides.new") }}</h3><hr>
    <contract></contract>
    <contract></contract>
    <contract></contract>
    <contract></contract>
    <h3>{{ $t("sides.closing") }}</h3><hr>
    <contract></contract>
    <contract></contract>
    <contract></contract>
    <contract></contract>
  </div>
</template>

<script>
import contract from "./format/mdContract.vue"

export default {
  components:{
    contract,
  },
}
</script>

<style scoped>
h3 {text-align: left;margin-top: 20px;margin-bottom: 0px;font-weight: bold;}
hr {margin-top:0px;margin-bottom: 10px;border:1px #9d9d9d solid; }

</style>
