(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-368f84ae"],{"2bb0":function(t,e,a){"use strict";a.r(e);var n,i,r,o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("van-nav-bar",{attrs:{"left-text":"添加任务","left-arrow":""},on:{"click-left":t.onNavBarClickLeft}}),a("van-field",{attrs:{clearable:"",label:"任务名称",placeholder:"请输入任务名称"},on:{input:t.onTaskTitleInput},model:{value:t.task.title,callback:function(e){t.$set(t.task,"title",e)},expression:"task.title"}}),a("van-field",{attrs:{clearable:"",label:"任务详情",autosize:"",type:"textarea",placeholder:"请输入任务详情"},on:{input:t.onTaskDetailInput},model:{value:t.task.detail,callback:function(e){t.$set(t.task,"detail",e)},expression:"task.detail"}}),a("van-cell",{attrs:{title:"提醒时间",value:new Date(t.task.alarmTime).toLocaleString(),"is-link":""},on:{click:t.onTaskAlarmClick}}),a("van-cell",{attrs:{title:"任务标签","value-class":"task-label-value"}},[a("van-icon",{attrs:{slot:"right-icon",name:"add-o",size:20},on:{click:t.onAddTaskLabelClick},slot:"right-icon"}),a("div",{attrs:{slot:"label"},slot:"label"},t._l(t.task.label,(function(e){return a("van-tag",{key:e,staticClass:"task-label",attrs:{type:"primary",closeable:"",mark:""},on:{close:function(a){return t.onLabelCloseClick(e)}}},[t._v(t._s(e))])})),1)],1),a("van-button",{staticClass:"position-bottom",attrs:{size:"large",type:"primary"},on:{click:t.onCreateTaskClick}},[t._v("添加")]),a("van-popup",{attrs:{round:"","close-icon-position":"top-left",position:"bottom",closeable:""},model:{value:t.isAlarmTimePopup,callback:function(e){t.isAlarmTimePopup=e},expression:"isAlarmTimePopup"}},[a("van-datetime-picker",{attrs:{type:"datetime",formatter:t.dateTimeFormatter,"min-date":t.minDateTime,"max-date":t.maxDateTime},on:{confirm:t.onDateTimeConfirm},model:{value:t.currentDateTime,callback:function(e){t.currentDateTime=e},expression:"currentDateTime"}})],1),a("van-popup",{staticStyle:{"background-color":"unset"},attrs:{position:"center"},model:{value:t.isLabelPopup,callback:function(e){t.isLabelPopup=e},expression:"isLabelPopup"}},[a("div",{staticClass:"task-label-popup"},[a("van-field",{attrs:{clearable:"",placeholder:"请输入标签"},on:{input:t.onTaskLabelInput},model:{value:t.taskLabel,callback:function(e){t.taskLabel=e},expression:"taskLabel"}}),a("br"),a("van-button",{attrs:{size:"large",type:"primary"},on:{click:t.onAddTaskBtnClick}},[t._v("添加")])],1)])],1)},u=[],s=(a("99af"),a("4de4"),a("a15b"),a("b0c0"),a("96cf"),a("1da1")),l=a("ade3"),c=a("2b0e"),m=a("ee83"),p=(a("d1cf"),a("a3e2")),h=(a("5f1a"),a("d399")),f=(a("e7e5"),a("4862")),d=a("5c41"),b=a("93f3"),k=a("9f48"),v=new Date("".concat((new Date).toLocaleDateString()," 00:00:00"));(function(t){t["year"]="year",t["month"]="month",t["day"]="day",t["hour"]="hour",t["minute"]="minute"})(r||(r={}));var g=(n={},Object(l["a"])(n,r.year,"年"),Object(l["a"])(n,r.month,"月"),Object(l["a"])(n,r.day,"日"),Object(l["a"])(n,r.hour,"时"),Object(l["a"])(n,r.minute,"分"),n),y=c["a"].extend({name:"addTask",data:function(){return{isAlarmTimePopup:!1,isLabelPopup:!1,task:new d["a"](v.getTime(),"",[],b["i"].pending,""),taskLabel:"",currentDateTime:v,minDateTime:v,maxDateTime:new Date(v.getTime()+5184e5)}},methods:{dateTimeFormatter:function(t,e){return"".concat(e).concat(g[t])},onCreateTaskClick:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,n,i,r,o,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,r=null===(a=t.task)||void 0===a||null===(n=a.label)||void 0===n?void 0:n.join("#"),o=null===(i=t.task)||void 0===i?void 0:i.validate(v.getTime()),!o){e.next=5;break}throw new k["a"](o);case 5:return e.next=7,f["a"].addTask(Object.assign({},t.task,{label:r}));case 7:u=e.sent,Object(h["a"])(u.code===b["h"].success?"添加成功":u.msg),u.code===b["h"].success&&setTimeout((function(){return t.$router.back()}),2e3),e.next=16;break;case 12:e.prev=12,e.t0=e["catch"](0),console.log(e.t0),e.t0 instanceof k["a"]&&Object(h["a"])(e.t0.msg);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))()},onTaskTitleInput:function(t){this.task.title=t},onTaskDetailInput:function(t){this.task.detail=t},onTaskAlarmClick:function(){this.isAlarmTimePopup=!0},onDateTimeConfirm:function(t){this.isAlarmTimePopup=!1,this.task.alarmTime=t.getTime()},onTaskLabelInput:function(t){this.taskLabel=t},onAddTaskLabelClick:function(){this.isLabelPopup=!0},onAddTaskBtnClick:function(){this.isLabelPopup=!1,this.task.label.push(this.taskLabel),this.taskLabel=""},onLabelCloseClick:function(t){this.task.label=this.task.label.filter((function(e){return e!==t}))}},components:(i={},Object(l["a"])(i,m["a"].name,m["a"]),Object(l["a"])(i,p["a"].name,p["a"]),i)}),T=y,x=(a("4ddc"),a("2877")),j=Object(x["a"])(T,o,u,!1,null,"2e6700f6",null);e["default"]=j.exports},"498b":function(t,e,a){},"4ddc":function(t,e,a){"use strict";var n=a("498b"),i=a.n(n);i.a},"5c41":function(t,e,a){"use strict";var n=a("d4ec"),i=a("bee2"),r=a("93f3"),o=function(){function t(e,a,i,o,u){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:r["f"],l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"",c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"",m=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"";Object(n["a"])(this,t),this.alarmTime=e,this.detail=a,this.label=i,this.status=o,this.title=u,this.ID=s,this.CreatedAt=l,this.DeletedAt=c,this.UpdatedAt=m}return Object(i["a"])(t,[{key:"validate",value:function(){return this.title?this.detail?"number"!==typeof(arguments.length<=0?void 0:arguments[0])?"请传入正确的时间":this.alarmTime===(arguments.length<=0?void 0:arguments[0])?"请选择提醒时间":"":"请输入任务详情":"请输入任务标题"}}]),t}();e["a"]=o},"5f1a":function(t,e,a){"use strict";a("68ef"),a("9d70"),a("3743"),a("9b7e")},"9b7e":function(t,e,a){},a15b:function(t,e,a){"use strict";var n=a("23e7"),i=a("44ad"),r=a("fc6a"),o=a("a640"),u=[].join,s=i!=Object,l=o("join",",");n({target:"Array",proto:!0,forced:s||!l},{join:function(t){return u.call(r(this),void 0===t?",":t)}})},a3e2:function(t,e,a){"use strict";var n=a("2638"),i=a.n(n),r=a("d282"),o=a("ba31"),u=a("b1d2"),s=a("ad06"),l=Object(r["a"])("tag"),c=l[0],m=l[1];function p(t,e,a,n){var r,l,c=e.type,p=e.mark,h=e.plain,f=e.color,d=e.round,b=e.size,k=h?"color":"backgroundColor",v=(r={},r[k]=f,r);e.textColor&&(v.color=e.textColor);var g={mark:p,plain:h,round:d};b&&(g[b]=b);var y=e.closeable&&t(s["a"],{attrs:{name:"cross"},class:m("close"),on:{click:function(t){t.stopPropagation(),Object(o["a"])(n,"close")}}});return t("transition",{attrs:{name:e.closeable?"van-fade":null}},[t("span",i()([{key:"content",style:v,class:[m([g,c]),(l={},l[u["c"]]=h,l)]},Object(o["b"])(n,!0)]),[null==a.default?void 0:a.default(),y])])}p.props={size:String,mark:Boolean,color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean,type:{type:String,default:"default"}},e["a"]=c(p)},d1cf:function(t,e,a){"use strict";a("68ef"),a("e3b3"),a("a526")},ee83:function(t,e,a){"use strict";var n=a("c31d"),i=a("d282"),r=a("68ed"),o=a("482d"),u=a("90c6");function s(t,e){var a=-1,n=Array(t);while(++a<t)n[a]=e(a);return n}function l(t){if(!t)return 0;while(Object(u["a"])(parseInt(t,10))){if(!(t.length>1))return 0;t=t.slice(1)}return parseInt(t,10)}function c(t,e){return 32-new Date(t,e-1,32).getDate()}var m=a("1b10"),p=a("f253"),h=Object(n["a"])({},m["a"],{value:null,filter:Function,showToolbar:{type:Boolean,default:!0},formatter:{type:Function,default:function(t,e){return e}}}),f={data:function(){return{innerValue:this.formatValue(this.value)}},computed:{originColumns:function(){var t=this;return this.ranges.map((function(e){var a=e.type,n=e.range,i=s(n[1]-n[0]+1,(function(t){var e=Object(r["b"])(n[0]+t);return e}));return t.filter&&(i=t.filter(a,i)),{type:a,values:i}}))},columns:function(){var t=this;return this.originColumns.map((function(e){return{values:e.values.map((function(a){return t.formatter(e.type,a)}))}}))}},watch:{columns:"updateColumnValue",innerValue:function(t){this.$emit("input",t)}},mounted:function(){var t=this;this.updateColumnValue(),this.$nextTick((function(){t.updateInnerValue()}))},methods:{getPicker:function(){return this.$refs.picker},onConfirm:function(){this.$emit("confirm",this.innerValue)},onCancel:function(){this.$emit("cancel")}},render:function(){var t=this,e=arguments[0],a={};return Object.keys(m["a"]).forEach((function(e){a[e]=t[e]})),e(p["a"],{ref:"picker",attrs:{columns:this.columns},on:{change:this.onChange,confirm:this.onConfirm,cancel:this.onCancel},props:Object(n["a"])({},a)})}},d=Object(i["a"])("time-picker"),b=d[0],k=b({mixins:[f],props:Object(n["a"])({},h,{minHour:{type:[Number,String],default:0},maxHour:{type:[Number,String],default:23},minMinute:{type:[Number,String],default:0},maxMinute:{type:[Number,String],default:59}}),computed:{ranges:function(){return[{type:"hour",range:[+this.minHour,+this.maxHour]},{type:"minute",range:[+this.minMinute,+this.maxMinute]}]}},watch:{filter:"updateInnerValue",minHour:"updateInnerValue",maxHour:"updateInnerValue",minMinute:"updateInnerValue",maxMinute:"updateInnerValue",value:function(t){t=this.formatValue(t),t!==this.innerValue&&(this.innerValue=t,this.updateColumnValue())}},methods:{formatValue:function(t){t||(t=Object(r["b"])(this.minHour)+":"+Object(r["b"])(this.minMinute));var e=t.split(":"),a=e[0],n=e[1];return a=Object(r["b"])(Object(o["a"])(a,this.minHour,this.maxHour)),n=Object(r["b"])(Object(o["a"])(n,this.minMinute,this.maxMinute)),a+":"+n},updateInnerValue:function(){var t=this.getPicker().getIndexes(),e=t[0],a=t[1],n=this.originColumns,i=n[0],r=n[1],o=i.values[e]||i.values[0],u=r.values[a]||r.values[0];this.innerValue=this.formatValue(o+":"+u),this.updateColumnValue()},onChange:function(t){var e=this;this.updateInnerValue(),this.$nextTick((function(){e.$nextTick((function(){e.$emit("change",t)}))}))},updateColumnValue:function(){var t=this,e=this.formatter,a=this.innerValue.split(":"),n=[e("hour",a[0]),e("minute",a[1])];this.$nextTick((function(){t.getPicker().setValues(n)}))}}});function v(t){return"[object Date]"===Object.prototype.toString.call(t)&&!Object(u["a"])(t.getTime())}var g=(new Date).getFullYear(),y=Object(i["a"])("date-picker"),T=y[0],x=T({mixins:[f],props:Object(n["a"])({},h,{type:{type:String,default:"datetime"},minDate:{type:Date,default:function(){return new Date(g-10,0,1)},validator:v},maxDate:{type:Date,default:function(){return new Date(g+10,11,31)},validator:v}}),watch:{filter:"updateInnerValue",minDate:"updateInnerValue",maxDate:"updateInnerValue",value:function(t){t=this.formatValue(t),t.valueOf()!==this.innerValue.valueOf()&&(this.innerValue=t)}},computed:{ranges:function(){var t=this.getBoundary("max",this.innerValue),e=t.maxYear,a=t.maxDate,n=t.maxMonth,i=t.maxHour,r=t.maxMinute,o=this.getBoundary("min",this.innerValue),u=o.minYear,s=o.minDate,l=o.minMonth,c=o.minHour,m=o.minMinute,p=[{type:"year",range:[u,e]},{type:"month",range:[l,n]},{type:"day",range:[s,a]},{type:"hour",range:[c,i]},{type:"minute",range:[m,r]}];return"date"===this.type&&p.splice(3,2),"year-month"===this.type&&p.splice(2,3),p}},methods:{formatValue:function(t){return v(t)||(t=this.minDate),t=Math.max(t,this.minDate.getTime()),t=Math.min(t,this.maxDate.getTime()),new Date(t)},getBoundary:function(t,e){var a,n=this[t+"Date"],i=n.getFullYear(),r=1,o=1,u=0,s=0;return"max"===t&&(r=12,o=c(e.getFullYear(),e.getMonth()+1),u=23,s=59),e.getFullYear()===i&&(r=n.getMonth()+1,e.getMonth()+1===r&&(o=n.getDate(),e.getDate()===o&&(u=n.getHours(),e.getHours()===u&&(s=n.getMinutes())))),a={},a[t+"Year"]=i,a[t+"Month"]=r,a[t+"Date"]=o,a[t+"Hour"]=u,a[t+"Minute"]=s,a},updateInnerValue:function(){var t,e=this,a=this.getPicker().getIndexes(),n=function(t){var n=e.originColumns[t].values;return l(n[a[t]])},i=n(0),r=n(1),o=c(i,r);t="year-month"===this.type?1:n(2),t=t>o?o:t;var u=0,s=0;"datetime"===this.type&&(u=n(3),s=n(4));var m=new Date(i,r-1,t,u,s);this.innerValue=this.formatValue(m)},onChange:function(t){var e=this;this.updateInnerValue(),this.$nextTick((function(){e.$nextTick((function(){e.$emit("change",t)}))}))},updateColumnValue:function(){var t=this,e=this.innerValue,a=this.formatter,n=[a("year",""+e.getFullYear()),a("month",Object(r["b"])(e.getMonth()+1)),a("day",Object(r["b"])(e.getDate()))];"datetime"===this.type&&n.push(a("hour",Object(r["b"])(e.getHours())),a("minute",Object(r["b"])(e.getMinutes()))),"year-month"===this.type&&(n=n.slice(0,2)),this.$nextTick((function(){t.getPicker().setValues(n)}))}}}),j=Object(i["a"])("datetime-picker"),O=j[0],C=j[1];e["a"]=O({props:Object(n["a"])({},k.props,{},x.props),methods:{getPicker:function(){return this.$refs.root.getPicker()}},render:function(){var t=arguments[0],e="time"===this.type?k:x;return t(e,{ref:"root",class:C(),props:Object(n["a"])({},this.$props),on:Object(n["a"])({},this.$listeners)})}})}}]);
//# sourceMappingURL=chunk-368f84ae.dc980a31.js.map