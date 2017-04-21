webpackJsonp([25,91],{634:function(n,s){n.exports={content:["article",{},["h2","\u7279\u6027"],["ul",["li",["p","\u63d0\u70bc\u81ea\u4f01\u4e1a\u7ea7\u4e2d\u540e\u53f0\u4ea7\u54c1\u7684\u4ea4\u4e92\u8bed\u8a00\u548c\u89c6\u89c9\u98ce\u683c\u3002"]],["li",["p","\u57fa\u4e8e\u5353\u8d8a\u7684 Ant Design \u5b9e\u73b0\u7684\u9ad8\u8d28\u91cf Vue \u7ec4\u4ef6\u3002"]],["li",["p","\u57fa\u4e8e npm + webpack + babel + ",["a",{title:null,href:"https://vuejs.org"},"Vue2.0"]," \u7684\u5de5\u4f5c\u6d41\u3002"]]],["h2","\u652f\u6301\u73af\u5883"],["ul",["li",["p","\u73b0\u4ee3\u6d4f\u89c8\u5668\u548c IE9 \u53ca\u4ee5\u4e0a\u3002"]]],["h2","\u7248\u672c"],["ul",["li",["p","\u5f00\u53d1\u7248\uff1a",["a",{title:null,href:"https://www.npmjs.org/package/antv"},["img",{title:null,src:"https://img.shields.io/npm/v/antv.svg?style=flat-square",alt:"npm package"}]]]]],["h2","\u5b89\u88c5"],["h3","\u4f7f\u7528 npm \u5b89\u88c5"],["p",["strong","\u6211\u4eec\u63a8\u8350\u4f7f\u7528 npm \u7684\u65b9\u5f0f\u8fdb\u884c\u5f00\u53d1"],"\uff0c\u4e0d\u4ec5\u53ef\u5728\u5f00\u53d1\u73af\u5883\u8f7b\u677e\u8c03\u8bd5\uff0c\u4e5f\u53ef\u653e\u5fc3\u5730\u5728\u751f\u4ea7\u73af\u5883\u6253\u5305\u90e8\u7f72\u4f7f\u7528\uff0c\u4eab\u53d7\u6574\u4e2a\u751f\u6001\u5708\u548c\u5de5\u5177\u94fe\u5e26\u6765\u7684\u8bf8\u591a\u597d\u5904\u3002"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> <span class="token function">install</span> antv --save'},["code","$ npm install antv --save"]],["p","\u5982\u679c\u4f60\u7684\u7f51\u7edc\u73af\u5883\u4e0d\u4f73\uff0c\u63a8\u8350\u4f7f\u7528 ",["a",{title:null,href:"https://github.com/cnpm/cnpm"},"cnpm"],"\u3002"],["h3","\u6d4f\u89c8\u5668\u5f15\u5165"],["p","\u5728\u6d4f\u89c8\u5668\u4e2d\u4f7f\u7528 ",["code","script"]," \u548c ",["code","link"]," \u6807\u7b7e\u76f4\u63a5\u5f15\u5165\u6587\u4ef6\uff0c\u5e76\u4f7f\u7528\u5168\u5c40\u53d8\u91cf ",["code","antv"],"\u3002"],["p","\u6211\u4eec\u5728 npm \u53d1\u5e03\u5305\u5185\u7684 ",["code","antv/dist"]," \u76ee\u5f55\u4e0b\u63d0\u4f9b\u4e86 ",["code","antv.js"]," ",["code","antv.css"]," \u4ee5\u53ca ",["code","antv.min.js"]," ",["code","antv.min.css"],"\u3002"],["h2","\u793a\u4f8b"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">\'vue\'</span>\n<span class="token keyword">import</span> Antv <span class="token keyword">from</span> <span class="token string">\'antv\'</span>\n<span class="token keyword">import</span> <span class="token string">\'antv/dist/antv.css\'</span>\n\nVue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Antv<span class="token punctuation">)</span>\n\n<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  el<span class="token punctuation">:</span> <span class="token string">\'#app\'</span><span class="token punctuation">,</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n     <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Primary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-button</span><span class="token punctuation">></span></span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>'},["code","import Vue from 'vue'\nimport Antv from 'antv'\nimport 'antv/dist/antv.css'\n\nVue.use(Antv)\n\nnew Vue({\n  el: '#app',\n  render() {\n     return (<v-button type=\"primary\">Primary</v-button>)\n  }\n})"]],["h2","\u94fe\u63a5"],["ul",["li",["p",["a",{title:null,href:"http://ant.design/"},"Antd"]]],["li",["p",["a",{title:null,href:"http://element.eleme.io"},"Element UI"]]],["li",["p",["a",{title:null,href:"/docs/vue/introduce"},"UI \u7ec4\u4ef6\u5e93"]]],["li",["p",["a",{title:null,href:"https://github.com/ant-design/ant-design/wiki/Ant-Design-%E8%AE%BE%E8%AE%A1%E5%9F%BA%E7%A1%80%E7%AE%80%E7%89%88"},"\u8bbe\u8ba1\u89c4\u8303\u901f\u67e5\u624b\u518c"]]],["li",["p",["a",{title:null,href:"https://github.com/websemantics/awesome-ant-design"},"Awesome Ant Design"]]]]],meta:{order:0,title:"Ant Design of Vue",filename:"docs/vue/introduce.zh-CN.md"},description:["section",["p","\u8fd9\u91cc\u662f Ant Design \u7684 Vue \u5b9e\u73b0\uff0c\u5f00\u53d1\u548c\u670d\u52a1\u4e8e\u4f01\u4e1a\u7ea7\u540e\u53f0\u4ea7\u54c1\u3002\u8fd9\u91cc\u662f",["a",{title:null,href:"https://ant.design/docs/react/introduce-cn"},"React\u5b9e\u73b0"],"\u3002"],["style","\n.pic-plus > * {\n  display: inline-block!important;\n  vertical-align: middle;\n}\n.pic-plus span {\n  font-size: 30px;\n  color: #aaa;\n  margin: 0 20px;\n}\n"]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u7279\u6027",title:"\u7279\u6027"},"\u7279\u6027"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u652f\u6301\u73af\u5883",title:"\u652f\u6301\u73af\u5883"},"\u652f\u6301\u73af\u5883"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u7248\u672c",title:"\u7248\u672c"},"\u7248\u672c"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5b89\u88c5",title:"\u5b89\u88c5"},"\u5b89\u88c5"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u793a\u4f8b",title:"\u793a\u4f8b"},"\u793a\u4f8b"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u94fe\u63a5",title:"\u94fe\u63a5"},"\u94fe\u63a5"]]]}}});