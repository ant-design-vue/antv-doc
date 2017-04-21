webpackJsonp([13,78],{491:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u624b\u98ce\u7434\uff0c\u6bcf\u6b21\u53ea\u6253\u5f00\u4e00\u4e2atab\u3002\u9ed8\u8ba4\u6253\u5f00\u7b2c\u4e00\u4e2a\u3002"]],"en-US":[["p","Accordion mode, only one panel can be expanded at a time. The first panel will be expanded by default."]]},meta:{order:1,title:{"zh-CN":"\u624b\u98ce\u7434","en-US":"Accordion"},filename:"components/collapse/demo/accordion.md",id:"components-collapse-demo-accordion"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-collapse</span> <span class="token attr-name">accordion</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-panel</span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>This</span> <span class="token attr-name">is</span> <span class="token attr-name">panel</span> <span class="token attr-name">header</span> <span class="token attr-name">1"</span> <span class="token attr-name">index</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-panel</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-panel</span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>This</span> <span class="token attr-name">is</span> <span class="token attr-name">panel</span> <span class="token attr-name">header</span> <span class="token attr-name">2"</span> <span class="token attr-name">index</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-panel</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-panel</span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>This</span> <span class="token attr-name">is</span> <span class="token attr-name">panel</span> <span class="token attr-name">header</span> <span class="token attr-name">3"</span> <span class="token attr-name">index</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-panel</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-collapse</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        text<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`A dog is a type of domesticated animal.\n        Known for its loyalty and faithfulness,\n        it can be found as a welcome guest in many households across the world.\n        `</span></span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>',preview:function(){return new Promise(function(n){s.e(160,function(a){n(s(1131))})})}}},492:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u53ef\u4ee5\u540c\u65f6\u5c55\u5f00\u591a\u4e2a\u9762\u677f\uff0c\u8fd9\u4e2a\u4f8b\u5b50\u9ed8\u8ba4\u5c55\u5f00\u4e86\u7b2c\u4e00\u4e2a\u3002"]],"en-US":[["p","More than one panel can be expanded at a time, the first panel is initialized to be active in this case."]]},meta:{order:0,title:{"zh-CN":"\u6298\u53e0\u9762\u677f","en-US":"Collapse"},filename:"components/collapse/demo/basic.md",id:"components-collapse-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-collapse</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>defaultActiveIndex<span class="token punctuation">"</span></span> <span class="token attr-name">@onChange</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>onChange<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-panel</span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>This</span> <span class="token attr-name">is</span> <span class="token attr-name">panel</span> <span class="token attr-name">header</span> <span class="token attr-name">1"</span> <span class="token attr-name">index</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-panel</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-panel</span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>This</span> <span class="token attr-name">is</span> <span class="token attr-name">panel</span> <span class="token attr-name">header</span> <span class="token attr-name">2"</span> <span class="token attr-name">index</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-panel</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-panel</span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>This</span> <span class="token attr-name">is</span> <span class="token attr-name">panel</span> <span class="token attr-name">header</span> <span class="token attr-name">3"</span> <span class="token attr-name">index</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-panel</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-collapse</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        text<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`A dog is a type of domesticated animal.\n        Known for its loyalty and faithfulness,\n        it can be found as a welcome guest in many households across the world.\n        `</span></span><span class="token punctuation">,</span>\n        defaultActiveIndex<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'1\'</span><span class="token punctuation">]</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    methods<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      <span class="token function">onChange</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>',preview:function(){return new Promise(function(n){s.e(159,function(a){n(s(1132))})})}}},493:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u4e00\u5957\u6ca1\u6709\u8fb9\u6846\u7684\u7b80\u6d01\u6837\u5f0f\u3002"]],"en-US":[["p","A borderless style of Collapse."]]},meta:{order:3,title:{"zh-CN":"\u7b80\u6d01\u98ce\u683c","en-US":"Borderless"},filename:"components/collapse/demo/borderless.md",id:"components-collapse-demo-borderless"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-collapse</span> <span class="token attr-name">:bordered</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>defaultActiveIndex<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-panel</span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>This</span> <span class="token attr-name">is</span> <span class="token attr-name">panel</span> <span class="token attr-name">header</span> <span class="token attr-name">1"</span> <span class="token attr-name">index</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-panel</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-panel</span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>This</span> <span class="token attr-name">is</span> <span class="token attr-name">panel</span> <span class="token attr-name">header</span> <span class="token attr-name">2"</span> <span class="token attr-name">index</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-panel</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-panel</span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>This</span> <span class="token attr-name">is</span> <span class="token attr-name">panel</span> <span class="token attr-name">header</span> <span class="token attr-name">3"</span> <span class="token attr-name">index</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-panel</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-collapse</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        text<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`A dog is a type of domesticated animal.\n        Known for its loyalty and faithfulness,\n        it can be found as a welcome guest in many households across the world.\n        `</span></span><span class="token punctuation">,</span>\n        defaultActiveIndex<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'1\'</span><span class="token punctuation">]</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>',preview:function(){return new Promise(function(n){s.e(158,function(a){n(s(1133))})})}}},494:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u81ea\u5b9a\u4e49\u5404\u4e2a\u9762\u677f\u7684\u80cc\u666f\u8272\u3001\u5706\u89d2\u548c\u8fb9\u8ddd\u3002"]],"en-US":[["p","Customize the background, border and margin styles for each panel."]]},meta:{order:3,title:{"zh-CN":"\u81ea\u5b9a\u4e49\u9762\u677f","en-US":"Custom Panel"},filename:"components/collapse/demo/custom.md",id:"components-collapse-demo-custom"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-collapse</span> <span class="token attr-name">:bordered</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>defaultActiveIndex<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-panel</span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>This</span> <span class="token attr-name">is</span> <span class="token attr-name">panel</span> <span class="token attr-name">header</span> <span class="token attr-name">1"</span> <span class="token attr-name">index</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token attr-name">:</span><span class="token style-attr language-css"><span class="token attr-name"><span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value">style</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-panel</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-panel</span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>This</span> <span class="token attr-name">is</span> <span class="token attr-name">panel</span> <span class="token attr-name">header</span> <span class="token attr-name">2"</span> <span class="token attr-name">index</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token attr-name">:</span><span class="token style-attr language-css"><span class="token attr-name"><span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value">style</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-panel</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-panel</span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>This</span> <span class="token attr-name">is</span> <span class="token attr-name">panel</span> <span class="token attr-name">header</span> <span class="token attr-name">3"</span> <span class="token attr-name">index</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token attr-name">:</span><span class="token style-attr language-css"><span class="token attr-name"><span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value">style</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-panel</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-collapse</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        style<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          background<span class="token punctuation">:</span> <span class="token string">\'#f7f7f7\'</span><span class="token punctuation">,</span>\n          borderRadius<span class="token punctuation">:</span> <span class="token string">"4px"</span><span class="token punctuation">,</span>\n          marginBottom<span class="token punctuation">:</span> <span class="token string">"24px"</span><span class="token punctuation">,</span>\n          border<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        text<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`A dog is a type of domesticated animal.\n        Known for its loyalty and faithfulness,\n        it can be found as a welcome guest in many households across the world.\n        `</span></span><span class="token punctuation">,</span>\n        defaultActiveIndex<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'1\'</span><span class="token punctuation">]</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>',preview:function(){return new Promise(function(n){s.e(157,function(a){n(s(1134))})})}}},495:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u5d4c\u5957\u6298\u53e0\u9762\u677f\u3002"]],"en-US":[["p",["code","Collapse"]," is nested inside the ",["code","Collapse"],"."]]},meta:{order:2,title:{"zh-CN":"\u9762\u677f\u5d4c\u5957","en-US":"Nested panel"},filename:"components/collapse/demo/mix.md",id:"components-collapse-demo-mix"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n  <span class="token operator">&lt;</span>v<span class="token operator">-</span>collapse @onChange<span class="token operator">=</span><span class="token string">"onChange"</span><span class="token operator">></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-panel</span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>This</span> <span class="token attr-name">is</span> <span class="token attr-name">panel</span> <span class="token attr-name">header</span> <span class="token attr-name">1"</span> <span class="token attr-name">index</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-collapse</span> <span class="token attr-name">defaultActiveIndex</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-panel</span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>This</span> <span class="token attr-name">is</span> <span class="token attr-name">panel</span> <span class="token attr-name">nest</span> <span class="token attr-name">panel"</span> <span class="token attr-name">index</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-panel</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-collapse</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-panel</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-panel</span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>This</span> <span class="token attr-name">is</span> <span class="token attr-name">panel</span> <span class="token attr-name">header</span> <span class="token attr-name">2"</span> <span class="token attr-name">index</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-panel</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-panel</span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>This</span> <span class="token attr-name">is</span> <span class="token attr-name">panel</span> <span class="token attr-name">header</span> <span class="token attr-name">3"</span> <span class="token attr-name">index</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-panel</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-collapse</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        text<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`A dog is a type of domesticated animal.\n        Known for its loyalty and faithfulness,\n        it can be found as a welcome guest in many households across the world.\n        `</span></span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    methods<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      <span class="token function">onChange</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>',
preview:function(){return new Promise(function(n){s.e(156,function(a){n(s(1135))})})}}},629:function(n,a,s){n.exports={accordion:s(491),basic:s(492),borderless:s(493),custom:s(494),mix:s(495)}}});