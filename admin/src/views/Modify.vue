<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-3 col-lg-3">

      </div>
      <div class="col-sm-12 col-md-6 col-lg-6">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">标题</label>
            <input type="email" class="form-control" id="exampleInputEmail1" v-model='title'>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">描述</label>
            <textarea class="form-control" rows="14" cols="60" v-model='des'></textarea>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">买NO的次数</label>
            <input type="email" class="form-control" id="exampleInputEmail1" v-model='nobetnum'>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">买NO的总币数</label>
            <input type="email" class="form-control" id="exampleInputEmail1" v-model='totalnobet'>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">买YES的次数</label>
            <input type="email" class="form-control" id="exampleInputEmail1" v-model='yesbetnum'>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">买YES的总币数</label>
            <input type="email" class="form-control" id="exampleInputEmail1" v-model='totalyesbet'>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">总押注数</label>
            <input type="email" class="form-control" id="exampleInputEmail1" v-model='totalbetnum'>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">币总数</label>
            <input type="email" class="form-control" id="exampleInputEmail1" v-model='totalbet'>
          </div>
            <button type="button" style="float:right" class="btn btn-default" @click='modify()'>修改</button>
        </form>
        <!-- <button type="button" name="button" style="float:right" @click='modify()'>修改</button> -->
      </div>
      <div class="col-sm-12 col-md-3 col-lg-3">

      </div>
    </div>

  </div>

</template>

<script>
export default {
  data(){
    return{
      title:'',
      des:'',
      nobetnum:'',
      totalnobet:'',
      yesbetnum:'',
      totalyesbet:'',
      totalbetnum:'',
      totalbet:''

    }
  },
  mounted(){
    this.sesrchdes()
  },
  methods:{
    sesrchdes(){
      this.$http.get('search',{
        params:{
          type:'0',
          contract_id:this.$route.params.contract_id
        }
      }).then((res)=>{
      // console.log(res);
      this.des=res.data[0].des;
      this.title=res.data[0].title
      this.nobetnum=res.data[0].nobetnum
      this.totalnobet=res.data[0].totalnobet
      this.yesbetnum=res.data[0].yesbetnum
      this.totalyesbet=res.data[0].totalbetnum
      this.totalbetnum=res.data[0].totalbetnum
      this.totalbet=res.data[0].totalbet
      })
    },
    modify(){
      let data = {'contract_id':this.$route.params.contract_id,
                  'title':this.title,
                  'des':this.des,
                  'nobetnum':this.nobetnum,
                  'totalnobet':this.totalnobet,
                  'yesbetnum':this.yesbetnum,
                  'totalyesbet':this.totalyesbet,
                  'totalbetnum':this.totalbetnum,
                  'totalbet':this.totalbet
                  }
      /*接口请求*/
      console.log(data);
      this.$http.post('modify',data).then((res)=>{
          // console.log(res)
          if(res){
            alert("修改成功")
          }else {
            alert("修改失败")
          }

    })
    }
  }
}
</script>

<style lang="css">
</style>
