(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f889076"],{"633d":function(e,t,r){"use strict";r("d3b7"),r("96cf");var a=r("1da1"),n=r("79f6"),c=r("0889"),s="".concat(n["a"],"/auth"),o=function(e){return c["a"].post("".concat(s,"/login"),e)},u=function(e){return c["a"].post("".concat(s,"/register"),e)},i=r("d399"),l=(r("e7e5"),r("93f3")),p=r("0613"),d=r("fc60"),f=r("2de2"),m=r("458f");t["a"]={login:function(e){return Object(a["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o(e);case 3:if(r=t.sent,Object(i["a"])(r.msg),r.code!==l["e"].success){t.next=9;break}return t.next=8,p["a"].dispatch(d["a"].updateUser,r.data);case 8:localStorage.setItem(f["a"].tokenName,r.data.token);case 9:return t.abrupt("return",Promise.resolve(r.code===l["e"].success));case 12:return t.prev=12,t.t0=t["catch"](0),console.log(t.t0),t.abrupt("return",Promise.resolve(!1));case 16:case"end":return t.stop()}}),t,null,[[0,12]])})))()},logout:function(){return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return localStorage.removeItem(f["a"].tokenName),e.next=3,p["a"].dispatch(d["a"].updateUser,new m["a"]);case 3:return e.next=5,p["a"].dispatch(d["a"].updateTasks,[]);case 5:return e.abrupt("return",Promise.resolve(!0));case 6:case"end":return e.stop()}}),e)})))()},register:function(e){return Object(a["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u(e);case 3:return r=t.sent,Object(i["a"])(r.msg),t.abrupt("return",Promise.resolve(r.code===l["e"].success));case 8:return t.prev=8,t.t0=t["catch"](0),console.log(t.t0),t.abrupt("return",Promise.resolve(!1));case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}},"935e":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("van-nav-bar",{attrs:{"left-text":"注册","left-arrow":""},on:{"click-left":e.onNavBarClickLeft}}),r("van-field",{attrs:{autofocus:"",clearable:"",placeholder:"请输入账号"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),r("van-field",{attrs:{type:"password",clearable:"",autosize:"",placeholder:"请输入密码"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("br"),r("br"),r("van-button",{staticClass:"login-btn",attrs:{size:"large",type:"primary"},on:{click:e.onRegBtnClick}},[e._v("注册")])],1)},n=[],c=(r("b0c0"),r("96cf"),r("1da1")),s=r("2b0e"),o=r("9f48"),u=r("d399"),i=(r("e7e5"),r("633d")),l=s["a"].extend({name:"register",data:function(){return{name:"",password:""}},methods:{onRegBtnClick:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,r=e.name,a=e.password,""!==r){t.next=4;break}throw new o["a"]("请输入账号");case 4:if(""!==a){t.next=6;break}throw new o["a"]("请输入密码");case 6:return u["a"].loading("注册中..."),t.next=9,i["a"].register({name:r,password:a});case 9:n=t.sent,n&&(u["a"].clear(!0),e.$router.back()),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](0),t.t0 instanceof o["a"]&&Object(u["a"])(t.t0.msg);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))()}}}),p=l,d=r("2877"),f=Object(d["a"])(p,a,n,!1,null,"62610865",null);t["default"]=f.exports}}]);
//# sourceMappingURL=chunk-5f889076.0abaaeda.js.map