import{S as F,i as Q,s as R,e as g,k as O,t as U,j as A,c as p,a as v,n as j,g as Y,d as _,m as H,b as u,O as oe,f as N,D as d,o as G,h as ae,x as b,u as k,v as L,L as Z,l as ee,H as B,K as me,r as te,w as re,M as ve,V as Ve,A as Te,W as Ce,X as Ne,N as ge}from"./vendor-fc6286ba.js";import{a as he,d as _e,b as be,c as pe}from"./store-07881416.js";import{P as we}from"./ProgressBar-f61e37f1.js";function Pe(a){let t,r,e,l,c,s,o,n,i,f=a[0].title+"",h,$,w,D=(a[0].release_date?a[0].release_date.substring(0,4):"-")+"",P,z,M,y,le,E,V,se,ne,T,q=a[0].overview+"",J,K,I;return y=new we({props:{progress:a[0].vote_average}}),{c(){t=g("section"),r=g("div"),e=g("div"),l=g("img"),o=O(),n=g("div"),i=g("h6"),h=U(f),$=O(),w=g("h6"),P=U(D),z=O(),M=g("div"),A(y.$$.fragment),le=O(),E=g("a"),V=g("h6"),se=U("Overview"),ne=O(),T=g("p"),J=U(q),this.h()},l(m){t=p(m,"SECTION",{id:!0,class:!0});var x=v(t);r=p(x,"DIV",{class:!0});var S=v(r);e=p(S,"DIV",{class:!0});var C=v(e);l=p(C,"IMG",{class:!0,src:!0,alt:!0}),o=j(C),n=p(C,"DIV",{class:!0});var W=v(n);i=p(W,"H6",{class:!0});var ie=v(i);h=Y(ie,f),ie.forEach(_),$=j(W),w=p(W,"H6",{class:!0});var ce=v(w);P=Y(ce,D),ce.forEach(_),W.forEach(_),z=j(C),M=p(C,"DIV",{class:!0});var ue=v(M);H(y.$$.fragment,ue),ue.forEach(_),C.forEach(_),le=j(S),E=p(S,"A",{class:!0,href:!0});var X=v(E);V=p(X,"H6",{class:!0});var fe=v(V);se=Y(fe,"Overview"),fe.forEach(_),ne=j(X),T=p(X,"P",{class:!0});var de=v(T);J=Y(de,q),de.forEach(_),X.forEach(_),S.forEach(_),x.forEach(_),this.h()},h(){u(l,"class","oject-cover w-44 h-64 xl:w-60 xl:h-90 xl:rounded-t-lg text-skin-muted "),oe(l.src,c=a[0].poster_path?ke+a[0].poster_path:"/default.jpg")||u(l,"src",c),u(l,"alt",s=a[0].title),u(i,"class","text-sm xl:text-lg text-skin-base w-40 xl:w-52 whitespace-nowrap overflow-hidden overflow-ellipsis"),u(w,"class","xl:text-lg font-bold"),u(n,"class","p-2 xl:ml-4"),u(M,"class","transform scale-44 origin-top-left absolute left-1 top-56 xl:top-80"),u(e,"class","backface-hidden top-0 right-0 text-skin-base bg-skin-bg xl:rounded-lg"),u(V,"class","mt-1 xl:text-xl uppercase text-skin-base bg-secondary rounded"),u(T,"class","md:text-base mt-1"),u(E,"class","w-full backface-hidden text-skin-base top-0 right-0 bg-skin-bg rounded-lg absolute bottom-0 text-decoration-none rotate-y-180 p-2 h-full ease-in-out movie-back text-sm overflow-auto duration-300 z-10"),u(E,"href",K=`/${a[1]}/${a[0].id}`),u(r,"class","relative preserve-3d w-full duration-700 group-hover:rotate-y-180"),u(t,"id","movie-card"),u(t,"class","group perspective-1000 w-44 xl:w-60 my-0.5 xl:my-2 xl:rounded-lg")},m(m,x){N(m,t,x),d(t,r),d(r,e),d(e,l),d(e,o),d(e,n),d(n,i),d(i,h),d(n,$),d(n,w),d(w,P),d(e,z),d(e,M),G(y,M,null),d(r,le),d(r,E),d(E,V),d(V,se),d(E,ne),d(E,T),d(T,J),I=!0},p(m,[x]){(!I||x&1&&!oe(l.src,c=m[0].poster_path?ke+m[0].poster_path:"/default.jpg"))&&u(l,"src",c),(!I||x&1&&s!==(s=m[0].title))&&u(l,"alt",s),(!I||x&1)&&f!==(f=m[0].title+"")&&ae(h,f),(!I||x&1)&&D!==(D=(m[0].release_date?m[0].release_date.substring(0,4):"-")+"")&&ae(P,D);const S={};x&1&&(S.progress=m[0].vote_average),y.$set(S),(!I||x&1)&&q!==(q=m[0].overview+"")&&ae(J,q),(!I||x&3&&K!==(K=`/${m[1]}/${m[0].id}`))&&u(E,"href",K)},i(m){I||(b(y.$$.fragment,m),I=!0)},o(m){k(y.$$.fragment,m),I=!1},d(m){m&&_(t),L(y)}}}const ke="https://image.tmdb.org/t/p/w300";function Ae(a,t,r){let e;Z(a,he,c=>r(1,e=c));let{datum:l}=t;return a.$$set=c=>{"datum"in c&&r(0,l=c.datum)},[l,e]}class He extends F{constructor(t){super();Q(this,t,Ae,Pe,R,{datum:0})}}function Ge(a,t,r){const e=a.slice();return e[0]=t[r],e}function Le(a){let t,r,e,l,c,s,o,n,i;return{c(){t=g("section"),r=g("div"),e=g("div"),l=O(),c=g("div"),s=g("div"),o=O(),n=g("div"),i=O(),this.h()},l(f){t=p(f,"SECTION",{id:!0,class:!0});var h=v(t);r=p(h,"DIV",{class:!0});var $=v(r);e=p($,"DIV",{class:!0}),v(e).forEach(_),l=j($),c=p($,"DIV",{class:!0});var w=v(c);s=p(w,"DIV",{class:!0}),v(s).forEach(_),o=j(w),n=p(w,"DIV",{class:!0}),v(n).forEach(_),w.forEach(_),$.forEach(_),i=j(h),h.forEach(_),this.h()},h(){u(e,"class","w-44 h-64 xl:w-60 xl:h-90 xl:rounded-t-lg bg-skin-muted"),u(s,"class","w-28 xl:w-40 h-5 bg-skin-muted rounded"),u(n,"class","mt-2 w-20 xl:w-26 h-5 bg-skin-muted rounded"),u(c,"class","py-4 xl:ml-6 h-18 w-44 xl:w-60"),u(r,"class","top-0 right-0 text-textDark bg-skin-bg xl:rounded-lg"),u(t,"id","movie-card"),u(t,"class","w-44 xl:h-108 xl:w-60 my-0.5 xl:my-2 xl:rounded-lg")},m(f,h){N(f,t,h),d(t,r),d(r,e),d(r,l),d(r,c),d(c,s),d(c,o),d(c,n),d(t,i)},d(f){f&&_(t)}}}function Be(a){let t,r=Array(20),e=[];for(let l=0;l<r.length;l+=1)e[l]=Le(Ge(a,r,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=ee()},l(l){for(let c=0;c<e.length;c+=1)e[c].l(l);t=ee()},m(l,c){for(let s=0;s<e.length;s+=1)e[s].m(l,c);N(l,t,c)},p:B,i:B,o:B,d(l){me(e,l),l&&_(t)}}}class $e extends F{constructor(t){super();Q(this,t,null,Be,R,{})}}function xe(a,t,r){const e=a.slice();return e[1]=t[r],e}function qe(a){let t,r;return t=new $e({}),{c(){A(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,l){G(t,e,l),r=!0},p:B,i(e){r||(b(t.$$.fragment,e),r=!0)},o(e){k(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function ze(a){let t,r,e=a[0],l=[];for(let s=0;s<e.length;s+=1)l[s]=Ee(xe(a,e,s));const c=s=>k(l[s],1,1,()=>{l[s]=null});return{c(){for(let s=0;s<l.length;s+=1)l[s].c();t=ee()},l(s){for(let o=0;o<l.length;o+=1)l[o].l(s);t=ee()},m(s,o){for(let n=0;n<l.length;n+=1)l[n].m(s,o);N(s,t,o),r=!0},p(s,o){if(o&1){e=s[0];let n;for(n=0;n<e.length;n+=1){const i=xe(s,e,n);l[n]?(l[n].p(i,o),b(l[n],1)):(l[n]=Ee(i),l[n].c(),b(l[n],1),l[n].m(t.parentNode,t))}for(te(),n=e.length;n<l.length;n+=1)c(n);re()}},i(s){if(!r){for(let o=0;o<e.length;o+=1)b(l[o]);r=!0}},o(s){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)k(l[o]);r=!1},d(s){me(l,s),s&&_(t)}}}function Ee(a){let t,r;return t=new He({props:{datum:a[1]}}),{c(){A(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,l){G(t,e,l),r=!0},p(e,l){const c={};l&1&&(c.datum=e[1]),t.$set(c)},i(e){r||(b(t.$$.fragment,e),r=!0)},o(e){k(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function Je(a){let t,r,e,l;const c=[ze,qe],s=[];function o(n,i){return n[0]?0:1}return r=o(a),e=s[r]=c[r](a),{c(){t=g("section"),e.c(),this.h()},l(n){t=p(n,"SECTION",{id:!0,class:!0});var i=v(t);e.l(i),i.forEach(_),this.h()},h(){u(t,"id","movie-list"),u(t,"class","bg-skin-tertiary flex flex-wrap justify-around max-w-7xl mx-auto xl:mt-2 xl:rounded-2xl")},m(n,i){N(n,t,i),s[r].m(t,null),l=!0},p(n,[i]){let f=r;r=o(n),r===f?s[r].p(n,i):(te(),k(s[f],1,1,()=>{s[f]=null}),re(),e=s[r],e?e.p(n,i):(e=s[r]=c[r](n),e.c()),b(e,1),e.m(t,null))},i(n){l||(b(e),l=!0)},o(n){k(e),l=!1},d(n){n&&_(t),s[r].d()}}}function Ke(a,t,r){let e;return Z(a,_e,l=>r(0,e=l)),[e]}class We extends F{constructor(t){super();Q(this,t,Ke,Je,R,{})}}function Xe(a){let t,r,e,l,c,s,o,n,i,f=(a[0].name?a[0].name:" ")+"",h,$,w,D=(a[0].first_air_date?a[0].first_air_date.substring(0,4):"-")+"",P,z,M,y,le,E,V,se,ne,T,q=a[0].overview+"",J,K,I;return y=new we({props:{progress:a[0].vote_average}}),{c(){t=g("section"),r=g("div"),e=g("div"),l=g("img"),o=O(),n=g("div"),i=g("h6"),h=U(f),$=O(),w=g("h6"),P=U(D),z=O(),M=g("div"),A(y.$$.fragment),le=O(),E=g("a"),V=g("h6"),se=U("Overview"),ne=O(),T=g("p"),J=U(q),this.h()},l(m){t=p(m,"SECTION",{id:!0,class:!0});var x=v(t);r=p(x,"DIV",{class:!0});var S=v(r);e=p(S,"DIV",{class:!0});var C=v(e);l=p(C,"IMG",{class:!0,src:!0,alt:!0}),o=j(C),n=p(C,"DIV",{class:!0});var W=v(n);i=p(W,"H6",{class:!0});var ie=v(i);h=Y(ie,f),ie.forEach(_),$=j(W),w=p(W,"H6",{class:!0});var ce=v(w);P=Y(ce,D),ce.forEach(_),W.forEach(_),z=j(C),M=p(C,"DIV",{class:!0});var ue=v(M);H(y.$$.fragment,ue),ue.forEach(_),C.forEach(_),le=j(S),E=p(S,"A",{class:!0,href:!0});var X=v(E);V=p(X,"H6",{class:!0});var fe=v(V);se=Y(fe,"Overview"),fe.forEach(_),ne=j(X),T=p(X,"P",{class:!0});var de=v(T);J=Y(de,q),de.forEach(_),X.forEach(_),S.forEach(_),x.forEach(_),this.h()},h(){u(l,"class","oject-cover w-44 h-64 xl:w-60 xl:h-90 xl:rounded-t-lg text-skin-muted "),oe(l.src,c=a[0].poster_path?Ie+a[0].poster_path:"/default.jpg")||u(l,"src",c),u(l,"alt",s=a[0].name),u(i,"class","text-sm xl:text-lg text-skin-base w-40 xl:w-52 whitespace-nowrap overflow-hidden overflow-ellipsis"),u(w,"class","xl:text-lg font-bold"),u(n,"class","p-2 xl:ml-4"),u(M,"class","transform scale-44 origin-top-left absolute left-1 top-56 xl:top-80"),u(e,"class","backface-hidden top-0 right-0 text-skin-base bg-skin-bg xl:rounded-lg"),u(V,"class","mt-1 xl:text-xl uppercase text-skin-base bg-secondary rounded"),u(T,"class","md:text-base mt-1"),u(E,"class","w-full backface-hidden text-skin-base top-0 right-0 bg-skin-bg rounded-lg absolute bottom-0 text-decoration-none rotate-y-180 p-2 h-full ease-in-out movie-back text-sm overflow-auto duration-300 z-10"),u(E,"href",K=`/${a[1]}/${a[0].id}`),u(r,"class","relative preserve-3d w-full duration-700 group-hover:rotate-y-180"),u(t,"id","tv-card"),u(t,"class","group perspective-1000 w-44 xl:w-60 my-0.5 xl:my-2 xl:rounded-lg")},m(m,x){N(m,t,x),d(t,r),d(r,e),d(e,l),d(e,o),d(e,n),d(n,i),d(i,h),d(n,$),d(n,w),d(w,P),d(e,z),d(e,M),G(y,M,null),d(r,le),d(r,E),d(E,V),d(V,se),d(E,ne),d(E,T),d(T,J),I=!0},p(m,[x]){(!I||x&1&&!oe(l.src,c=m[0].poster_path?Ie+m[0].poster_path:"/default.jpg"))&&u(l,"src",c),(!I||x&1&&s!==(s=m[0].name))&&u(l,"alt",s),(!I||x&1)&&f!==(f=(m[0].name?m[0].name:" ")+"")&&ae(h,f),(!I||x&1)&&D!==(D=(m[0].first_air_date?m[0].first_air_date.substring(0,4):"-")+"")&&ae(P,D);const S={};x&1&&(S.progress=m[0].vote_average),y.$set(S),(!I||x&1)&&q!==(q=m[0].overview+"")&&ae(J,q),(!I||x&3&&K!==(K=`/${m[1]}/${m[0].id}`))&&u(E,"href",K)},i(m){I||(b(y.$$.fragment,m),I=!0)},o(m){k(y.$$.fragment,m),I=!1},d(m){m&&_(t),L(y)}}}const Ie="https://image.tmdb.org/t/p/w300";function Fe(a,t,r){let e,l;Z(a,be,s=>r(2,e=s)),Z(a,he,s=>r(1,l=s));let{datum:c}=t;return ve(be,e=c.name,e),a.$$set=s=>{"datum"in s&&r(0,c=s.datum)},[c,l]}class Qe extends F{constructor(t){super();Q(this,t,Fe,Xe,R,{datum:0})}}function ye(a,t,r){const e=a.slice();return e[1]=t[r],e}function Re(a){let t,r;return t=new $e({}),{c(){A(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,l){G(t,e,l),r=!0},p:B,i(e){r||(b(t.$$.fragment,e),r=!0)},o(e){k(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function Ue(a){let t,r,e=a[0],l=[];for(let s=0;s<e.length;s+=1)l[s]=De(ye(a,e,s));const c=s=>k(l[s],1,1,()=>{l[s]=null});return{c(){for(let s=0;s<l.length;s+=1)l[s].c();t=ee()},l(s){for(let o=0;o<l.length;o+=1)l[o].l(s);t=ee()},m(s,o){for(let n=0;n<l.length;n+=1)l[n].m(s,o);N(s,t,o),r=!0},p(s,o){if(o&1){e=s[0];let n;for(n=0;n<e.length;n+=1){const i=ye(s,e,n);l[n]?(l[n].p(i,o),b(l[n],1)):(l[n]=De(i),l[n].c(),b(l[n],1),l[n].m(t.parentNode,t))}for(te(),n=e.length;n<l.length;n+=1)c(n);re()}},i(s){if(!r){for(let o=0;o<e.length;o+=1)b(l[o]);r=!0}},o(s){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)k(l[o]);r=!1},d(s){me(l,s),s&&_(t)}}}function De(a){let t,r;return t=new Qe({props:{datum:a[1]}}),{c(){A(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,l){G(t,e,l),r=!0},p(e,l){const c={};l&1&&(c.datum=e[1]),t.$set(c)},i(e){r||(b(t.$$.fragment,e),r=!0)},o(e){k(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function Ye(a){let t,r,e,l;const c=[Ue,Re],s=[];function o(n,i){return n[0]?0:1}return r=o(a),e=s[r]=c[r](a),{c(){t=g("section"),e.c(),this.h()},l(n){t=p(n,"SECTION",{id:!0,class:!0});var i=v(t);e.l(i),i.forEach(_),this.h()},h(){u(t,"id","movie-list"),u(t,"class","bg-skin-tertiary flex flex-wrap justify-around max-w-7xl mx-auto xl:mt-2 xl:rounded-2xl")},m(n,i){N(n,t,i),s[r].m(t,null),l=!0},p(n,[i]){let f=r;r=o(n),r===f?s[r].p(n,i):(te(),k(s[f],1,1,()=>{s[f]=null}),re(),e=s[r],e?e.p(n,i):(e=s[r]=c[r](n),e.c()),b(e,1),e.m(t,null))},i(n){l||(b(e),l=!0)},o(n){k(e),l=!1},d(n){n&&_(t),s[r].d()}}}function Ze(a,t,r){let e;return Z(a,_e,l=>r(0,e=l)),[e]}class et extends F{constructor(t){super();Q(this,t,Ze,Ye,R,{})}}function tt(a){let t,r,e,l,c,s,o,n,i=a[0].name+"",f,h;return{c(){t=g("section"),r=g("a"),e=g("img"),s=O(),o=g("div"),n=g("h6"),f=U(i),this.h()},l($){t=p($,"SECTION",{id:!0,class:!0});var w=v(t);r=p(w,"A",{href:!0,class:!0});var D=v(r);e=p(D,"IMG",{class:!0,src:!0,alt:!0}),s=j(D),o=p(D,"DIV",{class:!0});var P=v(o);n=p(P,"H6",{class:!0});var z=v(n);f=Y(z,i),z.forEach(_),P.forEach(_),D.forEach(_),w.forEach(_),this.h()},h(){u(e,"class","oject-cover w-44 h-64 xl:w-60 xl:h-90 xl:rounded-t-lg text-skin-base"),oe(e.src,l=a[0].profile_path===null?"/person.svg":Se+a[0].profile_path)||u(e,"src",l),u(e,"alt",c=a[0].name),u(n,"class","text-sm xl:text-lg text-textDark w-40 xl:w-52 whitespace-nowrap overflow-hidden overflow-ellipsis"),u(o,"class","p-2 h-18 w-44 xl:w-60 bg-skin-bg"),u(r,"href",h=`/person/${a[0].id}`),u(r,"class","top-0 right-0 text-skin-base xl:rounded-lg"),u(t,"id","person-card"),u(t,"class","w-44 xl:h-108 xl:w-60 my-0.5 xl:my-2 bg-skin-bg xl:rounded-lg")},m($,w){N($,t,w),d(t,r),d(r,e),d(r,s),d(r,o),d(o,n),d(n,f)},p($,[w]){w&1&&!oe(e.src,l=$[0].profile_path===null?"/person.svg":Se+$[0].profile_path)&&u(e,"src",l),w&1&&c!==(c=$[0].name)&&u(e,"alt",c),w&1&&i!==(i=$[0].name+"")&&ae(f,i),w&1&&h!==(h=`/person/${$[0].id}`)&&u(r,"href",h)},i:B,o:B,d($){$&&_(t)}}}const Se="https://image.tmdb.org/t/p/w500";function rt(a,t,r){let{datum:e}=t;return a.$$set=l=>{"datum"in l&&r(0,e=l.datum)},[e]}class lt extends F{constructor(t){super();Q(this,t,rt,tt,R,{datum:0})}}function Oe(a,t,r){const e=a.slice();return e[1]=t[r],e}function st(a){let t,r;return t=new $e({}),{c(){A(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,l){G(t,e,l),r=!0},p:B,i(e){r||(b(t.$$.fragment,e),r=!0)},o(e){k(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function nt(a){let t,r,e=a[0],l=[];for(let s=0;s<e.length;s+=1)l[s]=je(Oe(a,e,s));const c=s=>k(l[s],1,1,()=>{l[s]=null});return{c(){for(let s=0;s<l.length;s+=1)l[s].c();t=ee()},l(s){for(let o=0;o<l.length;o+=1)l[o].l(s);t=ee()},m(s,o){for(let n=0;n<l.length;n+=1)l[n].m(s,o);N(s,t,o),r=!0},p(s,o){if(o&1){e=s[0];let n;for(n=0;n<e.length;n+=1){const i=Oe(s,e,n);l[n]?(l[n].p(i,o),b(l[n],1)):(l[n]=je(i),l[n].c(),b(l[n],1),l[n].m(t.parentNode,t))}for(te(),n=e.length;n<l.length;n+=1)c(n);re()}},i(s){if(!r){for(let o=0;o<e.length;o+=1)b(l[o]);r=!0}},o(s){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)k(l[o]);r=!1},d(s){me(l,s),s&&_(t)}}}function je(a){let t,r;return t=new lt({props:{datum:a[1]}}),{c(){A(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,l){G(t,e,l),r=!0},p(e,l){const c={};l&1&&(c.datum=e[1]),t.$set(c)},i(e){r||(b(t.$$.fragment,e),r=!0)},o(e){k(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function at(a){let t,r,e,l;const c=[nt,st],s=[];function o(n,i){return n[0]?0:1}return r=o(a),e=s[r]=c[r](a),{c(){t=g("section"),e.c(),this.h()},l(n){t=p(n,"SECTION",{id:!0,class:!0});var i=v(t);e.l(i),i.forEach(_),this.h()},h(){u(t,"id","person-list"),u(t,"class","bg-skin-tertiary flex flex-wrap justify-around max-w-7xl xl:mt-2 mx-auto xl:rounded-2xl")},m(n,i){N(n,t,i),s[r].m(t,null),l=!0},p(n,[i]){let f=r;r=o(n),r===f?s[r].p(n,i):(te(),k(s[f],1,1,()=>{s[f]=null}),re(),e=s[r],e?e.p(n,i):(e=s[r]=c[r](n),e.c()),b(e,1),e.m(t,null))},i(n){l||(b(e),l=!0)},o(n){k(e),l=!1},d(n){n&&_(t),s[r].d()}}}function ot(a,t,r){let e;return Z(a,_e,l=>r(0,e=l)),[e]}class it extends F{constructor(t){super();Q(this,t,ot,at,R,{})}}function ct(a){let t;return{c(){t=g("div"),this.h()},l(r){t=p(r,"DIV",{id:!0,class:!0}),v(t).forEach(_),this.h()},h(){u(t,"id","svelte-infinite-scroll"),u(t,"class","w-0")},m(r,e){N(r,t,e),a[2](t)},p:B,i:B,o:B,d(r){r&&_(t),a[2](null)}}}function ut(a,t,r){const e=Ve();let l=!1,c,s;Te(()=>{r(1,s=document)});const o=f=>{n(f)<=450?(l||e("loadMore"),l=!0):l=!1},n=f=>{const $=f.target.documentElement;return $.scrollHeight-$.clientHeight-$.scrollTop};Ce(()=>{s&&s.removeEventListener("scroll",o)});function i(f){Ne[f?"unshift":"push"](()=>{c=f,r(0,c)})}return a.$$.update=()=>{a.$$.dirty&2&&s&&s.addEventListener("scroll",o)},[c,s,i]}class ft extends F{constructor(t){super();Q(this,t,ut,ct,R,{})}}function dt(a){let t,r;return t=new et({}),{c(){A(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,l){G(t,e,l),r=!0},i(e){r||(b(t.$$.fragment,e),r=!0)},o(e){k(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function ht(a){let t,r;return t=new We({}),{c(){A(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,l){G(t,e,l),r=!0},i(e){r||(b(t.$$.fragment,e),r=!0)},o(e){k(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function _t(a){let t,r;return t=new it({}),{c(){A(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,l){G(t,e,l),r=!0},i(e){r||(b(t.$$.fragment,e),r=!0)},o(e){k(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function Me(a){let t,r;return t=new ft({}),t.$on("loadMore",a[5]),{c(){A(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,l){G(t,e,l),r=!0},p:B,i(e){r||(b(t.$$.fragment,e),r=!0)},o(e){k(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function mt(a){let t,r,e,l,c;const s=[_t,ht,dt],o=[];function n(f,h){return f[2]==="person"?0:f[2]==="movie"?1:f[2]==="tv"?2:-1}~(r=n(a))&&(e=o[r]=s[r](a));let i=a[1]<a[0]&&Me(a);return{c(){t=g("section"),e&&e.c(),l=O(),i&&i.c(),this.h()},l(f){t=p(f,"SECTION",{id:!0,class:!0});var h=v(t);e&&e.l(h),l=j(h),i&&i.l(h),h.forEach(_),this.h()},h(){u(t,"id","main"),u(t,"class","h-full")},m(f,h){N(f,t,h),~r&&o[r].m(t,null),d(t,l),i&&i.m(t,null),c=!0},p(f,[h]){let $=r;r=n(f),r!==$&&(e&&(te(),k(o[$],1,1,()=>{o[$]=null}),re()),~r?(e=o[r],e||(e=o[r]=s[r](f),e.c()),b(e,1),e.m(t,l)):e=null),f[1]<f[0]?i?(i.p(f,h),h&3&&b(i,1)):(i=Me(f),i.c(),b(i,1),i.m(t,null)):i&&(te(),k(i,1,1,()=>{i=null}),re())},i(f){c||(b(e),b(i),c=!0)},o(f){k(e),k(i),c=!1},d(f){f&&_(t),~r&&o[r].d(),i&&i.d()}}}function gt(a,t,r){let e,l,c;Z(a,pe,h=>r(1,e=h)),Z(a,_e,h=>r(6,l=h)),Z(a,he,h=>r(2,c=h));let{total_pages:s=1}=t,{genres:o=void 0}=t;async function n(){let h;o===void 0?h=await fetch("../api/getShow",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({media:ge(he),page:ge(pe)})}):h=await fetch("../../api/getShowGenre",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({media:ge(he),page:ge(pe),genre:o})});const w=(await h.json()).res.results;ve(_e,l=[...l,...w],l)}function i(){ve(pe,e++,e),n()}const f=()=>i();return a.$$set=h=>{"total_pages"in h&&r(0,s=h.total_pages),"genres"in h&&r(4,o=h.genres)},[s,e,c,i,o,f]}class bt extends F{constructor(t){super();Q(this,t,gt,mt,R,{total_pages:0,genres:4})}}export{bt as M};