webpackJsonp([1],{"1z1g":function(t,e){},AWGZ:function(t,e){},CqKD:function(t,e){},E1wy:function(t,e){},NHnr:function(t,e,a){"use strict";function n(t){a("CqKD")}function o(t){a("ZCvo")}function s(t){a("1z1g")}function i(t){a("AWGZ")}function l(t){a("x1pw")}function r(t){a("E1wy")}Object.defineProperty(e,"__esModule",{value:!0});var c=a("7+uW"),u=(a("qb6w"),{}),d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3 col-sm-3 col-md-3 col-lg-3"},[a("h3",[t._v("let`s bet 后台管理")])]),t._v(" "),a("div",{staticClass:"col-md-3 col-sm-3 col-md-3 col-lg-3"}),t._v(" "),a("div",{staticClass:"col-md-3 col-sm-3 col-md-3 col-lg-3"}),t._v(" "),a("div",{staticClass:"col-md-3 col-sm-3 col-md-3 col-lg-3"})])])}],v={render:d,staticRenderFns:m},p=v,_=a("VU/8"),f=n,h=_(u,p,!1,f,null,null),g=h.exports,b={name:"app",components:{top:g}},y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("top"),t._v(" "),a("keep-alive",[a("router-view")],1)],1)},C=[],w={render:y,staticRenderFns:C},x=w,E=a("VU/8"),N=o,I=E(b,x,!1,N,null,null),k=I.exports,T=a("/ocq"),$=a("mtWM"),B=a.n($),P={data:function(){return{username:"",password:"",tishi:"",showTishi:"fasle"}},mounted:function(){},methods:{login:function(){var t=this;if(""==this.username.trim()||""==this.password.trim())alert("请输入用户名或密码");else{var e={username:this.username,password:this.password};B.a.post("http://localhost:3000/checkuser",e).then(function(e){"-1"==e.data?(t.tishi="该用户不存在",t.showTishi=!0):"0"==e.data?(t.tishi="密码输入错误",t.showTishi=!0):"admin"==e.data?t.$router.push("/data"):(t.tishi="登录成功",t.showTishi=!0,t.$router.push("/data"))})}}}},L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login"},[a("h1",[t._v("登录系统")]),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3 col-lg-3"}),t._v(" "),a("div",{staticClass:"col-md-6 col-sm-12 col-lg-6"},[a("form",{staticClass:"form-horizontal"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-sm-2 control-label",attrs:{for:"inputEmail3"}},[t._v("用户名")]),t._v(" "),a("div",{staticClass:"col-sm-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",id:"inputEmail3",placeholder:"username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:t.showTishi,expression:"showTishi"}]},[t._v(t._s(t.tishi))])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-sm-2 control-label",attrs:{for:"inputPassword3"}},[t._v("密码")]),t._v(" "),a("div",{staticClass:"col-sm-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword3",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group"},[a("div",{staticClass:"col-sm-offset-2 col-sm-10"},[a("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:t.login}},[t._v("Sign in")])])])])]),t._v(" "),a("div",{staticClass:"col-md-3 col-sm-12 col-lg-3"})])])])},A=[],j={render:L,staticRenderFns:A},H=j,M=a("VU/8"),S=s,D=M(P,H,!1,S,null,null),F=D.exports,R={data:function(){return{dataList:[],isok:"",status:"",id:""}},mounted:function(){this.showAllTitle()},methods:{showAllTitle:function(){var t=this;B.a.get("http://localhost:3000/api/showAllContracts",{params:{obj1:{},obj2:{cretime:-1}}}).then(function(e){t.dataList=e.data})},changeok:function(t){var e=document.getElementById(t).parentNode.parentNode.firstChild.innerHTML,a=document.getElementById(t).value;B.a.get("http://localhost:3000/api/updateContractIsOk",{params:{contract_id:e,isok:a}}).then(function(t){null==t.data?alert("修改失败"):alert("修改成功")})},changestatus:function(t){var e=document.getElementById(t).parentNode.parentNode.firstChild.innerHTML,a=document.getElementById(t).value;B.a.get("http://localhost:3000/api/updateContractStatus",{params:{contract_id:e,currentstatus:a}}).then(function(t){console.log(t.data),null==t.data?alert("修改失败"):alert("修改成功")})},linkto:function(t){var e=document.getElementById(t).parentNode.parentNode.firstChild.innerHTML;this.$router.push("/data/"+e)},modify:function(t){var e=document.getElementById(t).parentNode.parentNode.firstChild.innerHTML;this.$router.push("/modify/"+e)},remove:function(t){var e=this;if(1!=confirm("确定要删除吗？"))return!1;var a=document.getElementById(t).parentNode.parentNode.firstChild.innerHTML;B.a.get("http://localhost:3000/remove",{params:{contract_id:a}}).then(function(t){null==t.data?(alert("修改失败"),e.$router.push("/data")):alert("修改成功")}),this.showAllTitle()},setbegindate:function(t){var e=document.getElementById(t).parentNode.parentNode.firstChild.innerHTML,a=document.getElementById(t).value;B.a.get("http://localhost:3000/api/updateContractBeginDate",{params:{contract_id:e,begindate:a}}).then(function(t){console.log(t),null==t.data&&alert("修改失败")})}}},U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("table",{staticClass:"table"},[t._m(0),t._v(" "),a("tbody",t._l(t.dataList,function(e,n){return a("tr",[a("td",[t._v(t._s(e._id))]),t._v(" "),a("td",[t._v(t._s(e.title))]),t._v(" "),a("td",[t._v(t._s(e.cretime))]),t._v(" "),a("td",[t._v(t._s(e.bet))]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.begindate,expression:"item.begindate"}],attrs:{id:"begindate"+n,type:"text",name:"",value:""},domProps:{value:e.begindate},on:{blur:function(e){t.setbegindate("begindate"+n)},input:function(a){a.target.composing||t.$set(e,"begindate",a.target.value)}}})]),t._v(" "),a("td",[a("select",{directives:[{name:"model",rawName:"v-model",value:e.isok,expression:"item.isok"}],attrs:{id:"select"+n,name:"isok"},on:{change:[function(a){var n=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(e,"isok",a.target.multiple?n:n[0])},function(e){t.changeok("select"+n)}]}},[a("option",{attrs:{value:"1"}},[t._v("通过")]),t._v(" "),a("option",{attrs:{value:"0"}},[t._v("未通过")])])]),t._v(" "),a("td",[a("select",{directives:[{name:"model",rawName:"v-model",value:e.currentstatus,expression:"item.currentstatus"}],attrs:{id:"selectstatus"+n,name:"status"},on:{change:[function(a){var n=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(e,"currentstatus",a.target.multiple?n:n[0])},function(e){t.changestatus("selectstatus"+n)}]}},[a("option",{attrs:{value:"0"}},[t._v("new")]),t._v(" "),a("option",{attrs:{value:"1"}},[t._v("closing")]),t._v(" "),a("option",{attrs:{value:"2"}},[t._v("closed")]),t._v(" "),a("option",{attrs:{value:"3"}},[t._v("resolved")])])]),t._v(" "),a("td",[a("button",{attrs:{id:"modify"+n,type:"button",name:"button"},on:{click:function(e){t.modify("modify"+n)}}},[t._v("标题/描述管理")])]),t._v(" "),a("td",[a("button",{attrs:{id:"manage"+n,type:"button",name:"button"},on:{click:function(e){t.linkto("manage"+n)}}},[t._v("管理投注")])]),t._v(" "),a("td",[a("button",{attrs:{id:"remove"+n,type:"button",name:"button"},on:{click:function(e){t.remove("remove"+n)}}},[t._v("确认删除")])])])}))])])},V=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("td",[t._v("id")]),t._v(" "),a("td",{staticStyle:{width:"'200px'"}},[t._v("标题")]),t._v(" "),a("td",[t._v("创建时间")]),t._v(" "),a("td",[t._v("bet")]),t._v(" "),a("td",[t._v("开始时间")]),t._v(" "),a("td",[t._v("确认通过")]),t._v(" "),a("td",[t._v("状态")]),t._v(" "),a("td",[t._v("信息管理")]),t._v(" "),a("td",[t._v("管理投注")]),t._v(" "),a("td",[t._v("删除")])])])}],q={render:U,staticRenderFns:V},O=q,W=a("VU/8"),Z=i,z=W(R,O,!1,Z,null,null),G=z.exports,J={data:function(){return{dataList:[],title:this.$route.params.title,searchBetType:"",isout:0}},watch:{$route:"showAllData"},mounted:function(){this.showAllData()},methods:{showAllData:function(){var t=this;B.a.get("http://120.92.192.120:3000/api/searchBetById",{params:{contract_id:this.$route.params.contract_id,isok:""}}).then(function(e){t.dataList=e.data})},changeok:function(t){var e=document.getElementById(t).parentNode.parentNode.firstChild.innerHTML,a=document.getElementById(t).value;B.a.get("http://120.92.192.120:3000/api/updateBetStatus",{params:{time:e,isok:a}}).then(function(t){alert("修改成功")})},changejoin:function(t){var e=document.getElementById(t).parentNode.parentNode.firstChild.innerHTML,a=document.getElementById(t).value;B.a.get("http://120.92.192.120:3000/api/updateBetJoinStatus",{params:{time:e,isjoin:a}}).then(function(t){console.log(t),alert("修改成功")})},searchType:function(){var t=this;B.a.get("http://120.92.192.120:3000/api/searchType",{params:{type:this.searchBetType,contract_id:this.$route.params.contract_id}}).then(function(e){t.dataList=e.data})},sendcoin:function(t){var e=this,t=document.getElementById(t).parentNode.parentNode.firstChild.innerHTML,a={id:t};B.a.post("http://120.92.192.120:3000/api/sendcoin",a).then(function(t){console.log(t),"outed"==t.data?alert("已经返过币了！！！！！"):"outok"==t.data?alert("返币成功！"):alert(t.data),e.$router.go(0)})}}},K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("div",{},[a("h3",[t._v("管理投注："+t._s(t.title))]),t._v(" "),a("div",{staticStyle:{padding:"20px"}},[a("span",[t._v("押注类型")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchBetType,expression:"searchBetType"}],attrs:{type:"text",name:""},domProps:{value:t.searchBetType},on:{input:[function(e){e.target.composing||(t.searchBetType=e.target.value)},t.searchType]}})])]),t._v(" "),a("table",{staticClass:"table"},[t._m(0),t._v(" "),a("tbody",t._l(t.dataList,function(e,n){return a("tr",[a("td",[t._v(t._s(e._id))]),t._v(" "),a("td",[t._v(t._s(e.time))]),t._v(" "),a("td",[t._v(t._s(e.bet))]),t._v(" "),a("td",[t._v(t._s(e.innum))]),t._v(" "),a("td",[t._v(t._s(e.inaddr))]),t._v(" "),a("td",[a("select",{directives:[{name:"model",rawName:"v-model",value:e.isok,expression:"item.isok"}],attrs:{id:"select"+n,name:""},on:{change:[function(a){var n=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(e,"isok",a.target.multiple?n:n[0])},function(e){t.changeok("select"+n)}]}},[a("option",{attrs:{value:"1"}},[t._v("通过")]),t._v(" "),a("option",{attrs:{value:"0"}},[t._v("未通过")])])]),t._v(" "),a("td",[a("select",{directives:[{name:"model",rawName:"v-model",value:e.isjoin,expression:"item.isjoin"}],attrs:{id:"join"+n,name:""},on:{change:[function(a){var n=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(e,"isjoin",a.target.multiple?n:n[0])},function(e){t.changejoin("join"+n)}]}},[a("option",{attrs:{value:"1"}},[t._v("汇总")]),t._v(" "),a("option",{attrs:{value:"0"}},[t._v("分离")])])]),t._v(" "),a("td",[t._v(t._s(e.outaddr))]),t._v(" "),a("td",[t._v(t._s(e.outnum))]),t._v(" "),a("td",[a("button",{attrs:{id:"button"+n,type:"button",name:"button",disabled:1==e.isout},on:{click:function(e){t.sendcoin("button"+n)}}},[t._v("反币")])])])}))])])},Y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("td",[t._v("id")]),t._v(" "),a("td",[t._v("创建时间")]),t._v(" "),a("td",[t._v("押注")]),t._v(" "),a("td",[t._v("押入数量")]),t._v(" "),a("td",[t._v("押入地址")]),t._v(" "),a("td",[t._v("确认")]),t._v(" "),a("td",[t._v("汇总/分离")]),t._v(" "),a("td",[t._v("反币地址")]),t._v(" "),a("td",[t._v("反币数量")]),t._v(" "),a("td",[t._v("是否反币")])])])}],Q={render:K,staticRenderFns:Y},X=Q,tt=a("VU/8"),et=l,at=tt(J,X,!1,et,null,null),nt=at.exports,ot={data:function(){return{title:"",des:"",nobetnum:"",totalnobet:"",yesbetnum:"",totalyesbet:"",totalbetnum:"",totalbet:""}},mounted:function(){this.sesrchdes()},methods:{sesrchdes:function(){var t=this;B.a.get("http://localhost:3000/search",{params:{type:"0",contract_id:this.$route.params.contract_id}}).then(function(e){t.des=e.data[0].des,t.title=e.data[0].title,t.nobetnum=e.data[0].nobetnum,t.totalnobet=e.data[0].totalnobet,t.yesbetnum=e.data[0].yesbetnum,t.totalyesbet=e.data[0].totalbetnum,t.totalbetnum=e.data[0].totalbetnum,t.totalbet=e.data[0].totalbet})},modify:function(){var t={contract_id:this.$route.params.contract_id,title:this.title,des:this.des,nobetnum:this.nobetnum,totalnobet:this.totalnobet,yesbetnum:this.yesbetnum,totalyesbet:this.totalyesbet,totalbetnum:this.totalbetnum,totalbet:this.totalbet};console.log(t),B.a.post("http://localhost:3000/modify",t).then(function(t){t?alert("修改成功"):alert("修改失败")})}}},st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12 col-md-3 col-lg-3"}),t._v(" "),a("div",{staticClass:"col-sm-12 col-md-6 col-lg-6"},[a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputEmail1"}},[t._v("标题")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputPassword1"}},[t._v("描述")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.des,expression:"des"}],staticClass:"form-control",attrs:{rows:"14",cols:"60"},domProps:{value:t.des},on:{input:function(e){e.target.composing||(t.des=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputEmail1"}},[t._v("买NO的次数")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.nobetnum,expression:"nobetnum"}],staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1"},domProps:{value:t.nobetnum},on:{input:function(e){e.target.composing||(t.nobetnum=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputEmail1"}},[t._v("买NO的总币数")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.totalnobet,expression:"totalnobet"}],staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1"},domProps:{value:t.totalnobet},on:{input:function(e){e.target.composing||(t.totalnobet=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputEmail1"}},[t._v("买YES的次数")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.yesbetnum,expression:"yesbetnum"}],staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1"},domProps:{value:t.yesbetnum},on:{input:function(e){e.target.composing||(t.yesbetnum=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputEmail1"}},[t._v("买YES的总币数")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.totalyesbet,expression:"totalyesbet"}],staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1"},domProps:{value:t.totalyesbet},on:{input:function(e){e.target.composing||(t.totalyesbet=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputEmail1"}},[t._v("总押注数")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.totalbetnum,expression:"totalbetnum"}],staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1"},domProps:{value:t.totalbetnum},on:{input:function(e){e.target.composing||(t.totalbetnum=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputEmail1"}},[t._v("币总数")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.totalbet,expression:"totalbet"}],staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1"},domProps:{value:t.totalbet},on:{input:function(e){e.target.composing||(t.totalbet=e.target.value)}}})]),t._v(" "),a("button",{staticClass:"btn btn-default",staticStyle:{float:"right"},attrs:{type:"button"},on:{click:function(e){t.modify()}}},[t._v("修改")])])]),t._v(" "),a("div",{staticClass:"col-sm-12 col-md-3 col-lg-3"})])])},it=[],lt={render:st,staticRenderFns:it},rt=lt,ct=a("VU/8"),ut=r,dt=ct(ot,rt,!1,ut,null,null),mt=dt.exports;c.a.use(T.a);var vt=new T.a({routes:[{path:"/",name:"login",component:F},{path:"/data",name:"data",component:G},{path:"/data/:contract_id",name:"betrecord",component:nt},{path:"/modify/:contract_id",name:"modify",component:mt}]});c.a.config.productionTip=!1,new c.a({el:"#app",router:vt,template:"<App/>",components:{App:k}})},ZCvo:function(t,e){},qb6w:function(t,e){},x1pw:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b7059205413be64bec23.js.map