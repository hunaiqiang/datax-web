(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6beeedd3"],{"09f4":function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),Math.easeInOutQuad=function(e,t,r,a){return e/=a/2,e<1?r/2*e*e+t:(e--,-r/2*(e*(e-2)-1)+t)};var a=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function o(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function l(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function n(e,t,r){var n=l(),i=e-n,s=20,u=0;t="undefined"===typeof t?500:t;var c=function e(){u+=s;var l=Math.easeInOutQuad(u,n,i,t);o(l),u<t?a(e):r&&"function"===typeof r&&r()};c()}},"39ed":function(e,t,r){"use strict";r.d(t,"d",(function(){return o})),r.d(t,"f",(function(){return l})),r.d(t,"a",(function(){return n})),r.d(t,"e",(function(){return i})),r.d(t,"b",(function(){return s}));var a=r("b775");function o(){return Object(a["a"])({url:"/api/jobGroup/list",method:"get"})}function l(e){return Object(a["a"])({url:"/api/jobGroup/update",method:"post",data:e})}function n(e){return Object(a["a"])({url:"/api/jobGroup/save",method:"post",data:e})}function i(e){return Object(a["a"])({url:"/api/jobGroup/loadById?id="+e,method:"post"})}function s(e){return Object(a["a"])({url:"/api/jobGroup/remove?id="+e,method:"post"})}},"3a8d":function(e,t,r){"use strict";r.d(t,"c",(function(){return o})),r.d(t,"b",(function(){return l})),r.d(t,"f",(function(){return n})),r.d(t,"a",(function(){return i})),r.d(t,"e",(function(){return s})),r.d(t,"d",(function(){return u}));var a=r("b775");function o(e){return Object(a["a"])({url:"api/jobTemplate/pageList",method:"get",params:e})}function l(){return Object(a["a"])({url:"api/jobGroup/list",method:"get"})}function n(e){return Object(a["a"])({url:"/api/jobTemplate/update",method:"post",data:e})}function i(e){return Object(a["a"])({url:"/api/jobTemplate/add/",method:"post",data:e})}function s(e){return Object(a["a"])({url:"/api/jobTemplate/remove/"+e,method:"post"})}function u(e){return Object(a["a"])({url:"/api/jobTemplate/nextTriggerTime?cron="+e,method:"get"})}},6724:function(e,t,r){"use strict";r("8d41");var a="@@wavesContext";function o(e,t){function r(r){var a=Object.assign({},t.value),o=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},a),l=o.ele;if(l){l.style.position="relative",l.style.overflow="hidden";var n=l.getBoundingClientRect(),i=l.querySelector(".waves-ripple");switch(i?i.className="waves-ripple":(i=document.createElement("span"),i.className="waves-ripple",i.style.height=i.style.width=Math.max(n.width,n.height)+"px",l.appendChild(i)),o.type){case"center":i.style.top=n.height/2-i.offsetHeight/2+"px",i.style.left=n.width/2-i.offsetWidth/2+"px";break;default:i.style.top=(r.pageY-n.top-i.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",i.style.left=(r.pageX-n.left-i.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return i.style.backgroundColor=o.color,i.className="waves-ripple z-active",!1}}return e[a]?e[a].removeHandle=r:e[a]={removeHandle:r},r}var l={bind:function(e,t){e.addEventListener("click",o(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[a].removeHandle,!1),e.addEventListener("click",o(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[a].removeHandle,!1),e[a]=null,delete e[a]}},n=function(e){e.directive("waves",l)};window.Vue&&(window.waves=l,Vue.use(n)),l.install=n;t["a"]=l},"8d41":function(e,t,r){},a897:function(e,t,r){},c3e2:function(e,t,r){"use strict";var a=r("a897"),o=r.n(a);o.a},e7ae:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("div",{staticClass:"filter-container"},[r("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"任务描述"},model:{value:e.listQuery.jobDesc,callback:function(t){e.$set(e.listQuery,"jobDesc",t)},expression:"listQuery.jobDesc"}}),e._v(" "),r("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"负责人"},model:{value:e.listQuery.author,callback:function(t){e.$set(e.listQuery,"author",t)},expression:"listQuery.author"}}),e._v(" "),r("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.fetchData}},[e._v("\n      Search\n    ")]),e._v(" "),r("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v("\n      Add\n    ")])],1),e._v(" "),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[r("el-table-column",{attrs:{align:"center",label:"任务ID",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.id))]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"任务描述",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.jobDesc))]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"Cron",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(t.row.jobCron))])]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"路由策略",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.routeStrategies.find((function(e){return e.value===t.row.executorRouteStrategy})).label))]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"负责人",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.author))]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"注册节点",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-popover",{attrs:{placement:"bottom",width:"500"},on:{show:function(r){return e.loadById(t.row)}}},[r("el-table",{attrs:{data:e.registerNode}},[r("el-table-column",{attrs:{width:"150",property:"title",label:"执行器名称"}}),e._v(" "),r("el-table-column",{attrs:{width:"150",property:"appName",label:"appName"}}),e._v(" "),r("el-table-column",{attrs:{width:"150",property:"registryList",label:"机器地址"}})],1),e._v(" "),r("el-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("查看")])],1)]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"下次触发时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-popover",{attrs:{placement:"bottom",width:"300"},on:{show:function(r){return e.nextTriggerTime(t.row)}}},[r("h5",{domProps:{innerHTML:e._s(e.triggerNextTimes)}}),e._v(" "),r("el-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("查看")])],1)]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"Actions",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[r("el-dropdown",{attrs:{"split-button":"",type:"primary"}},[e._v("\n          操作\n          "),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-dropdown-item",{attrs:{divided:""},nativeOn:{click:function(t){return e.handlerUpdate(a)}}},[e._v("编辑")]),e._v(" "),r("el-dropdown-item",{nativeOn:{click:function(t){return e.handlerDelete(a)}}},[e._v("删除")])],1)],1)]}}])})],1),e._v(" "),r("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.current,limit:e.listQuery.size},on:{"update:page":function(t){return e.$set(e.listQuery,"current",t)},"update:limit":function(t){return e.$set(e.listQuery,"size",t)},pagination:e.fetchData}}),e._v(" "),r("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible,width:"1000px"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[r("el-form",{ref:"dataForm",attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"110px"}},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"执行器",prop:"jobGroup"}},[r("el-select",{attrs:{placeholder:"请选择执行器"},model:{value:e.temp.jobGroup,callback:function(t){e.$set(e.temp,"jobGroup",t)},expression:"temp.jobGroup"}},e._l(e.executorList,(function(e){return r("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1)],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"任务描述",prop:"jobGroup"}},[r("el-input",{attrs:{size:"medium",placeholder:"请输入任务描述"},model:{value:e.temp.jobDesc,callback:function(t){e.$set(e.temp,"jobDesc",t)},expression:"temp.jobDesc"}})],1)],1)],1),e._v(" "),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"路由策略",prop:"executorRouteStrategy"}},[r("el-select",{attrs:{placeholder:"请选择路由策略"},model:{value:e.temp.executorRouteStrategy,callback:function(t){e.$set(e.temp,"executorRouteStrategy",t)},expression:"temp.executorRouteStrategy"}},e._l(e.routeStrategies,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"Cron",prop:"jobCron"}},[r("el-input",{attrs:{placeholder:"请输入Cron表达式"},model:{value:e.temp.jobCron,callback:function(t){e.$set(e.temp,"jobCron",t)},expression:"temp.jobCron"}})],1)],1)],1),e._v(" "),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"阻塞处理",prop:"executorBlockStrategy"}},[r("el-select",{attrs:{placeholder:"请选择阻塞处理策略"},model:{value:e.temp.executorBlockStrategy,callback:function(t){e.$set(e.temp,"executorBlockStrategy",t)},expression:"temp.executorBlockStrategy"}},e._l(e.blockStrategies,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"子任务ID"}},[r("el-input",{attrs:{placeholder:"请输入子任务ID,多个以逗号分隔"},model:{value:e.temp.childJobId,callback:function(t){e.$set(e.temp,"childJobId",t)},expression:"temp.childJobId"}})],1)],1)],1),e._v(" "),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"任务超时时间"}},[r("el-input",{attrs:{placeholder:"任务超时时间，单位秒，大于零时生效"},model:{value:e.temp.executorTimeout,callback:function(t){e.$set(e.temp,"executorTimeout",t)},expression:"temp.executorTimeout"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"负责人",prop:"author"}},[r("el-input",{attrs:{placeholder:"请输入负责人"},model:{value:e.temp.author,callback:function(t){e.$set(e.temp,"author",t)},expression:"temp.author"}})],1)],1)],1),e._v(" "),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"失败重试次数"}},[r("el-input",{attrs:{placeholder:"失败重试次数，大于零时生效"},model:{value:e.temp.executorFailRetryCount,callback:function(t){e.$set(e.temp,"executorFailRetryCount",t)},expression:"temp.executorFailRetryCount"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"报警邮件"}},[r("el-input",{attrs:{placeholder:"请输入报警邮件，多个用逗号分隔"},model:{value:e.temp.alarmEmail,callback:function(t){e.$set(e.temp,"alarmEmail",t)},expression:"temp.alarmEmail"}})],1)],1)],1),e._v(" "),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"增量时间字段"}},[r("el-input",{attrs:{placeholder:"-DlastTime='%s' -DcurrentTime='%s'"},model:{value:e.temp.replaceParam,callback:function(t){e.$set(e.temp,"replaceParam",t)},expression:"temp.replaceParam"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"增量开始时间",prop:"incStartTime"}},[r("el-date-picker",{attrs:{type:"datetime",placeholder:"首次增量使用",format:"yyyy-MM-dd HH:mm:ss","default-time":"00:00:00"},model:{value:e.temp.incStartTime,callback:function(t){e.$set(e.temp,"incStartTime",t)},expression:"temp.incStartTime"}})],1)],1)],1),e._v(" "),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"JVM启动参数"}},[r("el-input",{attrs:{placeholder:"-Xms1024m -Xmx1024m -XX:+HeapDumpOnOutOfMemoryError"},model:{value:e.temp.jvmParam,callback:function(t){e.$set(e.temp,"jvmParam",t)},expression:"temp.jvmParam"}})],1)],1)],1)],1),e._v(" "),r("json-editor",{ref:"jsonEditor",model:{value:e.jobJson,callback:function(t){e.jobJson=t},expression:"jobJson"}}),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("\n        Cancel\n      ")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(t){"create"===e.dialogStatus?e.createData():e.updateData()}}},[e._v("\n        Confirm\n      ")])],1)],1)],1)},o=[],l=r("39ed"),n=r("3a8d"),i=r("6724"),s=r("333d"),u=r("fa7e"),c={name:"JobTemplate",components:{Pagination:s["a"],JsonEditor:u["a"]},directives:{waves:i["a"]},filters:{statusFilter:function(e){var t={published:"success",draft:"gray",deleted:"danger"};return t[e]}},data:function(){var e=this,t=function(t,r,a){e.temp.replaceParam&&!e.temp.incStartTime&&a(new Error("incStartTime is required")),a()};return{list:null,listLoading:!0,total:0,listQuery:{current:1,size:10,jobGroup:0,triggerStatus:-1,jobDesc:"",executorHandler:"",author:""},dialogPluginVisible:!1,pluginData:[],dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},rules:{jobGroup:[{required:!0,message:"jobGroup is required",trigger:"change"}],executorRouteStrategy:[{required:!0,message:"executorRouteStrategy is required",trigger:"change"}],executorBlockStrategy:[{required:!0,message:"executorBlockStrategy is required",trigger:"change"}],jobDesc:[{required:!0,message:"jobDesc is required",trigger:"blur"}],jobCron:[{required:!0,message:"jobCron is required",trigger:"blur"}],author:[{required:!0,message:"author is required",trigger:"blur"}],incStartTime:[{trigger:"blur",validator:t}]},temp:{id:void 0,jobGroup:"",jobCron:"",jobDesc:"",executorRouteStrategy:"",executorBlockStrategy:"",childJobId:"",executorFailRetryCount:"",alarmEmail:"",executorTimeout:"",author:"",jobConfigId:"",executorHandler:"executorJobHandler",glueType:"BEAN",jobJson:"",executorParam:"",replaceParam:"",jvmParam:"",timeOffset:0,incStartTime:""},resetTemp:function(){this.temp=this.$options.data().temp,this.jobJson={}},executorList:"",blockStrategies:[{value:"SERIAL_EXECUTION",label:"单机串行"},{value:"DISCARD_LATER",label:"丢弃后续调度"},{value:"COVER_EARLY",label:"覆盖之前调度"}],routeStrategies:[{value:"FIRST",label:"第一个"},{value:"LAST",label:"最后一个"},{value:"ROUND",label:"轮询"},{value:"RANDOM",label:"随机"},{value:"CONSISTENT_HASH",label:"一致性HASH"},{value:"LEAST_FREQUENTLY_USED",label:"最不经常使用"},{value:"LEAST_RECENTLY_USED",label:"最近最久未使用"},{value:"FAILOVER",label:"故障转移"},{value:"BUSYOVER",label:"忙碌转移"}],triggerNextTimes:"",registerNode:[],jobJson:""}},created:function(){this.fetchData(),this.getExecutor()},methods:{getExecutor:function(){var e=this;n["b"]().then((function(t){var r=t.content;e.executorList=r}))},fetchData:function(){var e=this;this.listLoading=!0,n["c"](this.listQuery).then((function(t){var r=t.content;e.total=r.recordsTotal,e.list=r.data,e.listLoading=!1}))},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},createData:function(){var e=this;this.$refs["dataForm"].validate((function(t){t&&(e.temp.jobJson=e.jobJson,n["a"](e.temp).then((function(){e.fetchData(),e.dialogFormVisible=!1,e.$notify({title:"Success",message:"Created Successfully",type:"success",duration:2e3})})))}))},handlerUpdate:function(e){var t=this;this.resetTemp(),this.temp=Object.assign({},e),this.jobJson=JSON.parse(this.temp.jobJson),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},updateData:function(){var e=this;this.$refs["dataForm"].validate((function(t){t&&(e.temp.jobJson="string"!==typeof e.jobJson?JSON.stringify(e.jobJson):e.jobJson,n["f"](e.temp).then((function(){e.fetchData(),e.dialogFormVisible=!1,e.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3})})))}))},handlerDelete:function(e){var t=this;this.$confirm("确定删除吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){n["e"](e.id).then((function(e){t.fetchData(),t.$notify({title:"Success",message:"Delete Successfully",type:"success",duration:2e3})}))}))},nextTriggerTime:function(e){var t=this;n["d"](e.jobCron).then((function(e){var r=e.content;t.triggerNextTimes=r.join("<br>"),t.$notify({title:"Success",message:"Start Successfully",type:"success",duration:2e3})}))},loadById:function(e){var t=this;l["e"](e.jobGroup).then((function(e){t.registerNode=[];var r=e.content;t.registerNode.push(r),t.$notify({title:"Success",message:"Start Successfully",type:"success",duration:2e3})}))}}},d=c,p=(r("c3e2"),r("2877")),m=Object(p["a"])(d,a,o,!1,null,null,null);t["default"]=m.exports}}]);