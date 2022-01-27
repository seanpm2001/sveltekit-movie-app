var et=Object.defineProperty,tt=Object.defineProperties;var st=Object.getOwnPropertyDescriptors;var Re=Object.getOwnPropertySymbols;var lt=Object.prototype.hasOwnProperty,rt=Object.prototype.propertyIsEnumerable;var Le=(r,e,s)=>e in r?et(r,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[e]=s,Pe=(r,e)=>{for(var s in e||(e={}))lt.call(e,s)&&Le(r,s,e[s]);if(Re)for(var s of Re(e))rt.call(e,s)&&Le(r,s,e[s]);return r},je=(r,e)=>tt(r,st(e));import{F as at,S as ue,i as de,s as ne,e as m,c as _,a as u,d as n,b as t,g as R,G as o,H as K,I as he,J as Q,K as A,L as V,w as pe,k as N,x as me,m as I,y as _e,M as He,N as ie,q as Z,o as ee,B as ge,O as Ue,t as te,h as se,P as U,j as Oe,f as be,Q as Ce,R as Me,l as Ye,n as nt,p as it,T as ot,U as ct,V as ut,W as dt,X as ht}from"../chunks/vendor-035761c6.js";import{m as Ge,s as xe,a as we,t as qe}from"../chunks/store-70017b87.js";import{r as ft}from"../chunks/singletons-a6a7384f.js";import{s as Fe}from"../chunks/stores-60feb9bd.js";const oe=vt;async function vt(r,e){return ft.goto(r,e,[])}var le;(function(r){r.Light="light",r.Dark="dark"})(le||(le={}));const Je=at(Fe,(r,e)=>{console.log("session theme",r.theme),r.theme?e(r.theme):e(window.matchMedia("(prefers-color-scheme: dark)").matches?le.Dark:le.Light)}),pt=r=>{Fe.update(e=>je(Pe({},e),{theme:r})),fetch("/theme",{method:"PUT",body:r})};function mt(r){let e,s,l,i,a;return{c(){e=m("span"),s=A("svg"),l=A("g"),i=A("path"),a=A("path"),this.h()},l(c){e=_(c,"SPAN",{});var p=u(e);s=V(p,"svg",{class:!0,"aria-hidden":!0,viewBox:!0,preserveAspectRatio:!0});var f=u(s);l=V(f,"g",{fill:!0});var d=u(l);i=V(d,"path",{d:!0}),u(i).forEach(n),a=V(d,"path",{d:!0}),u(a).forEach(n),d.forEach(n),f.forEach(n),p.forEach(n),this.h()},h(){t(i,"d","M20.958 15.325c.204-.486-.379-.9-.868-.684a7.684 7.684 0 0 1-3.101.648c-4.185 0-7.577-3.324-7.577-7.425a7.28 7.28 0 0 1 1.134-3.91c.284-.448-.057-1.068-.577-.936C5.96 4.041 3 7.613 3 11.862 3 16.909 7.175 21 12.326 21c3.9 0 7.24-2.345 8.632-5.675z"),t(a,"d","M15.611 3.103c-.53-.354-1.162.278-.809.808l.63.945a2.332 2.332 0 0 1 0 2.588l-.63.945c-.353.53.28 1.162.81.808l.944-.63a2.332 2.332 0 0 1 2.588 0l.945.63c.53.354 1.162-.278.808-.808l-.63-.945a2.332 2.332 0 0 1 0-2.588l.63-.945c.354-.53-.278-1.162-.809-.808l-.944.63a2.332 2.332 0 0 1-2.588 0l-.945-.63z"),t(l,"fill","silver"),t(s,"class","inline justify-center align-middle w-5 h-5"),t(s,"aria-hidden","true"),t(s,"viewBox","0 0 24 24"),t(s,"preserveAspectRatio","xMidYMid meet")},m(c,p){R(c,e,p),o(e,s),o(s,l),o(l,i),o(l,a)},d(c){c&&n(e)}}}function _t(r){let e,s,l,i,a;return{c(){e=m("span"),s=A("svg"),l=A("g"),i=A("path"),a=A("circle"),this.h()},l(c){e=_(c,"SPAN",{});var p=u(e);s=V(p,"svg",{class:!0,"aria-hidden":!0,role:!0,preserveAspectRatio:!0,viewBox:!0});var f=u(s);l=V(f,"g",{fill:!0,stroke:!0,"stroke-linecap":!0,"stroke-width":!0});var d=u(l);i=V(d,"path",{d:!0}),u(i).forEach(n),a=V(d,"circle",{cx:!0,cy:!0,r:!0}),u(a).forEach(n),d.forEach(n),f.forEach(n),p.forEach(n),this.h()},h(){t(i,"d","M12 3V2m0 20v-1m9-9h1M2 12h1m15.5-6.5L20 4M4 20l1.5-1.5M4 4l1.5 1.5m13 13L20 20"),t(a,"cx","12"),t(a,"cy","12"),t(a,"r","4"),t(l,"fill","none"),t(l,"stroke","#ff0"),t(l,"stroke-linecap","round"),t(l,"stroke-width","2"),t(s,"class","inline justify-center align-middle w-5 h-5"),t(s,"aria-hidden","true"),t(s,"role","img"),t(s,"preserveAspectRatio","xMidYMid meet"),t(s,"viewBox","0 0 24 24")},m(c,p){R(c,e,p),o(e,s),o(s,l),o(l,i),o(l,a)},d(c){c&&n(e)}}}function gt(r){let e,s,l,i;function a(f,d){return f[0]===le.Dark?_t:mt}let c=a(r),p=c(r);return{c(){e=m("button"),s=m("div"),p.c(),this.h()},l(f){e=_(f,"BUTTON",{id:!0,"aria-label":!0,class:!0});var d=u(e);s=_(d,"DIV",{class:!0});var v=u(s);p.l(v),v.forEach(n),d.forEach(n),this.h()},h(){t(s,"class","flex justify-center w-8 h-8 mr-2 align-middle border-2 rounded-full border-skin-border focus:outline-none"),t(e,"id","night-mode"),t(e,"aria-label","night-mode-switch"),t(e,"class","text-skin-inverted")},m(f,d){R(f,e,d),o(e,s),p.m(s,null),l||(i=K(e,"click",r[1]),l=!0)},p(f,[d]){c!==(c=a(f))&&(p.d(1),p=c(f),p&&(p.c(),p.m(s,null)))},i:he,o:he,d(f){f&&n(e),p.d(),l=!1,i()}}}function bt(r,e,s){let l;return Q(r,Je,a=>s(0,l=a)),[l,()=>{const a=l===le.Dark?le.Light:le.Dark;pt(a)}]}class kt extends ue{constructor(e){super();de(this,e,bt,gt,ne,{})}}function Et(r){let e,s,l,i,a,c,p,f;return s=new kt({}),{c(){e=m("section"),pe(s.$$.fragment),l=N(),i=m("form"),a=m("input"),this.h()},l(d){e=_(d,"SECTION",{id:!0,class:!0});var v=u(e);me(s.$$.fragment,v),l=I(v),i=_(v,"FORM",{class:!0,label:!0});var g=u(i);a=_(g,"INPUT",{label:!0,class:!0,type:!0,placeholder:!0}),g.forEach(n),v.forEach(n),this.h()},h(){t(a,"label","search"),t(a,"class","w-24 h-8 px-2 text-lg bg-transparent border-2 rounded-full lg:w-48 placeholder-text-skin-base::placeholder border-skin-border"),t(a,"type","text"),t(a,"placeholder","Search..."),t(i,"class","text-skin-base flex justify-end items-center pr-0.5"),t(i,"label","search form"),t(e,"id","search"),t(e,"class","flex flex-row")},m(d,v){R(d,e,v),_e(s,e,null),o(e,l),o(e,i),o(i,a),He(a,r[0]),c=!0,p||(f=[K(a,"input",r[2]),K(i,"submit",ie(r[1]))],p=!0)},p(d,[v]){v&1&&a.value!==d[0]&&He(a,d[0])},i(d){c||(Z(s.$$.fragment,d),c=!0)},o(d){ee(s.$$.fragment,d),c=!1},d(d){d&&n(e),ge(s),p=!1,Ue(f)}}}function xt(r,e,s){let l;const i=()=>{if(l){let c=l;s(0,l=""),oe(`/search/${c}`)}};function a(){l=this.value,s(0,l)}return[l,i,a]}class wt extends ue{constructor(e){super();de(this,e,xt,Et,ne,{})}}function We(r,e,s){const l=r.slice();return l[6]=e[s],l}function Ke(r,e,s){const l=r.slice();return l[6]=e[s],l}function Qe(r){let e,s,l=r[6].name+"",i,a,c,p,f;function d(){return r[4](r[6])}return{c(){e=m("li"),s=m("button"),i=te(l),c=N(),this.h()},l(v){e=_(v,"LI",{class:!0});var g=u(e);s=_(g,"BUTTON",{"aria-label":!0,class:!0});var x=u(s);i=se(x,l),x.forEach(n),c=I(g),g.forEach(n),this.h()},h(){t(s,"aria-label",a=r[6].name),t(s,"class","block p-1 hover:bg-skin-primary text-skin-base hover:text-skin-selected whitespace-nowrap"),U(s,"bg-selected",r[1]===r[6].id&&r[2]==="movie"),t(e,"class","flex")},m(v,g){R(v,e,g),o(e,s),o(s,i),o(e,c),p||(f=K(s,"click",ie(d)),p=!0)},p(v,g){r=v,g&1&&l!==(l=r[6].name+"")&&Oe(i,l),g&1&&a!==(a=r[6].name)&&t(s,"aria-label",a),g&7&&U(s,"bg-selected",r[1]===r[6].id&&r[2]==="movie")},d(v){v&&n(e),p=!1,f()}}}function Xe(r){let e,s,l=r[6].name+"",i,a,c,p;function f(){return r[5](r[6])}return{c(){e=m("li"),s=m("button"),i=te(l),a=N(),this.h()},l(d){e=_(d,"LI",{class:!0});var v=u(e);s=_(v,"BUTTON",{class:!0});var g=u(s);i=se(g,l),g.forEach(n),a=I(v),v.forEach(n),this.h()},h(){t(s,"class","block p-1 hover:bg-skin-primary text-skin-base hover:text-skin-selected whitespace-nowrap"),U(s,"bg-selected",r[1]===r[6].id&&r[2]==="tv"),t(e,"class","flex")},m(d,v){R(d,e,v),o(e,s),o(s,i),o(e,a),c||(p=K(s,"click",ie(f)),c=!0)},p(d,v){r=d,v&8&&l!==(l=r[6].name+"")&&Oe(i,l),v&14&&U(s,"bg-selected",r[1]===r[6].id&&r[2]==="tv")},d(d){d&&n(e),c=!1,p()}}}function $t(r){let e,s,l,i,a,c,p,f,d,v,g,x,w,h,E,M,y,S,P,O,q,j,F,L,H,C=r[0],T=[];for(let $=0;$<C.length;$+=1)T[$]=Qe(Ke(r,C,$));let J=r[3],B=[];for(let $=0;$<J.length;$+=1)B[$]=Xe(We(r,J,$));return{c(){e=m("div"),s=m("div"),l=m("div"),i=m("h6"),a=m("span"),c=A("svg"),p=A("path"),f=N(),d=te("Movies"),v=N(),g=m("div"),x=N(),w=m("ul");for(let $=0;$<T.length;$+=1)T[$].c();h=N(),E=m("div"),M=m("h6"),y=m("span"),S=A("svg"),P=A("path"),O=N(),q=te("Tv"),j=N(),F=m("p"),L=N(),H=m("ul");for(let $=0;$<B.length;$+=1)B[$].c();this.h()},l($){e=_($,"DIV",{class:!0});var Y=u(e);s=_(Y,"DIV",{class:!0});var k=u(s);l=_(k,"DIV",{class:!0});var z=u(l);i=_(z,"H6",{class:!0});var X=u(i);a=_(X,"SPAN",{class:!0});var re=u(a);c=V(re,"svg",{class:!0,"aria-hidden":!0,role:!0,style:!0,preserveAspectRatio:!0,viewBox:!0});var fe=u(c);p=V(fe,"path",{d:!0}),u(p).forEach(n),fe.forEach(n),f=I(re),re.forEach(n),d=se(X,"Movies"),X.forEach(n),v=I(z),g=_(z,"DIV",{class:!0}),u(g).forEach(n),x=I(z),w=_(z,"UL",{class:!0});var G=u(w);for(let W=0;W<T.length;W+=1)T[W].l(G);G.forEach(n),z.forEach(n),h=I(k),E=_(k,"DIV",{class:!0});var b=u(E);M=_(b,"H6",{class:!0});var D=u(M);y=_(D,"SPAN",{class:!0});var ce=u(y);S=V(ce,"svg",{class:!0,"aria-hidden":!0,role:!0,style:!0,preserveAspectRatio:!0,viewBox:!0});var ae=u(S);P=V(ae,"path",{d:!0}),u(P).forEach(n),ae.forEach(n),O=I(ce),ce.forEach(n),q=se(D,"Tv"),D.forEach(n),j=I(b),F=_(b,"P",{class:!0}),u(F).forEach(n),L=I(b),H=_(b,"UL",{class:!0});var ve=u(H);for(let W=0;W<B.length;W+=1)B[W].l(ve);ve.forEach(n),b.forEach(n),k.forEach(n),Y.forEach(n),this.h()},h(){t(p,"d","M18 11c0-.959-.68-1.761-1.581-1.954C16.779 8.445 17 7.75 17 7c0-2.206-1.794-4-4-4-1.517 0-2.821.857-3.5 2.104C8.821 3.857 7.517 3 6 3 3.794 3 2 4.794 2 7c0 .902.312 1.727.817 2.396A1.994 1.994 0 0 0 2 11v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-2.638l4 2v-7l-4 2V11zm-5-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zM6 5c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zM4 19v-8h12l.002 8H4z"),t(c,"class","w-6 h-6 fill-base"),t(c,"aria-hidden","true"),t(c,"role","img"),be(c,"vertical-align","-0.125em"),t(c,"preserveAspectRatio","xMidYMid meet"),t(c,"viewBox","0 0 24 24"),t(a,"class","mr-2"),t(i,"class","flex flex-ruppercase text-skin-base"),t(g,"class","py-0.5 justify-center bg-skin-inverted"),t(w,"class","flex flex-col justify-center text-sm "),t(l,"class","flex flex-col p-1 m-1 bg-skin-secondary"),t(P,"d","M21 17H3V5h18m0-2H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5v2h8v-2h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"),t(S,"class","w-6 h-6 fill-base"),t(S,"aria-hidden","true"),t(S,"role","img"),be(S,"vertical-align","-0.125em"),t(S,"preserveAspectRatio","xMidYMid meet"),t(S,"viewBox","0 0 24 24"),t(y,"class","mr-2"),t(M,"class","flex flex-row uppercase text-skin-base"),t(F,"class","py-0.5 justify-center text-skin-base"),t(H,"class","flex flex-col justify-center text-sm"),t(E,"class","flex flex-col p-1 m-1 bg-skin-secondary"),t(s,"class","flex flex-row p-1"),t(e,"class","w-full bg-skin-primary")},m($,Y){R($,e,Y),o(e,s),o(s,l),o(l,i),o(i,a),o(a,c),o(c,p),o(a,f),o(i,d),o(l,v),o(l,g),o(l,x),o(l,w);for(let k=0;k<T.length;k+=1)T[k].m(w,null);o(s,h),o(s,E),o(E,M),o(M,y),o(y,S),o(S,P),o(y,O),o(M,q),o(E,j),o(E,F),o(E,L),o(E,H);for(let k=0;k<B.length;k+=1)B[k].m(H,null)},p($,[Y]){if(Y&7){C=$[0];let k;for(k=0;k<C.length;k+=1){const z=Ke($,C,k);T[k]?T[k].p(z,Y):(T[k]=Qe(z),T[k].c(),T[k].m(w,null))}for(;k<T.length;k+=1)T[k].d(1);T.length=C.length}if(Y&14){J=$[3];let k;for(k=0;k<J.length;k+=1){const z=We($,J,k);B[k]?B[k].p(z,Y):(B[k]=Xe(z),B[k].c(),B[k].m(H,null))}for(;k<B.length;k+=1)B[k].d(1);B.length=J.length}},i:he,o:he,d($){$&&n(e),Ce(T,$),Ce(B,$)}}}function Mt(r,e,s){let l,i,a,c;return Q(r,Ge,d=>s(0,l=d)),Q(r,xe,d=>s(1,i=d)),Q(r,we,d=>s(2,a=d)),Q(r,qe,d=>s(3,c=d)),[l,i,a,c,d=>{Me(xe,i=d.id,i),oe(`/genre/movie/${d.id}`)},d=>{Me(xe,i=d.id,i),oe(`/genre/tv/${d.id}`)}]}class yt extends ue{constructor(e){super();de(this,e,Mt,$t,ne,{})}}function Ze(r){let e,s,l,i,a,c,p,f,d,v,g,x,w;return x=new yt({}),{c(){e=m("div"),s=m("div"),l=m("button"),i=m("span"),a=A("svg"),c=A("path"),p=N(),f=m("span"),d=te("Genres"),v=N(),g=m("ul"),pe(x.$$.fragment),this.h()},l(h){e=_(h,"DIV",{class:!0});var E=u(e);s=_(E,"DIV",{class:!0});var M=u(s);l=_(M,"BUTTON",{"aria-label":!0,class:!0});var y=u(l);i=_(y,"SPAN",{});var S=u(i);a=V(S,"svg",{class:!0,"aria-hidden":!0,role:!0,preserveAspectRatio:!0,viewBox:!0});var P=u(a);c=V(P,"path",{d:!0}),u(c).forEach(n),P.forEach(n),S.forEach(n),p=I(y),f=_(y,"SPAN",{class:!0});var O=u(f);d=se(O,"Genres"),O.forEach(n),y.forEach(n),v=I(M),g=_(M,"UL",{class:!0});var q=u(g);me(x.$$.fragment,q),q.forEach(n),M.forEach(n),E.forEach(n),this.h()},h(){t(c,"d","M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"),t(a,"class","align-middle w-6 h-6 fill-inverted group-hover:fill-selected"),t(a,"aria-hidden","true"),t(a,"role","img"),t(a,"preserveAspectRatio","xMidYMid meet"),t(a,"viewBox","0 0 14 14"),t(f,"class","hidden mx-2 xl:block"),t(l,"aria-label","Genres"),t(l,"class","inline-flex items-center py-2 font-semibold rounded text-skin-inverted hover:text-skin-selected"),t(g,"class","fixed left-0 hidden rounded xl:absolute bg-skin-primary text-skin-base group-hover:block"),t(s,"class","relative z-50 inline-block group"),t(e,"class","pl-6 xl:pl-8 ")},m(h,E){R(h,e,E),o(e,s),o(s,l),o(l,i),o(i,a),o(a,c),o(l,p),o(l,f),o(f,d),o(s,v),o(s,g),_e(x,g,null),w=!0},i(h){w||(Z(x.$$.fragment,h),w=!0)},o(h){ee(x.$$.fragment,h),w=!1},d(h){h&&n(e),ge(x)}}}function Tt(r){let e,s,l,i,a,c,p,f,d,v,g,x,w,h,E,M,y,S,P,O,q,j,F,L,H,C,T,J,B,$,Y,k=r[1],z,X,re,fe,G=Ze();return{c(){e=m("div"),s=m("div"),l=m("button"),i=A("svg"),a=A("path"),c=N(),p=m("span"),f=te("Movies"),d=N(),v=m("div"),g=m("div"),x=m("button"),w=m("span"),h=A("svg"),E=A("path"),M=N(),y=m("span"),S=te("Tv"),P=N(),O=m("div"),q=m("div"),j=m("button"),F=m("span"),L=A("svg"),H=A("g"),C=A("circle"),T=A("path"),J=N(),B=m("span"),$=te("People"),Y=N(),G.c(),z=Ye(),this.h()},l(b){e=_(b,"DIV",{class:!0});var D=u(e);s=_(D,"DIV",{class:!0});var ce=u(s);l=_(ce,"BUTTON",{"aria-label":!0,class:!0});var ae=u(l);i=V(ae,"svg",{class:!0,"aria-hidden":!0,role:!0,style:!0,preserveAspectRatio:!0,viewBox:!0});var ve=u(i);a=V(ve,"path",{d:!0}),u(a).forEach(n),ve.forEach(n),c=I(ae),p=_(ae,"SPAN",{class:!0});var W=u(p);f=se(W,"Movies"),W.forEach(n),ae.forEach(n),ce.forEach(n),D.forEach(n),d=I(b),v=_(b,"DIV",{class:!0});var ye=u(v);g=_(ye,"DIV",{class:!0});var Te=u(g);x=_(Te,"BUTTON",{"aria-label":!0,class:!0});var ke=u(x);w=_(ke,"SPAN",{});var Ae=u(w);h=V(Ae,"svg",{class:!0,"aria-hidden":!0,role:!0,style:!0,preserveAspectRatio:!0,viewBox:!0});var Ve=u(h);E=V(Ve,"path",{d:!0}),u(E).forEach(n),Ve.forEach(n),Ae.forEach(n),M=I(ke),y=_(ke,"SPAN",{class:!0});var Be=u(y);S=se(Be,"Tv"),Be.forEach(n),ke.forEach(n),Te.forEach(n),ye.forEach(n),P=I(b),O=_(b,"DIV",{class:!0});var De=u(O);q=_(De,"DIV",{class:!0});var Ne=u(q);j=_(Ne,"BUTTON",{"aria-label":!0,class:!0});var Ee=u(j);F=_(Ee,"SPAN",{});var Ie=u(F);L=V(Ie,"svg",{class:!0,"aria-hidden":!0,role:!0,style:!0,preserveAspectRatio:!0,viewBox:!0});var Se=u(L);H=V(Se,"g",{fill:!0,"stroke-width":!0});var $e=u(H);C=V($e,"circle",{cx:!0,cy:!0,r:!0}),u(C).forEach(n),T=V($e,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),u(T).forEach(n),$e.forEach(n),Se.forEach(n),Ie.forEach(n),J=I(Ee),B=_(Ee,"SPAN",{class:!0});var ze=u(B);$=se(ze,"People"),ze.forEach(n),Ee.forEach(n),Ne.forEach(n),De.forEach(n),Y=I(b),G.l(b),z=Ye(),this.h()},h(){t(a,"d","M18 11c0-.959-.68-1.761-1.581-1.954C16.779 8.445 17 7.75 17 7c0-2.206-1.794-4-4-4-1.517 0-2.821.857-3.5 2.104C8.821 3.857 7.517 3 6 3 3.794 3 2 4.794 2 7c0 .902.312 1.727.817 2.396A1.994 1.994 0 0 0 2 11v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-2.638l4 2v-7l-4 2V11zm-5-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zM6 5c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zM4 19v-8h12l.002 8H4z"),t(i,"class","w-6 h-6 fill-inverted group-hover:fill-selected"),t(i,"aria-hidden","true"),t(i,"role","img"),be(i,"vertical-align","-0.125em"),t(i,"preserveAspectRatio","xMidYMid meet"),t(i,"viewBox","0 0 24 24"),U(i,"fill-selected",r[0]==="movie"),t(p,"class","hidden mx-2 xl:block"),t(l,"aria-label","Movies"),t(l,"class","inline-flex items-center py-2 font-semibold rounded text-skin-inverted hover:text-skin-selected"),U(l,"text-skin-selected",r[0]==="movie"),t(s,"class","relative z-50 inline-block group"),t(e,"class","pl-6 xl:pl-8 "),t(E,"d","M21 17H3V5h18m0-2H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5v2h8v-2h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"),t(h,"class","w-6 h-6 fill-inverted group-hover:fill-selected"),t(h,"aria-hidden","true"),t(h,"role","img"),be(h,"vertical-align","-0.125em"),t(h,"preserveAspectRatio","xMidYMid meet"),t(h,"viewBox","0 0 24 24"),U(h,"fill-selected",r[0]==="tv"),t(y,"class","hidden mx-2 xl:block"),t(x,"aria-label","TV Shows"),t(x,"class","inline-flex items-center py-2 font-semibold rounded text-skin-inverted hover:text-skin-selected"),U(x,"text-skin-selected",r[0]==="tv"),t(g,"class","relative z-50 inline-block group"),t(v,"class","pl-6 xl:pl-8 "),t(C,"cx","12"),t(C,"cy","7"),t(C,"r","5"),t(T,"stroke-linecap","round"),t(T,"stroke-linejoin","round"),t(T,"d","M17 14h.352a3 3 0 0 1 2.976 2.628l.391 3.124A2 2 0 0 1 18.734 22H5.266a2 2 0 0 1-1.985-2.248l.39-3.124A3 3 0 0 1 6.649 14H7"),t(H,"fill","none"),t(H,"stroke-width","2"),t(L,"class","w-6 h-6 stroke-inverted group-hover:stroke-selected"),t(L,"aria-hidden","true"),t(L,"role","img"),be(L,"vertical-align","-0.125em"),t(L,"preserveAspectRatio","xMidYMid meet"),t(L,"viewBox","0 0 24 24"),U(L,"stroke-selected",r[0]==="person"),t(B,"class","hidden mx-2 xl:block"),t(j,"aria-label","People"),t(j,"class","inline-flex items-center py-2 font-semibold rounded text-skin-inverted hover:text-skin-selected"),U(j,"text-skin-selected",r[0]==="person"),t(q,"class","relative z-50 inline-block group"),t(O,"class","pl-6 xl:pl-8 ")},m(b,D){R(b,e,D),o(e,s),o(s,l),o(l,i),o(i,a),o(l,c),o(l,p),o(p,f),R(b,d,D),R(b,v,D),o(v,g),o(g,x),o(x,w),o(w,h),o(h,E),o(x,M),o(x,y),o(y,S),R(b,P,D),R(b,O,D),o(O,q),o(q,j),o(j,F),o(F,L),o(L,H),o(H,C),o(H,T),o(j,J),o(j,B),o(B,$),R(b,Y,D),G.m(b,D),R(b,z,D),X=!0,re||(fe=[K(l,"click",ie(r[2])),K(x,"click",ie(r[3])),K(j,"click",ie(r[4]))],re=!0)},p(b,[D]){D&1&&U(i,"fill-selected",b[0]==="movie"),D&1&&U(l,"text-skin-selected",b[0]==="movie"),D&1&&U(h,"fill-selected",b[0]==="tv"),D&1&&U(x,"text-skin-selected",b[0]==="tv"),D&1&&U(L,"stroke-selected",b[0]==="person"),D&1&&U(j,"text-skin-selected",b[0]==="person"),D&2&&ne(k,k=b[1])&&(nt(),ee(G,1,1,he),it(),G=Ze(),G.c(),Z(G),G.m(z.parentNode,z))},i(b){X||(Z(G),X=!0)},o(b){ee(G),X=!1},d(b){b&&n(e),b&&n(d),b&&n(v),b&&n(P),b&&n(O),b&&n(Y),b&&n(z),G.d(b),re=!1,Ue(fe)}}}function At(r,e,s){let l,i;Q(r,we,f=>s(0,l=f)),Q(r,xe,f=>s(1,i=f));function a(){oe("/trending/movie")}function c(){oe("/trending/tv")}function p(){oe("/trending/person")}return[l,i,a,c,p]}class Vt extends ue{constructor(e){super();de(this,e,At,Tt,ne,{})}}function Bt(r){let e,s,l,i,a,c,p,f,d,v,g,x,w;return f=new Vt({}),v=new wt({}),{c(){e=m("header"),s=m("div"),l=m("div"),i=m("button"),a=A("svg"),c=A("path"),p=N(),pe(f.$$.fragment),d=N(),pe(v.$$.fragment),this.h()},l(h){e=_(h,"HEADER",{class:!0});var E=u(e);s=_(E,"DIV",{class:!0});var M=u(s);l=_(M,"DIV",{class:!0});var y=u(l);i=_(y,"BUTTON",{"aria-label":!0,class:!0,href:!0});var S=u(i);a=V(S,"svg",{class:!0,"aria-hidden":!0,role:!0,preserveAspectRatio:!0,viewBox:!0});var P=u(a);c=V(P,"path",{d:!0}),u(c).forEach(n),P.forEach(n),S.forEach(n),p=I(y),me(f.$$.fragment,y),y.forEach(n),d=I(M),me(v.$$.fragment,M),M.forEach(n),E.forEach(n),this.h()},h(){t(c,"d","M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"),t(a,"class","w-8 h-8 fill-inverted hover:fill-selected"),t(a,"aria-hidden","true"),t(a,"role","img"),t(a,"preserveAspectRatio","xMidYMid meet"),t(a,"viewBox","0 0 576 512"),t(i,"aria-label","home"),t(i,"class","text-3xl text-skin-inverted hover:text-skin-selected"),t(i,"href","/"),t(l,"class","flex flex-row items-center"),t(s,"class","flex items-center justify-between h-12 pl-2 pr-1 mx-auto max-w-7xl md:pl-5 lg:pl-7 "),t(e,"class","fixed top-0 z-50 w-full h-12 bg-skin-primary")},m(h,E){R(h,e,E),o(e,s),o(s,l),o(l,i),o(i,a),o(a,c),o(l,p),_e(f,l,null),o(s,d),_e(v,s,null),g=!0,x||(w=K(i,"click",ie(r[0])),x=!0)},p:he,i(h){g||(Z(f.$$.fragment,h),Z(v.$$.fragment,h),g=!0)},o(h){ee(f.$$.fragment,h),ee(v.$$.fragment,h),g=!1},d(h){h&&n(e),ge(f),ge(v),x=!1,w()}}}function Dt(r,e,s){let l;Q(r,we,a=>s(1,l=a));function i(){Me(we,l="movie",l),oe("/")}return[i]}class Nt extends ue{constructor(e){super();de(this,e,Dt,Bt,ne,{})}}function It(r){let e,s,l,i,a,c,p,f,d,v,g;f=new Nt({});const x=r[2].default,w=ot(x,r,r[1],null);return{c(){e=m("meta"),s=m("meta"),l=m("meta"),i=N(),a=m("main"),c=m("div"),p=N(),pe(f.$$.fragment),d=N(),v=m("section"),w&&w.c(),this.h()},l(h){const E=ct('[data-svelte="svelte-mhgiy0"]',document.head);e=_(E,"META",{name:!0,content:!0}),s=_(E,"META",{name:!0,content:!0}),l=_(E,"META",{name:!0,content:!0}),E.forEach(n),i=I(h),a=_(h,"MAIN",{class:!0});var M=u(a);c=_(M,"DIV",{class:!0}),u(c).forEach(n),p=I(M),me(f.$$.fragment,M),d=I(M),v=_(M,"SECTION",{class:!0});var y=u(v);w&&w.l(y),y.forEach(n),M.forEach(n),this.h()},h(){document.title="TMDB on Sveltekit",t(e,"name","description"),t(e,"content","TMDB movie & tv database"),t(s,"name","keywords"),t(s,"content","HTML, CSS, JavaScript, svelte"),t(l,"name","author"),t(l,"content","Wayne Morgan"),t(c,"class","fixed top-0 w-full min-h-screen -z-50 bg-gradient-to-r from-skin-bg to-skin-border"),t(v,"class","mx-auto mt-[60px] max-w-7xl"),t(a,"class",r[0])},m(h,E){o(document.head,e),o(document.head,s),o(document.head,l),R(h,i,E),R(h,a,E),o(a,c),o(a,p),_e(f,a,null),o(a,d),o(a,v),w&&w.m(v,null),g=!0},p(h,[E]){w&&w.p&&(!g||E&2)&&ut(w,x,h,h[1],g?ht(x,h[1],E,null):dt(h[1]),null),(!g||E&1)&&t(a,"class",h[0])},i(h){g||(Z(f.$$.fragment,h),Z(w,h),g=!0)},o(h){ee(f.$$.fragment,h),ee(w,h),g=!1},d(h){n(e),n(s),n(l),h&&n(i),h&&n(a),ge(f),w&&w.d(h)}}}async function Ht({fetch:r}){try{const e=await(await r("/api/getTvGenres")).json();qe.set(e.tv_genres);const s=await(await r("/api/getMovieGenres")).json();return Ge.set(s.movie_genres),{}}catch(e){console.log("error",e)}}function St(r,e,s){let l;Q(r,Je,c=>s(0,l=c));let{$$slots:i={},$$scope:a}=e;return r.$$set=c=>{"$$scope"in c&&s(1,a=c.$$scope)},[l,a,i]}class Ut extends ue{constructor(e){super();de(this,e,St,It,ne,{})}}export{Ut as default,Ht as load};