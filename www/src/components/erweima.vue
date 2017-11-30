<template lang="html">
  <div class="">
    123
    <qr-code
    text="https://goo.gl/9eIWP9"
    size="100"
    color="#f1c40f"
    bg-color="#3498db"
    error-level="L">
</qr-code>
  </div>

</template>

<script>
import qrCode from 'vue-qrcode-component/src/QRCode.vue'
export default {
  components:{
    qrCode
  }
}
</script>

<style lang="css">

</style>
