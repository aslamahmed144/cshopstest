(this.webpackJsonpcshops=this.webpackJsonpcshops||[]).push([[9],{106:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return u}));var a=n(107),r=n.n(a),c=n(108),o=n(54),l=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.initialize("UA-166008242-1");case 2:return e.next=4,o.a.pageview(window.location.pathname+window.location.search);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(e,t){o.a.event({category:e||"user",action:t})}},113:function(e,t,n){"use strict";function a(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",(function(){return a}))},114:function(e,t,n){var a;e.exports=(a=n(0),function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=1)}([function(e,t){e.exports=a},function(e,t,n){e.exports=n(3)},function(e,t,n){},function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.r(t);var r=n(0),c=n.n(r),o=(n(2),{_current:0,getNew:function(){return this._current++,this._current}}),l=(HTMLElement.prototype.pseudoStyle=function(e,t,n){var a=document.head||document.getElementsByTagName("head")[0],r=document.getElementById("pseudoStyles")||document.createElement("style");r.id="pseudoStyles";var c="pseudoStyle"+o.getNew();return this.className+=" "+c,r.innerHTML+="\n."+c+":"+e+"{"+t+":"+n+"}",a.appendChild(r),this},function(e){var t=e.label,n=e.color,o=e.bg,l=e.text,u=e.size,i=a(e,["label","color","bg","text","size"]),s=Object(r.useRef)(null);return Object(r.useEffect)((function(){s.current.pseudoStyle("after","background",o),s.current.pseudoStyle("before","border-color",n),s.current.style.transform="scale(".concat(u,")")}),[]),c.a.createElement("label",{className:"labelcheckbox"},c.a.createElement("input",Object.assign({type:"checkbox",className:"checkbox",ref:s},i)),c.a.createElement("span",{style:{color:l}},t))}),u=function(e){var t=e.label,n=e.color,o=e.bg,l=e.text,u=e.size,i=a(e,["label","color","bg","text","size"]),s=Object(r.useRef)(null);return Object(r.useEffect)((function(){s.current.pseudoStyle("after","background",o),s.current.pseudoStyle("before","background",n),s.current.style.transform="scale(".concat(u,")")}),[]),c.a.createElement("label",{className:"labelradio custom-control-inline"},c.a.createElement("input",Object.assign({type:"radio",className:"radio"},i,{ref:s})),c.a.createElement("span",{style:{color:l}},t))};n.d(t,"Checkbox",(function(){return l})),n.d(t,"Radio",(function(){return u})),t.default=l}]))},117:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=Object(a.memo)((function(e){for(var t=[],n=5;n>=0;n--)n<e.rat?t.push(r.a.createElement("i",{className:"fas fa-star orange",key:n})):t.push(r.a.createElement("i",{className:"fas fa-star gray",key:n}));return t}))},122:function(e,t,n){"use strict";var a=n(2),r=n(4),c=n(27),o=n.n(c),l=n(0),u=n.n(l),i=n(28);var s=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];e.apply(this,a),t.apply(this,a)}}),null)};function f(e){return!e||"#"===e.trim()}var d=u.a.forwardRef((function(e,t){var n=e.as,c=void 0===n?"a":n,o=e.disabled,l=e.onKeyDown,i=Object(r.a)(e,["as","disabled","onKeyDown"]),d=function(e){var t=i.href,n=i.onClick;(o||f(t))&&e.preventDefault(),o?e.stopPropagation():n&&n(e)};return f(i.href)&&(i.role=i.role||"button",i.href=i.href||"#"),o&&(i.tabIndex=-1,i["aria-disabled"]=!0),u.a.createElement(c,Object(a.a)({ref:t},i,{onClick:d,onKeyDown:s((function(e){" "===e.key&&(e.preventDefault(),d(e))}),l)}))}));d.displayName="SafeAnchor";var m=d,p=u.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.variant,l=e.size,s=e.active,f=e.className,d=e.block,p=e.type,b=e.as,y=Object(r.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),h=Object(i.b)(n,"btn"),g=o()(f,h,s&&"active",h+"-"+c,d&&h+"-block",l&&h+"-"+l);if(y.href)return u.a.createElement(m,Object(a.a)({},y,{as:b,ref:t,className:o()(g,y.disabled&&"disabled")}));t&&(y.ref=t),b||(y.type=p);var v=b||"button";return u.a.createElement(v,Object(a.a)({},y,{className:g}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"};t.a=p},127:function(e,t,n){},128:function(e,t,n){},129:function(e,t,n){e.exports=n.p+"static/media/banner5.6ca571f1.jpg"},130:function(e,t,n){},131:function(e,t,n){"use strict";var a=n(2),r=n(4),c=n(27),o=n.n(c),l=n(0),u=n.n(l),i=n(28),s=u.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.noGutters,l=e.as,s=void 0===l?"div":l,f=e.className,d=Object(r.a)(e,["bsPrefix","noGutters","as","className"]),m=Object(i.b)(n,"row");return u.a.createElement(s,Object(a.a)({ref:t},d,{className:o()(f,m,c&&"no-gutters")}))}));s.displayName="Row",s.defaultProps={noGutters:!1},t.a=s},132:function(e,t,n){"use strict";var a=n(2),r=n(4),c=n(27),o=n.n(c),l=n(0),u=n.n(l),i=n(98),s=n(28),f=u.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.size,l=e.className,i=e.as,f=void 0===i?"div":i,d=Object(r.a)(e,["bsPrefix","size","className","as"]);return n=Object(s.b)(n,"input-group"),u.a.createElement(f,Object(a.a)({ref:t},d,{className:o()(l,n,c&&n+"-"+c)}))})),d=Object(i.a)("input-group-append"),m=Object(i.a)("input-group-prepend"),p=Object(i.a)("input-group-text",{Component:"span"});f.displayName="InputGroup",f.Text=p,f.Radio=function(e){return u.a.createElement(p,null,u.a.createElement("input",Object(a.a)({type:"radio"},e)))},f.Checkbox=function(e){return u.a.createElement(p,null,u.a.createElement("input",Object(a.a)({type:"checkbox"},e)))},f.Append=d,f.Prepend=m,t.a=f},193:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(131),o=n(16),l=(n(127),n(109)),u=n(13),i=n(117),s=n(10),f=n(29),d=n(15),m=n.n(d),p=n(30),b=n(106),y={height:"8px",width:"8px",borderRadius:"50%",display:"inline-block",position:"absolute",right:"5px"},h=Object(a.memo)((function(e){var t=Object(a.useContext)(f.a),n=t.data,c=t.dispatch,d=Object(a.useState)([]),h=Object(o.a)(d,2),g=h[0],v=h[1],E=Object(a.useState)([]),O=Object(o.a)(E,2),j=O[0],N=O[1],C=Object(p.useToasts)().addToast,x=e.product;function w(e,t){var a={product_id:e,type:t};m.a.post("".concat(n.API_URL,"/addto"),a,Object(s.a)()).then((function(e){m.a.get("".concat(n.API_URL,"/addto/wishlist?type=favorite"),Object(s.a)()).then((function(e){!1===e.data.status?C(e.data.message,{appearance:"error",autoDismiss:!0,autoDismissTimeout:2e3}):c({type:"FETCH_FAVORITE",payload:e.data})})),m.a.get("".concat(n.API_URL,"/addto/wishlist?type=cart"),Object(s.a)()).then((function(e){!1!==e.data.status&&c({type:"FETCH_CART",payload:e.data})}))}))}return Object(a.useEffect)((function(){if(n.favorites&&n.favorites.length>0){var e=n.favorites.map((function(e){return e.product_id}));v(e)}}),[n.favorites]),Object(a.useEffect)((function(){if(n.carts&&n.carts.length>0){var e=n.carts.map((function(e){return e.product_id}));N(e)}}),[n.carts]),r.a.createElement(l.a,{xl:"2",lg:"3",md:"3",sm:"4",xs:"6",className:"product"},r.a.createElement("div",{className:"details text-center"},r.a.createElement(u.b,{to:"/product/".concat(x.id),className:"item"},n.loggedInUser&&n.loggedInUser.id===x.seller_id?r.a.createElement("span",{className:"bg_green",style:y}):null,r.a.createElement("img",{className:"img-fluid",src:x.thumbnail,onClick:function(e){return function(e){var t=n.products.find((function(t){return t.id===e}));c({type:"PRODUCT_DETAILS",payload:t}),Object(b.a)(n.loggedInUser?n.loggedInUser.fname:"user","Product id: ".concat(e))}(x.id)},alt:x.product_name}),r.a.createElement("div",{className:"pb-2 pt-2"},r.a.createElement("p",{className:"name"},x.product_name.slice(0,15)),r.a.createElement("div",{className:"price"},r.a.createElement("i",{className:"far fa-rupee-sign"}),x&&n.loggedInUser&&"supplier"===n.loggedInUser.usertype?x.venders_price:x?x.selling_price:"null"),r.a.createElement("p",{className:"name"},x.minorder||"NA"," Pieces (Min. Order) "),r.a.createElement(i.a,{rat:3}))),r.a.createElement("div",{className:"topstrip justify-content-between"},r.a.createElement("div",{className:"stock"},"In Stock ",x.stock," pcs"),r.a.createElement("div",{className:"add"},j.includes(x.id)?null:r.a.createElement("i",{className:"fal fa-shopping-cart orange",onClick:function(e){return w(x.id,"cart")}}),g.includes(x.id)?null:r.a.createElement("i",{className:"fal fa-heart orange",onClick:function(e){return w(x.id,"favorite")}})))))})),g=n(113),v=(n(128),n(114)),E=(n(55),Object(a.memo)((function(){var e=Object(a.useContext)(f.a),t=e.data,n=e.dispatch,c=Object(a.useState)([]),l=Object(o.a)(c,2),u=l[0],i=l[1],d=function(e){var n=e.target.checked,a=e.target.name,r=e.target.value;Object(s.b)(!0),m.a.get("".concat(t.API_URL,"/product/filters?field=").concat(a,"&search=").concat(r)).then((function(e){var t=[];e.data.forEach((function(e){u.some((function(t){return t.id===e.id}))||t.push(e)})),i(n?[].concat(Object(g.a)(u),t):u.filter((function(e){return e[a]!==r})))}))};return Object(a.useEffect)((function(){u.length>0&&n({type:"FETCH_PRODUCTS",payload:u}),Object(s.b)(!1)}),[u]),r.a.createElement("div",{className:"sidenav"},r.a.createElement("div",{className:"d-flex justify-content-end closeMenu",onClick:function(e){document.querySelector(".sidenavecol").classList.toggle("open")}},r.a.createElement("i",{className:"fal fa-times orange"})),u.length>0?r.a.createElement("button",{className:"btn btn-sm btn-block mb-2 btn_orange",onClick:function(e){return document.querySelectorAll('input[type="checkbox"]').forEach((function(e){return e.checked=!1})),void m.a.get("".concat(t.API_URL,"/product/products")).then((function(e){n({type:"FETCH_PRODUCTS",payload:e.data}),i([])}))}},"Clear Filters"):null,t&&t.loggedInUser&&"supplier"===t.loggedInUser.usertype?r.a.createElement("div",{className:"border-bottom mb-2"},r.a.createElement("h6",null,"Sellers"),r.a.createElement(v.Checkbox,{label:"Bombay Hardware",name:"sellers",value:"Bombay Hardware",onChange:function(e){return d(e)}}),r.a.createElement(v.Checkbox,{label:"Delhi Hardware",name:"sellers",value:"Delhi Hardware",onChange:function(e){return d(e)}}),r.a.createElement(v.Checkbox,{label:"Pune Hardware",name:"sellers",value:"Pune Hardware",onChange:function(e){return d(e)}}),r.a.createElement(v.Checkbox,{label:"Panvel Hardware",name:"sellers",value:"Panvel Hardware",onChange:function(e){return d(e)}})):null,r.a.createElement("div",{className:"border-bottom mb-2"},r.a.createElement("h6",null,"Usage/Application"),r.a.createElement(v.Checkbox,{name:"categories",label:"Industrial",value:"industrial",onChange:function(e){return d(e)}}),r.a.createElement(v.Checkbox,{name:"categories",label:"Construction",value:"construction",onChange:function(e){return d(e)}}),r.a.createElement(v.Checkbox,{name:"categories",label:"Agriculture",value:"agriculture",onChange:function(e){return d(e)}}),r.a.createElement(v.Checkbox,{name:"categories",label:"Housewares",value:"housewares",onChange:function(e){return d(e)}})),r.a.createElement("div",{className:"border-bottom mb-2"},r.a.createElement("h6",null,"Type"),r.a.createElement(v.Checkbox,{name:"type",label:"Electrical",value:"Electrical",onChange:function(e){return d(e)}}),r.a.createElement(v.Checkbox,{name:"type",label:"Hand Tools",value:"Hand Tools",onChange:function(e){return d(e)}}),r.a.createElement(v.Checkbox,{name:"type",label:"Furniture",value:"Furniture",onChange:function(e){return d(e)}}),r.a.createElement(v.Checkbox,{name:"type",label:"Automobile",value:"Automobile",onChange:function(e){return d(e)}})))}))),O=n(129),j=n.n(O),N=Object(a.memo)((function(){return r.a.createElement("div",{className:"banner"},r.a.createElement("img",{className:"img-fluid",src:j.a,alt:j.a}))}));function C(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function x(e){return(x="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){return!t||"object"!==x(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var S=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=w(this,k(t).call(this,e))).state={hasError:!1},n}var n,a,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,e),n=t,c=[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}],(a=[{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Something went wrong."):this.props.children}}])&&C(n.prototype,a),c&&C(n,c),t}(r.a.Component),P=(n(130),n(132)),T=n(110),R=n(122),A=Object(a.memo)((function(){var e=Object(a.useState)(),t=Object(o.a)(e,2),n=t[0],u=t[1],i=Object(a.useContext)(f.a),d=i.data,p=i.dispatch,b=function(e){Object(s.b)(!0),m.a.get("".concat(d.API_URL,"/product/search?field=product_name&search=").concat(n)).then((function(e){p({type:"FETCH_PRODUCTS",payload:e.data}),console.log(e.data),Object(s.b)(!1)}))};return r.a.createElement("div",{className:"filterbox"},r.a.createElement(c.a,{className:"justify-content-md-center"},r.a.createElement(l.a,{lg:"6"},r.a.createElement(P.a,{className:"mb-0",size:"sm"},r.a.createElement("div",{className:"filterOpen"},r.a.createElement("button",{className:"btn btn-sm"},r.a.createElement("i",{className:"far fa-bars orange",onClick:function(e){document.querySelector(".sidenavecol").classList.toggle("open")}}))),r.a.createElement(T.a,{type:"search",placeholder:"Search Products","aria-label":"Search Products","aria-describedby":"basic-addon2",onChange:function(e){return function(e){u(e.target.value)}(e)},onKeyDown:function(e){return function(e){"Enter"===e.key&&b()}(e)}}),r.a.createElement(P.a.Append,null,r.a.createElement(R.a,{variant:"outline-secondary",onClick:function(e){return b()}},r.a.createElement("i",{className:"far fa-search"})))))))}));t.default=Object(a.memo)((function(){var e=Object(a.useContext)(f.a),t=e.data,n=e.dispatch;return Object(a.useEffect)((function(){n({type:"FETCH_REQUEST",payload:!0}),m.a.get("".concat(t.API_URL,"/product")).then((function(e,t){t?n({type:"FETCH_ERROR",payload:t}):e.data&&n({type:"FETCH_PRODUCTS",payload:e.data})})),Object(b.b)()}),[]),r.a.createElement("main",{className:"home"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement(c.a,null,r.a.createElement("div",{className:"col-lg-2 sidenavecol"},r.a.createElement(E,null)),r.a.createElement("div",{className:"col-lg-10"},r.a.createElement(N,null),r.a.createElement(A,null),r.a.createElement("div",{className:"row no-gutters"},r.a.createElement(S,null,t.products?t.products.map((function(e){return r.a.createElement(h,{product:e,key:e.product_name+e.id})})):null))))))}))}}]);
//# sourceMappingURL=9.a205d918.chunk.js.map