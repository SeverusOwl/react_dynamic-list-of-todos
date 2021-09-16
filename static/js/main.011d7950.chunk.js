(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var s=n(10),r=n.n(s),c=n(12),a=n(11),o=n(4),i=n(5),l=n(7),u=n(6),d=n(2),h=n.n(d),p=(n(17),n(18),n(19),n(9)),j=n.n(p),b=n(0),f=function(e){var t=e.todos,n=e.handleChange,s=e.userId;return Object(b.jsxs)("div",{className:"TodoList",children:[Object(b.jsx)("h2",{children:"Todos:"}),Object(b.jsx)("div",{className:"TodoList__list-container",children:Object(b.jsx)("ul",{className:"TodoList__list",children:t.map((function(e){return Object(b.jsxs)("li",{className:j()("TodoList__item",{"TodoList__item--unchecked":!e.completed,"TodoList__item--checked":e.completed}),children:[Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"checkbox",readOnly:!0,checked:e.completed}),Object(b.jsx)("p",{children:e.title})]}),Object(b.jsxs)("button",{className:j()("TodoList__user-button","button",{"TodoList__user-button--selected":e.userId===s}),type:"button",onClick:function(){n(e.userId)},children:["User\xa0#",e.userId]})]},e.id)}))})})]})},m=n(1),v=n.n(m),O=n(3),x=(n(22),"https://mate.academy/students-api");var y=function(){var e=Object(O.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x,"/users/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={user:null},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=Object(O.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(this.props.userId);case 2:t=e.sent,this.setState({user:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(O.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.userId!==this.props.userId&&this.reloadUser(this.props.userId);case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"reloadUser",value:function(){var e=Object(O.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(t);case 2:n=e.sent,this.setState({user:n});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.user,t=this.props.clearUser;return e?Object(b.jsxs)("div",{className:"CurrentUser",children:[Object(b.jsx)("h2",{className:"CurrentUser__title",children:Object(b.jsxs)("span",{children:["Selected user:",e.id]})}),Object(b.jsx)("h3",{className:"CurrentUser__name",children:e.name}),Object(b.jsx)("p",{className:"CurrentUser__email",children:e.email}),Object(b.jsx)("p",{className:"CurrentUser__phone",children:e.phone}),Object(b.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return t()},children:"Clear User"})]}):Object(b.jsx)("div",{children:"No user selected"})}}]),n}(h.a.Component),w=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={query:"",showOnly:"",todos:[],selectedUserId:0},e.handleChange=function(t){e.setState({selectedUserId:t})},e.handleInput=function(t){var n=t.target,s=n.value,r=n.name;e.setState(Object(a.a)({},r,s))},e.clearUser=function(){e.setState({selectedUserId:0})},e.sortBy=function(t){var n=Object(c.a)(e.state.todos).filter((function(t){return t.title.toLocaleLowerCase().includes(e.state.query.toLocaleLowerCase())}));switch(t){case"active":return n.filter((function(e){return!e.completed}));case"completed":return n.filter((function(e){return e.completed}));default:return n}},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(x,"/todos")).then((function(e){return e.json()})).then((function(t){e.setState({todos:t})}))}},{key:"render",value:function(){var e=this.state,t=e.selectedUserId,n=e.query,s=e.showOnly;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("div",{className:"App__sidebar",children:[Object(b.jsxs)("div",{className:"row align-items-start",children:[Object(b.jsx)("input",{type:"text",name:"query",placeholder:"Search",value:n,className:"form-control col",onChange:this.handleInput}),Object(b.jsxs)("select",{name:"showOnly",className:"form-select col","aria-label":"Default select example",value:this.state.showOnly,onChange:this.handleInput,children:[Object(b.jsx)("option",{value:"",disabled:!0,children:"Show only"}),Object(b.jsx)("option",{value:"all",children:"all"}),Object(b.jsx)("option",{value:"active",children:"active"}),Object(b.jsx)("option",{value:"completed",children:"completed"})]})]}),Object(b.jsx)(f,{todos:this.sortBy(s),handleChange:this.handleChange,userId:t})]}),Object(b.jsx)("div",{className:"App__content",children:Object(b.jsx)("div",{className:"App__content-container",children:t?Object(b.jsx)(_,{userId:t,clearUser:this.clearUser}):"No user selected"})})]})}}]),n}(h.a.Component),N=w;r.a.render(Object(b.jsx)(N,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.011d7950.chunk.js.map