(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(9),s=n.n(r),i=(n(15),n(6)),o=n(10),l=n(2),h=n(3),u=n(5),b=n(4),d=(n(16),n(0)),j=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleIncrement=function(){e.props.onIncrement(e.props.habit)},e.handleDecrement=function(){e.props.onDecrement(e.props.habit)},e.handleDelete=function(){e.props.onDelete(e.props.habit)},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.habit,t=e.name,n=e.count;return Object(d.jsxs)("li",{className:"habit",children:[Object(d.jsx)("span",{className:"habit-name",children:t}),Object(d.jsx)("span",{className:"habit-count",children:n}),Object(d.jsx)("button",{className:"habit-button habit-increase",onClick:this.handleIncrement,children:Object(d.jsx)("i",{className:"fas fa-plus-square"})}),Object(d.jsx)("button",{className:"habit-button habit-decrease",onClick:this.handleDecrement,children:Object(d.jsx)("i",{className:"fas fa-minus-square"})}),Object(d.jsx)("button",{className:"habit-button habit-delete",onClick:this.handleDelete,children:Object(d.jsx)("i",{className:"fas fa-trash"})})]})}}]),n}(a.Component),m=Object(a.memo)((function(e){var t=c.a.createRef();return Object(d.jsxs)("form",{className:"add-form",onSubmit:function(n){n.preventDefault();var a=t.current.value;a&&e.onAdd(a),t.current.value=""},children:[Object(d.jsx)("input",{ref:t,type:"text",className:"add__input",placeholder:"Habit"}),Object(d.jsx)("button",{className:"add__btn",children:"Add"})]})})),p=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleIncrement=function(t){e.props.onIncrement(t)},e.handleDecrement=function(t){e.props.onDecrement(t)},e.handleDelete=function(t){e.props.onDelete(t)},e.handleAdd=function(t){e.props.onAdd(t)},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"habits",children:[Object(d.jsx)(m,{onAdd:this.handleAdd}),Object(d.jsx)("ul",{children:this.props.habits.map((function(t){return Object(d.jsx)(j,{habit:t,onIncrement:e.handleIncrement,onDecrement:e.handleDecrement,onDelete:e.handleDelete},t.id)}))}),Object(d.jsx)("button",{className:"reset-btn",onClick:this.props.onReset,children:"Reset All"})]})}}]),n}(a.PureComponent),f=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("header",{className:"nav-bar",children:[Object(d.jsx)("span",{className:"nav__title",children:"\ud83c\udf1c Habit Tracker \ud83c\udf1b "}),Object(d.jsx)("span",{className:"nav__count",children:this.props.totalCount})]})}}]),n}(a.PureComponent),O=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={habits:[{id:1,name:"Reading",count:0},{id:2,name:"Running",count:0},{id:3,name:"Coding",count:0}]},e.handleAdd=function(t){var n=[].concat(Object(o.a)(e.state.habits),[{id:Date.now(),name:t,count:0}]);e.setState({habits:n})},e.handleIncrement=function(t){var n=e.state.habits.map((function(e){return e.id===t.id?Object(i.a)(Object(i.a)({},t),{},{count:t.count+1}):e}));e.setState({habits:n})},e.handleDecrement=function(t){var n=e.state.habits.map((function(e){if(e.id===t.id){var n=t.count-1;return Object(i.a)(Object(i.a)({},t),{},{count:n<0?0:n})}return e}));e.setState({habits:n})},e.handleDelete=function(t){var n=e.state.habits.filter((function(e){return e.id!=t.id}));e.setState({habits:n})},e.handleReset=function(){var t=e.state.habits.map((function(e){return 0!=e?Object(i.a)(Object(i.a)({},e),{},{count:0}):e}));e.setState({habits:t})},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(f,{totalCount:this.state.habits.filter((function(e){return e.count>0})).length}),Object(d.jsx)(p,{habits:this.state.habits,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement,onDelete:this.handleDelete,onAdd:this.handleAdd,onReset:this.handleReset})]})}}]),n}(a.Component);n(18);s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.530fcd8a.chunk.js.map