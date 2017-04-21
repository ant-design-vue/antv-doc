webpackJsonp([19,91],{504:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002"]],"en-US":[["p","The simplest use"]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic Usage"},filename:"components/breadcrumb/demo/basic.md",id:"components-breadcrumb-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-breadcrumb</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-breadcrumb-item</span><span class="token punctuation">></span></span>Home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-breadcrumb-item</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-breadcrumb-item</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Application Center<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-breadcrumb-item</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-breadcrumb-item</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Application List<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-breadcrumb-item</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-breadcrumb-item</span><span class="token punctuation">></span></span>An Application<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-breadcrumb-item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-breadcrumb</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>',preview:function(){return new Promise(function(n){s.e(207,function(a){n(s(1165))})})}}},505:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u548c ",["code","vue-router@2+"]," \u8fdb\u884c\u7ed3\u5408\u4f7f\u7528\u3002"]],"en-US":[["p","Used together with ",["code","vue-router@2+"],"."]]},meta:{order:2,iframe:200,title:{"zh-CN":"\u8def\u7531","en-US":"React Router Integration"},filename:"components/breadcrumb/demo/router.md",id:"components-breadcrumb-demo-router"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-breadcrumb</span> <span class="token attr-name">separator</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-breadcrumb-item</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>{</span> <span class="token attr-name"><span class="token namespace">path:</span></span> <span class="token attr-name">\'</span>/<span class="token attr-name">\'}"</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>home<span class="token punctuation">"</span>/</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-breadcrumb-item</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-breadcrumb-item</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>./<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>user<span class="token punctuation">"</span>/</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>Application List<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-breadcrumb-item</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-breadcrumb-item</span><span class="token punctuation">></span></span>Application<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-breadcrumb-item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-breadcrumb</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style language-css">\n  <span class="token selector"><span class="token class">.demo</span> </span><span class="token punctuation">{</span>\n    <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">16</span>px<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector"><span class="token class">.demo-nav</span> </span><span class="token punctuation">{</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">30</span>px<span class="token punctuation">;</span>\n    <span class="token property">line-height</span><span class="token punctuation">:</span> <span class="token number">30</span>px<span class="token punctuation">;</span>\n    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token number">16</span>px<span class="token punctuation">;</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token hexcode">#f8f8f8</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector"><span class="token class">.demo-nav</span> a </span><span class="token punctuation">{</span>\n    <span class="token property">line-height</span><span class="token punctuation">:</span> <span class="token number">30</span>px<span class="token punctuation">;</span>\n    <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">8</span>px<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector"><span class="token class">.app-list</span> </span><span class="token punctuation">{</span>\n    <span class="token property">margin-top</span><span class="token punctuation">:</span> <span class="token number">16</span>px<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span>\n  <span class="token keyword">import</span> VueRouter <span class="token keyword">from</span> <span class="token string">\'vue-router\'</span>\n\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    router<span class="token punctuation">:</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        mode<span class="token punctuation">:</span> <span class="token string">\'history\'</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>',preview:function(){return new Promise(function(n){s.e(93,function(a){n(s(1166))})})},src:"/demo-0.834081970943674.html"}},506:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u4f7f\u7528 ",["code",'separator=">"']," \u53ef\u4ee5\u81ea\u5b9a\u4e49\u5206\u9694\u7b26\u3002"]],"en-US":[["p",'The separator can be customized by setting the separator property: separator=">"']]},meta:{order:3,title:{"zh-CN":"\u5206\u9694\u7b26","en-US":"Configuring the Separator"},filename:"components/breadcrumb/demo/separator.md",id:"components-breadcrumb-demo-separator"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-breadcrumb</span> <span class="token attr-name">separator="</span><span class="token punctuation">></span><span class="token attr-name">"</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-breadcrumb-item</span><span class="token punctuation">></span></span>Home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-breadcrumb-item</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-breadcrumb-item</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Application Center<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-breadcrumb-item</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-breadcrumb-item</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Application List<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-breadcrumb-item</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-breadcrumb-item</span><span class="token punctuation">></span></span>An Application<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-breadcrumb-item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-breadcrumb</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>',preview:function(){return new Promise(function(n){s.e(206,function(a){n(s(1167))})})}}},507:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u56fe\u6807\u653e\u5728\u6587\u5b57\u524d\u9762\u3002"]],"en-US":[["p","The icon should be placed in front of the text."]]},meta:{order:1,title:{"zh-CN":"\u5e26\u6709\u56fe\u6807\u7684","en-US":"With an Icon"},filename:"components/breadcrumb/demo/withIcon.md",id:"components-breadcrumb-demo-withIcon"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-breadcrumb</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-breadcrumb-item</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>home<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-breadcrumb-item</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-breadcrumb-item</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>user<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>Application List<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-breadcrumb-item</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-breadcrumb-item</span><span class="token punctuation">></span></span>\n        Application\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-breadcrumb-item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-breadcrumb</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>',preview:function(){return new Promise(function(n){s.e(205,function(a){n(s(1168))})})}}},679:function(n,a,s){n.exports={basic:s(504),router:s(505),separator:s(506),withIcon:s(507)}}});