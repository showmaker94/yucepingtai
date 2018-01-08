<template lang="html">
  <div class="">
    <div class="">
        <h3>管理投注：{{title}}</h3>
        <div class="" style="padding:20px">
          <span>押注类型</span><input type="text" name="" v-model="searchBetType" v-on:input='searchType'>
        </div>

    </div>


    <table class="table">
      <thead>
        <tr>
          <td>id</td>
          <td>创建时间</td>
          <td>押注</td>
          <td>押入数量</td>
          <td>押入地址</td>
          <td>确认</td>
          <td>汇总/分离</td>
          <td>反币地址</td>
          <td>反币数量</td>
          <td>是否反币</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for='(item,index) in dataList'>
          <td>{{item._id}}</td>
          <td>{{item.time}}</td>
          <td>{{item.bet}}</td>
          <!-- <td><input :id="'input'+index" type="text" name="" value="" v-model="item.innum" v-on:blur="" v-on:keyup.enter='saveProjectFun'></td> -->
          <td>{{item.innum}}</td>
          <td>{{item.inaddr}}</td>
          <td>
            <select :id='"select"+index' class="" name="" v-model="item.isok" @change='changeok("select"+index)'>
              <option value="1">通过</option>
              <option value="0">未通过</option>
            </select>
          </td>
          <td>
            <select :id='"join"+index' class="" name="" v-model="item.isjoin" @change='changejoin("join"+index)'>
              <option value="1">汇总</option>
              <option value="0">分离</option>
            </select>
          </td>
          <td>{{item.outaddr}}</td>
          <td>{{item.outnum}}</td>

          <td><button :id="'button'+index" type="button" name="button" :disabled="item.isout==1?true:false" @click="sendcoin('button'+index)">反币</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data(){
    return{
        dataList:[],
        title:this.$route.params.title,
        searchBetType:"",
        isout:0
    }
  },
  watch:{
    "$route":"showAllData"
  },
  mounted(){
    this.showAllData()
  },
  methods:{
    showAllData(){
      this.$http.get('api/searchBetById',{
        params:{
          contract_id:this.$route.params.contract_id,
          isok:''
        }
      }).then((res)=>{
      this.dataList=res.data;
      })
    },
    changeok(id){
      var betid=document.getElementById(id).parentNode.parentNode.firstChild.innerHTML;
      var isok=document.getElementById(id).value;
      // console.log(time);
      this.$http.get('api/updateBetStatus',{
        params:{
          betid:betid,
          isok:isok
        }
      }).then((res)=>{
        // console.log(res);
        if (res.data==null) {
          alert("修改失败")
        }else{
          alert("修改成功")
        }
        location.reload()
    })},
    changejoin(id){
      var time=document.getElementById(id).parentNode.parentNode.firstChild.innerHTML;
      var isjoin=document.getElementById(id).value;
      this.$http.get('api/updateBetJoinStatus',{
        params:{
          time:time,
          isjoin:isjoin
        }
      }).then((res)=>{
        console.log(res);
      alert("修改成功")
    })

  },
  searchType(){
    this.$http.get('api/searchType',{
      params:{
        type:this.searchBetType,
        contract_id:this.$route.params.contract_id,
      }
    }).then((res)=>{
      this.dataList=res.data;
  })
},
sendcoin(id){
  var id=document.getElementById(id).parentNode.parentNode.firstChild.innerHTML;
  let data = {'id':id}
  /*接口请求*/
  this.$http.post('api/sendcoin',data).then((res)=>{
    // console.log(res);
    if (res.data=='outed') {
      alert("已经返过币了！！！！！")
    }
    else if (res.data=='outok') {
      alert("返币成功！")
    }else {
      alert(res.data)
    }
    // this.$router.go(0)

})
}
},

}
</script>

<style lang="css">
</style>
