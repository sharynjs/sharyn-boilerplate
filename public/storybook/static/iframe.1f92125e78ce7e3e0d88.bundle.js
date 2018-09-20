(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{62:function(e,t,n){"use strict";n.d(t,"d",function(){return o}),n.d(t,"c",function(){return c}),n.d(t,"a",function(){return u}),n.d(t,"e",function(){return d}),n.d(t,"b",function(){return s});var i=n(281),r=n.n(i),a=n(81),o={query:"{ getNotes { id, title, description } }",mapResp:function(e){return{notes:e.getNotes}}},c={query:"query ($id: ID!) { getNote(id: $id) { id, title, description } }",mapResp:function(e){return{note:e.getNote}}},u={query:"mutation ($input: NoteInput!) { createNote(input: $input) { note { id }, invalidFields { name, message } } }",mapFields:function(e){return{input:r()(e)}},mapResp:function(e){var t,n=e.createNote;return{createdNoteId:null===n||void 0===n||null===(t=n.note)||void 0==t?void 0:t.id}},successRedirect:function(e){var t=e.createdNoteId;return Object(a.e)(t)}},d={query:"mutation ($id: ID!, $input: NoteInput!) { updateNote(id: $id, input: $input) { note { id }, invalidFields { name, message } } }",mapFields:function(e){return{input:r()(e)}},mapResp:function(e){var t,n=e.updateNote;return{updatedNoteId:null===n||void 0===n||null===(t=n.note)||void 0==t?void 0:t.id}},successRedirect:function(e){var t=e.updatedNoteId;return Object(a.e)(t)}},s={query:"mutation ($id: ID!) { deleteNote(id: $id) }",successRedirect:a.b}},770:function(e,t,n){"use strict";var i=n(530),r=n.n(i),a=n(80),o=n(234);t.a=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=1<arguments.length?arguments[1]:void 0,n=t.payload,i=t.type;return r()(i,[[[a.SHARYN_FETCH_PAGE_SUCCESS,a.SHARYN_ASYNC_SUCCESS],function(){return Object(o.addData)(e,n.data)}],[a.SHARYN_INVALIDATE_FIELDS,function(){return Object(o.addData)(e,{invalidFields:n})}],[a.SHARYN_CLEAR_INVALID_FIELDS,function(){return Object(o.delData)("invalidFields")(e)}],[[a.SHARYN_NAVIGATION,a.SHARYN_FETCH_PAGE_REQUEST],function(){return Object(o.clearData)()}]],e)}},780:function(e,t,n){"use strict";var i=n(50),r=Object(i.createMuiTheme)({palette:{primary:{main:"#3f51b5"}}});t.a=r},783:function(e,t,n){"use strict";var i=n(172),r=n.n(i),a=n(280),o=n.n(a),c=n(18),u=n.n(c),d=n(4),s=n.n(d),l=n(0),p=n.n(l),m=n(285),f=n(231),v=n.n(f),b=n(232),h=n.n(b),g=n(50),y=n(777),E=n.n(y),O=n(537),N=n.n(O),S=n(778),T=n.n(S),j=n(235),w=n.n(j),F=n(779),R=w.a.object().keys({title:w.a.string().max(20).required(),description:w.a.string().allow(null)}),_=function(e){var t=w.a.validate(e,R);return!!t.error&&t.error.details.map(function(e){return{name:e.path.toString(),message:Object(F.swit)("".concat(e.path.toString(),"/").concat(e.type),[["title/string.max","The title must be shorter than 20 characters"]])}})},I=n(80),A=n(532),k=n.n(A),C=n(62),q=n(233),D=function(e){var t,n,i=e.classes,r=e.fields,a=e.handleFieldChange,o=e.onSubmit,c=e.noteToEdit,u=e.isLoading,d=e.invalidFields,l=void 0===d?[]:d;return p.a.createElement("form",s()({method:"post"},{onSubmit:o}),l.map(function(e){return p.a.createElement("div",{key:e.message,"data-test":"new-note-error",className:i.error},e.message)}),p.a.createElement("div",{className:i.field},p.a.createElement(N.a,{label:"Title",name:"title",value:null!==(t=r.title)&&void 0!=t?t:"",onChange:a,error:!!l.find(function(e){return"title"===e.name}),required:!0})),p.a.createElement("div",{className:i.field},p.a.createElement(N.a,{label:"Description",name:"description",value:null!==(n=r.description)&&void 0!=n?n:"",onChange:a,fullWidth:!0})),p.a.createElement(T.a,{isLoading:u},c?"Save":"Create note"))},x=v()(Object(m.b)(function(e){var t=e.data,n=e.async;return{invalidFields:t.invalidFields,previousFields:t.previousFields,isLoading:n.noteForm}}),E()(function(e){var t=e.noteToEdit,n=e.previousFields,i=void 0===n?{}:n;return k()(u()({title:null===t||void 0===t?void 0:t.title,description:null===t||void 0===t?void 0:t.description},i))}),h()({onSubmit:function(e){var t=e.noteToEdit,n=e.match,i=e.fields,a=e.dispatch,c=e.routerHistory;return function(){var e=o()(r.a.mark(function e(o){var d,s,l;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o.preventDefault(),d=_(i),a(d?Object(I.invalidateFields)(d):Object(I.clearInvalidFields)()),d){e.next=9;break}return s=t?C.e:C.a,e.next=7,a(Object(q.graphqlThunk)(u()({},s,{urlParams:n.params,asyncKey:"noteForm",fields:i})));case 7:(l=e.sent).errors||l.invalidFields||!s.successRedirect||c.push(s.successRedirect instanceof Function?s.successRedirect(l,i):s.successRedirect);case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}}),Object(g.withStyles)(function(e){return{field:{marginBottom:15},error:{marginBottom:20,color:e.palette.error.main}}}))(D);t.a=x;D.__docgenInfo={description:"",methods:[],displayName:"NoteFormJSX",props:{invalidFields:{defaultValue:{value:"[]",computed:!1},required:!1,flowType:{name:"Array",elements:[{name:"Object"}],raw:"Object[]"},description:""},classes:{required:!0,flowType:{name:"Object"},description:""},fields:{required:!0,flowType:{name:"Object"},description:""},handleFieldChange:{required:!0,flowType:{name:"Function"},description:""},onSubmit:{required:!0,flowType:{name:"Function"},description:""},isLoading:{required:!1,flowType:{name:"boolean"},description:""},noteToEdit:{required:!1,flowType:{name:"Object"},description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/note/cmp/NoteForm.js"]={name:"NoteFormJSX",docgenInfo:D.__docgenInfo,path:"src/note/cmp/NoteForm.js"})},784:function(e,t,n){"use strict";var i=n(172),r=n.n(i),a=n(280),o=n.n(a),c=n(4),u=n.n(c),d=n(18),s=n.n(d),l=n(0),p=n.n(l),m=n(773),f=n.n(m),v=n(535),b=n.n(v),h=n(62),g=n(81),y={path:g.b,exact:!0,loggedInOnly:!0,title:"Notes",Icon:f.a,mainQuery:h.d},E={path:g.e,exact:!0,loggedInOnly:!0,title:function(e){var t,n,i=e.data;return null!==(t=null===i||void 0===i||null===(n=i.note)||void 0==n?void 0:n.title)&&void 0!=t?t:"Note not found"},backNav:y.path,mainQuery:h.c},O=(g.a,b.a,h.a,{path:g.d,exact:!0,loggedInOnly:!0,title:function(e){var t,n,i=e.data;return(null===i||void 0===i||null===(t=i.note)||void 0==t?void 0:t.title)?"Edit ".concat(null===i||void 0===i||null===(n=i.note)||void 0==n?void 0:n.title):"Note not found"},backNav:function(e){var t,n=e.data;return E.path(null===n||void 0===n||null===(t=n.note)||void 0==t?void 0:t.id)},Icon:b.a,mainQuery:h.c,mainMutation:h.e}),N={path:g.c,exact:!0,loggedInOnly:!0,mainMutation:h.b},S=n(774),T=n(50),j=n(231),w=n.n(j),F=n(232),R=n.n(F),_=n(1351),I=n(536),A=n.n(I),k=n(531),C=n.n(k),q=n(776),D=n.n(q),x=n(775),L=n.n(x),Y=n(233),H=function(e){var t=e.classes,n=e.id,i=e.title,r=e.description,a=e.useTitleLink,o=e.onSubmit;return p.a.createElement(C.a,{className:t.note},p.a.createElement("h3",{className:t.title},a?p.a.createElement(_.a,{to:E.path(n)},i):i),r&&p.a.createElement("p",null,r),p.a.createElement("div",{className:t.buttonGroup},p.a.createElement(A.a,{component:_.a,to:O.path(n)},p.a.createElement(L.a,null)),p.a.createElement("form",u()({method:"post",action:N.path(n),className:t.deleteForm},{onSubmit:o}),p.a.createElement(A.a,{type:"submit",className:t.delete},p.a.createElement(D.a,null)))))},$=w()(R()({onSubmit:function(e){var t=e.id,n=e.dispatch,i=e.match,a=e.routerHistory;return function(){var e=o()(r.a.mark(function e(o){var c,u,d,l;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o.preventDefault(),!window.confirm("Do you really want to delete this note?")){e.next=8;break}return c=h.b,u={id:t},e.next=6,n(Object(Y.graphqlThunk)(s()({},c,{asyncKey:"deleteNote:".concat(t),fields:u})));case 6:(d=e.sent).errors||d.invalidFields||!c.successRedirect||(l=c.successRedirect instanceof Function?c.successRedirect(d,u):c.successRedirect,a.push(l),l===i.url&&n(Object(Y.fetchPageThunk)(s()({},h.d))));case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}}),Object(T.withStyles)(function(e){var t=e.spacing,n=e.palette;return{note:s()({},S.clearfix,{padding:3*t.unit,marginBottom:3*t.unit}),title:{marginTop:0},buttonGroup:{float:"right"},deleteForm:{display:"inline-block"},delete:{background:"none",border:"none",cursor:"pointer",color:n.error.main}}}))(H);t.a=$;H.__docgenInfo={description:"",methods:[],displayName:"NoteJSX",props:{classes:{required:!0,flowType:{name:"Object"},description:""},id:{required:!0,flowType:{name:"string"},description:""},title:{required:!0,flowType:{name:"string"},description:""},description:{required:!1,flowType:{name:"string"},description:""},useTitleLink:{required:!1,flowType:{name:"boolean"},description:""},onSubmit:{required:!0,flowType:{name:"Function"},description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/note/cmp/Note.js"]={name:"NoteJSX",docgenInfo:H.__docgenInfo,path:"src/note/cmp/Note.js"})},786:function(e,t,n){n(286),n(787),e.exports=n(788)},788:function(e,t,n){"use strict";n.r(t),function(e){var t=n(279),i=n(800);Object(t.configure)(function(){i.keys().forEach(function(e){return i(e)})},e)}.call(this,n(196)(e))},800:function(e,t,n){var i={"./index.stories.js":801};function r(e){var t=a(e);return n(t)}function a(e){var t=i[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(i)},r.resolve=a,e.exports=r,r.id=800},801:function(e,t,n){"use strict";n.r(t),function(e){var t=n(4),i=n.n(t),r=n(0),a=n.n(r),o=n(763),c=n(764),u=n(279),d=n(173),s=n(765),l=n(106),p=n.n(l),m=n(529),f=n.n(m),v=n(766),b=n.n(v),h=n(150),g=n.n(h),y=n(22),E=n.n(y),O=n(781),N=n.n(O),S=n(767),T=n.n(S),j=n(152),w=n(285),F=n(769),R=n(770),_=n(784),I=n(783),A=n(780);p.a.setup(f()());var k=E()(T.a)(function(e){var t=e.children;return a.a.createElement(a.a.Fragment,null,t)}),C=Object(j.createStore)(Object(j.combineReducers)({data:R.a,user:function(){return 0<arguments.length&&void 0!==arguments[0]?arguments[0]:null},ui:function(){return 0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}},async:function(){return 0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}},env:function(){return 0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}}}),Object(j.applyMiddleware)(F.a));Object(u.storiesOf)("Components",e).addDecorator(d.withKnobs).addDecorator(Object(c.withBackgrounds)([{name:"White",value:"#fff",default:!0},{name:"Gray",value:"#f2f2f2"}])).addDecorator(function(e){return a.a.createElement(w.a,{store:C},a.a.createElement(N.a,null,a.a.createElement(b.a,i()({jss:p.a},{generateClassName:g()()}),a.a.createElement(k,null,e()))))}).addDecorator(Object(o.muiTheme)(A.a)).addDecorator(Object(s.host)({align:"center middle",backdrop:"transparent"})).add("Note",function(){return a.a.createElement("div",{style:{width:600}},a.a.createElement(_.a,{id:"1234",title:Object(d.text)("title","A Title"),description:Object(d.text)("description","A description"),useTitleLink:Object(d.boolean)("useTitleLink",!0)}))}).add("NoteForm",function(){return a.a.createElement("div",{style:{width:600}},a.a.createElement(I.a,{isEdit:Object(d.boolean)("isEdit",!1)}))})}.call(this,n(196)(e))},81:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return r}),n.d(t,"e",function(){return a}),n.d(t,"d",function(){return o}),n.d(t,"c",function(){return c});var i="/",r="/new-note",a=function(e){return"/note/".concat(e||":id")},o=function(e){return"/note/edit/".concat(e||":id")},c=function(e){return"/note/delete/".concat(e||":id")}}},[[786,3,2]]]);
//# sourceMappingURL=iframe.1f92125e78ce7e3e0d88.bundle.js.map