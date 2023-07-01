"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[134],{288:function(n,e,r){r.d(e,{HI:function(){return s},IQ:function(){return u},Jh:function(){return l},Si:function(){return c},XT:function(){return f},sN:function(){return o}});var t=r(1243),i="https://api.themoviedb.org/3",o="https://image.tmdb.org/t/p/w300",a={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDJhYzRjYzZhMDM2Y2ZiYmZmZjlhNWE4Y2EwNGQwZCIsInN1YiI6IjY0OTgzMTc0ZWI3OWMyMDExYzUyNTM2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-TEUfSMT22rylGVayssYVadsdZf8E1XkK7mzvSTSGBo"}},c=function(){var n="".concat(i,"/trending/movie/day?language=en-US");return t.Z.get(n,a)},s=function(n){var e="".concat(i,"/movie/").concat(n,"?language=en-US&external_source=imdb_id");return t.Z.get(e,a)},u=function(n){var e="".concat(i,"/movie/").concat(n,"/credits?language=en-US");return t.Z.get(e,a)},l=function(n){var e="".concat(i,"/movie/").concat(n,"/reviews?language=en-US");return t.Z.get(e,a)},f=function(n){var e="".concat(i,"/search/movie?query=").concat(n,"&include_adult=true&language=en-US&page=1");return t.Z.get(e,a)}},4872:function(n,e,r){r.d(e,{Z:function(){return u}});var t,i=r(8185),o=r(168),a=r(1087),c=(0,r(6444).ZP)(a.rU)(t||(t=(0,o.Z)(["\n  display: flex;\n  height: 3em;\n  width: 100px;\n  align-items: center;\n  justify-content: center;\n  background-color: #7d7d7d;\n  border-radius: 3px;\n  letter-spacing: 1px;\n  transition: all 0.2s linear;\n  cursor: pointer;\n  border: none;\n  margin-bottom: 33px;\n  color: #ffffff;\n  text-decoration: none;\n\n  & > svg {\n    fill: #ffffff;\n    margin-right: 5px;\n    margin-left: 5px;\n    font-size: 20px;\n    transition: all 0.4s ease-in;\n  }\n\n  &:hover > svg {\n    font-size: 1.2em;\n    transform: translateX(-5px);\n  }\n\n  &:hover {\n    box-shadow: 9px 9px 33px #d1d1d1, -9px -9px 33px #ffffff;\n    transform: translateY(-2px);\n  }\n"]))),s=r(184),u=function(n){var e=n.linkTo;return(0,s.jsxs)(c,{to:e,children:[(0,s.jsx)(i.And,{}),(0,s.jsx)("span",{children:"Back"})]})}},5010:function(n,e,r){var t=r(288),i=r(7554),o=(r(2791),r(184));e.Z=function(n){var e=n.results,r=n.location;return(0,o.jsx)(i.oy,{children:e.map((function(n){var e=n.title,a=n.poster_path,c=n.id;return(0,o.jsx)(i.Zb,{children:(0,o.jsxs)(i.YS,{to:"/movies/".concat(c),state:{from:r},children:[(0,o.jsx)("div",{children:(0,o.jsx)(i.xu,{src:a?"".concat(t.sN).concat(a):"https://via.placeholder.com/300x450",alt:e})}),(0,o.jsx)("h2",{children:e})]})},c)}))})}},7554:function(n,e,r){r.d(e,{YS:function(){return h},Zb:function(){return f},oy:function(){return l},xu:function(){return d}});var t,i,o,a,c=r(168),s=r(1087),u=r(6444),l=u.ZP.ul(t||(t=(0,c.Z)(["\n  display: flex;\n  margin: 0;\n  padding: 20px 50px;\n  flex-wrap: wrap;\n  gap: 40px;\n  justify-content: space-between;\n"]))),f=u.ZP.li(i||(i=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 200px;\n  border: solid 2px black;\n  border-radius: 10px;\n  overflow: hidden;\n"]))),d=u.ZP.img(o||(o=(0,c.Z)(["\n  width: 100%;\n  object-fit: cover;\n\n  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);\n  &:hover {\n    transform: scale(1.05);\n  }\n"]))),h=(0,u.ZP)(s.rU)(a||(a=(0,c.Z)(["\n  text-decoration: none;\n  color: black;\n  height: 100%;\n\n  & h2 {\n    display: block;\n    padding: 10px 5px;\n    font-size: 15px;\n  }\n\n  & div {\n    height: 300px;\n    overflow: hidden;\n  }\n"])))},1134:function(n,e,r){r.r(e);var t=r(9439),i=r(288),o=r(4872),a=r(1933),c=r(1087),s=r(7689),u=r(5010),l=r(184);e.default=function(){var n=(0,c.lr)(),e=(0,t.Z)(n,2),r=e[0],f=e[1],d=r.get("search"),h=(0,a.useQuery)(["movies",d],(function(){return(0,i.XT)(d)})),p=h.data,x=h.isError,g=h.isLoading,m=h.error,v=(0,s.TH)();if(g)return(0,l.jsx)("span",{children:"Loading..."});if(x)return(0,l.jsxs)("span",{children:["Error: ",m.message]});var Z=p.data.results;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.Z,{linkTo:"/"}),(0,l.jsxs)("form",{onSubmit:function(n){n.preventDefault(),f({search:n.target.children.search.value})},children:[(0,l.jsx)("input",{defaultValue:d,name:"search",type:"text"}),(0,l.jsx)("button",{type:"submit",children:"Search"})]}),d&&(0,l.jsx)(u.Z,{results:Z,location:v})]})}}}]);
//# sourceMappingURL=134.a2e675ef.chunk.js.map