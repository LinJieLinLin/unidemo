(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-com-editor-index"],{"0a28":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={props:{i:{type:String,required:!0}},computed:{}};t.default=a},3027:function(n,t,e){"use strict";var a;e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return a}));var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return[e("svg",{staticClass:"lj-icon",class:n.i,attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#"+n.i}})])]},r=[]},"3fe5":function(n,t,e){"use strict";var a=e("8cd5"),i=e.n(a);i.a},"415f":function(n,t,e){"use strict";e.r(t);var a=e("77e0"),i=e("681b");for(var r in i)["default"].indexOf(r)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(r);e("7a8e");var o,c=e("f0c5"),s=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"5947a7c8",null,!1,a["a"],o);t["default"]=s.exports},"681b":function(n,t,e){"use strict";e.r(t);var a=e("bb64"),i=e.n(a);for(var r in a)["default"].indexOf(r)<0&&function(n){e.d(t,n,(function(){return a[n]}))}(r);t["default"]=i.a},"77e0":function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return a}));var a={ljIcon:e("f858").default},i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"pd-lr10"},[e("v-uni-view",{staticClass:"page flex-column pd-lr10"},[e("v-uni-input",{staticClass:"pd-f10 mg-tb10 flex0 bg-w",attrs:{maxlength:"100","confirm-type":"done",placeholder:"请输入标题"},model:{value:n.data.title,callback:function(t){n.$set(n.data,"title",t)},expression:"data.title"}}),e("v-uni-editor",{staticClass:"flex1 ql-editor",attrs:{id:"editor",placeholder:"请输入内容","show-img-toolbar":!0},on:{ready:function(t){arguments[0]=t=n.$handleEvent(t),n.eReady.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"tool-bar flex flex0 mg-b10 c-theme"},[e("div",{staticClass:"item",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.addImg.apply(void 0,arguments)}}},[e("lj-icon",{staticClass:"fs-18",attrs:{i:"i-img"}}),n._v("图片")],1),e("div",{staticClass:"item",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.undo.apply(void 0,arguments)}}},[e("lj-icon",{staticClass:"fs-18 undo",attrs:{i:"i-redo"}}),n._v("撤销")],1),e("div",{staticClass:"item",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.redo.apply(void 0,arguments)}}},[e("lj-icon",{staticClass:"fs-18",attrs:{i:"i-redo"}}),n._v("重做")],1),e("div",{staticClass:"item",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.submit.apply(void 0,arguments)}}},[e("lj-icon",{staticClass:"fs-18",attrs:{i:"i-save"}}),n._v("保存")],1),e("div",{staticClass:"item"},[n._v("要改为组件")])])],1)],1)},r=[]},"7a8e":function(n,t,e){"use strict";var a=e("a1cc"),i=e.n(a);i.a},"8cd5":function(n,t,e){var a=e("e8c2");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=e("4f06").default;i("cecb32fc",a,!0,{sourceMap:!0,shadowMode:!1})},a1cc:function(n,t,e){var a=e("cf56");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=e("4f06").default;i("09c941ea",a,!0,{sourceMap:!0,shadowMode:!1})},bab5:function(n,t,e){"use strict";e.r(t);var a=e("0a28"),i=e.n(a);for(var r in a)["default"].indexOf(r)<0&&function(n){e.d(t,n,(function(){return a[n]}))}(r);t["default"]=i.a},bb64:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(e("a34a"));function i(n){return n&&n.__esModule?n:{default:n}}function r(n,t,e,a,i,r,o){try{var c=n[r](o),s=c.value}catch(A){return void e(A)}c.done?t(s):Promise.resolve(s).then(a,i)}function o(n){return function(){var t=this,e=arguments;return new Promise((function(a,i){var o=n.apply(t,e);function c(n){r(o,a,i,c,s,"next",n)}function s(n){r(o,a,i,c,s,"throw",n)}c(void 0)}))}}var c={props:{},components:{},onLoad:function(n){},onShow:function(){},onReady:function(){this.init()},onUnload:function(){},onShareAppMessage:function(n){},onPullDownRefresh:function(){var n=o(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:uni.stopPullDownRefresh();case 1:case"end":return n.stop()}}),n)})));function t(){return n.apply(this,arguments)}return t}(),onReachBottom:function(){var n=o(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:case"end":return n.stop()}}),n)})));function t(){return n.apply(this,arguments)}return t}(),computed:{},data:function(){return{useDom:!1,editorHeight:"",editorCtx:null,data:{title:"",content:"<p>demo</p>"}}},methods:{undo:function(){this.editorCtx.undo()},redo:function(){this.editorCtx.redo()},eReady:function(){var n=o(a.default.mark((function n(t){var e;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,this.GetDom("#editor");case 2:e=n.sent,this.editorCtx=e.context,this.editorCtx.setContents({html:this.data.content});case 5:case"end":return n.stop()}}),n,this)})));function t(t){return n.apply(this,arguments)}return t}(),submit:function(){console.log("submit")},addImg:function(){var n=o(a.default.mark((function n(){var t,e=this;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,this.$f.P("chooseImage",{count:9});case 2:t=n.sent,t.tempFilePaths.map((function(n){var t={src:n,width:"100%",alt:"",extClass:"",success:function(n){console.log(n)}};e.editorCtx.insertImage(t)}));case 4:case"end":return n.stop()}}),n,this)})));function t(){return n.apply(this,arguments)}return t}(),init:function(){var n=o(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:case"end":return n.stop()}}),n)})));function t(){return n.apply(this,arguments)}return t}()}};t.default=c},cf56:function(n,t,e){var a=e("24fb");t=a(!0),t.push([n.i,'@charset "UTF-8";\n/* 全局变量 add by lj */\n/**\n* 设置n行，超出显示...\n**/\n/**\n* 旋转角度\n**/\n/**\n* [oFsSet 设置12到40px 的字体大小相隔2pxeg:fs-12]\n* @param  {[type]} $l:14    [长度]\n* @param  {[type]} $mul:2   [间隔]\n* @param  {[type]} $unit:px [单位]\n* @param  {[type]} $d:12    [最小字体大小]\n* @return {[type]}          [description]\n*/\n/**\n* [oPdMgSet 默认设置5到60的各个padding margin]\n* @param  {[type]} $max:12   [循环次数，从0开始]\n* @param  {[type]} $mul:5  [倍数]\n* @param  {[type]} $unit:px [单位]\n* @param  {[type]} $d:px [基数]\n* @return {[type]}          [description]\n*/\n/**\n* [默认btn样式]\n*/\n/**\n* [iCB clear both清除浮动]\n* @param  {[type]} $old:false [true为生成兼容低版本的浏览器]\n* @return {[type]}            [description]\n*/\n/**\n* [iBtnBgColor 设置btn背景加hover,active时变亮变暗]\n* @param  {[type]} $color:gray     [初始颜色]\n* @param  {[type]} $type:1         [=0使用传入的颜色，>1变亮，<1变暗]\n* @param  {[type]} $hover:2        [hover颜色或百分比]\n* @param  {[type]} $active:10      [active颜色或百分比]\n* @param  {[type]} $time:1         [动画时间 eg:0.3s]\n* @param  {[type]} $animation:1    [动画属性 eg: ease]\n* @return {[type]}             [description]\n*/\n/* <flex> */\n/* *\n* 移动端1px处理\n* */\n/**\nicon背景\neg: @include iIcon(close,16)\n**/\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.ql-editor[data-v-5947a7c8]{padding:2.66667vw 2.13333vw;background-color:silver}.tool-bar[data-v-5947a7c8]{background-color:#fff}.tool-bar .item[data-v-5947a7c8]{height:10.66667vw;padding:2.66667vw;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.tool-bar .item[data-v-5947a7c8]:hover{background-color:#fafafa;-webkit-transition:all .3s ease;-o-transition:all .3s ease;transition:all .3s ease}.tool-bar .item[data-v-5947a7c8]:active{background-color:#ebebeb}.tool-bar .undo[data-v-5947a7c8]{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}',"",{version:3,sources:["index.vue"],names:[],mappings:"AAAA,gBAAgB;AAChB,mBAAmB;AACnB;;EAEE;AACF;;EAEE;AACF;;;;;;;CAOC;AACD;;;;;;;CAOC;AACD;;CAEC;AACD;;;;CAIC;AACD;;;;;;;;;CASC;AACD,WAAW;AACX;;GAEG;AACH;;;EAGE;AACF;;;;;;EAME;AACF;;;;EAIE;AACF,SAAS;AACT,WAAW;AACX,WAAW;AACX,SAAS;AACT,SAAS;AACT,SAAS;AACT,SAAS;AACT,SAAS;AACT,kBAAkB;AAClB,SAAS;AACT,SAAS;AACT,QAAQ;AACR,WAAW,CAAC,4BAA4B,2BAA2B,CAAC,uBAAuB,CAAC,2BAA2B,qBAAqB,CAAC,iCAAiC,iBAAiB,CAAC,iBAAiB,CAAC,6BAA6B,CAAC,qBAAqB,CAAC,qBAAqB,CAAC,mBAAmB,CAAC,oBAAoB,CAAC,mBAAmB,CAAC,YAAY,CAAC,uBAAuB,CAAC,8BAA8B,CAAC,oBAAoB,CAAC,sBAAsB,CAAC,4BAA4B,CAAC,yBAAyB,CAAC,oBAAoB,CAAC,wBAAwB,CAAC,0BAA0B,CAAC,qBAAqB,CAAC,kBAAkB,CAAC,uCAAuC,wBAAwB,CAAC,+BAA+B,CAAC,0BAA0B,CAAC,uBAAuB,CAAC,wCAAwC,wBAAwB,CAAC,iCAAiC,iCAAiC,CAAC,yBAAyB",file:"index.vue",sourcesContent:['@charset "UTF-8";\n/* 全局变量 add by lj */\n/**\n* 设置n行，超出显示...\n**/\n/**\n* 旋转角度\n**/\n/**\n* [oFsSet 设置12到40px 的字体大小相隔2pxeg:fs-12]\n* @param  {[type]} $l:14    [长度]\n* @param  {[type]} $mul:2   [间隔]\n* @param  {[type]} $unit:px [单位]\n* @param  {[type]} $d:12    [最小字体大小]\n* @return {[type]}          [description]\n*/\n/**\n* [oPdMgSet 默认设置5到60的各个padding margin]\n* @param  {[type]} $max:12   [循环次数，从0开始]\n* @param  {[type]} $mul:5  [倍数]\n* @param  {[type]} $unit:px [单位]\n* @param  {[type]} $d:px [基数]\n* @return {[type]}          [description]\n*/\n/**\n* [默认btn样式]\n*/\n/**\n* [iCB clear both清除浮动]\n* @param  {[type]} $old:false [true为生成兼容低版本的浏览器]\n* @return {[type]}            [description]\n*/\n/**\n* [iBtnBgColor 设置btn背景加hover,active时变亮变暗]\n* @param  {[type]} $color:gray     [初始颜色]\n* @param  {[type]} $type:1         [=0使用传入的颜色，>1变亮，<1变暗]\n* @param  {[type]} $hover:2        [hover颜色或百分比]\n* @param  {[type]} $active:10      [active颜色或百分比]\n* @param  {[type]} $time:1         [动画时间 eg:0.3s]\n* @param  {[type]} $animation:1    [动画属性 eg: ease]\n* @return {[type]}             [description]\n*/\n/* <flex> */\n/* *\n* 移动端1px处理\n* */\n/**\nicon背景\neg: @include iIcon(close,16)\n**/\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.ql-editor[data-v-5947a7c8]{padding:2.66667vw 2.13333vw;background-color:silver}.tool-bar[data-v-5947a7c8]{background-color:#fff}.tool-bar .item[data-v-5947a7c8]{height:10.66667vw;padding:2.66667vw;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.tool-bar .item[data-v-5947a7c8]:hover{background-color:#fafafa;-webkit-transition:all .3s ease;-o-transition:all .3s ease;transition:all .3s ease}.tool-bar .item[data-v-5947a7c8]:active{background-color:#ebebeb}.tool-bar .undo[data-v-5947a7c8]{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}']}]),n.exports=t},e8c2:function(n,t,e){var a=e("24fb");t=a(!0),t.push([n.i,"\n.lj-icon[data-v-6e7d48dc]{width:1em;height:1em;vertical-align:-.15em;fill:currentColor;overflow:hidden}","",{version:3,sources:["index.vue"],names:[],mappings:";AACA,0BAA0B,SAAS,CAAC,UAAU,CAAC,qBAAqB,CAAC,iBAAiB,CAAC,eAAe",file:"index.vue",sourcesContent:["\n.lj-icon[data-v-6e7d48dc]{width:1em;height:1em;vertical-align:-.15em;fill:currentColor;overflow:hidden}"]}]),n.exports=t},f858:function(n,t,e){"use strict";e.r(t);var a=e("3027"),i=e("bab5");for(var r in i)["default"].indexOf(r)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(r);e("3fe5");var o,c=e("f0c5"),s=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"6e7d48dc",null,!1,a["a"],o);t["default"]=s.exports}}]);