(this.webpackJsonpcshops=this.webpackJsonpcshops||[]).push([[25],{103:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return o}));var n=a(33),c=a(0),l=a.n(c),r=function(e){var t=e.col,a=e.formgroup,c=Object(n.a)(e,["col","formgroup"]);return l.a.createElement("div",{className:"form-group ".concat(a," ").concat(t?"col-lg-"+t+" col-12":"")},l.a.createElement("input",Object.assign({},c,{className:"form-control"})))},o=function(e){var t=e.col,a=Object(n.a)(e,["col"]);return l.a.createElement("div",{className:"form-group col-lg-".concat(t," col-12")},l.a.createElement("textarea",Object.assign({},a,{className:"form-control"})))}},195:function(e,t,a){"use strict";a.r(t);var n=a(121),c=a.n(n),l=a(31),r=a(122),o=a(111),s=a(10),u=a(16),i=a(0),m=a.n(i),d=a(118),p=a(191),f=a(131),b=a(106),E=a(119),g=a(190),h=a(130),v=a(105),O=a(15),j=a.n(O),y=a(192),C=a(29);var N=function(e){var t=Object(i.useContext)(C.a).data,a=Object(i.useState)(!1),n=Object(u.a)(a,2),c=n[0],l=n[1],r=Object(i.useState)(!1),s=Object(u.a)(r,2),d=s[0],p=s[1],f=Object(i.useState)([]),b=Object(u.a)(f,2),h=b[0],v=b[1];return Object(i.useEffect)((function(){j.a.get("".concat(t.API_URL,"/upload")).then((function(e){p(e.data)}))}),[]),m.a.createElement(m.a.Fragment,null,m.a.createElement(E.a,{className:"bg_green mt-2",onClick:function(){return l(!0)}},"Select to Gallery"),m.a.createElement(y.a,{backdrop:"static",scrollable:!0,show:c,onHide:function(){return l(!1)},size:"xl","aria-labelledby":"example-custom-modal-styling-title"},m.a.createElement(y.a.Header,{closeButton:!0},m.a.createElement(y.a.Title,{id:"example-custom-modal-styling-title"},"Image Gallery")),m.a.createElement(y.a.Body,null,m.a.createElement("div",{className:"row no-gutters"},d?d.map((function(e){var t=h.some((function(t){return t.id===e.public_id}));return m.a.createElement("div",{className:"col-lg-1 col-4",key:e.public_id,onClick:function(t){return a=e.public_id,void d.find((function(e){new Promise((function(t,n){e.public_id===a&&t({url:e.url,id:e.public_id})})).then((function(e){v([].concat(Object(o.a)(h),[e]))}))}));var a}},m.a.createElement(g.a,{src:e.url,style:{height:"120px",width:"120px"},className:t?"border border-success":null,thumbnail:!0}))})):null)),m.a.createElement(y.a.Footer,null,m.a.createElement(E.a,{variant:"primary",onClick:function(){e.selected(h),l(!1)}},"Select & Close"))))},_=a(103),P=a(30),w=a(178),x=a.n(w),k=(a(180),a(112)),R=a(104),S=a(9);t.default=Object(i.memo)((function(e){var t=Object(i.useContext)(R.AdminContext),a=t.data,n=t.dispatch,O=Object(i.useState)([]),y=Object(u.a)(O,2),C=y[0],w=y[1],T=Object(i.useState)(""),U=Object(u.a)(T,2),A=U[0],D=U[1],L=Object(i.useRef)(),V=Object(i.useRef)(),F=Object(P.useToasts)().addToast,H=Object(i.useState)([]),I=Object(u.a)(H,2),J=I[0],z=I[1],M=Object(i.useState)(0),B=Object(u.a)(M,2),G=B[0],W=(B[1],Object(i.useState)(!1)),q=Object(u.a)(W,2),K=q[0],Q=q[1],X=Object(i.useRef)(null),Y=Object(i.useState)(e.data),Z=Object(u.a)(Y,2),$=Z[0],ee=Z[1],te={appearance:"error",autoDismiss:!0,autoDismissTimeout:2e3};Object(i.useEffect)((function(){var e=JSON.stringify({display:G,photosurl:J});$&&J.length>0&&ee(Object(s.a)({},$,{photos:e,thumbnail:J[0].url}))}),[J,G]),Object(i.useEffect)((function(){var e=JSON.stringify(C);C.length>0&&ee(Object(s.a)({},$,{extra_fields:e}))}),[C]);function ae(){return $.categories?$.type?$.product_name?$.selling_price&&$.selling_price?$.venders_price?$.stock?$.warranty?$.details&&$.terms_conditions?!($.photos.length<=2)||(F("Please select photos",te),!1):(F("Please enter details",te),!1):(F("Please enter warranty",te),!1):(F("Please enter stock",te),!1):(F("Please enter venders price",te),!1):(F("Please enter selling price",te),!1):(F("Please enter product name",te),!1):(F("Please select type",te),!1):(F("Please select catagory",te),!1)}function ne(){return(ne=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!1===t||!X){e.next=6;break}return Q(!0),e.next=4,X.current.getCroppedCanvas().toDataURL("image/jpeg");case 4:ce(e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ce(e){j.a.post("".concat(a.API_URL,"/upload"),{image:e}).then((function(e){!1===e.data.status?F(e.data.message,te):z([].concat(Object(o.a)(J),[e.data])),Q(!1)}))}Object(i.useEffect)((function(){if(e.data&&e.data.photos){var t=JSON.parse(e.data.photos);z(t.photosurl)}}),[e.data.photos]),Object(i.useEffect)((function(){if(e.data&&e.data.extra_fields){var t=JSON.parse(e.data.extra_fields);w(t)}}),[e.data.extra_fields]);var le=function(){j.a.get("".concat(a.API_URL,"/product/admin/products"),Object(S.a)()).then((function(e){n({type:"FETCH_PRODUCTS",payload:e.data})}))},re=function(e){var t=e.target.name,a=e.target.value;ee(Object(s.a)({},$,Object(l.a)({},t,a)))};return m.a.createElement("div",{className:"p-3 mb-3 border-bottom"},m.a.createElement(d.a,null,m.a.createElement(d.a.Row,null,m.a.createElement("div",{className:"form-group col-lg-3 col-12"},m.a.createElement(d.a.Control,{as:"select",name:"categories",onChange:function(e){return re(e)}},m.a.createElement("option",null,"Choose Categories"),m.a.createElement("option",{value:"industrial"},"Industrial"),m.a.createElement("option",{value:"construction"},"Construction"),m.a.createElement("option",{value:"agriculture"},"Agriculture"),m.a.createElement("option",{value:"housewares"},"Housewares"))),m.a.createElement("div",{className:"form-group col-lg-3 col-12"},m.a.createElement(d.a.Control,{as:"select",name:"type",onChange:function(e){return re(e)}},m.a.createElement("option",null,"Choose Type"),m.a.createElement("option",{value:"Hand Tools"},"Hand Tools"),m.a.createElement("option",{value:"Automobile"},"Automobile"),m.a.createElement("option",{value:"Furniture"},"Furniture"),m.a.createElement("option",{value:"electrical"},"Electrical"))),m.a.createElement(_.a,{col:3,name:"product_name",placeholder:"Product Name",type:"text",defaultValue:$.product_name,onChange:function(e){return re(e)}}),m.a.createElement(_.a,{col:3,name:"purchase_price",placeholder:"Purchase Price",type:"number",defaultValue:$.purchase_price,onChange:function(e){return re(e)}}),m.a.createElement(_.a,{col:3,name:"selling_price",placeholder:"Selling Price",type:"number",defaultValue:$.selling_price,onChange:function(e){return re(e)}}),m.a.createElement(_.a,{col:3,name:"venders_price",placeholder:"Venders Price",type:"number",defaultValue:$.venders_price,onChange:function(e){return re(e)}}),m.a.createElement(_.a,{col:2,name:"stock",placeholder:"Stock",type:"number",defaultValue:$.stock,onChange:function(e){return re(e)}}),m.a.createElement(_.a,{col:2,name:"minorder",placeholder:"Min Order",type:"number",defaultValue:$.minorder,onChange:function(e){return re(e)}}),m.a.createElement(_.a,{col:2,name:"warranty",placeholder:"Warranty in Months",type:"number",defaultValue:$.warranty,onChange:function(e){return re(e)}})),m.a.createElement(d.a.Row,null,m.a.createElement("div",{className:"ml-1"},C?C.map((function(e,t){return m.a.createElement(p.a,{className:"bg_yellow white ml-1",key:e.name+t}," ","".concat(e.name," : ").concat(e.value))})):null),m.a.createElement("div",{className:"col-12 col-lg-4"},m.a.createElement(f.a,{className:"mb-3",size:"sm"},m.a.createElement(b.a,{placeholder:"Label Name",ref:L}),m.a.createElement(b.a,{placeholder:"Value",ref:V}),m.a.createElement(f.a.Prepend,null,m.a.createElement(E.a,{size:"sm",variant:"",className:"btn_green",type:"button",onClick:function(e){return function(){var e=L.current.value,t=V.current.value;e&&t&&(w([].concat(Object(o.a)(C),[{name:e,value:t}])),L.current.value="",V.current.value="")}()}},m.a.createElement("i",{className:"fal fa-plus"})," Add More"))))),m.a.createElement(d.a.Row,null,m.a.createElement(_.b,{col:6,name:"details",placeholder:"Details",value:$.details,onChange:function(e){return re(e)}}),m.a.createElement(_.b,{col:6,name:"terms_conditions",placeholder:"Terms and Conditions",value:$.terms_conditions,onChange:function(e){return re(e)}})),m.a.createElement(d.a.Row,null,m.a.createElement("div",{className:"col-lg-6"},m.a.createElement("div",{className:"custom-file"},m.a.createElement("input",{type:"file",className:"custom-file-input",onChange:function(e){return function(e){var t=window.URL.createObjectURL(e.target.files[0]);D(t)}(e)}}),m.a.createElement("label",{className:"custom-file-label",htmlFor:"customFile"},"Choose file")),A?m.a.createElement("div",{className:"mt-2 mb-2"},m.a.createElement(x.a,{ref:X,src:A,style:{maxHeight:400,maxWidth:600,width:"100%"},aspectRatio:1,guides:!1})):null,A?m.a.createElement("div",null,m.a.createElement("button",{type:"button",className:"btn btn_orange",onClick:function(e){return D(!1),void j.a.get("".concat(a.API_URL,"/product/admin/products"),Object(S.a)()).then((function(e){n({type:"FETCH_PRODUCTS",payload:e.data})}))}},"Cancel"),m.a.createElement("button",{type:"button",className:"btn btn_blue ml-2",onClick:function(e){return function(e){return ne.apply(this,arguments)}(e)},disabled:!!K},K?m.a.createElement("span",null,m.a.createElement("span",{className:"spinner-grow spinner-grow-sm"}),"Uploading.."):m.a.createElement("span",null,"Crop & Upload"))):null),m.a.createElement("div",{className:"col-lg-6"},$.thumbnail?m.a.createElement("div",{className:"mb-2 d-flex flex-column"},m.a.createElement(g.a,{src:$.thumbnail,style:{border:"2px solid green"},className:"img-fluid",width:"100"}),m.a.createElement("small",null,"Product Thumbnail")):null,m.a.createElement(h.a,null,J&&J.length>0?J.map((function(e,t){return m.a.createElement(v.a,{xs:6,md:2,key:e.id},m.a.createElement("div",{style:{border:"2px solid #dee2e6"}},m.a.createElement("div",{className:"p-1 d-flex justify-content-between"},m.a.createElement(k.Radio,{name:"thumb",size:.8,onClick:function(e){return function(e){ee(Object(s.a)({},$,{thumbnail:J[e].url}))}(t)}}),m.a.createElement("i",{className:"fal fa-times",onClick:function(e){return function(e){var t=J;t.splice(e,1),z(Object(o.a)(t))}(t)}})),m.a.createElement(g.a,{src:"".concat(e.url),className:"img-fluid"})))})):null)),m.a.createElement("div",{className:"col"},m.a.createElement(N,{selected:function(e){z([].concat(Object(o.a)(J),Object(o.a)(e)))}}))),m.a.createElement("div",{className:"d-flex justify-content-end"},e.create?m.a.createElement("button",{className:"btn btn-sm btn_blue",onClick:function(e){ae()&&j.a.post("".concat(a.API_URL,"/product/add"),$,Object(S.a)()).then((function(e){!1===e.data.status?F(e.data.message,te):(le(),F("Product added successfully",{appearance:"success",autoDismiss:!0,autoDismissTimeout:2e3}))}))},type:"button"},"Save Product"):m.a.createElement("button",{className:"btn btn-sm btn_blue",onClick:function(e){ae()&&j.a.put("".concat(a.API_URL,"/product"),$,Object(S.a)()).then((function(e){console.log(e.data),!1===e.data.status?F(e.data.message,te):(le(),F("Product 'updated' successfully",{appearance:"success",autoDismiss:!0,autoDismissTimeout:2e3}))}))},type:"button"},"Update Product"))))}))}}]);
//# sourceMappingURL=25.89d12262.chunk.js.map