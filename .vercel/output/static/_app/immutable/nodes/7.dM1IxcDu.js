import{s as J,r as K,n as R}from"../chunks/scheduler.Bd309piK.js";import{S as Q,i as V,d as v,s as X,a as A,b as u,q as r,c as _,e as D,f as Y,h as b,t as G,r as E,u as B,v as q,g as y,j as g}from"../chunks/index.c4LMZ8Tz.js";import"../chunks/entry.CMTg7ftV.js";function W(i){let s,l;return{c(){s=b("p"),l=G(i[1]),this.h()},l(t){s=_(t,"P",{class:!0});var e=D(s);l=Y(e,i[1]),e.forEach(v),this.h()},h(){r(s,"class","error-message svelte-pehyph")},m(t,e){A(t,s,e),u(s,l)},p(t,e){e&2&&X(l,t[1])},d(t){t&&v(s)}}}function z(i){let s,l;return{c(){s=b("p"),l=G(i[2]),this.h()},l(t){s=_(t,"P",{class:!0});var e=D(s);l=Y(e,i[2]),e.forEach(v),this.h()},h(){r(s,"class","success-message svelte-pehyph")},m(t,e){A(t,s,e),u(s,l)},p(t,e){e&4&&X(l,t[2])},d(t){t&&v(s)}}}function Z(i){let s,l="We Can't Wait to Hear From You",t,e,c,L="Name:",k,f,w,h,S="Email:",P,o,T,x,U="Message:",M,d,N,j,F,C,H="Send",O,I,m=i[1]&&W(i),p=i[2]&&z(i);return{c(){s=b("h1"),s.textContent=l,t=g(),e=b("form"),c=b("label"),c.textContent=L,k=g(),f=b("input"),w=g(),h=b("label"),h.textContent=S,P=g(),o=b("input"),T=g(),x=b("label"),x.textContent=U,M=g(),d=b("textarea"),N=g(),m&&m.c(),j=g(),p&&p.c(),F=g(),C=b("button"),C.textContent=H,this.h()},l(n){s=_(n,"H1",{class:!0,"data-svelte-h":!0}),q(s)!=="svelte-1ojm4pp"&&(s.textContent=l),t=y(n),e=_(n,"FORM",{class:!0});var a=D(e);c=_(a,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),q(c)!=="svelte-yhu9j7"&&(c.textContent=L),k=y(a),f=_(a,"INPUT",{class:!0,type:!0,id:!0,name:!0}),w=y(a),h=_(a,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),q(h)!=="svelte-hpodv3"&&(h.textContent=S),P=y(a),o=_(a,"INPUT",{class:!0,type:!0,id:!0,name:!0}),T=y(a),x=_(a,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),q(x)!=="svelte-1bleqcn"&&(x.textContent=U),M=y(a),d=_(a,"TEXTAREA",{class:!0,id:!0,name:!0}),D(d).forEach(v),N=y(a),m&&m.l(a),j=y(a),p&&p.l(a),F=y(a),C=_(a,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),q(C)!=="svelte-uzjt9"&&(C.textContent=H),a.forEach(v),this.h()},h(){r(s,"class","mb-8 text-balance text-center text-7xl font-medium max-w-3xl mx-auto md:text-7xl"),r(c,"class","label text-primary-50 text-lg tracking-wider svelte-pehyph"),r(c,"for","name"),r(f,"class","input text-primary-900 svelte-pehyph"),r(f,"type","text"),r(f,"id","name"),r(f,"name","name"),f.required=!0,r(h,"for","email"),r(h,"class","label text-primary-50 text-lg tracking-wider svelte-pehyph"),r(o,"class","input text-primary-900 svelte-pehyph"),r(o,"type","email"),r(o,"id","email"),r(o,"name","email"),o.required=!0,r(x,"class","label text-primary-50 text-lg tracking-wider svelte-pehyph"),r(x,"for","message"),r(d,"class","textarea text-primary-900 svelte-pehyph"),r(d,"id","message"),r(d,"name","message"),d.required=!0,r(C,"class","mb-10 mt-8 btn btn-xl variant-filled-primary svelte-pehyph"),r(C,"type","submit"),r(e,"class","card variant-soft-primary rounded-lg px-10 mb-12 contact-form flex flex-col m-auto max-w-[500px] svelte-pehyph")},m(n,a){A(n,s,a),A(n,t,a),A(n,e,a),u(e,c),u(e,k),u(e,f),E(f,i[0].name),u(e,w),u(e,h),u(e,P),u(e,o),E(o,i[0].email),u(e,T),u(e,x),u(e,M),u(e,d),E(d,i[0].message),u(e,N),m&&m.m(e,null),u(e,j),p&&p.m(e,null),u(e,F),u(e,C),O||(I=[B(f,"input",i[4]),B(o,"input",i[5]),B(d,"input",i[6]),B(e,"submit",i[3])],O=!0)},p(n,[a]){a&1&&f.value!==n[0].name&&E(f,n[0].name),a&1&&o.value!==n[0].email&&E(o,n[0].email),a&1&&E(d,n[0].message),n[1]?m?m.p(n,a):(m=W(n),m.c(),m.m(e,j)):m&&(m.d(1),m=null),n[2]?p?p.p(n,a):(p=z(n),p.c(),p.m(e,F)):p&&(p.d(1),p=null)},i:R,o:R,d(n){n&&(v(s),v(t),v(e)),m&&m.d(),p&&p.d(),O=!1,K(I)}}}function $(i,s,l){let t={name:"",email:"",message:""},e="",c="";async function L(h){h.preventDefault();const S=h.target,P=new FormData(S);try{const o=await fetch("/contact",{method:"POST",body:P});if(o.ok)l(0,t={name:"",email:"",message:""}),l(1,e=""),l(2,c="Form submitted successfully!");else{const T=await o.json();l(1,e=T.message||"An error occurred. Please try again."),l(2,c="")}}catch{l(1,e="Failed to submit the form. Please try again later."),l(2,c="")}}function k(){t.name=this.value,l(0,t)}function f(){t.email=this.value,l(0,t)}function w(){t.message=this.value,l(0,t)}return[t,e,c,L,k,f,w]}class se extends Q{constructor(s){super(),V(this,s,$,Z,J,{})}}export{se as component};