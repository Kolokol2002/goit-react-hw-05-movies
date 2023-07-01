"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[840],{288:function(n,e,r){r.d(e,{HI:function(){return s},IQ:function(){return u},Jh:function(){return d},Si:function(){return c},XT:function(){return l},sN:function(){return o}});var t=r(1243),i="https://api.themoviedb.org/3",o="https://image.tmdb.org/t/p/w300",a={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDJhYzRjYzZhMDM2Y2ZiYmZmZjlhNWE4Y2EwNGQwZCIsInN1YiI6IjY0OTgzMTc0ZWI3OWMyMDExYzUyNTM2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-TEUfSMT22rylGVayssYVadsdZf8E1XkK7mzvSTSGBo"}},c=function(){var n="".concat(i,"/trending/movie/day?language=en-US");return t.Z.get(n,a)},s=function(n){var e="".concat(i,"/movie/").concat(n,"?language=en-US&external_source=imdb_id");return t.Z.get(e,a)},u=function(n){var e="".concat(i,"/movie/").concat(n,"/credits?language=en-US");return t.Z.get(e,a)},d=function(n){var e="".concat(i,"/movie/").concat(n,"/reviews?language=en-US");return t.Z.get(e,a)},l=function(n){var e="".concat(i,"/search/movie?query=").concat(n,"&include_adult=true&language=en-US&page=1");return t.Z.get(e,a)}},4872:function(n,e,r){r.d(e,{Z:function(){return u}});var t,i=r(8185),o=r(168),a=r(1087),c=(0,r(6444).ZP)(a.rU)(t||(t=(0,o.Z)(["\n  display: flex;\n  height: 3em;\n  width: 100px;\n  align-items: center;\n  justify-content: center;\n  background-color: #7d7d7d;\n  border-radius: 3px;\n  letter-spacing: 1px;\n  transition: all 0.2s linear;\n  cursor: pointer;\n  border: none;\n  margin-bottom: 33px;\n  color: #ffffff;\n  text-decoration: none;\n\n  & > svg {\n    fill: #ffffff;\n    margin-right: 5px;\n    margin-left: 5px;\n    font-size: 20px;\n    transition: all 0.4s ease-in;\n  }\n\n  &:hover > svg {\n    font-size: 1.2em;\n    transform: translateX(-5px);\n  }\n\n  &:hover {\n    box-shadow: 9px 9px 33px #d1d1d1, -9px -9px 33px #ffffff;\n    transform: translateY(-2px);\n  }\n"]))),s=r(184),u=function(n){var e=n.linkTo;return(0,s.jsxs)(c,{to:e,children:[(0,s.jsx)(i.And,{}),(0,s.jsx)("span",{children:"Back"})]})}},8840:function(n,e,r){r.r(e),r.d(e,{default:function(){return Y}});var t,i,o,a,c,s,u,d,l=r(288),f=r(4872),x=r(2791),p=r(1933),h=r(7689),g=r(168),v=r(1087),m=r(6444),Z=m.ZP.div(t||(t=(0,g.Z)([""]))),j=m.ZP.div(i||(i=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n"]))),b=m.ZP.div(o||(o=(0,g.Z)(["\n  display: flex;\n  background-color: #cbcbcb;\n  width: fit-content;\n"]))),y=m.ZP.div(a||(a=(0,g.Z)(["\n  display: flex;\n"]))),I=m.ZP.img(c||(c=(0,g.Z)(["\n  margin-right: 20px;\n  margin-bottom: 30px;\n"]))),w=m.ZP.h2(s||(s=(0,g.Z)(["\n  margin: 0;\n  padding: 0;\n"]))),_=m.ZP.p(u||(u=(0,g.Z)(["\n  max-width: 500px;\n"]))),k=(0,m.ZP)(v.OL)(d||(d=(0,g.Z)(["\n  text-decoration: none;\n  color: black;\n  padding: 10px;\n\n  transition: background-color 0.4s cubic-bezier(0.08, 0.82, 0.44, 0.91);\n  &.active {\n    background-color: violet;\n  }\n  &:hover {\n    background-color: violet;\n  }\n"]))),z=r(184),Y=function(){var n,e=(0,h.UO)().movieId,r=(0,p.useQuery)(["movie",e],(function(){return(0,l.HI)(e)})),t=r.data,i=r.isError,o=r.isLoading,a=r.error,c=(0,h.TH)().state,s=(0,x.useRef)(null!==(n=null===c||void 0===c?void 0:c.from)&&void 0!==n?n:"/movies");if(o)return(0,z.jsx)("span",{children:"Loading..."});if(i)return(0,z.jsxs)("span",{children:["Error: ",a.message]});var u=t.data,d=u.title,g=u.overview,v=u.poster_path,m=u.genres,Y=u.production_countries,J=u.release_date,T=u.runtime,U=u.vote_average,M=u.vote_count;return(0,z.jsxs)(Z,{children:[(0,z.jsx)(f.Z,{linkTo:s.current}),(0,z.jsxs)(y,{children:[(0,z.jsx)(I,{src:v?"".concat(l.sN).concat(v):"https://via.placeholder.com/300x450",alt:d}),(0,z.jsxs)(j,{children:[(0,z.jsx)(w,{children:d}),(0,z.jsxs)("span",{children:["IMDB: ",U," (",M,")"]}),(0,z.jsxs)("span",{children:["Countries: ",Y.map((function(n){return n.name})).join(",")]}),(0,z.jsxs)("span",{children:["Genres: ",m.map((function(n){return n.name})).join(",")]}),(0,z.jsxs)("span",{children:["Realese: ",J]}),(0,z.jsxs)("span",{children:["Run time: ",T," minutes"]}),(0,z.jsx)(_,{children:g})]})]}),(0,z.jsxs)(b,{children:[(0,z.jsx)(k,{to:"cast",children:"Cast"}),(0,z.jsx)(k,{to:"reviews",children:"Reviews"})]}),(0,z.jsx)(h.j3,{})]})}}}]);
//# sourceMappingURL=840.43cf89c9.chunk.js.map