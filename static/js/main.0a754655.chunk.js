(this["webpackJsonpredux-practice"]=this["webpackJsonpredux-practice"]||[]).push([[0],{22:function(t,e,n){},23:function(t,e,n){},24:function(t,e,n){},26:function(t,e,n){},32:function(t,e,n){},34:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),i=n(5),r=n.n(i),s=(n(22),n(12)),o=n(13),u=n(16),l=n(15),d=(n(23),n(2)),j=n(17),_=(n(24),n(1)),b=function(t){var e=t.children,n=Object(j.a)(t,["children"]);return Object(_.jsx)("div",{className:"custom-button",children:Object(_.jsx)("button",Object(d.a)(Object(d.a)({},n),{},{children:e}))})},f=(n(26),function(t){var e=Object.assign({},t);return Object(_.jsx)("div",{className:"input-field",children:Object(_.jsx)("input",Object(d.a)({},e))})}),O=n(4),p=(n(32),Object(O.b)((function(t){return{list_of_tasks:t.task_list.list_of_tasks}}),(function(t){return{removeFromList:function(e){return t(function(t){return{type:"REMOVE_ITEM_FROM_TASKS",payload:t}}(e))}}}))((function(t){var e=t.list_of_tasks,n=t.removeFromList;return Object(_.jsx)("div",{className:"task-list",children:Object(_.jsx)("ol",{children:e.map((function(t,e){return Object(_.jsx)("li",{children:Object(_.jsxs)("span",{className:"task-entry",children:[t,Object(_.jsx)(b,{onClick:function(){return n(e)},children:"\u274c"})]})},e)}))})})}))),h=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).onInputChange=function(e){t.props.setNewItem(e.target.value)},t.AddItemToList=function(){var e=t.props,n=e.new_item,c=e.addToList,a=e.setNewItem;""!==n&&(a(""),c(n))},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.setTaskList(["buy groceries","water the plants","go on a vacation"])}},{key:"render",value:function(){var t=this.props.new_item;return Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)("h1",{children:"To Do list"}),Object(_.jsxs)("div",{className:"item-adders",children:[Object(_.jsx)(f,{placeholder:"Enter Item here...",value:t,type:"text",onChange:this.onInputChange}),Object(_.jsx)(b,{onClick:this.AddItemToList,children:"Add Item"})]}),Object(_.jsx)(p,{})]})}}]),n}(a.a.Component),v=Object(O.b)((function(t){return{new_item:t.new_item_value.new_item}}),(function(t){return{setTaskList:function(e){return t({type:"SET_LIST_OF_TASKS",payload:e})},setNewItem:function(e){return t(function(t){return{type:"SET_NEW_ITEM",payload:t}}(e))},addToList:function(e){return t(function(t){return{type:"ADD_ITEM_TO_TASKS",payload:t}}(e))}}}))(h),m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),i(t),r(t)}))},T=n(3),y=(n(33),n(10)),k=function(t,e){return[].concat(Object(y.a)(t),[e])},x=function(t,e){var n=Object(y.a)(t);return n.splice(e,1),n},I={list_of_tasks:[]},S={new_item:""},g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_NEW_ITEM":return Object(d.a)(Object(d.a)({},t),{},{new_item:e.payload});default:return t}},E=Object(T.c)({task_list:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_LIST_OF_TASKS":return Object(d.a)(Object(d.a)({},t),{},{list_of_tasks:e.payload});case"ADD_ITEM_TO_TASKS":return Object(d.a)(Object(d.a)({},t),{},{list_of_tasks:k(t.list_of_tasks,e.payload)});case"REMOVE_ITEM_FROM_TASKS":return Object(d.a)(Object(d.a)({},t),{},{list_of_tasks:x(t.list_of_tasks,e.payload)});default:return t}},new_item_value:g});var w=Object(T.d)(E,T.a.apply(void 0,[]));r.a.render(Object(_.jsx)(O.a,{store:w,children:Object(_.jsx)(v,{})}),document.getElementById("root")),m()}},[[34,1,2]]]);
//# sourceMappingURL=main.0a754655.chunk.js.map