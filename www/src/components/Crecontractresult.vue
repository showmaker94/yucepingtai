<template lang="html">
  <div class="contract-wrapper">
    <div class="panel panel-default">
      <div class="panel-body">
        <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>创建合同成功，您的合同正在等待审核！
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-body">
          <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>请将您的押注发送到下方地址：
        <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
      </div>
    </div>
    <h4 class="title">最新50个合同</h4>
    <hr>
    <div class="new50">
      <table class="table table-hover">
        <thead>
          <tr>
            <td>日期</td>
            <td>状态</td>
            <td>标题/理由</td>
            <td>押注</td>
          </tr>
        </thead>
        <tr>
          <td>30-10-2017</td>
          <td>待审核</td>
          <td>x嘻嘻嘻嘻选项、。。</td>
          <td>0.000001BTC</td>
        </tr>
        <tr>
          <td>30-10-2017</td>
          <td>待审核</td>
          <td>x嘻嘻嘻嘻选项、。。</td>
          <td>0.000001BTC</td>
        </tr>
        <tr>
          <td>30-10-2017</td>
          <td>待审核</td>
          <td>x嘻嘻嘻嘻选项、。。</td>
          <td>0.000001BTC</td>
        </tr>
        <tr>
          <td>30-10-2017</td>
          <td>待审核</td>
          <td>x嘻嘻嘻嘻选项、。。</td>
          <td>0.000001BTC</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
hr {margin-top:0px;margin-bottom: 10px;border:1px #9d9d9d solid; }
.text { padding : 3px; }
.title{font-weight: bold;text-align: left;}
.panel{background-color: #21252b}
</style>
