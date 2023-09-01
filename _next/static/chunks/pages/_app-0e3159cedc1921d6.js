(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4444:function(e,t,n){"use strict";n.d(t,{BH:function(){return u},L:function(){return o},LL:function(){return v},ZR:function(){return y},b$:function(){return f},eu:function(){return m},hl:function(){return g},m9:function(){return A},ne:function(){return S},pd:function(){return _},ru:function(){return d},tV:function(){return l},uI:function(){return c},vZ:function(){return function e(t,n){if(t===n)return!0;let r=Object.keys(t),i=Object.keys(n);for(let s of r){if(!i.includes(s))return!1;let a=t[s],o=n[s];if(E(a)&&E(o)){if(!e(a,o))return!1}else if(a!==o)return!1}for(let l of i)if(!r.includes(l))return!1;return!0}},w1:function(){return p},xO:function(){return T},xb:function(){return I},z$:function(){return h},zd:function(){return b}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let r=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):(64512&i)==55296&&r+1<e.length&&(64512&e.charCodeAt(r+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){let a=e[n++],o=e[n++],l=e[n++],u=((7&i)<<18|(63&a)<<12|(63&o)<<6|63&l)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(1023&u))}else{let h=e[n++],c=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&h)<<6|63&c)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){let s=e[i],a=i+1<e.length,o=a?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,h=s>>2,c=(3&s)<<4|o>>4,d=(15&o)<<2|u>>6,f=63&u;l||(f=64,a||(d=64)),r.push(n[h],n[c],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){let s=n[e.charAt(i++)],a=i<e.length,o=a?n[e.charAt(i)]:0;++i;let l=i<e.length,u=l?n[e.charAt(i)]:64;++i;let h=i<e.length,c=h?n[e.charAt(i)]:64;if(++i,null==s||null==o||null==u||null==c)throw Error();let d=s<<2|o>>4;if(r.push(d),64!==u){let f=o<<4&240|u>>2;if(r.push(f),64!==c){let p=u<<6&192|c;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},a=function(e){let t=r(e);return s.encodeByteArray(t,!0)},o=function(e){return a(e).replace(/\./g,"")},l=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class u{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function h(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function c(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(h())}function d(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function f(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function p(){let e=h();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function g(){return"object"==typeof indexedDB}function m(){return new Promise((e,t)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(s){t(s)}})}class y extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,y.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,v.prototype.create)}}class v{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){var n,r;let i=t[0]||{},s=`${this.service}/${e}`,a=this.errors[e],o=a?(n=a,r=i,n.replace(w,(e,t)=>{let n=r[t];return null!=n?String(n):`<${t}?>`})):"Error",l=`${this.serviceName}: ${o} (${s}).`,u=new y(s,l,i);return u}}let w=/\{\$([^}]+)}/g;function I(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function E(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function T(e){let t=[];for(let[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function b(e){let t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){let[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function _(e){let t=e.indexOf("?");if(!t)return"";let n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function S(e,t){let n=new C(e,t);return n.subscribe.bind(n)}class C{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw Error("Missing Observer.");void 0===(r=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:n}:e).next&&(r.next=k),void 0===r.error&&(r.error=k),void 0===r.complete&&(r.complete=k);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!=typeof console&&console.error&&console.error(n)}})}close(e){!this.finalized&&(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function k(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function A(e){return e&&e._delegate?e._delegate:e}},7015:function(e,t,n){"use strict";n.d(t,{Xb:function(){return eK},v0:function(){return tH},Aj:function(){return eG},e5:function(){return e$},w7:function(){return eW}});var r,i=n(4444),s=n(5816),a=n(655),o=n(3333),l=n(8463);function u(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}let h=new i.LL("auth","Firebase",u()),c=new o.Yd("@firebase/auth");function d(e,...t){c.logLevel<=o.in.ERROR&&c.error(`Auth (${s.Jn}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function f(e,...t){throw g(e,...t)}function p(e,...t){return g(e,...t)}function g(e,...t){if("string"!=typeof e){let n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return h.create(e,...t)}function m(e,t,...n){if(!e)throw g(t,...n)}function y(e){let t="INTERNAL ASSERTION FAILED: "+e;throw d(t),Error(t)}function v(e,t){e||y(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let w=new Map;function I(e){v(e instanceof Function,"Expected a class definition");let t=w.get(e);return t?(v(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,w.set(e,t),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function E(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function T(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class b{constructor(e,t){this.shortDelay=e,this.longDelay=t,v(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.uI)()||(0,i.b$)()}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===T()||"https:"===T()||(0,i.ru)()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function _(e,t){v(e.emulator,"Emulator should always be set here");let{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class S{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let C={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},k=new b(3e4,6e4);function A(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function N(e,t,n,r,s={}){return D(e,s,async()=>{let s={},a={};r&&("GET"===t?a=r:s={body:JSON.stringify(r)});let o=(0,i.xO)(Object.assign({key:e.config.apiKey},a)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),S.fetch()(O(e,e.config.apiHost,n,o),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function D(e,t,n){e._canInitEmulator=!1;let r=Object.assign(Object.assign({},C),t);try{let s=new L(e),a=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();let o=await a.json();if("needConfirmation"in o)throw P(e,"account-exists-with-different-credential",o);if(a.ok&&!("errorMessage"in o))return o;{let l=a.ok?o.errorMessage:o.error.message,[h,c]=l.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===h)throw P(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===h)throw P(e,"email-already-in-use",o);if("USER_DISABLED"===h)throw P(e,"user-disabled",o);let d=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw function(e,t,n){let r=Object.assign(Object.assign({},u()),{[t]:n}),s=new i.LL("auth","Firebase",r);return s.create(t,{appName:e.name})}(e,d,c);f(e,d)}}catch(p){if(p instanceof i.ZR)throw p;f(e,"network-request-failed")}}async function R(e,t,n,r,i={}){let s=await N(e,t,n,r,i);return"mfaPendingCredential"in s&&f(e,"multi-factor-auth-required",{_serverResponse:s}),s}function O(e,t,n,r){let i=`${t}${n}?${r}`;return e.config.emulator?_(e.config,i):`${e.config.apiScheme}://${i}`}class L{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(p(this.auth,"network-request-failed")),k.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function P(e,t,n){let r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);let i=p(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function M(e,t){return N(e,"POST","/v1/accounts:delete",t)}async function x(e,t){return N(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function U(e){if(e)try{let t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(n){}}async function V(e,t=!1){let n=(0,i.m9)(e),r=await n.getIdToken(t),s=j(r);m(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");let a="object"==typeof s.firebase?s.firebase:void 0,o=null==a?void 0:a.sign_in_provider;return{claims:s,token:r,authTime:U(F(s.auth_time)),issuedAtTime:U(F(s.iat)),expirationTime:U(F(s.exp)),signInProvider:o||null,signInSecondFactor:(null==a?void 0:a.sign_in_second_factor)||null}}function F(e){return 1e3*Number(e)}function j(e){var t;let[n,r,s]=e.split(".");if(void 0===n||void 0===r||void 0===s)return d("JWT malformed, contained fewer than 3 sections"),null;try{let a=(0,i.tV)(r);if(!a)return d("Failed to decode base64 JWT payload"),null;return JSON.parse(a)}catch(o){return d("Caught error parsing JWT payload as JSON",null===(t=o)||void 0===t?void 0:t.toString()),null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function B(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof i.ZR&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class q{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){!this.isRunning&&(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}{this.errorBackoff=3e4;let r=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,i=r-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){(null===(e=t)||void 0===e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class H{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=U(this.lastLoginAt),this.creationTime=U(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function z(e){var t,n;let r=e.auth,i=await e.getIdToken(),s=await B(e,x(r,{idToken:i}));m(null==s?void 0:s.users.length,r,"internal-error");let o=s.users[0];e._notifyReloadListener(o);let l=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?(n=o.providerUserInfo,n.map(e=>{var{providerId:t}=e,n=(0,a.__rest)(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[],u=function(e,t){let n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}(e.providerData,l),h=e.isAnonymous,c=!(e.email&&o.passwordHash)&&!(null==u?void 0:u.length),d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new H(o.createdAt,o.lastLoginAt),isAnonymous:!!h&&c};Object.assign(e,d)}async function K(e){let t=(0,i.m9)(e);await z(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function $(e,t){let n=await D(e,{},async()=>{let n=(0,i.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,a=O(e,r,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",S.fetch()(a,{method:"POST",headers:o,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class G{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){m(e.idToken,"internal-error"),m(void 0!==e.idToken,"internal-error"),m(void 0!==e.refreshToken,"internal-error");let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){let t=j(e);return m(t,"internal-error"),m(void 0!==t.exp,"internal-error"),m(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return(m(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:n,refreshToken:r,expiresIn:i}=await $(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){let{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new G;return n&&(m("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(m("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(m("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new G,this.toJSON())}_performRefresh(){return y("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function W(e,t){m("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Q{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=(0,a.__rest)(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new q(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new H(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){let t=await B(this,this.stsTokenManager.getToken(this.auth,e));return m(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return V(this,e)}reload(){return K(this)}_assign(e){this!==e&&(m(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Q(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){m(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await z(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){let e=await this.getIdToken();return await B(this,M(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,a,o,l,u;let h=null!==(n=t.displayName)&&void 0!==n?n:void 0,c=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(a=t.tenantId)&&void 0!==a?a:void 0,g=null!==(o=t._redirectEventId)&&void 0!==o?o:void 0,y=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:w,emailVerified:I,isAnonymous:E,providerData:T,stsTokenManager:b}=t;m(w&&b,e,"internal-error");let _=G.fromJSON(this.name,b);m("string"==typeof w,e,"internal-error"),W(h,e.name),W(c,e.name),m("boolean"==typeof I,e,"internal-error"),m("boolean"==typeof E,e,"internal-error"),W(d,e.name),W(f,e.name),W(p,e.name),W(g,e.name),W(y,e.name),W(v,e.name);let S=new Q({uid:w,auth:e,email:c,emailVerified:I,displayName:h,isAnonymous:E,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:_,createdAt:y,lastLoginAt:v});return T&&Array.isArray(T)&&(S.providerData=T.map(e=>Object.assign({},e))),g&&(S._redirectEventId=g),S}static async _fromIdTokenResponse(e,t,n=!1){let r=new G;r.updateFromServerResponse(t);let i=new Q({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await z(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class X{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Y(e,t,n){return`firebase:${e}:${t}:${n}`}X.type="NONE";class J{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;let{config:r,name:i}=this.auth;this.fullUserKey=Y(this.userKey,r.apiKey,i),this.fullPersistenceKey=Y("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?Q._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new J(I(X),e,n);let r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),i=r[0]||I(X),s=Y(n,e.config.apiKey,e.name),a=null;for(let o of t)try{let l=await o._get(s);if(l){let u=Q._fromJSON(e,l);o!==i&&(a=u),i=o;break}}catch(h){}let c=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&c.length&&(i=c[0],a&&await i._set(s,a.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch(t){}}))),new J(i,e,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Z(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(er(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";{if(t.includes("edge/"))return"Edge";if(ee(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(es(t))return"Blackberry";if(ea(t))return"Webos";if(et(t))return"Safari";if((t.includes("chrome/")||en(t))&&!t.includes("edge/"))return"Chrome";if(ei(t))return"Android";let n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==n?void 0:n.length)===2)return n[1]}return"Other"}function ee(e=(0,i.z$)()){return/firefox\//i.test(e)}function et(e=(0,i.z$)()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function en(e=(0,i.z$)()){return/crios\//i.test(e)}function er(e=(0,i.z$)()){return/iemobile/i.test(e)}function ei(e=(0,i.z$)()){return/android/i.test(e)}function es(e=(0,i.z$)()){return/blackberry/i.test(e)}function ea(e=(0,i.z$)()){return/webos/i.test(e)}function eo(e=(0,i.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function el(e=(0,i.z$)()){return eo(e)||ei(e)||ea(e)||es(e)||/windows phone/i.test(e)||er(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function eu(e,t=[]){let n;switch(e){case"Browser":n=Z((0,i.z$)());break;case"Worker":n=`${Z((0,i.z$)())}-${e}`;break;default:n=e}let r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${s.Jn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let n=t=>new Promise((n,r)=>{try{let i=e(t);n(i)}catch(s){r(s)}});n.onAbort=t,this.queue.push(n);let r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;let n=[];try{for(let r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(a){for(let i of(n.reverse(),n))try{i()}catch(s){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=a)||void 0===t?void 0:t.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ec{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ef(this),this.idTokenSubscription=new ef(this),this.beforeStateQueue=new eh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=h,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=I(t)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await J.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser(),r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let s=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,a=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===a)&&(null==o?void 0:o.user)&&(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(l){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return(m(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId)?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await z(e)}catch(n){if((null===(t=n)||void 0===t?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){let t=e?(0,i.m9)(e):null;return t&&m(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&m(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(I(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&I(e)||this._popupRedirectResolver;m(t,this,"argument-error"),this.redirectPersistenceManager=await J.create(this,[I(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};let i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return(m(s,this,"internal-error"),s.then(()=>i(this.currentUser)),"function"==typeof t)?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return m(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!(!e||this.frameworks.includes(e))&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=eu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let n=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function ed(e){return(0,i.m9)(e)}class ef{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.ne)(e=>this.observer=e)}get next(){return m(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ep{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return y("not implemented")}_getIdTokenResponse(e){return y("not implemented")}_linkToIdToken(e,t){return y("not implemented")}_getReauthenticationResolver(e){return y("not implemented")}}async function eg(e,t){return N(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function em(e,t){return R(e,"POST","/v1/accounts:signInWithPassword",A(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ey(e,t){return R(e,"POST","/v1/accounts:signInWithEmailLink",A(e,t))}async function ev(e,t){return R(e,"POST","/v1/accounts:signInWithEmailLink",A(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ew extends ep{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new ew(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new ew(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return em(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ey(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return eg(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ev(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function eI(e,t){return R(e,"POST","/v1/accounts:signInWithIdp",A(e,t))}class eE extends ep{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new eE(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=(0,a.__rest)(t,["providerId","signInMethod"]);if(!n||!r)return null;let s=new eE(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){let t=this.buildRequest();return eI(e,t)}_linkToIdToken(e,t){let n=this.buildRequest();return n.idToken=t,eI(e,n)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,eI(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,i.xO)(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function eT(e,t){return N(e,"POST","/v1/accounts:sendVerificationCode",A(e,t))}async function eb(e,t){return R(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,t))}async function e_(e,t){let n=await R(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,t));if(n.temporaryProof)throw P(e,"account-exists-with-different-credential",n);return n}let eS={USER_NOT_FOUND:"user-not-found"};async function eC(e,t){let n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return R(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,n),eS)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ek extends ep{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new ek({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ek({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return eb(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return e_(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return eC(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new ek({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}class eA{constructor(e){var t,n,r,s,a,o;let l=(0,i.zd)((0,i.pd)(e)),u=null!==(t=l.apiKey)&&void 0!==t?t:null,h=null!==(n=l.oobCode)&&void 0!==n?n:null,c=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=l.mode)&&void 0!==r?r:null);m(u&&h&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=h,this.continueUrl=null!==(s=l.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(a=l.languageCode)&&void 0!==a?a:null,this.tenantId=null!==(o=l.tenantId)&&void 0!==o?o:null}static parseLink(e){let t=function(e){let t=(0,i.zd)((0,i.pd)(e)).link,n=t?(0,i.zd)((0,i.pd)(t)).deep_link_id:null,r=(0,i.zd)((0,i.pd)(e)).deep_link_id,s=r?(0,i.zd)((0,i.pd)(r)).link:null;return s||r||n||t||e}(e);try{return new eA(t)}catch(n){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eN{constructor(){this.providerId=eN.PROVIDER_ID}static credential(e,t){return ew._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let n=eA.parseLink(t);return m(n,"argument-error"),ew._fromEmailAndCode(e,n.code,n.tenantId)}}eN.PROVIDER_ID="password",eN.EMAIL_PASSWORD_SIGN_IN_METHOD="password",eN.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eD{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eR extends eD{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eO extends eR{constructor(){super("facebook.com")}static credential(e){return eE._fromParams({providerId:eO.PROVIDER_ID,signInMethod:eO.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return eO.credentialFromTaggedObject(e)}static credentialFromError(e){return eO.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return eO.credential(e.oauthAccessToken)}catch(t){return null}}}eO.FACEBOOK_SIGN_IN_METHOD="facebook.com",eO.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eL extends eR{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return eE._fromParams({providerId:eL.PROVIDER_ID,signInMethod:eL.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return eL.credentialFromTaggedObject(e)}static credentialFromError(e){return eL.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return eL.credential(t,n)}catch(r){return null}}}eL.GOOGLE_SIGN_IN_METHOD="google.com",eL.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eP extends eR{constructor(){super("github.com")}static credential(e){return eE._fromParams({providerId:eP.PROVIDER_ID,signInMethod:eP.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return eP.credentialFromTaggedObject(e)}static credentialFromError(e){return eP.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return eP.credential(e.oauthAccessToken)}catch(t){return null}}}eP.GITHUB_SIGN_IN_METHOD="github.com",eP.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eM extends eR{constructor(){super("twitter.com")}static credential(e,t){return eE._fromParams({providerId:eM.PROVIDER_ID,signInMethod:eM.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return eM.credentialFromTaggedObject(e)}static credentialFromError(e){return eM.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return eM.credential(t,n)}catch(r){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ex(e,t){return R(e,"POST","/v1/accounts:signUp",A(e,t))}eM.TWITTER_SIGN_IN_METHOD="twitter.com",eM.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eU{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){let i=await Q._fromIdTokenResponse(e,n,r),s=eV(n),a=new eU({user:i,providerId:s,_tokenResponse:n,operationType:t});return a}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);let r=eV(n);return new eU({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function eV(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eF extends i.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,eF.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new eF(e,t,n,r)}}function ej(e,t,n,r){let i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw eF._fromErrorAndOperation(e,n,t,r);throw n})}async function eB(e,t,n=!1){let r=await B(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return eU._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function eq(e,t,n=!1){var r;let{auth:i}=e,s="reauthenticate";try{let a=await B(e,ej(i,s,t,e),n);m(a.idToken,i,"internal-error");let o=j(a.idToken);m(o,i,"internal-error");let{sub:l}=o;return m(e.uid===l,i,"user-mismatch"),eU._forOperation(e,s,a)}catch(u){throw(null===(r=u)||void 0===r?void 0:r.code)==="auth/user-not-found"&&f(i,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function eH(e,t,n=!1){let r="signIn",i=await ej(e,r,t),s=await eU._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function ez(e,t){return eH(ed(e),t)}async function eK(e,t,n){let r=ed(e),i=await ex(r,{returnSecureToken:!0,email:t,password:n}),s=await eU._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function e$(e,t,n){return ez((0,i.m9)(e),eN.credential(t,n))}function eG(e,t,n,r){return(0,i.m9)(e).onAuthStateChanged(t,n,r)}function eW(e){return(0,i.m9)(e).signOut()}new WeakMap;let eQ="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eX{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(eQ,"1"),this.storage.removeItem(eQ),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class eY extends eX{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(){let e=(0,i.z$)();return et(e)||eo(e)}()&&function(){try{return!!(window&&window!==window.top)}catch(e){return!1}}(),this.fallbackToPolling=el(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});return}let n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}let s=()=>{let e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},a=this.storage.getItem(n);(0,i.w1)()&&10===document.documentMode&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,10):s()}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}eY.type="LOCAL";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eJ extends eX{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}eJ.type="SESSION";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eZ{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let n=new eZ(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){var t;let{eventId:n,eventType:r,data:i}=e.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});let a=Array.from(s).map(async t=>t(e.origin,i)),o=await Promise.all(a.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(n){return{fulfilled:!1,reason:n}}}));e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function e0(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}eZ.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class e1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){let r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw Error("connection_unavailable");let i,s;return new Promise((a,o)=>{let l=e0("",20);r.port1.start();let u=setTimeout(()=>{o(Error("unsupported_event"))},n);s={messageChannel:r,onMessage(e){if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{o(Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(e.data.response);break;default:clearTimeout(u),clearTimeout(i),o(Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function e2(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function e3(){return void 0!==e2().WorkerGlobalScope&&"function"==typeof e2().importScripts}async function e4(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{let e=await navigator.serviceWorker.ready;return e.active}catch(t){return null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let e6="firebaseLocalStorageDb",e5="firebaseLocalStorage",e9="fbase_key";class e8{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function e7(e,t){return e.transaction([e5],t?"readwrite":"readonly").objectStore(e5)}function te(){let e=indexedDB.open(e6,1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(e5,{keyPath:e9})}catch(r){n(r)}}),e.addEventListener("success",async()=>{let n=e.result;n.objectStoreNames.contains(e5)?t(n):(n.close(),await function(){let e=indexedDB.deleteDatabase(e6);return new e8(e).toPromise()}(),t(await te()))})})}async function tt(e,t,n){let r=e7(e,!0).put({[e9]:t,value:n});return new e8(r).toPromise()}async function tn(e,t){let n=e7(e,!1).get(t),r=await new e8(n).toPromise();return void 0===r?null:r.value}function tr(e,t){let n=e7(e,!0).delete(t);return new e8(n).toPromise()}class ti{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await te()),this.db}async _withRetries(e){let t=0;for(;;)try{let n=await this._openDb();return await e(n)}catch(r){if(t++>3)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return e3()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=eZ._getInstance(e3()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>{let n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await e4(),!this.activeServiceWorker)return;this.sender=new e1(this.activeServiceWorker);let n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null==navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(n){}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await te();return await tt(e,eQ,"1"),await tr(e,eQ),!0}catch(t){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>tt(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>tn(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>tr(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(e=>{let t=e7(e,!1).getAll();return new e8(t).toPromise()});if(!e||0!==this.pendingWrites)return[];let t=[],n=new Set;for(let{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(let s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}function ts(e){return`__${e}${Math.floor(1e6*Math.random())}`}async function ta(e,t,n){var r,i,s,a,o;let l=await n.verify();try{m("string"==typeof l,e,"argument-error"),m("recaptcha"===n.type,e,"argument-error");let u;if(u="string"==typeof t?{phoneNumber:t}:t,"session"in u){let h=u.session;if("phoneNumber"in u){m("enroll"===h.type,e,"internal-error");let c=await (i=e,s={idToken:h.credential,phoneEnrollmentInfo:{phoneNumber:u.phoneNumber,recaptchaToken:l}},N(i,"POST","/v2/accounts/mfaEnrollment:start",A(i,s)));return c.phoneSessionInfo.sessionInfo}{m("signin"===h.type,e,"internal-error");let d=(null===(r=u.multiFactorHint)||void 0===r?void 0:r.uid)||u.multiFactorUid;m(d,e,"missing-multi-factor-info");let f=await (a=e,o={mfaPendingCredential:h.credential,mfaEnrollmentId:d,phoneSignInInfo:{recaptchaToken:l}},N(a,"POST","/v2/accounts/mfaSignIn:start",A(a,o)));return f.phoneResponseInfo.sessionInfo}}{let{sessionInfo:p}=await eT(e,{phoneNumber:u.phoneNumber,recaptchaToken:l});return p}}finally{n._reset()}}ti.type="LOCAL",ts("rcb"),new b(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class to{constructor(e){this.providerId=to.PROVIDER_ID,this.auth=ed(e)}verifyPhoneNumber(e,t){return ta(this.auth,e,(0,i.m9)(t))}static credential(e,t){return ek._fromVerification(e,t)}static credentialFromResult(e){return to.credentialFromTaggedObject(e)}static credentialFromError(e){return to.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:n}=e;return t&&n?ek._fromTokenResponse(t,n):null}}to.PROVIDER_ID="phone",to.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tl extends ep{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return eI(e,this._buildIdpRequest())}_linkToIdToken(e,t){return eI(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return eI(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function tu(e){return eH(e.auth,new tl(e),e.bypassAuthState)}function th(e){let{auth:t,user:n}=e;return m(n,t,"internal-error"),eq(n,new tl(e),e.bypassAuthState)}async function tc(e){let{auth:t,user:n}=e;return m(n,t,"internal-error"),eB(n,new tl(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class td{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:a}=e;if(s){this.reject(s);return}let o={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(o))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tu;case"linkViaPopup":case"linkViaRedirect":return tc;case"reauthViaPopup":case"reauthViaRedirect":return th;default:f(this.auth,"internal-error")}}resolve(e){v(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){v(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let tf=new b(2e3,1e4);class tp extends td{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,tp.currentPopupAction&&tp.currentPopupAction.cancel(),tp.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return m(e,this.auth,"internal-error"),e}async onExecution(){v(1===this.filter.length,"Popup operations only handle one event");let e=e0();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tp.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,n;if(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,tf.get())};e()}}tp.currentPopupAction=null;let tg=new Map;class tm extends td{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=tg.get(this.auth._key());if(!e){try{let t=await ty(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(r){e=()=>Promise.reject(r)}tg.set(this.auth._key(),e)}return this.bypassAuthState||tg.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"===e.type){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ty(e,t){var n,r;let i=(n=t,Y("pendingRedirect",n.config.apiKey,n.name)),s=(r=e,I(r._redirectPersistence));if(!await s._isAvailable())return!1;let a=await s._get(i)==="true";return await s._remove(i),a}function tv(e,t){tg.set(e._key(),t)}async function tw(e,t,n=!1){var r,i;let s=ed(e),a=t?I(t):(m(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver),o=new tm(s,a,n),l=await o.execute();return l&&!n&&(delete l.user._redirectEventId,await s._persistUserIfCurrent(l.user),await s._setRedirectUser(null,t)),l}class tI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tT(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!tT(e)){let r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(tE(e))}saveEventToCache(e){this.cachedEventUids.add(tE(e)),this.lastProcessedEventTime=Date.now()}}function tE(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function tT({type:e,error:t}){return"unknown"===e&&(null==t?void 0:t.code)==="auth/no-auth-event"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function tb(e,t={}){return N(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let t_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tS=/^https?/;async function tC(e){if(e.config.emulator)return;let{authorizedDomains:t}=await tb(e);for(let n of t)try{if(tk(n))return}catch(r){}f(e,"unauthorized-domain")}function tk(e){let t=E(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){let i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!tS.test(n))return!1;if(t_.test(e))return r===e;let s=e.replace(/\./g,"\\."),a=RegExp("^(.+\\."+s+"|"+s+")$","i");return a.test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let tA=new b(3e4,6e4);function tN(){let e=e2().___jsl;if(null==e?void 0:e.H){for(let t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}let tD=null,tR=new b(5e3,15e3),tO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function tP(e){var t,n;let r=await (tD=tD||new Promise((t,n)=>{var r,i,s,a;function o(){tN(),gapi.load("gapi.iframes",{callback(){t(gapi.iframes.getContext())},ontimeout(){tN(),n(p(e,"network-request-failed"))},timeout:tA.get()})}if(null===(i=null===(r=e2().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else if(null===(s=e2().gapi)||void 0===s?void 0:s.load)o();else{let l=ts("iframefcb");return e2()[l]=()=>{gapi.load?o():n(p(e,"network-request-failed"))},(a=`https://apis.google.com/js/api.js?onload=${l}`,new Promise((e,t)=>{var n,r;let i=document.createElement("script");i.setAttribute("src",a),i.onload=e,i.onerror=e=>{let n=p("internal-error");n.customData=e,t(n)},i.type="text/javascript",i.charset="UTF-8",(null!==(r=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==r?r:document).appendChild(i)})).catch(e=>n(e))}}).catch(e=>{throw tD=null,e})),a=e2().gapi;return m(a,e,"internal-error"),r.open({where:document.body,url:function(e){let t=e.config;m(t.authDomain,e,"auth-domain-config-required");let n=t.emulator?_(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:s.Jn},a=tL.get(e.config.apiHost);a&&(r.eid=a);let o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${(0,i.xO)(r).slice(1)}`}(e),messageHandlersFilter:a.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tO,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});let i=p(e,"network-request-failed"),s=e2().setTimeout(()=>{r(i)},tR.get());function a(){e2().clearTimeout(s),n(t)}t.ping(a).then(a,()=>{r(i)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let tM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class tx{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function tU(e,t,n,r,a,o){m(e.config.authDomain,e,"auth-domain-config-required"),m(e.config.apiKey,e,"invalid-api-key");let l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:s.Jn,eventId:a};if(t instanceof eD)for(let[u,h]of(t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",(0,i.xb)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(o||{})))l[u]=h;if(t instanceof eR){let c=t.getScopes().filter(e=>""!==e);c.length>0&&(l.scopes=c.join(","))}for(let d of(e.tenantId&&(l.tid=e.tenantId),Object.keys(l)))void 0===l[d]&&delete l[d];return`${function({config:e}){return e.emulator?_(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${(0,i.xO)(l).slice(1)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let tV="webStorageSupport",tF=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=eJ,this._completeRedirectFn=tw,this._overrideRedirectResult=tv}async _openPopup(e,t,n,r){var s;v(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");let a=tU(e,t,n,E(),r);return function(e,t,n,r=500,s=600){let a=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString(),l="",u=Object.assign(Object.assign({},tM),{width:r.toString(),height:s.toString(),top:a,left:o}),h=(0,i.z$)().toLowerCase();n&&(l=en(h)?"_blank":n),ee(h)&&(t=t||"http://localhost",u.scrollbars="yes");let c=Object.entries(u).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(function(e=(0,i.z$)()){var t;return eo(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(h)&&"_self"!==l)return function(e,t){let n=document.createElement("a");n.href=e,n.target=t;let r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}(t||"",l),new tx(null);let d=window.open(t||"",l,c);m(d,e,"popup-blocked");try{d.focus()}catch(f){}return new tx(d)}(e,a,e0())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=tU(e,t,n,E(),r),e2().location.href=i,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:n,promise:r}=this.eventManagers[t];return n?Promise.resolve(n):(v(r,"If manager is not set, promise should be"),r)}let i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){let t=await tP(e),n=new tI(e);return t.register("authEvent",t=>{m(null==t?void 0:t.authEvent,e,"invalid-auth-event");let r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){let n=this.iframes[e._key()];n.send(tV,{type:tV},n=>{var r;let i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[tV];void 0!==i&&t(!!i),f(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=tC(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return el()||et()||eo()}};var tj="@firebase/auth",tB="0.20.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tq{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;let t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){m(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function tH(e=(0,s.Mq)()){let t=(0,s.qX)(e,"auth");return t.isInitialized()?t.getImmediate():/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e,t){let n=(0,s.qX)(e,"auth");if(n.isInitialized()){let r=n.getImmediate(),a=n.getOptions();if((0,i.vZ)(a,null!=t?t:{}))return r;f(r,"already-initialized")}let o=n.initialize({options:t});return o}(e,{popupRedirectResolver:tF,persistence:[ti,eY,eJ]})}r="Browser",(0,s.Xd)(new l.wA("auth",(e,{options:t})=>{let n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:a}=n.options;return((e,n)=>{m(s&&!s.includes(":"),"invalid-api-key",{appName:e.name}),m(!(null==a?void 0:a.includes(":")),"argument-error",{appName:e.name});let i={apiKey:s,authDomain:a,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:eu(r)},o=new ec(e,n,i);return function(e,t){let n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(I);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{let r=e.getProvider("auth-internal");r.initialize()})),(0,s.Xd)(new l.wA("auth-internal",e=>{var t;let n=ed(e.getProvider("auth").getImmediate());return new tq(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),(0,s.KN)(tj,tB,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(r)),(0,s.KN)(tj,tB,"esm2017")},5321:function(e,t,n){"use strict";n.d(t,{AK:function(){return lo},JU:function(){return oO},QT:function(){return ln},ad:function(){return oM},pl:function(){return li},r7:function(){return ls}});var r,i,s,a,o,l,u,h,c,d=n(5816),f=n(8463),p=n(3333),g=n(4444),m="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{},y={},v=v||{},w=m||self;function I(){}function E(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function T(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function b(e,t,n){return e.call.apply(e.bind,arguments)}function _(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function S(e,t,n){return(S=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?b:_).apply(null,arguments)}function C(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function k(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function A(){this.s=this.s,this.o=this.o}A.prototype.s=!1,A.prototype.na=function(){this.s||(this.s=!0,this.M())},A.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};let N=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return -1};function D(e){let t=e.length;if(0<t){let n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function R(e,t){for(let n=1;n<arguments.length;n++){let r=arguments[n];if(E(r)){let i=e.length||0,s=r.length||0;e.length=i+s;for(let a=0;a<s;a++)e[i+a]=r[a]}else e.push(r)}}function O(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}O.prototype.h=function(){this.defaultPrevented=!0};var L=function(){if(!w.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{w.addEventListener("test",I,t),w.removeEventListener("test",I,t)}catch(n){}return e}();function P(e){return/^[\s\xa0]*$/.test(e)}var M=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function x(e,t){return e<t?-1:e>t?1:0}function U(){var e=w.navigator;return e&&(e=e.userAgent)?e:""}function V(e){return -1!=U().indexOf(e)}function F(e){return F[" "](e),e}F[" "]=I;var j=V("Opera"),B=V("Trident")||V("MSIE"),q=V("Edge"),H=q||B,z=V("Gecko")&&!(-1!=U().toLowerCase().indexOf("webkit")&&!V("Edge"))&&!(V("Trident")||V("MSIE"))&&!V("Edge"),K=-1!=U().toLowerCase().indexOf("webkit")&&!V("Edge");function $(){var e=w.document;return e?e.documentMode:void 0}a:{var G,W="",Q=(G=U(),z?/rv:([^\);]+)(\)|;)/.exec(G):q?/Edge\/([\d\.]+)/.exec(G):B?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(G):K?/WebKit\/(\S+)/.exec(G):j?/(?:Version)[ \/]?(\S+)/.exec(G):void 0);if(Q&&(W=Q?Q[1]:""),B){var X=$();if(null!=X&&X>parseFloat(W)){s=String(X);break a}}s=W}var Y={};if(w.document&&B){a=$()||parseInt(s,10)||void 0}else a=void 0;var J=a;function Z(e,t){if(O.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(z){a:{try{F(t.nodeName);var i=!0;break a}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:ee[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Z.X.h.call(this)}}k(Z,O);var ee={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var et="closure_listenable_"+(1e6*Math.random()|0),en=0;function er(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++en,this.ba=this.ea=!1}function ei(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function es(e,t,n){for(let r in e)t.call(n,e[r],r,e)}function ea(e){let t={};for(let n in e)t[n]=e[n];return t}let eo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function el(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i])e[n]=r[n];for(let s=0;s<eo.length;s++)n=eo[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function eu(e){this.src=e,this.g={},this.h=0}function eh(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=N(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ei(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ec(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ba&&s.listener==t&&!!n==s.capture&&s.ha==r)return i}return -1}eu.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var a=ec(e,t,r,i);return -1<a?(t=e[a],n||(t.ea=!1)):((t=new er(t,this.src,s,!!r,i)).ea=n,e.push(t)),t};var ed="closure_lm_"+(1e6*Math.random()|0),ef={};function ep(e,t,n,r,i){if(r&&r.once)return function e(t,n,r,i,s){if(Array.isArray(n)){for(var a=0;a<n.length;a++)e(t,n[a],r,i,s);return null}return r=eE(r),t&&t[et]?t.O(n,r,T(i)?!!i.capture:!!i,s):eg(t,n,r,!0,i,s)}(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)ep(e,t[s],n,r,i);return null}return n=eE(n),e&&e[et]?e.N(t,n,T(r)?!!r.capture:!!r,i):eg(e,t,n,!1,r,i)}function eg(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var a=T(i)?!!i.capture:!!i,o=ew(e);if(o||(e[ed]=o=new eu(e)),(n=o.add(t,n,r,a,s)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}let t=ev;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)L||(i=a),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(ey(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function em(e){if("number"!=typeof e&&e&&!e.ba){var t=e.src;if(t&&t[et])eh(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ey(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=ew(t))?(eh(n,e),0==n.h&&(n.src=null,t[ed]=null)):ei(e)}}}function ey(e){return e in ef?ef[e]:ef[e]="on"+e}function ev(e,t){if(e.ba)e=!0;else{t=new Z(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&em(e),e=n.call(r,t)}return e}function ew(e){return(e=e[ed])instanceof eu?e:null}var eI="__closure_events_fn_"+(1e9*Math.random()>>>0);function eE(e){return"function"==typeof e?e:(e[eI]||(e[eI]=function(t){return e.handleEvent(t)}),e[eI])}function eT(){A.call(this),this.i=new eu(this),this.P=this,this.I=null}function eb(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new O(t,e);else if(t instanceof O)t.target=t.target||e;else{var i=t;el(t=new O(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var a=t.g=n[s];i=e_(a,r,!0,t)&&i}if(i=e_(a=t.g=e,r,!0,t)&&i,i=e_(a,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=e_(a=t.g=n[s],r,!1,t)&&i}function e_(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var a=t[s];if(a&&!a.ba&&a.capture==n){var o=a.listener,l=a.ha||a.src;a.ea&&eh(e.i,a),i=!1!==o.call(l,r)&&i}}return i&&!r.defaultPrevented}k(eT,A),eT.prototype[et]=!0,eT.prototype.removeEventListener=function(e,t,n,r){!function e(t,n,r,i,s){if(Array.isArray(n))for(var a=0;a<n.length;a++)e(t,n[a],r,i,s);else(i=T(i)?!!i.capture:!!i,r=eE(r),t&&t[et])?(t=t.i,(n=String(n).toString())in t.g&&-1<(r=ec(a=t.g[n],r,i,s))&&(ei(a[r]),Array.prototype.splice.call(a,r,1),0==a.length&&(delete t.g[n],t.h--))):t&&(t=ew(t))&&(n=t.g[n.toString()],t=-1,n&&(t=ec(n,r,i,s)),(r=-1<t?n[t]:null)&&em(r))}(this,e,t,n,r)},eT.prototype.M=function(){if(eT.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ei(n[r]);delete t.g[e],t.h--}}this.I=null},eT.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},eT.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var eS=w.JSON.stringify;function eC(){var e=eO;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var ek=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new eA,e=>e.reset());class eA{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function eN(e){w.setTimeout(()=>{throw e},0)}function eD(e,t){var n;o||(n=w.Promise.resolve(void 0),o=function(){n.then(eL)}),eR||(o(),eR=!0),eO.add(e,t)}var eR=!1,eO=new class{constructor(){this.h=this.g=null}add(e,t){let n=ek.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function eL(){for(var e;e=eC();){try{e.h.call(e.g)}catch(t){eN(t)}var n=ek;n.j(e),100>n.h&&(n.h++,e.next=n.g,n.g=e)}eR=!1}function eP(e,t){eT.call(this),this.h=e||1,this.g=t||w,this.j=S(this.kb,this),this.l=Date.now()}function eM(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function ex(e,t,n){if("function"==typeof e)n&&(e=S(e,n));else if(e&&"function"==typeof e.handleEvent)e=S(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:w.setTimeout(e,t||0)}k(eP,eT),(c=eP.prototype).ca=!1,c.R=null,c.kb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),eb(this,"tick"),this.ca&&(eM(this),this.start()))}},c.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},c.M=function(){eP.X.M.call(this),eM(this),delete this.g};class eU extends A{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=ex(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.j);let n=t.h;t.h=null,t.m.apply(null,n)}(this)}M(){super.M(),this.g&&(w.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function eV(e){A.call(this),this.h=e,this.g={}}k(eV,A);var eF=[];function ej(e,t,n,r){Array.isArray(n)||(n&&(eF[0]=n.toString()),n=eF);for(var i=0;i<n.length;i++){var s=ep(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function eB(e){es(e.g,function(e,t){this.g.hasOwnProperty(t)&&em(e)},e),e.g={}}function eq(){this.g=!0}function eH(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var a=1;a<i.length;a++)i[a]=""}}}}return eS(n)}catch(o){return t}}(e,n)+(r?" "+r:"")})}eV.prototype.M=function(){eV.X.M.call(this),eB(this)},eV.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},eq.prototype.Aa=function(){this.g=!1},eq.prototype.info=function(){};var ez={},eK=null;function e$(){return eK=eK||new eT}function eG(e){O.call(this,ez.Oa,e)}function eW(e){let t=e$();eb(t,new eG(t,e))}function eQ(e,t){O.call(this,ez.STAT_EVENT,e),this.stat=t}function eX(e){let t=e$();eb(t,new eQ(t,e))}function eY(e,t){O.call(this,ez.Pa,e),this.size=t}function eJ(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return w.setTimeout(function(){e()},t)}ez.Oa="serverreachability",k(eG,O),ez.STAT_EVENT="statevent",k(eQ,O),ez.Pa="timingevent",k(eY,O);var eZ={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,La:7,TIMEOUT:8,Cb:9},e0={qb:"complete",Mb:"success",Ma:"error",La:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function e1(){}function e2(e){return e.h||(e.h=e.i())}function e3(){}e1.prototype.h=null;var e4={OPEN:"a",pb:"b",Ma:"c",Bb:"d"};function e6(){O.call(this,"d")}function e5(){O.call(this,"c")}function e9(){}function e8(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new eV(this),this.O=te,e=H?125:void 0,this.T=new eP(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new e7}function e7(){this.i=null,this.g="",this.h=!1}k(e6,O),k(e5,O),k(e9,e1),e9.prototype.g=function(){return new XMLHttpRequest},e9.prototype.i=function(){return{}},l=new e9;var te=45e3,tt={},tn={};function tr(e,t,n){e.K=1,e.v=tT(ty(t)),e.s=n,e.P=!0,ti(e,null)}function ti(e,t){e.F=Date.now(),tl(e),e.A=ty(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),tM(n.i,"t",r),e.C=0,n=e.l.H,e.h=new e7,e.g=nS(e.l,n?t:null,!e.s),0<e.N&&(e.L=new eU(S(e.Ka,e,e.g),e.N)),ej(e.S,e.g,"readystatechange",e.hb),t=e.H?ea(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),eW(1),function(e,t,n,r,i,s){e.info(function(){if(e.g){if(s)for(var a="",o=s.split("&"),l=0;l<o.length;l++){var u=o[l].split("=");if(1<u.length){var h=u[0];u=u[1];var c=h.split("_");a=2<=c.length&&"type"==c[1]?a+(h+"=")+u+"&":a+(h+"=redacted&")}}else a=null}else a=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+a})}(e.j,e.u,e.A,e.m,e.U,e.s)}function ts(e){return!!e.g&&"GET"==e.u&&2!=e.K&&e.l.Da}function ta(e,t,n){let r=!0,i;for(;!e.I&&e.C<n.length;)if((i=to(e,n))==tn){4==t&&(e.o=4,eX(14),r=!1),eH(e.j,e.m,null,"[Incomplete Response]");break}else if(i==tt){e.o=4,eX(15),eH(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else eH(e.j,e.m,i,null),tf(e,i);ts(e)&&i!=tn&&i!=tt&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,eX(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.$&&(e.$=!0,(t=e.l).g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ny(t),t.K=!0,eX(11))):(eH(e.j,e.m,n,"[Invalid Chunked Response]"),td(e),tc(e))}function to(e,t){var n=e.C,r=t.indexOf("\n",n);return -1==r?tn:isNaN(n=Number(t.substring(n,r)))?tt:(r+=1)+n>t.length?tn:(t=t.substr(r,n),e.C=r+n,t)}function tl(e){e.V=Date.now()+e.O,tu(e,e.O)}function tu(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=eJ(S(e.fb,e),t)}function th(e){e.B&&(w.clearTimeout(e.B),e.B=null)}function tc(e){0==e.l.G||e.I||nI(e.l,e)}function td(e){th(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,eM(e.T),eB(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function tf(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||tq(n.h,e))){if(!e.J&&tq(n.h,e)&&3==n.G){try{var r=n.Fa.g.parse(t)}catch(i){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){a:if(!n.u){if(n.g){if(n.g.F+3e3<e.F)nw(n),nu(n);else break a}nm(n),eX(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&0==n.A&&!n.v&&(n.v=eJ(S(n.bb,n),6e3));if(1>=tB(n.h)&&n.ja){try{n.ja()}catch(a){}n.ja=void 0}}else nT(n,11)}else if((e.J||n.g==e)&&nw(n),!P(t))for(s=n.Fa.g.parse(t),t=0;t<s.length;t++){let o=s[t];if(n.T=o[0],o=o[1],2==n.G){if("c"==o[0]){n.I=o[1],n.ka=o[2];let l=o[3];null!=l&&(n.ma=l,n.j.info("VER="+n.ma));let u=o[4];null!=u&&(n.Ca=u,n.j.info("SVER="+n.Ca));let h=o[5];null!=h&&"number"==typeof h&&0<h&&(r=1.5*h,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;let c=e.g;if(c){let d=c.g?c.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(d){var f=r.h;f.g||-1==d.indexOf("spdy")&&-1==d.indexOf("quic")&&-1==d.indexOf("h2")||(f.j=f.l,f.g=new Set,f.h&&(tH(f,f.h),f.h=null))}if(r.D){let p=c.g?c.g.getResponseHeader("X-HTTP-Session-Id"):null;p&&(r.za=p,tE(r.F,r.D,p))}}if(n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),(r=n).sa=n_(r,r.H?r.ka:null,r.V),e.J){tz(r.h,e);var g=r.J;g&&e.setTimeout(g),e.B&&(th(e),tl(e)),r.g=e}else ng(r);0<n.i.length&&nc(n)}else"stop"!=o[0]&&"close"!=o[0]||nT(n,7)}else 3==n.G&&("stop"==o[0]||"close"==o[0]?"stop"==o[0]?nT(n,7):nl(n):"noop"!=o[0]&&n.l&&n.l.wa(o),n.A=0)}}eW(4)}catch(m){}}function tp(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(E(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(E(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}for(let r in t=[],n=0,e)t[n++]=r;return t}}}(e),r=function(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(E(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}(c=e8.prototype).setTimeout=function(e){this.O=e},c.hb=function(e){e=e.target;let t=this.L;t&&3==nn(e)?t.l():this.Ka(e)},c.Ka=function(e){try{if(e==this.g)a:{let t=nn(this.g);var n=this.g.Ea();let r=this.g.aa();if(!(3>t)&&(3!=t||H||this.g&&(this.h.h||this.g.fa()||nr(this.g)))){this.I||4!=t||7==n||(8==n||0>=r?eW(3):eW(2)),th(this);var i=this.g.aa();this.Y=i;b:if(ts(this)){var s=nr(this.g);e="";var a=s.length,o=4==nn(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){td(this),tc(this);var l="";break b}this.h.i=new w.TextDecoder}for(n=0;n<a;n++)this.h.h=!0,e+=this.h.i.decode(s[n],{stream:o&&n==a-1});s.splice(0,a),this.h.g+=e,this.C=0,l=this.h.g}else l=this.g.fa();if(this.i=200==i,function(e,t,n,r,i,s,a){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+a})}(this.j,this.u,this.A,this.m,this.U,t,i),this.i){if(this.Z&&!this.J){b:{if(this.g){var u,h=this.g;if((u=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!P(u)){var c=u;break b}}c=null}if(i=c)eH(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,tf(this,i);else{this.i=!1,this.o=3,eX(12),td(this),tc(this);break a}}this.P?(ta(this,t,l),H&&this.i&&3==t&&(ej(this.S,this.T,"tick",this.gb),this.T.start())):(eH(this.j,this.m,l,null),tf(this,l)),4==t&&td(this),this.i&&!this.I&&(4==t?nI(this.l,this):(this.i=!1,tl(this)))}else 400==i&&0<l.indexOf("Unknown SID")?(this.o=3,eX(12)):(this.o=0,eX(13)),td(this),tc(this)}}}catch(d){}finally{}},c.gb=function(){if(this.g){var e=nn(this.g),t=this.g.fa();this.C<t.length&&(th(this),ta(this,e,t),this.i&&4!=e&&tl(this))}},c.cancel=function(){this.I=!0,td(this)},c.fb=function(){this.B=null;let e=Date.now();0<=e-this.V?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.j,this.A),2!=this.K&&(eW(3),eX(17)),td(this),this.o=2,tc(this)):tu(this,this.V-e)};var tg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tm(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof tm){this.h=void 0!==t?t:e.h,tv(this,e.j),this.s=e.s,this.g=e.g,tw(this,e.m),this.l=e.l,t=e.i;var n=new tR;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),tI(this,n),this.o=e.o}else e&&(n=String(e).match(tg))?(this.h=!!t,tv(this,n[1]||"",!0),this.s=tb(n[2]||""),this.g=tb(n[3]||"",!0),tw(this,n[4]),this.l=tb(n[5]||"",!0),tI(this,n[6]||"",!0),this.o=tb(n[7]||"")):(this.h=!!t,this.i=new tR(null,this.h))}function ty(e){return new tm(e)}function tv(e,t,n){e.j=n?tb(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function tw(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function tI(e,t,n){var r,i;t instanceof tR?(e.i=t,r=e.i,(i=e.h)&&!r.j&&(tO(r),r.i=null,r.g.forEach(function(e,t){var n=t.toLowerCase();t!=n&&(tL(this,t),tM(this,n,e))},r)),r.j=i):(n||(t=t_(t,tN)),e.i=new tR(t,e.h))}function tE(e,t,n){e.i.set(t,n)}function tT(e){return tE(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function tb(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function t_(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,tS),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function tS(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}tm.prototype.toString=function(){var e=[],t=this.j;t&&e.push(t_(t,tC,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(t_(t,tC,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(t_(n,"/"==n.charAt(0)?tA:tk,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",t_(n,tD)),e.join("")};var tC=/[#\/\?@]/g,tk=/[#\?:]/g,tA=/[#\?]/g,tN=/[#\?@]/g,tD=/#/g;function tR(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function tO(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function tL(e,t){tO(e),t=tx(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function tP(e,t){return tO(e),t=tx(e,t),e.g.has(t)}function tM(e,t,n){tL(e,t),0<n.length&&(e.i=null,e.g.set(tx(e,t),D(n)),e.h+=n.length)}function tx(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(c=tR.prototype).add=function(e,t){tO(this),this.i=null,e=tx(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},c.forEach=function(e,t){tO(this),this.g.forEach(function(n,r){n.forEach(function(n){e.call(t,n,r,this)},this)},this)},c.oa=function(){tO(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){let i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n},c.W=function(e){tO(this);let t=[];if("string"==typeof e)tP(this,e)&&(t=t.concat(this.g.get(tx(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},c.set=function(e,t){return tO(this),this.i=null,tP(this,e=tx(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},c.get=function(e,t){return e&&0<(e=this.W(e)).length?String(e[0]):t},c.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];let i=encodeURIComponent(String(r)),s=this.W(r);for(r=0;r<s.length;r++){var a=i;""!==s[r]&&(a+="="+encodeURIComponent(String(s[r]))),e.push(a)}}return this.i=e.join("&")};var tU=class{constructor(e,t){this.h=e,this.g=t}};function tV(e){this.l=e||tF,e=w.PerformanceNavigationTiming?0<(e=w.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(w.g&&w.g.Ga&&w.g.Ga()&&w.g.Ga().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var tF=10;function tj(e){return!!e.h||!!e.g&&e.g.size>=e.j}function tB(e){return e.h?1:e.g?e.g.size:0}function tq(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function tH(e,t){e.g?e.g.add(t):e.h=t}function tz(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function tK(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let n of e.g.values())t=t.concat(n.D);return t}return D(e.i)}function t$(){}function tG(){this.g=new t$}function tW(e,t,n){let r=n||"";try{tp(e,function(e,n){let i=e;T(e)&&(i=eS(e)),t.push(r+n+"="+encodeURIComponent(i))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function tQ(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function tX(e){this.l=e.$b||null,this.j=e.ib||!1}function tY(e,t){eT.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=tJ,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}tV.prototype.cancel=function(){if(this.i=tK(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}},t$.prototype.stringify=function(e){return w.JSON.stringify(e,void 0)},t$.prototype.parse=function(e){return w.JSON.parse(e,void 0)},k(tX,e1),tX.prototype.g=function(){return new tY(this.l,this.j)},tX.prototype.i=(i={},function(){return i}),k(tY,eT);var tJ=0;function tZ(e){e.j.read().then(e.Sa.bind(e)).catch(e.ga.bind(e))}function t0(e){e.readyState=4,e.l=null,e.j=null,e.A=null,t1(e)}function t1(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(c=tY.prototype).open=function(e,t){if(this.readyState!=tJ)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,t1(this)},c.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||w).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ga.bind(this))},c.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,t0(this)),this.readyState=tJ},c.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,t1(this)),this.g&&(this.readyState=3,t1(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ga.bind(this));else if(void 0!==w.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;tZ(this)}else e.text().then(this.Ua.bind(this),this.ga.bind(this))}},c.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?t0(this):t1(this),3==this.readyState&&tZ(this)}},c.Ua=function(e){this.g&&(this.response=this.responseText=e,t0(this))},c.Ta=function(e){this.g&&(this.response=e,t0(this))},c.ga=function(){this.g&&t0(this)},c.setRequestHeader=function(e,t){this.v.append(e,t)},c.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},c.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var n=t.next();!n.done;)e.push((n=n.value)[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(tY.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var t2=w.JSON.parse;function t3(e){eT.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=t4,this.K=this.L=!1}k(t3,eT);var t4="",t6=/^https?$/i,t5=["POST","PUT"];function t9(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,t8(e),ne(e)}function t8(e){e.D||(e.D=!0,eb(e,"complete"),eb(e,"error"))}function t7(e){if(e.h&&void 0!==v&&(!e.C[1]||4!=nn(e)||2!=e.aa())){if(e.v&&4==nn(e))ex(e.Ha,0,e);else if(eb(e,"readystatechange"),4==nn(e)){e.h=!1;try{let t=e.aa();a:switch(t){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var n,r,i=!0;break a;default:i=!1}if(!(n=i)){if(r=0===t){var s=String(e.H).match(tg)[1]||null;if(!s&&w.self&&w.self.location){var a=w.self.location.protocol;s=a.substr(0,a.length-1)}r=!t6.test(s?s.toLowerCase():"")}n=r}if(n)eb(e,"complete"),eb(e,"success");else{e.m=6;try{var o=2<nn(e)?e.g.statusText:""}catch(l){o=""}e.j=o+" ["+e.aa()+"]",t8(e)}}finally{ne(e)}}}}function ne(e,t){if(e.g){nt(e);let n=e.g,r=e.C[0]?I:null;e.g=null,e.C=null,t||eb(e,"ready");try{n.onreadystatechange=r}catch(i){}}}function nt(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(w.clearTimeout(e.A),e.A=null)}function nn(e){return e.g?e.g.readyState:0}function nr(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case t4:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function ni(e){let t="";return es(e,function(e,n){t+=n,t+=":",t+=e,t+="\r\n"}),t}function ns(e,t,n){a:{for(r in n){var r=!1;break a}r=!0}r||(n=ni(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):tE(e,t,n))}function na(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function no(e){this.Ca=0,this.i=[],this.j=new eq,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.$a=this.U=0,this.Ya=na("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Wa=na("baseRetryDelayMs",5e3,e),this.ab=na("retryDelaySeedMs",1e4,e),this.Za=na("forwardChannelMaxRetries",2,e),this.ta=na("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Yb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new tV(e&&e.concurrentRequestLimit),this.Fa=new tG,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Xa=e&&e.Wb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function nl(e){if(nh(e),3==e.G){var t=e.U++,n=ty(e.F);tE(n,"SID",e.I),tE(n,"RID",t),tE(n,"TYPE","terminate"),nf(e,n),(t=new e8(e,e.j,t,void 0)).K=2,t.v=tT(ty(n)),n=!1,w.navigator&&w.navigator.sendBeacon&&(n=w.navigator.sendBeacon(t.v.toString(),"")),!n&&w.Image&&((new Image).src=t.v,n=!0),n||(t.g=nS(t.l,null),t.g.da(t.v)),t.F=Date.now(),tl(t)}nb(e)}function nu(e){e.g&&(ny(e),e.g.cancel(),e.g=null)}function nh(e){nu(e),e.u&&(w.clearTimeout(e.u),e.u=null),nw(e),e.h.cancel(),e.m&&("number"==typeof e.m&&w.clearTimeout(e.m),e.m=null)}function nc(e){tj(e.h)||e.m||(e.m=!0,eD(e.Ja,e),e.C=0)}function nd(e,t){var n;n=t?t.m:e.U++;let r=ty(e.F);tE(r,"SID",e.I),tE(r,"RID",n),tE(r,"AID",e.T),nf(e,r),e.o&&e.s&&ns(r,e.o,e.s),n=new e8(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=np(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),tH(e.h,n),tr(n,r,t)}function nf(e,t){e.ia&&es(e.ia,function(e,n){tE(t,n,e)}),e.l&&tp({},function(e,n){tE(t,n,e)})}function np(e,t,n){n=Math.min(e.i.length,n);var r=e.l?S(e.l.Qa,e.l,e):null;a:{var i=e.i;let s=-1;for(;;){let a=["count="+n];-1==s?0<n?(s=i[0].h,a.push("ofs="+s)):s=0:a.push("ofs="+s);let o=!0;for(let l=0;l<n;l++){let u=i[l].h,h=i[l].g;if(0>(u-=s))s=Math.max(0,i[l].h-100),o=!1;else try{tW(h,a,"req"+u+"_")}catch(c){r&&r(h)}}if(o){r=a.join("&");break a}}}return e=e.i.splice(0,n),t.D=e,r}function ng(e){e.g||e.u||(e.Z=1,eD(e.Ia,e),e.A=0)}function nm(e){return!e.g&&!e.u&&!(3<=e.A)&&(e.Z++,e.u=eJ(S(e.Ia,e),nE(e,e.A)),e.A++,!0)}function ny(e){null!=e.B&&(w.clearTimeout(e.B),e.B=null)}function nv(e){e.g=new e8(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=ty(e.sa);tE(t,"RID","rpc"),tE(t,"SID",e.I),tE(t,"CI",e.L?"0":"1"),tE(t,"AID",e.T),tE(t,"TYPE","xmlhttp"),nf(e,t),e.o&&e.s&&ns(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=tT(ty(t)),n.s=null,n.P=!0,ti(n,e)}function nw(e){null!=e.v&&(w.clearTimeout(e.v),e.v=null)}function nI(e,t){var n=null;if(e.g==t){nw(e),ny(e),e.g=null;var r=2}else{if(!tq(e.h,t))return;n=t.D,tz(e.h,t),r=1}if(0!=e.G){if(e.pa=t.Y,t.i){if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i,s,a=e.C;eb(r=e$(),new eY(r,n,t,a)),nc(e)}else ng(e)}else if(3==(a=t.o)||0==a&&0<e.pa||!(1==r&&(i=e,s=t,!(tB(i.h)>=i.h.j-(i.m?1:0))&&(i.m?(i.i=s.D.concat(i.i),!0):1!=i.G&&2!=i.G&&!(i.C>=(i.Ya?0:i.Za))&&(i.m=eJ(S(i.Ja,i,s),nE(i,i.C)),i.C++,!0)))||2==r&&nm(e)))switch(n&&0<n.length&&((t=e.h).i=t.i.concat(n)),a){case 1:nT(e,5);break;case 4:nT(e,10);break;case 3:nT(e,6);break;default:nT(e,2)}}}function nE(e,t){let n=e.Wa+Math.floor(Math.random()*e.ab);return e.l||(n*=2),n*t}function nT(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=S(e.jb,e);n||(n=new tm("//www.google.com/images/cleardot.gif"),w.location&&"http"==w.location.protocol||tv(n,"https"),tT(n)),function(e,t){let n=new eq;if(w.Image){let r=new Image;r.onload=C(tQ,n,r,"TestLoadImage: loaded",!0,t),r.onerror=C(tQ,n,r,"TestLoadImage: error",!1,t),r.onabort=C(tQ,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=C(tQ,n,r,"TestLoadImage: timeout",!1,t),w.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}(n.toString(),r)}else eX(2);e.G=0,e.l&&e.l.va(t),nb(e),nh(e)}function nb(e){if(e.G=0,e.la=[],e.l){let t=tK(e.h);(0!=t.length||0!=e.i.length)&&(R(e.la,t),R(e.la,e.i),e.h.i.length=0,D(e.i),e.i.length=0),e.l.ua()}}function n_(e,t,n){var r=n instanceof tm?ty(n):new tm(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),tw(r,r.m);else{var i=w.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new tm(null,void 0);r&&tv(s,r),t&&(s.g=t),i&&tw(s,i),n&&(s.l=n),r=s}return n=e.D,t=e.za,n&&t&&tE(r,n,t),tE(r,"VER",e.ma),nf(e,r),r}function nS(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new t3(n&&e.Da&&!e.ra?new tX({ib:!0}):e.ra)).L=e.H,t}function nC(){}function nk(){if(B&&!(10<=Number(J)))throw Error("Environmental error: no available transport.")}function nA(e,t){eT.call(this),this.g=new no(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Xb)&&!P(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!P(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new nR(this)}function nN(e){e6.call(this);var t=e.__sm__;if(t){a:{for(let n in t){e=n;break a}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function nD(){e5.call(this),this.status=1}function nR(e){this.g=e}(c=t3.prototype).da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():l.g(),this.C=this.u?e2(this.u):e2(l),this.g.onreadystatechange=S(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){t9(this,i);return}if(e=n||"",n=new Map(this.headers),r){if(Object.getPrototypeOf(r)===Object.prototype)for(var a in r)n.set(a,r[a]);else if("function"==typeof r.keys&&"function"==typeof r.get)for(let o of r.keys())n.set(o,r.get(o));else throw Error("Unknown input type for opt_headers: "+String(r))}for(let[u,h]of(r=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),a=w.FormData&&e instanceof w.FormData,!(0<=N(t5,t))||r||a||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),n))this.g.setRequestHeader(u,h);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{var c,d,f;nt(this),0<this.B&&((this.K=(c=this.g,B&&(d=function(){let e=0,t=M(String(s)).split("."),n=M("9").split("."),r=Math.max(t.length,n.length);for(let i=0;0==e&&i<r;i++){var a=t[i]||"",o=n[i]||"";do{if(a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==a[0].length&&0==o[0].length)break;e=x(0==a[1].length?0:parseInt(a[1],10),0==o[1].length?0:parseInt(o[1],10))||x(0==a[2].length,0==o[2].length)||x(a[2],o[2]),a=a[3],o=o[3]}while(0==e)}return 0<=e},f=Y,Object.prototype.hasOwnProperty.call(f,9)?f[9]:f[9]=d(9))&&"number"==typeof c.timeout&&void 0!==c.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=S(this.qa,this)):this.A=ex(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(p){t9(this,p)}},c.qa=function(){void 0!==v&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,eb(this,"timeout"),this.abort(8))},c.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,eb(this,"complete"),eb(this,"abort"),ne(this))},c.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ne(this,!0)),t3.X.M.call(this)},c.Ha=function(){this.s||(this.F||this.v||this.l?t7(this):this.eb())},c.eb=function(){t7(this)},c.aa=function(){try{return 2<nn(this)?this.g.status:-1}catch(e){return -1}},c.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},c.Ra=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),t2(t)}},c.Ea=function(){return this.m},c.Na=function(){return"string"==typeof this.j?this.j:String(this.j)},(c=no.prototype).ma=8,c.G=1,c.Ja=function(e){if(this.m){if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;let t=new e8(this,this.j,e,void 0),n=this.s;if(this.S&&(n?el(n=ea(n),this.S):n=this.S),null!==this.o||this.N||(t.H=n,n=null),this.O)a:{for(var r=0,i=0;i<this.i.length;i++){b:{var s=this.i[i];if("__data__"in s.g&&"string"==typeof(s=s.g.__data__)){s=s.length;break b}s=void 0}if(void 0===s)break;if(4096<(r+=s)){r=i;break a}if(4096===r||i===this.i.length-1){r=i+1;break a}}r=1e3}else r=1e3;r=np(this,t,r),i=ty(this.F),tE(i,"RID",e),tE(i,"CVER",22),this.D&&tE(i,"X-HTTP-Session-Id",this.D),nf(this,i),n&&(this.N?r="headers="+encodeURIComponent(String(ni(n)))+"&"+r:this.o&&ns(i,this.o,n)),tH(this.h,t),this.Xa&&tE(i,"TYPE","init"),this.O?(tE(i,"$req",r),tE(i,"SID","null"),t.Z=!0,tr(t,i,null)):tr(t,i,r),this.G=2}}else 3==this.G&&(e?nd(this,e):0==this.i.length||tj(this.h)||nd(this))}},c.Ia=function(){if(this.u=null,nv(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=eJ(S(this.cb,this),e)}},c.cb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,eX(10),nu(this),nv(this))},c.bb=function(){null!=this.v&&(this.v=null,nu(this),nm(this),eX(19))},c.jb=function(e){e?(this.j.info("Successfully pinged google.com"),eX(2)):(this.j.info("Failed to ping google.com"),eX(1))},(c=nC.prototype).xa=function(){},c.wa=function(){},c.va=function(){},c.ua=function(){},c.Qa=function(){},nk.prototype.g=function(e,t){return new nA(e,t)},k(nA,eT),nA.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;eX(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=n_(e,null,e.V),nc(e)},nA.prototype.close=function(){nl(this.g)},nA.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=eS(e),e=n);t.i.push(new tU(t.$a++,e)),3==t.G&&nc(t)},nA.prototype.M=function(){this.g.l=null,delete this.j,nl(this.g),delete this.g,nA.X.M.call(this)},k(nN,e6),k(nD,e5),k(nR,nC),nR.prototype.xa=function(){eb(this.g,"a")},nR.prototype.wa=function(e){eb(this.g,new nN(e))},nR.prototype.va=function(e){eb(this.g,new nD(e))},nR.prototype.ua=function(){eb(this.g,"b")},nk.prototype.createWebChannel=nk.prototype.g,nA.prototype.send=nA.prototype.u,nA.prototype.open=nA.prototype.m,nA.prototype.close=nA.prototype.close,eZ.NO_ERROR=0,eZ.TIMEOUT=8,eZ.HTTP_ERROR=6,e0.COMPLETE="complete",e3.EventType=e4,e4.OPEN="a",e4.CLOSE="b",e4.ERROR="c",e4.MESSAGE="d",eT.prototype.listen=eT.prototype.N,t3.prototype.listenOnce=t3.prototype.O,t3.prototype.getLastError=t3.prototype.Na,t3.prototype.getLastErrorCode=t3.prototype.Ea,t3.prototype.getStatus=t3.prototype.aa,t3.prototype.getResponseJson=t3.prototype.Ra,t3.prototype.getResponseText=t3.prototype.fa,t3.prototype.send=t3.prototype.da;var nO=y.createWebChannelTransport=function(){return new nk},nL=y.getStatEventTarget=function(){return e$()},nP=y.ErrorCode=eZ,nM=y.EventType=e0,nx=y.Event=ez,nU=y.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},nV=y.FetchXmlHttpFactory=tX,nF=y.WebChannel=e3,nj=y.XhrIo=t3;n(3454);let nB="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nq{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nq.UNAUTHENTICATED=new nq(null),nq.GOOGLE_CREDENTIALS=new nq("google-credentials-uid"),nq.FIRST_PARTY=new nq("first-party-uid"),nq.MOCK_USER=new nq("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let nH="9.10.0",nz=new p.Yd("@firebase/firestore");function nK(){return nz.logLevel}function n$(e,...t){if(nz.logLevel<=p.in.DEBUG){let n=t.map(nQ);nz.debug(`Firestore (${nH}): ${e}`,...n)}}function nG(e,...t){if(nz.logLevel<=p.in.ERROR){let n=t.map(nQ);nz.error(`Firestore (${nH}): ${e}`,...n)}}function nW(e,...t){if(nz.logLevel<=p.in.WARN){let n=t.map(nQ);nz.warn(`Firestore (${nH}): ${e}`,...n)}}function nQ(e){var t;if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(n){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function nX(e="Unexpected state"){let t=`FIRESTORE (${nH}) INTERNAL ASSERTION FAILED: `+e;throw nG(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let nY={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class nJ extends g.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nZ{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class n0{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class n1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(nq.UNAUTHENTICATED))}shutdown(){}}class n2{constructor(e){this.t=e,this.currentUser=nq.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),i=new nZ;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new nZ,e.enqueueRetryable(()=>r(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},a=e=>{n$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(n$("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new nZ)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>{var n;return this.i!==e?(n$("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||nX(),new n0(t.accessToken,this.currentUser)):null}):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||nX(),new nq(e)}}class n3{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r,this.type="FirstParty",this.user=nq.FIRST_PARTY,this.p=new Map}I(){var e;return this.g?this.g():(("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)&&nX(),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);let e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class n4{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r}getToken(){return Promise.resolve(new n3(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable(()=>t(nq.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class n6{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class n5{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){let n=e=>{null!=e.error&&n$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.A;return this.A=e.token,n$("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let r=e=>{n$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.T.getImmediate({optional:!0});e?r(e):n$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>{var t;return e?("string"==typeof e.token||nX(),this.A=e.token,new n6(e.token)):null}):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function n9(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class n8{static R(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";for(;n.length<20;){let r=n9(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function n7(e,t){return e<t?-1:e>t?1:0}function re(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rt{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new nJ(nY.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new nJ(nY.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return rt.fromMillis(Date.now())}static fromDate(e){return rt.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new rt(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?n7(this.nanoseconds,e.nanoseconds):n7(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rn{constructor(e){this.timestamp=e}static fromTimestamp(e){return new rn(e)}static min(){return new rn(new rt(0,0))}static max(){return new rn(new rt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rr{constructor(e,t,n){void 0===t?t=0:t>e.length&&nX(),void 0===n?n=e.length-t:n>e.length-t&&nX(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===rr.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof rr?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let i=e.get(r),s=t.get(r);if(i<s)return -1;if(i>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ri extends rr{construct(e,t,n){return new ri(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new nJ(nY.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new ri(t)}static emptyPath(){return new ri([])}}let rs=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ra extends rr{construct(e,t,n){return new ra(e,t,n)}static isValidIdentifier(e){return rs.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ra.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ra(["__name__"])}static fromServerFormat(e){let t=[],n="",r=0,i=()=>{if(0===n.length)throw new nJ(nY.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;r<e.length;){let a=e[r];if("\\"===a){if(r+1===e.length)throw new nJ(nY.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let o=e[r+1];if("\\"!==o&&"."!==o&&"`"!==o)throw new nJ(nY.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=o,r+=2}else"`"===a?(s=!s,r++):"."!==a||s?(n+=a,r++):(i(),r++)}if(i(),s)throw new nJ(nY.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ra(t)}static emptyPath(){return new ra([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ro{constructor(e){this.path=e}static fromPath(e){return new ro(ri.fromString(e))}static fromName(e){return new ro(ri.fromString(e).popFirst(5))}static empty(){return new ro(ri.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===ri.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return ri.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ro(new ri(e.slice()))}}function rl(e){return new ru(e.readTime,e.key,-1)}class ru{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new ru(rn.min(),ro.empty(),-1)}static max(){return new ru(rn.max(),ro.empty(),-1)}}function rh(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=ro.comparator(e.documentKey,t.documentKey))?n:n7(e.largestBatchId,t.largestBatchId)}class rc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function rd(e){if(e.code!==nY.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;n$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rf{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&nX(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new rf((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof rf?t:rf.resolve(t)}catch(n){return rf.reject(n)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):rf.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):rf.reject(t)}static resolve(e){return new rf((t,n)=>{t(e)})}static reject(e){return new rf((t,n)=>{n(e)})}static waitFor(e){return new rf((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=rf.resolve(!1);for(let n of e)t=t.next(e=>e?rf.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new rf((n,r)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new rf((n,r)=>{let i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}function rp(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rg{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function rm(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ry(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function rv(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ rg.at=-1;class rw{constructor(e,t){this.comparator=e,this.root=t||rE.EMPTY}insert(e,t){return new rw(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,rE.BLACK,null,null))}remove(e){return new rw(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rE.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new rI(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new rI(this.root,e,this.comparator,!1)}getReverseIterator(){return new rI(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new rI(this.root,e,this.comparator,!0)}}class rI{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rE{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:rE.RED,this.left=null!=r?r:rE.EMPTY,this.right=null!=i?i:rE.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new rE(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return rE.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return rE.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,rE.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,rE.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw nX();let e=this.left.check();if(e!==this.right.check())throw nX();return e+(this.isRed()?0:1)}}rE.EMPTY=null,rE.RED=!0,rE.BLACK=!1,rE.EMPTY=new class{constructor(){this.size=0}get key(){throw nX()}get value(){throw nX()}get color(){throw nX()}get left(){throw nX()}get right(){throw nX()}copy(e,t,n,r,i){return this}insert(e,t,n){return new rE(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rT{constructor(e){this.comparator=e,this.data=new rw(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new rb(this.data.getIterator())}getIteratorFrom(e){return new rb(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof rT)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let r=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(r,i))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new rT(this.comparator);return t.data=e,t}}class rb{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class r_{constructor(e){this.fields=e,e.sort(ra.comparator)}static empty(){return new r_([])}unionWith(e){let t=new rT(ra.comparator);for(let n of this.fields)t=t.add(n);for(let r of e)t=t.add(r);return new r_(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return re(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rS{constructor(e){this.binaryString=e}static fromBase64String(e){let t=atob(e);return new rS(t)}static fromUint8Array(e){let t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new rS(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return n7(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rS.EMPTY_BYTE_STRING=new rS("");let rC=RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rk(e){if(!e&&nX(),"string"==typeof e){let t=0,n=rC.exec(e);if(!n&&nX(),n[1]){let r=n[1];t=Number(r=(r+"000000000").substr(0,9))}let i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:rA(e.seconds),nanos:rA(e.nanos)}}function rA(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function rN(e){return"string"==typeof e?rS.fromBase64String(e):rS.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function rD(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function rR(e){let t=rk(e.mapValue.fields.__local_write_time__.timestampValue);return new rt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rO{constructor(e,t,n,r,i,s,a,o){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.useFetchStreams=o}}class rL{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new rL("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof rL&&e.projectId===this.projectId&&e.database===this.database}}function rP(e){return null==e}function rM(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let rx={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function rU(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?rD(e)?4:rQ(e)?9007199254740991:10:nX()}function rV(e,t){var n,r,i,s;if(e===t)return!0;let a=rU(e);if(a!==rU(t))return!1;switch(a){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return rR(e).isEqual(rR(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=rk(e.timestampValue),r=rk(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return rN(e.bytesValue).isEqual(rN(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return rA(e.geoPointValue.latitude)===rA(t.geoPointValue.latitude)&&rA(e.geoPointValue.longitude)===rA(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return rA(e.integerValue)===rA(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=rA(e.doubleValue),r=rA(t.doubleValue);return n===r?rM(n)===rM(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return re(e.arrayValue.values||[],t.arrayValue.values||[],rV);case 10:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(rm(n)!==rm(r))return!1;for(let i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!rV(n[i],r[i])))return!1;return!0}(e,t);default:return nX()}}function rF(e,t){return void 0!==(e.values||[]).find(e=>rV(e,t))}function rj(e,t){if(e===t)return 0;let n=rU(e),r=rU(t);if(n!==r)return n7(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return n7(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=rA(e.integerValue||e.doubleValue),r=rA(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return rB(e.timestampValue,t.timestampValue);case 4:return rB(rR(e),rR(t));case 5:return n7(e.stringValue,t.stringValue);case 6:return function(e,t){let n=rN(e),r=rN(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){let s=n7(n[i],r[i]);if(0!==s)return s}return n7(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=n7(rA(e.latitude),rA(t.latitude));return 0!==n?n:n7(rA(e.longitude),rA(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){let s=rj(n[i],r[i]);if(s)return s}return n7(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===rx.mapValue&&t===rx.mapValue)return 0;if(e===rx.mapValue)return 1;if(t===rx.mapValue)return -1;let n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let a=0;a<r.length&&a<s.length;++a){let o=n7(r[a],s[a]);if(0!==o)return o;let l=rj(n[r[a]],i[s[a]]);if(0!==l)return l}return n7(r.length,s.length)}(e.mapValue,t.mapValue);default:throw nX()}}function rB(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return n7(e,t);let n=rk(e),r=rk(t),i=n7(n.seconds,r.seconds);return 0!==i?i:n7(n.nanos,r.nanos)}function rq(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=rk(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?rN(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,ro.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=rq(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let i of t)r?r=!1:n+=",",n+=`${i}:${rq(e.fields[i])}`;return n+"}"}(e.mapValue):nX()}function rH(e){return!!e&&"integerValue"in e}function rz(e){return!!e&&"arrayValue"in e}function rK(e){return!!e&&"nullValue"in e}function r$(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function rG(e){return!!e&&"mapValue"in e}function rW(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return ry(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=rW(n)),t}if(e.arrayValue){let n={arrayValue:{values:[]}};for(let r=0;r<(e.arrayValue.values||[]).length;++r)n.arrayValue.values[r]=rW(e.arrayValue.values[r]);return n}return Object.assign({},e)}function rQ(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rX{constructor(e){this.value=e}static empty(){return new rX({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!rG(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=rW(t)}setAll(e){let t=ra.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let s=this.getFieldsMap(t);this.applyChanges(s,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=rW(e):r.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){let t=this.field(e.popLast());rG(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return rV(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];rG(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){for(let r of(ry(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new rX(rW(this.value))}}function rY(e){let t=[];return ry(e.fields,(e,n)=>{let r=new ra([e]);if(rG(n)){let i=rY(n.mapValue).fields;if(0===i.length)t.push(r);else for(let s of i)t.push(r.child(s))}else t.push(r)}),new r_(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rJ{constructor(e,t,n,r,i,s){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.data=i,this.documentState=s}static newInvalidDocument(e){return new rJ(e,0,rn.min(),rn.min(),rX.empty(),0)}static newFoundDocument(e,t,n){return new rJ(e,1,t,rn.min(),n,0)}static newNoDocument(e,t){return new rJ(e,2,t,rn.min(),rX.empty(),0)}static newUnknownDocument(e,t){return new rJ(e,3,t,rn.min(),rX.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rX.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rX.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=rn.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof rJ&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rJ(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rZ{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.ht=null}}function r0(e,t=null,n=[],r=[],i=null,s=null,a=null){return new rZ(e,t,n,r,i,s,a)}function r1(e){var t;let n=e;if(null===n.ht){let r=n.path.canonicalString();null!==n.collectionGroup&&(r+="|cg:"+n.collectionGroup),r+="|f:",r+=n.filters.map(e=>{var t;return e.field.canonicalString()+e.op.toString()+rq(t=e.value)}).join(","),r+="|ob:",r+=n.orderBy.map(e=>{var t;return e.field.canonicalString()+e.dir}).join(","),rP(n.limit)||(r+="|l:",r+=n.limit),n.startAt&&(r+="|lb:",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(e=>{var t;return rq(e)}).join(",")),n.endAt&&(r+="|ub:",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(e=>{var t;return rq(e)}).join(",")),n.ht=r}return n.ht}function r2(e,t){var n,r;if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!ia(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let s=0;s<e.filters.length;s++)if(n=e.filters[s],r=t.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!rV(n.value,r.value))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!il(e.startAt,t.startAt)&&il(e.endAt,t.endAt)}function r3(e){return ro.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class r4 extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.lt(e,t,n):new r6(e,t,n):"array-contains"===t?new r7(e,n):"in"===t?new ie(e,n):"not-in"===t?new it(e,n):"array-contains-any"===t?new ir(e,n):new r4(e,t,n)}static lt(e,t,n){return"in"===t?new r5(e,n):new r9(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.ft(rj(t,this.value)):null!==t&&rU(this.value)===rU(t)&&this.ft(rj(t,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return nX()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class r6 extends r4{constructor(e,t,n){super(e,t,n),this.key=ro.fromName(n.referenceValue)}matches(e){let t=ro.comparator(e.key,this.key);return this.ft(t)}}class r5 extends r4{constructor(e,t){super(e,"in",t),this.keys=r8("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class r9 extends r4{constructor(e,t){super(e,"not-in",t),this.keys=r8("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function r8(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>ro.fromName(e.referenceValue))}class r7 extends r4{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return rz(t)&&rF(t.arrayValue,this.value)}}class ie extends r4{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&rF(this.value.arrayValue,t)}}class it extends r4{constructor(e,t){super(e,"not-in",t)}matches(e){if(rF(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!rF(this.value.arrayValue,t)}}class ir extends r4{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!rz(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>rF(this.value.arrayValue,e))}}class ii{constructor(e,t){this.position=e,this.inclusive=t}}class is{constructor(e,t="asc"){this.field=e,this.dir=t}}function ia(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function io(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(r=s.field.isKeyField()?ro.comparator(ro.fromName(a.referenceValue),n.key):rj(a,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function il(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!rV(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iu{constructor(e,t=null,n=[],r=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this._t=null,this.wt=null,this.startAt,this.endAt}}function ih(e){return new iu(e)}function ic(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function id(e){var t,n;let r=e;if(null===r._t){r._t=[];let i=function(e){for(let t of e.filters)if(t.dt())return t.field;return null}(r),s=(n=r).explicitOrderBy.length>0?n.explicitOrderBy[0].field:null;if(null!==i&&null===s)i.isKeyField()||r._t.push(new is(i)),r._t.push(new is(ra.keyField(),"asc"));else{let a=!1;for(let o of r.explicitOrderBy)r._t.push(o),o.field.isKeyField()&&(a=!0);if(!a){let l=r.explicitOrderBy.length>0?r.explicitOrderBy[r.explicitOrderBy.length-1].dir:"asc";r._t.push(new is(ra.keyField(),l))}}}return r._t}function ip(e){var t;let n=e;if(!n.wt){if("F"===n.limitType)n.wt=r0(n.path,n.collectionGroup,id(n),n.filters,n.limit,n.startAt,n.endAt);else{let r=[];for(let i of id(n)){let s="desc"===i.dir?"asc":"desc";r.push(new is(i.field,s))}let a=n.endAt?new ii(n.endAt.position,n.endAt.inclusive):null,o=n.startAt?new ii(n.startAt.position,n.startAt.inclusive):null;n.wt=r0(n.path,n.collectionGroup,r,n.filters,n.limit,a,o)}}return n.wt}function ig(e,t,n){return new iu(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function im(e,t){return r2(ip(e),ip(t))&&e.limitType===t.limitType}function iy(e){return`${r1(ip(e))}|lt:${e.limitType}`}function iv(e){var t;let n;return`Query(target=${n=(t=ip(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>{var t;return`${e.field.canonicalString()} ${e.op} ${rq(t=e.value)}`}).join(", ")}]`),rP(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>{var t;return`${e.field.canonicalString()} (${e.dir})`}).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(e=>{var t;return rq(e)}).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(e=>{var t;return rq(e)}).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function iw(e,t){var n,r;return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):ro.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let r=io(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,id(e),t))&&(!e.endAt||!!function(e,t,n){let r=io(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,id(e),t))}function iI(e){return(t,n)=>{let r=!1;for(let i of id(e)){let s=iE(i,t,n);if(0!==s)return s;r=r||i.field.isKeyField()}return 0}}function iE(e,t,n){let r=e.field.isKeyField()?ro.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?rj(r,i):nX()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return -1*r;default:return nX()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function iT(e,t){if(e.gt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rM(t)?"-0":t}}function ib(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class i_{constructor(){this._=void 0}}function iS(e,t,n){return e instanceof iA?function(e,t){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof iN?iD(e,t):e instanceof iR?iO(e,t):function(e,t){let n=ik(e,t),r=iP(n)+iP(e.yt);return rH(n)&&rH(e.yt)?ib(r):iT(e.It,r)}(e,t)}function iC(e,t,n){return e instanceof iN?iD(e,t):e instanceof iR?iO(e,t):n}function ik(e,t){var n;return e instanceof iL?rH(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class iA extends i_{}class iN extends i_{constructor(e){super(),this.elements=e}}function iD(e,t){let n=iM(t);for(let r of e.elements)n.some(e=>rV(e,r))||n.push(r);return{arrayValue:{values:n}}}class iR extends i_{constructor(e){super(),this.elements=e}}function iO(e,t){let n=iM(t);for(let r of e.elements)n=n.filter(e=>!rV(e,r));return{arrayValue:{values:n}}}class iL extends i_{constructor(e,t){super(),this.It=e,this.yt=t}}function iP(e){return rA(e.integerValue||e.doubleValue)}function iM(e){return rz(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class ix{constructor(e,t){this.version=e,this.transformResults=t}}class iU{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new iU}static exists(e){return new iU(void 0,e)}static updateTime(e){return new iU(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function iV(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class iF{}function ij(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new iX(e.key,iU.none()):new iK(e.key,e.data,iU.none());{let n=e.data,r=rX.empty(),i=new rT(ra.comparator);for(let s of t.fields)if(!i.has(s)){let a=n.field(s);null===a&&s.length>1&&(s=s.popLast(),a=n.field(s)),null===a?r.delete(s):r.set(s,a),i=i.add(s)}return new i$(e.key,r,new r_(i.toArray()),iU.none())}}function iB(e,t,n){e instanceof iK?function(e,t,n){let r=e.value.clone(),i=iW(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof i$?function(e,t,n){if(!iV(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=iW(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(iG(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function iq(e,t,n,r){var i,s,a;return e instanceof iK?function(e,t,n,r){if(!iV(e.precondition,t))return n;let i=e.value.clone(),s=iQ(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof i$?function(e,t,n,r){if(!iV(e.precondition,t))return n;let i=iQ(e.fieldTransforms,r,t),s=t.data;return(s.setAll(iG(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):iV(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function iH(e,t){let n=null;for(let r of e.fieldTransforms){let i=t.data.field(r.field),s=ik(r.transform,i||null);null!=s&&(null===n&&(n=rX.empty()),n.set(r.field,s))}return n||null}function iz(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&re(n,r,(e,t)=>{var n,r,i,s;return e.field.isEqual(t.field)&&(i=e.transform,s=t.transform,i instanceof iN&&s instanceof iN||i instanceof iR&&s instanceof iR?re(i.elements,s.elements,rV):i instanceof iL&&s instanceof iL?rV(i.yt,s.yt):i instanceof iA&&s instanceof iA)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class iK extends iF{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class i$ extends iF{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function iG(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}function iW(e,t,n){var r;let i=new Map;(r=e.length===n.length)||nX();for(let s=0;s<n.length;s++){let a=e[s],o=a.transform,l=t.data.field(a.field);i.set(a.field,iC(o,l,n[s]))}return i}function iQ(e,t,n){let r=new Map;for(let i of e){let s=i.transform,a=n.data.field(i.field);r.set(i.field,iS(s,a,t))}return r}class iX extends iF{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class iY extends iF{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iJ{constructor(e){this.count=e}}function iZ(e){if(void 0===e)return nG("GRPC error has no .code"),nY.UNKNOWN;switch(e){case u.OK:return nY.OK;case u.CANCELLED:return nY.CANCELLED;case u.UNKNOWN:return nY.UNKNOWN;case u.DEADLINE_EXCEEDED:return nY.DEADLINE_EXCEEDED;case u.RESOURCE_EXHAUSTED:return nY.RESOURCE_EXHAUSTED;case u.INTERNAL:return nY.INTERNAL;case u.UNAVAILABLE:return nY.UNAVAILABLE;case u.UNAUTHENTICATED:return nY.UNAUTHENTICATED;case u.INVALID_ARGUMENT:return nY.INVALID_ARGUMENT;case u.NOT_FOUND:return nY.NOT_FOUND;case u.ALREADY_EXISTS:return nY.ALREADY_EXISTS;case u.PERMISSION_DENIED:return nY.PERMISSION_DENIED;case u.FAILED_PRECONDITION:return nY.FAILED_PRECONDITION;case u.ABORTED:return nY.ABORTED;case u.OUT_OF_RANGE:return nY.OUT_OF_RANGE;case u.UNIMPLEMENTED:return nY.UNIMPLEMENTED;case u.DATA_LOSS:return nY.DATA_LOSS;default:return nX()}}(h=u||(u={}))[h.OK=0]="OK",h[h.CANCELLED=1]="CANCELLED",h[h.UNKNOWN=2]="UNKNOWN",h[h.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",h[h.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",h[h.NOT_FOUND=5]="NOT_FOUND",h[h.ALREADY_EXISTS=6]="ALREADY_EXISTS",h[h.PERMISSION_DENIED=7]="PERMISSION_DENIED",h[h.UNAUTHENTICATED=16]="UNAUTHENTICATED",h[h.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",h[h.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",h[h.ABORTED=10]="ABORTED",h[h.OUT_OF_RANGE=11]="OUT_OF_RANGE",h[h.UNIMPLEMENTED=12]="UNIMPLEMENTED",h[h.INTERNAL=13]="INTERNAL",h[h.UNAVAILABLE=14]="UNAVAILABLE",h[h.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class i0{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[r,i]of n)if(this.equalsFn(r,e))return i}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ry(this.inner,(t,n)=>{for(let[r,i]of n)e(r,i)})}isEmpty(){return rv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let i1=new rw(ro.comparator),i2=new rw(ro.comparator);function i3(...e){let t=i2;for(let n of e)t=t.insert(n.key,n);return t}function i4(e){let t=i2;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function i6(){return i9()}function i5(){return i9()}function i9(){return new i0(e=>e.toString(),(e,t)=>e.isEqual(t))}let i8=new rw(ro.comparator),i7=new rT(ro.comparator);function se(...e){let t=i7;for(let n of e)t=t.add(n);return t}let st=new rT(n7);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sn{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t){let n=new Map;return n.set(e,sr.createSynthesizedTargetChangeForCurrentChange(e,t)),new sn(rn.min(),n,st,i1,se())}}class sr{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t){return new sr(rS.EMPTY_BYTE_STRING,t,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class si{constructor(e,t,n,r){this.Tt=e,this.removedTargetIds=t,this.key=n,this.Et=r}}class ss{constructor(e,t){this.targetId=e,this.At=t}}class sa{constructor(e,t,n=rS.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class so{constructor(){this.Rt=0,this.bt=sh(),this.Pt=rS.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return 0!==this.Rt}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=se(),t=se(),n=se();return this.bt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:nX()}}),new sr(this.Pt,this.vt,e,t,n)}Nt(){this.Vt=!1,this.bt=sh()}kt(e,t){this.Vt=!0,this.bt=this.bt.insert(e,t)}Mt(e){this.Vt=!0,this.bt=this.bt.remove(e)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class sl{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=i1,this.qt=su(),this.Kt=new rT(n7)}Gt(e){for(let t of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(t,e.Et):this.jt(t,e.key,e.Et);for(let n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,t=>{let n=this.zt(t);switch(e.state){case 0:this.Ht(t)&&n.Ct(e.resumeToken);break;case 1:n.Ft(),n.St||n.Nt(),n.Ct(e.resumeToken);break;case 2:n.Ft(),n.St||this.removeTarget(t);break;case 3:this.Ht(t)&&(n.$t(),n.Ct(e.resumeToken));break;case 4:this.Ht(t)&&(this.Jt(t),n.Ct(e.resumeToken));break;default:nX()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Lt.forEach((e,n)=>{this.Ht(n)&&t(n)})}Yt(e){let t=e.targetId,n=e.At.count,r=this.Xt(t);if(r){let i=r.target;if(r3(i)){if(0===n){let s=new ro(i.path);this.jt(t,s,rJ.newNoDocument(s,rn.min()))}else{var a;(a=1===n)||nX()}}else this.Zt(t)!==n&&(this.Jt(t),this.Kt=this.Kt.add(t))}}te(e){let t=new Map;this.Lt.forEach((n,r)=>{let i=this.Xt(r);if(i){if(n.current&&r3(i.target)){let s=new ro(i.target.path);null!==this.Ut.get(s)||this.ee(r,s)||this.jt(r,s,rJ.newNoDocument(s,e))}n.Dt&&(t.set(r,n.xt()),n.Nt())}});let n=se();this.qt.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{let t=this.Xt(e);return!t||2===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.Ut.forEach((t,n)=>n.setReadTime(e));let r=new sn(e,t,this.Kt,this.Ut,n);return this.Ut=i1,this.qt=su(),this.Kt=new rT(n7),r}Qt(e,t){if(!this.Ht(e))return;let n=this.ee(e,t.key)?2:0;this.zt(e).kt(t.key,n),this.Ut=this.Ut.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ne(t.key).add(e))}jt(e,t,n){if(!this.Ht(e))return;let r=this.zt(e);this.ee(e,t)?r.kt(t,1):r.Mt(t),this.qt=this.qt.insert(t,this.ne(t).delete(e)),n&&(this.Ut=this.Ut.insert(t,n))}removeTarget(e){this.Lt.delete(e)}Zt(e){let t=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.zt(e).Ot()}zt(e){let t=this.Lt.get(e);return t||(t=new so,this.Lt.set(e,t)),t}ne(e){let t=this.qt.get(e);return t||(t=new rT(n7),this.qt=this.qt.insert(e,t)),t}Ht(e){let t=null!==this.Xt(e);return t||n$("WatchChangeAggregator","Detected inactive target",e),t}Xt(e){let t=this.Lt.get(e);return t&&t.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new so),this.Bt.getRemoteKeysForTarget(e).forEach(t=>{this.jt(e,t,null)})}ee(e,t){return this.Bt.getRemoteKeysForTarget(e).has(t)}}function su(){return new rw(ro.comparator)}function sh(){return new rw(ro.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let sc={asc:"ASCENDING",desc:"DESCENDING"},sd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class sf{constructor(e,t){this.databaseId=e,this.gt=t}}function sp(e,t){return e.gt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function sg(e,t){return e.gt?t.toBase64():t.toUint8Array()}function sm(e){return!e&&nX(),rn.fromTimestamp(function(e){let t=rk(e);return new rt(t.seconds,t.nanos)}(e))}function sy(e,t){var n;return new ri(["projects",e.projectId,"databases",e.database]).child("documents").child(t).canonicalString()}function sv(e){var t;let n=ri.fromString(e);return sk(n)||nX(),n}function sw(e,t){return sy(e.databaseId,t.path)}function sI(e,t){let n=sv(t);if(n.get(1)!==e.databaseId.projectId)throw new nJ(nY.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new nJ(nY.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new ro(sb(n))}function sE(e,t){return sy(e.databaseId,t)}function sT(e){return new ri(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function sb(e){var t;return e.length>4&&"documents"===e.get(4)||nX(),e.popFirst(5)}function s_(e,t,n){return{name:sw(e,t),fields:n.value.mapValue.fields}}function sS(e){return{fieldPath:e.canonicalString()}}function sC(e){return ra.fromServerFormat(e.fieldPath)}function sk(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sA{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){let i=this.mutations[r];i.key.isEqual(e.key)&&iB(i,e,n[r])}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=iq(n,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=iq(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=i5();return this.mutations.forEach(r=>{let i=e.get(r.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields);a=t.has(r.key)?null:a;let o=ij(s,a);null!==o&&n.set(r.key,o),s.isValidDocument()||s.convertToNoDocument(rn.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),se())}isEqual(e){return this.batchId===e.batchId&&re(this.mutations,e.mutations,(e,t)=>iz(e,t))&&re(this.baseMutations,e.baseMutations,(e,t)=>iz(e,t))}}class sN{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){var r;(r=e.mutations.length===n.length)||nX();let i=i8,s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,n[a].version);return new sN(e,t,n,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sD{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sR{constructor(e,t,n,r,i=rn.min(),s=rn.min(),a=rS.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a}withSequenceNumber(e){return new sR(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new sR(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new sR(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sO{constructor(e){this.re=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sL{constructor(){}ce(e,t){this.ae(e,t),t.he()}ae(e,t){if("nullValue"in e)this.le(t,5);else if("booleanValue"in e)this.le(t,10),t.fe(e.booleanValue?1:0);else if("integerValue"in e)this.le(t,15),t.fe(rA(e.integerValue));else if("doubleValue"in e){let n=rA(e.doubleValue);isNaN(n)?this.le(t,13):(this.le(t,15),rM(n)?t.fe(0):t.fe(n))}else if("timestampValue"in e){let r=e.timestampValue;this.le(t,20),"string"==typeof r?t.de(r):(t.de(`${r.seconds||""}`),t.fe(r.nanos||0))}else if("stringValue"in e)this._e(e.stringValue,t),this.we(t);else if("bytesValue"in e)this.le(t,30),t.me(rN(e.bytesValue)),this.we(t);else if("referenceValue"in e)this.ge(e.referenceValue,t);else if("geoPointValue"in e){let i=e.geoPointValue;this.le(t,45),t.fe(i.latitude||0),t.fe(i.longitude||0)}else"mapValue"in e?rQ(e)?this.le(t,Number.MAX_SAFE_INTEGER):(this.ye(e.mapValue,t),this.we(t)):"arrayValue"in e?(this.pe(e.arrayValue,t),this.we(t)):nX()}_e(e,t){this.le(t,25),this.Ie(e,t)}Ie(e,t){t.de(e)}ye(e,t){let n=e.fields||{};for(let r of(this.le(t,55),Object.keys(n)))this._e(r,t),this.ae(n[r],t)}pe(e,t){let n=e.values||[];for(let r of(this.le(t,50),n))this.ae(r,t)}ge(e,t){this.le(t,37),ro.fromName(e).path.forEach(e=>{this.le(t,60),this.Ie(e,t)})}le(e,t){e.fe(t)}we(e){e.fe(2)}}sL.Te=new sL;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sP{constructor(){this.Ye=new sM}addToCollectionParentIndex(e,t){return this.Ye.add(t),rf.resolve()}getCollectionParents(e,t){return rf.resolve(this.Ye.getEntries(t))}addFieldIndex(e,t){return rf.resolve()}deleteFieldIndex(e,t){return rf.resolve()}getDocumentsMatchingTarget(e,t){return rf.resolve(null)}getIndexType(e,t){return rf.resolve(0)}getFieldIndexes(e,t){return rf.resolve([])}getNextCollectionGroupToUpdate(e){return rf.resolve(null)}getMinOffset(e,t){return rf.resolve(ru.min())}getMinOffsetFromCollectionGroup(e,t){return rf.resolve(ru.min())}updateCollectionGroup(e,t,n){return rf.resolve()}updateIndexEntries(e,t){return rf.resolve()}}class sM{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new rT(ri.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new rT(ri.comparator)).toArray()}}new Uint8Array(0);class sx{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new sx(e,sx.DEFAULT_COLLECTION_PERCENTILE,sx.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ sx.DEFAULT_COLLECTION_PERCENTILE=10,sx.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,sx.DEFAULT=new sx(41943040,sx.DEFAULT_COLLECTION_PERCENTILE,sx.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),sx.DISABLED=new sx(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sU{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new sU(0)}static vn(){return new sU(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sV{constructor(){this.changes=new i0(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,rJ.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?rf.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sF{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sj{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.getBaseDocument(e,t,n))).next(e=>(null!==n&&iq(n.mutation,e,r_.empty(),rt.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,se()).next(()=>t))}getLocalViewOfDocuments(e,t,n=se()){let r=i6();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=i3();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=i6();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,se()))}populateOverlays(e,t,n){let r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=i1,s=i9(),a=i9();return t.forEach((e,t)=>{let a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof i$)?i=i.insert(t.key,t):void 0!==a&&(s.set(t.key,a.mutation.getFieldMask()),iq(a.mutation,t,a.mutation.getFieldMask(),rt.now()))}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return a.set(e,new sF(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),a))}recalculateAndSaveOverlays(e,t){let n=i9(),r=new rw((e,t)=>e-t),i=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=n.get(e)||r_.empty();a=i.applyToLocalView(s,a),n.set(e,a);let o=(r.get(i.batchId)||se()).add(e);r=r.insert(i.batchId,o)})}).next(()=>{let s=[],a=r.getReverseIterator();for(;a.hasNext();){let o=a.getNext(),l=o.key,u=o.value,h=i5();u.forEach(e=>{if(!i.has(e)){let r=ij(t.get(e),n.get(e));null!==r&&h.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,l,h))}return rf.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n){var r,i;return ro.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):null!==t.collectionGroup?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{let s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):rf.resolve(i6()),a=-1,o=i;return s.next(t=>rf.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),i.get(t)?rf.resolve():this.getBaseDocument(e,t,n).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,se())).next(e=>({batchId:a,changes:i4(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ro(t)).next(e=>{let t=i3();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n){let r=t.collectionGroup,i=i3();return this.indexManager.getCollectionParents(e,r).next(s=>rf.forEach(s,s=>{var a,o;let l=(o=s.child(r),new iu(o,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt));return this.getDocumentsMatchingCollectionQuery(e,l,n).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.remoteDocumentCache.getAllFromCollection(e,t.path,n).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId))).next(e=>{e.forEach((e,t)=>{let n=t.getKey();null===r.get(n)&&(r=r.insert(n,rJ.newInvalidDocument(n)))});let n=i3();return r.forEach((r,i)=>{let s=e.get(r);void 0!==s&&iq(s.mutation,i,r_.empty(),rt.now()),iw(t,i)&&(n=n.insert(r,i))}),n})}getBaseDocument(e,t,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(e,t):rf.resolve(rJ.newInvalidDocument(t))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sB{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return rf.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){return this.Zn.set(t.id,{id:t.id,version:t.version,createTime:sm(t.createTime)}),rf.resolve()}getNamedQuery(e,t){return rf.resolve(this.ts.get(t))}saveNamedQuery(e,t){var n;return this.ts.set(t.name,{name:t.name,query:function(e){let t=function(e){var t,n,r,i,s,a,o,l,u;let h=function(e){let t=sv(e);return 4===t.length?ri.emptyPath():sb(t)}(e.parent),c=e.structuredQuery,d=c.from?c.from.length:0,f=null;if(d>0){(t=1===d)||nX();let p=c.from[0];p.allDescendants?f=p.collectionId:h=h.child(p.collectionId)}let g=[];c.where&&(g=function e(t){var n;return t?void 0!==t.unaryFilter?[function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=sC(e.unaryFilter.field);return r4.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=sC(e.unaryFilter.field);return r4.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=sC(e.unaryFilter.field);return r4.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=sC(e.unaryFilter.field);return r4.create(i,"!=",{nullValue:"NULL_VALUE"});default:return nX()}}(t)]:void 0!==t.fieldFilter?[(n=t,r4.create(sC(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return nX()}}(n.fieldFilter.op),n.fieldFilter.value))]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>e(t)).reduce((e,t)=>e.concat(t)):nX():[]}(c.where));let m=[];c.orderBy&&(m=c.orderBy.map(e=>{var t;return new is(sC(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}));let y=null,v;c.limit&&(y=rP(v="object"==typeof(n=c.limit)?n.value:n)?null:v);let w=null;c.startAt&&(w=function(e){let t=!!e.before,n=e.values||[];return new ii(n,t)}(c.startAt));let I=null;return c.endAt&&(I=function(e){let t=!e.before,n=e.values||[];return new ii(n,t)}(c.endAt)),r=h,i=f,s=m,a=g,o=y,l=w,u=I,new iu(r,i,s,a,o,"F",l,u)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?ig(t,t.limit,"L"):t}(t.bundledQuery),readTime:sm(t.readTime)}),rf.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sq{constructor(){this.overlays=new rw(ro.comparator),this.es=new Map}getOverlay(e,t){return rf.resolve(this.overlays.get(t))}getOverlays(e,t){let n=i6();return rf.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.ue(e,t,r)}),rf.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.es.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.es.delete(n)),rf.resolve()}getOverlaysForCollection(e,t,n){let r=i6(),i=t.length+1,s=new ro(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let o=a.getNext().value,l=o.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===i&&o.largestBatchId>n&&r.set(o.getKey(),o)}return rf.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new rw((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let a=s.getNext().value;if(a.getKey().getCollectionGroup()===t&&a.largestBatchId>n){let o=i.get(a.largestBatchId);null===o&&(o=i6(),i=i.insert(a.largestBatchId,o)),o.set(a.getKey(),a)}}let l=i6(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((e,t)=>l.set(e,t)),!(l.size()>=r)););return rf.resolve(l)}ue(e,t,n){let r=this.overlays.get(n.key);if(null!==r){let i=this.es.get(r.largestBatchId).delete(n.key);this.es.set(r.largestBatchId,i)}this.overlays=this.overlays.insert(n.key,new sD(t,n));let s=this.es.get(t);void 0===s&&(s=se(),this.es.set(t,s)),this.es.set(t,s.add(n.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sH{constructor(){this.ns=new rT(sz.ss),this.rs=new rT(sz.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){let n=new sz(e,t);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.cs(new sz(e,t))}hs(e,t){e.forEach(e=>this.removeReference(e,t))}ls(e){let t=new ro(new ri([])),n=new sz(t,e),r=new sz(t,e+1),i=[];return this.rs.forEachInRange([n,r],e=>{this.cs(e),i.push(e.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){let t=new ro(new ri([])),n=new sz(t,e),r=new sz(t,e+1),i=se();return this.rs.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new sz(e,0),n=this.ns.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class sz{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return ro.comparator(e.key,t.key)||n7(e._s,t._s)}static os(e,t){return n7(e._s,t._s)||ro.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sK{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new rT(sz.ss)}checkEmpty(e){return rf.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){let i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new sA(i,t,n,r);for(let a of(this.mutationQueue.push(s),r))this.gs=this.gs.add(new sz(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return rf.resolve(s)}lookupMutationBatch(e,t){return rf.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.ps(t+1),r=n<0?0:n;return rf.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return rf.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return rf.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new sz(t,0),r=new sz(t,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([n,r],e=>{let t=this.ys(e._s);i.push(t)}),rf.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new rT(n7);return t.forEach(e=>{let t=new sz(e,0),r=new sz(e,Number.POSITIVE_INFINITY);this.gs.forEachInRange([t,r],e=>{n=n.add(e._s)})}),rf.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=n;ro.isDocumentKey(i)||(i=i.child(""));let s=new sz(new ro(i),0),a=new rT(n7);return this.gs.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e._s)),!0)},s),rf.resolve(this.Is(a))}Is(e){let t=[];return e.forEach(e=>{let n=this.ys(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){var n;0===this.Ts(t.batchId,"removed")||nX(),this.mutationQueue.shift();let r=this.gs;return rf.forEach(t.mutations,n=>{let i=new sz(n.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,t){let n=new sz(t,0),r=this.gs.firstAfterOrEqual(n);return rf.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,rf.resolve()}Ts(e,t){return this.ps(e)}ps(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}ys(e){let t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class s${constructor(e){this.Es=e,this.docs=new rw(ro.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Es(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return rf.resolve(n?n.document.mutableCopy():rJ.newInvalidDocument(t))}getEntries(e,t){let n=i1;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():rJ.newInvalidDocument(e))}),rf.resolve(n)}getAllFromCollection(e,t,n){let r=i1,i=new ro(t.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){let{key:a,value:{document:o}}=s.getNext();if(!t.isPrefixOf(a.path))break;a.path.length>t.length+1||0>=rh(rl(o),n)||(r=r.insert(o.key,o.mutableCopy()))}return rf.resolve(r)}getAllFromCollectionGroup(e,t,n,r){nX()}As(e,t){return rf.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new sG(this)}getSize(e){return rf.resolve(this.size)}}class sG extends sV{constructor(e){super(),this.Yn=e}applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(n)}),rf.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sW{constructor(e){this.persistence=e,this.Rs=new i0(e=>r1(e),r2),this.lastRemoteSnapshotVersion=rn.min(),this.highestTargetId=0,this.bs=0,this.Ps=new sH,this.targetCount=0,this.vs=sU.Pn()}forEachTarget(e,t){return this.Rs.forEach((e,n)=>t(n)),rf.resolve()}getLastRemoteSnapshotVersion(e){return rf.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return rf.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),rf.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.bs&&(this.bs=t),rf.resolve()}Dn(e){this.Rs.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.vs=new sU(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,rf.resolve()}updateTargetData(e,t){return this.Dn(t),rf.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,rf.resolve()}removeTargets(e,t,n){let r=0,i=[];return this.Rs.forEach((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Rs.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),rf.waitFor(i).next(()=>r)}getTargetCount(e){return rf.resolve(this.targetCount)}getTargetData(e,t){let n=this.Rs.get(t)||null;return rf.resolve(n)}addMatchingKeys(e,t,n){return this.Ps.us(t,n),rf.resolve()}removeMatchingKeys(e,t,n){this.Ps.hs(t,n);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),rf.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),rf.resolve()}getMatchingKeysForTargetId(e,t){let n=this.Ps.ds(t);return rf.resolve(n)}containsKey(e,t){return rf.resolve(this.Ps.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sQ{constructor(e,t){var n;this.Vs={},this.overlays={},this.Ss=new rg(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new sW(this),this.indexManager=new sP,this.remoteDocumentCache=(n=e=>this.referenceDelegate.xs(e),new s$(n)),this.It=new sO(t),this.Ns=new sB(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new sq,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Vs[e.toKey()];return n||(n=new sK(t,this.referenceDelegate),this.Vs[e.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,n){n$("MemoryPersistence","Starting transaction:",e);let r=new sX(this.Ss.next());return this.referenceDelegate.ks(),n(r).next(e=>this.referenceDelegate.Ms(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Os(e,t){return rf.or(Object.values(this.Vs).map(n=>()=>n.containsKey(e,t)))}}class sX extends rc{constructor(e){super(),this.currentSequenceNumber=e}}class sY{constructor(e){this.persistence=e,this.Fs=new sH,this.$s=null}static Bs(e){return new sY(e)}get Ls(){if(this.$s)return this.$s;throw nX()}addReference(e,t,n){return this.Fs.addReference(n,t),this.Ls.delete(n.toString()),rf.resolve()}removeReference(e,t,n){return this.Fs.removeReference(n,t),this.Ls.add(n.toString()),rf.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),rf.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach(e=>this.Ls.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Ls.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}ks(){this.$s=new Set}Ms(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return rf.forEach(this.Ls,n=>{let r=ro.fromPath(n);return this.Us(e,r).next(e=>{e||t.removeEntry(r,rn.min())})}).next(()=>(this.$s=null,t.apply(e)))}updateLimboDocument(e,t){return this.Us(e,t).next(e=>{e?this.Ls.delete(t.toString()):this.Ls.add(t.toString())})}xs(e){return 0}Us(e,t){return rf.or([()=>rf.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Os(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sJ{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Si=n,this.Di=r}static Ci(e,t){let n=se(),r=se();for(let i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new sJ(e,t.fromCache,n,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sZ{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.ki(e,t).next(i=>i||this.Mi(e,t,r,n)).next(n=>n||this.Oi(e,t))}ki(e,t){if(ic(t))return rf.resolve(null);let n=ip(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(t=ig(t,null,"F"),n=ip(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{let i=se(...r);return this.Ni.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.Fi(t,r);return this.$i(t,s,i,n.readTime)?this.ki(e,ig(t,null,"F")):this.Bi(e,s,t,n)}))})))}Mi(e,t,n,r){return ic(t)||r.isEqual(rn.min())?this.Oi(e,t):this.Ni.getDocuments(e,n).next(i=>{let s=this.Fi(t,i);return this.$i(t,s,n,r)?this.Oi(e,t):(nK()<=p.in.DEBUG&&n$("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),iv(t)),this.Bi(e,s,t,function(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=rn.fromTimestamp(1e9===r?new rt(n+1,0):new rt(n,r));return new ru(i,ro.empty(),-1)}(r,-1)))})}Fi(e,t){let n=new rT(iI(e));return t.forEach((t,r)=>{iw(e,r)&&(n=n.add(r))}),n}$i(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(e,t){return nK()<=p.in.DEBUG&&n$("QueryEngine","Using full collection scan to execute query:",iv(t)),this.Ni.getDocumentsMatchingQuery(e,t,ru.min())}Bi(e,t,n,r){return this.Ni.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class s0{constructor(e,t,n,r){this.persistence=e,this.Li=t,this.It=r,this.Ui=new rw(n7),this.qi=new i0(e=>r1(e),r2),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(n)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sj(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ui))}}async function s1(e,t){var n;return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(i=>(r=i,e.Qi(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let i=[],s=[],a=se();for(let o of r)for(let l of(i.push(o.batchId),o.mutations))a=a.add(l.key);for(let u of t)for(let h of(s.push(u.batchId),u.mutations))a=a.add(h.key);return e.localDocuments.getDocuments(n,a).next(e=>({ji:e,removedBatchIds:i,addedBatchIds:s}))})})}function s2(e){var t;return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Cs.getLastRemoteSnapshotVersion(t))}function s3(e,t){var n;return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}async function s4(e,t,n){var r;let i=e,s=i.Ui.get(t);try{n||await i.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",e=>i.persistence.referenceDelegate.removeTarget(e,s))}catch(a){if(!rp(a))throw a;n$("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}i.Ui=i.Ui.remove(t),i.qi.delete(s.target)}function s6(e,t,n){var r;let i=rn.min(),s=se();return e.persistence.runTransaction("Execute query","readonly",r=>(function(e,t,n){var r;let i=e.qi.get(n);return void 0!==i?rf.resolve(e.Ui.get(i)):e.Cs.getTargetData(t,n)})(e,r,ip(t)).next(t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,e.Cs.getMatchingKeysForTargetId(r,t.targetId).next(e=>{s=e})}).next(()=>e.Li.getDocumentsMatchingQuery(r,t,n?i:rn.min(),n?s:se())).next(n=>{var r,i,a,o;let l;return i=e,a=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),o=n,l=rn.min(),o.forEach((e,t)=>{t.readTime.compareTo(l)>0&&(l=t.readTime)}),i.Ki.set(a,l),{documents:n,Hi:s}}))}class s5{constructor(){this.activeTargetIds=st}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class s9{constructor(){this.Lr=new s5,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,t,n){this.Ur[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new s5,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class s8{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class s7{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){for(let e of(n$("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.Wr))e(0)}jr(){for(let e of(n$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.Wr))e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let ae={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class at{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class an extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,t,n,r,i){let s=this.ao(e,t);n$("RestConnection","Sending: ",s,n);let a={};return this.ho(a,r,i),this.lo(e,s,a,n).then(e=>(n$("RestConnection","Received: ",e),e),t=>{throw nW("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t})}fo(e,t,n,r,i,s){return this.co(e,t,n,r,i)}ho(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+nH,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}ao(e,t){let n=ae[e];return`${this.oo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,t,n,r){return new Promise((i,s)=>{let a=new nj;a.listenOnce(nM.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case nP.NO_ERROR:let t=a.getResponseJson();n$("Connection","XHR received:",JSON.stringify(t)),i(t);break;case nP.TIMEOUT:n$("Connection",'RPC "'+e+'" timed out'),s(new nJ(nY.DEADLINE_EXCEEDED,"Request time out"));break;case nP.HTTP_ERROR:let n=a.getStatus();if(n$("Connection",'RPC "'+e+'" failed with status:',n,"response text:",a.getResponseText()),n>0){let r=a.getResponseJson().error;if(r&&r.status&&r.message){let o=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(nY).indexOf(t)>=0?t:nY.UNKNOWN}(r.status);s(new nJ(o,r.message))}else s(new nJ(nY.UNKNOWN,"Server responded with status "+a.getStatus()))}else s(new nJ(nY.UNAVAILABLE,"Connection failed."));break;default:nX()}}finally{n$("Connection",'RPC "'+e+'" completed.')}});let o=JSON.stringify(r);a.send(t,"POST",o,n,15)})}_o(e,t,n){let r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=nO(),s=nL(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new nV({})),this.ho(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;let o=r.join("");n$("Connection","Creating WebChannel: "+o,a);let l=i.createWebChannel(o,a),h=!1,c=!1,d=new at({Hr(e){c?n$("Connection","Not sending because WebChannel is closed:",e):(h||(n$("Connection","Opening WebChannel transport."),l.open(),h=!0),n$("Connection","WebChannel sending:",e),l.send(e))},Jr:()=>l.close()}),f=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(t){setTimeout(()=>{throw t},0)}})};return f(l,nF.EventType.OPEN,()=>{c||n$("Connection","WebChannel transport opened.")}),f(l,nF.EventType.CLOSE,()=>{c||(c=!0,n$("Connection","WebChannel transport closed"),d.io())}),f(l,nF.EventType.ERROR,e=>{c||(c=!0,nW("Connection","WebChannel transport errored:",e),d.io(new nJ(nY.UNAVAILABLE,"The operation could not be completed")))}),f(l,nF.EventType.MESSAGE,e=>{var t,n;if(!c){let r=e.data[0];(n=!!r)||nX();let i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){n$("Connection","WebChannel received error:",i);let s=i.status,a=function(e){let t=u[e];if(void 0!==t)return iZ(t)}(s),o=i.message;void 0===a&&(a=nY.INTERNAL,o="Unknown error status: "+s+" with message "+i.message),c=!0,d.io(new nJ(a,o)),l.close()}else n$("Connection","WebChannel received:",r),d.ro(r)}}),f(s,nx.STAT_EVENT,e=>{e.stat===nU.PROXY?n$("Connection","Detected buffering proxy"):e.stat===nU.NOPROXY&&n$("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function ar(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ai(e){return new sf(e,!0)}class as{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=t,this.wo=n,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();let t=Math.floor(this.po+this.Ro()),n=Math.max(0,Date.now()-this.To),r=Math.max(0,t-n);r>0&&n$("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}cancel(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aa{constructor(e,t,n,r,i,s,a,o){this.Hs=e,this.Po=n,this.vo=r,this.Vo=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new as(e,t)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,4!==e?this.xo.reset():t&&t.code===nY.RESOURCE_EXHAUSTED?(nG(t.toString()),nG("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):t&&t.code===nY.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;let e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.So===t&&this.Go(e,n)},t=>{e(()=>{let e=new nJ(nY.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Qo(e)})})}Go(e,t){let n=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr(()=>{n(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(e=>{n(()=>this.Qo(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}Mo(){this.state=5,this.xo.Ao(async()=>{this.state=0,this.start()})}Qo(e){return n$("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget(()=>this.So===e?t():(n$("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ao extends aa{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.It=i}jo(e,t){return this.Vo._o("Listen",e,t)}onMessage(e){this.xo.reset();let t=function(e,t){let n;if("targetChange"in t){var r,i,s,a;t.targetChange;let o="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:nX(),l=t.targetChange.targetIds||[],u=(s=t.targetChange.resumeToken,e.gt?(void 0===s||"string"==typeof s||nX(),rS.fromBase64String(s||"")):(void 0===s||s instanceof Uint8Array||nX(),rS.fromUint8Array(s||new Uint8Array))),h=t.targetChange.cause,c=h&&function(e){let t=void 0===e.code?nY.UNKNOWN:iZ(e.code);return new nJ(t,e.message||"")}(h);n=new sa(o,l,u,c||null)}else if("documentChange"in t){t.documentChange;let d=t.documentChange;d.document,d.document.name,d.document.updateTime;let f=sI(e,d.document.name),p=sm(d.document.updateTime),g=new rX({mapValue:{fields:d.document.fields}}),m=rJ.newFoundDocument(f,p,g),y=d.targetIds||[],v=d.removedTargetIds||[];n=new si(y,v,m.key,m)}else if("documentDelete"in t){t.documentDelete;let w=t.documentDelete;w.document;let I=sI(e,w.document),E=w.readTime?sm(w.readTime):rn.min(),T=rJ.newNoDocument(I,E),b=w.removedTargetIds||[];n=new si([],b,T.key,T)}else if("documentRemove"in t){t.documentRemove;let _=t.documentRemove;_.document;let S=sI(e,_.document),C=_.removedTargetIds||[];n=new si([],C,S,null)}else{if(!("filter"in t))return nX();{t.filter;let k=t.filter;k.targetId;let A=k.count||0,N=new iJ(A),D=k.targetId;n=new ss(D,N)}}return n}(this.It,e),n=function(e){if(!("targetChange"in e))return rn.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?rn.min():t.readTime?sm(t.readTime):rn.min()}(e);return this.listener.Wo(t,n)}zo(e){let t={};t.database=sT(this.It),t.addTarget=function(e,t){var n,r;let i,s=t.target;return(i=r3(s)?{documents:{documents:[sE(e,s.path)]}}:{query:function(e,t){var n,r,i,s;let a={structuredQuery:{}},o=t.path;null!==t.collectionGroup?(a.parent=sE(e,o),a.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(a.parent=sE(e,o.popLast()),a.structuredQuery.from=[{collectionId:o.lastSegment()}]);let l=function(e){if(0===e.length)return;let t=e.map(e=>(function(e){var t;if("=="===e.op){if(r$(e.value))return{unaryFilter:{field:sS(e.field),op:"IS_NAN"}};if(rK(e.value))return{unaryFilter:{field:sS(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(r$(e.value))return{unaryFilter:{field:sS(e.field),op:"IS_NOT_NAN"}};if(rK(e.value))return{unaryFilter:{field:sS(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:sS(e.field),op:(t=e.op,sd[t]),value:e.value}}})(e));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);l&&(a.structuredQuery.where=l);let u=function(e){if(0!==e.length)return e.map(e=>{var t,n;return{field:sS(e.field),direction:(n=e.dir,sc[n])}})}(t.orderBy);u&&(a.structuredQuery.orderBy=u);let h=(i=t.limit,e.gt||rP(i)?i:{value:i});return null!==h&&(a.structuredQuery.limit=h),t.startAt&&(a.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(a.structuredQuery.endAt={before:!(s=t.endAt).inclusive,values:s.position}),a}(e,s)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0?i.resumeToken=sg(e,t.resumeToken):t.snapshotVersion.compareTo(rn.min())>0&&(i.readTime=sp(e,t.snapshotVersion.toTimestamp())),i}(this.It,e);let n=function(e,t){let n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return nX()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.It,e);n&&(t.labels=n),this.Bo(t)}Ho(e){let t={};t.database=sT(this.It),t.removeTarget=e,this.Bo(t)}}class al extends aa{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.It=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,t){return this.Vo._o("Write",e,t)}onMessage(e){var t,n,r,i;if(!e.streamToken&&nX(),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();let s=(n=e.writeResults,r=e.commitTime,n&&n.length>0?(void 0!==r||nX(),n.map(e=>{var t,n;let i;return n=r,(i=e.updateTime?sm(e.updateTime):sm(n)).isEqual(rn.min())&&(i=sm(n)),new ix(i,e.transformResults||[])})):[]),a=sm(e.commitTime);return this.listener.Zo(a,s)}return e.writeResults&&0!==e.writeResults.length&&nX(),this.Jo=!0,this.listener.tu()}eu(){let e={};e.database=sT(this.It),this.Bo(e)}Xo(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var n,r,i,s;let a;if(t instanceof iK)a={update:s_(e,t.key,t.value)};else if(t instanceof iX)a={delete:sw(e,t.key)};else if(t instanceof i$)a={update:s_(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof iY))return nX();a={verify:sw(e,t.key)}}return t.fieldTransforms.length>0&&(a.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof iA)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof iN)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof iR)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof iL)return{fieldPath:t.field.canonicalString(),increment:n.yt};throw nX()})(0,e))),t.precondition.isNone||(a.currentDocument=void 0!==(r=t.precondition).updateTime?{updateTime:sp(e,(s=r.updateTime).toTimestamp())}:void 0!==r.exists?{exists:r.exists}:nX()),a})(this.It,e))};this.Bo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class au extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.Vo=n,this.It=r,this.nu=!1}su(){if(this.nu)throw new nJ(nY.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,t,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.Vo.co(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===nY.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new nJ(nY.UNKNOWN,e.toString())})}fo(e,t,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.Vo.fo(e,t,n,i,s,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===nY.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new nJ(nY.UNKNOWN,e.toString())})}terminate(){this.nu=!0}}class ah{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,"Online"===e&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(nG(t),this.ou=!1):n$("OnlineStateTracker",t)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ac{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr(e=>{n.enqueueAndForget(async()=>{aI(this)&&(n$("RemoteStore","Restarting streams for network reachability change."),await async function(e){var t;e._u.add(4),await af(e),e.gu.set("Unknown"),e._u.delete(4),await ad(e)}(this))})}),this.gu=new ah(n,r)}}async function ad(e){if(aI(e))for(let t of e.wu)await t(!0)}async function af(e){for(let t of e.wu)await t(!1)}function ap(e,t){var n;e.du.has(t.targetId)||(e.du.set(t.targetId,t),aw(e)?av(e):aV(e).ko()&&am(e,t))}function ag(e,t){var n;let r=aV(e);e.du.delete(t),r.ko()&&ay(e,t),0===e.du.size&&(r.ko()?r.Fo():aI(e)&&e.gu.set("Unknown"))}function am(e,t){e.yu.Ot(t.targetId),aV(e).zo(t)}function ay(e,t){e.yu.Ot(t),aV(e).Ho(t)}function av(e){e.yu=new sl({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),se:t=>e.du.get(t)||null}),aV(e).start(),e.gu.uu()}function aw(e){return aI(e)&&!aV(e).No()&&e.du.size>0}function aI(e){var t;return 0===e._u.size}function aE(e){e.yu=void 0}async function aT(e){e.du.forEach((t,n)=>{am(e,t)})}async function ab(e,t){aE(e),aw(e)?(e.gu.hu(t),av(e)):e.gu.set("Unknown")}async function a_(e,t,n){if(e.gu.set("Online"),t instanceof sa&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let r of t.targetIds)e.du.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.du.delete(r),e.yu.removeTarget(r))}(e,t)}catch(r){n$("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await aS(e,r)}else if(t instanceof si?e.yu.Gt(t):t instanceof ss?e.yu.Yt(t):e.yu.Wt(t),!n.isEqual(rn.min()))try{let i=await s2(e.localStore);n.compareTo(i)>=0&&await function(e,t){let n=e.yu.te(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let i=e.du.get(r);i&&e.du.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach(t=>{let n=e.du.get(t);if(!n)return;e.du.set(t,n.withResumeToken(rS.EMPTY_BYTE_STRING,n.snapshotVersion)),ay(e,t);let r=new sR(n.target,t,1,n.sequenceNumber);am(e,r)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(s){n$("RemoteStore","Failed to raise snapshot:",s),await aS(e,s)}}async function aS(e,t,n){if(!rp(t))throw t;e._u.add(1),await af(e),e.gu.set("Offline"),n||(n=()=>s2(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{n$("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await ad(e)})}function aC(e,t){return t().catch(n=>aS(e,n,t))}async function ak(e){var t;let n=aF(e),r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;aA(e);)try{let i=await s3(e.localStore,r);if(null===i){0===e.fu.length&&n.Fo();break}r=i.batchId,aN(e,i)}catch(s){await aS(e,s)}aD(e)&&aR(e)}function aA(e){return aI(e)&&e.fu.length<10}function aN(e,t){e.fu.push(t);let n=aF(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function aD(e){return aI(e)&&!aF(e).No()&&e.fu.length>0}function aR(e){aF(e).start()}async function aO(e){aF(e).eu()}async function aL(e){let t=aF(e);for(let n of e.fu)t.Xo(n.mutations)}async function aP(e,t,n){let r=e.fu.shift(),i=sN.from(r,t,n);await aC(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await ak(e)}async function aM(e,t){t&&aF(e).Yo&&await async function(e,t){var n;if(function(e){switch(e){default:return nX();case nY.CANCELLED:case nY.UNKNOWN:case nY.DEADLINE_EXCEEDED:case nY.RESOURCE_EXHAUSTED:case nY.INTERNAL:case nY.UNAVAILABLE:case nY.UNAUTHENTICATED:return!1;case nY.INVALID_ARGUMENT:case nY.NOT_FOUND:case nY.ALREADY_EXISTS:case nY.PERMISSION_DENIED:case nY.FAILED_PRECONDITION:case nY.ABORTED:case nY.OUT_OF_RANGE:case nY.UNIMPLEMENTED:case nY.DATA_LOSS:return!0}}(n=t.code)&&n!==nY.ABORTED){let r=e.fu.shift();aF(e).Oo(),await aC(e,()=>e.remoteSyncer.rejectFailedWrite(r.batchId,t)),await ak(e)}}(e,t),aD(e)&&aR(e)}async function ax(e,t){var n;e.asyncQueue.verifyOperationInProgress(),n$("RemoteStore","RemoteStore received new credentials");let r=aI(e);e._u.add(3),await af(e),r&&e.gu.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e._u.delete(3),await ad(e)}async function aU(e,t){var n;t?(e._u.delete(2),await ad(e)):t||(e._u.add(2),await af(e),e.gu.set("Unknown"))}function aV(e){return e.pu||(e.pu=function(e,t,n){var r;return e.su(),new ao(t,e.Vo,e.authCredentials,e.appCheckCredentials,e.It,n)}(e.datastore,e.asyncQueue,{Yr:aT.bind(null,e),Zr:ab.bind(null,e),Wo:a_.bind(null,e)}),e.wu.push(async t=>{t?(e.pu.Oo(),aw(e)?av(e):e.gu.set("Unknown")):(await e.pu.stop(),aE(e))})),e.pu}function aF(e){return e.Iu||(e.Iu=function(e,t,n){var r;return e.su(),new al(t,e.Vo,e.authCredentials,e.appCheckCredentials,e.It,n)}(e.datastore,e.asyncQueue,{Yr:aO.bind(null,e),Zr:aM.bind(null,e),tu:aL.bind(null,e),Zo:aP.bind(null,e)}),e.wu.push(async t=>{t?(e.Iu.Oo(),await ak(e)):(await e.Iu.stop(),e.fu.length>0&&(n$("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))})),e.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aj{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new nZ,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,r,i){let s=Date.now()+n,a=new aj(e,t,s,r,i);return a.start(n),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new nJ(nY.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function aB(e,t){if(nG("AsyncQueue",`${t}: ${e}`),rp(e))return new nJ(nY.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aq{constructor(e){this.comparator=e?(t,n)=>e(t,n)||ro.comparator(t.key,n.key):(e,t)=>ro.comparator(e.key,t.key),this.keyedMap=i3(),this.sortedSet=new rw(this.comparator)}static emptySet(e){return new aq(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof aq)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let r=t.getNext().key,i=n.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new aq;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aH{constructor(){this.Tu=new rw(ro.comparator)}track(e){let t=e.doc.key,n=this.Tu.get(t);n?0!==e.type&&3===n.type?this.Tu=this.Tu.insert(t,e):3===e.type&&1!==n.type?this.Tu=this.Tu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Tu=this.Tu.remove(t):1===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):nX():this.Tu=this.Tu.insert(t,e)}Eu(){let e=[];return this.Tu.inorderTraversal((t,n)=>{e.push(n)}),e}}class az{constructor(e,t,n,r,i,s,a,o){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o}static fromInitialDocuments(e,t,n,r){let i=[];return t.forEach(e=>{i.push({type:0,doc:e})}),new az(e,t,aq.emptySet(t),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&im(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aK{constructor(){this.Au=void 0,this.listeners=[]}}class a${constructor(){this.queries=new i0(e=>iy(e),im),this.onlineState="Unknown",this.Ru=new Set}}async function aG(e,t){var n;let r=t.query,i=!1,s=e.queries.get(r);if(s||(i=!0,s=new aK),i)try{s.Au=await e.onListen(r)}catch(o){let a=aB(o,`Initialization of query '${iv(t.query)}' failed`);return void t.onError(a)}e.queries.set(r,s),s.listeners.push(t),t.bu(e.onlineState),s.Au&&t.Pu(s.Au)&&aY(e)}async function aW(e,t){var n;let r=t.query,i=!1,s=e.queries.get(r);if(s){let a=s.listeners.indexOf(t);a>=0&&(s.listeners.splice(a,1),i=0===s.listeners.length)}if(i)return e.queries.delete(r),e.onUnlisten(r)}function aQ(e,t){var n;let r=!1;for(let i of t){let s=i.query,a=e.queries.get(s);if(a){for(let o of a.listeners)o.Pu(i)&&(r=!0);a.Au=i}}r&&aY(e)}function aX(e,t,n){var r;let i=e.queries.get(t);if(i)for(let s of i.listeners)s.onError(n);e.queries.delete(t)}function aY(e){e.Ru.forEach(e=>{e.next()})}class aJ{constructor(e,t,n){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new az(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let r=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),r=!0):this.Cu(e,this.onlineState)&&(this.xu(e),r=!0),this.Su=e,r}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){return!e.fromCache||(!this.options.Nu||!("Offline"!==t))&&(!e.docs.isEmpty()||"Offline"===t)}Du(e){if(e.docChanges.length>0)return!0;let t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}xu(e){e=az.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aZ{constructor(e){this.key=e}}class a0{constructor(e){this.key=e}}class a1{constructor(e,t){this.query=e,this.Lu=t,this.Uu=null,this.current=!1,this.qu=se(),this.mutatedKeys=se(),this.Ku=iI(e),this.Gu=new aq(this.Ku)}get Qu(){return this.Lu}ju(e,t){let n=t?t.Wu:new aH,r=t?t.Gu:this.Gu,i=t?t.mutatedKeys:this.mutatedKeys,s=r,a=!1,o="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{let u=r.get(e),h=iw(this.query,t)?t:null,c=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations),f=!1;u&&h?u.data.isEqual(h.data)?c!==d&&(n.track({type:3,doc:h}),f=!0):this.zu(u,h)||(n.track({type:2,doc:h}),f=!0,(o&&this.Ku(h,o)>0||l&&0>this.Ku(h,l))&&(a=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(h?(s=s.add(h),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let u="F"===this.query.limitType?s.last():s.first();s=s.delete(u.key),i=i.delete(u.key),n.track({type:1,doc:u})}return{Gu:s,Wu:n,$i:a,mutatedKeys:i}}zu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){let r=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;let i=e.Wu.Eu();i.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return nX()}};return n(e)-n(t)})(e.type,t.type)||this.Ku(e.doc,t.doc)),this.Hu(n);let s=t?this.Ju():[],a=0===this.qu.size&&this.current?1:0,o=a!==this.Uu;return(this.Uu=a,0!==i.length||o)?{snapshot:new az(this.query,e.Gu,r,i,e.mutatedKeys,0===a,o,!1),Yu:s}:{Yu:s}}bu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new aH,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(e=>this.Lu=this.Lu.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Lu=this.Lu.delete(e)),this.current=e.current)}Ju(){if(!this.current)return[];let e=this.qu;this.qu=se(),this.Gu.forEach(e=>{this.Xu(e.key)&&(this.qu=this.qu.add(e.key))});let t=[];return e.forEach(e=>{this.qu.has(e)||t.push(new a0(e))}),this.qu.forEach(n=>{e.has(n)||t.push(new aZ(n))}),t}Zu(e){this.Lu=e.Hi,this.qu=se();let t=this.ju(e.documents);return this.applyChanges(t,!0)}tc(){return az.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,0===this.Uu)}}class a2{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class a3{constructor(e){this.key=e,this.ec=!1}}class a4{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.nc={},this.sc=new i0(e=>iy(e),im),this.ic=new Map,this.rc=new Set,this.oc=new rw(ro.comparator),this.uc=new Map,this.cc=new sH,this.ac={},this.hc=new Map,this.lc=sU.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return!0===this.fc}}async function a6(e,t){let n=function(e){var t;let n=e;return n.remoteStore.remoteSyncer.applyRemoteEvent=a7.bind(null,n),n.remoteStore.remoteSyncer.getRemoteKeysForTarget=of.bind(null,n),n.remoteStore.remoteSyncer.rejectListen=ot.bind(null,n),n.nc.Wo=aQ.bind(null,n.eventManager),n.nc._c=aX.bind(null,n.eventManager),n}(e),r,i,s=n.sc.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.tc();else{let a=await function(e,t){var n;let r=e;return r.persistence.runTransaction("Allocate target","readwrite",e=>{let n;return r.Cs.getTargetData(e,t).next(i=>i?(n=i,rf.resolve(n)):r.Cs.allocateTargetId(e).next(i=>(n=new sR(t,i,0,e.currentSequenceNumber),r.Cs.addTargetData(e,n).next(()=>n))))}).then(e=>{let n=r.Ui.get(e.targetId);return(null===n||e.snapshotVersion.compareTo(n.snapshotVersion)>0)&&(r.Ui=r.Ui.insert(e.targetId,e),r.qi.set(t,e.targetId)),e})}(n.localStore,ip(t));n.isPrimaryClient&&ap(n.remoteStore,a);let o=n.sharedClientState.addLocalQueryTarget(a.targetId);i=await a5(n,t,r=a.targetId,"current"===o)}return i}async function a5(e,t,n,r){e.dc=(t,n,r)=>(async function(e,t,n,r){let i=t.view.ju(n);i.$i&&(i=await s6(e.localStore,t.query,!1).then(({documents:e})=>t.view.ju(e,i)));let s=r&&r.targetChanges.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s);return ol(e,t.targetId,a.Yu),a.snapshot})(e,t,n,r);let i=await s6(e.localStore,t,!0),s=new a1(t,i.Hi),a=s.ju(i.documents),o=sr.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),l=s.applyChanges(a,e.isPrimaryClient,o);ol(e,n,l.Yu);let u=new a2(t,n,s);return e.sc.set(t,u),e.ic.has(n)?e.ic.get(n).push(t):e.ic.set(n,[t]),l.snapshot}async function a9(e,t){var n;let r=e.sc.get(t),i=e.ic.get(r.targetId);if(i.length>1)return e.ic.set(r.targetId,i.filter(e=>!im(e,t))),void e.sc.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await s4(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),ag(e.remoteStore,r.targetId),oa(e,r.targetId)}).catch(rd)):(oa(e,r.targetId),await s4(e.localStore,r.targetId,!0))}async function a8(e,t,n){let r=function(e){var t;let n=e;return n.remoteStore.remoteSyncer.applySuccessfulWrite=on.bind(null,n),n.remoteStore.remoteSyncer.rejectFailedWrite=or.bind(null,n),n}(e);try{var i,s,a;let o=await function(e,t){var n;let r=rt.now(),i=t.reduce((e,t)=>e.add(t.key),se()),s,a;return e.persistence.runTransaction("Locally write mutations","readwrite",n=>{let o=i1,l=se();return e.Gi.getEntries(n,i).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(n,o)).next(i=>{s=i;let a=[];for(let o of t){let l=iH(o,s.get(o.key).overlayedDocument);null!=l&&a.push(new i$(o.key,l,rY(l.value.mapValue),iU.exists(!0)))}return e.mutationQueue.addMutationBatch(n,r,a,t)}).next(t=>{a=t;let r=t.applyToLocalDocumentSet(s,l);return e.documentOverlayCache.saveOverlays(n,t.batchId,r)})}).then(()=>({batchId:a.batchId,changes:i4(s)}))}(r.localStore,t),l;r.sharedClientState.addPendingMutation(o.batchId),i=r,s=o.batchId,(l=i.ac[i.currentUser.toKey()])||(l=new rw(n7)),l=l.insert(s,n),i.ac[i.currentUser.toKey()]=l,await oc(r,o.changes),await ak(r.remoteStore)}catch(h){let u=aB(h,"Failed to persist write");n.reject(u)}}async function a7(e,t){var n;try{let r=await function(e,t){var n;let r=e,i=t.snapshotVersion,s=r.Ui;return r.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{var n,a,o;let l=r.Gi.newChangeBuffer({trackRemovals:!0});s=r.Ui;let u=[];t.targetChanges.forEach((n,a)=>{var o,l,h;let c=s.get(a);if(!c)return;u.push(r.Cs.removeMatchingKeys(e,n.removedDocuments,a).next(()=>r.Cs.addMatchingKeys(e,n.addedDocuments,a)));let d=c.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?d=d.withResumeToken(rS.EMPTY_BYTE_STRING,rn.min()).withLastLimboFreeSnapshotVersion(rn.min()):n.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(n.resumeToken,i)),s=s.insert(a,d),l=d,(0===c.resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-c.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)&&u.push(r.Cs.updateTargetData(e,d))});let h=i1,c=se(),d,f;if(t.documentUpdates.forEach(n=>{t.resolvedLimboDocuments.has(n)&&u.push(r.persistence.referenceDelegate.updateLimboDocument(e,n))}),u.push((n=e,a=l,o=t.documentUpdates,d=se(),f=se(),o.forEach(e=>d=d.add(e)),a.getEntries(n,d).next(e=>{let t=i1;return o.forEach((n,r)=>{let i=e.get(n);r.isFoundDocument()!==i.isFoundDocument()&&(f=f.add(n)),r.isNoDocument()&&r.version.isEqual(rn.min())?(a.removeEntry(n,r.readTime),t=t.insert(n,r)):!i.isValidDocument()||r.version.compareTo(i.version)>0||0===r.version.compareTo(i.version)&&i.hasPendingWrites?(a.addEntry(r),t=t.insert(n,r)):n$("LocalStore","Ignoring outdated watch update for ",n,". Current version:",i.version," Watch version:",r.version)}),{Wi:t,zi:f}})).next(e=>{h=e.Wi,c=e.zi})),!i.isEqual(rn.min())){let p=r.Cs.getLastRemoteSnapshotVersion(e).next(t=>r.Cs.setTargetsMetadata(e,e.currentSequenceNumber,i));u.push(p)}return rf.waitFor(u).next(()=>l.apply(e)).next(()=>r.localDocuments.getLocalViewOfDocuments(e,h,c)).next(()=>h)}).then(e=>(r.Ui=s,e))}(e.localStore,t);t.targetChanges.forEach((t,n)=>{var r,i,s;let a=e.uc.get(n);a&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||nX(),t.addedDocuments.size>0?a.ec=!0:t.modifiedDocuments.size>0?(i=a.ec)||nX():t.removedDocuments.size>0&&(a.ec||nX(),a.ec=!1))}),await oc(e,r,t)}catch(i){await rd(i)}}function oe(e,t,n){var r;let i=e;if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){let s=[];i.sc.forEach((e,n)=>{let r=n.view.bu(t);r.snapshot&&s.push(r.snapshot)}),function(e,t){var n;let r=e;r.onlineState=t;let i=!1;r.queries.forEach((e,n)=>{for(let r of n.listeners)r.bu(t)&&(i=!0)}),i&&aY(r)}(i.eventManager,t),s.length&&i.nc.Wo(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function ot(e,t,n){var r;let i=e;i.sharedClientState.updateQueryState(t,"rejected",n);let s=i.uc.get(t),a=s&&s.key;if(a){let o=new rw(ro.comparator);o=o.insert(a,rJ.newNoDocument(a,rn.min()));let l=se().add(a),u=new sn(rn.min(),new Map,new rT(n7),o,l);await a7(i,u),i.oc=i.oc.remove(a),i.uc.delete(t),oh(i)}else await s4(i.localStore,t,!1).then(()=>oa(i,t,n)).catch(rd)}async function on(e,t){var n;let r=t.batch.batchId;try{let i=await function(e,t){var n;return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{let r=t.batch.keys(),i=e.Gi.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){let i=n.batch,s=i.keys(),a=rf.resolve();return s.forEach(e=>{a=a.next(()=>r.getEntry(t,e)).next(t=>{let s=n.docVersions.get(e);null!==s||nX(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(e,n,t,i).next(()=>i.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,r,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(e){let t=se();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>e.localDocuments.getDocuments(n,r))})}(e.localStore,t);os(e,r,null),oi(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await oc(e,i)}catch(s){await rd(s)}}async function or(e,t,n){var r;try{let i=await function(e,t){var n;return e.persistence.runTransaction("Reject batch","readwrite-primary",n=>{let r;return e.mutationQueue.lookupMutationBatch(n,t).next(t=>(null!==t||nX(),r=t.keys(),e.mutationQueue.removeMutationBatch(n,t))).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,r,t)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,r)).next(()=>e.localDocuments.getDocuments(n,r))})}(e.localStore,t);os(e,t,n),oi(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await oc(e,i)}catch(s){await rd(s)}}function oi(e,t){(e.hc.get(t)||[]).forEach(e=>{e.resolve()}),e.hc.delete(t)}function os(e,t,n){var r;let i=e,s=i.ac[i.currentUser.toKey()];if(s){let a=s.get(t);a&&(n?a.reject(n):a.resolve(),s=s.remove(t)),i.ac[i.currentUser.toKey()]=s}}function oa(e,t,n=null){for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e.ic.get(t)))e.sc.delete(r),n&&e.nc._c(r,n);e.ic.delete(t),e.isPrimaryClient&&e.cc.ls(t).forEach(t=>{e.cc.containsKey(t)||oo(e,t)})}function oo(e,t){e.rc.delete(t.path.canonicalString());let n=e.oc.get(t);null!==n&&(ag(e.remoteStore,n),e.oc=e.oc.remove(t),e.uc.delete(n),oh(e))}function ol(e,t,n){for(let r of n)r instanceof aZ?(e.cc.addReference(r.key,t),ou(e,r)):r instanceof a0?(n$("SyncEngine","Document no longer in limbo: "+r.key),e.cc.removeReference(r.key,t),e.cc.containsKey(r.key)||oo(e,r.key)):nX()}function ou(e,t){let n=t.key,r=n.path.canonicalString();e.oc.get(n)||e.rc.has(r)||(n$("SyncEngine","New document in limbo: "+n),e.rc.add(r),oh(e))}function oh(e){for(;e.rc.size>0&&e.oc.size<e.maxConcurrentLimboResolutions;){let t=e.rc.values().next().value;e.rc.delete(t);let n=new ro(ri.fromString(t)),r=e.lc.next();e.uc.set(r,new a3(n)),e.oc=e.oc.insert(n,r),ap(e.remoteStore,new sR(ip(ih(n.path)),r,2,rg.at))}}async function oc(e,t,n){var r;let i=[],s=[],a=[];e.sc.isEmpty()||(e.sc.forEach((r,o)=>{a.push(e.dc(o,t,n).then(t=>{if(t){e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,t.fromCache?"not-current":"current"),i.push(t);let n=sJ.Ci(o.targetId,t);s.push(n)}}))}),await Promise.all(a),e.nc.Wo(i),await async function(e,t){var n;let r=e;try{await r.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>rf.forEach(t,t=>rf.forEach(t.Si,n=>r.persistence.referenceDelegate.addReference(e,t.targetId,n)).next(()=>rf.forEach(t.Di,n=>r.persistence.referenceDelegate.removeReference(e,t.targetId,n)))))}catch(i){if(!rp(i))throw i;n$("LocalStore","Failed to update sequence numbers: "+i)}for(let s of t){let a=s.targetId;if(!s.fromCache){let o=r.Ui.get(a),l=o.snapshotVersion,u=o.withLastLimboFreeSnapshotVersion(l);r.Ui=r.Ui.insert(a,u)}}}(e.localStore,s))}async function od(e,t){var n,r,i;let s=e;if(!s.currentUser.isEqual(t)){n$("SyncEngine","User change. New user:",t.toKey());let a=await s1(s.localStore,t);s.currentUser=t,i="'waitForPendingWrites' promise is rejected due to a user change.",(r=s).hc.forEach(e=>{e.forEach(e=>{e.reject(new nJ(nY.CANCELLED,i))})}),r.hc.clear(),s.sharedClientState.handleUserChange(t,a.removedBatchIds,a.addedBatchIds),await oc(s,a.ji)}}function of(e,t){var n;let r=e.uc.get(t);if(r&&r.ec)return se().add(r.key);{let i=se(),s=e.ic.get(t);if(!s)return i;for(let a of s){let o=e.sc.get(a);i=i.unionWith(o.view.Qu)}return i}}class op{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=ai(e.databaseInfo.databaseId),this.sharedClientState=this.mc(e),this.persistence=this.gc(e),await this.persistence.start(),this.localStore=this.yc(e),this.gcScheduler=this.Ic(e,this.localStore),this.indexBackfillerScheduler=this.Tc(e,this.localStore)}Ic(e,t){return null}Tc(e,t){return null}yc(e){var t,n,r,i;return t=this.persistence,n=new sZ,r=e.initialUser,i=this.It,new s0(t,n,r,i)}gc(e){return new sQ(sY.Bs,this.It)}mc(e){return new s9}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class og{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>oe(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=od.bind(null,this.syncEngine),await aU(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new a$}createDatastore(e){var t,n,r,i,s;let a=ai(e.databaseInfo.databaseId),o=(t=e.databaseInfo,new an(t));return n=e.authCredentials,r=e.appCheckCredentials,new au(n,r,o,a)}createRemoteStore(e){var t,n,r,i,s;return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>oe(this.syncEngine,e,0),s=s7.C()?new s7:new s8,new ac(t,n,r,i,s)}createSyncEngine(e,t){return function(e,t,n,r,i,s,a){let o=new a4(e,t,n,r,i,s);return a&&(o.fc=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){var t;n$("RemoteStore","RemoteStore shutting down."),e._u.add(5),await af(e),e.mu.shutdown(),e.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class om{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ac(this.observer.next,e)}error(e){this.observer.error?this.Ac(this.observer.error,e):nG("Uncaught Error in snapshot listener:",e)}Rc(){this.muted=!0}Ac(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oy{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=nq.UNAUTHENTICATED,this.clientId=n8.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{n$("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(n$("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new nJ(nY.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new nZ;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=aB(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function ov(e,t){e.asyncQueue.verifyOperationInProgress(),n$("FirestoreClient","Initializing OfflineComponentProvider");let n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await s1(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function ow(e,t){e.asyncQueue.verifyOperationInProgress();let n=await oI(e);n$("FirestoreClient","Initializing OnlineComponentProvider");let r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(e=>ax(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>ax(t.remoteStore,n)),e.onlineComponents=t}async function oI(e){return e.offlineComponents||(n$("FirestoreClient","Using default OfflineComponentProvider"),await ov(e,new op)),e.offlineComponents}async function oE(e){return e.onlineComponents||(n$("FirestoreClient","Using default OnlineComponentProvider"),await ow(e,new og)),e.onlineComponents}async function oT(e){let t=await oE(e),n=t.eventManager;return n.onListen=a6.bind(null,t.syncEngine),n.onUnlisten=a9.bind(null,t.syncEngine),n}let ob=new Map;function o_(e){if(!ro.isDocumentKey(e))throw new nJ(nY.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function oS(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":nX()}function oC(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new nJ(nY.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=oS(e);throw new nJ(nY.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ok{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new nJ(nY.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new nJ(nY.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new nJ(nY.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oA{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ok({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new nJ(nY.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new nJ(nY.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ok(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new n1;switch(e.type){case"gapi":let t=e.client;return new n4(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new nJ(nY.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=ob.get(e);t&&(n$("ComponentProvider","Removing Datastore"),ob.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oN{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new oR(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new oN(this.firestore,e,this._key)}}class oD{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new oD(this.firestore,e,this._query)}}class oR extends oD{constructor(e,t,n){super(e,t,ih(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new oN(this.firestore,null,new ro(e))}withConverter(e){return new oR(this.firestore,e,this._path)}}function oO(e,t,...n){if(e=(0,g.m9)(e),1===arguments.length&&(t=n8.R()),/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e,t,n){if(!n)throw new nJ(nY.INVALID_ARGUMENT,`Function doc() cannot be called with an empty ${t}.`)}("doc","path",t),e instanceof oA){let r=ri.fromString(t,...n);return o_(r),new oN(e,null,new ro(r))}{if(!(e instanceof oN||e instanceof oR))throw new nJ(nY.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let i=e._path.child(ri.fromString(t,...n));return o_(i),new oN(e.firestore,e instanceof oR?e.converter:null,new ro(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oL{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new as(this,"async_queue_retry"),this.jc=()=>{let e=ar();e&&n$("AsyncQueue","Visibility state changed to "+e.visibilityState),this.xo.bo()};let e=ar();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Wc(),this.zc(e)}enterRestrictedMode(e){if(!this.Lc){this.Lc=!0,this.Gc=e||!1;let t=ar();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Wc(),this.Lc)return new Promise(()=>{});let t=new nZ;return this.zc(()=>this.Lc&&this.Gc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Bc.push(e),this.Hc()))}async Hc(){if(0!==this.Bc.length){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(e){if(!rp(e))throw e;n$("AsyncQueue","Operation failed with retryable error: "+e)}this.Bc.length>0&&this.xo.Ao(()=>this.Hc())}}zc(e){let t=this.$c.then(()=>(this.Kc=!0,e().catch(e=>{var t;this.qc=e,this.Kc=!1;let n,r=(n=e.message||"",e.stack&&(n=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),n);throw nG("INTERNAL UNHANDLED ERROR: ",r),e}).then(e=>(this.Kc=!1,e))));return this.$c=t,t}enqueueAfterDelay(e,t,n){this.Wc(),this.Qc.indexOf(e)>-1&&(t=0);let r=aj.createAndSchedule(this,e,t,n,e=>this.Jc(e));return this.Uc.push(r),r}Wc(){this.qc&&nX()}verifyOperationInProgress(){}async Yc(){let e;do await (e=this.$c);while(e!==this.$c)}Xc(e){for(let t of this.Uc)if(t.timerId===e)return!0;return!1}Zc(e){return this.Yc().then(()=>{for(let t of(this.Uc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.Uc))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Yc()})}ta(e){this.Qc.push(e)}Jc(e){let t=this.Uc.indexOf(e);this.Uc.splice(t,1)}}class oP extends oA{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new oL,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||oU(this),this._firestoreClient.terminate()}}function oM(e,t){let n="object"==typeof e?e:(0,d.Mq)();return(0,d.qX)(n,"firestore").getImmediate({identifier:"string"==typeof e?e:t||"(default)"})}function ox(e){return e._firestoreClient||oU(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function oU(e){var t,n,r,i,s;let a=e._freezeSettings(),o=(n=e._databaseId,r=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",i=e._persistenceKey,new rO(n,r,i,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));e._firestoreClient=new oy(e._authCredentials,e._appCheckCredentials,e._queue,o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oV{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new nJ(nY.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ra(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oF{constructor(e){this._byteString=e}static fromBase64String(e){try{return new oF(rS.fromBase64String(e))}catch(t){throw new nJ(nY.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new oF(rS.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oj{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oB{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new nJ(nY.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new nJ(nY.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return n7(this._lat,e._lat)||n7(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let oq=/^__.*__$/;class oH{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new i$(e,this.data,this.fieldMask,t,this.fieldTransforms):new iK(e,this.data,t,this.fieldTransforms)}}class oz{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new i$(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function oK(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw nX()}}class o${constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.It=n,this.ignoreUndefinedProperties=r,void 0===i&&this.ea(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get na(){return this.settings.na}sa(e){return new o$(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ia(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.sa({path:n,ra:!1});return r.oa(e),r}ua(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.sa({path:n,ra:!1});return r.ea(),r}ca(e){return this.sa({path:void 0,ra:!0})}aa(e){return o3(e,this.settings.methodName,this.settings.ha||!1,this.path,this.settings.la)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}ea(){if(this.path)for(let e=0;e<this.path.length;e++)this.oa(this.path.get(e))}oa(e){if(0===e.length)throw this.aa("Document fields must not be empty");if(oK(this.na)&&oq.test(e))throw this.aa('Document fields cannot begin and end with "__"')}}class oG{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.It=n||ai(e)}fa(e,t,n,r=!1){return new o$({na:e,methodName:t,la:n,path:ra.emptyPath(),ra:!1,ha:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function oW(e){let t=e._freezeSettings(),n=ai(e._databaseId);return new oG(e._databaseId,!!t.ignoreUndefinedProperties,n)}class oQ extends oj{_toFieldTransform(e){if(2!==e.na)throw 1===e.na?e.aa(`${this._methodName}() can only appear at the top level of your update data`):e.aa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof oQ}}function oX(e,t){if(oJ(e=(0,g.m9)(e)))return oZ("Unsupported field value:",t,e),oY(e,t);if(e instanceof oj)return function(e,t){if(!oK(t.na))throw t.aa(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.aa(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ra&&4!==t.na)throw t.aa("Nested arrays are not supported");return function(e,t){let n=[],r=0;for(let i of e){let s=oX(i,t.ca(r));null==s&&(s={nullValue:"NULL_VALUE"}),n.push(s),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,g.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e){var n,r,i;return n=t.It,"number"==typeof(r=e)&&Number.isInteger(r)&&!rM(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER?ib(r):iT(n,r)}if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let s=rt.fromDate(e);return{timestampValue:sp(t.It,s)}}if(e instanceof rt){let a=new rt(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:sp(t.It,a)}}if(e instanceof oB)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof oF)return{bytesValue:sg(t.It,e._byteString)};if(e instanceof oN){let o=t.databaseId,l=e.firestore._databaseId;if(!l.isEqual(o))throw t.aa(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:sy(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.aa(`Unsupported field value: ${oS(e)}`)}(e,t)}function oY(e,t){let n={};return rv(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ry(e,(e,r)=>{let i=oX(r,t.ia(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function oJ(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof rt||e instanceof oB||e instanceof oF||e instanceof oN||e instanceof oj)}function oZ(e,t,n){var r;if(!oJ(n)||"object"!=typeof n||null===n||Object.getPrototypeOf(n)!==Object.prototype&&null!==Object.getPrototypeOf(n)){let i=oS(n);throw"an object"===i?t.aa(e+" a custom object"):t.aa(e+" "+i)}}function o0(e,t,n){if((t=(0,g.m9)(t))instanceof oV)return t._internalPath;if("string"==typeof t)return o2(e,t);throw o3("Field path arguments must be of type string or ",e,!1,void 0,n)}let o1=RegExp("[~\\*/\\[\\]]");function o2(e,t,n){if(t.search(o1)>=0)throw o3(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new oV(...t.split("."))._internalPath}catch(r){throw o3(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function o3(e,t,n,r,i){let s=r&&!r.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new nJ(nY.INVALID_ARGUMENT,o+e+l)}function o4(e,t){return e.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class o6{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new oN(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new o5(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(o9("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class o5 extends o6{data(){return super.data()}}function o9(e,t){return"string"==typeof t?o2(e,t):t instanceof oV?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class o8{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class o7 extends o6{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new le(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(o9("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class le extends o7{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class lt{convertValue(e,t="none"){switch(rU(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rA(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(rN(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw nX()}}convertObject(e,t){let n={};return ry(e.fields,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new oB(rA(e.latitude),rA(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=function e(t){let n=t.mapValue.fields.__previous_value__;return rD(n)?e(n):n}(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(rR(e));default:return null}}convertTimestamp(e){let t=rk(e);return new rt(t.seconds,t.nanos)}convertDocumentKey(e,t){var n;let r=ri.fromString(e);(n=sk(r))||nX();let i=new rL(r.get(1),r.get(3)),s=new ro(r.popFirst(5));return i.isEqual(t)||nG(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ln(e){e=oC(e,oN);let t=oC(e.firestore,oP);return(function(e,t,n={}){let r=new nZ;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new om({next(s){t.enqueueAndForget(()=>aW(e,a));let o=s.docs.has(n);!o&&s.fromCache?i.reject(new nJ(nY.UNAVAILABLE,"Failed to get document because the client is offline.")):o&&s.fromCache&&r&&"server"===r.source?i.reject(new nJ(nY.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),a=new aJ(ih(n.path),s,{includeMetadataChanges:!0,Nu:!0});return aG(e,a)})(await oT(e),e.asyncQueue,t,n,r)),r.promise})(ox(t),e._key).then(n=>(function(e,t,n){let r=n.docs.get(t._key),i=new lr(e);return new o7(e,i,t._key,r,new o8(n.hasPendingWrites,n.fromCache),t.converter)})(t,e,n))}class lr extends lt{constructor(e){super(),this.firestore=e}convertBytes(e){return new oF(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new oN(this.firestore,null,t)}}function li(e,t,n){var r,i,s;e=oC(e,oN);let a=oC(e.firestore,oP),o=(r=e.converter)?n&&(n.merge||n.mergeFields)?r.toFirestore(t,n):r.toFirestore(t):t;return la(a,[(function(e,t,n,r,i,s={}){let a=e.fa(s.merge||s.mergeFields?2:0,t,n,i);oZ("Data must be an object, but it was:",a,r);let o=oY(r,a),l,u;if(s.merge)l=new r_(a.fieldMask),u=a.fieldTransforms;else if(s.mergeFields){let h=[];for(let c of s.mergeFields){let d=o0(t,c,n);if(!a.contains(d))throw new nJ(nY.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);o4(h,d)||h.push(d)}l=new r_(h),u=a.fieldTransforms.filter(e=>l.covers(e.field))}else l=null,u=a.fieldTransforms;return new oH(new rX(o),l,u)})(oW(a),"setDoc",e._key,o,null!==e.converter,n).toMutation(e._key,iU.none())])}function ls(e,t,n,...r){e=oC(e,oN);let i=oC(e.firestore,oP),s=oW(i),a;return a="string"==typeof(t=(0,g.m9)(t))||t instanceof oV?function(e,t,n,r,i,s){let a=e.fa(1,t,n),o=[o0(t,r,n)],l=[i];if(s.length%2!=0)throw new nJ(nY.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let u=0;u<s.length;u+=2)o.push(o0(t,s[u])),l.push(s[u+1]);let h=[],c=rX.empty();for(let d=o.length-1;d>=0;--d)if(!o4(h,o[d])){let f=o[d],p=l[d];p=(0,g.m9)(p);let m=a.ua(f);if(p instanceof oQ)h.push(f);else{let y=oX(p,m);null!=y&&(h.push(f),c.set(f,y))}}let v=new r_(h);return new oz(c,v,a.fieldTransforms)}(s,"updateDoc",e._key,t,n,r):function(e,t,n,r){let i=e.fa(1,t,n);oZ("Data must be an object, but it was:",i,r);let s=[],a=rX.empty();ry(r,(e,r)=>{let o=o2(t,e,n);r=(0,g.m9)(r);let l=i.ua(o);if(r instanceof oQ)s.push(o);else{let u=oX(r,l);null!=u&&(s.push(o),a.set(o,u))}});let o=new r_(s);return new oz(a,o,i.fieldTransforms)}(s,"updateDoc",e._key,t),la(i,[a.toMutation(e._key,iU.exists(!0))])}function la(e,t){return function(e,t){let n=new nZ;return e.asyncQueue.enqueueAndForget(async()=>{var r;return a8(await oE(e).then(e=>e.syncEngine),t,n)}),n.promise}(ox(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function lo(){return new oQ("deleteField")}!function(e,t=!0){var n;nH=d.Jn,(0,d.Xd)(new f.wA("firestore",(e,{instanceIdentifier:n,options:r})=>{let i=e.getProvider("app").getImmediate(),s=new oP(new n2(e.getProvider("auth-internal")),new n5(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new nJ(nY.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new rL(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),(0,d.KN)(nB,"3.5.0",void 0),(0,d.KN)(nB,"3.5.0","esm2017")}()},3454:function(e,t,n){"use strict";var r,i;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(i=n.g.process)?void 0:i.env)?n.g.process:n(7663)},1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8510)}])},9531:function(e,t,n){"use strict";n.d(t,{H:function(){return c},a:function(){return h}});var r=n(7568),i=n(655),s=n(5893),a=n(7294),o=n(8153),l=n(7015),u=a.createContext();function h(){return(0,a.useContext)(u)}function c(e){var t=e.children,n=function(e,t){return(0,l.Xb)(o.I,e,t)},h=function(e,t){return(0,l.e5)(o.I,e,t)},c=function(){return(0,l.w7)(o.I)},d=(0,a.useState)(null),f=d[0],p=d[1],g=(0,a.useState)(!0),m=g[0],y=g[1],v=(0,a.useRef)();return(0,a.useEffect)(function(){var e;return(0,l.Aj)(o.I,(e=(0,r.Z)(function(e){return(0,i.__generator)(this,function(t){return p(e),y(!1),[2]})}),function(t){return e.apply(this,arguments)}))},[]),(0,s.jsx)(u.Provider,{value:{currentUser:f,login:h,signup:n,logout:c,userInfo:v},children:!m&&t})}},8153:function(e,t,n){"use strict";n.d(t,{I:function(){return o},db:function(){return l}});var r=n(5816);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ (0,r.KN)("firebase","9.10.0","app");var i=n(7015),s=n(5321),a=(0,r.ZF)({apiKey:"AIzaSyDRWec4dt19RrUBvsnxpyXIyhw7h56iJG4",authDomain:"flash-cards-b1b45.firebaseapp.com",projectId:"flash-cards-b1b45",storageBucket:"flash-cards-b1b45.appspot.com",messagingSenderId:"240660441163",appId:"1:240660441163:web:06f24a367a22af0f16c5ce",measurementId:"G-STGZKYWJTE"}),o=(0,i.v0)(a),l=(0,s.ad)(a)},8510:function(e,t,n){"use strict";n.r(t);var r=n(6042),i=n(5893),s=n(9531);n(906),t.default=function(e){var t=e.Component,n=e.pageProps;return(0,i.jsx)(s.H,{children:(0,i.jsx)(t,(0,r.Z)({},n))})}},906:function(){},7663:function(e){!function(){var t={229:function(e){var t,n,r,i=e.exports={};function s(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function o(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(r){n=a}}();var l=[],u=!1,h=-1;function c(){u&&r&&(u=!1,r.length?l=r.concat(l):h=-1,l.length&&d())}function d(){if(!u){var e=o(c);u=!0;for(var t=l.length;t;){for(r=l,l=[];++h<t;)r&&r[h].run();h=-1,t=l.length}r=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(r){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new f(e,t)),1!==l.length||u||o(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var s=n[e]={exports:{}},a=!0;try{t[e](s,s.exports,r),a=!1}finally{a&&delete n[e]}return s.exports}r.ab="//";var i=r(229);e.exports=i}()},5816:function(e,t,n){"use strict";n.d(t,{Jn:function(){return M},qX:function(){return O},Xd:function(){return R},Mq:function(){return U},ZF:function(){return x},KN:function(){return V}});var r,i=n(8463),s=n(3333),a=n(4444);let o=(e,t)=>t.some(t=>e instanceof t),l,u,h=new WeakMap,c=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,g={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return c.get(e);if("objectStoreNames"===t)return e.objectStoreNames||d.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return m(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function m(e){if(e instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(m(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&h.set(t,e)}).catch(()=>{}),p.set(t,e),t}(e);if(f.has(e))return f.get(e);let t=function(e){if("function"==typeof e){var t;return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(u||(u=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey,])).includes(e)?function(...t){return e.apply(y(this),t),m(h.get(this))}:function(...t){return m(e.apply(y(this),t))}:function(t,...n){let r=e.call(y(this),t,...n);return d.set(r,t.sort?t.sort():[t]),m(r)}}return(e instanceof IDBTransaction&&function(e){if(c.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});c.set(e,t)}(e),o(e,l||(l=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction,])))?new Proxy(e,g):e}(e);return t!==e&&(f.set(e,t),p.set(t,e)),t}let y=e=>p.get(e),v=["get","getKey","getAll","getAllKeys","count"],w=["put","add","delete","clear"],I=new Map;function E(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(I.get(t))return I.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,i=w.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||v.includes(n)))return;let s=async function(e,...t){let s=this.transaction(e,i?"readwrite":"readonly"),a=s.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),i&&s.done,]))[0]};return I.set(t,s),s}g=(r=e=>({...e,get:(t,n,r)=>E(t,n)||e.get(t,n,r),has:(t,n)=>!!E(t,n)||e.has(t,n)}))(g);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class T{constructor(e){this.container=e}getPlatformInfoString(){let e=this.container.getProviders();return e.map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let b="@firebase/app",_="0.7.33",S=new s.Yd("@firebase/app"),C="[DEFAULT]",k={[b]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},A=new Map,N=new Map;function D(e,t){try{e.container.addComponent(t)}catch(n){S.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function R(e){let t=e.name;if(N.has(t))return S.debug(`There were multiple attempts to register component ${t}.`),!1;for(let n of(N.set(t,e),A.values()))D(n,e);return!0}function O(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}let L=new a.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class P{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw L.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let M="9.10.0";function x(e,t={}){if("object"!=typeof t){let n=t;t={name:n}}let r=Object.assign({name:C,automaticDataCollectionEnabled:!1},t),s=r.name;if("string"!=typeof s||!s)throw L.create("bad-app-name",{appName:String(s)});let o=A.get(s);if(o){if((0,a.vZ)(e,o.options)&&(0,a.vZ)(r,o.config))return o;throw L.create("duplicate-app",{appName:s})}let l=new i.H0(s);for(let u of N.values())l.addComponent(u);let h=new P(e,r,l);return A.set(s,h),h}function U(e=C){let t=A.get(e);if(!t)throw L.create("no-app",{appName:e});return t}function V(e,t,n){var r;let s=null!==(r=k[e])&&void 0!==r?r:e;n&&(s+=`-${n}`);let a=s.match(/\s|\//),o=t.match(/\s|\//);if(a||o){let l=[`Unable to register library "${s}" with version "${t}":`];a&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&o&&l.push("and"),o&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),S.warn(l.join(" "));return}R(new i.wA(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}let F="firebase-heartbeat-store",j=null;function B(){return j||(j=(function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){let a=indexedDB.open(e,1),o=m(a);return r&&a.addEventListener("upgradeneeded",e=>{r(m(a.result),e.oldVersion,e.newVersion,m(a.transaction))}),n&&a.addEventListener("blocked",()=>n()),o.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",()=>i())}).catch(()=>{}),o})("firebase-heartbeat-database",1,{upgrade(e,t){0===t&&e.createObjectStore(F)}}).catch(e=>{throw L.create("idb-open",{originalErrorMessage:e.message})})),j}async function q(e){var t;try{let n=await B();return n.transaction(F).objectStore(F).get(z(e))}catch(i){if(i instanceof a.ZR)S.warn(i.message);else{let r=L.create("idb-get",{originalErrorMessage:null===(t=i)||void 0===t?void 0:t.message});S.warn(r.message)}}}async function H(e,t){var n;try{let r=await B(),i=r.transaction(F,"readwrite"),s=i.objectStore(F);return await s.put(t,z(e)),i.done}catch(l){if(l instanceof a.ZR)S.warn(l.message);else{let o=L.create("idb-set",{originalErrorMessage:null===(n=l)||void 0===n?void 0:n.message});S.warn(o.message)}}}function z(e){return`${e.name}!${e.options.appId}`}class K{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new G(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=$();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n))?void 0:(this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),n=Date.now();return n-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=$(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){let n=[],r=e.slice();for(let i of e){let s=n.find(e=>e.agent===i.agent);if(s){if(s.dates.push(i.date),W(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),W(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=(0,a.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function $(){let e=new Date;return e.toISOString().substring(0,10)}class G{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,a.hl)()&&(0,a.eu)().then(()=>!0).catch(()=>!1)}async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let t=await q(this.app);return t||{heartbeats:[]}}}async overwrite(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let r=await this.read();return H(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let r=await this.read();return H(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function W(e){return(0,a.L)(JSON.stringify({version:2,heartbeats:e})).length}R(new i.wA("platform-logger",e=>new T(e),"PRIVATE")),R(new i.wA("heartbeat",e=>new K(e),"PRIVATE")),V(b,_,""),V(b,_,"esm2017"),V("fire-js","")},8463:function(e,t,n){"use strict";n.d(t,{H0:function(){return o},wA:function(){return i}});var r=n(4444);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let s="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class a{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let n=new r.BH;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch(s){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){var t;if(t=e,"EAGER"===t.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:s})}catch(n){}for(let[r,i]of this.instancesDeferred.entries()){let a=this.normalizeInstanceIdentifier(r);try{let o=this.getOrInitializeService({instanceIdentifier:a});i.resolve(o)}catch(l){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[i,s]of this.instancesDeferred.entries()){let a=this.normalizeInstanceIdentifier(i);n===a&&s.resolve(r)}return r}onInit(e,t){var n;let r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);let s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let r of n)try{r(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){var n;let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:(n=e,n===s?void 0:n),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(i){}return r||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class o{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},3333:function(e,t,n){"use strict";var r,i;n.d(t,{Yd:function(){return h},in:function(){return r}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let s=[];(i=r||(r={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT";let a={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,l={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},u=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),i=l[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class h{constructor(e){this.name=e,this._logLevel=o,this._logHandler=u,this._userLogHandler=null,s.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?a[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}}},7568:function(e,t,n){"use strict";function r(e,t,n,r,i,s,a){try{var o=e[s](a),l=o.value}catch(u){n(u);return}o.done?t(l):Promise.resolve(l).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise(function(i,s){var a=e.apply(t,n);function o(e){r(a,i,s,o,l,"next",e)}function l(e){r(a,i,s,o,l,"throw",e)}o(void 0)})}}n.d(t,{Z:function(){return i}})},4924:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},6042:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(4924);function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){(0,r.Z)(e,t,n[t])})}return e}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(387)}),_N_E=e.O()}]);