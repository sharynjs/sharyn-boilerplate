(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(e,n,t){"use strict";var a=t(0),r=t.n(a),o=t(52),i=t.n(o),c=t(65),s=t.n(c),l=t(9),d=t.n(l),u=t(226),m=t.n(u),p=t(885),g=t.n(p),f=t(886),E=t.n(f),v=t(93),b=t.n(v),O=t(40),h=t.n(O),S=function(e){var n=e.classes;return r.a.createElement(h.a,{middle:!0,noPaper:!0},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(g.a,{style:{fontSize:120,color:"#ccc",marginBottom:20}}),r.a.createElement(s.a,{variant:"title",gutterBottom:!0},"Oops, there is nothing here!"),r.a.createElement("div",{className:n.actions},r.a.createElement(i.a,{color:"primary",variant:"raised",href:"javascript:history.back()",className:n.backButton},r.a.createElement(m.a,{className:n.buttonIcon}),"Go back"),r.a.createElement(i.a,{color:"primary",variant:"raised",component:b.a,to:"/"},r.a.createElement(E.a,{className:n.buttonIcon}),"Homepage"))))},N=d()({sign:{fontSize:120,color:"#ccc",marginBottom:20},backButton:{marginRight:20},buttonIcon:{width:20,marginRight:6,position:"relative",top:-1},actions:{marginTop:30}})(S);n.a=N,S.__docgenInfo={description:"",methods:[],displayName:"NotFoundPageJSX",props:{classes:{required:!0,flowType:{name:"Object"},description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/error/cmp-page/NotFoundPage.js"]={name:"NotFoundPageJSX",docgenInfo:S.__docgenInfo,path:"src/error/cmp-page/NotFoundPage.js"})},195:function(e,n,t){"use strict";var a=t(22),r=t.n(a),o=t(4),i=t.n(o),c=t(0),s=t.n(c),l=t(129),d=t.n(l),u=t(9),m=t.n(u),p=t(36),g=t(39),f=t.n(g),E=t(360),v=t.n(E),b=t(890),O=t.n(b),h=t(891),S=t.n(h),N=t(300),y=t(361),T=t(82),_=t(302),w=t.n(_),C=t(892),j=t.n(C),A=w.a.object().keys({title:w.a.string().max(20).required(),description:w.a.string().allow(null)});t.d(n,"a",function(){return I});var L=function(e){var n,t,a=e.classes,r=e.noteToEdit,o=e.isLoading,c=e.onSubmit,l=e.previousFields,u=void 0===l?{}:l,m=e.invalidFields,p=void 0===m?[]:m,g=e.isOnline;return s.a.createElement("form",i()({method:"post"},{onSubmit:c}),p.map(function(e){return s.a.createElement("div",{key:e.message,"data-test":"new-note-error",className:a.error},e.message)}),s.a.createElement("div",{className:a.field},s.a.createElement(d.a,{label:"Title",name:"title",defaultValue:null!==(n=u.title)&&void 0!=n?n:null===r||void 0===r?void 0:r.title,error:!!p.find(function(e){return"title"===e.name}),autoFocus:!0,required:!0})),s.a.createElement("div",{className:a.field},s.a.createElement(d.a,{label:"Description",name:"description",defaultValue:null!==(t=u.description)&&void 0!=t?t:null===r||void 0===r?void 0:r.description,fullWidth:!0})),s.a.createElement(S.a,{isLoading:o,isOnline:!(void 0!==g)||g},r?"Save":"Create note"))},I=m()(function(e){return{field:{marginBottom:15},error:{marginBottom:20,color:e.palette.error.main}}})(L),x=f()(Object(p.connect)(function(e){var n=e.pageData,t=e.asyncMap,a=e.env;return{invalidFields:n.invalidFields,previousFields:n.previousFields,isLoading:t.noteForm,isOnline:a.isOnline}}),v()({onSubmit:function(e){var n=e.noteToEdit,t=e.match,a=e.dispatch,o=e.routerHistory;return function(e){e.preventDefault();var i=O()(e),c=function(e){var n=w.a.validate(e,A);return!!n.error&&n.error.details.map(function(e){return{name:e.path.toString(),message:j()("".concat(e.path.toString(),"/").concat(e.type),[["title/string.max","The title must be shorter than 20 characters"]])}})}(i);a(c?Object(N.invalidateFields)(c):Object(N.clearInvalidFields)()),c||a(Object(y.graphqlThunk)(r()({},n?T.e:T.a,{routerHistory:o,urlParams:t.params,asyncKey:"noteForm",fields:i})))}}}))(I);n.b=x;L.__docgenInfo={description:"",methods:[],displayName:"NoteFormJSX",props:{previousFields:{defaultValue:{value:"{}",computed:!1},required:!1,flowType:{name:"Object"},description:""},invalidFields:{defaultValue:{value:"[]",computed:!1},required:!1,flowType:{name:"Array",elements:[{name:"Object"}],raw:"Object[]"},description:""},isOnline:{defaultValue:{value:"true",computed:!1},required:!1,flowType:{name:"boolean"},description:""},classes:{required:!0,flowType:{name:"Object"},description:""},noteToEdit:{required:!1,flowType:{name:"Object"},description:""},isLoading:{required:!1,flowType:{name:"boolean"},description:""},onSubmit:{required:!1,flowType:{name:"Function"},description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/note/cmp/NoteForm.js"]={name:"NoteFormJSX",docgenInfo:L.__docgenInfo,path:"src/note/cmp/NoteForm.js"})},224:function(e,n,t){"use strict";var a=t(65),r=t.n(a),o=t(880),i=t.n(o),c=t(55),s=t(0),l=t.n(s),d=function(e){var n=e.classes;return l.a.createElement(r.a,{variant:"display2"},l.a.createElement(i.a,{className:n.logo})," Notesapp")},u=Object(c.withStyles)(function(e){return{logo:{fontSize:45,verticalAlign:"top",color:e.palette.primary.main}}})(d);n.a=u,d.__docgenInfo={description:"",methods:[],displayName:"LogoTitleJSX",props:{classes:{required:!0,flowType:{name:"Object"},description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/cmp/LogoTitle.js"]={name:"LogoTitleJSX",docgenInfo:d.__docgenInfo,path:"src/app/cmp/LogoTitle.js"})},225:function(e,n,t){"use strict";t.d(n,"a",function(){return c}),t.d(n,"b",function(){return s});var a=t(356),r=t.n(a),o=t(301),i=t(352),c={path:o.a,exact:!0,pageComponent:i.a,title:"Log In"},s={path:o.b,title:"Log Out",icon:r.a}},229:function(e,n,t){"use strict";t.d(n,"a",function(){return J});var a=t(22),r=t.n(a),o=t(0),i=t.n(o),c=t(52),s=t.n(c),l=t(222),d=t.n(l),u=t(896),m=t.n(u),p=t(899),g=t.n(p),f=t(897),E=t.n(f),v=t(898),b=t.n(v),O=t(146),h=t.n(O),S=t(192),N=t.n(S),y=t(9),T=t.n(y),_=t(895),w=t.n(_),C=t(894),j=t.n(C),A=t(36),L=t(93),I=t.n(L),x=t(39),F=t.n(x),P=t(360),R=t.n(P),k=t(348),B=t.n(k),D=t(361),q=t(893),M=t(82),K=t(98),Y=function(e){var n=e.classes,t=e.id,a=e.title,r=e.description,o=e.useTitleLink,c=e.showActions,l=e.isDeleting,u=e.handleDeleteConfirm,p=e.isConfirmDeleteOpen,f=e.setIsConfirmDeleteOpen,v=e.isOnline;return i.a.createElement(N.a,{className:n.note},i.a.createElement("h3",{className:n.title},o?i.a.createElement(I.a,{to:K.d.path(t)},a):a),r&&i.a.createElement("div",{className:n.description},r),c&&(!(void 0!==v)||v)&&i.a.createElement("div",{className:n.buttonGroup},i.a.createElement(h.a,{component:I.a,to:K.b.path(t)},i.a.createElement(j.a,null)),l?i.a.createElement(d.a,{className:n.deleteProgress,size:24}):i.a.createElement("form",{method:"post",action:K.a.path(t),className:n.deleteForm,onSubmit:function(e){return e.preventDefault()||f(!0)}},i.a.createElement(h.a,{type:"submit"},i.a.createElement(w.a,null)),i.a.createElement(m.a,{open:p,onClose:function(){return f(!1)}},i.a.createElement(E.a,null,i.a.createElement(b.a,null,"Delete this note?")),i.a.createElement(g.a,null,i.a.createElement(s.a,{onClick:function(){return f(!1)}},"Cancel"),i.a.createElement(s.a,{onClick:function(){return f(!1)||u&&u()},className:n.confirmDelete,autoFocus:!0},"Delete"))))))},J=F()(B()("isConfirmDeleteOpen","setIsConfirmDeleteOpen",!1),T()(function(e){var n=e.spacing,t=e.palette;return{note:r()({},q.clearfix,{padding:3*n.unit}),title:{margin:0},description:{marginTop:2*n.unit},buttonGroup:{float:"right"},deleteForm:{display:"inline-block"},confirmDelete:{color:t.error.main},deleteProgress:{verticalAlign:"middle",color:t.error.main,margin:"0 12px"}}}))(Y),X=F()(Object(A.connect)(function(e){var n=e.asyncMap,t=e.env;return{isDeleting:n.deleteNote,isOnline:t.isOnline}}),R()({handleDeleteConfirm:function(e){var n=e.id,t=e.dispatch,a=e.routerHistory;return function(){return t(Object(D.graphqlThunk)(r()({},M.b,{routerHistory:a,asyncKey:"deleteNote",urlParams:{id:n}})))}}}))(J);n.b=X,Y.__docgenInfo={description:"",methods:[],displayName:"NoteJSX",props:{isOnline:{defaultValue:{value:"true",computed:!1},required:!1,flowType:{name:"boolean"},description:""},classes:{required:!0,flowType:{name:"Object"},description:""},id:{required:!0,flowType:{name:"string"},description:""},title:{required:!0,flowType:{name:"string"},description:""},description:{required:!1,flowType:{name:"string"},description:""},useTitleLink:{required:!1,flowType:{name:"boolean"},description:""},showActions:{required:!1,flowType:{name:"boolean"},description:""},isDeleting:{required:!1,flowType:{name:"boolean"},description:""},handleDeleteConfirm:{required:!1,flowType:{name:"Function"},description:""},isConfirmDeleteOpen:{required:!0,flowType:{name:"boolean"},description:""},setIsConfirmDeleteOpen:{required:!0,flowType:{name:"Function"},description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/note/cmp/Note.js"]={name:"NoteJSX",docgenInfo:Y.__docgenInfo,path:"src/note/cmp/Note.js"})},301:function(e,n,t){"use strict";t.d(n,"a",function(){return a}),t.d(n,"b",function(){return r});var a="/login",r="/logout"},352:function(e,n,t){"use strict";var a=t(0),r=t.n(a),o=t(93),i=t.n(o),c=t(65),s=t.n(c),l=t(9),d=t.n(l),u=t(40),m=t.n(u),p=t(224),g=t(353),f=t(369),E=function(e){var n=e.classes;return r.a.createElement(m.a,{middle:!0},r.a.createElement("div",{className:n.brandingContainer},r.a.createElement(p.a,null)),r.a.createElement(s.a,{variant:"title",align:"center"},"Log In"),r.a.createElement(g.b,null),r.a.createElement("div",{className:n.switchAuth},"Don't have an account yet? ",r.a.createElement(i.a,{className:n.authLink,to:f.a.path,"data-test":"switch-to-signup"},"Sign Up")))},v=d()({brandingContainer:{textAlign:"center",marginBottom:30},switchAuth:{marginTop:20,textAlign:"center"},authLink:{whiteSpace:"nowrap"}})(E);n.a=v,E.__docgenInfo={description:"",methods:[],displayName:"LoginPageJSX",props:{classes:{required:!0,flowType:{name:"Object"},description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/auth/cmp-page/LoginPage.js"]={name:"LoginPageJSX",docgenInfo:E.__docgenInfo,path:"src/auth/cmp-page/LoginPage.js"})},353:function(e,n,t){"use strict";t.d(n,"a",function(){return E});var a=t(5),r=t.n(a),o=t(0),i=t.n(o),c=t(52),s=t.n(c),l=t(129),d=t.n(l),u=t(9),m=t.n(u),p=t(36),g=t(225),f=function(e){var n=e.classes,t=e.previousFields,a=void 0===t?{}:t,r=e.errorMessage;return i.a.createElement("form",{"data-test":"login-form",action:g.a.path,method:"post"},r&&i.a.createElement("div",{"data-test":"login-error",className:n.error},r),i.a.createElement(d.a,{className:n.firstInput,name:"username",label:"Username",defaultValue:a.username,autoFocus:!0,required:!0}),i.a.createElement(d.a,{className:n.input,name:"password",type:"password",label:"Password",required:!0}),i.a.createElement("div",{className:n.action},i.a.createElement(s.a,{className:n.loginButton,"data-test":"login-form-submit",variant:"raised",color:"primary",type:"submit"},"Log In")))},E=m()(function(e){var n=e.breakpoints,t=e.palette;return{input:{width:"100%"},firstInput:{extend:"input",marginBottom:10},action:{textAlign:"center",marginTop:20},loginButton:r()({},n.down("xs"),{width:"100%"}),error:{margin:"20px 0",color:t.error.main}}})(f),v=Object(p.connect)(function(e){var n=e.pageData;return{previousFields:n.previousFields,errorMessage:n.errorMessage}})(E);n.b=v,f.__docgenInfo={description:"",methods:[],displayName:"LoginFormJSX",props:{previousFields:{defaultValue:{value:"{}",computed:!1},required:!1,flowType:{name:"Object"},description:""},classes:{required:!0,flowType:{name:"Object"},description:""},errorMessage:{required:!1,flowType:{name:"string"},description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/auth/cmp/LoginForm.js"]={name:"LoginFormJSX",docgenInfo:f.__docgenInfo,path:"src/auth/cmp/LoginForm.js"})},354:function(e,n,t){"use strict";var a=t(5),r=t.n(a),o=t(0),i=t.n(o),c=t(65),s=t.n(c),l=t(9),d=t.n(l),u=t(93),m=t.n(u),p=t(40),g=t.n(p),f=t(224),E=t(355),v=t(225),b=function(e){var n=e.classes;return i.a.createElement(g.a,{middle:!0},i.a.createElement("div",{className:n.layout},i.a.createElement("div",{className:n.firstPane},i.a.createElement("div",{className:n.brandingContainer},i.a.createElement(f.a,null),i.a.createElement(s.a,{variant:"headline",className:n.slogan},"Great Notes for Great People")),i.a.createElement("div",{className:n.description},"Notesapp is a totally real app that lets you create, update, and read your notes for free!"),i.a.createElement("div",{className:n.featured},"Featured in"," ",i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/sharynjs/sharyn"},"Sharyn Magazine"))),i.a.createElement("div",{className:n.secondPane},i.a.createElement(s.a,{variant:"title",align:"center",color:"primary",className:n.signupText},"Create an account"),i.a.createElement(E.b,null),i.a.createElement("div",{className:n.switchAuth},"Already have an account?"," ",i.a.createElement(m.a,{className:n.authLink,to:v.a.path,"data-test":"switch-to-login"},"Log In")))))},O=d()(function(e){var n=e.breakpoints;return{layout:r()({maxWidth:650,display:"flex"},n.down("xs"),{width:"100%",flexDirection:"column"}),_pane:r()({},n.down("xs"),{width:"auto"}),firstPane:r()({extend:"_pane",width:"58%",paddingRight:30,borderRight:"1px solid #d7d7d7"},n.down("xs"),{margin:"0 0 10px",padding:0,border:"none"}),secondPane:r()({extend:"_pane",width:"42%",marginLeft:30},n.down("xs"),{margin:0}),brandingContainer:{textAlign:"center"},slogan:r()({margin:"23px 0"},n.down("xs"),{margin:"15px 0"}),description:r()({},n.down("xs"),{display:"none"}),featured:r()({color:"#999",textAlign:"center",marginTop:20},n.down("xs"),{display:"none"}),switchAuth:{marginTop:20,textAlign:"center"},authLink:{whiteSpace:"nowrap"},signupText:{marginBottom:20}}})(b);n.a=O,b.__docgenInfo={description:"",methods:[],displayName:"LandingSignupPageJSX",props:{classes:{required:!0,flowType:{name:"Object"},description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/landing/cmp-page/LandingSignupPage.js"]={name:"LandingSignupPageJSX",docgenInfo:b.__docgenInfo,path:"src/landing/cmp-page/LandingSignupPage.js"})},355:function(e,n,t){"use strict";t.d(n,"a",function(){return E});var a=t(5),r=t.n(a),o=t(0),i=t.n(o),c=t(52),s=t.n(c),l=t(129),d=t.n(l),u=t(9),m=t.n(u),p=t(36),g=t(369),f=function(e){var n=e.classes,t=e.previousFields,a=void 0===t?{}:t,r=e.errorMessage;return i.a.createElement("form",{"data-test":"signup-form",action:g.a.path,method:"post"},r&&i.a.createElement("div",{"data-test":"signup-error",className:n.error},r),i.a.createElement(d.a,{className:n.firstInput,name:"username",label:"Username",placeholder:"sharyn8020",defaultValue:a.username,required:!0}),i.a.createElement(d.a,{className:n.input,name:"password",type:"password",label:"Password",required:!0}),i.a.createElement("div",{className:n.action},i.a.createElement(s.a,{className:n.signupButton,"data-test":"signup-form-submit",variant:"raised",color:"primary",type:"submit"},"Sign Up")))},E=m()(function(e){var n=e.breakpoints,t=e.palette;return{input:{width:"100%"},firstInput:{extend:"input",marginBottom:10},action:{textAlign:"center",marginTop:20},signupButton:r()({},n.down("xs"),{width:"100%"}),error:{margin:"20px 0",color:t.error.main}}})(f),v=Object(p.connect)(function(e){var n=e.pageData;return{previousFields:n.previousFields,errorMessage:n.errorMessage}})(E);n.b=v,f.__docgenInfo={description:"",methods:[],displayName:"SignupFormJSX",props:{previousFields:{defaultValue:{value:"{}",computed:!1},required:!1,flowType:{name:"Object"},description:""},classes:{required:!0,flowType:{name:"Object"},description:""},errorMessage:{required:!1,flowType:{name:"string"},description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/auth/cmp/SignupForm.js"]={name:"SignupFormJSX",docgenInfo:f.__docgenInfo,path:"src/auth/cmp/SignupForm.js"})},357:function(e,n,t){"use strict";var a=t(0),r=t.n(a),o=t(297),i=t.n(o),c=t(40),s=t.n(c),l=function(){return r.a.createElement(s.a,{middle:!0},"A fake error has been executed in your console to test client-side error reporting.")},d=i()({componentDidMount:function(){setTimeout(function(){throw Error("Fake error, everything is fine")},100)}})(l);n.a=d,l.__docgenInfo={description:"",methods:[],displayName:"FakeClientErrorPageJSX"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/error/cmp-page/FakeClientErrorPage.js"]={name:"FakeClientErrorPageJSX",docgenInfo:l.__docgenInfo,path:"src/error/cmp-page/FakeClientErrorPage.js"})},358:function(e,n,t){"use strict";var a=t(0),r=t.n(a),o=t(196),i=t.n(o),c=t(887),s=t.n(c),l=t(65),d=t.n(l),u=t(9),m=t.n(u),p=t(40),g=t.n(p),f=t(52),E=t.n(f),v=t(226),b=t.n(v),O=function(e){var n=e.classes;return r.a.createElement(g.a,{middle:!0,noPaper:!0},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(i.a,{className:n.sign}),r.a.createElement(d.a,{variant:"title",gutterBottom:!0},"Something went wrong, sorry!"),r.a.createElement("p",null,"We have been notified ",r.a.createElement(s.a,{className:n.smile})),r.a.createElement(E.a,{color:"primary",variant:"raised",href:"javascript:history.back()",className:n.backButton},r.a.createElement(b.a,{className:n.buttonIcon}),"Go back")))},h=m()({sign:{fontSize:120,color:"#ccc",marginBottom:20},smile:{verticalAlign:"text-bottom",color:"#777",paddingTop:2,marginLeft:2},backButton:{marginTop:15},buttonIcon:{width:20,marginRight:6,position:"relative",top:-1}})(O);n.a=h,O.__docgenInfo={description:"",methods:[],displayName:"ServerErrorPageJSX",props:{classes:{required:!0,flowType:{name:"Object"},description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/error/cmp-page/ServerErrorPage.js"]={name:"ServerErrorPageJSX",docgenInfo:O.__docgenInfo,path:"src/error/cmp-page/ServerErrorPage.js"})},359:function(e,n,t){"use strict";t.d(n,"a",function(){return y});var a=t(0),r=t.n(a),o=t(888),i=t.n(o),c=t(889),s=t.n(c),l=t(36),d=t(39),u=t.n(d),m=t(227),p=t.n(m),g=t(40),f=t.n(g),E=t(130),v=t.n(E),b=t(228),O=t.n(b),h=t(145),S=t(195),N=function(e){return r.a.createElement(f.a,{maxWidth:600},r.a.createElement(S.b,e))},y=u()(v()(function(e){return e.isPageLoading},p.a),v()(function(e){return!e.noteToEdit},h.a))(N),T=u()(Object(l.connect)(function(e){var n=e.pageData,t=e.asyncMap;return{noteToEdit:s()(n.note,i.a),isPageLoading:t.page}}),O()())(y);n.b=T,N.__docgenInfo={description:"",methods:[],displayName:"EditNotePageJSX"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/note/cmp-page/EditNotePage.js"]={name:"EditNotePageJSX",docgenInfo:N.__docgenInfo,path:"src/note/cmp-page/EditNotePage.js"})},362:function(e,n,t){"use strict";var a=t(0),r=t.n(a),o=t(40),i=t.n(o),c=t(195),s=function(e){return r.a.createElement(i.a,{maxWidth:600},r.a.createElement(c.b,e))};n.a=s,s.__docgenInfo={description:"",methods:[],displayName:"NewNotePage"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/note/cmp-page/NewNotePage.js"]={name:"NewNotePage",docgenInfo:s.__docgenInfo,path:"src/note/cmp-page/NewNotePage.js"})},363:function(e,n,t){"use strict";t.d(n,"a",function(){return y});var a=t(4),r=t.n(a),o=t(6),i=t.n(o),c=t(0),s=t.n(c),l=t(36),d=t(39),u=t.n(d),m=t(227),p=t.n(m),g=t(40),f=t.n(g),E=t(130),v=t.n(E),b=t(228),O=t.n(b),h=t(145),S=t(229),N=function(e){var n=e.note,t=i()(e,["note"]);return s.a.createElement(f.a,{noPaper:!0,noPadding:!0,maxWidth:600},s.a.createElement(S.b,r()({},n,t,{showActions:!0})))},y=u()(v()(function(e){return e.isPageLoading},p.a),v()(function(e){return!e.note},h.a))(N),T=u()(Object(l.connect)(function(e){var n=e.pageData,t=e.asyncMap;return{note:n.note,isPageLoading:t.page}}),O()())(y);n.b=T,N.__docgenInfo={description:"",methods:[],displayName:"NotePageJSX",props:{note:{required:!0,flowType:{name:"Object"},description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/note/cmp-page/NotePage.js"]={name:"NotePageJSX",docgenInfo:N.__docgenInfo,path:"src/note/cmp-page/NotePage.js"})},364:function(e,n,t){"use strict";t.d(n,"a",function(){return C});var a=t(4),r=t.n(a),o=t(0),i=t.n(o),c=t(52),s=t.n(c),l=t(9),d=t.n(l),u=t(655),m=t.n(u),p=t(36),g=t(193),f=t(39),E=t.n(f),v=t(227),b=t.n(v),O=t(40),h=t.n(O),S=t(130),N=t.n(S),y=t(228),T=t.n(y),_=t(229),w=t(98),C=E()(N()(function(e){return e.isPageLoading},b.a),d()(function(e){var n=e.spacing;return{note:{marginBottom:30},fab:{position:"fixed",bottom:3*n.unit,right:3*n.unit},extendedFab:{extend:"fab",paddingRight:3*n.unit},extendedFabIcon:{marginRight:n.unit}}}),N()(function(e){var n=e.notes;return!n||0===(null===n||void 0===n?void 0:n.length)},function(e){var n=e.classes;return i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,{noPaper:!0,noPadding:!0,middle:!0},"You don't have any note yet!"),i.a.createElement(s.a,{variant:"extendedFab",color:"primary",className:n.extendedFab,component:g.a,to:w.c.path},i.a.createElement(m.a,{className:n.extendedFabIcon}),"Add note"))}))(function(e){var n=e.classes,t=e.notes;return i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,{noPaper:!0,noPadding:!0,maxWidth:600},t.map(function(e){return i.a.createElement("div",{key:e.id,className:n.note},i.a.createElement(_.b,r()({},e,{useTitleLink:!0})))})),i.a.createElement(s.a,{variant:"fab",color:"primary",className:n.fab,component:g.a,to:w.c.path},i.a.createElement(m.a,null)))}),j=E()(Object(p.connect)(function(e){var n=e.pageData,t=e.asyncMap;return{notes:n.notes,isPageLoading:t.page}}),T()())(C);n.b=j},369:function(e,n,t){"use strict";var a=t(354);t.d(n,"a",function(){return r});var r={path:"/",exact:!0,loggedOutOnly:!0,pageComponent:a.a}},657:function(e,n,t){"use strict";var a=t(55),r=Object(a.createMuiTheme)({palette:{primary:{main:"#3f51b5"}}});n.a=r},82:function(e,n,t){"use strict";t.d(n,"d",function(){return i}),t.d(n,"c",function(){return c}),t.d(n,"a",function(){return s}),t.d(n,"e",function(){return l}),t.d(n,"b",function(){return d});var a=t(654),r=t.n(a),o=t(99),i={query:"{ getNotes { id, title, description } }",mapRespData:function(e){return{notes:e.getNotes}}},c={query:"query ($id: ID!) { getNote(id: $id) { id, title, description } }",variables:function(e){return{id:e.id}},mapRespData:function(e){return{note:e.getNote}}},s={query:"mutation ($input: NoteInput!) { createNote(input: $input) { note { id }, invalidFields { name, message } } }",variables:function(e,n){return{input:r()(n)}},mapRespData:function(e){var n,t,a=e.createNote;return{createdNoteId:null===a||void 0===a||null===(n=a.note)||null==n?void 0:n.id,invalidFields:null!==(t=null===a||void 0===a?void 0:a.invalidFields)&&void 0!=t?t:void 0}},successRedirect:function(e){var n=e.createdNoteId;return Object(o.e)(n)}},l={query:"mutation ($id: ID!, $input: NoteInput!) { updateNote(id: $id, input: $input) { note { id, title, description }, updatedNote { id }, invalidFields { name, message } } }",variables:function(e,n){return{id:e.id,input:r()(n)}},mapRespData:function(e){var n,t,a=e.updateNote;return{note:null===a||void 0===a?void 0:a.note,updatedNoteId:null===a||void 0===a||null===(n=a.updatedNote)||null==n?void 0:n.id,invalidFields:null!==(t=null===a||void 0===a?void 0:a.invalidFields)&&void 0!=t?t:void 0}},successRedirect:function(e){var n=e.updatedNoteId;return Object(o.e)(n)}},d={query:"mutation ($id: ID!) { deleteNote(id: $id) }",variables:function(e){return{id:e.id}},successRedirect:o.b}},913:function(e,n,t){"use strict";var a=t(5),r=t.n(a),o=t(0),i=t.n(o),c=t(901),s=t.n(c),l=t(902),d=t.n(l),u=t(146),m=t.n(u),p=t(908),g=t.n(p),f=t(909),E=t.n(f),v=t(910),b=t.n(v),O=t(904),h=t.n(O),S=t(65),N=t.n(S),y=t(9),T=t.n(y),_=t(907),w=t.n(_),C=t(226),j=t.n(C),A=t(906),L=t.n(A),I=t(905),x=t.n(I),F=t(356),P=t.n(F),R=t(903),k=t.n(R),B=t(36),D=t(93),q=t.n(D),M=t(39),K=t.n(M),Y=t(651),J=t.n(Y),X=t(881),U=t.n(X),V=t(882),$=t.n(V),W=t(883),G=t.n(W),H=t(4),z=t.n(H),Q=t(884),Z=t.n(Q),ee=t(652),ne=t.n(ee),te=t(300),ae=function(e){var n=e.onClick;return i.a.createElement(ne.a,z()({onClick:n},{key:"notify",label:"Trigger Notification",icon:Z.a}))},re=Object(B.connect)(null,function(e){return{onClick:function(){return e(Object(te.notify)({message:"Hello there!"}))}}})(ae);ae.__docgenInfo={description:"",methods:[],displayName:"TriggerNotificationItemJSX",props:{onClick:{required:!0,flowType:{name:"Function"},description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/cmp/TriggerNotificationItem.js"]={name:"TriggerNotificationItemJSX",docgenInfo:ae.__docgenInfo,path:"src/app/cmp/TriggerNotificationItem.js"});var oe=t(301),ie=t(225),ce=t(196),se=t.n(ce),le=t(357),de=t(145),ue=t(358),me=(de.a,se.a,ue.a,{path:"/fake-client-error",exact:!0,pageComponent:le.a,title:"Trigger Client Error",icon:se.a,backNav:"/"}),pe={path:"/404",exact:!0,icon:se.a,title:"Trigger 404 Error"},ge={path:"/fake-error",exact:!0,title:"Trigger Server Error",icon:se.a},fe=t(98);t.d(n,"a",function(){return be});var Ee=G()(s.a),ve=[fe.e,fe.c,[ie.b,{hardLink:!0}],{component:function(){return i.a.createElement(d.a,null)}},{component:function(){return i.a.createElement(re,null)}},pe,[ge,{hardLink:!0}],me,{title:"Storybook",path:"/static/storybook/",icon:k.a,newTab:!0}],be=K()(J()({isDrawerOpen:!1,isUserMenuOpen:!1,userMenuAnchorEl:null},{openDrawer:function(){return function(){return{isDrawerOpen:!0}}},closeDrawer:function(){return function(){return{isDrawerOpen:!1}}},openUserMenu:function(){return function(e){return{isUserMenuOpen:!0,userMenuAnchorEl:e.target}}},closeUserMenu:function(){return function(){return{isUserMenuOpen:!1}}}}),T()(function(e){var n=e.spacing,t=e.mixins,a=e.breakpoints;return{appBarPusher:t.toolbar,backButton:{margin:"0 6px 0 -6px"},title:{flexGrow:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},userMenuUserItem:{extend:"hideOnMobile",textAlign:"center",fontWeight:"bold",paddingTop:n.unit,paddingBottom:2*n.unit,"&:focus":{outline:0}},userMenuItemIcon:{marginRight:n.unit},hideOnMobile:r()({},a.down("xs"),{display:"none"}),hideOnDesktop:r()({},a.up("sm"),{display:"none"})}}))(function(e){var n=e.classes,t=e.title,a=e.username,r=e.backNav,o=e.isOffline,c=e.isDrawerOpen,s=e.openDrawer,l=e.closeDrawer,d=e.isUserMenuOpen,u=e.openUserMenu,p=e.closeUserMenu,f=e.userMenuAnchorEl;return i.a.createElement(i.a.Fragment,null,i.a.createElement(Ee,{className:"hide-on-scroll"},i.a.createElement(h.a,null,i.a.createElement(m.a,{color:"inherit",onClick:s},i.a.createElement(x.a,null)),r&&i.a.createElement(m.a,{className:n.backButton,color:"inherit","aria-label":"Back",component:q.a,to:r},i.a.createElement(j.a,null)),i.a.createElement(N.a,{variant:"title",color:"inherit",className:n.title},t),void 0!==o&&o&&i.a.createElement(L.a,{color:"inherit"}),i.a.createElement($.a,null),i.a.createElement(m.a,{color:"inherit",onClick:u,className:n.hideOnMobile,"data-test":"user-menu"},i.a.createElement(w.a,null)),i.a.createElement(g.a,{open:d,onClose:p,anchorEl:f},i.a.createElement("li",{className:n.userMenuUserItem,"data-test":"username-display"},a),i.a.createElement(E.a,{component:"a",href:oe.b,onClick:p},i.a.createElement(P.a,{className:n.userMenuItemIcon})," Log Out")))),i.a.createElement("div",{className:n.appBarPusher}),i.a.createElement(b.a,{anchor:"left",open:c,disableBackdropTransition:!0,onOpen:s,onClose:l,onClick:l},i.a.createElement(U.a,{navItems:ve})))});Object(B.connect)(function(e){var n=e.user,t=e.env;return{username:null===n||void 0===n?void 0:n.username,isOffline:!t.isOnline}})(be)},914:function(e,n,t){t(370),t(915),e.exports=t(916)},916:function(e,n,t){"use strict";t.r(n),function(e){var n=t(350),a=t(928);Object(n.configure)(function(){a.keys().forEach(function(e){return a(e)})},e)}.call(this,t(253)(e))},928:function(e,n,t){var a={"./index.stories.js":929};function r(e){var n=o(e);return t(n)}function o(e){var n=a[e];if(!(n+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=928},929:function(e,n,t){"use strict";t.r(n),function(e){var n=t(4),a=t.n(n),r=t(0),o=t.n(r),i=t(23),c=t(350),s=t(874),l=t.n(s),d=t(56),u=t.n(d),m=t(878),p=t.n(m),g=t(879),f=t(224),E=t(913),v=t(657),b=t(353),O=t(355),h=t(352),S=t(357),N=t(145),y=t(358),T=t(354),_=t(229),w=t(195),C=t(359),j=t(362),A=t(363),L=t(364);Object(c.storiesOf)("All Components",e).addDecorator(i.withKnobs).addDecorator(Object(g.muiTheme)(v.a)).addDecorator(function(e){return o.a.createElement(l.a,{theme:v.a},e())}).add("LandingSignupPage",function(){return o.a.createElement(u.a,{border:!0},o.a.createElement(T.a,null))}).add("LoginPage",function(){return o.a.createElement(u.a,{border:!0},o.a.createElement(h.a,null))}).add("LogoTitle",function(){return o.a.createElement(u.a,{border:!0},o.a.createElement(f.a,null))}).add("SignupFormCmp",function(){return o.a.createElement(u.a,{border:!0},o.a.createElement(O.a,{previousFields:{username:"previous-username"},errorMessage:Object(i.text)("errorMessage")}))}).add("LoginFormCmp",function(){return o.a.createElement(u.a,{border:!0},o.a.createElement(b.a,{previousFields:{username:"previous-username"},errorMessage:Object(i.text)("errorMessage")}))}).add("NavCmp",function(){return o.a.createElement(E.a,a()({title:Object(i.text)("title","Hello World")},p()({backNav:Object(i.boolean)("backNav",!0)?"#":void 0}),{username:Object(i.text)("username","sharyn8020"),isOffline:Object(i.boolean)("isOffline",!1)}))}).add("NotesPageCmp",function(){return o.a.createElement(u.a,{border:!0},o.a.createElement(L.a,{notes:Object(i.boolean)("No notes",!1)?void 0:[{id:"1",title:Object(i.text)("title1","A title"),description:Object(i.text)("description1","A description")},{id:"2",title:Object(i.text)("title2","A title"),description:Object(i.text)("description2","A description")}],isPageLoading:Object(i.boolean)("isPageLoading",!1)}))}).add("NotePageCmp",function(){return o.a.createElement(u.a,{border:!0},o.a.createElement(A.a,{note:Object(i.boolean)("Not found",!1)?void 0:{title:Object(i.text)("title","A title"),description:Object(i.text)("description","A description")},isPageLoading:Object(i.boolean)("isPageLoading",!1)}))}).add("NoteCmp",function(){return o.a.createElement(u.a,{border:!0},o.a.createElement(_.a,{id:"1234",title:Object(i.text)("title","A Title"),description:Object(i.text)("description","A description"),useTitleLink:Object(i.boolean)("useTitleLink",!0),showActions:Object(i.boolean)("showActions",!1),isDeleting:Object(i.boolean)("isDeleting",!1),isOnline:Object(i.boolean)("isOnline",!0)}))}).add("EditNotePageCmp",function(){return o.a.createElement(u.a,{border:!0},o.a.createElement(C.a,{noteToEdit:Object(i.boolean)("Not found",!1)?void 0:{title:"edit-title",description:"edit-description"},isPageLoading:Object(i.boolean)("isPageLoading",!1)}))}).add("NewNotePage",function(){return o.a.createElement(u.a,{border:!0},o.a.createElement(j.a,null))}).add("NoteFormCmp Edit",function(){return o.a.createElement(u.a,{border:!0,width:600},o.a.createElement(w.a,{noteToEdit:{title:"edit-title",description:"edit-description"},previousFields:{description:"previous-description"},isLoading:Object(i.boolean)("isLoading"),isOnline:Object(i.boolean)("isOnline",!0)}))}).add("NoteFormCmp Create",function(){return o.a.createElement(u.a,{border:!0,width:600},o.a.createElement(w.a,{previousFields:{description:"previous-description"},isLoading:Object(i.boolean)("isLoading"),isOnline:Object(i.boolean)("isOnline",!0)}))}).add("NotFoundPage",function(){return o.a.createElement(u.a,{border:!0},o.a.createElement(N.a,null))}).add("ServerErrorPage",function(){return o.a.createElement(u.a,{border:!0},o.a.createElement(y.a,null))}).add("FakeClientErrorPage",function(){return o.a.createElement(u.a,{border:!0},o.a.createElement(S.a,null))})}.call(this,t(253)(e))},98:function(e,n,t){"use strict";t.d(n,"e",function(){return p}),t.d(n,"d",function(){return g}),t.d(n,"c",function(){return f}),t.d(n,"b",function(){return E}),t.d(n,"a",function(){return v});var a=t(900),r=t.n(a),o=t(656),i=t.n(o),c=t(359),s=t(362),l=t(363),d=t(364),u=t(82),m=t(99),p={path:m.b,exact:!0,loggedInOnly:!0,pageComponent:d.b,title:"Notes",icon:r.a,mainQuery:u.d},g={path:m.e,exact:!0,loggedInOnly:!0,pageComponent:l.b,title:function(e){var n,t;return null!==(n=null===(t=e.pageData.note)||void 0==t?void 0:t.title)&&void 0!=n?n:"Note not found"},backNav:p.path,mainQuery:u.c},f={path:m.a,exact:!0,loggedInOnly:!0,pageComponent:s.a,title:"New Note",backNav:p.path,icon:i.a,mainMutation:u.a},E={path:m.d,exact:!0,loggedInOnly:!0,pageComponent:c.b,title:function(e){var n,t,a=e.pageData;return(null===(n=a.note)||void 0==n?void 0:n.title)?"Edit ".concat(null===(t=a.note)||void 0==t?void 0:t.title):"Note not found"},backNav:function(e){var n,t=e.pageData;return g.path(null===(n=t.note)||void 0==n?void 0:n.id)},icon:i.a,mainQuery:u.c,mainMutation:u.e},v={path:m.c,exact:!0,loggedInOnly:!0,mainMutation:u.b}},99:function(e,n,t){"use strict";t.d(n,"b",function(){return a}),t.d(n,"a",function(){return r}),t.d(n,"e",function(){return o}),t.d(n,"d",function(){return i}),t.d(n,"c",function(){return c});var a="/",r="/new-note",o=function(e){return"/note/".concat(e||":id")},i=function(e){return"/note/edit/".concat(e||":id")},c=function(e){return"/note/delete/".concat(e||":id")}}},[[914,3,2]]]);
//# sourceMappingURL=iframe.5f4700c22fe6839c0550.bundle.js.map