(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{63:function(e,t,n){"use strict";n.d(t,"d",function(){return a}),n.d(t,"c",function(){return c}),n.d(t,"a",function(){return d}),n.d(t,"e",function(){return u}),n.d(t,"b",function(){return l});var i=n(278),r=n.n(i),o=n(81),a={query:"{ getNotes { id, title, description } }",mapResp:function(e){return{notes:e.getNotes}}},c={query:"query ($id: ID!) { getNote(id: $id) { id, title, description } }",mapResp:function(e){return{note:e.getNote}}},d={query:"mutation ($input: NoteInput!) { createNote(input: $input) { note { id }, invalidFields { name, message } } }",mapFields:function(e){return{input:r()(e)}},mapResp:function(e){var t,n=e.createNote;return{createdNoteId:null===n||void 0===n||null===(t=n.note)||void 0==t?void 0:t.id}},successRedirect:function(e){var t=e.createdNoteId;return Object(o.e)(t)}},u={query:"mutation ($id: ID!, $input: NoteInput!) { updateNote(id: $id, input: $input) { note { id }, invalidFields { name, message } } }",mapFields:function(e){return{input:r()(e)}},mapResp:function(e){var t,n=e.updateNote;return{updatedNoteId:null===n||void 0===n||null===(t=n.note)||void 0==t?void 0:t.id}},successRedirect:function(e){var t=e.updatedNoteId;return Object(o.e)(t)}},l={query:"mutation ($id: ID!) { deleteNote(id: $id) }",successRedirect:o.b}},769:function(e,t,n){"use strict";var i=n(528),r=n.n(i),o=n(80),a=n(232);t.a=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=1<arguments.length?arguments[1]:void 0,n=t.payload,i=t.type;return r()(i,[[[o.SHARYN_FETCH_PAGE_SUCCESS,o.SHARYN_ASYNC_SUCCESS],function(){return Object(a.addData)(e,n.data)}],[[o.SHARYN_NAVIGATION,o.SHARYN_FETCH_PAGE_REQUEST],function(){return Object(a.clearData)()}],[o.SHARYN_INVALIDATE_FIELDS,function(){return Object(a.addData)(e,{invalidFields:n})}],[o.SHARYN_CLEAR_INVALID_FIELDS,function(){return Object(a.delData)("invalidFields")(e)}]],e)}},780:function(e,t,n){"use strict";var i=n(50),r=Object(i.createMuiTheme)({palette:{primary:{main:"#3f51b5"}}});t.a=r},783:function(e,t,n){"use strict";var i=n(18),r=n.n(i),o=n(4),a=n.n(o),c=n(0),d=n.n(c),u=n(283),l=n(230),s=n.n(l),m=n(231),p=n.n(m),f=n(50),v=n(777),b=n.n(v),h=n(536),y=n.n(h),g=n(778),E=n.n(g),N=n(233),O=n.n(N),S=n(779),T=O.a.object().keys({title:O.a.string().max(20).required(),description:O.a.string().allow(null)}),j=n(80),w=n(530),F=n.n(w),_=n(63),I=n(279),A=function(e){var t,n,i=e.classes,r=e.fields,o=e.handleFieldChange,c=e.onSubmit,u=e.noteToEdit,l=e.isLoading,s=e.invalidFields,m=void 0===s?[]:s;return d.a.createElement("form",a()({method:"post"},{onSubmit:c}),m.map(function(e){return d.a.createElement("div",{key:e.message,"data-test":"new-note-error",className:i.error},e.message)}),d.a.createElement("div",{className:i.field},d.a.createElement(y.a,{label:"Title",name:"title",value:null!==(t=r.title)&&void 0!=t?t:"",onChange:o,error:!!m.find(function(e){return"title"===e.name}),autoFocus:!0,required:!0})),d.a.createElement("div",{className:i.field},d.a.createElement(y.a,{label:"Description",name:"description",value:null!==(n=r.description)&&void 0!=n?n:"",onChange:o,fullWidth:!0})),d.a.createElement(E.a,{isLoading:l},u?"Save":"Create note"))},q=s()(Object(u.b)(function(e){var t=e.data,n=e.async;return{invalidFields:t.invalidFields,previousFields:t.previousFields,isLoading:n.noteForm}}),b()(function(e){var t=e.noteToEdit,n=e.previousFields,i=void 0===n?{}:n;return F()(r()({title:null===t||void 0===t?void 0:t.title,description:null===t||void 0===t?void 0:t.description},i))}),p()({onSubmit:function(e){var t=e.noteToEdit,n=e.match,i=e.fields,o=e.dispatch,a=e.routerHistory;return function(e){e.preventDefault();var c=function(e){var t=O.a.validate(e,T);return!!t.error&&t.error.details.map(function(e){return{name:e.path.toString(),message:Object(S.swit)("".concat(e.path.toString(),"/").concat(e.type),[["title/string.max","The title must be shorter than 20 characters"]])}})}(i);o(c?Object(j.invalidateFields)(c):Object(j.clearInvalidFields)()),c||o(Object(I.graphqlThunk)(r()({},t?_.e:_.a,{routerHistory:a,urlParams:n.params,asyncKey:"noteForm",fields:i})))}}}),Object(f.withStyles)(function(e){return{field:{marginBottom:15},error:{marginBottom:20,color:e.palette.error.main}}}))(A);t.a=q;A.__docgenInfo={description:"",methods:[],displayName:"NoteFormJSX",props:{invalidFields:{defaultValue:{value:"[]",computed:!1},required:!1,flowType:{name:"Array",elements:[{name:"Object"}],raw:"Object[]"},description:""},classes:{required:!0,flowType:{name:"Object"},description:""},fields:{required:!0,flowType:{name:"Object"},description:""},handleFieldChange:{required:!0,flowType:{name:"Function"},description:""},onSubmit:{required:!0,flowType:{name:"Function"},description:""},isLoading:{required:!1,flowType:{name:"boolean"},description:""},noteToEdit:{required:!1,flowType:{name:"Object"},description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/note/cmp/NoteForm.js"]={name:"NoteFormJSX",docgenInfo:A.__docgenInfo,path:"src/note/cmp/NoteForm.js"})},784:function(e,t,n){"use strict";var i=n(533),r=n.n(i),o=n(772),a=n.n(o),c=n(4),d=n.n(c),u=n(18),l=n.n(u),s=n(0),m=n.n(s),p=n(773),f=n.n(p),v=n(534),b=n.n(v),h=n(63),y=n(81),g={path:y.b,exact:!0,loggedInOnly:!0,title:"Notes",Icon:f.a,mainQuery:h.d},E={path:y.e,exact:!0,loggedInOnly:!0,title:function(e){var t,n,i=e.data;return null!==(t=null===i||void 0===i||null===(n=i.note)||void 0==n?void 0:n.title)&&void 0!=t?t:"Note not found"},backNav:g.path,mainQuery:h.c},N=(y.a,b.a,h.a,{path:y.d,exact:!0,loggedInOnly:!0,title:function(e){var t,n,i=e.data;return(null===i||void 0===i||null===(t=i.note)||void 0==t?void 0:t.title)?"Edit ".concat(null===i||void 0===i||null===(n=i.note)||void 0==n?void 0:n.title):"Note not found"},backNav:function(e){var t,n=e.data;return E.path(null===n||void 0===n||null===(t=n.note)||void 0==t?void 0:t.id)},Icon:b.a,mainQuery:h.c,mainMutation:h.e}),O={path:y.c,exact:!0,loggedInOnly:!0,mainMutation:h.b},S=n(774),T=n(50),j=n(230),w=n.n(j),F=n(231),_=n.n(F),I=n(1351),A=n(535),q=n.n(A),C=n(529),R=n.n(C),D=n(776),k=n.n(D),L=n(775),x=n.n(L),H=n(279),Y=function(e){var t=e.classes,n=e.id,i=e.title,r=e.description,o=e.useTitleLink,a=e.showActions,c=e.onSubmit;return m.a.createElement(R.a,{className:t.note},m.a.createElement("h3",{className:t.title},o?m.a.createElement(I.a,{to:E.path(n)},i):i),r&&m.a.createElement("div",{className:t.description},r),a&&m.a.createElement("div",{className:t.buttonGroup},m.a.createElement(q.a,{component:I.a,to:N.path(n)},m.a.createElement(x.a,null)),m.a.createElement("form",d()({method:"post",action:O.path(n),className:t.deleteForm},{onSubmit:c}),m.a.createElement(q.a,{type:"submit"},m.a.createElement(k.a,null)))))},$=w()(_()({onSubmit:function(e){var t=e.id,n=e.dispatch,i=e.routerHistory;return function(){var e=a()(r.a.mark(function e(o){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:o.preventDefault(),window.confirm("Do you really want to delete this note?")&&(a={id:t},n(Object(H.graphqlThunk)(l()({},h.b,{routerHistory:i,asyncKey:"deleteNote:".concat(t),fields:a}))));case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}}),Object(T.withStyles)(function(e){var t=e.spacing;return{note:l()({},S.clearfix,{padding:3*t.unit,marginBottom:3*t.unit}),title:{margin:0},description:{marginTop:2*t.unit},buttonGroup:{float:"right"},deleteForm:{display:"inline-block"}}}))(Y);t.a=$;Y.__docgenInfo={description:"",methods:[],displayName:"NoteJSX",props:{classes:{required:!0,flowType:{name:"Object"},description:""},id:{required:!0,flowType:{name:"string"},description:""},title:{required:!0,flowType:{name:"string"},description:""},description:{required:!1,flowType:{name:"string"},description:""},useTitleLink:{required:!1,flowType:{name:"boolean"},description:""},showActions:{required:!1,flowType:{name:"boolean"},description:""},onSubmit:{required:!0,flowType:{name:"Function"},description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/note/cmp/Note.js"]={name:"NoteJSX",docgenInfo:Y.__docgenInfo,path:"src/note/cmp/Note.js"})},786:function(e,t,n){n(284),n(787),e.exports=n(788)},788:function(e,t,n){"use strict";n.r(t),function(e){var t=n(277),i=n(800);Object(t.configure)(function(){i.keys().forEach(function(e){return i(e)})},e)}.call(this,n(195)(e))},800:function(e,t,n){var i={"./index.stories.js":801};function r(e){var t=o(e);return n(t)}function o(e){var t=i[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(i)},r.resolve=o,e.exports=r,r.id=800},801:function(e,t,n){"use strict";n.r(t),function(e){var t=n(4),i=n.n(t),r=n(0),o=n.n(r),a=n(762),c=n(763),d=n(277),u=n(172),l=n(764),s=n(106),m=n.n(s),p=n(527),f=n.n(p),v=n(765),b=n.n(v),h=n(150),y=n.n(h),g=n(22),E=n.n(g),N=n(781),O=n.n(N),S=n(766),T=n.n(S),j=n(152),w=n(283),F=n(768),_=n(769),I=n(784),A=n(783),q=n(780);m.a.setup(f()());var C=E()(T.a)(function(e){var t=e.children;return o.a.createElement(o.a.Fragment,null,t)}),R=Object(j.createStore)(Object(j.combineReducers)({data:_.a,user:function(){return 0<arguments.length&&void 0!==arguments[0]?arguments[0]:null},ui:function(){return 0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}},async:function(){return 0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}},env:function(){return 0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}}}),Object(j.applyMiddleware)(F.a));Object(d.storiesOf)("Components",e).addDecorator(u.withKnobs).addDecorator(Object(c.withBackgrounds)([{name:"White",value:"#fff",default:!0},{name:"Gray",value:"#f2f2f2"}])).addDecorator(function(e){return o.a.createElement(w.a,{store:R},o.a.createElement(O.a,null,o.a.createElement(b.a,i()({jss:m.a},{generateClassName:y()()}),o.a.createElement(C,null,e()))))}).addDecorator(Object(a.muiTheme)(q.a)).addDecorator(Object(l.host)({align:"center middle",backdrop:"transparent"})).add("Note",function(){return o.a.createElement("div",{style:{width:600}},o.a.createElement(I.a,{id:"1234",title:Object(u.text)("title","A Title"),description:Object(u.text)("description","A description"),useTitleLink:Object(u.boolean)("useTitleLink",!0)}))}).add("NoteForm",function(){return o.a.createElement("div",{style:{width:600}},o.a.createElement(A.a,{isEdit:Object(u.boolean)("isEdit",!1)}))})}.call(this,n(195)(e))},81:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return r}),n.d(t,"e",function(){return o}),n.d(t,"d",function(){return a}),n.d(t,"c",function(){return c});var i="/",r="/new-note",o=function(e){return"/note/".concat(e||":id")},a=function(e){return"/note/edit/".concat(e||":id")},c=function(e){return"/note/delete/".concat(e||":id")}}},[[786,3,2]]]);
//# sourceMappingURL=iframe.632f8ae22c789d58b642.bundle.js.map