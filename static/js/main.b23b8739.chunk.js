(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],{28:function(e,t,c){},38:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(18),i=c.n(a),r=c(4),l=c(8),o=(c(28),c(0)),j=function(){return Object(o.jsxs)("header",{className:"app__header",children:[Object(o.jsx)("h1",{className:"app__title",children:Object(o.jsxs)(l.b,{to:"/",children:[Object(o.jsx)("span",{children:"Marvel"})," information portal"]})}),Object(o.jsx)("nav",{className:"app__menu",children:Object(o.jsxs)("ul",{className:"navigation",children:[Object(o.jsx)("li",{className:"navigation__item",children:Object(o.jsx)(l.c,{to:"/characters",activeClassName:"navigation__item_active",children:"Characters"})}),"/",Object(o.jsx)("li",{className:"navigation__item",children:Object(o.jsx)(l.c,{to:"/comics",activeClassName:"navigation__item_active",children:"Comics"})})]})})]})},d=(c(38),c.p+"static/media/thor-weapon.b10f8e63.png"),m=c(10),u=c.n(m),h=c(14),b=c(21),O=c(22),_=function(){function e(){Object(b.a)(this,e),this.baseUrl="https://gateway.marvel.com:443/v1/public",this.apiKey="apikey=2dbccd952360b55320217b27f828e217",this.baseOffset=210,this.getResource=function(){var e=Object(h.a)(u.a.mark((function e(t){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((c=e.sent).ok){e.next=5;break}throw Error("Could not fetch ".concat(t,", status: ").concat(c.status));case 5:return e.next=7,c.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}return Object(O.a)(e,[{key:"getAllCharacters",value:function(){var e=Object(h.a)(u.a.mark((function e(){var t,c,s=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:this.baseOffset,e.next=3,this.getResource("".concat(this.baseUrl,"/characters?limit=9&offset=").concat(t,"&").concat(this.apiKey));case 3:return c=e.sent,e.abrupt("return",c.data.results);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCharacterById",value:function(e){return this.getResource("".concat(this.baseUrl,"/characters/").concat(e,"?").concat(this.apiKey)).then((function(e){return e.data.results[0]}))}},{key:"getRandomCharacter",value:function(){var e=Object(h.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Math.floor(400*Math.random()+1011e3),e.next=3,this.getCharacterById(t);case 3:return c=e.sent,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),x=c.p+"static/media/loader.8ee2fdff.svg",f=function(){return Object(o.jsx)("img",{src:x,alt:"loader",style:{margin:"auto"}})},p=(c(40),function(e){var t=e.label,c=void 0===t?"Hydra is currently attacking, sorry":t;return Object(o.jsxs)("div",{className:"app__error-message",children:[Object(o.jsx)("span",{children:"404"}),Object(o.jsx)("p",{children:c})]})}),v=function(e){var t=e.char,c=t.thumbnail,s=t.description,n=t.name,a=t.urls;return Object(o.jsxs)("div",{className:"random-char__left",children:[Object(o.jsx)("img",{src:(null===c||void 0===c?void 0:c.path)+"."+(null===c||void 0===c?void 0:c.extension),alt:"randomly picked marvel hero",className:"random-char__img"}),Object(o.jsxs)("div",{className:"random-char__info",children:[Object(o.jsx)("p",{className:"random-char__name title title_fs-22 title_upper",children:n}),Object(o.jsx)("p",{className:"random-char__descr text",children:s||"The information about this character was not found. To read more - follow the links below"}),Object(o.jsxs)("div",{className:"random-char__buttons",children:[Object(o.jsx)("a",{href:null===a||void 0===a?void 0:a[0].url,className:"button button__main",children:Object(o.jsx)("span",{className:"inner",children:null===a||void 0===a?void 0:a[0].type})}),Object(o.jsx)("a",{href:null===a||void 0===a?void 0:a[1].url,className:"button button__secondary",children:Object(o.jsx)("span",{className:"inner",children:null===a||void 0===a?void 0:a[1].type})})]})]})]})},N=function(){var e=Object(s.useState)({}),t=Object(r.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(!1),i=Object(r.a)(a,2),l=i[0],j=i[1],m=Object(s.useState)(!1),u=Object(r.a)(m,2),h=u[0],b=u[1],O=new _;function x(){b(!1),j(!0),O.getRandomCharacter().then(n).catch((function(){return b(!0)})).finally((function(){return j(!1)}))}Object(s.useEffect)((function(){x()}),[]);var N=h?Object(o.jsx)(p,{}):null,g=l?Object(o.jsx)(f,{}):null,y=l||h?null:Object(o.jsx)(v,{char:c});return Object(o.jsxs)("div",{className:"random-char",children:[N,g,y,Object(o.jsxs)("div",{className:"random-char__right",children:[Object(o.jsx)("div",{className:"random-char__title title title_fs-24 title_white",children:"Random character for today! Do you want to get to know him better?"}),Object(o.jsx)("div",{className:"random-char__title  title title_fs-24 title_white",children:"Or choose another one"}),Object(o.jsx)("button",{className:"button button__main",onClick:x,children:Object(o.jsx)("span",{className:"inner",children:"Try it"})}),Object(o.jsx)("img",{src:d,alt:"mjolnir with a shield",className:"random-char__decoration"})]})]})},g=(c(41),c(23)),y=(c(42),function(e){var t=e.cardsAmount,c=void 0===t?9:t;return Object(o.jsx)(o.Fragment,{children:Object(g.a)(Array(c).keys()).map((function(e){return Object(o.jsxs)("li",{className:"char__item",children:[Object(o.jsx)("div",{className:"pulse skeleton__card-img"}),Object(o.jsx)("div",{className:"pulse skeleton__card-title"})]},e)}))})}),k=210,T=function(e){var t=e.selectChar,c=Object(s.useState)([]),n=Object(r.a)(c,2),a=n[0],i=n[1],l=Object(s.useState)(!1),j=Object(r.a)(l,2),d=j[0],m=j[1],u=Object(s.useState)(null),h=Object(r.a)(u,2),b=h[0],O=h[1],x=new _;function f(){return d?new Promise((function(e,t){return e()})):(m(!0),x.getAllCharacters(k).then(v).finally((function(){k+=9,m(!1)})))}function p(e){t(e),O(e)}function v(e){i((function(t){return t.concat(e)}))}Object(s.useEffect)((function(){var e=function(){var e=document.documentElement,t=e.scrollTop,c=e.scrollHeight;t+e.clientHeight>=c-5&&f()};return f().then((function(){return window.addEventListener("scroll",e)})),function(){window.removeEventListener("scroll",e)}}),[]);var N=a.map((function(e){var t,c=null===(t=e.thumbnail.path)||void 0===t?void 0:t.includes("not_available");return Object(o.jsxs)("li",{className:"char__item".concat(b===e.id?" char__item_selected":""),tabIndex:0,onClick:function(){return p(e.id)},onKeyPress:function(t){" "!==t.key&&"Enter"!==t.key||p(e.id)},children:[Object(o.jsx)("img",{src:e.thumbnail.path+"."+e.thumbnail.extension,alt:e.name,style:{objectFit:c?"unset":"cover"}}),Object(o.jsx)("span",{className:"title title_upper title_white title_fs-22",children:e.name})]},e.id)}));return Object(o.jsx)("div",{className:"char__list",children:Object(o.jsxs)("ul",{className:"char__grid",children:[N,d&&Object(o.jsx)(y,{})]})})},w=(c(43),c(44),function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(o.jsxs)("div",{className:"skeleton",children:[Object(o.jsxs)("div",{className:"pulse skeleton__header",children:[Object(o.jsx)("div",{className:"pulse skeleton__circle"}),Object(o.jsx)("div",{className:"pulse skeleton__block"})]}),Object(o.jsx)("div",{className:"pulse skeleton__block"}),Object(o.jsx)("div",{className:"pulse skeleton__mini"}),Object(o.jsx)("div",{className:"pulse skeleton__mini"}),Object(o.jsx)("div",{className:"pulse skeleton__mini"}),Object(o.jsx)("div",{className:"pulse skeleton__mini"}),Object(o.jsx)("div",{className:"pulse skeleton__mini"}),Object(o.jsx)("div",{className:"pulse skeleton__mini"}),Object(o.jsx)("div",{className:"pulse skeleton__mini"}),Object(o.jsx)("div",{className:"pulse skeleton__mini"}),Object(o.jsx)("div",{className:"pulse skeleton__mini"}),Object(o.jsx)("div",{className:"pulse skeleton__mini"})]})]})}),E=function(e){var t=e.charId,c=Object(s.useState)(null),n=Object(r.a)(c,2),a=n[0],i=n[1],l=Object(s.useState)(!0),j=Object(r.a)(l,2),d=j[0],m=j[1],u=Object(s.useState)(!1),h=Object(r.a)(u,2),b=h[0],O=h[1],x=!d||b?null:Object(o.jsx)(w,{}),f=b?Object(o.jsx)(p,{}):null,v=d||b||!a?null:Object(o.jsx)(A,{char:a}),N=new _;return Object(s.useEffect)((function(){t&&(m(!0),O(!1),N.getCharacterById(t).then(i).catch((function(){return O(!0)})).finally((function(){return m(!1)})))}),[t]),Object(o.jsxs)("div",{className:"char__info",children:[x,f,v]})},A=function(e){var t,c,s,n=e.char,a=null===(t=n.thumbnail.path)||void 0===t?void 0:t.includes("not_available");return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"char__basics",children:[Object(o.jsx)("img",{src:n.thumbnail.path+"."+n.thumbnail.extension,alt:n.name,style:{objectFit:a?"unset":"cover"}}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"title title_fs-22 title_upper",children:n.name}),Object(o.jsxs)("div",{className:"char__btns",children:[Object(o.jsx)("a",{href:"#",className:"button button__main",children:Object(o.jsx)("div",{className:"inner",children:"homepage"})}),Object(o.jsx)("a",{href:"#",className:"button button__secondary",children:Object(o.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(o.jsx)("div",{className:"char__descr",children:n.description||"Unfortunately, no description was found for this character."}),!!(null===(c=n.comics.items)||void 0===c?void 0:c.length)&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(o.jsx)("ul",{className:"char__comics-list",children:null===(s=n.comics.items)||void 0===s?void 0:s.map((function(e,t){if(!(t>9))return Object(o.jsx)("li",{className:"char__comics-item",children:e.name},t)}))})]})]})},M=(c(45),c.p+"static/media/avengers.c29e0ef0.png"),L=c.p+"static/media/avengers_logo.9b944f71.png",C=function(){return Object(o.jsxs)("div",{className:"app__banner",children:[Object(o.jsx)("img",{src:M,alt:"Avengers"}),Object(o.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(o.jsx)("br",{}),"Stay tuned!"]}),Object(o.jsx)("img",{src:L,alt:"Avengers logo"})]})},I=(c(46),c.p+"static/media/x-men.0d70f62f.png"),U=function(){var e=[{img:I,name:"ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB",price:"9.99$",id:1},{img:I,name:"ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB",price:"9.99$",id:1},{img:I,name:"ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB",price:"9.99$",id:1},{img:I,name:"ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB",price:"9.99$",id:1},{img:I,name:"ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB",price:"9.99$",id:1},{img:I,name:"ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB",price:"9.99$",id:1}].map((function(e){return Object(o.jsx)("li",{className:"comics__item",children:Object(o.jsxs)(l.b,{to:"comics/".concat(e.id),children:[Object(o.jsx)("img",{src:e.img,alt:"ultimate war",className:"comics__item-img"}),Object(o.jsx)("div",{className:"comics__item-name",children:e.name}),Object(o.jsx)("div",{className:"comics__item-price",children:e.price})]})},e.id)}));return Object(o.jsxs)("div",{className:"comics__list",children:[Object(o.jsx)("ul",{className:"comics__grid",children:e}),Object(o.jsx)("button",{className:"button button__main button__long",children:Object(o.jsx)("div",{className:"inner",children:"load more"})})]})},R=(c(47),function(){return Object(o.jsxs)("div",{className:"single-comic",children:[Object(o.jsx)("img",{src:I,alt:"x-men",className:"single-comic__img"}),Object(o.jsxs)("div",{className:"single-comic__info",children:[Object(o.jsx)("h2",{className:"single-comic__name",children:"X-Men: Days of Future Past"}),Object(o.jsx)("p",{className:"single-comic__descr",children:"Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?"}),Object(o.jsx)("p",{className:"single-comic__descr",children:"144 pages"}),Object(o.jsx)("p",{className:"single-comic__descr",children:"Language: en-us"}),Object(o.jsx)("div",{className:"single-comic__price",children:"9.99$"})]}),Object(o.jsx)(l.b,{to:"/comics",className:"single-comic__back",children:"Back to all"})]})}),S=c(2),B=c.p+"static/media/bg-hero.4d6f9671.png";var P=function(){var e=Object(s.useState)(),t=Object(r.a)(e,2),c=t[0],n=t[1];return Object(o.jsx)(l.a,{children:Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)(j,{}),Object(o.jsx)("main",{children:Object(o.jsxs)(S.d,{children:[Object(o.jsx)(S.b,{exact:!0,path:"/",children:Object(o.jsx)(S.a,{to:"/characters"})}),Object(o.jsxs)(S.b,{path:"/characters",children:[Object(o.jsx)(N,{}),Object(o.jsxs)("div",{className:"char__content",children:[Object(o.jsx)(T,{selectChar:function(e){return n(e)}}),Object(o.jsx)(E,{charId:c}),Object(o.jsx)("img",{className:"bg-decoration",src:B,alt:"vision"})]})]}),Object(o.jsx)(S.b,{path:"/comics/:id",children:Object(o.jsx)(R,{})}),Object(o.jsxs)(S.b,{path:"/comics",children:[Object(o.jsx)(C,{}),Object(o.jsx)(U,{})]})]})})]})})};c(48);i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(P,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.b23b8739.chunk.js.map