import{S as a,i as e,s as t,l as s,f as r,u as n,w as o,x as p,d as i,L as m,r as u,j as c,m as d,o as l,H as f,v as $}from"../../chunks/vendor-8fe9a59e.js";import{S as g,M as h}from"../../chunks/MainSection-5ed8f046.js";import{p as j}from"../../chunks/stores-d4b77a7d.js";import{A as k,a as S}from"../../chunks/store-892411d9.js";import"../../chunks/Spinner-5ae9cd83.js";function _(a){let e,t;return e=new g({}),{c(){c(e.$$.fragment)},l(a){d(e.$$.fragment,a)},m(a,s){l(e,a,s),t=!0},p:f,i(a){t||(p(e.$$.fragment,a),t=!0)},o(a){n(e.$$.fragment,a),t=!1},d(a){$(e,a)}}}function v(a){let e,m,c=a[0],d=w(a);return{c(){d.c(),e=s()},l(a){d.l(a),e=s()},m(a,t){d.m(a,t),r(a,e,t),m=!0},p(a,s){1&s&&t(c,c=a[0])?(u(),n(d,1,1,f),o(),d=w(a),d.c(),p(d),d.m(e.parentNode,e)):d.p(a,s)},i(a){m||(p(d),m=!0)},o(a){n(d),m=!1},d(a){a&&i(e),d.d(a)}}}function w(a){let e,t;return e=new h({props:{api_url:a[1]}}),{c(){c(e.$$.fragment)},l(a){d(e.$$.fragment,a)},m(a,s){l(e,a,s),t=!0},p(a,t){const s={};2&t&&(s.api_url=a[1]),e.$set(s)},i(a){t||(p(e.$$.fragment,a),t=!0)},o(a){n(e.$$.fragment,a),t=!1},d(a){$(e,a)}}}function x(a){let e,t,m,c;const d=[v,_],l=[];function f(a,e){return a[0].params.id?0:1}return e=f(a),t=l[e]=d[e](a),{c(){t.c(),m=s()},l(a){t.l(a),m=s()},m(a,t){l[e].m(a,t),r(a,m,t),c=!0},p(a,[s]){let r=e;e=f(a),e===r?l[e].p(a,s):(u(),n(l[r],1,1,(()=>{l[r]=null})),o(),t=l[e],t?t.p(a,s):(t=l[e]=d[e](a),t.c()),p(t,1),t.m(m.parentNode,m))},i(a){c||(p(t),c=!0)},o(a){n(t),c=!1},d(a){l[e].d(a),a&&i(m)}}}function y(a,e,t){let s,r,n,o;m(a,j,(a=>t(0,r=a))),m(a,k,(a=>t(2,n=a))),m(a,S,(a=>t(3,o=a)));let p=`https://api.themoviedb.org/3/search/${o}?api_key=${n}&language=en-GB"&page=1&include_adult=false&query=`;return a.$$.update=()=>{1&a.$$.dirty&&t(1,s=p+r.params.id+"&page=")},[r,s]}class b extends a{constructor(a){super(),e(this,a,y,x,t,{})}}export{b as default};