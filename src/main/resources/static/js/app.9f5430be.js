(function(e){function t(t){for(var n,l,r=t[0],s=t[1],d=t[2],c=0,m=[];c<r.length;c++)l=r[c],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&m.push(o[l][0]),o[l]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);u&&u(t);while(m.length)m.shift()();return i.push.apply(i,d||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,r=1;r<a.length;r++){var s=a[r];0!==o[s]&&(n=!1)}n&&(i.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},o={app:0},i=[];function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/tm4-dict-zjt-8992/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=t,r=r.slice();for(var d=0;d<r.length;d++)t(r[d]);var u=s;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"05a1":function(e,t,a){},"0e4d":function(e,t,a){},2012:function(e,t,a){},"4a98":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=a("5c96"),i=a.n(o),l=(a("0fae"),a("7f10"),a("05a1"),a("c695"),a("cf75")),r=a.n(l),s=a("5486"),d=a.n(s),u=(a("f8dd"),a("5d37"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:this.$store.state.loadding,expression:"this.$store.state.loadding",modifiers:{fullscreen:!0,lock:!0}}],staticStyle:{border:"1px solid #eee",height:"100%"},attrs:{"element-loading-text":"程序处理中,请稍等。。。。","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.5)"}},[a("el-main",{staticStyle:{padding:"0px"}},[a("el-row",[a("el-col",{staticClass:"aside",attrs:{span:4,xs:4,sm:4,md:4,lg:4,xl:4}},[a("el-aside",{staticStyle:{"padding-top":"10px",margin:"0px",width:"98%"}},[a("db-table-tree",{ref:"dbTableTree",staticStyle:{"padding-left":"2%","padding-right":"0","margin-right":"2%",width:"98%"},on:{tableAdd:e.tableAdd,columnUpdate:e.columnUpdate,tableUpdate:e.tableUpdate,dbTableWindowOkEvent:e.dbTableWindowOkEvent,tableDeleteEvent:e.tableDelete,syncDbTableWindowOkEvent:e.syncDbTableWindowOkEvent}})],1)],1),a("el-col",{attrs:{span:19,xs:19,sm:19,md:19,lg:19,xl:19}},[a("el-container",[a("el-main",[a("el-tabs",{staticClass:"dbTableTabs",attrs:{type:"card",closable:""},on:{"tab-remove":e.removeTab,"tab-click":e.tabClick},model:{value:e.editableTabsValue,callback:function(t){e.editableTabsValue=t},expression:"editableTabsValue"}},e._l(e.editableTabs,(function(t){return a("el-tab-pane",{key:t.index,attrs:{label:t.title,name:t.name}},[1==t.refColumnTable?a(t.content,{tag:"component",attrs:{nodeData:t.nodeData,panelId:t.name},on:{dbTableWindowOkEvent:e.dbTableWindowOkEvent}}):e._e()],1)})),1)],1)],1)],1)],1)],1)],1)}),c=[],m=(a("4de4"),a("b0c0"),a("159b"),a("1f82")),b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form",{ref:"headerrow",attrs:{size:"mini",inline:!0}},[a("el-form-item",[[a("el-button",{attrs:{type:"success",size:"mini"},nativeOn:{click:function(t){return e.addColumn(t)}}},[a("i",{staticClass:"fa fa-plus gridIconCls",attrs:{"aria-hidden":"true"}}),e._v("增加字段 ")]),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:e.deleteColumn}},[a("i",{staticClass:"fa fa-minus gridIconCls",attrs:{"aria-hidden":"true"}}),e._v("删除字段 ")]),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.saveDataEvent}},[a("i",{staticClass:"fa fa-floppy-o gridIconCls",attrs:{"aria-hidden":"true"}}),e._v("保存 ")]),a("el-tooltip",{attrs:{placement:"right"}},[a("div",{attrs:{slot:"content"},domProps:{innerHTML:e._s(e.syncTableToolTip)},slot:"content"}),a("el-button",{directives:[{name:"show",rawName:"v-show",value:"table"==e.nodeType,expression:"nodeType=='table'"}],attrs:{type:"warning",size:"mini"},on:{click:e.generaterTable}},[a("i",{staticClass:"fa fa-table gridIconCls",attrs:{"aria-hidden":"true"}}),e._v(" 同步数据表 ")])],1)]],2)],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("vxe-table",{ref:"xTable",staticClass:"my_table_status",attrs:{border:"","show-overflow":"",data:e.tableData,"edit-rules":e.validRules,"edit-config":{trigger:"click",mode:"cell",showStatus:!0,showIcon:!1,activeMethod:e.activeCellMethod}}},[a("vxe-table-column",{attrs:{type:"checkbox",width:"60"}}),a("vxe-table-column",{attrs:{type:"seq",width:"60"}}),a("vxe-table-column",{attrs:{field:"columnName",title:"字段名称","edit-render":{name:"input"}},scopedSlots:e._u([{key:"edit",fn:function(t){var n=t.row;return[a("el-input",{model:{value:n.columnName,callback:function(t){e.$set(n,"columnName","string"===typeof t?t.trim():t)},expression:"row.columnName"}})]}},{key:"default",fn:function(t){var a=t.row;return[e._v(" "+e._s(a.columnName)+" ")]}}])}),a("vxe-table-column",{attrs:{field:"columnShowName",title:"字段中文名称","edit-render":{name:"input"}},scopedSlots:e._u([{key:"edit",fn:function(t){var n=t.row;return[a("el-input",{model:{value:n.columnShowName,callback:function(t){e.$set(n,"columnShowName","string"===typeof t?t.trim():t)},expression:"row.columnShowName"}})]}},{key:"default",fn:function(t){var a=t.row;return[e._v(" "+e._s(a.columnShowName)+" ")]}}])}),a("vxe-table-column",{attrs:{field:"dataType",title:"数据类型","edit-render":{name:"select",options:e.dataTypeList,events:{change:e.dataTypeChange}}}}),a("vxe-table-column",{attrs:{field:"columnLength",title:"字段长度","edit-render":{name:"input"}},scopedSlots:e._u([{key:"edit",fn:function(t){var n=t.row;return[a("el-input",{model:{value:n.columnLength,callback:function(t){e.$set(n,"columnLength",e._n(t))},expression:"row.columnLength"}})]}},{key:"default",fn:function(t){var a=t.row;return[e._v(" "+e._s(a.columnLength)+" ")]}}])}),a("vxe-table-column",{attrs:{field:"columnDecimalPlace",title:"小数位数","edit-render":{name:"input"}},scopedSlots:e._u([{key:"edit",fn:function(t){var n=t.row;return[a("el-input",{model:{value:n.columnDecimalPlace,callback:function(t){e.$set(n,"columnDecimalPlace",e._n(t))},expression:"row.columnDecimalPlace"}})]}},{key:"default",fn:function(t){var a=t.row;return[e._v(" "+e._s(a.columnDecimalPlace)+" ")]}}])}),a("vxe-table-column",{attrs:{field:"notNull",align:"center",title:"不允许为NULL","edit-render":{name:"input"}},scopedSlots:e._u([{key:"edit",fn:function(t){var n=t.row;return[a("el-switch",{model:{value:n.notNull,callback:function(t){e.$set(n,"notNull",t)},expression:"row.notNull"}})]}},{key:"default",fn:function(t){var n=t.row;return[a("el-switch",{model:{value:n.notNull,callback:function(t){e.$set(n,"notNull",t)},expression:"row.notNull"}})]}}])}),a("vxe-table-column",{attrs:{field:"primaryKey",align:"center",title:"主键","edit-render":{name:"ElSwitch",type:"visible",events:{change:e.primaryKeyChange}}},scopedSlots:e._u([{key:"header",fn:function(t){t.column,t.columnIndex,t.$columnIndex,t.fixed,t.isHidden;return[a("i",{staticClass:"fa fa-key",staticStyle:{"margin-right":"0px",color:"#FFDB23"}}),e._v(" 主键 ")]}},{key:"default",fn:function(t){var n=t.row;return[a("el-switch",{model:{value:n.primaryKey,callback:function(t){e.$set(n,"primaryKey",t)},expression:"row.primaryKey"}})]}}])}),a("vxe-table-column",{attrs:{field:"remark",title:"列说明","edit-render":{name:"input"}}})],1)],1)],1),a("db-table-window",{ref:"dbTableWin",on:{okEvent:e.dbTableWindowOkEvent}})],1)},f=[],h=(a("a4d3"),a("e439"),a("dbb4"),a("b64b"),a("ade3")),p=(a("96cf"),a("1da1")),v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{attrs:{title:e.windowAttr.title,visible:e.windowAttr.windowVisible,width:"30%"},on:{"update:visible":function(t){return e.$set(e.windowAttr,"windowVisible",t)}}},[a("el-form",{ref:"form",attrs:{model:e.editData,rules:e.rules,"label-width":"auto"}},[a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"add"==e.action,expression:"action=='add'"}],attrs:{label:"所属模块"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.editData.moduleName,callback:function(t){e.$set(e.editData,"moduleName",t)},expression:"editData.moduleName"}})],1),a("el-form-item",{attrs:{label:"表名",prop:"tableName"}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入表名"},model:{value:e.editData.tableName,callback:function(t){e.$set(e.editData,"tableName","string"===typeof t?t.trim():t)},expression:"editData.tableName"}})],1),a("el-form-item",{attrs:{label:"表名（中文含义）",prop:"tableShowName"}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入中文表名"},model:{value:e.editData.tableShowName,callback:function(t){e.$set(e.editData,"tableShowName","string"===typeof t?t.trim():t)},expression:"editData.tableShowName"}})],1),a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{attrs:{row:10,type:"textarea",autocomplete:"off",placeholder:""},model:{value:e.editData.remark,callback:function(t){e.$set(e.editData,"remark",t)},expression:"editData.remark"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.closeWin}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.okEvent}},[e._v("确 定")])],1)],1)],1)},w=[];function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(Object(a),!0).forEach((function(t){Object(h["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var T={name:"DbTableWindow",data:function(){return{rules:{tableName:[{required:!0,message:"请输入表名",trigger:"blur,change"}],tableShowName:[{required:!0,message:"请输入表名中文含义",trigger:"blur,change"}]},editObj:{name:name},windowAttr:{windowVisible:!1,title:""},editData:{tableName:"",tableShowName:"",moduleCode:"",moduleId:"",dbConnId:"",remark:"",used:!0,sort:"",tmuid:""},editDataTemplate:{tableName:"",tableShowName:"",moduleCode:"",moduleId:"",dbConnId:"",remark:"",used:!0,sort:"",tmuid:""},moduleList:[],action:""}},methods:{showWin:function(e,t){this.editData=y({},this.editDataTemplate),this.action=t,"add"==t?(this.windowAttr.title="添加表",this.editData["dbConnId"]=e.obj["dbConnId"],this.editData["moduleCode"]=e.obj["moduleCode"],this.editData["moduleId"]=e.obj["tmuid"],this.editData["moduleName"]=e.obj["moduleName"]):"update"==t&&(this.windowAttr.title="修改表",this.editData=y({},e["obj"])),this.windowAttr.windowVisible=!0},closeWin:function(){this.windowAttr.windowVisible=!1},okEvent:function(){var e=this;this.$refs.form.validate((function(t){if(!t)return!1;""!=e.editData.tmuid?e.postRequest("/dict/updTable",e.editData).then((function(t){t&&200==t.status&&(e.$emit("okEvent",e.editData),e.closeWin())})):e.postRequest("/dict/addTable",e.editData).then((function(t){200==t.status&&(e.$emit("okEvent",t["body"]),e.closeWin())}))}))}},mounted:function(){}},D=T,x=a("2877"),k=Object(x["a"])(D,v,w,!1,null,"10ccdc2e",null),N=k.exports;function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function C(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(Object(a),!0).forEach((function(t){Object(h["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var I={name:"DbTableColumnGrid",components:{DbTableWindow:N},props:["nodeData","panelId","refColumnTable"],data:function(){var e=this;return{tableData:[],nodeType:"",syncTableToolTip:"根据字典设置自动更新数据库表</br>(支持创建表、增/删/改字段)",validRules:{columnName:[{validator:function(t,a,n,o){o.rules,o.row,o.column,o.rowIndex,o.columnIndex;var i=e.$refs.xTable.getInsertRecords(),l=(e.$refs.xTable.getUpdateRecords(),e.tableData),r={};i.length>0&&i.forEach((function(e,t,a){r[e["columnName"]]||(r[e["columnName"]]=[]),r[e["columnName"]].push({tmuid:"1",value:e})})),l.length>0&&l.forEach((function(e,t,a){r[e["columnName"]]||(r[e["columnName"]]=[]),r[e["columnName"]].push(e)}));var s=r[a];return 0==(a+"").length?n(new Error("请输入字段名称")):s&&s.length>1?n(new Error("字段名称不能重复")):n()}}],columnLength:[{validator:function(t,a,n,o){o.rules;var i=o.row,l=(o.column,o.rowIndex,o.columnIndex,{}),r=e.dataTypeList;r.forEach((function(e){i.dataType==e.value&&(l=e)}));var s=l,d=s.checkLength,u=void 0!==d&&d;return u?0==(a+"").length?n(new Error("请输入字段长度")):a<=0||a>8e3?n(new Error("字段长度只能输入1-8000之间的整数")):n():n()}}],dataType:[{required:!0,message:"请选择数据类型"}],columnShowName:[{required:!0,message:"请输入中文字段名称"},{pattern:/^[\u4e00-\u9fa5_a-zA-Z0-9]+$/,message:"中文字段名称不能包含空格和特殊字符"}],columnDecimalPlace:[{validator:function(e,t,a,n){n.rules,n.row,n.column,n.rowIndex,n.columnIndex;return t<0||t>8?a(new Error("小数位数只能输入1-8之间的整数")):a()}}],notNull:[{validator:function(e,t,a,n){n.rules;var o=n.row;n.column,n.rowIndex,n.columnIndex;return o.primaryKey&&!o.notNull?a(new Error("主键列字段不能为空")):a()}}]},recordTemplate:{tmuid:"",columnName:"",columnShowName:"",tableTmuid:"",dataType:"",notNull:!1,primaryKey:!1,remark:"",used:!0,sort:0,columnDecimalPlace:"",columnLength:""},dataTypeList:[{label:"",value:""},{label:"varchar",value:"varchar",columnLength:255,columnDecimalPlace:"",checkLength:!0},{label:"int",value:"int",columnLength:"",columnDecimalPlace:""},{label:"decimal",value:"decimal",columnLength:18,columnDecimalPlace:4,checkLength:!0},{label:"float",value:"float",columnLength:"",columnDecimalPlace:""},{label:"text",value:"text"},{label:"datetime",value:"datetime"}]}},methods:{addColumn:function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(){var t,a,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=C({},this.recordTemplate),a=-1,e.next=4,this.$refs.xTable.insertAt(t,a);case 4:return n=e.sent,o=n.row,e.next=8,this.$refs.xTable.setActiveCell(o,"columnName");case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),deleteColumn:function(){var e=this.$refs.xTable.getCheckboxRecords(),t=null;if(e.forEach((function(e,a,n){if(e["primaryKey"])return t=e,!1})),t)return this.$message.error({message:"不能删除主键列！！"}),!1;e.length>0?this.$refs.xTable.removeSelecteds():this.$message.warning({message:"请选择需要删除的数据!!"})},saveDataEvent:function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(){var t,a,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=this.$refs.xTable.getInsertRecords(),a=this.$refs.xTable.getRemoveRecords(),n=this.$refs.xTable.getUpdateRecords(),0!=t.length||0!=a.length||0!=n){e.next=6;break}return this.$message.warning({message:"没有需要保存的数据"}),e.abrupt("return");case 6:return e.prev=6,e.next=9,this.$refs.xTable.validate();case 9:o=this.nodeData.type,"module"==o?this.showTableWin(this.nodeData,"add"):"table"==o&&this.saveDataToDb(this.nodeData["obj"]),e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](6),this.$XModal.message({status:"error",message:"字段校验不通过！"});case 16:case"end":return e.stop()}}),e,this,[[6,13]])})));function t(){return e.apply(this,arguments)}return t}(),saveDataToDb:function(e){var t=this,a=e.tmuid,n=this.$refs.xTable.getInsertRecords(),o=this.$refs.xTable.getRemoveRecords(),i=this.$refs.xTable.getUpdateRecords(),l=[];n.length>0&&n.forEach((function(e,t,n){e["flag"]=1,e["tableId"]=a,l.push(e)})),i.length>0&&i.forEach((function(e,t,n){e["flag"]=0,e["tableId"]=a,l.push(e)})),o.length>0&&o.forEach((function(e,t,n){e["flag"]=-1,e["tableId"]=a,l.push(e)})),this.postRequest("/dict/saveCol",l).then((function(e){t.loadData()}))},loadData:function(){var e=this,t=this.nodeData,a=t.type,n=t.nodeId;"table"==a&&this.postKeyValueRequest("/dict/getCol",{tableId:n}).then((function(t){e.tableData=t}))},showTableWin:function(e,t){this.$refs.dbTableWin.showWin(e,t)},dbTableWindowOkEvent:function(e){this.saveDataToDb(e),this.$emit("dbTableWindowOkEvent",e,this.panelId)},generaterTable:function(){var e=this;"table"==this.nodeData["type"]&&this.$confirm("确定要在数据库中同步生成表【"+this.nodeData.obj.tableShowName+"】的结构吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var t={tableVo:e.nodeData["obj"],colVoList:e.tableData};e.postRequest("/dict/syncDb",t).then((function(e){}))})).catch((function(){}))},dataTypeChange:function(e,t){var a=e.row;e.rowIndex,e.$rowIndex,e.column,e.columnIndex,e.$columnIndex;this.dataTypeList.forEach((function(e){if(t.target.value==e.value){var n=e.columnLength,o=void 0===n?"":n,i=e.columnDecimalPlace,l=void 0===i?"":i;a.columnLength=o,a.columnDecimalPlace=l}}))},primaryKeyChange:function(e,t){var a=e.row;e.rowIndex,e.column,e.columnIndex;t&&(a.notNull=t)},activeCellMethod:function(e){var t=e.row,a=(e.rowIndex,e.column);e.columnIndex;if("columnDecimalPlace"==a.property||"columnLength"==a.property){var n=null;if(this.dataTypeList.forEach((function(e){if(t.dataType==e.value)return n=e,!1})),"varchar"==t.dataType&&"columnDecimalPlace"==a.property)return!1;var o=n,i=o.columnLength,l=void 0===i?0:i;return 0!=l}return!0}},mounted:function(){this.loadData(),this.nodeType=this.nodeData.type},watch:{nodeData:function(e,t){this.nodeType=e.type}}},j=I,V=(a("e66a"),Object(x["a"])(j,b,f,!1,null,"27bf7f00",null)),$=V.exports,E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-scrollbar",{staticStyle:{height:"100%",width:"98%"}},[a("div",{staticClass:"asideButton"},[a("el-row",[a("el-col",[a("el-autocomplete",{staticClass:"el-input",attrs:{"prefix-icon":"el-icon-search","fetch-suggestions":e.querySearchAsync,placeholder:"搜索表",size:"medium"},on:{select:e.handleSelect},model:{value:e.filterTableText,callback:function(t){e.filterTableText=t},expression:"filterTableText"}})],1)],1)],1),a("el-tree",{ref:"dbTableTree",staticStyle:{"padding-left":"2%","padding-right":"0","margin-right":"2%"},attrs:{props:e.defaultProps,"node-key":"nodeId",draggable:"","allow-drop":e.allowDrop,"allow-drag":e.allowDrag,load:e.loadNode,lazy:"","highlight-current":!0,"default-expanded-keys":e.expandNodes},on:{"node-contextmenu":e.rightClick,"node-click":e.nodeClick,"node-drop":e.handleDrop},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.node,o=t.data;return a("span",{staticClass:"slot-t-node"},[a("i",{staticClass:"fa",class:e.iconClsObj[o.type],style:{color:n.expanded||"table"==o.type?e.iconStyleObj[o.type]:"#9c9c9c"}}),a("el-tooltip",{attrs:{placement:"right"}},[a("div",{attrs:{slot:"content"},domProps:{innerHTML:e._s(e.setToolTip(o))},slot:"content"}),a("span",[e._v(e._s(n.label))])])],1)}}])})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:e.menuVisible,expression:"menuVisible"}]},[a("el-menu",{staticClass:"el-menu-vertical",attrs:{id:"rightClickMenu","active-text-color":"#fff","text-color":"#fff"},on:{select:e.handleRightSelect}},[a("el-menu-item",{directives:[{name:"show",rawName:"v-show",value:e.menuItemVisible["db"],expression:"menuItemVisible['db']"}],staticClass:"menuItem",attrs:{index:"6"}},[a("span",{attrs:{slot:"title"},slot:"title"},[e._v("添加模块")])]),a("el-menu-item",{directives:[{name:"show",rawName:"v-show",value:e.menuItemVisible["module"],expression:"menuItemVisible['module']"}],staticClass:"menuItem",attrs:{index:"1"}},[a("span",{attrs:{slot:"title"},slot:"title"},[e._v("添加表")])]),a("el-tooltip",{attrs:{placement:"right"}},[a("div",{attrs:{slot:"content"},domProps:{innerHTML:e._s(e.importTableToolTip)},slot:"content"}),a("el-menu-item",{directives:[{name:"show",rawName:"v-show",value:e.menuItemVisible["module"],expression:"menuItemVisible['module']"}],staticClass:"menuItem",attrs:{index:"9"}},[a("span",{attrs:{slot:"title"},slot:"title"},[e._v("导入表")])])],1),a("el-menu-item",{directives:[{name:"show",rawName:"v-show",value:e.menuItemVisible["module"],expression:"menuItemVisible['module']"}],staticClass:"menuItem",attrs:{index:"2"}},[a("span",{attrs:{slot:"title"},slot:"title"},[e._v("刷新")])]),a("el-menu-item",{directives:[{name:"show",rawName:"v-show",value:e.menuItemVisible["module"],expression:"menuItemVisible['module']"}],staticClass:"menuItem",attrs:{index:"7"}},[a("span",{attrs:{slot:"title"},slot:"title"},[e._v("修改模块")])]),a("el-menu-item",{directives:[{name:"show",rawName:"v-show",value:e.menuItemVisible["module"],expression:"menuItemVisible['module']"}],staticClass:"menuItem",attrs:{index:"8"}},[a("span",{attrs:{slot:"title"},slot:"title"},[e._v("删除模块")])]),a("el-menu-item",{directives:[{name:"show",rawName:"v-show",value:e.menuItemVisible["table"],expression:"menuItemVisible['table']"}],staticClass:"menuItem",attrs:{index:"3"}},[a("span",{attrs:{slot:"title"},slot:"title"},[e._v("修改字段")])]),a("el-menu-item",{directives:[{name:"show",rawName:"v-show",value:e.menuItemVisible["table"],expression:"menuItemVisible['table']"}],staticClass:"menuItem",attrs:{index:"4"}},[a("span",{attrs:{slot:"title"},slot:"title"},[e._v("修改表信息")])]),a("el-menu-item",{directives:[{name:"show",rawName:"v-show",value:e.menuItemVisible["table"],expression:"menuItemVisible['table']"}],staticClass:"menuItem",attrs:{index:"5"}},[a("span",{attrs:{slot:"title"},slot:"title"},[e._v("删除表")])])],1)],1),a("db-table-window",{ref:"dbTableWin",on:{okEvent:e.tableWinOkEvent}}),a("module-window",{ref:"moduleWindow",on:{okEvent:e.moduleWindowOkEvent}}),a("sync-db-table-window",{ref:"syncDbTableWindow",on:{okEvent:e.syncDbTableWindowOkEvent}})],1)},S=[],_=(a("99af"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{attrs:{title:e.windowAttr.title,visible:e.windowAttr.windowVisible,width:"30%"},on:{"update:visible":function(t){return e.$set(e.windowAttr,"windowVisible",t)}}},[a("el-form",{ref:"form",attrs:{model:e.editData,rules:e.rules,"label-width":"auto"}},[a("el-form-item",{attrs:{label:"模块名称",prop:"moduleName"}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入模块名称"},model:{value:e.editData.moduleName,callback:function(t){e.$set(e.editData,"moduleName","string"===typeof t?t.trim():t)},expression:"editData.moduleName"}})],1),a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{attrs:{type:"textarea",row:10,autocomplete:"off",placeholder:"",autosize:{minRows:5,maxRows:10}},model:{value:e.editData.remark,callback:function(t){e.$set(e.editData,"remark",t)},expression:"editData.remark"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.closeWin}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.okEvent}},[e._v("确 定")])],1)],1)],1)}),W=[];function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function R(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(Object(a),!0).forEach((function(t){Object(h["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var L={name:"ModuleWindow",data:function(){return{treeNodeData:{},windowAttr:{windowVisible:!1,title:""},editData:{tmuid:"",moduleCode:"",moduleName:"",moduleType:"",used:"",remark:"",sort:"",dbConnId:""},editDataTemplate:{tmuid:"",moduleCode:"",moduleName:"",moduleType:"",used:"",remark:"",sort:"",dbConnId:""},rules:{moduleName:[{required:!0,message:"请输入模块名称",trigger:"blur,change"}]}}},methods:{showWin:function(e,t){this.editData=R({},this.editDataTemplate),"add"==t?this.editData["dbConnId"]=e.obj["tmuid"]:"update"==t&&(this.editData=R({},e)),this.windowAttr.windowVisible=!0},closeWin:function(){this.windowAttr.windowVisible=!1},okEvent:function(){var e=this;this.$refs.form.validate((function(t){if(!t)return!1;e.$emit("okEvent",e.editData),e.closeWin()}))}}},A=L,q=Object(x["a"])(A,_,W,!1,null,"3b97d912",null),M=q.exports,K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{attrs:{title:e.windowAttr.title,visible:e.windowAttr.windowVisible,width:"40%"},on:{"update:visible":function(t){return e.$set(e.windowAttr,"windowVisible",t)}}},[a("el-table",{ref:"multipleTable",staticStyle:{width:"90%",margin:"0px auto"},attrs:{data:e.tableData,"tooltip-effect":"dark",height:"460",border:"",stripe:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),a("el-table-column",{attrs:{prop:"tableShowName",label:"表名",align:"center"}})],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.closeWin}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.okEvent}},[e._v("确 定")])],1)],1)],1)},U=[],B={name:"SyncDbTableWindow",props:{},data:function(){return{tableData:[],multipleSelection:[],nodeData:null,windowAttr:{windowVisible:!1,title:"生成数据库字典"}}},methods:{showWin:function(e){var t=this;this.nodeData=e,this.postRequest("/dict/getSyncTables").then((function(e){t.tableData=e})),this.windowAttr.windowVisible=!0},closeWin:function(){this.windowAttr.windowVisible=!1},okEvent:function(){var e=this;if(0==this.multipleSelection.length)return this.$message.warning({message:"请勾选需要同步的表！！"}),!1;this.$confirm("确定要生成选中表的数据字典吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var t={moduleVo:e.nodeData["obj"],tableVoList:e.multipleSelection};e.postRequest("/dict/syncDictByTables",t).then((function(t){e.closeWin();var a=e.nodeData;e.$emit("okEvent",{moduleNodeData:a,selectTableData:e.multipleSelection})}))})).catch((function(){}))},handleSelectionChange:function(e){this.multipleSelection=e}},mounted:function(){}},z=B,H=Object(x["a"])(z,K,U,!1,null,"9aefa714",null),G=H.exports,F={name:"DbTableTree",components:{ModuleWindow:M,DbTableWindow:N,SyncDbTableWindow:G},data:function(){return{defaultProps:{children:"children",label:"label",isLeaf:"isLeaf"},iconClsObj:{db:"fa-database",module:"fa-tags",table:"fa-table"},iconStyleObj:{db:"#41AB47",module:"#ffce15",table:"#008af0"},menuVisible:!1,clickNodeData:{},clickNode:{},menuItemVisible:{module:!1,table:!1,db:!1},filterTableText:"",expandNodes:[],currentKey:"",importTableToolTip:"通过数据库中的表解析生成数据库字典数据到当前模块</br>(如已存在相同字典数据将会覆盖)"}},methods:{handleRightSelect:function(e){1==e?(this.tableAdd(this.clickNodeData),this.menuVisible=!1):2==e?(this.refreshNode(this.clickNodeData["nodeId"],"module"),this.menuVisible=!1,o["Message"].success({message:"刷新节点成功！！！"})):3==e?(this.columnUpdate(this.clickNodeData),this.menuVisible=!1):4==e?(this.tableUpdate(this.clickNodeData),this.menuVisible=!1):5==e?(this.tableDelete(this.clickNodeData),this.menuVisible=!1):6==e?(this.showModuleWin(this.clickNodeData,"add"),this.menuVisible=!1):7==e?(this.moduleUpdate(this.clickNodeData),this.menuVisible=!1):8==e?(this.moduleDelete(this.clickNodeData),this.menuVisible=!1):9==e&&(this.showSyncDbTableWindow(this.clickNodeData),this.menuVisible=!1)},rightClick:function(e,t,a,n){var o=this;this.clickNodeData=t,this.clickNode=n,this.objectID!==t.id?(this.objectID=t.id,this.menuVisible=!0,this.DATA=t,this.NODE=a):this.menuVisible=!this.menuVisible,document.addEventListener("click",(function(e){o.menuVisible=!1}));var i=document.querySelector("#rightClickMenu");i.style.left=e.clientX+0+"px",i.style.top=e.clientY-0+"px",i.style.position="absolute",i.style.width="160px"},nodeClick:function(e,t){this.menuVisible=!1,"table"==e.type&&this.columnUpdate(e)},tableAdd:function(e){this.$emit("tableAdd",e)},tableDelete:function(e){var t=this;this.$confirm("此操作将删除表【"+e.obj.tableShowName+"】, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.postRequest("/dict/delTable",e["obj"]).then((function(a){t.refreshNode(e["obj"]["moduleId"],"module"),t.$emit("tableDeleteEvent",e["obj"])}))})).catch((function(){}))},tableUpdate:function(e){this.showTableWin(e,"update")},columnUpdate:function(e){this.$emit("columnUpdate",e)},showTableWin:function(e,t){this.$refs.dbTableWin.showWin(e,t)},showModuleWin:function(e,t){this.$refs.moduleWindow.showWin(e,t)},tableWinOkEvent:function(e){this.refreshNode(e["moduleId"],"module"),this.$emit("dbTableWindowOkEvent",e,e["tmuid"])},moduleWindowOkEvent:function(e){var t=this,a=e.tmuid;""!=a?this.postRequest("/dict/updModule",e).then((function(a){t.refreshNode(e["dbConnId"],"db")})):this.postRequest("/dict/addModule",e).then((function(a){t.refreshNode(e["dbConnId"],"db")}))},moduleUpdate:function(e){var t=e.type,a=e.obj;"module"==t?this.showModuleWin(a,"update"):o["Message"].error({message:"请选择需要修改模块！！！"})},moduleDelete:function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(t){var a,n,i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.nodeId,n=t.type,e.next=3,this.getNodeByPid(a,n).then((function(e){if(e.length>0)return o["Message"].error({message:"该模块下存在表数据不能删除！！！"}),e.length})).then((function(e){e&&0!=e||i.$confirm("此操作将删除模块【"+t.obj.moduleName+"】, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){i.postRequest("/dict/delModule",t["obj"]).then((function(e){i.refreshNode(t["obj"]["dbConnId"],"db")}))})).catch((function(){}))}));case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),loadNode:function(e,t){var a=this,n=e.data;n||(n={});var o=n,i=o.nodeId,l=void 0===i?"root":i,r=o.type,s=void 0===r?"root":r;this.postRequest("/dict/getTree",{nodeId:l,type:s}).then((function(e){t(e),e.forEach((function(e,t,n){a.currentKey===e["nodeId"]&&(a.$refs.dbTableTree.setCurrentKey(a.currentKey),a.currentKey="")}))}))},getNodeByPid:function(e,t){var a={nodeId:e,type:t};return this.postRequest("/dict/getTree",a)},refreshNode:function(e,t){var a=this;this.getNodeByPid(e,t).then((function(t){a.$refs.dbTableTree.updateKeyChildren(e,t),a.$forceUpdate()}))},showSyncDbTableWindow:function(e){this.$refs.syncDbTableWindow.showWin(e)},syncDbTableWindowOkEvent:function(e){var t=this,a=e.moduleNodeData,n=e.selectTableData,o=this.$refs.dbTableTree.getNode(a.obj["dbConnId"]);if(o){var i=o.childNodes;i.forEach((function(e,a,n){t.refreshNode(e.data.nodeId,e.data.type)}))}this.$emit("syncDbTableWindowOkEvent",{moduleNodeData:a,selectTableData:n})},setToolTip:function(e){var t=e.type,a="";return"db"==t?a="数据库名称:".concat(e.obj.dbName):"module"==t?a="模块名称:".concat(e.obj.moduleName,"</br>模块备注:").concat(e.obj.remark?e.obj.remark:""):"table"==t&&(a="表名:".concat(e.obj.tableName,"</br>备注:").concat(e.obj.remark?e.obj.remark:"")),a},querySearchAsync:function(e,t){this.postKeyValueRequest("/dict/getTableByName",{tableName:e}).then((function(e){t(e)}))},handleSelect:function(e){var t=this;this.expandNodes=[],this.expandNodes.push(e.dbVo["tmuid"]),this.expandNodes.push(e.moduleVo["tmuid"]),this.$refs.dbTableTree.setCurrentKey(e.tableVo["tmuid"]),this.$nextTick((function(){t.currentKey=e.tableVo["tmuid"],t.$refs.dbTableTree.setCurrentKey(e.tableVo["tmuid"])}))},handleDrop:function(e,t,a,n){var o=t.data,i=e.data;if("table"==i.type){var l="",r="";"module"==o.type&&"inner"==a?(l=o.obj.moduleCode,r=o.obj.tmuid):"table"==t.data.type&&(l=o.obj.moduleCode,r=o.obj.moduleId);var s=i.obj;s.moduleId=r,s.moduleCode=l,s.loading=!1,this.postRequest("/dict/updTable",s).then((function(e){}))}},allowDrop:function(e,t,a){return"module"===t.data.type?"inner"===a:"table"===t.data.type&&e.data.obj.moduleCode!=t.data.obj.moduleCode&&("prev"===a||"next"===a)},allowDrag:function(e){return"table"===e.data.type}},watch:{clickNodeData:function(e,t){e&&(this.menuItemVisible={module:!1,table:!1,db:!1},this.menuItemVisible[e.type]=!0)}}},J=F,X=(a("9a8f"),Object(x["a"])(J,E,S,!1,null,"1e7e3f47",null)),Y=X.exports,Z={components:{DbTableTree:Y,ElCol:m["a"],DbTableColumnGrid:$},data:function(){return{editableTabsValue:"0",editableTabs:[],tabIndex:0,tableWindowVisible:!1}},methods:{tableAdd:function(e){this.addTab(this.editableTabsValue,e)},tableUpdate:function(e){this.showTableWin(e)},tableDelete:function(e){this.removeTab(e["tmuid"])},columnUpdate:function(e){this.addTab(this.editableTabsValue,e)},addTab:function(e,t){var a=t.nodeId,n=t.type,o=t.label,i="",l=!1,r="";"table"==n?(i=o,r=a):(i="新建表"+r,r=++this.tabIndex+"");var s=this.editableTabs,d=null;s.forEach((function(e,t){if(e.name===r)return l=!0,d=e,!1})),l?d&&this.tabClick(d):this.editableTabs.push({title:i,name:r,content:"DbTableColumnGrid",nodeData:t,refColumnTable:!0}),this.editableTabsValue=r},removeTab:function(e){var t=this.editableTabs,a=this.editableTabsValue;a===e&&t.forEach((function(n,o){if(n.name===e){var i=t[o+1]||t[o-1];i&&(a=i.name)}})),this.editableTabsValue=a,this.editableTabs=t.filter((function(t){return t.name!==e}))},dbTableWindowOkEvent:function(e,t){var a=this,n=this.editableTabs;n.forEach((function(n,o){n.name===t&&(n.name=e["tmuid"],n.title=e["tableShowName"],n.nodeData={obj:e,type:"table",nodeId:e["tmuid"]},a.editableTabsValue=e["tmuid"])})),e&&this.$refs.dbTableTree.refreshNode(e["moduleId"],"module")},syncDbTableWindowOkEvent:function(e){var t=this,a=(e.moduleNodeData,e.selectTableData),n={};a.forEach((function(e){n[e["tmuid"]]=e}));var o=this.editableTabs;o.forEach((function(e,a){n[e.name]&&(t.editableTabsValue==e.name?(e.refColumnTable=!1,t.$nextTick((function(){e.refColumnTable=!0}))):e.refColumnTableRedy=!0)}))},tabClick:function(e){var t=this,a=this.editableTabs;a.forEach((function(a,n){if(e.name==a.name){var o=a.refColumnTableRedy,i=void 0!==o&&o;i&&(a.refColumnTable=!1,t.$nextTick((function(){a.refColumnTable=!0})),a.refColumnTableRedy=!1)}}))}}},Q=Z,ee=(a("e176"),Object(x["a"])(Q,u,c,!1,null,"cd4bfbae",null)),te=ee.exports,ae=a("8c4f");n["default"].use(ae["a"]);var ne=[],oe=new ae["a"]({routes:ne}),ie=oe,le=a("2f62");n["default"].use(le["a"]);var re=new le["a"].Store({state:{loadding:!1},mutations:{showloadding:function(e,t){e.loadding=t}},actions:{setloadding:function(e,t){e.commit("showloadding",t)}},getters:{isloading:function(e){return e.loadding}}}),se=(a("baa5"),a("2ca0"),a("bc3a")),de=a.n(se),ue=a("4328"),ce=a.n(ue);
/*!
* developer：zhang.lw
* axios 配置文件文件
*/
de.a.interceptors.response.use((function(e){if(re.state.loadding=!1,!e.status||200!=e.status||500!=e.data.status)return e.data.msg&&o["Message"].success({message:e.data.msg}),e.data;o["Message"].error({message:e.data.msg})}),(function(e){var t=e.response.status;504==t||404==t?o["Message"].error({message:"服务器被吃了。。。"}):403==t?o["Message"].error({message:"权限不足，清联系管理员！"}):401==t?o["Message"].error({message:"尚未登录，请登录。！"}):e.response.data.msg?o["Message"].error({message:e.response.data.msg}):o["Message"].error({message:"未知错误！！"})}));de.a.interceptors.request.use((function(e){var t=e["url"],a=ce.a.parse(e.data),n=a.loading,o=void 0===n||n,i=t.substring(t.lastIndexOf("/")+1);return!i.toLocaleLowerCase().startsWith("get")&&o?re.state.loadding=!0:re.state.loadding=!1,e}));var me="/tm4-dict-zjt-8992",be=function(e,t){return de()({method:"post",url:"".concat(me).concat(e),data:t,transformRequest:function(e){var t="";for(var a in e)t+=encodeURIComponent(a)+"="+encodeURIComponent(e[a])+"&";return t},headers:{"Content-Type":"application/x-www-form-urlencoded"}})},fe=function(e,t){return de()({method:"post",url:"".concat(me).concat(e),data:t})},he=function(e,t){return de()({method:"put",url:"".concat(me).concat(e),data:t})},pe=function(e,t){return de()({method:"delete",url:"".concat(me).concat(e),data:t})},ve=function(e,t){return de()({method:"get",url:"".concat(me).concat(e),data:t})};n["default"].prototype.getRequest=ve,n["default"].prototype.postRequest=fe,n["default"].prototype.putRequest=he,n["default"].prototype.deleteRequest=pe,n["default"].prototype.postKeyValueRequest=be,n["default"].config.productionTip=!1,n["default"].use(i.a),n["default"].use(r.a),r.a.use(d.a),new n["default"]({router:ie,store:re,render:function(e){return e(te)}}).$mount("#app")},"9a8f":function(e,t,a){"use strict";var n=a("4a98"),o=a.n(n);o.a},e176:function(e,t,a){"use strict";var n=a("2012"),o=a.n(n);o.a},e66a:function(e,t,a){"use strict";var n=a("0e4d"),o=a.n(n);o.a}});