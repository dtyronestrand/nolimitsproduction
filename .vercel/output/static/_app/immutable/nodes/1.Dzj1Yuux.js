import{s as x,n as u,c as S}from"../chunks/scheduler.Bd309piK.js";import{S as j,i as q,d as c,s as h,a as _,b as d,c as v,e as g,f as b,g as y,h as E,t as $,j as C}from"../chunks/index.c4LMZ8Tz.js";import{p as H}from"../chunks/stores.BFl9xJLf.js";function P(p){var f;let a,s=p[0].status+"",r,o,n,i=((f=p[0].error)==null?void 0:f.message)+"",m;return{c(){a=E("h1"),r=$(s),o=C(),n=E("p"),m=$(i)},l(e){a=v(e,"H1",{});var t=g(a);r=b(t,s),t.forEach(c),o=y(e),n=v(e,"P",{});var l=g(n);m=b(l,i),l.forEach(c)},m(e,t){_(e,a,t),d(a,r),_(e,o,t),_(e,n,t),d(n,m)},p(e,[t]){var l;t&1&&s!==(s=e[0].status+"")&&h(r,s),t&1&&i!==(i=((l=e[0].error)==null?void 0:l.message)+"")&&h(m,i)},i:u,o:u,d(e){e&&(c(a),c(o),c(n))}}}function k(p,a,s){let r;return S(p,H,o=>s(0,r=o)),[r]}class B extends j{constructor(a){super(),q(this,a,k,P,x,{})}}export{B as component};
