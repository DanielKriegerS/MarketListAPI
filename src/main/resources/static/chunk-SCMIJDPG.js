import{K as lt,L as Yt,P as $t,db as Vt,ma as Ut}from"./chunk-FS25H43L.js";function en(t,e,n){return(e=an(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Bt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Bt(Object(n),!0).forEach(function(a){en(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Bt(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function nn(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function an(t){var e=nn(t,"string");return typeof e=="symbol"?e:e+""}var Gt=()=>{},Mt={},ve={},xe=null,ke={mark:Gt,measure:Gt};try{typeof window<"u"&&(Mt=window),typeof document<"u"&&(ve=document),typeof MutationObserver<"u"&&(xe=MutationObserver),typeof performance<"u"&&(ke=performance)}catch{}var{userAgent:Xt=""}=Mt.navigator||{},F=Mt,p=ve,Kt=xe,q=ke,ci=!!F.document,S=!!p.documentElement&&!!p.head&&typeof p.addEventListener=="function"&&typeof p.createElement=="function",Ae=~Xt.indexOf("MSIE")||~Xt.indexOf("Trident/"),rn=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,sn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Ce={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},on={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},we=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],g="classic",nt="duotone",ln="sharp",cn="sharp-duotone",Ie=[g,nt,ln,cn],fn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},un={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},dn=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),mn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},hn=["fak","fa-kit","fakd","fa-kit-duotone"],qt={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},pn=["kit"],gn={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},yn=["fak","fakd"],bn={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Qt={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Q={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},vn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],xn=["fak","fa-kit","fakd","fa-kit-duotone"],kn={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},An={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Cn={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},ht={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},wn=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],pt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...vn,...wn],In=["solid","regular","light","thin","duotone","brands"],Oe=[1,2,3,4,5,6,7,8,9,10],On=Oe.concat([11,12,13,14,15,16,17,18,19,20]),Sn=[...Object.keys(Cn),...In,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Q.GROUP,Q.SWAP_OPACITY,Q.PRIMARY,Q.SECONDARY].concat(Oe.map(t=>"".concat(t,"x"))).concat(On.map(t=>"w-".concat(t))),En={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},I="___FONT_AWESOME___",gt=16,Se="fa",Ee="svg-inline--fa",D="data-fa-i2svg",yt="data-fa-pseudo-element",Pn="data-fa-pseudo-element-pending",Nt="data-prefix",Tt="data-icon",Jt="fontawesome-i2svg",Fn="async",Mn=["HTML","HEAD","STYLE","SCRIPT"],Pe=(()=>{try{return!0}catch{return!1}})();function X(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[g]}})}var Fe=o({},Ce);Fe[g]=o(o(o(o({},{"fa-duotone":"duotone"}),Ce[g]),qt.kit),qt["kit-duotone"]);var Nn=X(Fe),bt=o({},mn);bt[g]=o(o(o(o({},{duotone:"fad"}),bt[g]),Qt.kit),Qt["kit-duotone"]);var Zt=X(bt),vt=o({},ht);vt[g]=o(o({},vt[g]),bn.kit);var Lt=X(vt),xt=o({},An);xt[g]=o(o({},xt[g]),gn.kit);var fi=X(xt),Tn=rn,Me="fa-layers-text",Ln=sn,Dn=o({},fn),ui=X(Dn),zn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ct=on,_n=[...pn,...Sn],U=F.FontAwesomeConfig||{};function Rn(t){var e=p.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function jn(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}p&&typeof p.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e,i=jn(Rn(n));i!=null&&(U[a]=i)});var Ne={styleDefault:"solid",familyDefault:g,cssPrefix:Se,replacementClass:Ee,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};U.familyPrefix&&(U.cssPrefix=U.familyPrefix);var H=o(o({},Ne),U);H.autoReplaceSvg||(H.observeMutations=!1);var c={};Object.keys(Ne).forEach(t=>{Object.defineProperty(c,t,{enumerable:!0,set:function(e){H[t]=e,V.forEach(n=>n(c))},get:function(){return H[t]}})});Object.defineProperty(c,"familyPrefix",{enumerable:!0,set:function(t){H.cssPrefix=t,V.forEach(e=>e(c))},get:function(){return H.cssPrefix}});F.FontAwesomeConfig=c;var V=[];function Wn(t){return V.push(t),()=>{V.splice(V.indexOf(t),1)}}var P=gt,A={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Hn(t){if(!t||!S)return;let e=p.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;let n=p.head.childNodes,a=null;for(let i=n.length-1;i>-1;i--){let r=n[i],s=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=r)}return p.head.insertBefore(e,a),t}var Yn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function B(){let t=12,e="";for(;t-- >0;)e+=Yn[Math.random()*62|0];return e}function Y(t){let e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Dt(t){return t.classList?Y(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Te(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function $n(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Te(t[n]),'" '),"").trim()}function at(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function zt(t){return t.size!==A.size||t.x!==A.x||t.y!==A.y||t.rotate!==A.rotate||t.flipX||t.flipY}function Un(t){let{transform:e,containerWidth:n,iconWidth:a}=t,i={transform:"translate(".concat(n/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(r," ").concat(s," ").concat(l)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:i,inner:u,path:f}}function Vn(t){let{transform:e,width:n=gt,height:a=gt,startCentered:i=!1}=t,r="";return i&&Ae?r+="translate(".concat(e.x/P-n/2,"em, ").concat(e.y/P-a/2,"em) "):i?r+="translate(calc(-50% + ".concat(e.x/P,"em), calc(-50% + ").concat(e.y/P,"em)) "):r+="translate(".concat(e.x/P,"em, ").concat(e.y/P,"em) "),r+="scale(".concat(e.size/P*(e.flipX?-1:1),", ").concat(e.size/P*(e.flipY?-1:1),") "),r+="rotate(".concat(e.rotate,"deg) "),r}var Bn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function Le(){let t=Se,e=Ee,n=c.cssPrefix,a=c.replacementClass,i=Bn;if(n!==t||a!==e){let r=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");i=i.replace(r,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(l,".".concat(a))}return i}var te=!1;function ft(){c.autoAddCss&&!te&&(Hn(Le()),te=!0)}var Gn={mixout(){return{dom:{css:Le,insertCss:ft}}},hooks(){return{beforeDOMElementCreation(){ft()},beforeI2svg(){ft()}}}},O=F||{};O[I]||(O[I]={});O[I].styles||(O[I].styles={});O[I].hooks||(O[I].hooks={});O[I].shims||(O[I].shims=[]);var C=O[I],De=[],ze=function(){p.removeEventListener("DOMContentLoaded",ze),tt=1,De.map(t=>t())},tt=!1;S&&(tt=(p.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(p.readyState),tt||p.addEventListener("DOMContentLoaded",ze));function Xn(t){S&&(tt?setTimeout(t,0):De.push(t))}function K(t){let{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Te(t):"<".concat(e," ").concat($n(n),">").concat(a.map(K).join(""),"</").concat(e,">")}function ee(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Kn=function(e,n){return function(a,i,r,s){return e.call(n,a,i,r,s)}},ut=function(e,n,a,i){var r=Object.keys(e),s=r.length,l=i!==void 0?Kn(n,i):n,u,f,d;for(a===void 0?(u=1,d=e[r[0]]):(u=0,d=a);u<s;u++)f=r[u],d=l(d,e[f],f,e);return d};function qn(t){let e=[],n=0,a=t.length;for(;n<a;){let i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<a){let r=t.charCodeAt(n++);(r&64512)==56320?e.push(((i&1023)<<10)+(r&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function kt(t){let e=qn(t);return e.length===1?e[0].toString(16):null}function Qn(t,e){let n=t.length,a=t.charCodeAt(e),i;return a>=55296&&a<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(a-55296)*1024+i-56320+65536:a}function ne(t){return Object.keys(t).reduce((e,n)=>{let a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function At(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:a=!1}=n,i=ne(e);typeof C.hooks.addPack=="function"&&!a?C.hooks.addPack(t,ne(e)):C.styles[t]=o(o({},C.styles[t]||{}),i),t==="fas"&&At("fa",e)}var{styles:G,shims:Jn}=C,_e=Object.keys(Lt),Zn=_e.reduce((t,e)=>(t[e]=Object.keys(Lt[e]),t),{}),_t=null,Re={},je={},We={},He={},Ye={};function ta(t){return~_n.indexOf(t)}function ea(t,e){let n=e.split("-"),a=n[0],i=n.slice(1).join("-");return a===t&&i!==""&&!ta(i)?i:null}var $e=()=>{let t=a=>ut(G,(i,r,s)=>(i[s]=ut(r,a,{}),i),{});Re=t((a,i,r)=>(i[3]&&(a[i[3]]=r),i[2]&&i[2].filter(l=>typeof l=="number").forEach(l=>{a[l.toString(16)]=r}),a)),je=t((a,i,r)=>(a[r]=r,i[2]&&i[2].filter(l=>typeof l=="string").forEach(l=>{a[l]=r}),a)),Ye=t((a,i,r)=>{let s=i[2];return a[r]=r,s.forEach(l=>{a[l]=r}),a});let e="far"in G||c.autoFetchSvg,n=ut(Jn,(a,i)=>{let r=i[0],s=i[1],l=i[2];return s==="far"&&!e&&(s="fas"),typeof r=="string"&&(a.names[r]={prefix:s,iconName:l}),typeof r=="number"&&(a.unicodes[r.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});We=n.names,He=n.unicodes,_t=it(c.styleDefault,{family:c.familyDefault})};Wn(t=>{_t=it(t.styleDefault,{family:c.familyDefault})});$e();function Rt(t,e){return(Re[t]||{})[e]}function na(t,e){return(je[t]||{})[e]}function L(t,e){return(Ye[t]||{})[e]}function Ue(t){return We[t]||{prefix:null,iconName:null}}function aa(t){let e=He[t],n=Rt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function M(){return _t}var Ve=()=>({prefix:null,iconName:null,rest:[]});function ia(t){let e=g,n=_e.reduce((a,i)=>(a[i]="".concat(c.cssPrefix,"-").concat(i),a),{});return Ie.forEach(a=>{(t.includes(n[a])||t.some(i=>Zn[a].includes(i)))&&(e=a)}),e}function it(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:n=g}=e,a=Nn[n][t];if(n===nt&&!t)return"fad";let i=Zt[n][t]||Zt[n][a],r=t in C.styles?t:null;return i||r||null}function ra(t){let e=[],n=null;return t.forEach(a=>{let i=ea(c.cssPrefix,a);i?n=i:a&&e.push(a)}),{iconName:n,rest:e}}function ae(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function rt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:n=!1}=e,a=null,i=pt.concat(xn),r=ae(t.filter(h=>i.includes(h))),s=ae(t.filter(h=>!pt.includes(h))),l=r.filter(h=>(a=h,!we.includes(h))),[u=null]=l,f=ia(r),d=o(o({},ra(s)),{},{prefix:it(u,{family:f})});return o(o(o({},d),ca({values:t,family:f,styles:G,config:c,canonical:d,givenPrefix:a})),sa(n,a,d))}function sa(t,e,n){let{prefix:a,iconName:i}=n;if(t||!a||!i)return{prefix:a,iconName:i};let r=e==="fa"?Ue(i):{},s=L(a,i);return i=r.iconName||s||i,a=r.prefix||a,a==="far"&&!G.far&&G.fas&&!c.autoFetchSvg&&(a="fas"),{prefix:a,iconName:i}}var oa=Ie.filter(t=>t!==g||t!==nt),la=Object.keys(ht).filter(t=>t!==g).map(t=>Object.keys(ht[t])).flat();function ca(t){let{values:e,family:n,canonical:a,givenPrefix:i="",styles:r={},config:s={}}=t,l=n===nt,u=e.includes("fa-duotone")||e.includes("fad"),f=s.familyDefault==="duotone",d=a.prefix==="fad"||a.prefix==="fa-duotone";if(!l&&(u||f||d)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&oa.includes(n)&&(Object.keys(r).find(m=>la.includes(m))||s.autoFetchSvg)){let m=dn.get(n).defaultShortPrefixId;a.prefix=m,a.iconName=L(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||i==="fa")&&(a.prefix=M()||"fas"),a}var Ct=class{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];let i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(r=>{this.definitions[r]=o(o({},this.definitions[r]||{}),i[r]),At(r,i[r]);let s=Lt[g][r];s&&At(s,i[r]),$e()})}reset(){this.definitions={}}_pullDefinitions(e,n){let a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(i=>{let{prefix:r,iconName:s,icon:l}=a[i],u=l[2];e[r]||(e[r]={}),u.length>0&&u.forEach(f=>{typeof f=="string"&&(e[r][f]=l)}),e[r][s]=l}),e}},ie=[],j={},W={},fa=Object.keys(W);function ua(t,e){let{mixoutsTo:n}=e;return ie=t,j={},Object.keys(W).forEach(a=>{fa.indexOf(a)===-1&&delete W[a]}),ie.forEach(a=>{let i=a.mixout?a.mixout():{};if(Object.keys(i).forEach(r=>{typeof i[r]=="function"&&(n[r]=i[r]),typeof i[r]=="object"&&Object.keys(i[r]).forEach(s=>{n[r]||(n[r]={}),n[r][s]=i[r][s]})}),a.hooks){let r=a.hooks();Object.keys(r).forEach(s=>{j[s]||(j[s]=[]),j[s].push(r[s])})}a.provides&&a.provides(W)}),n}function wt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),i=2;i<n;i++)a[i-2]=arguments[i];return(j[t]||[]).forEach(s=>{e=s.apply(null,[e,...a])}),e}function z(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(j[t]||[]).forEach(r=>{r.apply(null,n)})}function N(){let t=arguments[0],e=Array.prototype.slice.call(arguments,1);return W[t]?W[t].apply(null,e):void 0}function It(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t,n=t.prefix||M();if(e)return e=L(n,e)||e,ee(Be.definitions,n,e)||ee(C.styles,n,e)}var Be=new Ct,da=()=>{c.autoReplaceSvg=!1,c.observeMutations=!1,z("noAuto")},ma={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return S?(z("beforeI2svg",t),N("pseudoElements2svg",t),N("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:e}=t;c.autoReplaceSvg===!1&&(c.autoReplaceSvg=!0),c.observeMutations=!0,Xn(()=>{pa({autoReplaceSvgRoot:e}),z("watch",t)})}},ha={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:L(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){let e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=it(t[0]);return{prefix:n,iconName:L(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(c.cssPrefix,"-"))>-1||t.match(Tn))){let e=rt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||M(),iconName:L(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){let e=M();return{prefix:e,iconName:L(e,t)||t}}}},v={noAuto:da,config:c,dom:ma,parse:ha,library:Be,findIconDefinition:It,toHtml:K},pa=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:e=p}=t;(Object.keys(C.styles).length>0||c.autoFetchSvg)&&S&&c.autoReplaceSvg&&v.dom.i2svg({node:e})};function st(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>K(n))}}),Object.defineProperty(t,"node",{get:function(){if(!S)return;let n=p.createElement("div");return n.innerHTML=t.html,n.children}}),t}function ga(t){let{children:e,main:n,mask:a,attributes:i,styles:r,transform:s}=t;if(zt(s)&&n.found&&!a.found){let{width:l,height:u}=n,f={x:l/u/2,y:.5};i.style=at(o(o({},r),{},{"transform-origin":"".concat(f.x+s.x/16,"em ").concat(f.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function ya(t){let{prefix:e,iconName:n,children:a,attributes:i,symbol:r}=t,s=r===!0?"".concat(e,"-").concat(c.cssPrefix,"-").concat(n):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:o(o({},i),{},{id:s}),children:a}]}]}function jt(t){let{icons:{main:e,mask:n},prefix:a,iconName:i,transform:r,symbol:s,title:l,maskId:u,titleId:f,extra:d,watchable:h=!1}=t,{width:m,height:y}=n.found?n:e,E=yn.includes(a),T=[c.replacementClass,i?"".concat(c.cssPrefix,"-").concat(i):""].filter(R=>d.classes.indexOf(R)===-1).filter(R=>R!==""||!!R).concat(d.classes).join(" "),x={children:[],attributes:o(o({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:T,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(y)})},w=E&&!~d.classes.indexOf("fa-fw")?{width:"".concat(m/y*16*.0625,"em")}:{};h&&(x.attributes[D]=""),l&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(f||B())},children:[l]}),delete x.attributes.title);let b=o(o({},x),{},{prefix:a,iconName:i,main:e,mask:n,maskId:u,transform:r,symbol:s,styles:o(o({},w),d.styles)}),{children:k,attributes:_}=n.found&&e.found?N("generateAbstractMask",b)||{children:[],attributes:{}}:N("generateAbstractIcon",b)||{children:[],attributes:{}};return b.children=k,b.attributes=_,s?ya(b):ga(b)}function re(t){let{content:e,width:n,height:a,transform:i,title:r,extra:s,watchable:l=!1}=t,u=o(o(o({},s.attributes),r?{title:r}:{}),{},{class:s.classes.join(" ")});l&&(u[D]="");let f=o({},s.styles);zt(i)&&(f.transform=Vn({transform:i,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);let d=at(f);d.length>0&&(u.style=d);let h=[];return h.push({tag:"span",attributes:u,children:[e]}),r&&h.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),h}function ba(t){let{content:e,title:n,extra:a}=t,i=o(o(o({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),r=at(a.styles);r.length>0&&(i.style=r);let s=[];return s.push({tag:"span",attributes:i,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var{styles:dt}=C;function Ot(t){let e=t[0],n=t[1],[a]=t.slice(4),i=null;return Array.isArray(a)?i={tag:"g",attributes:{class:"".concat(c.cssPrefix,"-").concat(ct.GROUP)},children:[{tag:"path",attributes:{class:"".concat(c.cssPrefix,"-").concat(ct.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(c.cssPrefix,"-").concat(ct.PRIMARY),fill:"currentColor",d:a[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:i}}var va={found:!1,width:512,height:512};function xa(t,e){!Pe&&!c.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function St(t,e){let n=e;return e==="fa"&&c.styleDefault!==null&&(e=M()),new Promise((a,i)=>{if(n==="fa"){let r=Ue(t)||{};t=r.iconName||t,e=r.prefix||e}if(t&&e&&dt[e]&&dt[e][t]){let r=dt[e][t];return a(Ot(r))}xa(t,e),a(o(o({},va),{},{icon:c.showMissingIcons&&t?N("missingIconAbstract")||{}:{}}))})}var se=()=>{},Et=c.measurePerformance&&q&&q.mark&&q.measure?q:{mark:se,measure:se},$='FA "6.7.2"',ka=t=>(Et.mark("".concat($," ").concat(t," begins")),()=>Ge(t)),Ge=t=>{Et.mark("".concat($," ").concat(t," ends")),Et.measure("".concat($," ").concat(t),"".concat($," ").concat(t," begins"),"".concat($," ").concat(t," ends"))},Wt={begin:ka,end:Ge},J=()=>{};function oe(t){return typeof(t.getAttribute?t.getAttribute(D):null)=="string"}function Aa(t){let e=t.getAttribute?t.getAttribute(Nt):null,n=t.getAttribute?t.getAttribute(Tt):null;return e&&n}function Ca(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(c.replacementClass)}function wa(){return c.autoReplaceSvg===!0?Z.replace:Z[c.autoReplaceSvg]||Z.replace}function Ia(t){return p.createElementNS("http://www.w3.org/2000/svg",t)}function Oa(t){return p.createElement(t)}function Xe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:n=t.tag==="svg"?Ia:Oa}=e;if(typeof t=="string")return p.createTextNode(t);let a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(r){a.setAttribute(r,t.attributes[r])}),(t.children||[]).forEach(function(r){a.appendChild(Xe(r,{ceFn:n}))}),a}function Sa(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Z={replace:function(t){let e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Xe(n),e)}),e.getAttribute(D)===null&&c.keepOriginalSource){let n=p.createComment(Sa(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){let e=t[0],n=t[1];if(~Dt(e).indexOf(c.replacementClass))return Z.replace(t);let a=new RegExp("".concat(c.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){let r=n[0].attributes.class.split(" ").reduce((s,l)=>(l===c.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s),{toNode:[],toSvg:[]});n[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",r.toNode.join(" "))}let i=n.map(r=>K(r)).join(`
`);e.setAttribute(D,""),e.innerHTML=i}};function le(t){t()}function Ke(t,e){let n=typeof e=="function"?e:J;if(t.length===0)n();else{let a=le;c.mutateApproach===Fn&&(a=F.requestAnimationFrame||le),a(()=>{let i=wa(),r=Wt.begin("mutate");t.map(i),r(),n()})}}var Ht=!1;function qe(){Ht=!0}function Pt(){Ht=!1}var et=null;function ce(t){if(!Kt||!c.observeMutations)return;let{treeCallback:e=J,nodeCallback:n=J,pseudoElementsCallback:a=J,observeMutationsRoot:i=p}=t;et=new Kt(r=>{if(Ht)return;let s=M();Y(r).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!oe(l.addedNodes[0])&&(c.searchPseudoElements&&a(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&c.searchPseudoElements&&a(l.target.parentNode),l.type==="attributes"&&oe(l.target)&&~zn.indexOf(l.attributeName))if(l.attributeName==="class"&&Aa(l.target)){let{prefix:u,iconName:f}=rt(Dt(l.target));l.target.setAttribute(Nt,u||s),f&&l.target.setAttribute(Tt,f)}else Ca(l.target)&&n(l.target)})}),S&&et.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Ea(){et&&et.disconnect()}function Pa(t){let e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce((a,i)=>{let r=i.split(":"),s=r[0],l=r.slice(1);return s&&l.length>0&&(a[s]=l.join(":").trim()),a},{})),n}function Fa(t){let e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",i=rt(Dt(t));return i.prefix||(i.prefix=M()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&a.length>0&&(i.iconName=na(i.prefix,t.innerText)||Rt(i.prefix,kt(t.innerText))),!i.iconName&&c.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function Ma(t){let e=Y(t.attributes).reduce((i,r)=>(i.name!=="class"&&i.name!=="style"&&(i[r.name]=r.value),i),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return c.autoA11y&&(n?e["aria-labelledby"]="".concat(c.replacementClass,"-title-").concat(a||B()):(e["aria-hidden"]="true",e.focusable="false")),e}function Na(){return{iconName:null,title:null,titleId:null,prefix:null,transform:A,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function fe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:n,prefix:a,rest:i}=Fa(t),r=Ma(t),s=wt("parseNodeAttributes",{},t),l=e.styleParser?Pa(t):[];return o({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:A,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:r}},s)}var{styles:Ta}=C;function Qe(t){let e=c.autoReplaceSvg==="nest"?fe(t,{styleParser:!1}):fe(t);return~e.extra.classes.indexOf(Me)?N("generateLayersText",t,e):N("generateSvgReplacementMutation",t,e)}function La(){return[...hn,...pt]}function ue(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!S)return Promise.resolve();let n=p.documentElement.classList,a=d=>n.add("".concat(Jt,"-").concat(d)),i=d=>n.remove("".concat(Jt,"-").concat(d)),r=c.autoFetchSvg?La():we.concat(Object.keys(Ta));r.includes("fa")||r.push("fa");let s=[".".concat(Me,":not([").concat(D,"])")].concat(r.map(d=>".".concat(d,":not([").concat(D,"])"))).join(", ");if(s.length===0)return Promise.resolve();let l=[];try{l=Y(t.querySelectorAll(s))}catch{}if(l.length>0)a("pending"),i("complete");else return Promise.resolve();let u=Wt.begin("onTree"),f=l.reduce((d,h)=>{try{let m=Qe(h);m&&d.push(m)}catch(m){Pe||m.name==="MissingIcon"&&console.error(m)}return d},[]);return new Promise((d,h)=>{Promise.all(f).then(m=>{Ke(m,()=>{a("active"),a("complete"),i("pending"),typeof e=="function"&&e(),u(),d()})}).catch(m=>{u(),h(m)})})}function Da(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Qe(t).then(n=>{n&&Ke([n],e)})}function za(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:It(e||{}),{mask:i}=n;return i&&(i=(i||{}).icon?i:It(i||{})),t(a,o(o({},n),{},{mask:i}))}}var _a=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=A,symbol:a=!1,mask:i=null,maskId:r=null,title:s=null,titleId:l=null,classes:u=[],attributes:f={},styles:d={}}=e;if(!t)return;let{prefix:h,iconName:m,icon:y}=t;return st(o({type:"icon"},t),()=>(z("beforeDOMElementCreation",{iconDefinition:t,params:e}),c.autoA11y&&(s?f["aria-labelledby"]="".concat(c.replacementClass,"-title-").concat(l||B()):(f["aria-hidden"]="true",f.focusable="false")),jt({icons:{main:Ot(y),mask:i?Ot(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:m,transform:o(o({},A),n),symbol:a,title:s,maskId:r,titleId:l,extra:{attributes:f,styles:d,classes:u}})))},Ra={mixout(){return{icon:za(_a)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=ue,t.nodeCallback=Da,t}}},provides(t){t.i2svg=function(e){let{node:n=p,callback:a=()=>{}}=e;return ue(n,a)},t.generateSvgReplacementMutation=function(e,n){let{iconName:a,title:i,titleId:r,prefix:s,transform:l,symbol:u,mask:f,maskId:d,extra:h}=n;return new Promise((m,y)=>{Promise.all([St(a,s),f.iconName?St(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(E=>{let[T,x]=E;m([e,jt({icons:{main:T,mask:x},prefix:s,iconName:a,transform:l,symbol:u,maskId:d,title:i,titleId:r,extra:h,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:i,transform:r,styles:s}=e,l=at(s);l.length>0&&(a.style=l);let u;return zt(r)&&(u=N("generateAbstractTransformGrouping",{main:i,transform:r,containerWidth:i.width,iconWidth:i.width})),n.push(u||i.icon),{children:n,attributes:a}}}},ja={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:n=[]}=e;return st({type:"layer"},()=>{z("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(i=>{Array.isArray(i)?i.map(r=>{a=a.concat(r.abstract)}):a=a.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(c.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Wa={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:n=null,classes:a=[],attributes:i={},styles:r={}}=e;return st({type:"counter",content:t},()=>(z("beforeDOMElementCreation",{content:t,params:e}),ba({content:t.toString(),title:n,extra:{attributes:i,styles:r,classes:["".concat(c.cssPrefix,"-layers-counter"),...a]}})))}}}},Ha={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=A,title:a=null,classes:i=[],attributes:r={},styles:s={}}=e;return st({type:"text",content:t},()=>(z("beforeDOMElementCreation",{content:t,params:e}),re({content:t,transform:o(o({},A),n),title:a,extra:{attributes:r,styles:s,classes:["".concat(c.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){let{title:a,transform:i,extra:r}=n,s=null,l=null;if(Ae){let u=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();s=f.width/u,l=f.height/u}return c.autoA11y&&!a&&(r.attributes["aria-hidden"]="true"),Promise.resolve([e,re({content:e.innerHTML,width:s,height:l,transform:i,title:a,extra:r,watchable:!0})])}}},Ya=new RegExp('"',"ug"),de=[1105920,1112319],me=o(o(o(o({},{FontAwesome:{normal:"fas",400:"fas"}}),un),En),kn),Ft=Object.keys(me).reduce((t,e)=>(t[e.toLowerCase()]=me[e],t),{}),$a=Object.keys(Ft).reduce((t,e)=>{let n=Ft[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Ua(t){let e=t.replace(Ya,""),n=Qn(e,0),a=n>=de[0]&&n<=de[1],i=e.length===2?e[0]===e[1]:!1;return{value:kt(i?e[0]:e),isSecondary:a||i}}function Va(t,e){let n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),i=isNaN(a)?"normal":a;return(Ft[n]||{})[i]||$a[n]}function he(t,e){let n="".concat(Pn).concat(e.replace(":","-"));return new Promise((a,i)=>{if(t.getAttribute(n)!==null)return a();let s=Y(t.children).filter(m=>m.getAttribute(yt)===e)[0],l=F.getComputedStyle(t,e),u=l.getPropertyValue("font-family"),f=u.match(Ln),d=l.getPropertyValue("font-weight"),h=l.getPropertyValue("content");if(s&&!f)return t.removeChild(s),a();if(f&&h!=="none"&&h!==""){let m=l.getPropertyValue("content"),y=Va(u,d),{value:E,isSecondary:T}=Ua(m),x=f[0].startsWith("FontAwesome"),w=Rt(y,E),b=w;if(x){let k=aa(E);k.iconName&&k.prefix&&(w=k.iconName,y=k.prefix)}if(w&&!T&&(!s||s.getAttribute(Nt)!==y||s.getAttribute(Tt)!==b)){t.setAttribute(n,b),s&&t.removeChild(s);let k=Na(),{extra:_}=k;_.attributes[yt]=e,St(w,y).then(R=>{let Ze=jt(o(o({},k),{},{icons:{main:R,mask:Ve()},prefix:y,iconName:b,extra:_,watchable:!0})),ot=p.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(ot,t.firstChild):t.appendChild(ot),ot.outerHTML=Ze.map(tn=>K(tn)).join(`
`),t.removeAttribute(n),a()}).catch(i)}else a()}else a()})}function Ba(t){return Promise.all([he(t,"::before"),he(t,"::after")])}function Ga(t){return t.parentNode!==document.head&&!~Mn.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(yt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function pe(t){if(S)return new Promise((e,n)=>{let a=Y(t.querySelectorAll("*")).filter(Ga).map(Ba),i=Wt.begin("searchPseudoElements");qe(),Promise.all(a).then(()=>{i(),Pt(),e()}).catch(()=>{i(),Pt(),n()})})}var Xa={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=pe,t}}},provides(t){t.pseudoElements2svg=function(e){let{node:n=p}=e;c.searchPseudoElements&&pe(n)}}},ge=!1,Ka={mixout(){return{dom:{unwatch(){qe(),ge=!0}}}},hooks(){return{bootstrap(){ce(wt("mutationObserverCallbacks",{}))},noAuto(){Ea()},watch(t){let{observeMutationsRoot:e}=t;ge?Pt():ce(wt("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},ye=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{let i=a.toLowerCase().split("-"),r=i[0],s=i.slice(1).join("-");if(r&&s==="h")return n.flipX=!0,n;if(r&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(r){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)},qa={mixout(){return{parse:{transform:t=>ye(t)}}},hooks(){return{parseNodeAttributes(t,e){let n=e.getAttribute("data-fa-transform");return n&&(t.transform=ye(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:i,iconWidth:r}=e,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(f)},h={transform:"translate(".concat(r/2*-1," -256)")},m={outer:s,inner:d,path:h};return{tag:"g",attributes:o({},m.outer),children:[{tag:"g",attributes:o({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:o(o({},n.icon.attributes),m.path)}]}]}}}},mt={x:0,y:0,width:"100%",height:"100%"};function be(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Qa(t){return t.tag==="g"?t.children:[t]}var Ja={hooks(){return{parseNodeAttributes(t,e){let n=e.getAttribute("data-fa-mask"),a=n?rt(n.split(" ").map(i=>i.trim())):Ve();return a.prefix||(a.prefix=M()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:i,mask:r,maskId:s,transform:l}=e,{width:u,icon:f}=i,{width:d,icon:h}=r,m=Un({transform:l,containerWidth:d,iconWidth:u}),y={tag:"rect",attributes:o(o({},mt),{},{fill:"white"})},E=f.children?{children:f.children.map(be)}:{},T={tag:"g",attributes:o({},m.inner),children:[be(o({tag:f.tag,attributes:o(o({},f.attributes),m.path)},E))]},x={tag:"g",attributes:o({},m.outer),children:[T]},w="mask-".concat(s||B()),b="clip-".concat(s||B()),k={tag:"mask",attributes:o(o({},mt),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,x]},_={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:Qa(h)},k]};return n.push(_,{tag:"rect",attributes:o({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(w,")")},mt)}),{children:n,attributes:a}}}},Za={provides(t){let e=!1;F.matchMedia&&(e=F.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){let n=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:o(o({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let r=o(o({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:o(o({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:o(o({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:o(o({},r),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:o(o({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:o(o({},r),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:o(o({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:o(o({},r),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},ti={hooks(){return{parseNodeAttributes(t,e){let n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},ei=[Gn,Ra,ja,Wa,Ha,Xa,Ka,qa,Ja,Za,ti];ua(ei,{mixoutsTo:v});var di=v.noAuto,ni=v.config,mi=v.library,ai=v.dom,ii=v.parse,hi=v.findIconDefinition,pi=v.toHtml,ri=v.icon,gi=v.layer,si=v.text,oi=v.counter;var Ti=(()=>{class t{static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275mod=Ut({type:t})}static{this.\u0275inj=Yt({})}}return t})();var Je=class t{constructor(e){this.http=e}marketList={id:"",description:"",items:[],createDate:"",totalValue:0};endpoint="http://localhost:8080/market-lists";createMarketList(){this.http.post(this.endpoint,this.marketList).subscribe(e=>{alert("Lista criada com sucesso!"),this.marketList={id:"",description:"",items:[],createDate:"",totalValue:0}},e=>{console.error("Erro ao salvar:",e),alert("Erro ao salvar a lista.")})}getMarketLists(){return this.http.get(this.endpoint)}getMarketListById(e){return this.http.get(`${this.endpoint}/${e}`)}updateMarketList(e,n){return this.http.put(`${this.endpoint}/${e}`,n)}finishMarketList(e){return this.http.delete(`${this.endpoint}/${e}`)}static \u0275fac=function(n){return new(n||t)($t(Vt))};static \u0275prov=lt({token:t,factory:t.\u0275fac,providedIn:"root"})};export{Ti as a,Je as b};
