(this.webpackJsonpcshops=this.webpackJsonpcshops||[]).push([[3],{25:function(e,t,a){e.exports=a.p+"static/media/cshops.70f9d59b.png"},29:function(e,t,a){"use strict";var n=a(16),c=a(33),r=a(10),l=a(0),o=a.n(l),s=(a(60),a(61),a(62),a(63),a(12)),i=a(13),u=a(30),m=a(15),d=a.n(m),p=a(44),f=a(9),h=a(93),E=(a(87),a(25)),b=a.n(E),g={color:"white",fontSize:"10px",borderRadius:100,width:"15px",height:"15px",top:0,right:"-2px",position:"absolute"},O=Object(l.memo)((function(){var e=Object(l.useContext)(N),t=e.data,a=e.dispatch,c=Object(l.useState)([]),r=Object(n.a)(c,2),u=r[0],m=r[1],p=Object(l.useState)([]),E=Object(n.a)(p,2),O=E[0],y=E[1],j=Object(s.f)();Object(l.useEffect)((function(){d.a.get("".concat(t.API_URL,"/addto/wishlist?type=favorite"),Object(f.a)()).then((function(e){!1!==e.data.status&&a({type:"FETCH_FAVORITE",payload:e.data})})),d.a.get("".concat(t.API_URL,"/addto/wishlist?type=cart"),Object(f.a)()).then((function(e){!1!==e.data.status&&a({type:"FETCH_CART",payload:e.data})}))}),[]),Object(l.useEffect)((function(){t.favorites&&m(t.favorites)}),[t.favorites]),Object(l.useEffect)((function(){t.carts&&y(t.carts)}),[t.carts]);var v=function(){localStorage.removeItem("auth"),localStorage.removeItem("token"),d.a.get("".concat(t.API_URL,"/users/user"),Object(f.a)()).then((function(e){a({type:"LOGGED_IN_USER",payload:e.data[0]}),!1===e.data.status?(a({type:"FETCH_PRODUCTS",payload:""}),localStorage.setItem("auth",!1),localStorage.removeItem("token")):localStorage.setItem("auth",!0)})).catch((function(e){})),j.push("/auth")};return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",null,o.a.createElement("div",{className:"headerGroup"},o.a.createElement(h.a,{fluid:!0},o.a.createElement("div",{className:"row d-flex align-items-center justify-content-between"},o.a.createElement("div",null,o.a.createElement(i.b,{to:"/"},o.a.createElement("img",{src:b.a,alt:b.a,height:"30"}))),o.a.createElement("div",null,o.a.createElement("ul",{className:"navlink"},o.a.createElement("li",null,o.a.createElement(i.c,{to:"/admin/myprofile"},"My Account")),t.loggedInUser?o.a.createElement("li",null,o.a.createElement("button",{className:"btn",onClick:function(e){return v()}},o.a.createElement("i",{className:"fal fa-sign-out"}))):null,o.a.createElement("li",null,o.a.createElement(i.c,{to:"/cartview",className:"btn position-relative"},o.a.createElement("i",{className:"fal fa-shopping-cart"}),o.a.createElement("span",{style:g,className:"d-flex align-items-center justify-content-center bg_orange"},O.length))),o.a.createElement("li",null,o.a.createElement(i.c,{to:"/wishlist",className:"btn position-relative"},o.a.createElement("i",{className:"fal fa-heart"}),o.a.createElement("span",{style:g,className:"d-flex align-items-center justify-content-center bg_orange"},u.length)))))))),o.a.createElement("div",{className:"progress",id:"loader",style:{display:"none"}},o.a.createElement("div",{className:"indeterminate"}))))})),y=(a(90),Object(l.memo)((function(){return o.a.createElement("footer",null,o.a.createElement("p",{className:"m-0"},"Copyright \xa9 2019. CShops. All rights reserved."))}))),j=a(46);a.d(t,"a",(function(){return N}));var v=Object(l.lazy)((function(){return a.e(7).then(a.bind(null,192))})),S=Object(l.lazy)((function(){return Promise.all([a.e(6),a.e(27)]).then(a.bind(null,193))})),I=Object(l.lazy)((function(){return a.e(20).then(a.bind(null,185))})),R=Object(l.lazy)((function(){return a.e(26).then(a.bind(null,186))})),C=Object(l.lazy)((function(){return a.e(22).then(a.bind(null,187))})),_=Object(l.lazy)((function(){return a.e(30).then(a.bind(null,188))})),T=Object(l.lazy)((function(){return a.e(19).then(a.bind(null,104))})),w={API_URL:j.a,loading:!0,error:!1},N=Object(l.createContext)(),U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_REQUEST":return Object(r.a)({},e,{loading:t.payload});case"FETCH_ERROR":return Object(r.a)({},e,{loading:!1,error:t.payload});case"FETCH_PRODUCTS":return Object(r.a)({},e,{loading:!1,products:t.payload});case"PRODUCT_DETAILS":return Object(r.a)({},e,{productDetails:t.payload});case"LOGGED_IN_USER":return Object(r.a)({},e,{loggedInUser:t.payload});case"FETCH_CART":return Object(r.a)({},e,{carts:t.payload});case"FETCH_FAVORITE":return Object(r.a)({},e,{favorites:t.payload});case"PROGRESS":return Object(r.a)({},e,{progress:t.payload});default:return w}},A=function(e){var t=e.component,a=(e.auth,Object(c.a)(e,["component","auth"]));return o.a.createElement(s.b,Object.assign({},a,{render:function(e){return"true"===localStorage.getItem("auth")?o.a.createElement(t,e):o.a.createElement(s.a,{to:"/auth"})}}))};t.b=function(e){var t=Object(l.useReducer)(U,w),a=Object(n.a)(t,2),c=a[0],r=a[1];return Object(l.useEffect)((function(){!0===c.loading?Object(f.b)(!0):!1===c.loading&&Object(f.b)(!1)}),[c.loading]),Object(l.useEffect)((function(){d.a.get("".concat(c.API_URL,"/users/user"),Object(f.a)()).then((function(e){r({type:"LOGGED_IN_USER",payload:e.data[0]}),!1===e.data.status?(r({type:"FETCH_PRODUCTS",payload:""}),localStorage.setItem("auth",!1),localStorage.removeItem("token")):localStorage.setItem("auth",!0)})).catch((function(e){}))}),[c.API_URL]),o.a.createElement("div",{className:"App"},o.a.createElement(p.a,null,o.a.createElement("title",null,"CShops"),o.a.createElement("meta",{name:"description",content:">CShops Commercial Shops Wholesalers and Retailers"})),o.a.createElement(l.Suspense,{fallback:o.a.createElement("div",{className:"loader"},"Loading...")},o.a.createElement(u.ToastProvider,null,o.a.createElement(i.a,null,o.a.createElement(N.Provider,{value:{data:c,dispatch:r}},o.a.createElement(O,null),o.a.createElement(s.b,{exact:!0,path:"/",component:v}),o.a.createElement(s.b,{path:"/product/:id",component:S}),o.a.createElement(s.b,{path:"/auth",component:I}),o.a.createElement(A,{path:"/admin",component:T}),o.a.createElement(A,{path:"/wishlist",component:R}),o.a.createElement(A,{path:"/cartview",component:C}),o.a.createElement(A,{path:"/placeorder",component:_}))),o.a.createElement(y,null))))}},46:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n="";n="https://cshopsapi.cleverapps.io"},55:function(e,t,a){e.exports=a(91)},62:function(e,t,a){},63:function(e,t,a){},87:function(e,t,a){},9:function(e,t,a){"use strict";function n(){return{headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")}}}function c(e){var t=document.getElementById("loader");t.style.display=e?"block":"none"}a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return c}))},90:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),l=a.n(r),o=a(29);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(o.b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[55,4,5]]]);
//# sourceMappingURL=main.32e8fdb3.chunk.js.map