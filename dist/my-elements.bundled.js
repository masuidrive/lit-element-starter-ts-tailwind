/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t,e,i,o){for(var r,s=arguments.length,n=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o,a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),o=new Map;class r{constructor(t,e){if(this._$cssResult$=!0,e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=o.get(this.cssText);return e&&void 0===t&&(o.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const s=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1]),t[0]);return new r(o,i)},n=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var a;const l=window.trustedTypes,d=l?l.emptyScript:"",h=window.reactiveElementPolyfillSupport,c={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},u=(t,e)=>e!==t&&(e==e||t==t),b={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:u};class p extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const o=this._$Eh(i,e);void 0!==o&&(this._$Eu.set(o,i),t.push(o))})),t}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const r=this[t];this[e]=o,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||b}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{e?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((e=>{const i=document.createElement("style"),o=window.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=e.cssText,t.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=b){var o,r;const s=this.constructor._$Eh(t,i);if(void 0!==s&&!0===i.reflect){const n=(null!==(r=null===(o=i.converter)||void 0===o?void 0:o.toAttribute)&&void 0!==r?r:c.toAttribute)(e,i.type);this._$Ei=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Ei=null}}_$AK(t,e){var i,o,r;const s=this.constructor,n=s._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){const t=s.getPropertyOptions(n),a=t.converter,l=null!==(r=null!==(o=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==o?o:"function"==typeof a?a:null)&&void 0!==r?r:c.fromAttribute;this._$Ei=n,this[n]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let o=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var f;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:p}),(null!==(a=globalThis.reactiveElementVersions)&&void 0!==a?a:globalThis.reactiveElementVersions=[]).push("1.3.0");const g=globalThis.trustedTypes,m=g?g.createPolicy("lit-html",{createHTML:t=>t}):void 0,w=`lit$${(Math.random()+"").slice(9)}$`,v="?"+w,y=`<${v}>`,x=document,k=(t="")=>x.createComment(t),S=t=>null===t||"object"!=typeof t&&"function"!=typeof t,z=Array.isArray,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,A=/-->/g,R=/>/g,E=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,$=/'/g,U=/"/g,M=/^(?:script|style|textarea|title)$/i,j=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),_=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),O=new WeakMap,N=x.createTreeWalker(x,129,null,!1),T=(t,e)=>{const i=t.length-1,o=[];let r,s=2===e?"<svg>":"",n=C;for(let e=0;e<i;e++){const i=t[e];let a,l,d=-1,h=0;for(;h<i.length&&(n.lastIndex=h,l=n.exec(i),null!==l);)h=n.lastIndex,n===C?"!--"===l[1]?n=A:void 0!==l[1]?n=R:void 0!==l[2]?(M.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=E):void 0!==l[3]&&(n=E):n===E?">"===l[0]?(n=null!=r?r:C,d=-1):void 0===l[1]?d=-2:(d=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?E:'"'===l[3]?U:$):n===U||n===$?n=E:n===A||n===R?n=C:(n=E,r=void 0);const c=n===E&&t[e+1].startsWith("/>")?" ":"";s+=n===C?i+y:d>=0?(o.push(a),i.slice(0,d)+"$lit$"+i.slice(d)+w+c):i+w+(-2===d?(o.push(void 0),e):c)}const a=s+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==m?m.createHTML(a):a,o]};class I{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let r=0,s=0;const n=t.length-1,a=this.parts,[l,d]=T(t,e);if(this.el=I.createElement(l,i),N.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=N.nextNode())&&a.length<n;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(w)){const i=d[s++];if(t.push(e),void 0!==i){const t=o.getAttribute(i.toLowerCase()+"$lit$").split(w),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?q:"?"===e[1]?V:"@"===e[1]?D:B})}else a.push({type:6,index:r})}for(const e of t)o.removeAttribute(e)}if(M.test(o.tagName)){const t=o.textContent.split(w),e=t.length-1;if(e>0){o.textContent=g?g.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],k()),N.nextNode(),a.push({type:2,index:++r});o.append(t[e],k())}}}else if(8===o.nodeType)if(o.data===v)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=o.data.indexOf(w,t+1));)a.push({type:7,index:r}),t+=w.length-1}r++}}static createElement(t,e){const i=x.createElement("template");return i.innerHTML=t,i}}function L(t,e,i=t,o){var r,s,n,a;if(e===_)return e;let l=void 0!==o?null===(r=i._$Cl)||void 0===r?void 0:r[o]:i._$Cu;const d=S(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(s=null==l?void 0:l._$AO)||void 0===s||s.call(l,!1),void 0===d?l=void 0:(l=new d(t),l._$AT(t,i,o)),void 0!==o?(null!==(n=(a=i)._$Cl)&&void 0!==n?n:a._$Cl=[])[o]=l:i._$Cu=l),void 0!==l&&(e=L(t,l._$AS(t,e.values),l,o)),e}class P{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:o}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:x).importNode(i,!0);N.currentNode=r;let s=N.nextNode(),n=0,a=0,l=o[0];for(;void 0!==l;){if(n===l.index){let e;2===l.type?e=new H(s,s.nextSibling,this,t):1===l.type?e=new l.ctor(s,l.name,l.strings,this,t):6===l.type&&(e=new J(s,this,t)),this.v.push(e),l=o[++a]}n!==(null==l?void 0:l.index)&&(s=N.nextNode(),n++)}return r}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class H{constructor(t,e,i,o){var r;this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cg=null===(r=null==o?void 0:o.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=L(this,t,e),S(t)?t===F||null==t||""===t?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==_&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var e;return z(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.S(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==F&&S(this._$AH)?this._$AA.nextSibling.data=t:this.k(x.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:o}=t,r="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=I.createElement(o.h,this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.m(i);else{const t=new P(r,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=O.get(t.strings);return void 0===e&&O.set(t.strings,e=new I(t)),e}S(t){z(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const r of t)o===e.length?e.push(i=new H(this.A(k()),this.A(k()),this,this.options)):i=e[o],i._$AI(r),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class B{constructor(t,e,i,o,r){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=F}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const r=this.strings;let s=!1;if(void 0===r)t=L(this,t,e,0),s=!S(t)||t!==this._$AH&&t!==_,s&&(this._$AH=t);else{const o=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=L(this,o[i+n],e,n),a===_&&(a=this._$AH[n]),s||(s=!S(a)||a!==this._$AH[n]),a===F?t=F:t!==F&&(t+=(null!=a?a:"")+r[n+1]),this._$AH[n]=a}s&&!o&&this.C(t)}C(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class q extends B{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===F?void 0:t}}const Z=g?g.emptyScript:"";class V extends B{constructor(){super(...arguments),this.type=4}C(t){t&&t!==F?this.element.setAttribute(this.name,Z):this.element.removeAttribute(this.name)}}class D extends B{constructor(t,e,i,o,r){super(t,e,i,o,r),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=L(this,t,e,0))&&void 0!==i?i:F)===_)return;const o=this._$AH,r=t===F&&o!==F||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==F&&(o===F||r);r&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class J{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){L(this,t)}}const K=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var W,G;null==K||K(I,H),(null!==(f=globalThis.litHtmlVersions)&&void 0!==f?f:globalThis.litHtmlVersions=[]).push("2.2.0");class Q extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var o,r;const s=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:e;let n=s._$litPart$;if(void 0===n){const t=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;s._$litPart$=n=new H(e.insertBefore(k(),t),t,void 0,null!=i?i:{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return _}}Q.finalized=!0,Q._$litElement$=!0,null===(W=globalThis.litElementHydrateSupport)||void 0===W||W.call(globalThis,{LitElement:Q});const X=globalThis.litElementPolyfillSupport;null==X||X({LitElement:Q}),(null!==(G=globalThis.litElementVersions)&&void 0!==G?G:globalThis.litElementVersions=[]).push("3.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Y=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:o}=e;return{kind:i,elements:o,finisher(e){window.customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,tt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function et(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):tt(t,e)
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}var it;null===(it=window.HTMLSlotElement)||void 0===it||it.prototype.assignedElements;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let ot=class extends Q{constructor(){super(...arguments),this.name="World",this.count=0}render(){return j`
      <h1 class="text-purple-400 md:text-red-400 md:hover:text-green-500">
        ${this.sayHello(this.name)}!
      </h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `}_onClick(){this.count++,this.dispatchEvent(new CustomEvent("count-changed"))}sayHello(t){return`Hello, ${t}`}};ot.styles=s`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
    /*
! tailwindcss v3.0.23 | MIT License | https\://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https\://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https\://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
\:\:before,
\:\:after {
  box-sizing\: border-box; /* 1 */
  border-width\: 0; /* 2 */
  border-style\: solid; /* 2 */
  border-color\: #e5e7eb; /* 2 */
}

\:\:before,
\:\:after {
  --tw-content\: \'\';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user\'s configured \`sans\` font-family by default.
*/

html {
  line-height\: 1.5; /* 1 */
  -webkit-text-size-adjust\: 100%; /* 2 */
  -moz-tab-size\: 4; /* 3 */
  -o-tab-size\: 4;
     tab-size\: 4; /* 3 */
  font-family\: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin\: 0; /* 1 */
  line-height\: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https\://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height\: 0; /* 1 */
  color\: inherit; /* 2 */
  border-top-width\: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr\:where([title]) {
  -webkit-text-decoration\: underline dotted;
          text-decoration\: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size\: inherit;
  font-weight\: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color\: inherit;
  text-decoration\: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight\: bolder;
}

/*
1. Use the user\'s configured \`mono\` font family by default.
2. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family\: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */
  font-size\: 1em; /* 2 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size\: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size\: 75%;
  line-height\: 0;
  position\: relative;
  vertical-align\: baseline;
}

sub {
  bottom\: -0.25em;
}

sup {
  top\: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https\://bugs.chromium.org/p/chromium/issues/detail?id=999088, https\://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https\://bugs.chromium.org/p/chromium/issues/detail?id=935729, https\://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent\: 0; /* 1 */
  border-color\: inherit; /* 2 */
  border-collapse\: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family\: inherit; /* 1 */
  font-size\: 100%; /* 1 */
  line-height\: inherit; /* 1 */
  color\: inherit; /* 1 */
  margin\: 0; /* 2 */
  padding\: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform\: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type=\'button\'],
[type=\'reset\'],
[type=\'submit\'] {
  -webkit-appearance\: button; /* 1 */
  background-color\: transparent; /* 2 */
  background-image\: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

\:-moz-focusring {
  outline\: auto;
}

/*
Remove the additional \`\:invalid\` styles in Firefox. (https\://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

\:-moz-ui-invalid {
  box-shadow\: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align\: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

\:\:-webkit-inner-spin-button,
\:\:-webkit-outer-spin-button {
  height\: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type=\'search\'] {
  -webkit-appearance\: textfield; /* 1 */
  outline-offset\: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

\:\:-webkit-search-decoration {
  -webkit-appearance\: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

\:\:-webkit-file-upload-button {
  -webkit-appearance\: button; /* 1 */
  font\: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display\: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin\: 0;
}

fieldset {
  margin\: 0;
  padding\: 0;
}

legend {
  padding\: 0;
}

ol,
ul,
menu {
  list-style\: none;
  margin\: 0;
  padding\: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize\: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https\://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user\'s configured gray 400 color.
*/

input\:\:-moz-placeholder, textarea\:\:-moz-placeholder {
  opacity\: 1; /* 1 */
  color\: #9ca3af; /* 2 */
}

input\:-ms-input-placeholder, textarea\:-ms-input-placeholder {
  opacity\: 1; /* 1 */
  color\: #9ca3af; /* 2 */
}

input\:\:placeholder,
textarea\:\:placeholder {
  opacity\: 1; /* 1 */
  color\: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role=\"button\"] {
  cursor\: pointer;
}

/*
Make sure disabled buttons don\'t get the pointer cursor.
*/
\:disabled {
  cursor\: default;
}

/*
1. Make replaced elements \`display\: block\` by default. (https\://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align\: middle\` to align replaced elements more sensibly by default. (https\://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display\: block; /* 1 */
  vertical-align\: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https\://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width\: 100%;
  height\: auto;
}

/*
Ensure the default browser behavior of the \`hidden\` attribute.
*/

[hidden] {
  display\: none;
}

*, \:\:before, \:\:after {
  --tw-translate-x\: 0;
  --tw-translate-y\: 0;
  --tw-rotate\: 0;
  --tw-skew-x\: 0;
  --tw-skew-y\: 0;
  --tw-scale-x\: 1;
  --tw-scale-y\: 1;
  --tw-pan-x\:  ;
  --tw-pan-y\:  ;
  --tw-pinch-zoom\:  ;
  --tw-scroll-snap-strictness\: proximity;
  --tw-ordinal\:  ;
  --tw-slashed-zero\:  ;
  --tw-numeric-figure\:  ;
  --tw-numeric-spacing\:  ;
  --tw-numeric-fraction\:  ;
  --tw-ring-inset\:  ;
  --tw-ring-offset-width\: 0px;
  --tw-ring-offset-color\: #fff;
  --tw-ring-color\: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow\: 0 0 #0000;
  --tw-ring-shadow\: 0 0 #0000;
  --tw-shadow\: 0 0 #0000;
  --tw-shadow-colored\: 0 0 #0000;
  --tw-blur\:  ;
  --tw-brightness\:  ;
  --tw-contrast\:  ;
  --tw-grayscale\:  ;
  --tw-hue-rotate\:  ;
  --tw-invert\:  ;
  --tw-saturate\:  ;
  --tw-sepia\:  ;
  --tw-drop-shadow\:  ;
  --tw-backdrop-blur\:  ;
  --tw-backdrop-brightness\:  ;
  --tw-backdrop-contrast\:  ;
  --tw-backdrop-grayscale\:  ;
  --tw-backdrop-hue-rotate\:  ;
  --tw-backdrop-invert\:  ;
  --tw-backdrop-opacity\:  ;
  --tw-backdrop-saturate\:  ;
  --tw-backdrop-sepia\:  ;
}
.static {
  position\: static;
}
.border {
  border-width\: 1px;
}
.text-purple-400 {
  --tw-text-opacity\: 1;
  color\: rgb(192 132 252 / var(--tw-text-opacity));
}
@media (min-width\: 768px) {

  .md\\:text-red-400 {
    --tw-text-opacity\: 1;
    color\: rgb(248 113 113 / var(--tw-text-opacity));
  }

  .md\\:hover\\:text-green-500\:hover {
    --tw-text-opacity\: 1;
    color\: rgb(34 197 94 / var(--tw-text-opacity));
  }
}
`,t([et()],ot.prototype,"name",void 0),t([et({type:Number})],ot.prototype,"count",void 0),ot=t([Y("my-element")],ot);let rt=class extends Q{render(){return j`
      <div
        class="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md"
      >
        <div class="flex items-center justify-center w-12 bg-red-500">
          <svg
            class="w-6 h-6 text-white fill-current"
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"
            />
          </svg>
        </div>
        <div class="px-4 py-2 -mx-3">
          <div class="mx-3">
            <slot name="title" class="block font-semibold text-red-500"></slot>
            <slot name="description" class="block text-sm text-gray-600"></slot>
          </div>
        </div>
      </div>
    `}};rt.styles=s`
    :host {
      font-family: var(font-family);
    }
    /*
! tailwindcss v3.0.23 | MIT License | https\://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https\://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https\://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
\:\:before,
\:\:after {
  box-sizing\: border-box; /* 1 */
  border-width\: 0; /* 2 */
  border-style\: solid; /* 2 */
  border-color\: #e5e7eb; /* 2 */
}

\:\:before,
\:\:after {
  --tw-content\: \'\';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user\'s configured \`sans\` font-family by default.
*/

html {
  line-height\: 1.5; /* 1 */
  -webkit-text-size-adjust\: 100%; /* 2 */
  -moz-tab-size\: 4; /* 3 */
  -o-tab-size\: 4;
     tab-size\: 4; /* 3 */
  font-family\: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin\: 0; /* 1 */
  line-height\: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https\://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height\: 0; /* 1 */
  color\: inherit; /* 2 */
  border-top-width\: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr\:where([title]) {
  -webkit-text-decoration\: underline dotted;
          text-decoration\: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size\: inherit;
  font-weight\: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color\: inherit;
  text-decoration\: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight\: bolder;
}

/*
1. Use the user\'s configured \`mono\` font family by default.
2. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family\: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */
  font-size\: 1em; /* 2 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size\: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size\: 75%;
  line-height\: 0;
  position\: relative;
  vertical-align\: baseline;
}

sub {
  bottom\: -0.25em;
}

sup {
  top\: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https\://bugs.chromium.org/p/chromium/issues/detail?id=999088, https\://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https\://bugs.chromium.org/p/chromium/issues/detail?id=935729, https\://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent\: 0; /* 1 */
  border-color\: inherit; /* 2 */
  border-collapse\: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family\: inherit; /* 1 */
  font-size\: 100%; /* 1 */
  line-height\: inherit; /* 1 */
  color\: inherit; /* 1 */
  margin\: 0; /* 2 */
  padding\: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform\: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type=\'button\'],
[type=\'reset\'],
[type=\'submit\'] {
  -webkit-appearance\: button; /* 1 */
  background-color\: transparent; /* 2 */
  background-image\: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

\:-moz-focusring {
  outline\: auto;
}

/*
Remove the additional \`\:invalid\` styles in Firefox. (https\://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

\:-moz-ui-invalid {
  box-shadow\: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align\: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

\:\:-webkit-inner-spin-button,
\:\:-webkit-outer-spin-button {
  height\: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type=\'search\'] {
  -webkit-appearance\: textfield; /* 1 */
  outline-offset\: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

\:\:-webkit-search-decoration {
  -webkit-appearance\: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

\:\:-webkit-file-upload-button {
  -webkit-appearance\: button; /* 1 */
  font\: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display\: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin\: 0;
}

fieldset {
  margin\: 0;
  padding\: 0;
}

legend {
  padding\: 0;
}

ol,
ul,
menu {
  list-style\: none;
  margin\: 0;
  padding\: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize\: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https\://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user\'s configured gray 400 color.
*/

input\:\:-moz-placeholder, textarea\:\:-moz-placeholder {
  opacity\: 1; /* 1 */
  color\: #9ca3af; /* 2 */
}

input\:-ms-input-placeholder, textarea\:-ms-input-placeholder {
  opacity\: 1; /* 1 */
  color\: #9ca3af; /* 2 */
}

input\:\:placeholder,
textarea\:\:placeholder {
  opacity\: 1; /* 1 */
  color\: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role=\"button\"] {
  cursor\: pointer;
}

/*
Make sure disabled buttons don\'t get the pointer cursor.
*/
\:disabled {
  cursor\: default;
}

/*
1. Make replaced elements \`display\: block\` by default. (https\://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align\: middle\` to align replaced elements more sensibly by default. (https\://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display\: block; /* 1 */
  vertical-align\: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https\://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width\: 100%;
  height\: auto;
}

/*
Ensure the default browser behavior of the \`hidden\` attribute.
*/

[hidden] {
  display\: none;
}

*, \:\:before, \:\:after {
  --tw-translate-x\: 0;
  --tw-translate-y\: 0;
  --tw-rotate\: 0;
  --tw-skew-x\: 0;
  --tw-skew-y\: 0;
  --tw-scale-x\: 1;
  --tw-scale-y\: 1;
  --tw-pan-x\:  ;
  --tw-pan-y\:  ;
  --tw-pinch-zoom\:  ;
  --tw-scroll-snap-strictness\: proximity;
  --tw-ordinal\:  ;
  --tw-slashed-zero\:  ;
  --tw-numeric-figure\:  ;
  --tw-numeric-spacing\:  ;
  --tw-numeric-fraction\:  ;
  --tw-ring-inset\:  ;
  --tw-ring-offset-width\: 0px;
  --tw-ring-offset-color\: #fff;
  --tw-ring-color\: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow\: 0 0 #0000;
  --tw-ring-shadow\: 0 0 #0000;
  --tw-shadow\: 0 0 #0000;
  --tw-shadow-colored\: 0 0 #0000;
  --tw-blur\:  ;
  --tw-brightness\:  ;
  --tw-contrast\:  ;
  --tw-grayscale\:  ;
  --tw-hue-rotate\:  ;
  --tw-invert\:  ;
  --tw-saturate\:  ;
  --tw-sepia\:  ;
  --tw-drop-shadow\:  ;
  --tw-backdrop-blur\:  ;
  --tw-backdrop-brightness\:  ;
  --tw-backdrop-contrast\:  ;
  --tw-backdrop-grayscale\:  ;
  --tw-backdrop-hue-rotate\:  ;
  --tw-backdrop-invert\:  ;
  --tw-backdrop-opacity\:  ;
  --tw-backdrop-saturate\:  ;
  --tw-backdrop-sepia\:  ;
}
.static {
  position\: static;
}
.mx-auto {
  margin-left\: auto;
  margin-right\: auto;
}
.-mx-3 {
  margin-left\: -0.75rem;
  margin-right\: -0.75rem;
}
.mx-3 {
  margin-left\: 0.75rem;
  margin-right\: 0.75rem;
}
.block {
  display\: block;
}
.flex {
  display\: flex;
}
.h-6 {
  height\: 1.5rem;
}
.w-full {
  width\: 100%;
}
.w-12 {
  width\: 3rem;
}
.w-6 {
  width\: 1.5rem;
}
.max-w-sm {
  max-width\: 24rem;
}
.items-center {
  align-items\: center;
}
.justify-center {
  justify-content\: center;
}
.overflow-hidden {
  overflow\: hidden;
}
.rounded-lg {
  border-radius\: 0.5rem;
}
.bg-white {
  --tw-bg-opacity\: 1;
  background-color\: rgb(255 255 255 / var(--tw-bg-opacity));
}
.bg-red-500 {
  --tw-bg-opacity\: 1;
  background-color\: rgb(239 68 68 / var(--tw-bg-opacity));
}
.fill-current {
  fill\: currentColor;
}
.px-4 {
  padding-left\: 1rem;
  padding-right\: 1rem;
}
.py-2 {
  padding-top\: 0.5rem;
  padding-bottom\: 0.5rem;
}
.text-sm {
  font-size\: 0.875rem;
  line-height\: 1.25rem;
}
.font-semibold {
  font-weight\: 600;
}
.text-white {
  --tw-text-opacity\: 1;
  color\: rgb(255 255 255 / var(--tw-text-opacity));
}
.text-red-500 {
  --tw-text-opacity\: 1;
  color\: rgb(239 68 68 / var(--tw-text-opacity));
}
.text-gray-600 {
  --tw-text-opacity\: 1;
  color\: rgb(75 85 99 / var(--tw-text-opacity));
}
.shadow-md {
  --tw-shadow\: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored\: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow\: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

`,rt=t([Y("my-error")],rt);
/**
 * @license
 * Copyright 2022- masuidrive
 * SPDX-License-Identifier: BSD-3-Clause
 */
let st=class extends Q{render(){return j`
      <button
        type="button"
        class="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
      >
        <slot></slot>
      </button>
    `}};st.styles=s`
    :host {
      font-family: var(font-family);
    }
    /*
! tailwindcss v3.0.23 | MIT License | https\://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https\://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https\://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
\:\:before,
\:\:after {
  box-sizing\: border-box; /* 1 */
  border-width\: 0; /* 2 */
  border-style\: solid; /* 2 */
  border-color\: #e5e7eb; /* 2 */
}

\:\:before,
\:\:after {
  --tw-content\: \'\';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user\'s configured \`sans\` font-family by default.
*/

html {
  line-height\: 1.5; /* 1 */
  -webkit-text-size-adjust\: 100%; /* 2 */
  -moz-tab-size\: 4; /* 3 */
  -o-tab-size\: 4;
     tab-size\: 4; /* 3 */
  font-family\: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin\: 0; /* 1 */
  line-height\: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https\://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height\: 0; /* 1 */
  color\: inherit; /* 2 */
  border-top-width\: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr\:where([title]) {
  -webkit-text-decoration\: underline dotted;
          text-decoration\: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size\: inherit;
  font-weight\: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color\: inherit;
  text-decoration\: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight\: bolder;
}

/*
1. Use the user\'s configured \`mono\` font family by default.
2. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family\: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */
  font-size\: 1em; /* 2 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size\: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size\: 75%;
  line-height\: 0;
  position\: relative;
  vertical-align\: baseline;
}

sub {
  bottom\: -0.25em;
}

sup {
  top\: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https\://bugs.chromium.org/p/chromium/issues/detail?id=999088, https\://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https\://bugs.chromium.org/p/chromium/issues/detail?id=935729, https\://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent\: 0; /* 1 */
  border-color\: inherit; /* 2 */
  border-collapse\: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family\: inherit; /* 1 */
  font-size\: 100%; /* 1 */
  line-height\: inherit; /* 1 */
  color\: inherit; /* 1 */
  margin\: 0; /* 2 */
  padding\: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform\: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type=\'button\'],
[type=\'reset\'],
[type=\'submit\'] {
  -webkit-appearance\: button; /* 1 */
  background-color\: transparent; /* 2 */
  background-image\: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

\:-moz-focusring {
  outline\: auto;
}

/*
Remove the additional \`\:invalid\` styles in Firefox. (https\://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

\:-moz-ui-invalid {
  box-shadow\: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align\: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

\:\:-webkit-inner-spin-button,
\:\:-webkit-outer-spin-button {
  height\: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type=\'search\'] {
  -webkit-appearance\: textfield; /* 1 */
  outline-offset\: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

\:\:-webkit-search-decoration {
  -webkit-appearance\: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

\:\:-webkit-file-upload-button {
  -webkit-appearance\: button; /* 1 */
  font\: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display\: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin\: 0;
}

fieldset {
  margin\: 0;
  padding\: 0;
}

legend {
  padding\: 0;
}

ol,
ul,
menu {
  list-style\: none;
  margin\: 0;
  padding\: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize\: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https\://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user\'s configured gray 400 color.
*/

input\:\:-moz-placeholder, textarea\:\:-moz-placeholder {
  opacity\: 1; /* 1 */
  color\: #9ca3af; /* 2 */
}

input\:-ms-input-placeholder, textarea\:-ms-input-placeholder {
  opacity\: 1; /* 1 */
  color\: #9ca3af; /* 2 */
}

input\:\:placeholder,
textarea\:\:placeholder {
  opacity\: 1; /* 1 */
  color\: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role=\"button\"] {
  cursor\: pointer;
}

/*
Make sure disabled buttons don\'t get the pointer cursor.
*/
\:disabled {
  cursor\: default;
}

/*
1. Make replaced elements \`display\: block\` by default. (https\://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align\: middle\` to align replaced elements more sensibly by default. (https\://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display\: block; /* 1 */
  vertical-align\: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https\://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width\: 100%;
  height\: auto;
}

/*
Ensure the default browser behavior of the \`hidden\` attribute.
*/

[hidden] {
  display\: none;
}

*, \:\:before, \:\:after {
  --tw-translate-x\: 0;
  --tw-translate-y\: 0;
  --tw-rotate\: 0;
  --tw-skew-x\: 0;
  --tw-skew-y\: 0;
  --tw-scale-x\: 1;
  --tw-scale-y\: 1;
  --tw-pan-x\:  ;
  --tw-pan-y\:  ;
  --tw-pinch-zoom\:  ;
  --tw-scroll-snap-strictness\: proximity;
  --tw-ordinal\:  ;
  --tw-slashed-zero\:  ;
  --tw-numeric-figure\:  ;
  --tw-numeric-spacing\:  ;
  --tw-numeric-fraction\:  ;
  --tw-ring-inset\:  ;
  --tw-ring-offset-width\: 0px;
  --tw-ring-offset-color\: #fff;
  --tw-ring-color\: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow\: 0 0 #0000;
  --tw-ring-shadow\: 0 0 #0000;
  --tw-shadow\: 0 0 #0000;
  --tw-shadow-colored\: 0 0 #0000;
  --tw-blur\:  ;
  --tw-brightness\:  ;
  --tw-contrast\:  ;
  --tw-grayscale\:  ;
  --tw-hue-rotate\:  ;
  --tw-invert\:  ;
  --tw-saturate\:  ;
  --tw-sepia\:  ;
  --tw-drop-shadow\:  ;
  --tw-backdrop-blur\:  ;
  --tw-backdrop-brightness\:  ;
  --tw-backdrop-contrast\:  ;
  --tw-backdrop-grayscale\:  ;
  --tw-backdrop-hue-rotate\:  ;
  --tw-backdrop-invert\:  ;
  --tw-backdrop-opacity\:  ;
  --tw-backdrop-saturate\:  ;
  --tw-backdrop-sepia\:  ;
}
.static {
  position\: static;
}
.w-full {
  width\: 100%;
}
.rounded-lg {
  border-radius\: 0.5rem;
}
.bg-indigo-600 {
  --tw-bg-opacity\: 1;
  background-color\: rgb(79 70 229 / var(--tw-bg-opacity));
}
.py-2 {
  padding-top\: 0.5rem;
  padding-bottom\: 0.5rem;
}
.px-4 {
  padding-left\: 1rem;
  padding-right\: 1rem;
}
.text-center {
  text-align\: center;
}
.font-semibold {
  font-weight\: 600;
}
.text-white {
  --tw-text-opacity\: 1;
  color\: rgb(255 255 255 / var(--tw-text-opacity));
}
.shadow-md {
  --tw-shadow\: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored\: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow\: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.transition {
  transition-property\: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-property\: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property\: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-timing-function\: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration\: 150ms;
}
.duration-200 {
  transition-duration\: 200ms;
}
.ease-in {
  transition-timing-function\: cubic-bezier(0.4, 0, 1, 1);
}
.hover\\:bg-indigo-700\:hover {
  --tw-bg-opacity\: 1;
  background-color\: rgb(67 56 202 / var(--tw-bg-opacity));
}
.focus\\:outline-none\:focus {
  outline\: 2px solid transparent;
  outline-offset\: 2px;
}
.focus\\:ring-2\:focus {
  --tw-ring-offset-shadow\: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow\: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow\: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.focus\\:ring-indigo-500\:focus {
  --tw-ring-opacity\: 1;
  --tw-ring-color\: rgb(99 102 241 / var(--tw-ring-opacity));
}
.focus\\:ring-offset-2\:focus {
  --tw-ring-offset-width\: 2px;
}
.focus\\:ring-offset-indigo-200\:focus {
  --tw-ring-offset-color\: #c7d2fe;
}

`,st=t([Y("my-button")],st);
/**
 * @license
 * Copyright 2022- masuidrive
 * SPDX-License-Identifier: BSD-3-Clause
 */
export{st as MyButton,ot as MyElement,rt as MyError};
//# sourceMappingURL=my-elements.bundled.js.map
