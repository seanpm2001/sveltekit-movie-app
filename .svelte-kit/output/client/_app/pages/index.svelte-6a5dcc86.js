import{S as d,i as k,s as m,j as y,m as h,o as g,x as c,u,v as b,l,f as j,w as $,d as S,L as p,M,r as v,H as w}from"../chunks/vendor-8fe9a59e.js";import{M as A}from"../chunks/MainSection-98c5ae27.js";import{s as _,A as K,a as q}from"../chunks/store-892411d9.js";import"../chunks/Spinner-b4526be0.js";import"../chunks/stores-d4b77a7d.js";function f(r){let o,s;return o=new A({props:{api_url:r[1]}}),{c(){y(o.$$.fragment)},l(n){h(o.$$.fragment,n)},m(n,e){g(o,n,e),s=!0},p(n,e){const t={};e&2&&(t.api_url=n[1]),o.$set(t)},i(n){s||(c(o.$$.fragment,n),s=!0)},o(n){u(o.$$.fragment,n),s=!1},d(n){b(o,n)}}}function B(r){let o=r[0],s,n,e=f(r);return{c(){e.c(),s=l()},l(t){e.l(t),s=l()},m(t,a){e.m(t,a),j(t,s,a),n=!0},p(t,[a]){a&1&&m(o,o=t[0])?(v(),u(e,1,1,w),$(),e=f(t),e.c(),c(e),e.m(s.parentNode,s)):e.p(t,a)},i(t){n||(c(e),n=!0)},o(t){u(e),n=!1},d(t){t&&S(s),e.d(t)}}}function C(r,o,s){let n,e,t,a;return p(r,K,i=>s(2,e=i)),p(r,q,i=>s(0,t=i)),p(r,_,i=>s(3,a=i)),M(_,a=null,a),r.$$.update=()=>{r.$$.dirty&5&&s(1,n=`https://api.themoviedb.org/3/trending/${t}/week?api_key=${e}&language=en-GB&page=`)},[t,n,e]}class x extends d{constructor(o){super();k(this,o,C,B,m,{})}}export{x as default};