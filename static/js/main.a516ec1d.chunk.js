(this["webpackJsonpreact-movie-app"]=this["webpackJsonpreact-movie-app"]||[]).push([[0],{27:function(e,n,t){e.exports=t.p+"static/media/moviedbicon.0f4a7f74.svg"},29:function(e,n,t){e.exports=t(43)},34:function(e,n,t){},35:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(22),c=t.n(i),o=(t(34),t(35),t(12)),l=t.n(o),u=t(16),d=t(3),m=t(20),s=t(7),p=t(1),f=t(2),g=t(9);function b(){var e=Object(p.a)(["\n  display: block;\n  width: 100%;\n  height: 500px;\n  background-color: white;\n  border-radius: 25px;\n"]);return b=function(){return e},e}function v(){var e=Object(p.a)(["\n  margin: 0;\n"]);return v=function(){return e},e}function h(){var e=Object(p.a)(["\n  display: block;\n  width: 100%;\n  img {\n    width: 100%;\n    border-radius: 25px;\n  }\n"]);return h=function(){return e},e}function E(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 0.5em;\n  div:first-child {\n    display: flex;\n    flex-direction: row;\n    ","\n    justify-content: space-between;\n    p { margin: 0;}\n  }\n  p {\n      margin: 5px 0;\n    }\n"]);return E=function(){return e},e}function x(){var e=Object(p.a)(["\n  display: block;\n  width: 100%;\n  a {\n    text-decoration: none;\n    color: white;\n  }\n"]);return x=function(){return e},e}var j=f.a.div(x()),w=f.a.div(E(),""),y=f.a.div(h()),O=f.a.h3(v()),k=f.a.div(b()),_=function(e){var n=e.movie,t=e.genres,a=e.small;return r.a.createElement(j,null,r.a.createElement(g.b,{to:"/movie/".concat(n.id)},n.poster_path?r.a.createElement(y,null,r.a.createElement("img",{src:"http://image.tmdb.org/t/p/w500".concat(n.poster_path),alt:"poster"})):r.a.createElement(k,null),r.a.createElement(w,null,r.a.createElement("div",null,r.a.createElement(O,null,n.original_title,"!"),!a&&r.a.createElement("p",null,n.release_date.split("-")[0])),r.a.createElement("p",null,function(e,n){return n.slice(0,2).map((function(n){for(var t in e)if(n===e[t].id)return e[t].name})).join(" | ")}(t,n.genre_ids)),r.a.createElement("p",null,r.a.createElement("span",{role:"img","aria-label":"star"},"\u2b50 "),n.vote_average," (",n.vote_count,")"))))};function C(){var e=Object(p.a)(["\n  display: block;\n  background-color: #1F1B81;\n  padding: 2rem;\n  color: white;\n"]);return C=function(){return e},e}var S=f.a.main(C()),F=function(e){var n=e.children;return r.a.createElement(S,null,n)},L=t(27),D=t.n(L);function T(){var e=Object(p.a)(["\n  margin-top: 20px;\n  input {\n    padding: 1rem 2rem;\n    border-radius: 25px;\n    border: none;\n    background-color: #ffe694;\n    color: black;\n  }\n"]);return T=function(){return e},e}function A(){var e=Object(p.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 250px;\n  height: 70px;\n"]);return A=function(){return e},e}var H=f.a.div(A()),P=f.a.div(T()),I=function(e){var n=e.handleQueryChange,t=e.handleSearchValueChange,i=Object(a.useState)(""),c=Object(d.a)(i,2),o=c[0],l=c[1];return Object(a.useEffect)((function(){""!==o?(n("search/movie"),t("query=".concat(o))):(n("movie/popular"),t(""))}),[o]),r.a.createElement(H,null,r.a.createElement(P,null,r.a.createElement("input",{type:"text",placeholder:"Search..",onChange:function(e){l(e.currentTarget.value)},value:o})))};function U(){var e=Object(p.a)(["\n  display: block;\n  width: 100%;\n  height: 500px;\n  background-color: white;\n  border-radius: 25px;\n"]);return U=function(){return e},e}function q(){var e=Object(p.a)(["\n  display: block;\n  flex: 3;\n  margin-left: 1rem;\n  padding: 0 1rem;\n"]);return q=function(){return e},e}function Q(){var e=Object(p.a)(["\n  display: flex;\n  padding: 2rem;\n  div:first-child {\n    flex: 1;\n  }\n  h1, p {\n    margin: 5px 0;\n  }\n  p:last-child {\n    margin-top: 10px;\n  }\n  @media (max-width: 500px) {\n    flex-direction: column;\n    div:first-child {\n      flex: 1;\n      padding: 1rem;\n    }\n  }\n  \n"]);return Q=function(){return e},e}function R(){var e=Object(p.a)(["\n  color: white;\n  \n  display: flex;\n  flex-direction: column;\n\n  img {\n    width: 100%;\n    border-radius: 25px;\n    border: 7px solid white;\n    box-sizing: border-box;\n  }\n  @media (max-width: 960px ) {\n    img {\n      border: none;\n      border-radius: 0;\n    }\n  }\n\n  \n"]);return R=function(){return e},e}function B(){var e=Object(p.a)(["\n  position: relative;\n  top: -300px;\n  display: block;\n  width: 960px;\n  margin: 0 auto;\n  border-radius: 25px;\n  a {\n    text-decoration: none;\n  }\n  @media (max-width: 960px ) {\n    width: 100%;\n    top: -50px;\n  }\n"]);return B=function(){return e},e}function z(){var e=Object(p.a)(["\n  display: block;\n  width: 200px;\n"]);return z=function(){return e},e}function V(){var e=Object(p.a)(["\n  display: flex;\n  height: 400px;\n  background-color: #F7D052;\n  padding: 2rem;\n  justify-content: space-between;\n  @media (max-width: 960px ) {\n    height: 200px;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n  }\n"]);return V=function(){return e},e}function M(){var e=Object(p.a)(["\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 100vh;\n  background-color: #1F1B81;\n  @media (max-width: 960px ) {\n    height: auto;\n    position: relative;\n  }\n  @media (max-width: 500px) {\n    height: 800px;\n  }\n"]);return M=function(){return e},e}var G=f.a.div(M()),J=f.a.div(V()),N=f.a.div(z()),W=f.a.div(B()),$=f.a.div(R()),K=f.a.div(Q()),X=f.a.p(q()),Y=f.a.div(U()),Z=function(e){var n=e.movie,t=e.isLoading,a=e.genres,i=e.home,c=e.setQuery,o=e.setSearchValue;return r.a.createElement(G,null,r.a.createElement(J,null,r.a.createElement(g.b,{to:"/"},r.a.createElement(N,null,r.a.createElement("img",{src:D.a,alt:"Moviedb logo"}))),i&&r.a.createElement(I,{handleQueryChange:c,handleSearchValueChange:o})),!t&&r.a.createElement(W,null,n?r.a.createElement(g.b,{to:"/movie/".concat(n.id)},r.a.createElement($,null,n.backdrop_path?r.a.createElement("img",{src:"http://image.tmdb.org/t/p/w1280".concat(n.backdrop_path),alt:"movie poster"}):r.a.createElement(Y,null),r.a.createElement(K,null,r.a.createElement("div",null,r.a.createElement("h1",null,n.original_title),a&&r.a.createElement("p",null,function(e,n){return n.slice(0,3).map((function(n){for(var t in e)if(n===e[t].id)return e[t].name})).join(" / ")}(a,n.genre_ids)),r.a.createElement("p",null,r.a.createElement("span",{role:"img","aria-label":"star"},"\u2b50 "),n.vote_average," (",n.vote_count,")")),r.a.createElement(X,null,n.overview)))):r.a.createElement("div",null)))};function ee(){var e=Object(p.a)(["\n  border: 2px solid #FFF;\n  background-color: #1F1B81;\n  border-radius: 10px;\n  padding: 1rem 3rem ;\n  margin: 1rem;\n  font-size: 1.25rem;\n  color: #FFF;\n  ","\n  cursor: pointer;\n\n  &:hover {\n    background-color: #FFF;\n    color: #000;\n  }\n \n  @media (max-width: 500px) {\n    padding: 0.5rem 1rem;\n    flex: 1 0 auto;\n  }\n"]);return ee=function(){return e},e}var ne=f.a.button(ee(),""),te=function(e){var n=e.name,t=e.onClick;return r.a.createElement(ne,{onClick:t},n)};function ae(){var e=Object(p.a)(["\n  display: grid;\n  width: 100%;\n  grid-template-columns: repeat(5, 18%);\n  grid-template-rows: repeat(1, auto);\n  grid-column-gap: 2.5%;\n  grid-row-gap: 2rem;\n\n  @media (max-width: 1050px) {\n    grid-template-columns: repeat(4,22%);\n    grid-column-gap: 4%;\n  }\n  @media (max-width: 960px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  @media (max-width: 500px) {\n    grid-template-columns: 1fr;\n    grid-row-gap: 2rem;\n  }\n\n"]);return ae=function(){return e},e}var re=f.a.div(ae()),ie=function(e){var n=e.children;return r.a.createElement(re,null,n)};function ce(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  @media (max-width: 500px) {\n    justify-content: space-between;\n  }\n"]);return ce=function(){return e},e}function oe(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 960px;\n  margin: 2rem auto;\n  h1 {\n    margin: 1rem 0;\n    font-size: 3rem;\n  }\n  @media (max-width: 960px ) {\n    width: 100%;\n  }\n\n"]);return oe=function(){return e},e}var le=f.a.div(oe()),ue=f.a.div(ce()),de=function(e){var n=e.handleQueryChange,t=Object(a.useState)([{name:"Popular",query:"movie/popular"},{name:"Upcoming",query:"movie/upcoming"},{name:"Now playing",query:"movie/now_playing"},{name:"Top rated",query:"movie/top_rated"}]),i=Object(d.a)(t,1)[0];return r.a.createElement(le,null,r.a.createElement(ue,null,i.map((function(e,t){return r.a.createElement(te,{key:t,onClick:function(){return n(e.query)},name:e.name})}))))};function me(e,n){switch(n.type){case"FETCH_START":return Object(s.a)({},e,{isLoading:!0});case"FETCH_SUCCESS":return Object(s.a)({},e,{data:n.data,movies:n.movies,genres:n.genres,pages:n.pages,isLoading:!1});case"FETCH_FAILED":return Object(s.a)({},e,{isLoading:!0,error:!0});case"FETCH_ADD_PAGE":return Object(s.a)({},e,{data:[].concat(Object(m.a)(e.data),Object(m.a)(n.data)),isLoading:!1});default:return Object(s.a)({},e,{error:!0,isLoading:!0})}}var se=function(){var e=Object(a.useState)("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat("500b35ad5abefc035953ad6c5b5ccad3")),n=Object(d.a)(e,1)[0],t=Object(a.useState)("movie/popular"),i=Object(d.a)(t,2),c=i[0],o=i[1],m=Object(a.useState)(1),s=Object(d.a)(m,2),p=s[0],f=s[1],g=Object(a.useState)(""),b=Object(d.a)(g,2),v=b[0],h=b[1],E=Object(a.useState)("https://api.themoviedb.org/3/".concat(c,"?api_key=").concat("500b35ad5abefc035953ad6c5b5ccad3","&page=").concat(p,"&").concat(v)),x=Object(d.a)(E,2),j=x[0],w=x[1],y=Object(a.useReducer)(me,{isLoading:!0,data:null,genres:null,pages:null,error:!1}),O=Object(d.a)(y,2),k=O[0],C=O[1];return Object(a.useEffect)((function(){w("https://api.themoviedb.org/3/".concat(c,"?api_key=").concat("500b35ad5abefc035953ad6c5b5ccad3","&page=").concat(p,"&").concat(v))}),[p,c,v]),Object(a.useEffect)((function(){f(1)}),[c]),Object(a.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(t){var a,r,i,c,o,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C({type:"FETCH_START"}),e.prev=1,e.next=4,Promise.all([fetch(t),fetch(n)]);case 4:return a=e.sent,r=Object(d.a)(a,2),i=r[0],c=r[1],e.next=10,i.json();case 10:return o=e.sent,e.next=13,c.json();case 13:u=e.sent,C(1===p?{type:"FETCH_SUCCESS",data:o.results,genres:u,pages:o.total_pages,movies:o.results}:{type:"FETCH_ADD_PAGE",data:o.results}),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(1),C({type:"FETCH_FAILED"}),console.log("Mamy problem");case 21:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(n){return e.apply(this,arguments)}})()(j)}),[j,n]),r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,{movie:!k.isLoading&&k.data[0],isLoading:k.isLoading,genres:!k.isLoading&&k.genres.genres,home:!0,setQuery:o,setSearchValue:h}),r.a.createElement(F,null,!k.isLoading&&0!==k.data.length&&r.a.createElement(de,{handleQueryChange:o}),!k.isLoading&&r.a.createElement(r.a.Fragment,null,r.a.createElement(ie,null,k.data.slice(1).map((function(e,n){return r.a.createElement(_,{key:n,movie:!k.isLoading&&e,genres:k.genres.genres})}))),k.pages>p&&r.a.createElement("div",{style:{margin:"0 auto",width:"fit-content"}},r.a.createElement(te,{onClick:function(){return f(p+1)},name:"Load more movies!"})))))};function pe(){var e=Object(p.a)(["\n  display: block;\n  width: fit-content;\n  margin: 1rem auto 5rem;\n"]);return pe=function(){return e},e}function fe(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return fe=function(){return e},e}function ge(){var e=Object(p.a)(["\n  display: block;\n  width: 100%;\n  height: 365px;\n  background-color: white;\n  border-radius: 25px;\n"]);return ge=function(){return e},e}function be(){var e=Object(p.a)(["\n  margin: 1rem;\n"]);return be=function(){return e},e}function ve(){var e=Object(p.a)(["\n  display: block;\n  width: 100%;\n  img {\n    width: 100%;\n    border-radius: 25px;\n  }\n"]);return ve=function(){return e},e}function he(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 0.5em;\n  text-align: center;\n  div:first-child {\n    display: flex;\n    flex-direction: row;\n    ","\n    justify-content: space-between;\n    p { margin: 0;}\n  }\n  p {\n      margin: 5px 0;\n    }\n"]);return he=function(){return e},e}function Ee(){var e=Object(p.a)(["\n  display: block;\n  width: 100%;\n"]);return Ee=function(){return e},e}var xe=f.a.div(Ee()),je=f.a.div(he(),""),we=f.a.div(ve()),ye=f.a.h3(be()),Oe=f.a.div(ge()),ke=f.a.div(fe()),_e=f.a.div(pe()),Ce=function(e){var n=e.cast,t=e.crew,i=Object(a.useState)(5),c=Object(d.a)(i,2),o=c[0],l=c[1];return r.a.createElement(xe,null,r.a.createElement(ie,null,n.slice(0,o).map((function(e){return r.a.createElement(je,null,e.profile_path?r.a.createElement(we,null,r.a.createElement("img",{src:"http://image.tmdb.org/t/p/w500".concat(e.profile_path),alt:"poster"})):r.a.createElement(Oe,null),r.a.createElement(ye,null,e.name,"!"),r.a.createElement(ke,null,"Playing:",r.a.createElement("span",null," ",e.character)))}))),r.a.createElement(_e,null,n.length>o&&r.a.createElement(te,{onClick:function(){return l(o+5)},name:"Load more members!"})),r.a.createElement("h1",null,"Producers, directors.."),r.a.createElement(ie,null,t.map((function(e){var n=e.job;if("Director"===n||"Executive Producer"===n||"Screenplay"===n||"Producer"===n||"Original Music Composer"===n||"Director of Photography"===n)return r.a.createElement(je,null,e.profile_path?r.a.createElement(we,null,r.a.createElement("img",{src:"http://image.tmdb.org/t/p/w500".concat(e.profile_path),alt:"poster"})):r.a.createElement(Oe,null),r.a.createElement(ye,null,e.name,"!"),r.a.createElement("h3",null,e.job))}))))};function Se(){var e=Object(p.a)(["\n  display: block;\n  width: 250px;\n"]);return Se=function(){return e},e}function Fe(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  h3 {\n    text-align: center;\n  }\n"]);return Fe=function(){return e},e}function Le(){var e=Object(p.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  width: 100%;\n  margin: 5rem 2rem;\n  @media (max-width: 500px) {\n    margin: 0;\n  }\n"]);return Le=function(){return e},e}var De=f.a.div(Le()),Te=f.a.div(Fe()),Ae=f.a.img(Se()),He=function(e){var n=e.production;return r.a.createElement(De,null,n.map((function(e){if(e.logo_path)return r.a.createElement(Te,null,r.a.createElement("h3",null,e.name),r.a.createElement(Ae,{src:"http://image.tmdb.org/t/p/w500".concat(e.logo_path)}))})))};function Pe(e,n){switch(n.type){case"FETCH_START":return Object(s.a)({},e,{isLoading:!0});case"FETCH_SUCCESS":return Object(s.a)({},e,{movieData:n.movieData,creditsData:n.creditsData,isLoading:!1});case"FETCH_FAILED":return Object(s.a)({},e,{isLoading:!0,err:!0});default:return Object(s.a)({},e,{err:!0})}}var Ie=function(e){var n=Object(a.useState)("https://api.themoviedb.org/3/movie/".concat(e.match.params.movieID,"?api_key=").concat("500b35ad5abefc035953ad6c5b5ccad3","&language=en-US")),t=Object(d.a)(n,1)[0],i=Object(a.useState)("https://api.themoviedb.org/3/movie/".concat(e.match.params.movieID,"/credits?api_key=").concat("500b35ad5abefc035953ad6c5b5ccad3","&language=en-US")),c=Object(d.a)(i,1)[0],o=Object(a.useReducer)(Pe,{isLoading:!0,movieData:null,creditsData:null,err:!1}),m=Object(d.a)(o,2),s=m[0],p=m[1];return Object(a.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var n,a,r,i,o,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p({type:"FETCH_START"}),e.prev=1,e.next=4,Promise.all([fetch(t),fetch(c)]);case 4:return n=e.sent,a=Object(d.a)(n,2),r=a[0],i=a[1],e.next=10,r.json();case 10:return o=e.sent,e.next=13,i.json();case 13:u=e.sent,p({type:"FETCH_SUCCESS",movieData:o,creditsData:u}),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(1),p({type:"FETCH_FAILED"}),console.error(e.t0);case 21:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(){return e.apply(this,arguments)}})()()}),[t,c]),r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,{movie:!s.isLoading&&s.movieData,isLoading:s.isLoading}),r.a.createElement(F,null,!s.isLoading&&r.a.createElement("span",{style:{display:"block",textAlign:"center",fontStyle:"italic",fontSize:"2rem",margin:"0 0 4rem 0"}},s.movieData.tagline),r.a.createElement("h1",null,"Cast members:"),!s.isLoading&&r.a.createElement(Ce,{cast:s.creditsData.cast,crew:s.creditsData.crew}),r.a.createElement("h1",null,"Production companies"),!s.isLoading&&r.a.createElement(He,{production:!s.isLoading&&s.movieData.production_companies})))},Ue=t(10);function qe(){var e=Object(Ue.f)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var Qe=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(qe,null),r.a.createElement(Ue.c,null,r.a.createElement(Ue.a,{exact:!0,path:"/",component:se}),r.a.createElement(Ue.a,{path:"/movie/:movieID",component:Ie})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(g.a,null,r.a.createElement(Qe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[29,1,2]]]);
//# sourceMappingURL=main.a516ec1d.chunk.js.map