(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{16:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),i=t(4),s=t.n(i),r=(t(9),t(3)),l=(t(10),t(11),t(0)),o=function(e){var a=e.data;return Object(l.jsxs)("div",{className:"for-movie",children:[a.poster_path?Object(l.jsx)("img",{src:"https://image.tmdb.org/t/p/w1280"+a.poster_path,alt:a.title}):Object(l.jsx)("img",{src:"https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80",alt:a.title}),Object(l.jsxs)("div",{className:"movie-info",children:[Object(l.jsx)("h3",{children:a.title}),Object(l.jsx)("span",{className:"bg-secondary text-success rounded font-weight-bolder px-1",children:a.vote_average})]}),Object(l.jsxs)("div",{className:"overlay",children:[Object(l.jsx)("h2",{children:"Overview:"}),Object(l.jsx)("p",{children:a.overview})]})]})};var b=function(){var e=Object(n.useState)([]),a=Object(r.a)(e,2),t=a[0],c=a[1],i=Object(n.useState)(""),s=Object(r.a)(i,2),b=s[0],j=s[1];Object(n.useEffect)((function(){d("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0c5bef9ce8efd7a95b81bb04f6a99f7a&page=1")}),[]);var d=function(e){fetch(e).then((function(e){return e.json()})).then((function(e){console.log(e),c(e.results)}))},h=function(e){fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=0c5bef9ce8efd7a95b81bb04f6a99f7a&language=en-US&page=1")).then((function(e){return e.json()})).then((function(e){console.log(e),c(e.results)}))};return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("a",{class:"navbar-brand",href:"#",children:Object(l.jsx)("img",{width:"200",height:"25",class:"d-inline-block align-center navimg",alt:""})}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(l.jsxs)("ul",{className:"navbar-nav mr-auto font-weight-bold",children:[Object(l.jsx)("li",{className:"nav-item active",children:Object(l.jsx)("a",{className:"nav-link text-info",href:"#",onClick:function(){return h("now_playing")},children:"Now Playing"})}),Object(l.jsx)("li",{className:"nav-item active",children:Object(l.jsx)("a",{className:"nav-link",href:"#",onClick:function(){return h("upcoming")},children:"Upcoming"})}),Object(l.jsx)("li",{className:"nav-item active",children:Object(l.jsx)("a",{className:"nav-link",href:"#",onClick:function(){return h("top_rated")},children:"Top Rated"})}),Object(l.jsx)("li",{className:"nav-item active",children:Object(l.jsx)("a",{className:"nav-link",href:"#",onClick:function(){return h("popular")},children:"Popular"})})]}),Object(l.jsxs)("form",{className:"form-inline my-2 my-lg-0",onSubmit:function(e){e.preventDefault(),d("https://api.themoviedb.org/3/search/movie?&api_key=0c5bef9ce8efd7a95b81bb04f6a99f7a&query="+b),j("")},children:[Object(l.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search",value:b,onChange:function(e){return j(e.target.value)}}),Object(l.jsx)("button",{className:"btn btn-outline-info my-2 my-sm-0",type:"submit",children:"Search"})]})]})]})}),Object(l.jsx)("div",{className:"movie-container",children:t.map((function(e){return Object(l.jsx)(o,{data:e},e.id)}))})]})};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root"))},9:function(e,a,t){}},[[16,1,2]]]);
//# sourceMappingURL=main.acfb77db.chunk.js.map