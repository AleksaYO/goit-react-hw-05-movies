"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[919],{919:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var r=n(439),a=n(243),i=n(791),u=n(87),c=n(184),o=function(){var e=(0,i.useState)(),t=(0,r.Z)(e,2),n=t[0],o=t[1];return(0,i.useEffect)((function(){a.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=e6e5040957b423292e46b69ab1c4061a").then((function(e){var t=e.data.results;return o(t)}))}),[]),n&&(0,c.jsx)("ul",{children:n.map((function(e){return(0,c.jsx)("li",{children:(0,c.jsx)(u.rU,{to:"/movies/".concat(e.id),children:e.title})},e.id)}))})}}}]);
//# sourceMappingURL=919.92b0ee4b.chunk.js.map