"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{288:function(n,e,r){r.d(e,{HI:function(){return u},IQ:function(){return s},Jh:function(){return d},Si:function(){return c},XT:function(){return l},sN:function(){return o}});var t=r(1243),i="https://api.themoviedb.org/3",o="https://image.tmdb.org/t/p/w300",a={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDJhYzRjYzZhMDM2Y2ZiYmZmZjlhNWE4Y2EwNGQwZCIsInN1YiI6IjY0OTgzMTc0ZWI3OWMyMDExYzUyNTM2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-TEUfSMT22rylGVayssYVadsdZf8E1XkK7mzvSTSGBo"}},c=function(){var n="".concat(i,"/trending/movie/day?language=en-US");return t.Z.get(n,a)},u=function(n){var e="".concat(i,"/movie/").concat(n,"?language=en-US&external_source=imdb_id");return t.Z.get(e,a)},s=function(n){var e="".concat(i,"/movie/").concat(n,"/credits?language=en-US");return t.Z.get(e,a)},d=function(n){var e="".concat(i,"/movie/").concat(n,"/reviews?language=en-US");return t.Z.get(e,a)},l=function(n){var e="".concat(i,"/search/movie?query=").concat(n,"&include_adult=true&language=en-US&page=1");return t.Z.get(e,a)}},5010:function(n,e,r){var t=r(288),i=r(7554),o=(r(2791),r(184));e.Z=function(n){var e=n.results,r=n.location;return(0,o.jsx)(i.oy,{children:e.map((function(n){var e=n.title,a=n.poster_path,c=n.id;return(0,o.jsx)(i.Zb,{children:(0,o.jsxs)(i.YS,{to:"/movies/".concat(c),state:{from:r},children:[(0,o.jsx)("div",{children:(0,o.jsx)(i.xu,{src:a?"".concat(t.sN).concat(a):"https://via.placeholder.com/300x450",alt:e})}),(0,o.jsx)("h2",{children:e})]})},c)}))})}},7554:function(n,e,r){r.d(e,{YS:function(){return h},Zb:function(){return l},oy:function(){return d},xu:function(){return f}});var t,i,o,a,c=r(168),u=r(1087),s=r(6444),d=s.ZP.ul(t||(t=(0,c.Z)(["\n  display: flex;\n  margin: 0;\n  padding: 20px 50px;\n  flex-wrap: wrap;\n  gap: 40px;\n  justify-content: space-between;\n"]))),l=s.ZP.li(i||(i=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 200px;\n  border: solid 2px black;\n  border-radius: 10px;\n  overflow: hidden;\n"]))),f=s.ZP.img(o||(o=(0,c.Z)(["\n  width: 100%;\n  object-fit: cover;\n\n  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);\n  &:hover {\n    transform: scale(1.05);\n  }\n"]))),h=(0,s.ZP)(u.rU)(a||(a=(0,c.Z)(["\n  text-decoration: none;\n  color: black;\n  height: 100%;\n\n  & h2 {\n    display: block;\n    padding: 10px 5px;\n    font-size: 15px;\n  }\n\n  & div {\n    height: 300px;\n    overflow: hidden;\n  }\n"])))},5415:function(n,e,r){r.r(e);var t=r(288),i=r(1933),o=r(7689),a=r(5010),c=r(184);e.default=function(){var n=(0,i.useQuery)("topMovies",t.Si),e=n.data,r=n.isError,u=n.isLoading,s=n.error,d=(0,o.TH)();if(u)return(0,c.jsx)("span",{children:"Loading..."});if(r)return(0,c.jsxs)("span",{children:["Error: ",s.message]});var l=e.data.results;return(0,c.jsx)(a.Z,{results:l,location:d})}}}]);
//# sourceMappingURL=415.9eb45502.chunk.js.map