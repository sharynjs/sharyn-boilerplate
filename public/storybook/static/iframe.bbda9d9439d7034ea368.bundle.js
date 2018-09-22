(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{143:function(e,n,t){"use strict";t.d(n,"a",function(){return y});var a=t(0),r=t.n(a),i=t(868),o=t.n(i),c=t(867),s=t.n(c),l=t(61),d=t.n(l),u=t(35),m=t.n(u),p=t(50),f=t.n(p),g=t(12),v=t.n(g),b=t(221),E=t.n(b),O=t(869),S=t.n(O),h=function(e){var n=e.classes;return r.a.createElement(m.a,{middle:!0,noPaper:!0},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(s.a,{style:{fontSize:120,color:"#ccc",marginBottom:20}}),r.a.createElement(d.a,{variant:"title",gutterBottom:!0},"Oops, there is nothing here!"),r.a.createElement("div",{className:n.actions},r.a.createElement(f.a,{color:"primary",variant:"raised",href:"javascript:history.back()",className:n.backButton},r.a.createElement(E.a,{className:n.buttonIcon}),"Go back"),r.a.createElement(f.a,{color:"primary",variant:"raised",component:o.a,to:"/"},r.a.createElement(S.a,{className:n.buttonIcon}),"Homepage"))))},y=v()({sign:{fontSize:120,color:"#ccc",marginBottom:20},backButton:{marginRight:20},buttonIcon:{width:20,marginRight:6,position:"relative",top:-1},actions:{marginTop:30}})(h),N=y;n.b=N,h.__docgenInfo={description:"",methods:[],displayName:"NotFoundPageJSX",props:{classes:{required:!0,flowType:{name:"Object"},description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/error/cmp-page/NotFoundPage.js"]={name:"NotFoundPageJSX",docgenInfo:h.__docgenInfo,path:"src/error/cmp-page/NotFoundPage.js"})},187:function(e,n,t){"use strict";var a=t(23),r=t.n(a),i=t(4),o=t.n(i),c=t(0),s=t.n(c),l=t(38),d=t(39),u=t.n(d),m=t(343),p=t.n(m),f=t(20),g=t(129),v=t.n(g),b=t(872),E=t.n(b),O=t(294),S=t.n(O),h=t(873),y=S.a.object().keys({title:S.a.string().max(20).required(),description:S.a.string().allow(null)}),N=t(96),T=t(79),_=t(344),C=t(874),j=t.n(C);t.d(n,"a",function(){return A});var w=function(e){var n,t,a=e.classes,r=e.noteToEdit,i=e.isLoading,c=e.onSubmit,l=e.previousFields,d=void 0===l?{}:l,u=e.invalidFields,m=void 0===u?[]:u,p=e.isOnline;return s.a.createElement("form",o()({method:"post"},{onSubmit:c}),m.map(function(e){return s.a.createElement("div",{key:e.message,"data-test":"new-note-error",className:a.error},e.message)}),s.a.createElement("div",{className:a.field},s.a.createElement(v.a,{label:"Title",name:"title",defaultValue:null!==(n=d.title)&&void 0!=n?n:null===r||void 0===r?void 0:r.title,error:!!m.find(function(e){return"title"===e.name}),autoFocus:!0,required:!0})),s.a.createElement("div",{className:a.field},s.a.createElement(v.a,{label:"Description",name:"description",defaultValue:null!==(t=d.description)&&void 0!=t?t:null===r||void 0===r?void 0:r.description,fullWidth:!0})),s.a.createElement(E.a,{isLoading:i,isOnline:!(void 0!==p)||p},r?"Save":"Create note"))},A=Object(f.withStyles)(function(e){return{field:{marginBottom:15},error:{marginBottom:20,color:e.palette.error.main}}})(w),L=u()(Object(l.connect)(function(e){var n=e.data,t=e.async,a=e.env;return{invalidFields:n.invalidFields,previousFields:n.previousFields,isLoading:t.noteForm,isOnline:a.isOnline}}),p()({onSubmit:function(e){var n=e.noteToEdit,t=e.match,a=e.dispatch,i=e.routerHistory;return function(e){e.preventDefault();var o=j()(e),c=function(e){var n=S.a.validate(e,y);return!!n.error&&n.error.details.map(function(e){return{name:e.path.toString(),message:Object(h.swit)("".concat(e.path.toString(),"/").concat(e.type),[["title/string.max","The title must be shorter than 20 characters"]])}})}(o);a(c?Object(N.invalidateFields)(c):Object(N.clearInvalidFields)()),c||a(Object(_.graphqlThunk)(r()({},n?T.e:T.a,{routerHistory:i,urlParams:t.params,asyncKey:"noteForm",fields:o})))}}}))(A);n.b=L;w.__docgenInfo={description:"",methods:[],displayName:"NoteFormJSX",props:{previousFields:{defaultValue:{value:"{}",computed:!1},required:!1,flowType:{name:"Object"},description:""},invalidFields:{defaultValue:{value:"[]",computed:!1},required:!1,flowType:{name:"Array",elements:[{name:"Object"}],raw:"Object[]"},description:""},isOnline:{defaultValue:{value:"true",computed:!1},required:!1,flowType:{name:"boolean"},description:""},classes:{required:!0,flowType:{name:"Object"},description:""},noteToEdit:{required:!1,flowType:{name:"Object"},description:""},isLoading:{required:!1,flowType:{name:"boolean"},description:""},onSubmit:{required:!1,flowType:{name:"Function"},description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/note/cmp/NoteForm.js"]={name:"NoteFormJSX",docgenInfo:w.__docgenInfo,path:"src/note/cmp/NoteForm.js"})},218:function(e,n,t){"use strict";t.d(n,"a",function(){return K});var a=t(23),r=t.n(a),i=t(0),o=t.n(i),c=t(38),s=t(95),l=t(876),d=t(20),u=t(217),m=t.n(u),p=t(39),f=t.n(p),g=t(343),v=t.n(g),b=t(336),E=t(225),O=t.n(E),S=t(184),h=t.n(S),y=t(878),N=t.n(y),T=t(877),_=t.n(T),C=t(879),j=t.n(C),w=t(882),A=t.n(w),L=t(880),I=t.n(L),F=t(881),x=t.n(F),R=t(50),P=t.n(R),k=t(79),B=t(344),q=t(335),D=t.n(q),Y=function(e){var n=e.classes,t=e.id,a=e.title,r=e.description,i=e.useTitleLink,c=e.showActions,l=e.isDeleting,d=e.handleDeleteConfirm,u=e.isConfirmDeleteOpen,m=e.setIsConfirmDeleteOpen,p=e.isOnline;return o.a.createElement(h.a,{className:n.note},o.a.createElement("h3",{className:n.title},i?o.a.createElement(b.a,{to:s.d.path(t)},a):a),r&&o.a.createElement("div",{className:n.description},r),c&&(!(void 0!==p)||p)&&o.a.createElement("div",{className:n.buttonGroup},o.a.createElement(O.a,{component:b.a,to:s.b.path(t)},o.a.createElement(_.a,null)),l?o.a.createElement(D.a,{className:n.deleteProgress,size:24}):o.a.createElement("form",{method:"post",action:s.a.path(t),className:n.deleteForm,onSubmit:function(e){return e.preventDefault()||m(!0)}},o.a.createElement(O.a,{type:"submit"},o.a.createElement(N.a,null)),o.a.createElement(j.a,{open:u,onClose:function(){return m(!1)}},o.a.createElement(I.a,null,o.a.createElement(x.a,null,"Delete this note?")),o.a.createElement(A.a,null,o.a.createElement(P.a,{onClick:function(){return m(!1)}},"Cancel"),o.a.createElement(P.a,{onClick:function(){return m(!1)||d&&d()},className:n.confirmDelete,autoFocus:!0},"Delete"))))))},K=f()(m()("isConfirmDeleteOpen","setIsConfirmDeleteOpen",!1),Object(d.withStyles)(function(e){var n=e.spacing,t=e.palette;return{note:r()({},l.clearfix,{padding:3*n.unit}),title:{margin:0},description:{marginTop:2*n.unit},buttonGroup:{float:"right"},deleteForm:{display:"inline-block"},confirmDelete:{color:t.error.main},deleteProgress:{verticalAlign:"middle",color:t.error.main,margin:"0 12px"}}}))(Y),J=f()(Object(c.connect)(function(e){var n=e.async,t=e.env;return{isDeleting:n.deleteNote,isOnline:t.isOnline}}),v()({handleDeleteConfirm:function(e){var n=e.id,t=e.dispatch,a=e.routerHistory;return function(){t(Object(B.graphqlThunk)(r()({},k.b,{routerHistory:a,asyncKey:"deleteNote",fields:{id:n}})))}}}))(K);n.b=J,Y.__docgenInfo={description:"",methods:[],displayName:"NoteJSX",props:{isOnline:{defaultValue:{value:"true",computed:!1},required:!1,flowType:{name:"boolean"},description:""},classes:{required:!0,flowType:{name:"Object"},description:""},id:{required:!0,flowType:{name:"string"},description:""},title:{required:!0,flowType:{name:"string"},description:""},description:{required:!1,flowType:{name:"string"},description:""},useTitleLink:{required:!1,flowType:{name:"boolean"},description:""},showActions:{required:!1,flowType:{name:"boolean"},description:""},isDeleting:{required:!1,flowType:{name:"boolean"},description:""},handleDeleteConfirm:{required:!1,flowType:{name:"Function"},description:""},isConfirmDeleteOpen:{required:!0,flowType:{name:"boolean"},description:""},setIsConfirmDeleteOpen:{required:!0,flowType:{name:"Function"},description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/note/cmp/Note.js"]={name:"NoteJSX",docgenInfo:Y.__docgenInfo,path:"src/note/cmp/Note.js"})},222:function(e,n,t){"use strict";t.d(n,"a",function(){return u});var a=t(61),r=t.n(a),i=t(885),o=t.n(i),c=t(20),s=t(0),l=t.n(s),d=function(e){var n=e.classes;return l.a.createElement(r.a,{variant:"display2"},l.a.createElement(o.a,{className:n.logo})," Notesapp")},u=Object(c.withStyles)(function(e){return{logo:{fontSize:45,verticalAlign:"top",color:e.palette.primary.main}}})(d),m=u;n.b=m,d.__docgenInfo={description:"",methods:[],displayName:"LogoTitleJSX",props:{classes:{required:!0,flowType:{name:"Object"},description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/cmp/LogoTitle.js"]={name:"LogoTitleJSX",docgenInfo:d.__docgenInfo,path:"src/app/cmp/LogoTitle.js"})},224:function(e,n,t){"use strict";var a=t(886),r=t.n(a),i=t(347);t.d(n,"a",function(){return o}),t.d(n,"b",function(){return c});var o={path:"/login",exact:!0,pageComponent:i.b,title:"Log In"},c={path:"/logout",title:"Log Out",icon:r.a}},340:function(e,n,t){"use strict";t.d(n,"a",function(){return C});var a=t(4),r=t.n(a),i=t(0),o=t.n(i),c=t(38),s=t(39),l=t.n(s),d=t(95),u=t(336),m=t(219),p=t.n(m),f=t(50),g=t.n(f),v=t(20),b=t(651),E=t.n(b),O=t(35),S=t.n(O),h=t(218),y=t(128),N=t.n(y),T=t(220),_=t.n(T),C=l()(N()(function(e){return e.isPageLoading},_.a),Object(v.withStyles)(function(e){var n=e.spacing;return{note:{marginBottom:30},fab:{position:"fixed",bottom:3*n.unit,right:3*n.unit},extendedFab:{extend:"fab",paddingRight:3*n.unit},extendedFabIcon:{marginRight:n.unit}}}),N()(function(e){var n=e.notes;return!n||0===(null===n||void 0===n?void 0:n.length)},function(e){var n=e.classes,t=e.isOnline;return o.a.createElement(o.a.Fragment,null,o.a.createElement(S.a,{noPaper:!0,noPadding:!0,middle:!0},"You don't have any note yet!"),(!(void 0!==t)||t)&&o.a.createElement(g.a,{variant:"extendedFab",color:"primary",className:n.extendedFab,component:u.a,to:d.c.path},o.a.createElement(E.a,{className:n.extendedFabIcon}),"Add note"))}))(function(e){var n=e.classes,t=e.notes,a=e.isOnline;return o.a.createElement(o.a.Fragment,null,o.a.createElement(S.a,{noPaper:!0,noPadding:!0,maxWidth:600},t.map(function(e){return o.a.createElement("div",{key:e.id,className:n.note},o.a.createElement(h.b,r()({},e,{useTitleLink:!0})))})),(!(void 0!==a)||a)&&o.a.createElement(g.a,{variant:"fab",color:"primary",className:n.fab,component:u.a,to:d.c.path},o.a.createElement(E.a,null)))}),j=l()(Object(c.connect)(function(e){var n=e.data,t=e.async,a=e.env;return{notes:n.notes,isPageLoading:t.page,isOnline:a.isOnline}}),p()())(C);n.b=j},341:function(e,n,t){"use strict";t.d(n,"a",function(){return N});var a=t(4),r=t.n(a),i=t(8),o=t.n(i),c=t(0),s=t.n(c),l=t(38),d=t(39),u=t.n(d),m=t(128),p=t.n(m),f=t(220),g=t.n(f),v=t(219),b=t.n(v),E=t(35),O=t.n(E),S=t(218),h=t(143),y=function(e){var n=e.note,t=o()(e,["note"]);return s.a.createElement(O.a,{noPaper:!0,noPadding:!0,maxWidth:600},s.a.createElement(S.b,r()({},n,t,{showActions:!0})))},N=u()(p()(function(e){return e.isPageLoading},g.a),p()(function(e){return!e.note},h.b))(y),T=u()(Object(l.connect)(function(e){var n=e.data,t=e.async;return{note:n.note,isPageLoading:t.page}}),b()())(N);n.b=T,y.__docgenInfo={description:"",methods:[],displayName:"NotePageJSX",props:{note:{required:!0,flowType:{name:"Object"},description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/note/cmp-page/NotePage.js"]={name:"NotePageJSX",docgenInfo:y.__docgenInfo,path:"src/note/cmp-page/NotePage.js"})},342:function(e,n,t){"use strict";t.d(n,"a",function(){return N});var a=t(0),r=t.n(a),i=t(38),o=t(39),c=t.n(o),s=t(35),l=t.n(s),d=t(219),u=t.n(d),m=t(128),p=t.n(m),f=t(220),g=t.n(f),v=t(870),b=t.n(v),E=t(871),O=t.n(E),S=t(143),h=t(187),y=function(e){return r.a.createElement(l.a,{maxWidth:600},r.a.createElement(h.b,e))},N=c()(p()(function(e){return e.isPageLoading},g.a),p()(function(e){return!e.noteToEdit},S.b))(y),T=c()(Object(i.connect)(function(e){var n=e.data,t=e.async;return{noteToEdit:b()(n.note,O.a),isPageLoading:t.page}}),u()())(N);n.b=T,y.__docgenInfo={description:"",methods:[],displayName:"EditNotePageJSX"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/note/cmp-page/EditNotePage.js"]={name:"EditNotePageJSX",docgenInfo:y.__docgenInfo,path:"src/note/cmp-page/EditNotePage.js"})},345:function(e,n,t){"use strict";t.d(n,"a",function(){return l});var a=t(0),r=t.n(a),i=t(35),o=t.n(i),c=t(187),s=function(e){return r.a.createElement(o.a,{maxWidth:600},r.a.createElement(c.b,e))},l=s,d=l;n.b=d,s.__docgenInfo={description:"",methods:[],displayName:"NewNotePageJSX"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/note/cmp-page/NewNotePage.js"]={name:"NewNotePageJSX",docgenInfo:s.__docgenInfo,path:"src/note/cmp-page/NewNotePage.js"})},347:function(e,n,t){"use strict";t.d(n,"a",function(){return g});var a=t(0),r=t.n(a),i=t(336),o=t(35),c=t.n(o),s=t(20),l=t(61),d=t.n(l),u=t(222),m=t(348),p=t(357),f=function(e){var n=e.classes;return r.a.createElement(c.a,{middle:!0},r.a.createElement("div",{className:n.brandingContainer},r.a.createElement(u.b,null)),r.a.createElement(d.a,{variant:"title",align:"center"},"Log In"),r.a.createElement(m.b,null),r.a.createElement("div",{className:n.switchAuth},"Don't have an account yet? ",r.a.createElement(i.a,{className:n.authLink,to:p.a.path,"data-test":"switch-to-signup"},"Sign Up")))},g=Object(s.withStyles)({brandingContainer:{textAlign:"center",marginBottom:30},switchAuth:{marginTop:20,textAlign:"center"},authLink:{whiteSpace:"nowrap"}})(f),v=g;n.b=v,f.__docgenInfo={description:"",methods:[],displayName:"LoginPageJSX",props:{classes:{required:!0,flowType:{name:"Object"},description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/auth/cmp-page/LoginPage.js"]={name:"LoginPageJSX",docgenInfo:f.__docgenInfo,path:"src/auth/cmp-page/LoginPage.js"})},348:function(e,n,t){"use strict";t.d(n,"a",function(){return g});var a=t(5),r=t.n(a),i=t(0),o=t.n(i),c=t(38),s=t(20),l=t(129),d=t.n(l),u=t(50),m=t.n(u),p=t(224),f=function(e){var n=e.classes,t=e.previousFields,a=void 0===t?{}:t,r=e.errorMessage;return o.a.createElement("form",{"data-test":"login-form",action:p.a.path,method:"post"},r&&o.a.createElement("div",{"data-test":"login-error",className:n.error},r),o.a.createElement(d.a,{className:n.firstInput,name:"username",label:"Username",defaultValue:a.username,autoFocus:!0,required:!0}),o.a.createElement(d.a,{className:n.input,name:"password",type:"password",label:"Password",required:!0}),o.a.createElement("div",{className:n.action},o.a.createElement(m.a,{className:n.loginButton,"data-test":"login-form-submit",variant:"raised",color:"primary",type:"submit"},"Log In")))},g=Object(s.withStyles)(function(e){var n=e.breakpoints,t=e.palette;return{input:{width:"100%"},firstInput:{extend:"input",marginBottom:10},action:{textAlign:"center",marginTop:20},loginButton:r()({},n.down("xs"),{width:"100%"}),error:{margin:"20px 0",color:t.error.main}}})(f),v=Object(c.connect)(function(e){var n=e.data;return{previousFields:n.previousFields,errorMessage:n.errorMessage}})(g);n.b=v,f.__docgenInfo={description:"",methods:[],displayName:"LoginFormJSX",props:{previousFields:{defaultValue:{value:"{}",computed:!1},required:!1,flowType:{name:"Object"},description:""},classes:{required:!0,flowType:{name:"Object"},description:""},errorMessage:{required:!1,flowType:{name:"string"},description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/auth/cmp/LoginForm.js"]={name:"LoginFormJSX",docgenInfo:f.__docgenInfo,path:"src/auth/cmp/LoginForm.js"})},349:function(e,n,t){"use strict";t.d(n,"a",function(){return b});var a=t(5),r=t.n(a),i=t(0),o=t.n(i),c=t(336),s=t(20),l=t(61),d=t.n(l),u=t(35),m=t.n(u),p=t(350),f=t(222),g=t(224),v=function(e){var n=e.classes;return o.a.createElement(m.a,{middle:!0},o.a.createElement("div",{className:n.layout},o.a.createElement("div",{className:n.firstPane},o.a.createElement("div",{className:n.brandingContainer},o.a.createElement(f.b,null),o.a.createElement(d.a,{variant:"headline",className:n.slogan},"Great Notes for Great People")),o.a.createElement("div",{className:n.description},"Notesapp is a totally real app that lets you create, update, and read your notes for free!"),o.a.createElement("div",{className:n.featured},"Featured in"," ",o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/sharynjs/sharyn"},"Sharyn Magazine"))),o.a.createElement("div",{className:n.secondPane},o.a.createElement(d.a,{variant:"title",align:"center",color:"primary",className:n.signupText},"Create an account"),o.a.createElement(p.b,null),o.a.createElement("div",{className:n.switchAuth},"Already have an account?"," ",o.a.createElement(c.a,{className:n.authLink,to:g.a.path,"data-test":"switch-to-login"},"Log In")))))},b=Object(s.withStyles)(function(e){var n=e.breakpoints;return{layout:r()({maxWidth:650,display:"flex"},n.down("xs"),{width:"100%",flexDirection:"column"}),_pane:r()({},n.down("xs"),{width:"auto"}),firstPane:r()({extend:"_pane",width:"58%",paddingRight:30,borderRight:"1px solid #d7d7d7"},n.down("xs"),{margin:"0 0 10px",padding:0,border:"none"}),secondPane:r()({extend:"_pane",width:"42%",marginLeft:30},n.down("xs"),{margin:0}),brandingContainer:{textAlign:"center"},slogan:r()({margin:"23px 0"},n.down("xs"),{margin:"15px 0"}),description:r()({},n.down("xs"),{display:"none"}),featured:r()({color:"#999",textAlign:"center",marginTop:20},n.down("xs"),{display:"none"}),switchAuth:{marginTop:20,textAlign:"center"},authLink:{whiteSpace:"nowrap"},signupText:{marginBottom:20}}})(v),E=b;n.b=E,v.__docgenInfo={description:"",methods:[],displayName:"LandingSignupPageJSX",props:{classes:{required:!0,flowType:{name:"Object"},description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/landing/cmp-page/LandingSignupPage.js"]={name:"LandingSignupPageJSX",docgenInfo:v.__docgenInfo,path:"src/landing/cmp-page/LandingSignupPage.js"})},350:function(e,n,t){"use strict";t.d(n,"a",function(){return g});var a=t(5),r=t.n(a),i=t(0),o=t.n(i),c=t(38),s=t(20),l=t(129),d=t.n(l),u=t(50),m=t.n(u),p=t(357),f=function(e){var n=e.classes,t=e.previousFields,a=void 0===t?{}:t,r=e.errorMessage;return o.a.createElement("form",{"data-test":"signup-form",action:p.a.path,method:"post"},r&&o.a.createElement("div",{"data-test":"signup-error",className:n.error},r),o.a.createElement(d.a,{className:n.firstInput,name:"username",label:"Username",placeholder:"sharyn8020",defaultValue:a.username,required:!0}),o.a.createElement(d.a,{className:n.input,name:"password",type:"password",label:"Password",required:!0}),o.a.createElement("div",{className:n.action},o.a.createElement(m.a,{className:n.signupButton,"data-test":"signup-form-submit",variant:"raised",color:"primary",type:"submit"},"Sign Up")))},g=Object(s.withStyles)(function(e){var n=e.breakpoints,t=e.palette;return{input:{width:"100%"},firstInput:{extend:"input",marginBottom:10},action:{textAlign:"center",marginTop:20},signupButton:r()({},n.down("xs"),{width:"100%"}),error:{margin:"20px 0",color:t.error.main}}})(f),v=Object(c.connect)(function(e){var n=e.data;return{previousFields:n.previousFields,errorMessage:n.errorMessage}})(g);n.b=v,f.__docgenInfo={description:"",methods:[],displayName:"SignupFormJSX",props:{previousFields:{defaultValue:{value:"{}",computed:!1},required:!1,flowType:{name:"Object"},description:""},classes:{required:!0,flowType:{name:"Object"},description:""},errorMessage:{required:!1,flowType:{name:"string"},description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/auth/cmp/SignupForm.js"]={name:"SignupFormJSX",docgenInfo:f.__docgenInfo,path:"src/auth/cmp/SignupForm.js"})},351:function(e,n,t){"use strict";t.d(n,"a",function(){return d});var a=t(0),r=t.n(a),i=t(290),o=t.n(i),c=t(35),s=t.n(c),l=function(){return r.a.createElement(s.a,{middle:!0},"A fake error has been executed in your console to test client-side error reporting.")},d=o()({componentDidMount:function(){setTimeout(function(){throw Error("Fake error, everything is fine")},100)}})(l),u=d;n.b=u,l.__docgenInfo={description:"",methods:[],displayName:"FakeClientErrorPageJSX"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/error/cmp-page/FakeClientErrorPage.js"]={name:"FakeClientErrorPageJSX",docgenInfo:l.__docgenInfo,path:"src/error/cmp-page/FakeClientErrorPage.js"})},352:function(e,n,t){"use strict";t.d(n,"a",function(){return S});var a=t(0),r=t.n(a),i=t(188),o=t.n(i),c=t(887),s=t.n(c),l=t(61),d=t.n(l),u=t(12),m=t.n(u),p=t(35),f=t.n(p),g=t(50),v=t.n(g),b=t(221),E=t.n(b),O=function(e){var n=e.classes;return r.a.createElement(f.a,{middle:!0,noPaper:!0},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(o.a,{className:n.sign}),r.a.createElement(d.a,{variant:"title",gutterBottom:!0},"Something went wrong, sorry!"),r.a.createElement("p",null,"We have been notified ",r.a.createElement(s.a,{className:n.smile})),r.a.createElement(v.a,{color:"primary",variant:"raised",href:"javascript:history.back()",className:n.backButton},r.a.createElement(E.a,{className:n.buttonIcon}),"Go back")))},S=m()({sign:{fontSize:120,color:"#ccc",marginBottom:20},smile:{verticalAlign:"text-bottom",color:"#777",paddingTop:2,marginLeft:2},backButton:{marginTop:15},buttonIcon:{width:20,marginRight:6,position:"relative",top:-1}})(O),h=S;n.b=h,O.__docgenInfo={description:"",methods:[],displayName:"ServerErrorPageJSX",props:{classes:{required:!0,flowType:{name:"Object"},description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/error/cmp-page/ServerErrorPage.js"]={name:"ServerErrorPageJSX",docgenInfo:O.__docgenInfo,path:"src/error/cmp-page/ServerErrorPage.js"})},357:function(e,n,t){"use strict";var a=t(349);t.d(n,"a",function(){return r});var r={path:"/",exact:!0,loggedOutOnly:!0,pageComponent:a.b}},79:function(e,n,t){"use strict";t.d(n,"d",function(){return o}),t.d(n,"c",function(){return c}),t.d(n,"a",function(){return s}),t.d(n,"e",function(){return l}),t.d(n,"b",function(){return d});var a=t(339),r=t.n(a),i=t(97),o={query:"{ getNotes { id, title, description } }",mapResp:function(e){return{notes:e.getNotes}}},c={query:"query ($id: ID!) { getNote(id: $id) { id, title, description } }",mapResp:function(e){return{note:e.getNote}}},s={query:"mutation ($input: NoteInput!) { createNote(input: $input) { note { id }, invalidFields { name, message } } }",mapFields:function(e){return{input:r()(e)}},mapResp:function(e){var n,t,a=e.createNote;return{createdNoteId:null===a||void 0===a||null===(n=a.note)||void 0==n?void 0:n.id,invalidFields:null!==(t=null===a||void 0===a?void 0:a.invalidFields)&&void 0!=t?t:void 0}},successRedirect:function(e){var n=e.createdNoteId;return Object(i.e)(n)}},l={query:"mutation ($id: ID!, $input: NoteInput!) { updateNote(id: $id, input: $input) { note { id, title, description }, updatedNote { id }, invalidFields { name, message } } }",mapFields:function(e){return{input:r()(e)}},mapResp:function(e){var n,t,a=e.updateNote;return{note:null===a||void 0===a?void 0:a.note,updatedNoteId:null===a||void 0===a||null===(n=a.updatedNote)||void 0==n?void 0:n.id,invalidFields:null!==(t=null===a||void 0===a?void 0:a.invalidFields)&&void 0!=t?t:void 0}},successRedirect:function(e){var n=e.updatedNoteId;return Object(i.e)(n)}},d={query:"mutation ($id: ID!) { deleteNote(id: $id) }",successRedirect:i.b}},864:function(e,n,t){"use strict";var a=t(649),r=t.n(a),i=t(96),o=t(293);n.a=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},n=1<arguments.length?arguments[1]:void 0,t=n.payload,a=n.type;return r()(a,[[[i.SHARYN_FETCH_PAGE_SUCCESS,i.SHARYN_ASYNC_SUCCESS],function(){return Object(o.addData)(e,t.data)}],[[i.SHARYN_NAVIGATION,i.SHARYN_FETCH_PAGE_REQUEST],function(){return Object(o.clearData)()}],[i.SHARYN_INVALIDATE_FIELDS,function(){return Object(o.addData)(e,{invalidFields:t})}],[i.SHARYN_CLEAR_INVALID_FIELDS,function(){return Object(o.delData)("invalidFields")(e)}]],e)}},894:function(e,n,t){"use strict";var a=t(20),r=Object(a.createMuiTheme)({palette:{primary:{main:"#3f51b5"}}});n.a=r},897:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(39),o=t.n(i),c=t(217),s=t.n(c),l=t(38),d=t(336),u=t(20),m=t(888),p=t.n(m),f=t(893),g=t.n(f),v=t(890),b=t.n(v),E=t(225),O=t.n(E),S=t(61),h=t.n(S),y=t(891),N=t.n(y),T=t(889),_=t.n(T),C=t(883),j=t.n(C),w=t(884),A=t.n(w),L=t(95),I=t(224),F=t(351),x=t(352),R=t(143),P=t(188),k=t.n(P),B=(R.b,k.a,x.b,{path:"/fake-client-error",exact:!0,pageComponent:F.b,title:"Trigger Client Error",icon:k.a,backNav:"/"}),q={path:"/404",exact:!0,icon:k.a,title:"Trigger 404 Error"},D={path:"/fake-error",exact:!0,title:"Trigger Server Error",icon:k.a},Y=t(221),K=t.n(Y),J=t(892),X=t.n(J);t.d(n,"a",function(){return G});var M=j()(p.a),H=[L.e,L.c,q,[D,{hardLink:!0}],B,{title:"Storybook",path:"/static/storybook/",icon:_.a,newTab:!0},[I.b,{hardLink:!0}]],V=function(e){var n=e.classes,t=e.title,i=e.isOpen,o=e.updateIsOpen,c=e.username,s=e.backNav,l=e.isOffline;return r.a.createElement(a.Fragment,null,r.a.createElement(M,{className:"hide-on-scroll"},r.a.createElement(b.a,null,r.a.createElement(O.a,{color:"inherit","aria-label":"Menu",onClick:function(){return o(!i)}},r.a.createElement(N.a,null)),s&&r.a.createElement(O.a,{className:n.backButton,color:"inherit","aria-label":"Back",component:d.a,to:s},r.a.createElement(K.a,null)),t&&r.a.createElement(h.a,{variant:"title",color:"inherit",className:n.grow},t),void 0!==l&&l&&r.a.createElement(X.a,{color:"inherit"}))),r.a.createElement("div",{className:n.appBarPusher}),r.a.createElement(g.a,{anchor:"left",open:i,disableBackdropTransition:!0,onOpen:function(){return o(!0)},onClose:function(){return o(!1)},onClick:function(){return o(!1)}},r.a.createElement(A.a,{navItems:H}),c&&r.a.createElement("div",{"data-test":"username-display"},c)))},G=o()(s()("isOpen","updateIsOpen",!1),Object(u.withStyles)(function(e){return{appBarPusher:e.mixins.toolbar,backButton:{margin:"0 6px 0 -6px"},grow:{flexGrow:1}}}))(V);Object(l.connect)(function(e){var n=e.user,t=e.env;return{username:null===n||void 0===n?void 0:n.username,isOffline:!t.isOnline}})(G);V.__docgenInfo={description:"",methods:[],displayName:"NavJSX",props:{isOffline:{defaultValue:{value:"false",computed:!1},required:!1,flowType:{name:"boolean"},description:""},classes:{required:!0,flowType:{name:"Object"},description:""},isOpen:{required:!0,flowType:{name:"boolean"},description:""},title:{required:!1,flowType:{name:"string"},description:""},updateIsOpen:{required:!0,flowType:{name:"Function"},description:""},username:{required:!1,flowType:{name:"string"},description:""},backNav:{required:!1,flowType:{name:"string"},description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/cmp/Nav.js"]={name:"NavJSX",docgenInfo:V.__docgenInfo,path:"src/app/cmp/Nav.js"})},899:function(e,n,t){t(358),t(900),e.exports=t(901)},901:function(e,n,t){"use strict";t.r(n),function(e){var n=t(338),a=t(913);Object(n.configure)(function(){a.keys().forEach(function(e){return a(e)})},e)}.call(this,t(248)(e))},913:function(e,n,t){var a={"./index.stories.js":914};function r(e){var n=i(e);return t(n)}function i(e){var n=a[e];if(!(n+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=913},914:function(e,n,t){"use strict";t.r(n),function(e){var n=t(4),a=t.n(n),r=t(0),i=t.n(r),o=t(858),c=t(859),s=t(338),l=t(22),d=t(126),u=t.n(d),m=t(647),p=t.n(m),f=t(860),g=t.n(f),v=t(183),b=t.n(v),E=t(12),O=t.n(E),S=t(895),h=t.n(S),y=t(861),N=t.n(y),T=t(185),_=t(38),C=t(863),j=t(189),w=t.n(j),A=t(648),L=t.n(A),I=t(864),F=t(218),x=t(187),R=t(897),P=t(350),k=t(348),B=t(347),q=t(222),D=t(351),Y=t(143),K=t(349),J=t(342),X=t(345),M=t(341),H=t(340),V=t(352),G=t(894);u.a.setup(p()());var $=O()(N.a)(function(e){var n=e.children;return i.a.createElement(i.a.Fragment,null,n)}),U=Object(T.createStore)(Object(T.combineReducers)({data:I.a,user:function(){return 0<arguments.length&&void 0!==arguments[0]?arguments[0]:null},ui:function(){return 0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}},async:function(){return 0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}},env:function(){return 0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}}}),Object(T.applyMiddleware)(C.a));Object(s.storiesOf)("All Components",e).addDecorator(l.withKnobs).addDecorator(Object(c.withBackgrounds)([{name:"White",value:"#fff",default:!0},{name:"Gray",value:"#f2f2f2"}])).addDecorator(function(e){return i.a.createElement(_.Provider,{store:U},i.a.createElement(h.a,null,i.a.createElement(g.a,a()({jss:u.a},{generateClassName:b()()}),i.a.createElement($,null,e()))))}).addDecorator(Object(o.muiTheme)(G.a)).add("LandingSignupPageCmp",function(){return i.a.createElement(K.a,null)}).add("LoginPageCmp",function(){return i.a.createElement(B.a,null)}).add("LogoTitleCmp",function(){return i.a.createElement(w.a,{border:!0},i.a.createElement(q.a,null))}).add("SignupFormCmp",function(){return i.a.createElement(w.a,{border:!0},i.a.createElement(P.a,{previousFields:{username:"previous-username"},errorMessage:Object(l.text)("errorMessage")}))}).add("LoginFormCmp",function(){return i.a.createElement(w.a,{border:!0},i.a.createElement(k.a,{previousFields:{username:"previous-username"},errorMessage:Object(l.text)("errorMessage")}))}).add("NavCmp",function(){return i.a.createElement(R.a,a()({title:Object(l.text)("title","Hello World")},L()({backNav:Object(l.boolean)("backNav",!0)?"#":void 0}),{username:Object(l.text)("username","sharyn8020"),isOffline:Object(l.boolean)("isOffline",!1)}))}).add("NotesPageCmp",function(){return i.a.createElement(H.a,{notes:Object(l.boolean)("No notes",!1)?void 0:[{id:"1",title:Object(l.text)("title1","A title"),description:Object(l.text)("description1","A description")},{id:"2",title:Object(l.text)("title2","A title"),description:Object(l.text)("description2","A description")}],isPageLoading:Object(l.boolean)("isPageLoading",!1),isOnline:Object(l.boolean)("isOnline",!0)})}).add("NotePageCmp",function(){return i.a.createElement(M.a,{note:Object(l.boolean)("Not found",!1)?void 0:{title:Object(l.text)("title","A title"),description:Object(l.text)("description","A description")},isPageLoading:Object(l.boolean)("isPageLoading",!1)})}).add("NoteCmp",function(){return i.a.createElement(w.a,{border:!0},i.a.createElement(F.a,{id:"1234",title:Object(l.text)("title","A Title"),description:Object(l.text)("description","A description"),useTitleLink:Object(l.boolean)("useTitleLink",!0),showActions:Object(l.boolean)("showActions",!1),isDeleting:Object(l.boolean)("isDeleting",!1),isOnline:Object(l.boolean)("isOnline",!0)}))}).add("EditNotePageCmp",function(){return i.a.createElement(J.a,{noteToEdit:Object(l.boolean)("Not found",!1)?void 0:{title:"edit-title",description:"edit-description"},isPageLoading:Object(l.boolean)("isPageLoading",!1)})}).add("NewNotePageCmp",function(){return i.a.createElement(X.a,null)}).add("NoteFormCmp Edit",function(){return i.a.createElement(w.a,{border:!0,width:600},i.a.createElement(x.a,{noteToEdit:{title:"edit-title",description:"edit-description"},previousFields:{description:"previous-description"},isLoading:Object(l.boolean)("isLoading"),isOnline:Object(l.boolean)("isOnline",!0)}))}).add("NoteFormCmp Create",function(){return i.a.createElement(w.a,{border:!0,width:600},i.a.createElement(x.a,{previousFields:{description:"previous-description"},isLoading:Object(l.boolean)("isLoading"),isOnline:Object(l.boolean)("isOnline",!0)}))}).add("NotFoundPageCmp",function(){return i.a.createElement(Y.a,null)}).add("ServerErrorPageCmp",function(){return i.a.createElement(V.a,null)}).add("FakeClientErrorPageCmp",function(){return i.a.createElement(D.a,null)})}.call(this,t(248)(e))},95:function(e,n,t){"use strict";t.d(n,"e",function(){return p}),t.d(n,"d",function(){return f}),t.d(n,"c",function(){return g}),t.d(n,"b",function(){return v}),t.d(n,"a",function(){return b});var a=t(875),r=t.n(a),i=t(652),o=t.n(i),c=t(79),s=t(97),l=t(340),d=t(341),u=t(342),m=t(345),p={path:s.b,exact:!0,loggedInOnly:!0,pageComponent:l.b,title:"Notes",icon:r.a,mainQuery:c.d},f={path:s.e,exact:!0,loggedInOnly:!0,pageComponent:d.b,title:function(e){var n,t,a=e.data;return null!==(n=null===a||void 0===a||null===(t=a.note)||void 0==t?void 0:t.title)&&void 0!=n?n:"Note not found"},backNav:p.path,mainQuery:c.c},g={path:s.a,exact:!0,loggedInOnly:!0,pageComponent:m.b,title:"New Note",backNav:p.path,icon:o.a,mainMutation:c.a},v={path:s.d,exact:!0,loggedInOnly:!0,pageComponent:u.b,title:function(e){var n,t,a=e.data;return(null===a||void 0===a||null===(n=a.note)||void 0==n?void 0:n.title)?"Edit ".concat(null===a||void 0===a||null===(t=a.note)||void 0==t?void 0:t.title):"Note not found"},backNav:function(e){var n,t=e.data;return f.path(null===t||void 0===t||null===(n=t.note)||void 0==n?void 0:n.id)},icon:o.a,mainQuery:c.c,mainMutation:c.e},b={path:s.c,exact:!0,loggedInOnly:!0,mainMutation:c.b}},97:function(e,n,t){"use strict";t.d(n,"b",function(){return a}),t.d(n,"a",function(){return r}),t.d(n,"e",function(){return i}),t.d(n,"d",function(){return o}),t.d(n,"c",function(){return c});var a="/",r="/new-note",i=function(e){return"/note/".concat(e||":id")},o=function(e){return"/note/edit/".concat(e||":id")},c=function(e){return"/note/delete/".concat(e||":id")}}},[[899,3,2]]]);
//# sourceMappingURL=iframe.bbda9d9439d7034ea368.bundle.js.map