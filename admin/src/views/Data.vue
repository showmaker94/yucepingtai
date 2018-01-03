<template lang="html">
  <div>
    <table class="table">
      <thead>
        <tr>
          <td>id</td>
          <td style="width:'200px'">标题</td>
          <td>创建时间</td>
          <td>bet</td>
          <td>开始时间</td>
          <td>确认通过</td>
          <td>状态</td>
          <td>信息管理</td>
          <td>管理投注</td>
          <td>删除</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for='(item,index) in dataList'>
          <td>{{item._id}}</td>
          <td>{{item.title}}</td>
          <td>{{item.cretime}}</td>
          <td>{{item.bet}}</td>
          <td><input :id='"begindate"+index' type="text" name="" value="" v-model='item.begindate' @blur='setbegindate("begindate"+index)'></td>
          <td>
            <select :id='"select"+index' class="" name="isok" v-model="item.isok" @change='changeok("select"+index)'>

              <option value="1">通过</option>
              <option value="0">未通过</option>
            </select>
          </td>
          <td>
            <select :id='"selectstatus"+index' class="" name="status" v-model="item.currentstatus" @change='changestatus("selectstatus"+index)'>
              <option value="0">new</option>
              <option value="1">closing</option>
              <option value="2">closed</option>
              <option value="3">resolved</option>
            </select>
          </td>

          <td><button :id='"modify"+index' type="button" name="button" @click='modify("modify"+index)'>标题/描述管理</button></td>

          <td><button :id='"manage"+index' type="button" name="button" @click='linkto("manage"+index)'>管理投注</button></td>
          <td><button :id='"remove"+index' type="button" name="button" @click='remove("remove"+index)'>确认删除</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
    export default{
        data(){
            return{
                dataList:[],
                isok:'',
                status:'',
                id:''
            }
        },
        mounted(){
          this.showAllTitle()
        },
        methods:{
          showAllTitle(){
            this.$http.get('api/showAllContracts',{
              params:{
                obj1:{},
                obj2:{'cretime':-1}
              }
            }).then((res)=>{
            this.dataList=res.data
          })
          },
          changeok(id){
            var contract_id=document.getElementById(id).parentNode.parentNode.firstChild.innerHTML;
            var isok=document.getElementById(id).value;
            this.$http.get('api/updateContractIsOk',{
              params:{
                contract_id:contract_id,
                isok:isok
              }
            }).then((res)=>{
              if (res.data==null) {
                alert("修改失败")
              }else {
                alert("修改成功")
              }
            // this.dataList=res.data;

          })
        },
        changestatus(id){
          var contract_id=document.getElementById(id).parentNode.parentNode.firstChild.innerHTML;
          var currentstatus=document.getElementById(id).value;
          this.$http.get('api/updateContractStatus',{
            params:{
              contract_id:contract_id,
              currentstatus:currentstatus
            }
          }).then((res)=>{
            // console.log(res.data);
          if (res.data==null) {
            alert("修改失败")
          }else {
            alert("修改成功")
          }
        })
      },
      linkto(id){
        var contract_id=document.getElementById(id).parentNode.parentNode.firstChild.innerHTML;
        this.$router.push('/data/'+contract_id)
      },
      modify(id){
        var contract_id=document.getElementById(id).parentNode.parentNode.firstChild.innerHTML;
        this.$router.push('/modify/'+contract_id)
      },
      remove(id){
        var r=confirm("确定要删除吗？")
        if (r==true) {
          var contract_id=document.getElementById(id).parentNode.parentNode.firstChild.innerHTML;
          this.$http.get('remove',{
            params:{
              contract_id:contract_id
            }
          }).then((res)=>{
          if (res.data==null) {
            alert("修改失败")
            this.$router.push("/data")
          }else {
            alert("修改成功")
          }
        })
        this.showAllTitle();
      }
      else {
        return false
      }
    },
      setbegindate(id){
        var contract_id=document.getElementById(id).parentNode.parentNode.firstChild.innerHTML;
        var begindate=document.getElementById(id).value;
        this.$http.get('api/updateContractBeginDate',{
          params:{
            contract_id:contract_id,
            begindate:begindate
          }
        }).then((res)=>{
          console.log(res);
        if (res.data==null) {
          alert("修改失败")
        }
      })
      }

      }
    }

</script>

<style lang="css">
table{
  text-align: left;
}
</style>
