(function(e){function t(t){for(var a,r,u=t[0],s=t[1],i=t[2],d=0,f=[];d<u.length;d++)r=u[d],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&f.push(c[r][0]),c[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var u=n[r];0!==c[u]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},c={app:0},o=[];function u(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-1a13b945":"6e6a399a","chunk-2d216977":"9fc566d9","chunk-6c7b787a":"ecbf07e8","chunk-0bae3493":"1d160a4c","chunk-0c0dbd10":"bc592a67","chunk-212b7da5":"3df2e39a","chunk-7ab36e7c":"839adb06","chunk-74aa702c":"ba813ebb","chunk-e835d522":"3150c972"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-1a13b945":1,"chunk-6c7b787a":1,"chunk-0bae3493":1,"chunk-0c0dbd10":1,"chunk-212b7da5":1,"chunk-7ab36e7c":1,"chunk-74aa702c":1,"chunk-e835d522":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-1a13b945":"13373bb8","chunk-2d216977":"31d6cfe0","chunk-6c7b787a":"de198bbf","chunk-0bae3493":"d1f8a7c1","chunk-0c0dbd10":"34daafc3","chunk-212b7da5":"43ea43f0","chunk-7ab36e7c":"66c1fca7","chunk-74aa702c":"df80cdfe","chunk-e835d522":"75451984"}[e]+".css",c=s.p+a,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var i=o[u],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===a||d===c))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){i=f[u],d=i.getAttribute("data-href");if(d===a||d===c)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var a=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],l.parentNode.removeChild(l),n(o)},l.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){r[e]=0})));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=o);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=u(e);var f=new Error;i=function(t){d.onerror=d.onload=null,clearTimeout(l);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}c[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var l=d;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0613":function(e,t,n){"use strict";var a=n("2b0e"),r=n("2f62"),c=(n("b0c0"),n("d4ec")),o=n("93f3"),u=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o["c"],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:o["c"],i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"";Object(c["a"])(this,e),this.CreatedAt=t,this.DeletedAt=n,this.ID=a,this.UpdatedAt=r,this.name=u,this.role=s,this.token=i},s=u,i={tasks:[],user:new s},d=n("c4e7"),f=n("fc60");a["a"].use(r["a"]);t["a"]=new r["a"].Store({state:i,mutations:d["b"],actions:f["b"]})},"0889":function(e,t,n){"use strict";n("d3b7");var a=n("bc3a"),r=n.n(a),c=r.a.create({timeout:12e3});c.interceptors.request.use((function(e){return e.headers.Authorization="Bearer "+localStorage.getItem("access_token"),e})),c.interceptors.response.use((function(e){return 200!==e.status?Promise.resolve(e.status):Promise.resolve(e.data)}),(function(e){return console.log(e),Promise.resolve(e)})),t["a"]=c},"14d3":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("ace4"),n("d3b7"),n("ac1f"),n("38cf"),n("5319"),n("5cc6"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7");function a(e){for(var t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/-/g,"+").replace(/_/g,"/"),a=window.atob(n),r=new Uint8Array(a.length),c=0;c<a.length;++c)r[c]=a.charCodeAt(c);return r}},2395:function(e,t,n){},"79f6":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("93f3"),r={env:a["b"].dev},c=a["a"][r.env]},"7c55":function(e,t,n){"use strict";var a=n("2395"),r=n.n(a);r.a},"93f3":function(e,t,n){"use strict";n.d(t,"e",(function(){return c})),n.d(t,"f",(function(){return d})),n.d(t,"b",(function(){return u})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return i})),n.d(t,"g",(function(){return f})),n.d(t,"c",(function(){return l}));var a,r,c,o=n("ade3");(function(e){e[e["pending"]=0]="pending",e[e["running"]=1]="running",e[e["complete"]=2]="complete",e[e["failed"]=3]="failed",e[e["cancel"]=4]="cancel"})(c||(c={}));var u,s,i,d=(a={},Object(o["a"])(a,c.pending,"待定中"),Object(o["a"])(a,c.running,"进行中"),Object(o["a"])(a,c.complete,"已完成"),Object(o["a"])(a,c.failed,"失败"),Object(o["a"])(a,c.cancel,"已取消"),a);(function(e){e["test"]="test",e["dev"]="dev",e["prod"]="prod"})(u||(u={})),function(e){e[e["success"]=0]="success",e[e["fail"]=-1]="fail"}(s||(s={})),function(e){e["test"]="http://localhost:9090",e["dev"]="https://api.p18c.top",e["prod"]=""}(i||(i={}));var f=(r={},Object(o["a"])(r,c.pending,""),Object(o["a"])(r,c.cancel,"确定取消该任务吗?"),Object(o["a"])(r,c.running,"确定任务在进行中吗?"),Object(o["a"])(r,c.failed,""),Object(o["a"])(r,c.complete,"确定已经完成该任务了吗?"),r),l=-1},afbc:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));n("99af");var a=n("5530"),r=n("2909"),c=n("2b0e"),o=n("8c4f"),u=(n("d3b7"),function(){return Promise.all([n.e("chunk-6c7b787a"),n.e("chunk-0bae3493")]).then(n.bind(null,"7e88"))}),s=function(){return Promise.all([n.e("chunk-6c7b787a"),n.e("chunk-0c0dbd10")]).then(n.bind(null,"2d9d"))},i=function(){return Promise.all([n.e("chunk-6c7b787a"),n.e("chunk-7ab36e7c")]).then(n.bind(null,"2bb0"))},d=function(){return n.e("chunk-1a13b945").then(n.bind(null,"13a3"))},f="/task",l={root:"/",notFound:"/404",task:f,taskDetail:"".concat(f,"/"),addTask:"".concat(f,"/add")},p=[{name:"task",path:l.root,component:u},{name:"notFound",path:l.notFound,component:d},{name:"taskR",path:l.task,redirect:"/"},{name:"taskDetail",path:"".concat(l.taskDetail,"/:id"),component:s},{name:"addTask",path:l.addTask,component:i}],b=function(){return n.e("chunk-74aa702c").then(n.bind(null,"3b42"))},h=function(){return n.e("chunk-e835d522").then(n.bind(null,"5ab6"))},v=function(){return Promise.all([n.e("chunk-6c7b787a"),n.e("chunk-212b7da5")]).then(n.bind(null,"d374"))},m=function(){return n.e("chunk-2d216977").then(n.bind(null,"c2b4"))},k="/profile",g={profile:k,userInfo:"".concat(k,"/userInfo"),analysisChart:"".concat(k,"/analysisChart"),setting:"".concat(k,"/setting"),about:"".concat(k,"/about")},O=[{name:"profile",path:g.profile,component:b},{name:"about",path:g.about,component:h},{name:"analysisChart",path:g.analysisChart,component:v},{name:"setting",path:g.setting,component:m}];c["a"].use(o["a"]);var w=[].concat(Object(r["a"])(p),Object(r["a"])(O)),j=Object(a["a"])({},l,{},g),y=new o["a"]({mode:"history",base:"/",routes:w});t["b"]=y},c4e7:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a,r,c=n("ade3");(function(e){e["updateTasks"]="updateTasks",e["updateUser"]="updateUser"})(r||(r={}));var o=(a={},Object(c["a"])(a,r.updateTasks,(function(e,t){e.tasks=t})),Object(c["a"])(a,r.updateUser,(function(e,t){e.user=t})),a);t["b"]=o},cafd:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("0889"),r="https://pushservice.p18c.top",c="".concat(r,"/sw"),o=function(e){return a["a"].post("".concat(c,"/sub"),e)}},cd49:function(e,t,n){"use strict";n.r(t);n("caad"),n("2532"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var a,r=n("2b0e"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),n("m-footer")],1)},o=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("van-tabbar",{directives:[{name:"show",rawName:"v-show",value:e.isFooter,expression:"isFooter"}],on:{change:e.onTabbarChange},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[n("van-tabbar-item",{attrs:{name:"task",icon:"clock-o"}},[e._v("任务")]),n("van-tabbar-item",{attrs:{name:"habit",icon:"award-o"}},[e._v("习惯")]),n("van-tabbar-item",{attrs:{name:"profile",icon:"user-o"}},[e._v("我的")])],1)},s=[],i=(n("fb6a"),n("2ed4")),d=(n("a52c"),n("ac28")),f=(n("537a"),n("afbc")),l={FOOTER_PAGES:[f["a"].root,f["a"].task,f["a"].profile]},p=l;(function(e){e["task"]="task",e["taskDetail"]="taskDetail"})(a||(a={}));var b=r["a"].extend({name:"mFooter",data:function(){return{active:"task"}},methods:{onTabbarChange:function(e){var t=f["a"][e];!t&&Z?Z.$router.push(f["a"].notFound):Z.$route.path!==t&&Z&&Z.$router.push(f["a"][e])}},watch:{$route:function(e){var t=e.path.slice(1);this.active=""===t?"task":t}},computed:{isFooter:function(){return p.FOOTER_PAGES.includes(this.$route.path)}},components:{"van-tabbar":d["a"],"van-tabbar-item":i["a"]}}),h=b,v=n("2877"),m=Object(v["a"])(h,u,s,!1,null,"1201ce06",null),k=m.exports,g=(n("d3b7"),n("96cf"),n("1da1")),O=n("79f6"),w=n("0889"),j="".concat(O["a"],"/user"),y=function(){return w["a"].get(j)},T=n("93f3"),x=n("0613"),P=n("fc60"),_={getUserInfo:function(){return Object(g["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y();case 3:if(t=e.sent,t.code!==T["d"].success){e.next=7;break}return e.next=7,x["a"].dispatch(P["a"].updateUser,t.data);case 7:return e.abrupt("return",Promise.resolve({code:t.code,msg:t.msg}));case 10:return e.prev=10,e.t0=e["catch"](0),console.log(e.t0),e.abrupt("return",Promise.resolve({code:T["d"].fail,msg:""}));case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))()}},C=r["a"].extend({name:"App",created:function(){_.getUserInfo()},components:{MFooter:k}}),E=C,I=(n("7c55"),Object(v["a"])(E,c,o,!1,null,null,null)),A=I.exports,U=n("9483"),F=n("14d3"),S=n("cafd");function D(e,t){return N.apply(this,arguments)}function N(){return N=Object(g["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={userVisibleOnly:!0,applicationServerKey:Object(F["a"])(n)},e.next=3,t.pushManager.subscribe(a);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),N.apply(this,arguments)}if("serviceWorker"in window.navigator){var R="BOEQSjdhorIf8M0XFNlwohK3sTzO9iJwvbYU-fuXRF0tvRpPPMGO6d_gJC_pUQwBT7wD8rKutpNTFHOHN3VqJ0A";Object(U["a"])("".concat("/","service-worker.js"),{ready:function(e){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(e){return Object(g["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,D(e,R);case 3:return n=t.sent,console.log("subscribeUserToPushed."),t.next=7,Object(S["a"])(n);case 7:console.log("Service worker has been registered."),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log("register error",t.t0,t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}})}var J=n("3a34"),M=n.n(J),$=n("b650"),B=(n("66b9"),n("7744")),z=(n("c194"),n("417e")),L=(n("3c32"),n("ad06")),H=(n("c3a6"),n("6b41")),q=(n("5246"),n("565f")),G=(n("be7f"),n("e41f")),K=(n("8a58"),n("2241")),Q=(n("e17f"),n("34e9")),V=(n("0653"),n("7d5e")),W=(n("0209"),n("58e6")),X=(n("ab71"),n("4160"),n("159b"),n("53ca"),{bind:function(e){e.ontouchstart=function(){console.log(1)},e.ontouchend=function(){console.log(2)}}});r["a"].config.productionTip=!1,r["a"].use($["a"]).use(B["a"]).use(z["a"]).use(L["a"]).use(H["a"]).use(q["a"]).use(G["a"]).use(K["a"]).use(Q["a"]).use(V["a"]).use(W["a"]),r["a"].directive("longPress",X),r["a"].prototype.onNavBarClickLeft=function(){return f["b"].back()},navigator.platform.includes("Win")||navigator.platform.includes("Mac")||(r["a"].prototype.$vConsole=new M.a),localStorage.setItem("access_token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1ODQ5ODEwNzAsInVzZXJfaWQiOjEsIm5hbWUiOiJhZG1pbiJ9.zLs5HR07l95H9fkEKtnJypn-I6_x_duREsiolzZCoZQ");var Z=t["default"]=new r["a"]({router:f["b"],store:x["a"],render:function(e){return e(A)}}).$mount("#app")},f8b2:function(e,t,n){e.exports=n.p+"img/loading.6ff045a5.gif"},fc60:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("4de4"),n("c740");var a,r,c=n("ade3"),o=n("2909"),u=n("c4e7");(function(e){e["addTask"]="addTask",e["delTask"]="delTask",e["updateTask"]="updateTask",e["updateTasks"]="updateTasks",e["updateUser"]="updateUser"})(r||(r={}));var s=(a={},Object(c["a"])(a,r.addTask,(function(e,t){var n=e.commit,a=e.state,r=Object(o["a"])(a.tasks);r.push(t),n(u["a"].updateTasks,r)})),Object(c["a"])(a,r.delTask,(function(e,t){var n=e.commit,a=e.state,r=a.tasks.filter((function(e){return e.ID!==t}));n(u["a"].updateTasks,r)})),Object(c["a"])(a,r.updateTask,(function(e,t){var n=e.commit,a=e.state,r=a.tasks.findIndex((function(e){return e.ID===t.ID})),c=Object(o["a"])(a.tasks);c[r]=t,n(u["a"].updateTasks,c)})),Object(c["a"])(a,r.updateTasks,(function(e,t){var n=e.commit;n(u["a"].updateTasks,t)})),Object(c["a"])(a,r.updateUser,(function(e,t){var n=e.commit;n(u["a"].updateUser,t)})),a);t["b"]=s}});
//# sourceMappingURL=app.cc936c52.js.map