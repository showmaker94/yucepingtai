<template>
<div class="">
  <h3>{{ $t("home.highroller") }}</h3><hr>
  <contract></contract>
  <contract></contract>
  <contract></contract>
  <h3>{{ $t("home.lastcomments") }}</h3><hr>
  <comment></comment>
  <comment></comment>
  <comment></comment>
</div>
</template>

<script>
import contract from "./format/lgContract.vue"
import comment from "./format/comment.vue"

export default {
  components:{
    contract,
    comment,
  },
}
</script>

<style scoped>
h3 {text-align: left;margin-top: 20px;margin-bottom: 0px;font-weight: bold;}
hr {margin-top:0px;margin-bottom: 10px;border:1px #9d9d9d solid; }
</style>
