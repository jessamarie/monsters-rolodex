(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var s=n(1),c=n.n(s),r=n(3),o=n.n(r),i=(n(12),n(4)),a=n(5),u=n(7),j=n(6),d=(n(13),n(0)),h=function(t){return Object(d.jsxs)("div",{className:"card-container",children:[Object(d.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(t.monster.id,"?set=set2&size=180x180")}),Object(d.jsx)("h2",{children:t.monster.name}),Object(d.jsx)("p",{children:t.monster.email})]})},m=(n(15),function(t){return Object(d.jsx)("div",{className:"card-list",children:t.monsters.map((function(t){return Object(d.jsx)(h,{monster:t},t.id)}))})}),l=(n(16),function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){var t;return Object(i.a)(this,n),(t=e.call(this)).state={monsters:[]},t}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(t){return t.json()})).then((function(e){return t.setState({monsters:e})}))}},{key:"render",value:function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(m,{monsters:this.state.monsters})})}}]),n}(s.Component)),b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,s=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),s(t),c(t),r(t),o(t)}))};o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(l,{})}),document.getElementById("root")),b()}],[[17,1,2]]]);
//# sourceMappingURL=main.35237c84.chunk.js.map