import{s as V,n as F,v as ae,r as ce,x as le,y as ue,z as _e,w as L,B as Z}from"../chunks/scheduler.Bd309piK.js";import{S as G,i as J,d as m,a as x,c as T,e as A,G as de,h as z,I as he,l as v,m as b,u as q,q as R,x as fe,y as pe,A as d,k as Y,n as j,o as X,p as Q}from"../chunks/index.c4LMZ8Tz.js";import{g as me}from"../chunks/_commonjsHelpers.BosuxZz1.js";import{S as ge,c as ve}from"../chunks/index.DKEgQ9tx.js";const W=(s,e=16)=>{let t=0,i=null;return function(...r){const n=Date.now(),a=n-t;a>=e?(s.apply(this,r),t=n):(i&&clearTimeout(i),i=setTimeout(()=>{s.apply(this,r),t=Date.now()},e-a))}};var g;(function(s){s.SetActiveSlice="setActiveSlice",s.SetSliceZoneSize="setSliceZoneSize"})(g||(g={}));var S;(function(s){s.Ping="ping",s.SetSliceZone="setSliceZone",s.ScrollToSlice="scrollToSlice"})(S||(S={}));var h;(function(s){s.Slices="slices",s.ActiveSlice="activeSlice",s.Message="message"})(h||(h={}));const be={100:"Continue",101:"Switching Protocols",102:"Processing",103:"Early Hints",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",208:"Already Reported",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",308:"Permanent Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Payload Too Large",414:"URI Too Long",415:"Unsupported Media Type",416:"Range Not Satisfiable",417:"Expectation Failed",418:"I'm a Teapot",421:"Misdirected Request",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",425:"Too Early",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",451:"Unavailable For Legal Reasons",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",508:"Loop Detected",509:"Bandwidth Limit Exceeded",510:"Not Extended",511:"Network Authentication Required"};/*!
 * statuses
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */var C=be,Se=_;_.message=C;_.code=we(C);_.codes=ye(C);_.redirect={300:!0,301:!0,302:!0,303:!0,305:!0,307:!0,308:!0};_.empty={204:!0,205:!0,304:!0};_.retry={502:!0,503:!0,504:!0};function we(s){var e={};return Object.keys(s).forEach(function(i){var r=s[i],n=Number(i);e[r.toLowerCase()]=n}),e}function ye(s){return Object.keys(s).map(function(t){return Number(t)})}function Ie(s){var e=s.toLowerCase();if(!Object.prototype.hasOwnProperty.call(_.code,e))throw new Error('invalid status message: "'+s+'"');return _.code[e]}function H(s){if(!Object.prototype.hasOwnProperty.call(_.message,s))throw new Error("invalid status code: "+s);return _.message[s]}function _(s){if(typeof s=="number")return H(s);if(typeof s!="string")throw new TypeError("code must be a number or string");var e=parseInt(s,10);return isNaN(e)?Ie(s):H(e)}const K=me(Se);var $;(function(s){s.Connect="connect"})($||($={}));var E;(function(s){s.Ready="ready"})(E||(E={}));var Re=Object.defineProperty,qe=(s,e,t)=>e in s?Re(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,O=(s,e,t)=>(qe(s,typeof e!="symbol"?e+"":e,t),t);class M extends Error{constructor(e){super(e.msg),O(this,"response"),this.response=e}}class Pe extends Error{constructor(e){super("Too many concurrent requests"),O(this,"request"),this.request=e}}class De extends Error{constructor(e){super(`Request \`${e.requestID}\` timed out`),O(this,"request"),this.request=e}}class $e extends Error{}class Ee extends Error{constructor(){super("Port is not set")}}let Me=0;const xe=(s,e,t="")=>({requestID:`${t}${Me++}`,type:s,data:e}),ee=(s,e,t=200)=>{var i;if(t>=400)throw new TypeError(`Invalid success status code, expected status to be within \`[100;400[\`, got \`${t}\``);return{requestID:s,status:t,msg:((i=K.message[t])==null?void 0:i.replace(/\.$/,"").toLowerCase())??"",data:e}},I=(s,e,t=400)=>{var i;if(t<400)throw new TypeError(`Invalid error status code, expected status to be within \`[500;600[\`, got \`${t}\``);return{requestID:s,status:t,msg:((i=K.message[t])==null?void 0:i.replace(/\.$/,"").toLowerCase())??"",error:e}},te=s=>{if(typeof s!="object"||s===null)throw new TypeError(`Invalid message received, expected message to be of type \`object\`, got \`${typeof s}\``);if(Object.keys(s).every(e=>["requestID","type","data","status","msg","error"].includes(e))){if(typeof s.requestID!="string")throw new TypeError(`Invalid message received, expected \`message.requestID\` to be of type \`string\`, got \`${typeof s.id}\``)}else throw new TypeError(`Invalid message received: ${JSON.stringify(s)}`);return s},se=s=>"type"in s,Te=s=>!("type"in s),Ae=s=>Te(s)&&!("error"in s);var ze=Object.defineProperty,Ce=(s,e,t)=>e in s?ze(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,y=(s,e,t)=>(Ce(s,typeof e!="symbol"?e+"":e,t),t);const Oe={debug:!1,maximumRequestConcurrency:20,defaultTimeout:5e3,requestIDPrefix:"channel-"};class Ne{constructor(e,t){y(this,"requestHandlers"),y(this,"options"),y(this,"_port",null),y(this,"_pendingRequests",new Map),this.requestHandlers=e,this.options={...Oe,...t}}get port(){if(!this._port)throw new Ee;return this._port}set port(e){this._port&&(this._port.onmessage=null),this._port=e,this._port&&(this._port.onmessage=this.onMessage.bind(this))}createRequestMessage(e,t){return xe(e,t,this.options.requestIDPrefix)}async onMessage(e){this.options.debug&&console.debug(e.data);try{const t=te(e.data);if(se(t))if(!this.requestHandlers[t.type])this.postResponse(I(t.requestID,void 0,501));else try{const i=await this.requestHandlers[t.type](t,{success:ee.bind(this,t.requestID),error:I.bind(this,t.requestID)});this.postResponse(i)}catch(i){this.postResponse(I(t.requestID,i,500))}else this._pendingRequests.has(t.requestID)?(this._pendingRequests.get(t.requestID)(t),this._pendingRequests.delete(t.requestID)):console.error(`Unknown request ID received in response: ${JSON.stringify(t)}`)}catch(t){if(t instanceof TypeError)console.warn(t.message);else throw t}}postRequest(e,t=r=>this.port.postMessage(r),i={}){if(this.options.debug&&console.debug(e),this._pendingRequests.size>=this.options.maximumRequestConcurrency)throw new Pe(e);return new Promise((r,n)=>{const a=setTimeout(()=>{this._pendingRequests.has(e.requestID)&&this._pendingRequests.delete(e.requestID),n(new De(e))},i.timeout||this.options.defaultTimeout);this._pendingRequests.set(e.requestID,o=>{clearTimeout(a),Ae(o)?r(o):n(new M(o))}),t(e)})}postResponse(e,t=i=>this.port.postMessage(i)){return this.options.debug&&console.debug(e),t(e),e}}var Fe=Object.defineProperty,Le=(s,e,t)=>e in s?Fe(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,Ze=(s,e,t)=>(Le(s,e+"",t),t);const He={readyTimeout:2e4,requestIDPrefix:"receiver-"};class ke extends Ne{constructor(e,t){super(e,{...He,...t}),Ze(this,"_ready",!1),window.addEventListener("message",i=>{this._onPublicMessage(i)})}async ready(){if(window.parent===window)throw new Error("Receiver is currently not embedded as an iframe");this._ready=!1;const e=this.createRequestMessage(E.Ready,void 0),t=await this.postRequest(e,i=>{window.parent.postMessage(i,"*")},{timeout:this.options.readyTimeout});return this._ready=!0,t}_onPublicMessage(e){try{const t=te(e.data);if(se(t))switch(this.options.debug&&console.debug(e.data),t.type){case $.Connect:this.port=e.ports[0];const{data:i}=t;this.options={...this.options,...i,debug:this.options.debug,requestIDPrefix:this.options.requestIDPrefix,readyTimeout:this.options.readyTimeout};const r=ee(t.requestID,void 0);this.postResponse(r);break;default:this.postResponse(I(t.requestID,void 0),n=>{e.source.postMessage(n,e.origin)});break}else this._ready||this.onMessage(e)}catch(t){if(!(t instanceof TypeError))throw t}}postFormattedRequest(e,t,i={}){if(!this._ready)throw new $e("Receiver is not ready, use `ChannelReceiver.ready()` first");return this.postRequest(this.createRequestMessage(e,t),void 0,i)}}var Ue=Object.defineProperty,Be=(s,e,t)=>e in s?Ue(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,k=(s,e,t)=>(Be(s,typeof e!="symbol"?e+"":e,t),t),ie,re;const Ve={requestIDPrefix:"api-",activeSliceAPI:!1,sliceZoneSizeAPI:!1};class Ge extends ke{constructor(e,t){var i,r;const n=(t==null?void 0:t.debug)||/[?&]debug=true/i.test(decodeURIComponent(window.location.search));super({[S.Ping]:(a,o)=>o.success("pong"),...e},{...Ve,...t,debug:n}),k(this,ie,async a=>await this.postFormattedRequest(g.SetActiveSlice,a)),k(this,re,async a=>await this.postFormattedRequest(g.SetSliceZoneSize,a)),n&&(window.prismic||(window.prismic={}),(i=window.prismic).sliceSimulator||(i.sliceSimulator={}),(r=window.prismic.sliceSimulator).api||(r.api=[]),window.prismic.sliceSimulator.api.push(this))}}ie=g.SetActiveSlice,re=g.SetSliceZoneSize;var Je=Object.defineProperty,Ye=(s,e,t)=>e in s?Je(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,je=(s,e,t)=>(Ye(s,e+"",t),t);class Xe{constructor(){je(this,"_listeners",{})}on(e,t,i=null){this._listeners[e]=[...this._listeners[e]??[],[t,i]]}off(e,t){this._listeners[e]=(this._listeners[e]??[]).filter(([i,r])=>typeof t=="function"?i!==t:r!==t)}emit(e,t){(this._listeners[e]??[]).forEach(i=>i[0](t))}}const w="slice-simulator",N="slice-simulator--root",Qe=()=>document.querySelector(`.${w}`),We=()=>document.querySelector(`.${N}`),ne=s=>{let e=document.querySelector(`.${w} [data-slice-zone]`);if(e)return e.children.length!==s&&console.warn(`Flagged SliceZone has an unexpected number of children, found ${e.children.length} but expected ${s}. This might lead to unexpected behaviors. Are you sure you tagged the right element?`),e;if(e=document.querySelector(`.${w} .${N}`),!e)return null;const t=5;for(let i=0;i<t;i++){if(e.children.length===s)return e;if(e.children.length)e=e.children[0];else break}return null},Ke=(s,e)=>{const t=document.elementsFromPoint(e.x,e.y).reverse(),i=t.indexOf(s);if(i===-1)return null;const r=t[i+1];return r||null},et=()=>({zIndex:100,background:"#ffffff"}),oe=()=>[],tt=()=>"";var st=Object.defineProperty,it=(s,e,t)=>e in s?st(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,p=(s,e,t)=>(it(s,typeof e!="symbol"?e+"":e,t),t);class rt extends Xe{constructor(e){super(),p(this,"_slices"),p(this,"_activeSlice"),p(this,"_message"),p(this,"_mouse"),p(this,"_setActiveSlice",()=>{if(this.slices.length===0){this.activeSlice=null;return}const t=ne(this.slices.length);if(!t){this.activeSlice=null;return}const i=Ke(t,this._mouse);if(!i){this.activeSlice=null;return}const r=Array.prototype.indexOf.call(t.children,i);this.activeSlice={rect:i.getBoundingClientRect(),sliceID:this.slices[r].slice_type,variationID:this.slices[r].variation,index:r}}),p(this,"setActiveSlice",W(this._setActiveSlice,16)),this._slices=(e==null?void 0:e.slices)||oe(),this._activeSlice=null,this._message="",this._mouse={x:0,y:0}}set slices(e){this._slices=e,this.message="",this.emit(h.Slices,e)}get slices(){return this._slices}set activeSlice(e){this._activeSlice=e,this.emit(h.ActiveSlice,e)}get activeSlice(){return this._activeSlice}set message(e){this._message=e,this.emit(h.Message,e)}get message(){return this._message}async init(){window.addEventListener("mousemove",e=>{this._mouse={x:e.clientX,y:e.clientY}})}setSliceZone(e){this.slices=e}}const nt=s=>`<div style="word-spacing: initial; white-space: pre; line-height: initial; font-family: monospace; color: #ffffff; mix-blend-mode: difference; padding: 1rem; font-size: 1rem;">${s}</div>`,P=(s,e)=>`<a href="${s}" style="text-decoration: underline;">${s}<a>`,ot=`   _____ ___          _____ _                 __      __            
  / ___// (_)_______ / ___/(_)___ ___  __  __/ /___ _/ /_____  _____
  \\__ \\/ / / ___/ _ \\\\__ \\/ / __ \`__ \\/ / / / / __ \`/ __/ __ \\/ ___/
 ___/ / / / /__/  __/__/ / / / / / / / /_/ / / /_/ / /_/ /_/ / /    
/____/_/_/\\___/\\___/____/_/_/ /_/ /_/\\__,_/_/\\__,_/\\__/\\____/_/     
                  / /_  __  __   / __ \\_____(_)________ ___  (_)____
                 / __ \\/ / / /  / /_/ / ___/ / ___/ __ \`__ \\/ / ___/
                / /_/ / /_/ /  / ____/ /  / (__  ) / / / / / / /__  
               /_.___/\\__, /  /_/   /_/  /_/____/_/ /_/ /_/_/\\___/  
                     /____/

`,at=`





                                                - The Prismic team`,ct=nt([ot,`You're seeing this page because you're accessing Slice simulator
directly, e.g:

  - ${P("http://localhost:3000/slice-simulator")}



The Slice simulator can only be accessed through Slice Machine or the
Page Builder. To preview your Slices, head over to Slice Machine:

  - ${P("http://localhost:9999")}



If you believe this is an error, please reach out to us:

  - ${P("https://github.com/prismicio/slice-machine/issues/new/choose")}`,at].join(""));var lt=Object.defineProperty,ut=(s,e,t)=>e in s?lt(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,D=(s,e,t)=>(ut(s,typeof e!="symbol"?e+"":e,t),t);class _t{constructor(e){D(this,"state"),D(this,"_api"),D(this,"_initialized"),this.state=new rt(e),this._api=null,this._initialized=!1}async init(){if(!this._initialized){this._initialized=!0,await this.state.init();try{await this._initAPI()}catch(e){e instanceof Error&&e.message==="Receiver is currently not embedded as an iframe"&&!this.state.slices.length&&(this.state.message=ct),console.error(e);return}this._initListeners()}}async _initAPI(){this._api=new Ge({[S.SetSliceZone]:(e,t)=>(this.state.setSliceZone(e.data),t.success()),[S.ScrollToSlice]:(e,t)=>{var i;if(e.data.sliceIndex<0)return t.error("`sliceIndex` must be > 0",400);if(e.data.sliceIndex>=this.state.slices.length)return t.error(`\`sliceIndex\` must be < ${this.state.slices.length} (\`<SliceZone />\` current length)`,400);const r=ne(this.state.slices.length);if(!r)return t.error("Failed to find `<SliceZone />`",500);this.state.activeSlice=null;const n=r.children[e.data.sliceIndex];return n?(n.scrollIntoView({behavior:e.data.behavior,block:e.data.block,inline:e.data.inline}),(i=this._api)!=null&&i.options.activeSliceAPI&&setTimeout(this.state.setActiveSlice,750),t.success()):t.error("Failed fo find slice at index $`{req.data.sliceIndex}` in `<SliceZone />`",500)}}),await this._api.ready()}_initListeners(){var e,t;if((e=this._api)!=null&&e.options.activeSliceAPI&&(window.addEventListener("mousemove",()=>{this.state.setActiveSlice()}),window.addEventListener("resize",()=>{this.state.setActiveSlice()}),window.addEventListener("mousewheel",()=>{setTimeout(this.state.setActiveSlice,200)}),this.state.on(h.Slices,()=>{this.state.setActiveSlice()}),this.state.on(h.ActiveSlice,async i=>{if(this._api)try{await this._api.setActiveSlice(i)}catch(r){if(r instanceof M&&r.response.status===400)console.error(r.response);else throw r}})),(t=this._api)!=null&&t.options.sliceZoneSizeAPI){const i=new ResizeObserver(W(async a=>{const[o]=a;if(this._api&&o)try{await this._api.setSliceZoneSize({rect:o.contentRect})}catch(u){if(u instanceof M&&u.response.status===400)console.error(u.response);else throw u}},16)),r=()=>{const a=We();i.disconnect(),a&&i.observe(a)};new MutationObserver(r).observe(Qe(),{subtree:!1,childList:!0})}}}const U=s=>{s.preventDefault(),s.stopPropagation()},dt=s=>{s.path&&s.path.slice(0,5).some(e=>e instanceof HTMLAnchorElement)&&(s.preventDefault(),s.stopPropagation())},ht=s=>({slices:s&4}),B=s=>({slices:s[2]});function ft(s){let e,t,i,r;const n=s[6].default,a=ae(n,s,s[5],B);return{c(){e=z("div"),a&&a.c(),this.h()},l(o){e=T(o,"DIV",{id:!0,class:!0});var u=A(e);a&&a.l(u),u.forEach(m),this.h()},h(){R(e,"id","root"),R(e,"class",N)},m(o,u){x(o,e,u),a&&a.m(e,null),t=!0,i||(r=[q(e,"click",dt),q(e,"submit",U),q(e,"keypress",U)],i=!0)},p(o,u){a&&a.p&&(!t||u&36)&&le(a,n,o,o[5],t?_e(n,o[5],u,ht):ue(o[5]),B)},i(o){t||(b(a,o),t=!0)},o(o){v(a,o),t=!1},d(o){o&&m(e),a&&a.d(o),i=!1,ce(r)}}}function pt(s){let e,t;return{c(){e=z("article"),t=new he(!1),this.h()},l(i){e=T(i,"ARTICLE",{});var r=A(e);t=de(r,!1),r.forEach(m),this.h()},h(){t.a=null},m(i,r){x(i,e,r),t.m(s[3],e)},p(i,r){r&8&&t.p(i[3])},i:F,o:F,d(i){i&&m(e)}}}function mt(s){let e,t,i,r,n;const a=[pt,ft],o=[];function u(l,c){return l[3]?0:l[2].length?1:-1}return~(t=u(s))&&(i=o[t]=a[t](s)),{c(){e=z("div"),i&&i.c(),this.h()},l(l){e=T(l,"DIV",{class:!0,style:!0});var c=A(e);i&&i.l(c),c.forEach(m),this.h()},h(){R(e,"class",r=w+" "+s[4].class),d(e,"z-index",s[0]),d(e,"position","fixed"),d(e,"top","0"),d(e,"left","0"),d(e,"width","100%"),d(e,"height","100vh"),d(e,"overflow","auto"),d(e,"background",s[1])},m(l,c){x(l,e,c),~t&&o[t].m(e,null),n=!0},p(l,[c]){let f=t;t=u(l),t===f?~t&&o[t].p(l,c):(i&&(fe(),v(o[f],1,1,()=>{o[f]=null}),pe()),~t?(i=o[t],i?i.p(l,c):(i=o[t]=a[t](l),i.c()),b(i,1),i.m(e,null)):i=null),(!n||c&16&&r!==(r=w+" "+l[4].class))&&R(e,"class",r),(!n||c&1)&&d(e,"z-index",l[0]),(!n||c&2)&&d(e,"background",l[1])},i(l){n||(b(i),n=!0)},o(l){v(i),n=!1},d(l){l&&m(e),~t&&o[t].d()}}}function gt(s,e,t){let{$$slots:i={},$$scope:r}=e;const n=et();let{zIndex:a=n.zIndex}=e,{background:o=n.background}=e,u=oe(),l=tt();if(typeof window<"u"){const c=new _t;c.state.on(h.Slices,f=>{t(2,u=f)},"simulator-slices"),c.state.on(h.Message,f=>{t(3,l=f)},"simulator-message"),c.init()}return s.$$set=c=>{t(4,e=L(L({},e),Z(c))),"zIndex"in c&&t(0,a=c.zIndex),"background"in c&&t(1,o=c.background),"$$scope"in c&&t(5,r=c.$$scope)},e=Z(e),[a,o,u,l,e,r,i]}class vt extends G{constructor(e){super(),J(this,e,gt,mt,V,{zIndex:0,background:1})}}function bt(s){let e,t;return e=new ge({props:{slices:s[0],components:ve}}),{c(){Q(e.$$.fragment)},l(i){X(e.$$.fragment,i)},m(i,r){j(e,i,r),t=!0},p(i,r){const n={};r&1&&(n.slices=i[0]),e.$set(n)},i(i){t||(b(e.$$.fragment,i),t=!0)},o(i){v(e.$$.fragment,i),t=!1},d(i){Y(e,i)}}}function St(s){let e,t;return e=new vt({props:{background:"#030729",$$slots:{default:[bt,({slices:i})=>({0:i}),({slices:i})=>i?1:0]},$$scope:{ctx:s}}}),{c(){Q(e.$$.fragment)},l(i){X(e.$$.fragment,i)},m(i,r){j(e,i,r),t=!0},p(i,[r]){const n={};r&3&&(n.$$scope={dirty:r,ctx:i}),e.$set(n)},i(i){t||(b(e.$$.fragment,i),t=!0)},o(i){v(e.$$.fragment,i),t=!1},d(i){Y(e,i)}}}class qt extends G{constructor(e){super(),J(this,e,null,St,V,{})}}export{qt as component};
