(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{1445:function(n,t,e){"use strict";var a=e("26f4"),i=e.n(a);i.a},"26f4":function(n,t,e){var a=e("60e5");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=e("4f06").default;i("40edfbb9",a,!0,{sourceMap:!0,shadowMode:!1})},"4cfb":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(e("a34a"));function i(n){return n&&n.__esModule?n:{default:n}}function r(n,t,e,a,i,r,p){try{var o=n[r](p),s=o.value}catch(u){return void e(u)}o.done?t(s):Promise.resolve(s).then(a,i)}function p(n){return function(){var t=this,e=arguments;return new Promise((function(a,i){var p=n.apply(t,e);function o(n){r(p,a,i,o,s,"next",n)}function s(n){r(p,a,i,o,s,"throw",n)}o(void 0)}))}}var o={components:{},props:{},onShow:function(){},onReady:function(){},onUnload:function(){},onPullDownRefresh:function(){var n=p(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:uni.stopPullDownRefresh();case 1:case"end":return n.stop()}}),n)})));function t(){return n.apply(this,arguments)}return t}(),onReachBottom:function(){var n=p(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:case"end":return n.stop()}}),n)})));function t(){return n.apply(this,arguments)}return t}(),data:function(){return{autoplay:!0,interval:2e3,duration:1e3}},computed:{},methods:{toWebview:function(){this.$f.toPage("webview",{url:"http://unidemo.lj4.top/lj-utils/0.1.5/index.html"})},toCase:function(){this.$f.toPage("case/case")},hiTip:function(){var n=p(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:this.DialogShow({msg:"这里是linjielinlin的组件库！"});case 1:case"end":return n.stop()}}),n,this)})));function t(){return n.apply(this,arguments)}return t}(),init:function(){var n=p(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:case"end":return n.stop()}}),n)})));function t(){return n.apply(this,arguments)}return t}()}};t.default=o},"608f":function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return a}));var a={ljDialog:e("d956").default},i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"index bg-w-full"},[e("v-uni-view",{staticClass:"uni-margin-wrap"},[e("v-uni-swiper",{staticClass:"swiper",attrs:{circular:!0,"indicator-dots":!0,autoplay:n.autoplay,interval:n.interval,duration:n.duration}},[e("v-uni-swiper-item",[e("v-uni-image",{staticClass:"image",attrs:{mode:"aspectFill",src:"https://img.lj4.top/test/1.jpg"}})],1),e("v-uni-swiper-item",[e("v-uni-image",{staticClass:"image",attrs:{mode:"aspectFill",src:"https://img.lj4.top/test/2.jpg"}})],1),e("v-uni-swiper-item",[e("v-uni-image",{staticClass:"image",attrs:{mode:"aspectFill",src:"https://img.lj4.top/test/3.jpg"}})],1)],1)],1),e("v-uni-view",{staticClass:"pd-lr20"},[e("v-uni-button",{staticClass:"mg-t20",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.hiTip.apply(void 0,arguments)}}},[n._v("欢迎使用")]),e("v-uni-button",{staticClass:"mg-t20",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.toWebview.apply(void 0,arguments)}}},[n._v("打开webview！")]),e("v-uni-button",{staticClass:"mg-t20",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.toCase.apply(void 0,arguments)}}},[n._v("项目列表")]),e("v-uni-button",{staticClass:"mg-t20",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.$f.toPage("my","","switchTab")}}},[n._v("我的")])],1),e("lj-dialog",{attrs:{c:n.DialogC},on:{mixinChange:function(t){arguments[0]=t=n.$handleEvent(t),n.ComChange.apply(void 0,arguments)}}})],1)},r=[]},"60e5":function(n,t,e){var a=e("24fb");t=a(!0),t.push([n.i,'@charset "UTF-8";\n/* 全局变量 add by lj */\n/**\n* 设置n行，超出显示...\n**/\n/**\n* 旋转角度\n**/\n/**\n* [oFsSet 设置12到40px 的字体大小相隔2pxeg:fs-12]\n* @param  {[type]} $l:14    [长度]\n* @param  {[type]} $mul:2   [间隔]\n* @param  {[type]} $unit:px [单位]\n* @param  {[type]} $d:12    [最小字体大小]\n* @return {[type]}          [description]\n*/\n/**\n* [oPdMgSet 默认设置5到60的各个padding margin]\n* @param  {[type]} $max:12   [循环次数，从0开始]\n* @param  {[type]} $mul:5  [倍数]\n* @param  {[type]} $unit:px [单位]\n* @param  {[type]} $d:px [基数]\n* @return {[type]}          [description]\n*/\n/**\n* [默认btn样式]\n*/\n/**\n* [iCB clear both清除浮动]\n* @param  {[type]} $old:false [true为生成兼容低版本的浏览器]\n* @return {[type]}            [description]\n*/\n/**\n* [iBtnBgColor 设置btn背景加hover,active时变亮变暗]\n* @param  {[type]} $color:gray     [初始颜色]\n* @param  {[type]} $type:1         [=0使用传入的颜色，>1变亮，<1变暗]\n* @param  {[type]} $hover:2        [hover颜色或百分比]\n* @param  {[type]} $active:10      [active颜色或百分比]\n* @param  {[type]} $time:1         [动画时间 eg:0.3s]\n* @param  {[type]} $animation:1    [动画属性 eg: ease]\n* @return {[type]}             [description]\n*/\n/* <flex> */\n/* *\n* 移动端1px处理\n* */\n/**\nicon背景\neg: @include iIcon(close,16)\n**/\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.index .image[data-v-1cdcc0b4]{width:100%;height:40vw}',"",{version:3,sources:["index.vue"],names:[],mappings:"AAAA,gBAAgB;AAChB,mBAAmB;AACnB;;EAEE;AACF;;EAEE;AACF;;;;;;;CAOC;AACD;;;;;;;CAOC;AACD;;CAEC;AACD;;;;CAIC;AACD;;;;;;;;;CASC;AACD,WAAW;AACX;;GAEG;AACH;;;EAGE;AACF;;;;;;EAME;AACF;;;;EAIE;AACF,SAAS;AACT,WAAW;AACX,WAAW;AACX,SAAS;AACT,SAAS;AACT,SAAS;AACT,SAAS;AACT,SAAS;AACT,kBAAkB;AAClB,SAAS;AACT,SAAS;AACT,QAAQ;AACR,WAAW,CAAC,+BAA+B,UAAU,CAAC,WAAW",file:"index.vue",sourcesContent:['@charset "UTF-8";\n/* 全局变量 add by lj */\n/**\n* 设置n行，超出显示...\n**/\n/**\n* 旋转角度\n**/\n/**\n* [oFsSet 设置12到40px 的字体大小相隔2pxeg:fs-12]\n* @param  {[type]} $l:14    [长度]\n* @param  {[type]} $mul:2   [间隔]\n* @param  {[type]} $unit:px [单位]\n* @param  {[type]} $d:12    [最小字体大小]\n* @return {[type]}          [description]\n*/\n/**\n* [oPdMgSet 默认设置5到60的各个padding margin]\n* @param  {[type]} $max:12   [循环次数，从0开始]\n* @param  {[type]} $mul:5  [倍数]\n* @param  {[type]} $unit:px [单位]\n* @param  {[type]} $d:px [基数]\n* @return {[type]}          [description]\n*/\n/**\n* [默认btn样式]\n*/\n/**\n* [iCB clear both清除浮动]\n* @param  {[type]} $old:false [true为生成兼容低版本的浏览器]\n* @return {[type]}            [description]\n*/\n/**\n* [iBtnBgColor 设置btn背景加hover,active时变亮变暗]\n* @param  {[type]} $color:gray     [初始颜色]\n* @param  {[type]} $type:1         [=0使用传入的颜色，>1变亮，<1变暗]\n* @param  {[type]} $hover:2        [hover颜色或百分比]\n* @param  {[type]} $active:10      [active颜色或百分比]\n* @param  {[type]} $time:1         [动画时间 eg:0.3s]\n* @param  {[type]} $animation:1    [动画属性 eg: ease]\n* @return {[type]}             [description]\n*/\n/* <flex> */\n/* *\n* 移动端1px处理\n* */\n/**\nicon背景\neg: @include iIcon(close,16)\n**/\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.index .image[data-v-1cdcc0b4]{width:100%;height:40vw}']}]),n.exports=t},8069:function(n,t,e){"use strict";e.r(t);var a=e("4cfb"),i=e.n(a);for(var r in a)["default"].indexOf(r)<0&&function(n){e.d(t,n,(function(){return a[n]}))}(r);t["default"]=i.a},f75a:function(n,t,e){"use strict";e.r(t);var a=e("608f"),i=e("8069");for(var r in i)["default"].indexOf(r)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(r);e("1445");var p,o=e("f0c5"),s=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"1cdcc0b4",null,!1,a["a"],p);t["default"]=s.exports}}]);