<template>
  <!-- <a href="#"> -->
  <div class="">
    <div class="contract-wrapper">
      <div class="progress">
        <div class="yesbar bar" style="color:white;font-size:20px">{{totalyesbet}}BCC</div>
        <div class="nobar bar" style="color:white;font-size:20px">{{totalnobet}}BCC</div>
        <div class="leftbar bar" v-bind:style="{width: YP+'%'}"></div>
        <div class="rightbar bar" v-bind:style="{width: (100-YP)+'%'}"></div>
      </div>
      <div class="text">
        <h2 class="title">{{title}}</h2>
        <hr>
        <div class="">
          <p>{{des}}
          </p>
        </div>

      </div>
      <div class="bottom">
        <!-- <div class="bottom-left">Confirmed Bets: <b>54</b></div> -->
        <!-- <div class="bottom-right">Closing in: <b>6 months 1 week</b></div> -->
        <button type="button" name="button"  class="detailbtn detailbtny" @click="linkToyes()">YES</button>
        <button type="button" name="button" class="detailbtn detailbtnn"  @click="linkTono()">NO</button>
      </div>
    </div>
    <div class="contract-wrapper">
      <div class="">
        <div class="detail detail-left">
          <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>分类
        </div>
        <div class="detail detail-right">
            {{category}}
        </div>
      </div>
      <div class="">
        <div class="detail detail-left">
          <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>投注开始时间
        </div>
        <div class="detail detail-right">
            {{begindate}}
        </div>
      </div>
      <div class="">
        <div class="detail detail-left">
          <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>投注结束时间
        </div>
        <div class="detail detail-right">
            合约解决前 <b>{{bettingends}}</b>天
        </div>
      </div>
      <div class="">
        <div class="detail detail-left">
          <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>合约解决时间
        </div>
        <div class="detail detail-right">
            {{resdate}}
        </div>
      </div>
      <!-- <hr> -->
      <!-- <div class="">
        <div class="detail detail-left">
          <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>NO 的权重
        </div>
        <div class="detail detail-right">
            {{weightedno}}
        </div>
      </div>
      <div class="">
        <div class="detail detail-left">
          <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>YES 的权重
        </div>
        <div class="detail detail-right">
            {{weightedyes}}
        </div>
      </div>
      <div class="">
        <div class="detail detail-left">
          <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>当前 的权重
        </div>
        <div class="detail detail-right">
            {{currentweight}} （从1到100`000）
        </div>
      </div> -->
      <div class="">
        <div class="detail detail-left">
          <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>确认的投注
        </div>
        <div class="detail detail-right">
            {{totalbetnum}}（NO：{{nobetnum}}/YES：{{yesbetnum}}）
        </div>
        <hr>
        <div class="detail detail-left">
          <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>计算
        </div>
        <div class="detail detail-right">
            <p>投注 <input class="calinput" type="text" name="" value="" v-model='inval' v-on:input ="inputFunc">BCC</p>
            <p><b>YES </b>pays:<span>{{yesout}}</span></p>
            <p><b>NO </b>pays:<span>{{noout}}</span></p>
        </div>
      </div>
    </div>
      <h4 class="title">确认的投注共 <b>{{totalbet}}</b>BCC</h4>
    <div class="contract-wrapper">
      <div class="text" style="overflow:scroll;overflow-y:hidden">
        <table class="table table-condensed">
            <thead>
              <tr>
                <td>时间</td>
                <td>投注</td>
                <!-- <td>权重</td> -->
                <td>押入</td>
                <td>押入地址</td>
                <td>转出</td>
                <td>转出地址</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in bet">
                <td>{{item.time}}</td>
                <td>{{item.bet.toUpperCase()}}</td>
                <!-- <td>{{item.weight}}</td> -->
                <td>{{item.innum}}</td>
                <td>{{item.inaddr|cut4}}</td>
                <td>{{item.isout==1?item.outnum:""}}</td>
                <td>{{item.outaddr|cut4}}</td>
              </tr>
            </tbody>
        </table>
      </div>
    </div>
    <h4 class="title">评论</h4>
    <div class="comment-wrapper">
      <div class="who" v-for="item in comment">
        <b style="color: #98c379">{{item.name}}</b> post in:
        <b style="color: #61afef">{{title}}</b>
        <br>
        <b style="color: purple">time&nbsp;&nbsp;</b>{{item.time}}
        <hr>
        <div class="comment">
          {{item.comment}}
        <br>
        </div>
      </div>
      <div class="" style="padding:10px">
        <button type="button" name="button" class="pagebtn" @click="getPrePage">上一页</button>
        &nbsp;  &nbsp;  &nbsp;
        <button type="button" name="button" class="pagebtn" @click="getNextPage">下一页</button>
      </div>

    </div>
    <div class="contract-wrapper">
      <div class="text">
          <div class="commentname comment" style="text-align:left">
            <span>姓名</span>
            <input type="text" v-model="postmen">
          </div>
          <div class="commentcontent comment" style="text-align:left;">
            <span style="vertical-align:top">内容</span>
            <textarea name="name" id="contentarea" rows="6" cols="30" v-model="postcontent"></textarea>

          </div>
          <div class="">
            <button type="button" name="button" class="postbtn" @click="postcomment">提交</button>
          </div>

      </div>
    </div>
  </div>
  <!-- </a> -->
</template>

<script>
import axios from 'axios'
export default {
  props:['contract_id'],
  filters:{
    cut4:function(val){
      return val.slice(0,4);
    }
  },
  data:function(){
    return{
        title:'',
        des:'',
        category:'',
        begindate:'',
        resdate:'',
        bettingends:'',
        weightedyes:'',
        weightedno:'',
        currentweight:'',
        totalbetnum:'',
        yesbetnum:'',
        nobetnum:'',
        urltitle:'',
        time:'',
        bet:[],
        weight:'',
        innum:'',
        inaddr:'',
        outnum:'',
        outaddr:'',
        comment:[],
        postmen:'someone',
        postcontent:'',
        page:0,
        totalbet:'',
        totalyesbet:'',
        totalnobet:'',
        yesout:'',
        noout:'',
        inval:''
    }
  },
  components:{
  },
  computed:{
    YP:function(){
      return parseFloat(this.totalyesbet)/(parseFloat(this.totalnobet)+parseFloat(this.totalyesbet))*100;
    }
  },
  created(){
    this.searchData();
  },
  watch:{
    '$route'(to , from){
      this.searchData();
      this.searchComment();
      this.searchallbet()
    }
  },
  mounted:function(){
    this.searchComment(),
    this.searchallbet(),
    this.searchallbet()
  },
  methods:{
    inputFunc:function(){
      var that=this;
      axios.get('http://localhost:3000/api/searchContractById',{
        params:{
          contract_id:this.contract_id,
        }
      }).then(function(response){
        console.log(response.data[0].totalbet);
        console.log(response.data[0].totalyesbet);
        console.log(response.data[0].totalnobet);
        console.log(that.inval);
        that.yesout=(((Number(that.totalbet)+Number(that.inval))*0.98)/(Number(that.totalyesbet)+Number(that.inval))*Number(that.inval)).toFixed(5);
        that.noout=(((Number(that.totalbet)+Number(that.inval))*0.98)/(Number(that.totalnobet)+Number(that.inval))*Number(that.inval)).toFixed(5);

      })
    },
    linkToyes:function(){
      var contract_id=this.$route.params.contract_id;
      this.$router.push("/browse/detail/"+contract_id+"/yes");
    },
    linkTono:function(){
      var contract_id=this.$route.params.contract_id;
      this.$router.push("/browse/detail/"+contract_id+"/no");
    },
    searchData:function(){
      var that=this;
      axios.get('http://localhost:3000/api/searchContractById',{
        params:{
          contract_id:this.contract_id
        }
      }).then(function(response){
        // console.log(response);
        that.title=response.data[0].title;
        that.des=response.data[0].des;
        that.category=response.data[0].category;
        that.resdate=response.data[0].resdate;
        that.bettingends=response.data[0].bettingends;
        that.begindate=response.data[0].begindate;
        that.weightedyes=response.data[0].weightedyes;
        that.weightedno=response.data[0].weightedno;
        that.currentweight=response.data[0].currentweight;
        that.totalbetnum=response.data[0].totalbetnum;
        that.nobetnum=response.data[0].nobetnum;
        that.yesbetnum=response.data[0].yesbetnum;
        that.totalbet=response.data[0].totalbet;
        that.totalyesbet=response.data[0].totalyesbet;
        that.totalnobet=response.data[0].totalnobet;

      })
    },
    searchallbet:function(){
      var that=this;
      axios.get('http://localhost:3000/api/searchBetById',{
        params:{
          contract_id:this.contract_id,
          isok:'1'
        }
      }).then(function(response){
        that.bet=response.data;

      })
    },
    searchComment:function(){
      var that=this;
      axios.get('http://localhost:3000/api/searchCommentById',{
        params:{
          contract_id:this.contract_id,

        }
      }).then(function(response){
        that.comment=response.data.slice(0,4);

      })
    },
    postcomment:function(){
      var that=this;
      if (this.postcontent.trim()!='') {
        axios.get('http://localhost:3000/api/insertComment',{
          params:{
            postmen:this.postmen,
            postcontent:this.postcontent,
            contract_id:this.contract_id
          }
        });
        document.getElementById("contentarea").value="";
        this.postcontent="";
        this.postmen="someone";
        alert("提交成功！")
      }else {
        alert("请输入内容")
      }

    },
    getPrePage:function(){
      var that=this;
      axios.get('http://localhost:3000/api/searchCommentById',{
        params:{
          contract_id:this.contract_id
        }
      }).then(function(response){
        // console.log(response);
        if(that.page>0){
          that.page--;
          that.comment=response.data.slice(that.page*4,that.page*4+4>response.data.length?response.data.length:that.page*4+4);
        }else {
          alert("没有更多！")
        }
      })
    },
    getNextPage:function(){
      var that=this;
      axios.get('http://localhost:3000/api/searchCommentById',{
        params:{
          contract_id:this.contract_id
        }
      }).then(function(response){
        if(that.page < parseInt(response.data.length/4)){
          that.page++ ;
          that.comment=response.data.slice(that.page*4,that.page*4+4>response.data.length?response.data.length:that.page*4+4);
        }else {
          alert("没有更多！")
        }
      })
    }
  }
}
</script>

<style scoped>
/*
red  #e06c75
green #56b6c2
*/

div {margin:0;}

hr {margin :4px 0;border:1px #9d9d9d solid; }

.contract-wrapper{
  /*width:100%;*/
  border-radius: 4px;
  background-color: #282c34;
  margin-bottom: 20px;
}

.contract-wrapper:hover{
  cursor: pointer;
  transform:scale(1.03);
  -webkit-transform:scale(1.03);
  -moz-transform:scale(1.03);
  -o-transform:scale(1.03);
  -ms-transform:scale(1.03);
  box-shadow: 0 0 10px #61afef;
}

.progress{
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  color: white;
  height:40px;
  position: relative;
}

.bar {
  float:left;
  font-size: 18px;
  font-weight: bold;
  line-height: 40px;
}

.leftbar {
  width:50%;
  height: 40px;
  background-color: #e06c75;
  padding-left:4px;
  text-align: left;
}
.rightbar {
  width:50%;
  height: 40px;
  background-color: #56b6c2;
  padding-right:4px;
  text-align: right;
}
.yesbar{
  position: absolute;
  width: 50%;
  left: 0;
  top: 0;
  text-align: left;
  padding-left: 3px;
}

.nobar{
  position: absolute;
  width: 50%;
  right: 0;
  top: 0;
  text-align: right;
  padding-right: 3px;
}
.text { padding : 3px;}

.title{font-weight: bold}

/*p{padding:24px;font-size:18px;}*/

.bottom{padding:10px;}
.detailbtn{text-align: center;padding: 7px 5px;border: none;color: #ffffff}
.detailbtny {width:35%;display:inline-block;margin-right: 20px;background-color: #e06c75}
.detailbtnn {width:35%;display:inline-block;margin-left: 20px;background-color: #56b6c2}

</style>
<style scoped>
/*
red  #e06c75
green #56b6c2
*/

div {margin:0;}
.contract-wrapper{
  /*width:100%;*/
  border-radius: 4px;
  background-color: #282c34;
  margin-bottom: 20px;
}

.contract-wrapper:hover{
  cursor: pointer;
  transform:scale(1.03);
  -webkit-transform:scale(1.03);
  -moz-transform:scale(1.03);
  -o-transform:scale(1.03);
  -ms-transform:scale(1.03);
  box-shadow: 0 0 10px #61afef;
}
.detail{
  display: inline-block;
  padding: 10px;
  width: 40%;
}
.detail-left{
  text-align: left;
  vertical-align: top;

}
.detail-right{
  text-align: left;

}
.calinput{
  width: 50px;
  background: #282c34;
  border: 1px #9d9d9d solid;
  border-radius: 3px;
}

.who{
  padding: 4px 10px;
  text-align:left;
}

.comment {
  padding: 8px 8px;
  text-align:left;
}

.comment-wrapper{
  /*width:100%;*/
  border-radius: 4px;
  background-color: #282c34;
  margin-bottom: 10px;
}

.comment-wrapper:hover{
  cursor: pointer;
  transform:scale(1.03);
  -webkit-transform:scale(1.03);
  -moz-transform:scale(1.03);
  -o-transform:scale(1.03);
  -ms-transform:scale(1.03);
  box-shadow: 0 0 10px #61afef;
}
.comment input,.comment textarea{
  background: #282c34;
  border: 1px #9d9d9d solid;
  border-radius: 3px;
}
.postbtn{
  background: #282c34;
  border: 1px #9d9d9d solid;
  border-radius: 3px;
  vertical-align: bottom;
  margin-left: 70%

}
.pagebtn{
  background: #282c34;
  border: 1px #9d9d9d solid;
  border-radius: 3px;
}
</style>
