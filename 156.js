webpackJsonp([156,78],{1:function(e,t){e.exports=function(e,t,n,a){var o,s=e=e||{},r=typeof e["default"];"object"!==r&&"function"!==r||(o=e,s=e["default"]);var i="function"==typeof s?s.options:s;if(t&&(i.render=t.render,i.staticRenderFns=t.staticRenderFns),n&&(i._scopeId=n),a){var d=Object.create(i.computed||null);Object.keys(a).forEach(function(e){var t=a[e];d[e]=function(){return t}}),i.computed=d}return{esModule:o,exports:s,options:i}}},351:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={data:function(){return{text:"A dog is a type of domesticated animal.\n      Known for its loyalty and faithfulness,\n      it can be found as a welcome guest in many households across the world.\n      "}},methods:{onChange:function(e){console.log(e)}}},e.exports=t["default"]},1135:function(e,t,n){var a=n(1)(n(351),n(1307),null,null);e.exports=a.exports},1307:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-collapse",{on:{onChange:e.onChange}},[n("v-panel",{attrs:{header:"This is panel header 1",index:"1"}},[n("v-collapse",{attrs:{defaultActiveIndex:"1"}},[n("v-panel",{attrs:{header:"This is panel nest panel",index:"1"}},[n("p",[e._v(e._s(e.text))])])],1)],1),n("v-panel",{attrs:{header:"This is panel header 2",index:"2"}},[n("p",[e._v(e._s(e.text))])]),n("v-panel",{attrs:{header:"This is panel header 3",index:"3"}},[n("p",[e._v(e._s(e.text))])])],1)},staticRenderFns:[]}}});