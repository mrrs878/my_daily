(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-584b0ed8"],{"0fee":function(e,t,n){},1276:function(e,t,n){"use strict";var r=n("d784"),a=n("44e7"),s=n("825a"),c=n("1d80"),i=n("4840"),o=n("8aa5"),u=n("50c4"),l=n("14c3"),d=n("9263"),f=n("d039"),p=[].push,v=Math.min,h=4294967295,g=!f((function(){return!RegExp(h,"y")}));r("split",2,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(c(this)),s=void 0===n?h:n>>>0;if(0===s)return[];if(void 0===e)return[r];if(!a(e))return t.call(r,e,s);var i,o,u,l=[],f=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),v=0,g=new RegExp(e.source,f+"g");while(i=d.call(g,r)){if(o=g.lastIndex,o>v&&(l.push(r.slice(v,i.index)),i.length>1&&i.index<r.length&&p.apply(l,i.slice(1)),u=i[0].length,v=o,l.length>=s))break;g.lastIndex===i.index&&g.lastIndex++}return v===r.length?!u&&g.test("")||l.push(""):l.push(r.slice(v)),l.length>s?l.slice(0,s):l}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var a=c(this),s=void 0==t?void 0:t[e];return void 0!==s?s.call(t,a,n):r.call(String(a),t,n)},function(e,a){var c=n(r,e,this,a,r!==t);if(c.done)return c.value;var d=s(e),f=String(this),p=i(d,RegExp),b=d.unicode,m=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),k=new p(g?d:"^(?:"+d.source+")",m),S=void 0===a?h:a>>>0;if(0===S)return[];if(0===f.length)return null===l(k,f)?[f]:[];var x=0,T=0,w=[];while(T<f.length){k.lastIndex=g?T:0;var y,A=l(k,g?f:f.slice(T));if(null===A||(y=v(u(k.lastIndex+(g?0:T)),f.length))===x)T=o(f,T,b);else{if(w.push(f.slice(x,T)),w.length===S)return w;for(var j=1;j<=A.length-1;j++)if(w.push(A[j]),w.length===S)return w;T=x=y}}return w.push(f.slice(x)),w}]}),!g)},"1ce5":function(e,t,n){"use strict";var r=n("67e4"),a=n.n(r);a.a},"2b28":function(e,t,n){"use strict";n("68ef"),n("7c7f")},"2d9d":function(e,t,n){"use strict";n.r(t);var r,a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("van-nav-bar",{attrs:{"left-text":"任务详情","left-arrow":""},on:{"click-left":e.onNavBarClickLeft}}),n("van-pull-refresh",{on:{refresh:e.onRefresh},model:{value:e.isRefreshing,callback:function(t){e.isRefreshing=t},expression:"isRefreshing"}},[n("van-panel",{attrs:{title:e.task.title,desc:"更新时间: "+e.task.UpdatedAt,status:e.TASK_STATUS_VIEW[e.task.status]}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("van-cell",{attrs:{title:e.task.title,border:!0,value:e.TASK_STATUS_VIEW[e.task.status]}},[n("div",{staticClass:"panel-label",attrs:{slot:"label"},slot:"label"},e._l(e.task.label,(function(t,r){return n("van-tag",{key:r,attrs:{mark:"",type:"primary"}},[e._v(e._s(t))])})),1)])],1),n("div",[e._v(" "+e._s(e.task.detail)+" ")]),n("div",{staticClass:"panel-footer",attrs:{slot:"footer"},slot:"footer"},[n("van-button",{attrs:{size:"small",type:"danger"}},[e._v("删除")]),e.task.DeletedAt?e._e():n("div",[e.task.status!==e.TASK_STATUS.cancel?n("van-button",{attrs:{size:"small",type:"warning"},on:{click:function(t){return e.onStatusActionClick(e.TASK_STATUS.cancel)}}},[e._v("取消")]):e._e(),e.task.status!==e.TASK_STATUS.running?n("van-button",{attrs:{size:"small",type:"info"},on:{click:function(t){return e.onStatusActionClick(e.TASK_STATUS.running)}}},[e._v("进行中")]):e._e(),e.task.status!==e.TASK_STATUS.complete?n("van-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.onStatusActionClick(e.TASK_STATUS.complete)}}},[e._v("完成")]):e._e()],1)],1)]),n("van-divider",[e._v("更新时间："+e._s(e.task.UpdatedAt))])],1)],1)},s=[],c=(n("b0c0"),n("ac1f"),n("1276"),n("5530")),i=n("ade3"),o=(n("96cf"),n("1da1")),u=n("2b0e"),l=n("9fdd"),d=n("2241"),f=(n("e17f"),n("ea47")),p=(n("3647"),n("a3e2")),v=(n("5f1a"),n("58e6")),h=(n("ab71"),n("d399")),g=(n("e7e5"),n("9ed2")),b=(n("2b28"),n("2f62")),m=n("5c41"),k=n("4862"),S=n("93f3"),x=u["a"].extend({name:"taskDetail",data:function(){return{TASK_STATUS_VIEW:S["g"],TASK_STATUS:S["f"],task:new m["a"]((new Date).getTime(),"",[],S["f"].pending,""),isRefreshing:!1}},methods:{onStatusActionClick:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,d["a"].confirm({title:S["h"][e]});case 2:return n.next=4,k["a"].updateTaskStatus(t.task.ID,e);case 4:r=n.sent,Object(h["a"])(r.code===S["e"].success?"更新成功":r.msg),setTimeout((function(){return t.$router.back()}),2e3);case 7:case"end":return n.stop()}}),n)})))()},onRefresh:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,k["a"].refreshTask(e.task.ID);case 2:n=t.sent,Object(h["a"])(n.code===S["e"].success?"刷新成功":n.msg),e.isRefreshing=!1;case 5:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=l["a"](this.tasks[this.$route.params.id]);Array.isArray(e.label)||""===e.label||(e.label=e.label.split("#"),e.UpdatedAt=new Date(e.UpdatedAt).toLocaleString()),this.task=e},components:(r={},Object(i["a"])(r,f["a"].name,f["a"]),Object(i["a"])(r,p["a"].name,p["a"]),Object(i["a"])(r,v["a"].name,v["a"]),Object(i["a"])(r,g["a"].name,g["a"]),r),computed:Object(c["a"])({},Object(b["b"])(["tasks"]))}),T=x,w=(n("1ce5"),n("2877")),y=Object(w["a"])(T,a,s,!1,null,"5aca0820",null);t["default"]=y.exports},3647:function(e,t,n){"use strict";n("68ef"),n("9d70"),n("3743"),n("1a04"),n("5c56"),n("0fee")},4862:function(e,t,n){"use strict";n("d3b7"),n("96cf");var r=n("1da1"),a=(n("99af"),n("79f6")),s=n("0889"),c="".concat(a["a"],"/task"),i=function(e){return s["a"].post(c,e)},o=function(){return s["a"].get(c)},u=function(e){return s["a"].get("".concat(c,"/").concat(e))},l=function(e){return s["a"].delete("".concat(c,"/").concat(e))},d=function(e){return s["a"].put("".concat(c),e)},f=n("d399"),p=(n("e7e5"),n("0613")),v=n("93f3"),h=n("9f48"),g=n("fc60");t["a"]={addTask:function(e){return Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i(e);case 3:if(n=t.sent,n.code!==v["e"].success){t.next=7;break}return t.next=7,p["a"].dispatch(g["a"].addTask,n.data);case 7:return t.abrupt("return",Promise.resolve({code:n.code,msg:n.msg}));case 10:return t.prev=10,t.t0=t["catch"](0),console.log(t.t0),t.abrupt("return",Promise.resolve({code:v["e"].fail,msg:""}));case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))()},viewTasks:function(){return Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o();case 3:if(t=e.sent,t.code!==v["e"].success){e.next=7;break}return e.next=7,p["a"].dispatch(g["a"].updateTasks,t.data);case 7:return e.abrupt("return",Promise.resolve({code:t.code,msg:t.msg}));case 10:return e.prev=10,e.t0=e["catch"](0),console.log(e.t0),e.abrupt("return",Promise.resolve({code:v["e"].fail,msg:""}));case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))()},deleteTask:function(e){return Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l(e);case 3:if(n=t.sent,Object(f["a"])(n.msg),n.code===v["e"].success){t.next=7;break}return t.abrupt("return");case 7:return t.next=9,p["a"].dispatch(g["a"].delTask,e);case 9:t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](0),t.t0 instanceof h["a"]&&Object(f["a"])(t.t0.msg),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,11]])})))()},refreshTask:function(e){return Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u(e);case 3:if(n=t.sent,n.code!==v["e"].success){t.next=7;break}return t.next=7,p["a"].dispatch(g["a"].updateTask,n.data);case 7:return t.abrupt("return",Promise.resolve({code:n.code,msg:n.msg}));case 10:return t.prev=10,t.t0=t["catch"](0),console.log(t.t0),t.abrupt("return",Promise.resolve({code:v["e"].fail,msg:""}));case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))()},updateTaskStatus:function(e,t){return Object(r["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,d({id:e,status:t});case 3:if(r=n.sent,r.code!==v["e"].success){n.next=7;break}return n.next=7,p["a"].dispatch(g["a"].updateTask,r.data);case 7:return n.abrupt("return",Promise.resolve({code:r.code,msg:r.msg}));case 10:return n.prev=10,n.t0=n["catch"](0),console.log(n.t0),n.abrupt("return",Promise.resolve({code:v["e"].fail,msg:""}));case 14:case"end":return n.stop()}}),n,null,[[0,10]])})))()}}},"5c41":function(e,t,n){"use strict";var r=n("d4ec"),a=n("bee2"),s=n("93f3"),c=function(){function e(t,n,a,c,i){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:s["d"],u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"",l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"",d=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"";Object(r["a"])(this,e),this.alarmTime=t,this.detail=n,this.label=a,this.status=c,this.title=i,this.ID=o,this.CreatedAt=u,this.DeletedAt=l,this.UpdatedAt=d}return Object(a["a"])(e,[{key:"validate",value:function(){return this.title?this.detail?"number"!==typeof(arguments.length<=0?void 0:arguments[0])?"请传入正确的时间":this.alarmTime===(arguments.length<=0?void 0:arguments[0])?"请选择提醒时间":"":"请输入任务详情":"请输入任务标题"}}]),e}();t["a"]=c},"5f1a":function(e,t,n){"use strict";n("68ef"),n("9d70"),n("3743"),n("9b7e")},"67e4":function(e,t,n){},"7c7f":function(e,t,n){},"9b7e":function(e,t,n){},"9ed2":function(e,t,n){"use strict";var r=n("2638"),a=n.n(r),s=n("d282"),c=n("ba31"),i=Object(s["a"])("divider"),o=i[0],u=i[1];function l(e,t,n,r){var s;return e("div",a()([{attrs:{role:"separator"},style:{borderColor:t.borderColor},class:u((s={dashed:t.dashed,hairline:t.hairline},s["content-"+t.contentPosition]=n.default,s))},Object(c["b"])(r,!0)]),[n.default&&n.default()])}l.props={dashed:Boolean,hairline:{type:Boolean,default:!0},contentPosition:{type:String,default:"center"}},t["a"]=o(l)},"9fdd":function(e,t,n){"use strict";function r(e){return new RegExp(e.source,(e.global?"g":"")+(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.sticky?"y":"")+(e.unicode?"u":""))}function a(e){return null!=e&&"object"===typeof e&&!0===e["@@functional/placeholder"]}function s(e){return function t(n){return 0===arguments.length||a(n)?t:e.apply(this,arguments)}}var c=s((function(e){return null===e?"Null":void 0===e?"Undefined":Object.prototype.toString.call(e).slice(8,-1)})),i=c;function o(e,t,n,a){var s=function(r){var s=t.length,c=0;while(c<s){if(e===t[c])return n[c];c+=1}for(var i in t[c+1]=e,n[c+1]=r,e)r[i]=a?o(e[i],t,n,!0):e[i];return r};switch(i(e)){case"Object":return s({});case"Array":return s([]);case"Date":return new Date(e.valueOf());case"RegExp":return r(e);default:return e}}var u=s((function(e){return null!=e&&"function"===typeof e.clone?e.clone():o(e,[],[],!0)}));t["a"]=u},a3e2:function(e,t,n){"use strict";var r=n("2638"),a=n.n(r),s=n("d282"),c=n("ba31"),i=n("b1d2"),o=n("ad06"),u=Object(s["a"])("tag"),l=u[0],d=u[1];function f(e,t,n,r){var s,u,l=t.type,f=t.mark,p=t.plain,v=t.color,h=t.round,g=t.size,b=p?"color":"backgroundColor",m=(s={},s[b]=v,s);t.textColor&&(m.color=t.textColor);var k={mark:f,plain:p,round:h};g&&(k[g]=g);var S=t.closeable&&e(o["a"],{attrs:{name:"cross"},class:d("close"),on:{click:function(e){e.stopPropagation(),Object(c["a"])(r,"close")}}});return e("transition",{attrs:{name:t.closeable?"van-fade":null}},[e("span",a()([{key:"content",style:m,class:[d([k,l]),(u={},u[i["c"]]=p,u)]},Object(c["b"])(r,!0)]),[null==n.default?void 0:n.default(),S])])}f.props={size:String,mark:Boolean,color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean,type:{type:String,default:"default"}},t["a"]=l(f)},bee2:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return a}))},ea47:function(e,t,n){"use strict";var r=n("2638"),a=n.n(r),s=n("d282"),c=n("ba31"),i=n("b1d2"),o=n("7744"),u=n("34e9"),l=Object(s["a"])("panel"),d=l[0],f=l[1];function p(e,t,n,r){var s=function(){return[n.header?n.header():e(o["a"],{attrs:{icon:t.icon,label:t.desc,title:t.title,value:t.status,valueClass:f("header-value")},class:f("header")}),e("div",{class:f("content")},[n.default&&n.default()]),n.footer&&e("div",{class:[f("footer"),i["d"]]},[n.footer()])]};return e(u["a"],a()([{class:f(),scopedSlots:{default:s}},Object(c["b"])(r,!0)]))}p.props={icon:String,desc:String,title:String,status:String},t["a"]=d(p)}}]);
//# sourceMappingURL=chunk-584b0ed8.aaa590a2.js.map