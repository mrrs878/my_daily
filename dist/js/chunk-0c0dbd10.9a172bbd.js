(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c0dbd10"],{"0fee":function(t,e,n){},1276:function(t,e,n){"use strict";var a=n("d784"),r=n("44e7"),i=n("825a"),s=n("1d80"),l=n("4840"),o=n("8aa5"),c=n("50c4"),u=n("14c3"),d=n("9263"),f=n("d039"),v=[].push,h=Math.min,p=4294967295,b=!f((function(){return!RegExp(p,"y")}));a("split",2,(function(t,e,n){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var a=String(s(this)),i=void 0===n?p:n>>>0;if(0===i)return[];if(void 0===t)return[a];if(!r(t))return e.call(a,t,i);var l,o,c,u=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,b=new RegExp(t.source,f+"g");while(l=d.call(b,a)){if(o=b.lastIndex,o>h&&(u.push(a.slice(h,l.index)),l.length>1&&l.index<a.length&&v.apply(u,l.slice(1)),c=l[0].length,h=o,u.length>=i))break;b.lastIndex===l.index&&b.lastIndex++}return h===a.length?!c&&b.test("")||u.push(""):u.push(a.slice(h)),u.length>i?u.slice(0,i):u}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var r=s(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,r,n):a.call(String(r),e,n)},function(t,r){var s=n(a,t,this,r,a!==e);if(s.done)return s.value;var d=i(t),f=String(this),v=l(d,RegExp),g=d.unicode,m=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(b?"y":"g"),k=new v(b?d:"^(?:"+d.source+")",m),S=void 0===r?p:r>>>0;if(0===S)return[];if(0===f.length)return null===u(k,f)?[f]:[];var T=0,y=0,A=[];while(y<f.length){k.lastIndex=b?y:0;var _,w=u(k,b?f:f.slice(y));if(null===w||(_=h(c(k.lastIndex+(b?0:y)),f.length))===T)y=o(f,y,g);else{if(A.push(f.slice(T,y)),A.length===S)return A;for(var x=1;x<=w.length-1;x++)if(A.push(w[x]),A.length===S)return A;y=T=_}}return A.push(f.slice(T)),A}]}),!b)},"1ce5":function(t,e,n){"use strict";var a=n("67e4"),r=n.n(a);r.a},"2b28":function(t,e,n){"use strict";n("68ef"),n("7c7f")},"2d9d":function(t,e,n){"use strict";n.r(e);var a,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("van-nav-bar",{attrs:{"left-text":"任务详情","left-arrow":""},on:{"click-left":t.onNavBarClickLeft}}),n("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isRefreshing,callback:function(e){t.isRefreshing=e},expression:"isRefreshing"}},[n("van-panel",{attrs:{title:t.task.title,desc:"更新时间: "+t.task.UpdatedAt,status:t.TASK_STATUS_VIEW[t.task.status]}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("van-cell",{attrs:{title:t.task.title,border:!0,value:t.TASK_STATUS_VIEW[t.task.status]}},[n("div",{staticClass:"panel-label",attrs:{slot:"label"},slot:"label"},t._l(t.task.label,(function(e,a){return n("van-tag",{key:a,attrs:{mark:"",type:"primary"}},[t._v(t._s(e))])})),1)])],1),n("div",[t._v(" "+t._s(t.task.detail)+" ")]),n("div",{staticClass:"panel-footer",attrs:{slot:"footer"},slot:"footer"},[n("van-button",{attrs:{size:"small",type:"danger"}},[t._v("删除")]),t.task.DeletedAt?t._e():n("div",[t.task.status!==t.TASK_STATUS.cancel?n("van-button",{attrs:{size:"small",type:"warning"},on:{click:function(e){return t.onStatusActionClick(t.TASK_STATUS.cancel)}}},[t._v("取消")]):t._e(),t.task.status!==t.TASK_STATUS.running?n("van-button",{attrs:{size:"small",type:"info"},on:{click:function(e){return t.onStatusActionClick(t.TASK_STATUS.running)}}},[t._v("进行中")]):t._e(),t.task.status!==t.TASK_STATUS.complete?n("van-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.onStatusActionClick(t.TASK_STATUS.complete)}}},[t._v("完成")]):t._e()],1)],1)]),n("van-divider",[t._v("更新时间："+t._s(t.task.UpdatedAt))])],1)],1)},i=[],s=(n("b0c0"),n("ac1f"),n("1276"),n("5530")),l=n("ade3"),o=(n("96cf"),n("1da1")),c=n("2b0e"),u=n("9fdd"),d=n("2241"),f=(n("e17f"),n("ea47")),v=(n("3647"),n("a3e2")),h=(n("5f1a"),n("58e6")),p=(n("ab71"),n("d399")),b=(n("e7e5"),n("9ed2")),g=(n("2b28"),n("2f62")),m=n("5c41"),k=n("4862"),S=n("93f3"),T=c["a"].extend({name:"taskDetail",data:function(){return{TASK_STATUS_VIEW:S["f"],TASK_STATUS:S["e"],task:new m["a"]((new Date).getTime(),"",[],S["e"].pending,""),isRefreshing:!1}},methods:{onStatusActionClick:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,d["a"].confirm({title:S["g"][t]});case 2:return n.next=4,k["a"].updateTaskStatus(e.task.ID,t);case 4:a=n.sent,Object(p["a"])(a.code===S["d"].success?"更新成功":a.msg),setTimeout((function(){return e.$router.back()}),2e3);case 7:case"end":return n.stop()}}),n)})))()},onRefresh:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,k["a"].refreshTask(t.task.ID);case 2:n=e.sent,Object(p["a"])(n.code===S["d"].success?"刷新成功":n.msg),t.isRefreshing=!1;case 5:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=u["a"](this.tasks[this.$route.params.id]);Array.isArray(t.label)||""===t.label||(t.label=t.label.split("#"),t.UpdatedAt=new Date(t.UpdatedAt).toLocaleString()),this.task=t},components:(a={},Object(l["a"])(a,f["a"].name,f["a"]),Object(l["a"])(a,v["a"].name,v["a"]),Object(l["a"])(a,h["a"].name,h["a"]),Object(l["a"])(a,b["a"].name,b["a"]),a),computed:Object(s["a"])({},Object(g["b"])(["tasks"]))}),y=T,A=(n("1ce5"),n("2877")),_=Object(A["a"])(y,r,i,!1,null,"5aca0820",null);e["default"]=_.exports},3647:function(t,e,n){"use strict";n("68ef"),n("9d70"),n("3743"),n("1a04"),n("5c56"),n("0fee")},"5c41":function(t,e,n){"use strict";var a=n("d4ec");function r(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}var s=n("93f3"),l=function(){function t(e,n,r,i,l){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:s["c"],c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"",u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"",d=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"";Object(a["a"])(this,t),this.alarmTime=e,this.detail=n,this.label=r,this.status=i,this.title=l,this.ID=o,this.CreatedAt=c,this.DeletedAt=u,this.UpdatedAt=d}return i(t,[{key:"validate",value:function(){return this.title?this.detail?"number"!==typeof(arguments.length<=0?void 0:arguments[0])?"请传入正确的时间":this.alarmTime===(arguments.length<=0?void 0:arguments[0])?"请选择提醒时间":"":"请输入任务详情":"请输入任务标题"}}]),t}();e["a"]=l},"5f1a":function(t,e,n){"use strict";n("68ef"),n("9d70"),n("3743"),n("9b7e")},"67e4":function(t,e,n){},"7c7f":function(t,e,n){},"9b7e":function(t,e,n){},"9ed2":function(t,e,n){"use strict";var a=n("2638"),r=n.n(a),i=n("d282"),s=n("ba31"),l=Object(i["a"])("divider"),o=l[0],c=l[1];function u(t,e,n,a){var i;return t("div",r()([{attrs:{role:"separator"},style:{borderColor:e.borderColor},class:c((i={dashed:e.dashed,hairline:e.hairline},i["content-"+e.contentPosition]=n.default,i))},Object(s["b"])(a,!0)]),[n.default&&n.default()])}u.props={dashed:Boolean,hairline:{type:Boolean,default:!0},contentPosition:{type:String,default:"center"}},e["a"]=o(u)},"9fdd":function(t,e,n){"use strict";function a(t){return new RegExp(t.source,(t.global?"g":"")+(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.sticky?"y":"")+(t.unicode?"u":""))}function r(t){return null!=t&&"object"===typeof t&&!0===t["@@functional/placeholder"]}function i(t){return function e(n){return 0===arguments.length||r(n)?e:t.apply(this,arguments)}}var s=i((function(t){return null===t?"Null":void 0===t?"Undefined":Object.prototype.toString.call(t).slice(8,-1)})),l=s;function o(t,e,n,r){var i=function(a){var i=e.length,s=0;while(s<i){if(t===e[s])return n[s];s+=1}for(var l in e[s+1]=t,n[s+1]=a,t)a[l]=r?o(t[l],e,n,!0):t[l];return a};switch(l(t)){case"Object":return i({});case"Array":return i([]);case"Date":return new Date(t.valueOf());case"RegExp":return a(t);default:return t}}var c=i((function(t){return null!=t&&"function"===typeof t.clone?t.clone():o(t,[],[],!0)}));e["a"]=c},a3e2:function(t,e,n){"use strict";var a=n("2638"),r=n.n(a),i=n("d282"),s=n("ba31"),l=n("b1d2"),o=n("ad06"),c=Object(i["a"])("tag"),u=c[0],d=c[1];function f(t,e,n,a){var i,c,u=e.type,f=e.mark,v=e.plain,h=e.color,p=e.round,b=e.size,g=v?"color":"backgroundColor",m=(i={},i[g]=h,i);e.textColor&&(m.color=e.textColor);var k={mark:f,plain:v,round:p};b&&(k[b]=b);var S=e.closeable&&t(o["a"],{attrs:{name:"cross"},class:d("close"),on:{click:function(t){t.stopPropagation(),Object(s["a"])(a,"close")}}});return t("transition",{attrs:{name:e.closeable?"van-fade":null}},[t("span",r()([{key:"content",style:m,class:[d([k,u]),(c={},c[l["c"]]=v,c)]},Object(s["b"])(a,!0)]),[null==n.default?void 0:n.default(),S])])}f.props={size:String,mark:Boolean,color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean,type:{type:String,default:"default"}},e["a"]=u(f)},ea47:function(t,e,n){"use strict";var a=n("2638"),r=n.n(a),i=n("d282"),s=n("ba31"),l=n("b1d2"),o=n("7744"),c=n("34e9"),u=Object(i["a"])("panel"),d=u[0],f=u[1];function v(t,e,n,a){var i=function(){return[n.header?n.header():t(o["a"],{attrs:{icon:e.icon,label:e.desc,title:e.title,value:e.status,valueClass:f("header-value")},class:f("header")}),t("div",{class:f("content")},[n.default&&n.default()]),n.footer&&t("div",{class:[f("footer"),l["d"]]},[n.footer()])]};return t(c["a"],r()([{class:f(),scopedSlots:{default:i}},Object(s["b"])(a,!0)]))}v.props={icon:String,desc:String,title:String,status:String},e["a"]=d(v)}}]);
//# sourceMappingURL=chunk-0c0dbd10.9a172bbd.js.map