(this.webpackJsonpcooktails=this.webpackJsonpcooktails||[]).push([[0],{53:function(t,n,e){},78:function(t,n,e){"use strict";e.r(n);var r=e(0),c=e.n(r),a=e(9),i=e.n(a),o=(e(53),e(120)),s=e(43),h=e(114),l=e(115),u=e(116),j=e(117),d=e(111),b=function(t){for(var n=[],e=1;e<16;e++){var r=t["strIngredient".concat(e)];r&&n.push(r.split(" ").map((function(t){return function(t){return t&&t[0].toUpperCase()+t.slice(1)||""}(t)})).join(" "))}return n},m=e(7),f=Object(d.a)({root:{height:"100%"},image:{height:"30vh"}}),p=function(t){var n=t.drink,e=f();return Object(m.jsxs)(h.a,{className:e.root,children:[n.strDrinkThumb&&Object(m.jsx)(l.a,{image:n.strDrinkThumb,className:e.image}),Object(m.jsxs)(u.a,{children:[Object(m.jsx)(j.a,{variant:"h6",children:n.strDrink}),b(n).map((function(t,n){return Object(m.jsx)(j.a,{variant:"body1",children:t},n)})),Object(m.jsx)(j.a,{variant:"body1",children:n.idDrink})]})]})},O=e(17),g=e.n(O),x={"Access-Control-Allow-Origin":"*"},v="www.thecocktaildb.com/api/json/v2/".concat("9973533"),k=function(t){return"http://localhost:8999/"+t},w=e(121),C=e(119),N=e(118),y=Object(d.a)({gridContainer:{flexGrow:1},gridItem:{},searchbar:{marginTop:"2vh",marginBottom:"2vh",width:"100%"}}),D=function(){var t=y(),n=Object(N.a)("(min-width:600px)"),e=Object(r.useRef)(""),c=Object(r.useState)(null),a=Object(s.a)(c,2),i=a[0],o=a[1],h=function(){g()(k("".concat(v,"/popular.php")),{headers:x}).then((function(t){var n=t.data.drinks;o(n),console.log(n)})).catch((function(t){return console.error(t)}))};return Object(r.useEffect)((function(){i||h()}),[i]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(w.a,{className:t.searchbar,label:"Search for a drink",variant:"outlined",onChange:function(t){var n,r=t.target.value;e.current=r,""===r?h():(n=r,g()(k("".concat(v,"/search.php?s=").concat(n)),{headers:x})).then((function(t){if(e.current===r){var n=t.data.drinks;n&&o(n)}})).catch((function(t){return console.error(t)}))}}),!i&&Object(m.jsx)("p",{children:"loading"}),i&&Object(m.jsx)(C.a,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"center",spacing:2,className:t.gridContainer,children:i.map((function(e){return Object(m.jsx)(C.a,{item:!0,xs:12,sm:6,md:4,lg:3,className:t.gridItem,style:{height:n?"60vh":""},children:Object(m.jsx)(p,{drink:e})},e.idDrink)}))})]})};var I=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(o.a,{children:Object(m.jsx)(D,{})})})};i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(I,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.ecf0bb38.chunk.js.map