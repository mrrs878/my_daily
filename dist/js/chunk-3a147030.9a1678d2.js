(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a147030"],{"0fee":function(t,e,a){},1276:function(t,e,a){"use strict";var n=a("d784"),r=a("44e7"),i=a("825a"),s=a("1d80"),l=a("4840"),c=a("8aa5"),o=a("50c4"),u=a("14c3"),d=a("9263"),f=a("d039"),h=[].push,b=Math.min,v=4294967295,p=!f((function(){return!RegExp(v,"y")}));n("split",2,(function(t,e,a){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,a){var n=String(s(this)),i=void 0===a?v:a>>>0;if(0===i)return[];if(void 0===t)return[n];if(!r(t))return e.call(n,t,i);var l,c,o,u=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),b=0,p=new RegExp(t.source,f+"g");while(l=d.call(p,n)){if(c=p.lastIndex,c>b&&(u.push(n.slice(b,l.index)),l.length>1&&l.index<n.length&&h.apply(u,l.slice(1)),o=l[0].length,b=c,u.length>=i))break;p.lastIndex===l.index&&p.lastIndex++}return b===n.length?!o&&p.test("")||u.push(""):u.push(n.slice(b)),u.length>i?u.slice(0,i):u}:"0".split(void 0,0).length?function(t,a){return void 0===t&&0===a?[]:e.call(this,t,a)}:e,[function(e,a){var r=s(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,r,a):n.call(String(r),e,a)},function(t,r){var s=a(n,t,this,r,n!==e);if(s.done)return s.value;var d=i(t),f=String(this),h=l(d,RegExp),g=d.unicode,m=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(p?"y":"g"),S=new h(p?d:"^(?:"+d.source+")",m),A=void 0===r?v:r>>>0;if(0===A)return[];if(0===f.length)return null===u(S,f)?[f]:[];var T=0,_=0,y=[];while(_<f.length){S.lastIndex=p?_:0;var k,x=u(S,p?f:f.slice(_));if(null===x||(k=b(o(S.lastIndex+(p?0:_)),f.length))===T)_=c(f,_,g);else{if(y.push(f.slice(T,_)),y.length===A)return y;for(var j=1;j<=x.length-1;j++)if(y.push(x[j]),y.length===A)return y;_=T=k}}return y.push(f.slice(T)),y}]}),!p)},"2b28":function(t,e,a){"use strict";a("68ef"),a("7c7f")},"2ffe":function(t,e,a){"use strict";var n=a("d4ec"),r=a("bee2"),i=a("93f3"),s=function(){function t(e,a,r,s,l,c){var o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:i["e"],u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"",d=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"",f=arguments.length>9&&void 0!==arguments[9]?arguments[9]:"";Object(n["a"])(this,t),this.CreatedAt=u,this.DeletedAt=d,this.ID=o,this.UpdatedAt=f,this.alarmTime=e,this.detail=a,this.label=r,this.status=s,this.title=l,this.alarmDate=c}return Object(r["a"])(t,[{key:"validate",value:function(){return this.title?this.detail?this.alarmTime?0===this.alarmDate.length?"请选择提醒日期":"":"请选择时间":"请输入习惯详情":"请输入习惯标题"}}]),t}();e["a"]=s},3647:function(t,e,a){"use strict";a("68ef"),a("9d70"),a("3743"),a("1a04"),a("5c56"),a("0fee")},"4f3c":function(t,e,a){"use strict";a.r(e);var n,r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("van-nav-bar",{attrs:{"left-text":"习惯详情","left-arrow":""},on:{"click-left":t.onNavBarClickLeft}}),a("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isRefreshing,callback:function(e){t.isRefreshing=e},expression:"isRefreshing"}},[a("van-panel",[a("div",{attrs:{slot:"header"},slot:"header"},[a("van-cell",{attrs:{title:t.habit.title,border:!0,value:t.HABIT_STATUS_VIEW[t.habit.status]}},[a("div",{attrs:{slot:"label"},slot:"label"},[a("div",{staticClass:"panel-label"},t._l(t.habit.label,(function(e,n){return a("van-tag",{key:n,attrs:{mark:"",type:"primary"}},[t._v(t._s(e))])})),1),t._v(" "+t._s(t.habit.alarmTime)+" "),a("br"),a("div",{staticClass:"panel-label"},t._l(t.habit.alarmDate,(function(e,n){return a("van-tag",{key:n,attrs:{mark:"",plain:"",type:"primary"}},[t._v(t._s(e))])})),1)])])],1),a("div",[t._v(" "+t._s(t.habit.detail)+" ")]),a("div",{staticClass:"panel-footer",attrs:{slot:"footer"},slot:"footer"},[a("van-button",{attrs:{size:"small",type:"danger"}},[t._v("删除")]),t.habit.DeletedAt||t.habit.status===t.HABIT_STATUS.failed?t._e():a("div",[t.habit.status!==t.HABIT_STATUS.cancel?a("van-button",{attrs:{size:"small",type:"warning"},on:{click:function(e){return t.onStatusActionClick(t.HABIT_STATUS.cancel)}}},[t._v("取消")]):t._e(),t.habit.status!==t.HABIT_STATUS.running?a("van-button",{attrs:{size:"small",type:"info"},on:{click:function(e){return t.onStatusActionClick(t.HABIT_STATUS.running)}}},[t._v("进行中")]):t._e(),t.habit.status!==t.HABIT_STATUS.complete?a("van-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.onStatusActionClick(t.HABIT_STATUS.complete)}}},[t._v("完成")]):t._e()],1)],1)]),a("van-divider",[t._v("更新时间："+t._s(t.habit.UpdatedAt))])],1)],1)},i=[],s=(a("b0c0"),a("ac1f"),a("1276"),a("5530")),l=a("ade3"),c=(a("96cf"),a("1da1")),o=a("2b0e"),u=a("2241"),d=(a("e17f"),a("9ed2")),f=(a("2b28"),a("ea47")),h=(a("3647"),a("58e6")),b=(a("ab71"),a("a3e2")),v=(a("5f1a"),a("d399")),p=(a("e7e5"),a("2f62")),g=a("2ffe"),m=a("93f3"),S=a("9fdd"),A=a("a317"),T=o["a"].extend({name:"habitDetail",data:function(){return{HABIT_STATUS_VIEW:m["d"],HABIT_STATUS:m["c"],isRefreshing:!1,habit:new g["a"]("","",[],m["c"].pending,"",[])}},methods:{onRefresh:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,A["a"].refreshHabit(t.habit.ID);case 2:a=e.sent,Object(v["a"])(a.code===m["g"].success?"刷新成功":a.msg),t.isRefreshing=!1;case 5:case"end":return e.stop()}}),e)})))()},onStatusActionClick:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,u["a"].confirm({title:m["j"][t]});case 2:return a.next=4,A["a"].updateHabitStatus(e.habit.ID,t);case 4:n=a.sent,Object(v["a"])(n.code===m["g"].success?"更新成功":n.msg),setTimeout((function(){return e.$router.back()}),2e3);case 7:case"end":return a.stop()}}),a)})))()}},mounted:function(){var t=S["a"](this.habits[this.$route.params.id]);Array.isArray(t.label)||""===t.label||(t.label=t.label.split("#"),t.UpdatedAt=new Date(t.UpdatedAt).toLocaleString()),Array.isArray(t.alarmDate)||(t.alarmDate=t.alarmDate.split("#")),this.habit=t},components:(n={},Object(l["a"])(n,f["a"].name,f["a"]),Object(l["a"])(n,b["a"].name,b["a"]),Object(l["a"])(n,h["a"].name,h["a"]),Object(l["a"])(n,d["a"].name,d["a"]),n),computed:Object(s["a"])({},Object(p["b"])(["habits"]))}),_=T,y=(a("bb6e"),a("2877")),k=Object(y["a"])(_,r,i,!1,null,"4c9aeafe",null);e["default"]=k.exports},"5f1a":function(t,e,a){"use strict";a("68ef"),a("9d70"),a("3743"),a("9b7e")},"7c7f":function(t,e,a){},"9b7e":function(t,e,a){},"9ed2":function(t,e,a){"use strict";var n=a("2638"),r=a.n(n),i=a("d282"),s=a("ba31"),l=Object(i["a"])("divider"),c=l[0],o=l[1];function u(t,e,a,n){var i;return t("div",r()([{attrs:{role:"separator"},style:{borderColor:e.borderColor},class:o((i={dashed:e.dashed,hairline:e.hairline},i["content-"+e.contentPosition]=a.default,i))},Object(s["b"])(n,!0)]),[a.default&&a.default()])}u.props={dashed:Boolean,hairline:{type:Boolean,default:!0},contentPosition:{type:String,default:"center"}},e["a"]=c(u)},"9fdd":function(t,e,a){"use strict";function n(t){return new RegExp(t.source,(t.global?"g":"")+(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.sticky?"y":"")+(t.unicode?"u":""))}var r=a("9e65");function i(t,e,a,s){var l=function(n){var r=e.length,l=0;while(l<r){if(t===e[l])return a[l];l+=1}for(var c in e[l+1]=t,a[l+1]=n,t)n[c]=s?i(t[c],e,a,!0):t[c];return n};switch(Object(r["a"])(t)){case"Object":return l({});case"Array":return l([]);case"Date":return new Date(t.valueOf());case"RegExp":return n(t);default:return t}}var s=a("4aa2"),l=Object(s["a"])((function(t){return null!=t&&"function"===typeof t.clone?t.clone():i(t,[],[],!0)}));e["a"]=l},a3e2:function(t,e,a){"use strict";var n=a("2638"),r=a.n(n),i=a("d282"),s=a("ba31"),l=a("b1d2"),c=a("ad06"),o=Object(i["a"])("tag"),u=o[0],d=o[1];function f(t,e,a,n){var i,o,u=e.type,f=e.mark,h=e.plain,b=e.color,v=e.round,p=e.size,g=h?"color":"backgroundColor",m=(i={},i[g]=b,i);e.textColor&&(m.color=e.textColor);var S={mark:f,plain:h,round:v};p&&(S[p]=p);var A=e.closeable&&t(c["a"],{attrs:{name:"cross"},class:d("close"),on:{click:function(t){t.stopPropagation(),Object(s["a"])(n,"close")}}});return t("transition",{attrs:{name:e.closeable?"van-fade":null}},[t("span",r()([{key:"content",style:m,class:[d([S,u]),(o={},o[l["c"]]=h,o)]},Object(s["b"])(n,!0)]),[null==a.default?void 0:a.default(),A])])}f.props={size:String,mark:Boolean,color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean,type:{type:String,default:"default"}},e["a"]=u(f)},bb6e:function(t,e,a){"use strict";var n=a("e322"),r=a.n(n);r.a},e322:function(t,e,a){},ea47:function(t,e,a){"use strict";var n=a("2638"),r=a.n(n),i=a("d282"),s=a("ba31"),l=a("b1d2"),c=a("7744"),o=a("34e9"),u=Object(i["a"])("panel"),d=u[0],f=u[1];function h(t,e,a,n){var i=function(){return[a.header?a.header():t(c["a"],{attrs:{icon:e.icon,label:e.desc,title:e.title,value:e.status,valueClass:f("header-value")},class:f("header")}),t("div",{class:f("content")},[a.default&&a.default()]),a.footer&&t("div",{class:[f("footer"),l["d"]]},[a.footer()])]};return t(o["a"],r()([{class:f(),scopedSlots:{default:i}},Object(s["b"])(n,!0)]))}h.props={icon:String,desc:String,title:String,status:String},e["a"]=d(h)}}]);
//# sourceMappingURL=chunk-3a147030.9a1678d2.js.map