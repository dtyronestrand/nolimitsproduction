import{s as te,r as ie,n as Z,a as le,i as ue}from"../chunks/scheduler.Bd309piK.js";import{S as se,i as re,d as y,a as j,q as r,c as h,v as B,h as p,s as ne,b as o,e as I,f as ae,t as oe,r as T,u as K,g as E,j as P,k as de,l as fe,m as me,n as ce,o as he,p as pe}from"../chunks/index.c4LMZ8Tz.js";import{e as ge}from"../chunks/forms.ev7ACqbp.js";import{b as _e}from"../chunks/entry.CMTg7ftV.js";function $(n){let t,e="Passwords do not match";return{c(){t=p("p"),t.textContent=e,this.h()},l(s){t=h(s,"P",{class:!0,"data-svelte-h":!0}),B(t)!=="svelte-tv2atc"&&(t.textContent=e),this.h()},h(){r(t,"class","text-red-500 text-sm mt-1")},m(s,a){j(s,t,a)},d(s){s&&y(t)}}}function ee(n){let t,e=n[0].error+"",s;return{c(){t=p("div"),s=oe(e),this.h()},l(a){t=h(a,"DIV",{class:!0});var m=I(t);s=ae(m,e),m.forEach(y),this.h()},h(){r(t,"class","text-red-500 text-sm")},m(a,m){j(a,t,m),o(t,s)},p(a,m){m&1&&e!==(e=a[0].error+"")&&ne(s,e)},d(a){a&&y(t)}}}function ve(n){var X;let t,e,s,a,m="Email",c,i,u,g,d,M="Password",V,f,F,C,L,Q="Confirm Password",H,b,z,G,N,k,q=n[4]?"Loading...":"Register",O,R,U,J,W,v=n[2]&&!n[5]&&$(),_=((X=n[0])==null?void 0:X.error)&&ee(n);return{c(){t=p("div"),e=p("form"),s=p("div"),a=p("label"),a.textContent=m,c=P(),i=p("input"),u=P(),g=p("div"),d=p("label"),d.textContent=M,V=P(),f=p("input"),F=P(),C=p("div"),L=p("label"),L.textContent=Q,H=P(),b=p("input"),z=P(),v&&v.c(),G=P(),_&&_.c(),N=P(),k=p("button"),O=oe(q),this.h()},l(l){t=h(l,"DIV",{class:!0});var x=I(t);e=h(x,"FORM",{method:!0,action:!0,class:!0});var w=I(e);s=h(w,"DIV",{});var A=I(s);a=h(A,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),B(a)!=="svelte-12a4vpc"&&(a.textContent=m),c=E(A),i=h(A,"INPUT",{id:!0,name:!0,type:!0,class:!0}),A.forEach(y),u=E(w),g=h(w,"DIV",{});var S=I(g);d=h(S,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),B(d)!=="svelte-k332hw"&&(d.textContent=M),V=E(S),f=h(S,"INPUT",{id:!0,name:!0,type:!0,minlength:!0,class:!0}),S.forEach(y),F=E(w),C=h(w,"DIV",{});var D=I(C);L=h(D,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),B(L)!=="svelte-1kt8ys"&&(L.textContent=Q),H=E(D),b=h(D,"INPUT",{id:!0,name:!0,type:!0,minlength:!0,class:!0}),z=E(D),v&&v.l(D),D.forEach(y),G=E(w),_&&_.l(w),N=E(w),k=h(w,"BUTTON",{type:!0,class:!0});var Y=I(k);O=ae(Y,q),Y.forEach(y),w.forEach(y),x.forEach(y),this.h()},h(){r(a,"for","email"),r(a,"class","block text-sm font-medium text-gray-700"),r(i,"id","email"),r(i,"name","email"),r(i,"type","email"),i.required=!0,r(i,"class","mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"),r(d,"for","password"),r(d,"class","block text-sm font-medium text-gray-700"),r(f,"id","password"),r(f,"name","password"),r(f,"type","password"),f.required=!0,r(f,"minlength","6"),r(f,"class","mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"),r(L,"for","confirmPassword"),r(L,"class","block text-sm font-medium text-gray-700"),r(b,"id","confirmPassword"),r(b,"name","confirmPassword"),r(b,"type","password"),b.required=!0,r(b,"minlength","6"),r(b,"class","mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"),r(k,"type","submit"),k.disabled=R=n[4]||!n[5],r(k,"class","w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"),r(e,"method","POST"),r(e,"action","?/register"),r(e,"class","space-y-4 p-4 bg-white rounded-lg shadow"),r(t,"class","max-w-md mx-auto mt-8")},m(l,x){j(l,t,x),o(t,e),o(e,s),o(s,a),o(s,c),o(s,i),T(i,n[3]),o(e,u),o(e,g),o(g,d),o(g,V),o(g,f),T(f,n[1]),o(e,F),o(e,C),o(C,L),o(C,H),o(C,b),T(b,n[2]),o(C,z),v&&v.m(C,null),o(e,G),_&&_.m(e,null),o(e,N),o(e,k),o(k,O),J||(W=[K(i,"input",n[6]),K(f,"input",n[7]),K(b,"input",n[8]),le(U=ge.call(null,e,n[9]))],J=!0)},p(l,[x]){var w;x&8&&i.value!==l[3]&&T(i,l[3]),x&2&&f.value!==l[1]&&T(f,l[1]),x&4&&b.value!==l[2]&&T(b,l[2]),l[2]&&!l[5]?v||(v=$(),v.c(),v.m(C,null)):v&&(v.d(1),v=null),(w=l[0])!=null&&w.error?_?_.p(l,x):(_=ee(l),_.c(),_.m(e,N)):_&&(_.d(1),_=null),x&16&&q!==(q=l[4]?"Loading...":"Register")&&ne(O,q),x&48&&R!==(R=l[4]||!l[5])&&(k.disabled=R),U&&ue(U.update)&&x&16&&U.update.call(null,l[9])},i:Z,o:Z,d(l){l&&y(t),v&&v.d(),_&&_.d(),J=!1,ie(W)}}}function be(n,t,e){let s,{form:a=null}=t,m="",c="",i="",u=!1;function g(){m=this.value,e(3,m)}function d(){c=this.value,e(1,c)}function M(){i=this.value,e(2,i)}const V=()=>(e(4,u=!0),async({result:f})=>{e(4,u=!1),f.type==="success"&&await _e("supabase:auth")});return n.$$set=f=>{"form"in f&&e(0,a=f.form)},n.$$.update=()=>{n.$$.dirty&6&&e(5,s=c===i)},[a,c,i,m,u,s,g,d,M,V]}class we extends se{constructor(t){super(),re(this,t,be,ve,te,{form:0})}}function ye(n){let t,e,s,a=`<h2 class="text-3xl font-extrabold text-gray-900">Create an account</h2> <p class="mt-2 text-sm text-gray-600">Or
          <a href="/login" class="font-medium text-indigo-600 hover:text-indigo-500">sign in to your account</a></p>`,m,c,i;return c=new we({props:{form:n[0]}}),{c(){t=p("div"),e=p("div"),s=p("div"),s.innerHTML=a,m=P(),pe(c.$$.fragment),this.h()},l(u){t=h(u,"DIV",{class:!0});var g=I(t);e=h(g,"DIV",{class:!0});var d=I(e);s=h(d,"DIV",{class:!0,"data-svelte-h":!0}),B(s)!=="svelte-3z9u3v"&&(s.innerHTML=a),m=E(d),he(c.$$.fragment,d),d.forEach(y),g.forEach(y),this.h()},h(){r(s,"class","text-center"),r(e,"class","max-w-md mx-auto"),r(t,"class","min-h-screen bg-surfsce-900 py-12 px-4 sm:px-6 lg:px-8")},m(u,g){j(u,t,g),o(t,e),o(e,s),o(e,m),ce(c,e,null),i=!0},p(u,[g]){const d={};g&1&&(d.form=u[0]),c.$set(d)},i(u){i||(me(c.$$.fragment,u),i=!0)},o(u){fe(c.$$.fragment,u),i=!1},d(u){u&&y(t),de(c)}}}function xe(n,t,e){let{form:s=null}=t;return n.$$set=a=>{"form"in a&&e(0,s=a.form)},[s]}class Ie extends se{constructor(t){super(),re(this,t,xe,ye,te,{form:0})}}export{Ie as component};
