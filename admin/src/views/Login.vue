<template lang="html">
  <div class="login">
    <h1>登录系统</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-lg-3">

        </div>
        <div class="col-md-6 col-sm-12 col-lg-6">
          <form class="form-horizontal">
            <div class="form-group">
              <label for="inputEmail3" class="col-sm-2 control-label">用户名</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="inputEmail3" placeholder="username" v-model='username'>
              </div>
              <p v-show="showTishi">{{tishi}}</p>
            </div>
            <div class="form-group">
              <label for="inputPassword3" class="col-sm-2 control-label">密码</label>
              <div class="col-sm-10">
                <input type="password" class="form-control" id="inputPassword3" placeholder="Password" v-model='password'>
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-offset-2 col-sm-10">
                <button type="button" class="btn btn-default" @click='login'>Sign in</button>
              </div>
            </div>
          </form>
        </div>
        <div class="col-md-3 col-sm-12 col-lg-3">

        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  data(){
    return{
      username:'',
      password:'',
      tishi:'',
      showTishi:'fasle'
    }
  },
  mounted(){

  },
  methods:{
      login(){
          if(this.username.trim() == "" || this.password.trim() == ""){
              alert("请输入用户名或密码")
          }else{
              let data = {'username':this.username,'password':this.password}
              /*接口请求*/
              this.$http.post('checkuser',data).then((res)=>{
                  // console.log(res)
               /*接口的传值是(-1,该用户不存在),(0,密码错误)，同时还会检测管理员账号的值*/
                if(res.data == '-1'){
                    this.tishi = "该用户不存在";
                    this.showTishi = true;
                }else if(res.data == '0'){
                    this.tishi = "密码输入错误"
                    this.showTishi = true
                }else if(res.data == 'admin'){
                /*路由跳转this.$router.push*/
                    this.$router.push('/data')
                }else{
                    this.tishi = "登录成功"
                    this.showTishi = true
                    this.$router.push('/data')
                }
            })
        }
      }
    }
}
</script>

<style lang="css">
*{
  text-align: center;
}
.login{
  margin-top:150px;
}
</style>
