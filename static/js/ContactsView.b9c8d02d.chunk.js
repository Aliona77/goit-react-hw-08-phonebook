(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{112:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(45);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(s){a=!0,c=s}finally{try{r||null==i.return||i.return()}finally{if(a)throw c}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},118:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return H}));var r=n(0),a=n(10),c=n(44);var o=Object(c.a)("h1",{target:"esmx3o81"})({name:"1x4tp7w",styles:"text-align:center;color:#000;font-weight:bold;font-size:40px"}),i=Object(c.a)("div",{target:"esmx3o80"})({name:"1w6z70e",styles:"width:360px;margin-left:auto;margin-right:auto;margin-bottom:20px;margin-top:20px;padding:20px 40px;background-color:rgb(47, 241, 255);box-shadow:1px 1px 3px rgba(0,0,0,0.5);border-radius:5px;&:hover{box-shadow:0px 0px 5px rgba(0,0,0,0.5);}"}),s=n(2);function u(e){var t=e.title,n=e.children;return Object(s.jsxs)(i,{children:[Object(s.jsx)(o,{children:t}),n]})}var b,d=Object(c.a)("ul",{target:"e19mflmd3"})({name:"1ft8jc7",styles:"width:300px;padding:0"}),p=Object(c.a)("li",{target:"e19mflmd2"})({name:"bcffy2",styles:"display:flex;align-items:center;justify-content:space-between"}),l=Object(c.a)("p",{target:"e19mflmd1"})({name:"himm4n",styles:"font-size:18px;font-weight:500"}),f=Object(c.a)("button",{target:"e19mflmd0"})({name:"15t1pys",styles:"background-color:#fff;cursor:pointer;margin-left:20px;border-radius:5px;border:1px solid black;cursor:pointer;&:hover{box-shadow:0 0 20px rgba(50, 50, 93, 0.25);background:blue;}"}),m=n(22),j=n.n(m),x=n(31),g=n(25),h=n.n(g),O=n(12),y={fetchContacts:function(){return function(){var e=Object(x.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Object(O.i)()),e.prev=1,e.next=4,h.a.get("/contacts");case 4:n=e.sent,r=n.data,t(Object(O.j)(r)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(Object(O.h)(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},addContact:function(e){var t=e.name,n=e.number;return function(){var e=Object(x.a)(j.a.mark((function e(r){var a,c,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={name:t,number:n},r(Object(O.b)()),e.prev=2,e.next=5,h.a.post("/contacts",a);case 5:c=e.sent,o=c.data,r(Object(O.c)(o)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),r(Object(O.a)(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()},deleteContact:function(e){return function(){var t=Object(x.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(O.f)()),t.prev=1,t.next=4,h.a.delete("/contacts/".concat(e));case 4:n(Object(O.g)(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),n(Object(O.e)(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()}},v=n(34),w=function(e){return e.contacts.contacts},C=function(e){return e.contacts.filter},z=Object(v.a)([w,C],(function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))})),k={getLoading:function(e){return e.contacts.loading},getFilter:C,getContacts:w},A=function(){var e=Object(a.c)(z),t=Object(a.b)();return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(d,{children:e.map((function(e){var n=e.id,r=e.name,a=e.number;return Object(s.jsxs)(p,{children:[Object(s.jsxs)(l,{children:[r,":",a]}),Object(s.jsx)(f,{type:"button",onClick:function(){return t(y.deleteContact(n))},children:"Delete"})]},n)}))})})},S=n(4),E=n(28),Z=n(112),F=new Uint8Array(16);function L(){if(!b&&!(b="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return b(F)}var R=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var V=function(e){return"string"===typeof e&&R.test(e)},J=[],q=0;q<256;++q)J.push((q+256).toString(16).substr(1));var D=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(J[e[t+0]]+J[e[t+1]]+J[e[t+2]]+J[e[t+3]]+"-"+J[e[t+4]]+J[e[t+5]]+"-"+J[e[t+6]]+J[e[t+7]]+"-"+J[e[t+8]]+J[e[t+9]]+"-"+J[e[t+10]]+J[e[t+11]]+J[e[t+12]]+J[e[t+13]]+J[e[t+14]]+J[e[t+15]]).toLowerCase();if(!V(n))throw TypeError("Stringified UUID is invalid");return n};var I=function(e,t,n){var r=(e=e||{}).random||(e.rng||L)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var a=0;a<16;++a)t[n+a]=r[a];return t}return D(r)};var N=Object(c.a)("label",{target:"ezbpmr93"})({name:"8ugiu6",styles:"font-size:18px;font-weight:600;justify-content:center;padding-bottom:15px;margin:0"}),T=Object(c.a)("input",{target:"ezbpmr92"})({name:"17usni6",styles:"display:flex;padding:6px;margin-bottom:20px;border-radius:5px;min-width:300px;cursor:pointer;box-shadow:rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;&:focus{border:2px solid #eee;outline:none;}"}),U=Object(c.a)("button",{target:"ezbpmr91"})({name:"10v48yb",styles:"background-color:#fff;outline:none;padding:6px 8px;font-size:12px;line-height:12px;text-transform:uppercase;cursor:pointer;border-radius:5px;border:1px solid black;&:hover{box-shadow:0 0 20px rgba(50, 50, 93, 0.25);background:blue;}"}),$=Object(c.a)("span",{target:"ezbpmr90"})({name:"uz0u9z",styles:"font-size:20px;font-weight:400;margin-bottom:7px"});function B(){var e=Object(a.b)(),t=Object(r.useState)({name:"",number:""}),n=Object(Z.a)(t,2),c=n[0],o=n[1],i=Object(a.c)(k.getContacts),u=I(),b=I(),d=function(e){var t=e.currentTarget,n=t.name,r=t.value;o((function(e){return Object(E.a)(Object(E.a)({},e),{},Object(S.a)({},n,r))}))},p=function(){o({name:"",number:""})};return Object(s.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),i.some((function(e){return e.name===c.name})))return alert("".concat(c.name," is already in contacts")),void p();e(y.addContact(c)),p()},children:[Object(s.jsxs)(N,{children:[Object(s.jsx)($,{children:"Name"}),Object(s.jsx)(T,{type:"text",name:"name",placeholder:"Enter name",onChange:d,value:c.name,id:u,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(s.jsxs)(N,{children:[Object(s.jsx)($,{children:"Number"}),Object(s.jsx)(T,{type:"tel",name:"number",placeholder:"Enter number",onChange:d,value:c.number,id:b,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(s.jsx)(U,{type:"submit",children:"Add contact"})]})}var M=Object(c.a)("p",{target:"e18y3lzc0"})({name:"2w8shk",styles:"display:block;margin-top:5px;font-weight:500;font-size:20px"}),P=function(){var e=Object(a.c)(k.getFilter),t=Object(a.b)();return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(M,{children:"Find contact by name"}),Object(s.jsx)(T,{type:"text",name:"name",placeholder:"Name to search",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:e,onChange:function(e){return t(O.d(e.target.value))},required:!0})]})},G=n(55);function H(){var e=Object(a.b)(),t=Object(a.c)(k.getLoading);return Object(r.useEffect)((function(){e(y.fetchContacts())}),[e]),Object(s.jsxs)(u,{title:"Phonebook",children:[Object(s.jsx)(B,{}),Object(s.jsx)("h1",{children:"Contacts"}),Object(s.jsx)(P,{}),t&&Object(s.jsx)(G.a,{}),Object(s.jsx)(A,{})]})}}}]);
//# sourceMappingURL=ContactsView.b9c8d02d.chunk.js.map