(this["webpackJsonpfeedback-form"]=this["webpackJsonpfeedback-form"]||[]).push([[0],{13:function(e,a,t){e.exports=t(26)},18:function(e,a,t){},19:function(e,a,t){},25:function(e,a,t){},26:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),n=t(6),i=t.n(n),o=(t(18),t(2)),s=t(7),m=t(8),c=t(11),d=t(12);t(19);function u(){return(u=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}function f(e,a){if(null==e)return{};var t,l,r=function(e,a){if(null==e)return{};var t,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)t=n[l],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)t=n[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var v=r.a.createElement("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),p=r.a.createElement("polyline",{points:"17 8 12 3 7 8"}),g=r.a.createElement("line",{x1:12,y1:3,x2:12,y2:15}),h=function(e){var a=e.svgRef,t=e.title,l=f(e,["svgRef","title"]);return r.a.createElement("svg",u({viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-upload",ref:a},l),t?r.a.createElement("title",null,t):null,v,p,g)},N=r.a.forwardRef((function(e,a){return r.a.createElement(h,u({svgRef:a},e))})),b=(t.p,t(10)),_=t(9);var E=function(e){Object(d.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(s.a)(this,t);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return(e=a.call.apply(a,[this].concat(r))).state={isFormValid:!1,formControls:{firstName:{value:"",type:"text",label:"\u0418\u043c\u044f",errorMessage:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0438\u043b\u0438 \u0444\u0430\u043c\u0438\u043b\u0438\u044e",valid:!1,touched:!1,validation:{required:!1,or:["lastName"]}},lastName:{value:"",type:"text",label:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",errorMessage:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0438\u043b\u0438 \u0444\u0430\u043c\u0438\u043b\u0438\u044e",valid:!1,touched:!1,validation:{required:!1,or:["firstName"]}},email:{value:"test@test.test",type:"email",label:"Email",errorMessage:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email",valid:!1,touched:!1,validation:{required:!0,email:!0}},typeMessage:{value:"",type:"select",label:"\u0422\u0438\u043f \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f",errorMessage:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f",valid:!1,touched:!1,validation:{required:!0}},message:{value:"",type:"text",label:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",errorMessage:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 10 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432",valid:!1,touched:!1,validation:{required:!0,minLength:10}},image:{value:"",type:"file",label:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430",errorMessage:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0444\u0430\u0439\u043b \u0441 JPG \u0438\u043b\u0438 PNG \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u043c \u0434\u043e 2\u041c\u0431",valid:!1,touched:!1,size:0,validation:{required:!0,accept:["image/jpg","image/jpeg","image/png"],maxSize:2}}}},e.submitHandler=function(a){a.preventDefault();var t=e.state.formControls,l={};Object.keys(t).forEach((function(e){var a=t[e].value;l[e]=a})),console.group("Request data:"),console.log(l),console.groupEnd(),alert(JSON.stringify(l,null," ")),fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(l),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.group("Response:"),console.log(e),console.groupEnd()}))},e.validateHandler=function(a){var t=Object(o.a)({},e.state.formControls),l=Object(o.a)({},t[a],{touched:!0});l.valid=e.validateControl(l.value,l.validation),t[a]=l;var r=Object.keys(t).every((function(e){return t[e].valid}));if(!!t.firstName.value&t.firstName.valid||!!t.lastName.value&t.lastName.valid)switch(a){case"firstName":var n=Object(o.a)({},t.lastName);n.valid=e.validateControl(n.value,n.validation),t.lastName=n;break;case"lastName":var i=Object(o.a)({},t.firstName);i.valid=e.validateControl(i.value,i.validation),t.firstName=i}else if(r=!1,"firstName"===a||"lastName"===a){var s=Object(o.a)({},t[a]);s.valid=!1,t[a]=s}e.setState({formControls:t,isFormValid:r})},e.changeHandler=function(a,t){var l=Object(o.a)({},e.state.formControls);l[t].value=a.target.value,e.setState({formControls:l}),l[t].touched&&e.validateHandler(t)},e.changeAndValidateChangeHandler=function(a,t){var l=Object(o.a)({},e.state.formControls),r=Object(o.a)({},l[t],{touched:!0});"file"===a.target.type?(r=e.fileHandler(a,r),console.log("image.value : ",r.value)):r.value=a.target.value,r.valid=e.validateControl(r.value,r.validation),l[t]=r;var n=Object.keys(l).every((function(e){return l[e].valid}));!!l.firstName.value&l.firstName.valid||!!l.lastName.value&l.lastName.valid||(n=!1),e.setState({formControls:l,isFormValid:n})},e}return Object(m.a)(t,[{key:"validateControl",value:function(e,a){if(a){var t=!0;if(a.required&&(null===e?t=!1:"string"===typeof e&&(t=""!==e.trim())),e&&a.minLength&&(t=e.length>=a.minLength&&t),e&&a.email&&(t=/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/.test(String(e).toLowerCase())&&t),e&&a.accept&&(t=a.accept.includes(e.type)&&t),e&&a.maxSize){var l=1024*a.maxSize*1024;t=e.size<=l&&t}return t}return!0}},{key:"componentWillMount",value:function(){this.validateForm()}},{key:"validateForm",value:function(){var e=this,a=Object(o.a)({},this.state.formControls),t=!0;Object.keys(a).forEach((function(l){var r=a[l];r.valid=e.validateControl(r.value,r.validation),t=r.valid&t,a[l]=r})),this.setState({formControls:a,isFormValid:t})}},{key:"fileHandler",value:function(e,a){return e.target.files.length>0?(a.value=e.target.files[0],a.size=e.target.files[0].size):(a.size=0,a.value=null),a}},{key:"render",value:function(){var e=this,a=this.state.formControls.firstName,t=this.state.formControls.lastName,l=this.state.formControls.email,n=this.state.formControls.typeMessage,i=this.state.formControls.message,o=this.state.formControls.image;return r.a.createElement("form",{className:"form",onSubmit:this.submitHandler},r.a.createElement("ul",{className:"form__list"},r.a.createElement("li",{className:"form__item"},r.a.createElement("label",{htmlFor:"first-name",className:"form__item-label"},"\u0418\u043c\u044f"),r.a.createElement("div",{className:"form__item-field"},r.a.createElement("input",{type:"text",id:"first-name",className:"form__item-field-input",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",value:a.value,onBlur:function(){e.validateHandler("firstName")},onChange:function(a){e.changeHandler(a,"firstName")}}),a.validation&&a.touched&&!a.valid&&r.a.createElement("div",{className:"form__item-field-error"},a.errorMessage))),r.a.createElement("li",{className:"form__item"},r.a.createElement("label",{htmlFor:"last-name",className:"form__item-label"},"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"),r.a.createElement("div",{className:"form__item-field"},r.a.createElement("input",{type:"text",className:"form__item-field-input",id:"last-name",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0430\u043c\u0438\u043b\u0438\u044e",value:t.value,onBlur:function(){e.validateHandler("lastName")},onChange:function(a){e.changeHandler(a,"lastName")}}),t.validation&&t.touched&&!t.valid&&r.a.createElement("div",{className:"form__item-field-error"},t.errorMessage))),r.a.createElement("li",{className:"form__item"},r.a.createElement("label",{htmlFor:"email",className:"form__item-label"},"Email"),r.a.createElement("div",{className:"form__item-field"},r.a.createElement("input",{type:"email",className:"form__item-field-input",id:"email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email",value:l.value,onBlur:function(){e.validateHandler("email")},onChange:function(a){e.changeHandler(a,"email")}}),l.validation&&l.touched&&!l.valid&&r.a.createElement("div",{className:"form__item-field-error"},l.errorMessage))),r.a.createElement("li",{className:"form__item"},r.a.createElement("label",{htmlFor:"type-message",className:"form__item-label"},"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"),r.a.createElement("div",{className:"form__item-field icon"},r.a.createElement("select",{id:"type-message",className:"form__item-field-input form__select",value:n.value,onChange:function(a){e.changeAndValidateChangeHandler(a,"typeMessage")}},r.a.createElement("option",{value:"",disabled:!0},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"),r.a.createElement("option",{value:"suggestion"}," \u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435 "),r.a.createElement("option",{value:"appeal"}," \u041e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0435 "),r.a.createElement("option",{value:"review"}," \u041e\u0442\u0437\u044b\u0432 ")),n.validation&&n.touched&&!n.valid&&r.a.createElement("div",{className:"form__item-field-error"},n.errorMessage)),r.a.createElement(_.a,{icon:b.a,style:{color:"#000"},className:"select-icon"})),r.a.createElement("li",{className:"form__item"},r.a.createElement("label",{htmlFor:"message",className:"form__item-label"},"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"),r.a.createElement("div",{className:"form__item-field"},r.a.createElement("textarea",{rows:"5",className:"form__item-field-input",id:"message",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",style:{resize:"none"},value:i.value,onBlur:function(){e.validateHandler("message")},onChange:function(a){e.changeHandler(a,"message")}}),i.validation&&i.touched&&!i.valid&&r.a.createElement("div",{className:"form__item-field-error"},i.errorMessage))),r.a.createElement("li",{className:"form__item"},r.a.createElement("label",{htmlFor:"image",className:"form__item-label"},o.label),r.a.createElement("div",{className:"form__item-field"},r.a.createElement("input",{type:o.type,id:"image",className:"input-file",accept:o.accept,onChange:function(a){e.changeAndValidateChangeHandler(a,"image")}}),r.a.createElement("label",{htmlFor:"image",className:"input-label"},r.a.createElement("span",{className:"name-file"},o.value?o.value.name:"\u0424\u0430\u0439\u043b \u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d"),r.a.createElement("span",{className:"btn-upload  btn--blue"},r.a.createElement(N,{className:"input-svg"}),r.a.createElement("span",{className:"btn-text"},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043b"))),o.validation&&o.touched&&!o.valid&&r.a.createElement("div",{className:"form__item-field-error"},o.errorMessage))),r.a.createElement("li",{className:"form__item"},r.a.createElement("button",{type:"submit",className:"btn btn--blue",disabled:!this.state.isFormValid},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"))))}}]),t}(l.Component);var y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header"},"\u0424\u043e\u0440\u043c\u0430 \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0439 \u0441\u0432\u044f\u0437\u0438"),r.a.createElement("div",{className:"container"},r.a.createElement(E,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(25);i.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.de9f2545.chunk.js.map