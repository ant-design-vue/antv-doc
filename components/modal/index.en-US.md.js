webpackJsonp([51,78],{545:function(t,e){t.exports={content:["section",["p","Modal dialogs."],["h2","When To Use"],["p","When requiring users to interact with application, but without jumping to a new page to interrupt\nthe user's workflow, you can use ",["code","Modal"]," to create a new floating layer over the current page for user\ngetting feedback or information purposes.\nAdditionally, if you need show a simple confirmation dialog, you can use ",["code","Vue.$modal.confirm()"],",\nand so on."]],meta:{type:"Feedback",category:"Components",title:"Modal",filename:"components/modal/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","value"],["td","Determine whether a modal dialog is visible or not"],["td","boolean"],["td","no"]],["tr",["td","confirmLoading"],["td","Determine whether to apply loading visual effect for OK button or not"],["td","boolean"],["td","no"]],["tr",["td","title"],["td","The modal dialog's title"],["td","string","|","vnode"],["td","no"]],["tr",["td","closable"],["td","Determine whether a close (x) button is visible on top right of the modal dialog or not"],["td","boolean"],["td","true"]],["tr",["td","onOk"],["td","Specify a function that will be called when a user clicked OK button"],["td","function(e)"],["td","no"]],["tr",["td","onCancel"],["td","Specify a function that will be called when a user clicked mask, close button on top right or cancel button"],["td","function(e)"],["td","no"]],["tr",["td","width"],["td","Width of a modal dialog"],["td","string","|","number"],["td","520"]],["tr",["td","footer"],["td","Footer content, set as ",["code","footer={null}"]," when you don't need default buttons"],["td","string","|","vnode"],["td","OK and cancel button"]],["tr",["td","okText"],["td","Text of the OK button"],["td","string"],["td","OK"]],["tr",["td","cancelText"],["td","Text of the Cancel button"],["td","string"],["td","Cancel"]],["tr",["td","maskClosable"],["td","Determine whether to close the modal dialog when clicked mask of it."],["td","boolean"],["td","true"]],["tr",["td","style"],["td","Style of floating layer, typically used at least for adjusting the position."],["td","object"],["td","-"]],["tr",["td","wrapClassName"],["td","The class name of the container of the modal dialog"],["td","string"],["td","-"]],["tr",["td","afterClose"],["td","Specify a function that will be called when modal is closed completely."],["td","function"],["td","-"]]]],["h3","$modal.xxx()"],["p","There are five ways to display the information based on the content's nature:"],["ul",["li",["p",["code","$modal.info"]]],["li",["p",["code","$modal.success"]]],["li",["p",["code","$modal.error"]]],["li",["p",["code","$modal.warning"]]],["li",["p",["code","$modal.confirm"]]]],["p","The items listed above are all functions, expecting a settings object as parameter.\nThe properties of the object are follows:"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","title"],["td","Title"],["td","string","|","vnode"],["td","no"]],["tr",["td","content"],["td","Content"],["td","string","|","vnode"],["td","no"]],["tr",["td","onOk"],["td","Specify a function that will be called when a user clicked OK button. The parameter of this function is a function whose execution should include closing the dialog."],["td","function"],["td","no"]],["tr",["td","onCancel"],["td","Specify a function that will be called when a user clicked Cancel button. The parameter of this function is a function whose execution should include closing the dialog."],["td","function"],["td","no"]],["tr",["td","width"],["td","Width of dialog"],["td","string","|","number"],["td","416"]],["tr",["td","iconType"],["td","Type of Icon component"],["td","string"],["td","question-circle"]],["tr",["td","okText"],["td","Text of OK button"],["td","string"],["td","OK"]],["tr",["td","cancelText"],["td","Text of cancel button"],["td","string"],["td","Cancel"]],["tr",["td","maskClosable"],["td","Determine whether to close the modal dialog when clicked mask of it."],["td","Boolean"],["td",["code","false"]]]]],["style","\n.code-box-demo .ant-btn {\n  margin-right: 8px;\n}\n"]]}}});