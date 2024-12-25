function e(e,t){for(var n=0;n<t.length;n++){const r=t[n];if("string"!=typeof r&&!Array.isArray(r))for(const t in r)if("default"!==t&&!(t in e)){const n=Object.getOwnPropertyDescriptor(r,t);n&&Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:()=>r[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}function t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var n={exports:{}},r={},i={exports:{}},s={},a=Symbol.for("react.element"),o=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,b={};function _(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||v}function E(){}function k(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||v}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},E.prototype=_.prototype;var S=k.prototype=new E;S.constructor=k,w(S,_.prototype),S.isPureReactComponent=!0;var T=Array.isArray,I=Object.prototype.hasOwnProperty,C={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,n){var r,i={},s=null,o=null;if(null!=t)for(r in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(s=""+t.key),t)I.call(t,r)&&!x.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===i[r]&&(i[r]=l[r]);return{$$typeof:a,type:e,key:s,ref:o,props:i,_owner:C.current}}function A(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var R=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function D(e,t,n,r,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case a:case o:l=!0}}if(l)return i=i(l=e),e=""===r?"."+P(l,0):r,T(i)?(n="",null!=e&&(n=e.replace(R,"$&/")+"/"),D(i,t,n,"",(function(e){return e}))):null!=i&&(A(i)&&(i=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(R,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=""===r?".":r+":",T(e))for(var u=0;u<e.length;u++){var c=r+P(s=e[u],u);l+=D(s,t,n,c,i)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=y&&e[y]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),u=0;!(s=e.next()).done;)l+=D(s=s.value,t,n,c=r+P(s,u++),i);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function O(e,t,n){if(null==e)return e;var r=[],i=0;return D(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function L(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var M={current:null},U={transition:null},F={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:U,ReactCurrentOwner:C};function V(){throw Error("act(...) is not supported in production builds of React.")}s.Children={map:O,forEach:function(e,t,n){O(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!A(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},s.Component=_,s.Fragment=l,s.Profiler=c,s.PureComponent=k,s.StrictMode=u,s.Suspense=p,s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,s.act=V,s.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=w({},e.props),i=e.key,s=e.ref,o=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,o=C.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)I.call(t,u)&&!x.hasOwnProperty(u)&&(r[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:a,type:e.type,key:i,ref:s,props:r,_owner:o}},s.createContext=function(e){return(e={$$typeof:d,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:h,_context:e},e.Consumer=e},s.createElement=N,s.createFactory=function(e){var t=N.bind(null,e);return t.type=e,t},s.createRef=function(){return{current:null}},s.forwardRef=function(e){return{$$typeof:f,render:e}},s.isValidElement=A,s.lazy=function(e){return{$$typeof:g,_payload:{_status:-1,_result:e},_init:L}},s.memo=function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},s.startTransition=function(e){var t=U.transition;U.transition={};try{e()}finally{U.transition=t}},s.unstable_act=V,s.useCallback=function(e,t){return M.current.useCallback(e,t)},s.useContext=function(e){return M.current.useContext(e)},s.useDebugValue=function(){},s.useDeferredValue=function(e){return M.current.useDeferredValue(e)},s.useEffect=function(e,t){return M.current.useEffect(e,t)},s.useId=function(){return M.current.useId()},s.useImperativeHandle=function(e,t,n){return M.current.useImperativeHandle(e,t,n)},s.useInsertionEffect=function(e,t){return M.current.useInsertionEffect(e,t)},s.useLayoutEffect=function(e,t){return M.current.useLayoutEffect(e,t)},s.useMemo=function(e,t){return M.current.useMemo(e,t)},s.useReducer=function(e,t,n){return M.current.useReducer(e,t,n)},s.useRef=function(e){return M.current.useRef(e)},s.useState=function(e){return M.current.useState(e)},s.useSyncExternalStore=function(e,t,n){return M.current.useSyncExternalStore(e,t,n)},s.useTransition=function(){return M.current.useTransition()},s.version="18.3.1",i.exports=s;var j=i.exports;const z=t(j),B=e({__proto__:null,default:z},[j]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $=j,q=Symbol.for("react.element"),H=Symbol.for("react.fragment"),K=Object.prototype.hasOwnProperty,W=$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,G={key:!0,ref:!0,__self:!0,__source:!0};function Q(e,t,n){var r,i={},s=null,a=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(a=t.ref),t)K.call(t,r)&&!G.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:q,type:e,key:s,ref:a,props:i,_owner:W.current}}r.Fragment=H,r.jsx=Q,r.jsxs=Q,n.exports=r;var Y=n.exports,X={},J={exports:{}},Z={},ee={exports:{}},te={};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
!function(e){function t(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,s=e[r];if(!(0<i(s,t)))break e;e[r]=t,e[n]=s,n=r}}function n(e){return 0===e.length?null:e[0]}function r(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,s=e.length,a=s>>>1;r<a;){var o=2*(r+1)-1,l=e[o],u=o+1,c=e[u];if(0>i(l,n))u<s&&0>i(c,l)?(e[r]=c,e[u]=n,r=u):(e[r]=l,e[o]=n,r=o);else{if(!(u<s&&0>i(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"==typeof performance&&"function"==typeof performance.now){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();e.unstable_now=function(){return a.now()-o}}var l=[],u=[],c=1,h=null,d=3,f=!1,p=!1,m=!1,g="function"==typeof setTimeout?setTimeout:null,y="function"==typeof clearTimeout?clearTimeout:null,v="undefined"!=typeof setImmediate?setImmediate:null;function w(e){for(var i=n(u);null!==i;){if(null===i.callback)r(u);else{if(!(i.startTime<=e))break;r(u),i.sortIndex=i.expirationTime,t(l,i)}i=n(u)}}function b(e){if(m=!1,w(e),!p)if(null!==n(l))p=!0,P(_);else{var t=n(u);null!==t&&D(b,t.startTime-e)}}function _(t,i){p=!1,m&&(m=!1,y(T),T=-1),f=!0;var s=d;try{for(w(i),h=n(l);null!==h&&(!(h.expirationTime>i)||t&&!x());){var a=h.callback;if("function"==typeof a){h.callback=null,d=h.priorityLevel;var o=a(h.expirationTime<=i);i=e.unstable_now(),"function"==typeof o?h.callback=o:h===n(l)&&r(l),w(i)}else r(l);h=n(l)}if(null!==h)var c=!0;else{var g=n(u);null!==g&&D(b,g.startTime-i),c=!1}return c}finally{h=null,d=s,f=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var E,k=!1,S=null,T=-1,I=5,C=-1;function x(){return!(e.unstable_now()-C<I)}function N(){if(null!==S){var t=e.unstable_now();C=t;var n=!0;try{n=S(!0,t)}finally{n?E():(k=!1,S=null)}}else k=!1}if("function"==typeof v)E=function(){v(N)};else if("undefined"!=typeof MessageChannel){var A=new MessageChannel,R=A.port2;A.port1.onmessage=N,E=function(){R.postMessage(null)}}else E=function(){g(N,0)};function P(e){S=e,k||(k=!0,E())}function D(t,n){T=g((function(){t(e.unstable_now())}),n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){p||f||(p=!0,P(_))},e.unstable_forceFrameRate=function(e){0>e||125<e||(I=0<e?Math.floor(1e3/e):5)},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(e){switch(d){case 1:case 2:case 3:var t=3;break;default:t=d}var n=d;d=t;try{return e()}finally{d=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=d;d=e;try{return t()}finally{d=n}},e.unstable_scheduleCallback=function(r,i,s){var a=e.unstable_now();switch("object"==typeof s&&null!==s?s="number"==typeof(s=s.delay)&&0<s?a+s:a:s=a,r){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return r={id:c++,callback:i,priorityLevel:r,startTime:s,expirationTime:o=s+o,sortIndex:-1},s>a?(r.sortIndex=s,t(u,r),null===n(l)&&r===n(u)&&(m?(y(T),T=-1):m=!0,D(b,s-a))):(r.sortIndex=o,t(l,r),p||f||(p=!0,P(_))),r},e.unstable_shouldYield=x,e.unstable_wrapCallback=function(e){var t=d;return function(){var n=d;d=t;try{return e.apply(this,arguments)}finally{d=n}}}}(te),ee.exports=te;var ne=ee.exports,re=j,ie=ne;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function se(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ae=new Set,oe={};function le(e,t){ue(e,t),ue(e+"Capture",t)}function ue(e,t){for(oe[e]=t,e=0;e<t.length;e++)ae.add(t[e])}var ce=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),he=Object.prototype.hasOwnProperty,de=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fe={},pe={};function me(e,t,n,r,i,s,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){ge[e]=new me(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];ge[t]=new me(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){ge[e]=new me(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){ge[e]=new me(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){ge[e]=new me(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){ge[e]=new me(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){ge[e]=new me(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){ge[e]=new me(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){ge[e]=new me(e,5,!1,e.toLowerCase(),null,!1,!1)}));var ye=/[\-:]([a-z])/g;function ve(e){return e[1].toUpperCase()}function we(e,t,n,r){var i=ge.hasOwnProperty(t)?ge[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!he.call(pe,e)||!he.call(fe,e)&&(de.test(e)?pe[e]=!0:(fe[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(ye,ve);ge[t]=new me(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(ye,ve);ge[t]=new me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(ye,ve);ge[t]=new me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){ge[e]=new me(e,1,!1,e.toLowerCase(),null,!1,!1)})),ge.xlinkHref=new me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){ge[e]=new me(e,1,!1,e.toLowerCase(),null,!0,!0)}));var be=re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_e=Symbol.for("react.element"),Ee=Symbol.for("react.portal"),ke=Symbol.for("react.fragment"),Se=Symbol.for("react.strict_mode"),Te=Symbol.for("react.profiler"),Ie=Symbol.for("react.provider"),Ce=Symbol.for("react.context"),xe=Symbol.for("react.forward_ref"),Ne=Symbol.for("react.suspense"),Ae=Symbol.for("react.suspense_list"),Re=Symbol.for("react.memo"),Pe=Symbol.for("react.lazy"),De=Symbol.for("react.offscreen"),Oe=Symbol.iterator;function Le(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=Oe&&e[Oe]||e["@@iterator"])?e:null}var Me,Ue=Object.assign;function Fe(e){if(void 0===Me)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Me=t&&t[1]||""}return"\n"+Me+e}var Ve=!1;function je(e,t){if(!e||Ve)return"";Ve=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(af){var r=af}Reflect.construct(e,[],t)}else{try{t.call()}catch(af){r=af}e.call(t.prototype)}else{try{throw Error()}catch(af){r=af}e()}}catch(af){if(af&&r&&"string"==typeof af.stack){for(var i=af.stack.split("\n"),s=r.stack.split("\n"),a=i.length-1,o=s.length-1;1<=a&&0<=o&&i[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(i[a]!==s[o]){if(1!==a||1!==o)do{if(a--,0>--o||i[a]!==s[o]){var l="\n"+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=a&&0<=o);break}}}finally{Ve=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Fe(e):""}function ze(e){switch(e.tag){case 5:return Fe(e.type);case 16:return Fe("Lazy");case 13:return Fe("Suspense");case 19:return Fe("SuspenseList");case 0:case 2:case 15:return e=je(e.type,!1);case 11:return e=je(e.type.render,!1);case 1:return e=je(e.type,!0);default:return""}}function Be(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case ke:return"Fragment";case Ee:return"Portal";case Te:return"Profiler";case Se:return"StrictMode";case Ne:return"Suspense";case Ae:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case Ce:return(e.displayName||"Context")+".Consumer";case Ie:return(e._context.displayName||"Context")+".Provider";case xe:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case Re:return null!==(t=e.displayName||null)?t:Be(e.type)||"Memo";case Pe:t=e._payload,e=e._init;try{return Be(e(t))}catch(n){}}return null}function $e(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Be(t);case 8:return t===Se?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}function qe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function He(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Ke(e){e._valueTracker||(e._valueTracker=function(e){var t=He(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,s.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function We(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=He(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Ge(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Qe(e,t){var n=t.checked;return Ue({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Ye(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=qe(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Xe(e,t){null!=(t=t.checked)&&we(e,"checked",t,!1)}function Je(e,t){Xe(e,t);var n=qe(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?et(e,t.type,n):t.hasOwnProperty("defaultValue")&&et(e,t.type,qe(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Ze(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function et(e,t,n){"number"===t&&Ge(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var tt=Array.isArray;function nt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+qe(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function rt(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(se(91));return Ue({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function it(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(se(92));if(tt(n)){if(1<n.length)throw Error(se(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:qe(n)}}function st(e,t){var n=qe(t.value),r=qe(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function at(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function ot(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lt(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?ot(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ut,ct,ht=(ct=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ut=ut||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ut.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ct(e,t)}))}:ct);function dt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var ft={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pt=["Webkit","ms","Moz","O"];function mt(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||ft.hasOwnProperty(e)&&ft[e]?(""+t).trim():t+"px"}function gt(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=mt(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(ft).forEach((function(e){pt.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ft[t]=ft[e]}))}));var yt=Ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vt(e,t){if(t){if(yt[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(se(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(se(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(se(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(se(62))}}function wt(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bt=null;function _t(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Et=null,kt=null,St=null;function Tt(e){if(e=ws(e)){if("function"!=typeof Et)throw Error(se(280));var t=e.stateNode;t&&(t=_s(t),Et(e.stateNode,e.type,t))}}function It(e){kt?St?St.push(e):St=[e]:kt=e}function Ct(){if(kt){var e=kt,t=St;if(St=kt=null,Tt(e),t)for(e=0;e<t.length;e++)Tt(t[e])}}function xt(e,t){return e(t)}function Nt(){}var At=!1;function Rt(e,t,n){if(At)return e(t,n);At=!0;try{return xt(e,t,n)}finally{At=!1,(null!==kt||null!==St)&&(Nt(),Ct())}}function Pt(e,t){var n=e.stateNode;if(null===n)return null;var r=_s(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(se(231,t,typeof n));return n}var Dt=!1;if(ce)try{var Ot={};Object.defineProperty(Ot,"passive",{get:function(){Dt=!0}}),window.addEventListener("test",Ot,Ot),window.removeEventListener("test",Ot,Ot)}catch(ct){Dt=!1}function Lt(e,t,n,r,i,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Mt=!1,Ut=null,Ft=!1,Vt=null,jt={onError:function(e){Mt=!0,Ut=e}};function zt(e,t,n,r,i,s,a,o,l){Mt=!1,Ut=null,Lt.apply(jt,arguments)}function Bt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{!!(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function $t(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function qt(e){if(Bt(e)!==e)throw Error(se(188))}function Ht(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Bt(e)))throw Error(se(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var s=i.alternate;if(null===s){if(null!==(r=i.return)){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return qt(i),e;if(s===r)return qt(i),t;s=s.sibling}throw Error(se(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,o=i.child;o;){if(o===n){a=!0,n=i,r=s;break}if(o===r){a=!0,r=i,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,r=i;break}if(o===r){a=!0,r=s,n=i;break}o=o.sibling}if(!a)throw Error(se(189))}}if(n.alternate!==r)throw Error(se(190))}if(3!==n.tag)throw Error(se(188));return n.stateNode.current===n?e:t}(e))?Kt(e):null}function Kt(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Kt(e);if(null!==t)return t;e=e.sibling}return null}var Wt=ie.unstable_scheduleCallback,Gt=ie.unstable_cancelCallback,Qt=ie.unstable_shouldYield,Yt=ie.unstable_requestPaint,Xt=ie.unstable_now,Jt=ie.unstable_getCurrentPriorityLevel,Zt=ie.unstable_ImmediatePriority,en=ie.unstable_UserBlockingPriority,tn=ie.unstable_NormalPriority,nn=ie.unstable_LowPriority,rn=ie.unstable_IdlePriority,sn=null,an=null;var on=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(ln(e)/un|0)|0},ln=Math.log,un=Math.LN2;var cn=64,hn=4194304;function dn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function fn(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,a=268435455&n;if(0!==a){var o=a&~i;0!==o?r=dn(o):0!==(s&=a)&&(r=dn(s))}else 0!==(a=n&~i)?r=dn(a):0!==s&&(r=dn(s));if(0===r)return 0;if(0!==t&&t!==r&&!(t&i)&&((i=r&-r)>=(s=t&-t)||16===i&&4194240&s))return t;if(4&r&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-on(t)),r|=e[n],t&=~i;return r}function pn(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function mn(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function gn(){var e=cn;return!(4194240&(cn<<=1))&&(cn=64),e}function yn(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vn(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-on(t)]=n}function wn(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-on(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var bn=0;function _n(e){return 1<(e&=-e)?4<e?268435455&e?16:536870912:4:1}var En,kn,Sn,Tn,In,Cn=!1,xn=[],Nn=null,An=null,Rn=null,Pn=new Map,Dn=new Map,On=[],Ln="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mn(e,t){switch(e){case"focusin":case"focusout":Nn=null;break;case"dragenter":case"dragleave":An=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":Pn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dn.delete(t.pointerId)}}function Un(e,t,n,r,i,s){return null===e||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},null!==t&&(null!==(t=ws(t))&&kn(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Fn(e){var t=vs(e.target);if(null!==t){var n=Bt(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=$t(n)))return e.blockedOn=t,void In(e.priority,(function(){Sn(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Vn(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Yn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=ws(n))&&kn(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);bt=r,n.target.dispatchEvent(r),bt=null,t.shift()}return!0}function jn(e,t,n){Vn(e)&&n.delete(t)}function zn(){Cn=!1,null!==Nn&&Vn(Nn)&&(Nn=null),null!==An&&Vn(An)&&(An=null),null!==Rn&&Vn(Rn)&&(Rn=null),Pn.forEach(jn),Dn.forEach(jn)}function Bn(e,t){e.blockedOn===t&&(e.blockedOn=null,Cn||(Cn=!0,ie.unstable_scheduleCallback(ie.unstable_NormalPriority,zn)))}function $n(e){function t(t){return Bn(t,e)}if(0<xn.length){Bn(xn[0],e);for(var n=1;n<xn.length;n++){var r=xn[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Nn&&Bn(Nn,e),null!==An&&Bn(An,e),null!==Rn&&Bn(Rn,e),Pn.forEach(t),Dn.forEach(t),n=0;n<On.length;n++)(r=On[n]).blockedOn===e&&(r.blockedOn=null);for(;0<On.length&&null===(n=On[0]).blockedOn;)Fn(n),null===n.blockedOn&&On.shift()}var qn=be.ReactCurrentBatchConfig,Hn=!0;function Kn(e,t,n,r){var i=bn,s=qn.transition;qn.transition=null;try{bn=1,Gn(e,t,n,r)}finally{bn=i,qn.transition=s}}function Wn(e,t,n,r){var i=bn,s=qn.transition;qn.transition=null;try{bn=4,Gn(e,t,n,r)}finally{bn=i,qn.transition=s}}function Gn(e,t,n,r){if(Hn){var i=Yn(e,t,n,r);if(null===i)qi(e,t,r,Qn,n),Mn(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return Nn=Un(Nn,e,t,n,r,i),!0;case"dragenter":return An=Un(An,e,t,n,r,i),!0;case"mouseover":return Rn=Un(Rn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Pn.set(s,Un(Pn.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Dn.set(s,Un(Dn.get(s)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(Mn(e,r),4&t&&-1<Ln.indexOf(e)){for(;null!==i;){var s=ws(i);if(null!==s&&En(s),null===(s=Yn(e,t,n,r))&&qi(e,t,r,Qn,n),s===i)break;i=s}null!==i&&r.stopPropagation()}else qi(e,t,r,null,n)}}var Qn=null;function Yn(e,t,n,r){if(Qn=null,null!==(e=vs(e=_t(r))))if(null===(t=Bt(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=$t(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qn=e,null}function Xn(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jt()){case Zt:return 1;case en:return 4;case tn:case nn:return 16;case rn:return 536870912;default:return 16}default:return 16}}var Jn=null,Zn=null,er=null;function tr(){if(er)return er;var e,t,n=Zn,r=n.length,i="value"in Jn?Jn.value:Jn.textContent,s=i.length;for(e=0;e<r&&n[e]===i[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===i[s-t];t++);return er=i.slice(e,1<t?1-t:void 0)}function nr(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function rr(){return!0}function ir(){return!1}function sr(e){function t(t,n,r,i,s){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=s,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?rr:ir,this.isPropagationStopped=ir,this}return Ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=rr)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=rr)},persist:function(){},isPersistent:rr}),t}var ar,or,lr,ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cr=sr(ur),hr=Ue({},ur,{view:0,detail:0}),dr=sr(hr),fr=Ue({},hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tr,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lr&&(lr&&"mousemove"===e.type?(ar=e.screenX-lr.screenX,or=e.screenY-lr.screenY):or=ar=0,lr=e),ar)},movementY:function(e){return"movementY"in e?e.movementY:or}}),pr=sr(fr),mr=sr(Ue({},fr,{dataTransfer:0})),gr=sr(Ue({},hr,{relatedTarget:0})),yr=sr(Ue({},ur,{animationName:0,elapsedTime:0,pseudoElement:0})),vr=Ue({},ur,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wr=sr(vr),br=sr(Ue({},ur,{data:0})),_r={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Er={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kr={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=kr[e])&&!!t[e]}function Tr(){return Sr}var Ir=Ue({},hr,{key:function(e){if(e.key){var t=_r[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=nr(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Er[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tr,charCode:function(e){return"keypress"===e.type?nr(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?nr(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Cr=sr(Ir),xr=sr(Ue({},fr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Nr=sr(Ue({},hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tr})),Ar=sr(Ue({},ur,{propertyName:0,elapsedTime:0,pseudoElement:0})),Rr=Ue({},fr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pr=sr(Rr),Dr=[9,13,27,32],Or=ce&&"CompositionEvent"in window,Lr=null;ce&&"documentMode"in document&&(Lr=document.documentMode);var Mr=ce&&"TextEvent"in window&&!Lr,Ur=ce&&(!Or||Lr&&8<Lr&&11>=Lr),Fr=String.fromCharCode(32),Vr=!1;function jr(e,t){switch(e){case"keyup":return-1!==Dr.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zr(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var Br=!1;var $r={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!$r[e.type]:"textarea"===t}function Hr(e,t,n,r){It(r),0<(t=Ki(t,"onChange")).length&&(n=new cr("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Kr=null,Wr=null;function Gr(e){Fi(e,0)}function Qr(e){if(We(bs(e)))return e}function Yr(e,t){if("change"===e)return t}var Xr=!1;if(ce){var Jr;if(ce){var Zr="oninput"in document;if(!Zr){var ei=document.createElement("div");ei.setAttribute("oninput","return;"),Zr="function"==typeof ei.oninput}Jr=Zr}else Jr=!1;Xr=Jr&&(!document.documentMode||9<document.documentMode)}function ti(){Kr&&(Kr.detachEvent("onpropertychange",ni),Wr=Kr=null)}function ni(e){if("value"===e.propertyName&&Qr(Wr)){var t=[];Hr(t,Wr,e,_t(e)),Rt(Gr,t)}}function ri(e,t,n){"focusin"===e?(ti(),Wr=n,(Kr=t).attachEvent("onpropertychange",ni)):"focusout"===e&&ti()}function ii(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Qr(Wr)}function si(e,t){if("click"===e)return Qr(t)}function ai(e,t){if("input"===e||"change"===e)return Qr(t)}var oi="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function li(e,t){if(oi(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!he.call(t,i)||!oi(e[i],t[i]))return!1}return!0}function ui(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ci(e,t){var n,r=ui(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ui(r)}}function hi(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?hi(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function di(){for(var e=window,t=Ge();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Ge((e=t.contentWindow).document)}return t}function fi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function pi(e){var t=di(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&hi(n.ownerDocument.documentElement,n)){if(null!==r&&fi(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=void 0===r.end?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=ci(n,s);var a=ci(n,r);i&&a&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mi=ce&&"documentMode"in document&&11>=document.documentMode,gi=null,yi=null,vi=null,wi=!1;function bi(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;wi||null==gi||gi!==Ge(r)||("selectionStart"in(r=gi)&&fi(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},vi&&li(vi,r)||(vi=r,0<(r=Ki(yi,"onSelect")).length&&(t=new cr("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gi)))}function _i(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ei={animationend:_i("Animation","AnimationEnd"),animationiteration:_i("Animation","AnimationIteration"),animationstart:_i("Animation","AnimationStart"),transitionend:_i("Transition","TransitionEnd")},ki={},Si={};function Ti(e){if(ki[e])return ki[e];if(!Ei[e])return e;var t,n=Ei[e];for(t in n)if(n.hasOwnProperty(t)&&t in Si)return ki[e]=n[t];return e}ce&&(Si=document.createElement("div").style,"AnimationEvent"in window||(delete Ei.animationend.animation,delete Ei.animationiteration.animation,delete Ei.animationstart.animation),"TransitionEvent"in window||delete Ei.transitionend.transition);var Ii=Ti("animationend"),Ci=Ti("animationiteration"),xi=Ti("animationstart"),Ni=Ti("transitionend"),Ai=new Map,Ri="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pi(e,t){Ai.set(e,t),le(t,[e])}for(var Di=0;Di<Ri.length;Di++){var Oi=Ri[Di];Pi(Oi.toLowerCase(),"on"+(Oi[0].toUpperCase()+Oi.slice(1)))}Pi(Ii,"onAnimationEnd"),Pi(Ci,"onAnimationIteration"),Pi(xi,"onAnimationStart"),Pi("dblclick","onDoubleClick"),Pi("focusin","onFocus"),Pi("focusout","onBlur"),Pi(Ni,"onTransitionEnd"),ue("onMouseEnter",["mouseout","mouseover"]),ue("onMouseLeave",["mouseout","mouseover"]),ue("onPointerEnter",["pointerout","pointerover"]),ue("onPointerLeave",["pointerout","pointerover"]),le("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),le("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),le("onBeforeInput",["compositionend","keypress","textInput","paste"]),le("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),le("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),le("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Li="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mi=new Set("cancel close invalid load scroll toggle".split(" ").concat(Li));function Ui(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,s,a,o,l){if(zt.apply(this,arguments),Mt){if(!Mt)throw Error(se(198));var u=Ut;Mt=!1,Ut=null,Ft||(Ft=!0,Vt=u)}}(r,t,void 0,e),e.currentTarget=null}function Fi(e,t){t=!!(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var o=r[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&i.isPropagationStopped())break e;Ui(i,o,u),s=l}else for(a=0;a<r.length;a++){if(l=(o=r[a]).instance,u=o.currentTarget,o=o.listener,l!==s&&i.isPropagationStopped())break e;Ui(i,o,u),s=l}}}if(Ft)throw e=Vt,Ft=!1,Vt=null,e}function Vi(e,t){var n=t[ms];void 0===n&&(n=t[ms]=new Set);var r=e+"__bubble";n.has(r)||($i(t,e,2,!1),n.add(r))}function ji(e,t,n){var r=0;t&&(r|=4),$i(n,e,r,t)}var zi="_reactListening"+Math.random().toString(36).slice(2);function Bi(e){if(!e[zi]){e[zi]=!0,ae.forEach((function(t){"selectionchange"!==t&&(Mi.has(t)||ji(t,!1,e),ji(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[zi]||(t[zi]=!0,ji("selectionchange",!1,t))}}function $i(e,t,n,r){switch(Xn(t)){case 1:var i=Kn;break;case 4:i=Wn;break;default:i=Gn}n=i.bind(null,t,n,e),i=void 0,!Dt||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function qi(e,t,n,r,i){var s=r;if(!(1&t||2&t||null===r))e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var o=r.stateNode.containerInfo;if(o===i||8===o.nodeType&&o.parentNode===i)break;if(4===a)for(a=r.return;null!==a;){var l=a.tag;if((3===l||4===l)&&((l=a.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;a=a.return}for(;null!==o;){if(null===(a=vs(o)))return;if(5===(l=a.tag)||6===l){r=s=a;continue e}o=o.parentNode}}r=r.return}Rt((function(){var r=s,i=_t(n),a=[];e:{var o=Ai.get(e);if(void 0!==o){var l=cr,u=e;switch(e){case"keypress":if(0===nr(n))break e;case"keydown":case"keyup":l=Cr;break;case"focusin":u="focus",l=gr;break;case"focusout":u="blur",l=gr;break;case"beforeblur":case"afterblur":l=gr;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=pr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=mr;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Nr;break;case Ii:case Ci:case xi:l=yr;break;case Ni:l=Ar;break;case"scroll":l=dr;break;case"wheel":l=Pr;break;case"copy":case"cut":case"paste":l=wr;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=xr}var c=!!(4&t),h=!c&&"scroll"===e,d=c?null!==o?o+"Capture":null:o;c=[];for(var f,p=r;null!==p;){var m=(f=p).stateNode;if(5===f.tag&&null!==m&&(f=m,null!==d&&(null!=(m=Pt(p,d))&&c.push(Hi(p,m,f)))),h)break;p=p.return}0<c.length&&(o=new l(o,u,null,n,i),a.push({event:o,listeners:c}))}}if(!(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(o="mouseover"===e||"pointerover"===e)||n===bt||!(u=n.relatedTarget||n.fromElement)||!vs(u)&&!u[ps])&&(l||o)&&(o=i.window===i?i:(o=i.ownerDocument)?o.defaultView||o.parentWindow:window,l?(l=r,null!==(u=(u=n.relatedTarget||n.toElement)?vs(u):null)&&(u!==(h=Bt(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(l=null,u=r),l!==u)){if(c=pr,m="onMouseLeave",d="onMouseEnter",p="mouse","pointerout"!==e&&"pointerover"!==e||(c=xr,m="onPointerLeave",d="onPointerEnter",p="pointer"),h=null==l?o:bs(l),f=null==u?o:bs(u),(o=new c(m,p+"leave",l,n,i)).target=h,o.relatedTarget=f,m=null,vs(i)===r&&((c=new c(d,p+"enter",u,n,i)).target=f,c.relatedTarget=h,m=c),h=m,l&&u)e:{for(d=u,p=0,f=c=l;f;f=Wi(f))p++;for(f=0,m=d;m;m=Wi(m))f++;for(;0<p-f;)c=Wi(c),p--;for(;0<f-p;)d=Wi(d),f--;for(;p--;){if(c===d||null!==d&&c===d.alternate)break e;c=Wi(c),d=Wi(d)}c=null}else c=null;null!==l&&Gi(a,o,l,c,!1),null!==u&&null!==h&&Gi(a,h,u,c,!0)}if("select"===(l=(o=r?bs(r):window).nodeName&&o.nodeName.toLowerCase())||"input"===l&&"file"===o.type)var g=Yr;else if(qr(o))if(Xr)g=ai;else{g=ii;var y=ri}else(l=o.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===o.type||"radio"===o.type)&&(g=si);switch(g&&(g=g(e,r))?Hr(a,g,n,i):(y&&y(e,o,r),"focusout"===e&&(y=o._wrapperState)&&y.controlled&&"number"===o.type&&et(o,"number",o.value)),y=r?bs(r):window,e){case"focusin":(qr(y)||"true"===y.contentEditable)&&(gi=y,yi=r,vi=null);break;case"focusout":vi=yi=gi=null;break;case"mousedown":wi=!0;break;case"contextmenu":case"mouseup":case"dragend":wi=!1,bi(a,n,i);break;case"selectionchange":if(mi)break;case"keydown":case"keyup":bi(a,n,i)}var v;if(Or)e:{switch(e){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else Br?jr(e,n)&&(w="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(w="onCompositionStart");w&&(Ur&&"ko"!==n.locale&&(Br||"onCompositionStart"!==w?"onCompositionEnd"===w&&Br&&(v=tr()):(Zn="value"in(Jn=i)?Jn.value:Jn.textContent,Br=!0)),0<(y=Ki(r,w)).length&&(w=new br(w,e,null,n,i),a.push({event:w,listeners:y}),v?w.data=v:null!==(v=zr(n))&&(w.data=v))),(v=Mr?function(e,t){switch(e){case"compositionend":return zr(t);case"keypress":return 32!==t.which?null:(Vr=!0,Fr);case"textInput":return(e=t.data)===Fr&&Vr?null:e;default:return null}}(e,n):function(e,t){if(Br)return"compositionend"===e||!Or&&jr(e,t)?(e=tr(),er=Zn=Jn=null,Br=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ur&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Ki(r,"onBeforeInput")).length&&(i=new br("onBeforeInput","beforeinput",null,n,i),a.push({event:i,listeners:r}),i.data=v))}Fi(a,t)}))}function Hi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ki(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,s=i.stateNode;5===i.tag&&null!==s&&(i=s,null!=(s=Pt(e,n))&&r.unshift(Hi(e,s,i)),null!=(s=Pt(e,t))&&r.push(Hi(e,s,i))),e=e.return}return r}function Wi(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Gi(e,t,n,r,i){for(var s=t._reactName,a=[];null!==n&&n!==r;){var o=n,l=o.alternate,u=o.stateNode;if(null!==l&&l===r)break;5===o.tag&&null!==u&&(o=u,i?null!=(l=Pt(n,s))&&a.unshift(Hi(n,l,o)):i||null!=(l=Pt(n,s))&&a.push(Hi(n,l,o))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var Qi=/\r\n?/g,Yi=/\u0000|\uFFFD/g;function Xi(e){return("string"==typeof e?e:""+e).replace(Qi,"\n").replace(Yi,"")}function Ji(e,t,n){if(t=Xi(t),Xi(e)!==t&&n)throw Error(se(425))}function Zi(){}var es=null,ts=null;function ns(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var rs="function"==typeof setTimeout?setTimeout:void 0,is="function"==typeof clearTimeout?clearTimeout:void 0,ss="function"==typeof Promise?Promise:void 0,as="function"==typeof queueMicrotask?queueMicrotask:void 0!==ss?function(e){return ss.resolve(null).then(e).catch(os)}:rs;function os(e){setTimeout((function(){throw e}))}function ls(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void $n(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);$n(t)}function us(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function cs(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var hs=Math.random().toString(36).slice(2),ds="__reactFiber$"+hs,fs="__reactProps$"+hs,ps="__reactContainer$"+hs,ms="__reactEvents$"+hs,gs="__reactListeners$"+hs,ys="__reactHandles$"+hs;function vs(e){var t=e[ds];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ps]||n[ds]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=cs(e);null!==e;){if(n=e[ds])return n;e=cs(e)}return t}n=(e=n).parentNode}return null}function ws(e){return!(e=e[ds]||e[ps])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function bs(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(se(33))}function _s(e){return e[fs]||null}var Es=[],ks=-1;function Ss(e){return{current:e}}function Ts(e){0>ks||(e.current=Es[ks],Es[ks]=null,ks--)}function Is(e,t){ks++,Es[ks]=e.current,e.current=t}var Cs={},xs=Ss(Cs),Ns=Ss(!1),As=Cs;function Rs(e,t){var n=e.type.contextTypes;if(!n)return Cs;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,s={};for(i in n)s[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Ps(e){return null!=(e=e.childContextTypes)}function Ds(){Ts(Ns),Ts(xs)}function Os(e,t,n){if(xs.current!==Cs)throw Error(se(168));Is(xs,t),Is(Ns,n)}function Ls(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(se(108,$e(e)||"Unknown",i));return Ue({},n,r)}function Ms(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Cs,As=xs.current,Is(xs,e),Is(Ns,Ns.current),!0}function Us(e,t,n){var r=e.stateNode;if(!r)throw Error(se(169));n?(e=Ls(e,t,As),r.__reactInternalMemoizedMergedChildContext=e,Ts(Ns),Ts(xs),Is(xs,e)):Ts(Ns),Is(Ns,n)}var Fs=null,Vs=!1,js=!1;function zs(e){null===Fs?Fs=[e]:Fs.push(e)}function Bs(){if(!js&&null!==Fs){js=!0;var e=0,t=bn;try{var n=Fs;for(bn=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Fs=null,Vs=!1}catch(nf){throw null!==Fs&&(Fs=Fs.slice(e+1)),Wt(Zt,Bs),nf}finally{bn=t,js=!1}}return null}var $s=[],qs=0,Hs=null,Ks=0,Ws=[],Gs=0,Qs=null,Ys=1,Xs="";function Js(e,t){$s[qs++]=Ks,$s[qs++]=Hs,Hs=e,Ks=t}function Zs(e,t,n){Ws[Gs++]=Ys,Ws[Gs++]=Xs,Ws[Gs++]=Qs,Qs=e;var r=Ys;e=Xs;var i=32-on(r)-1;r&=~(1<<i),n+=1;var s=32-on(t)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Ys=1<<32-on(t)+i|n<<i|r,Xs=s+e}else Ys=1<<s|n<<i|r,Xs=e}function ea(e){null!==e.return&&(Js(e,1),Zs(e,1,0))}function ta(e){for(;e===Hs;)Hs=$s[--qs],$s[qs]=null,Ks=$s[--qs],$s[qs]=null;for(;e===Qs;)Qs=Ws[--Gs],Ws[Gs]=null,Xs=Ws[--Gs],Ws[Gs]=null,Ys=Ws[--Gs],Ws[Gs]=null}var na=null,ra=null,ia=!1,sa=null;function aa(e,t){var n=Ac(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function oa(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,na=e,ra=us(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,na=e,ra=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Qs?{id:Ys,overflow:Xs}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Ac(18,null,null,0)).stateNode=t,n.return=e,e.child=n,na=e,ra=null,!0);default:return!1}}function la(e){return!(!(1&e.mode)||128&e.flags)}function ua(e){if(ia){var t=ra;if(t){var n=t;if(!oa(e,t)){if(la(e))throw Error(se(418));t=us(n.nextSibling);var r=na;t&&oa(e,t)?aa(r,n):(e.flags=-4097&e.flags|2,ia=!1,na=e)}}else{if(la(e))throw Error(se(418));e.flags=-4097&e.flags|2,ia=!1,na=e}}}function ca(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;na=e}function ha(e){if(e!==na)return!1;if(!ia)return ca(e),ia=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ns(e.type,e.memoizedProps)),t&&(t=ra)){if(la(e))throw da(),Error(se(418));for(;t;)aa(e,t),t=us(t.nextSibling)}if(ca(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(se(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ra=us(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ra=null}}else ra=na?us(e.stateNode.nextSibling):null;return!0}function da(){for(var e=ra;e;)e=us(e.nextSibling)}function fa(){ra=na=null,ia=!1}function pa(e){null===sa?sa=[e]:sa.push(e)}var ma=be.ReactCurrentBatchConfig;function ga(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(se(309));var r=n.stateNode}if(!r)throw Error(se(147,e));var i=r,s=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===s?t.ref:((t=function(e){var t=i.refs;null===e?delete t[s]:t[s]=e})._stringRef=s,t)}if("string"!=typeof e)throw Error(se(284));if(!n._owner)throw Error(se(290,e))}return e}function ya(e,t){throw e=Object.prototype.toString.call(t),Error(se(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function va(e){return(0,e._init)(e._payload)}function wa(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=Pc(e,t)).index=0,e.sibling=null,e}function s(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function a(t){return e&&null===t.alternate&&(t.flags|=2),t}function o(e,t,n,r){return null===t||6!==t.tag?((t=Mc(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function l(e,t,n,r){var s=n.type;return s===ke?c(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===s||"object"==typeof s&&null!==s&&s.$$typeof===Pe&&va(s)===t.type)?((r=i(t,n.props)).ref=ga(e,t,n),r.return=e,r):((r=Dc(n.type,n.key,n.props,null,e.mode,r)).ref=ga(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Uc(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function c(e,t,n,r,s){return null===t||7!==t.tag?((t=Oc(n,e.mode,r,s)).return=e,t):((t=i(t,n)).return=e,t)}function h(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=Mc(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case _e:return(n=Dc(t.type,t.key,t.props,null,e.mode,n)).ref=ga(e,null,t),n.return=e,n;case Ee:return(t=Uc(t,e.mode,n)).return=e,t;case Pe:return h(e,(0,t._init)(t._payload),n)}if(tt(t)||Le(t))return(t=Oc(t,e.mode,n,null)).return=e,t;ya(e,t)}return null}function d(e,t,n,r){var i=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==i?null:o(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case _e:return n.key===i?l(e,t,n,r):null;case Ee:return n.key===i?u(e,t,n,r):null;case Pe:return d(e,t,(i=n._init)(n._payload),r)}if(tt(n)||Le(n))return null!==i?null:c(e,t,n,r,null);ya(e,n)}return null}function f(e,t,n,r,i){if("string"==typeof r&&""!==r||"number"==typeof r)return o(t,e=e.get(n)||null,""+r,i);if("object"==typeof r&&null!==r){switch(r.$$typeof){case _e:return l(t,e=e.get(null===r.key?n:r.key)||null,r,i);case Ee:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case Pe:return f(e,t,n,(0,r._init)(r._payload),i)}if(tt(r)||Le(r))return c(t,e=e.get(n)||null,r,i,null);ya(t,r)}return null}return function o(l,u,c,p){if("object"==typeof c&&null!==c&&c.type===ke&&null===c.key&&(c=c.props.children),"object"==typeof c&&null!==c){switch(c.$$typeof){case _e:e:{for(var m=c.key,g=u;null!==g;){if(g.key===m){if((m=c.type)===ke){if(7===g.tag){n(l,g.sibling),(u=i(g,c.props.children)).return=l,l=u;break e}}else if(g.elementType===m||"object"==typeof m&&null!==m&&m.$$typeof===Pe&&va(m)===g.type){n(l,g.sibling),(u=i(g,c.props)).ref=ga(l,g,c),u.return=l,l=u;break e}n(l,g);break}t(l,g),g=g.sibling}c.type===ke?((u=Oc(c.props.children,l.mode,p,c.key)).return=l,l=u):((p=Dc(c.type,c.key,c.props,null,l.mode,p)).ref=ga(l,u,c),p.return=l,l=p)}return a(l);case Ee:e:{for(g=c.key;null!==u;){if(u.key===g){if(4===u.tag&&u.stateNode.containerInfo===c.containerInfo&&u.stateNode.implementation===c.implementation){n(l,u.sibling),(u=i(u,c.children||[])).return=l,l=u;break e}n(l,u);break}t(l,u),u=u.sibling}(u=Uc(c,l.mode,p)).return=l,l=u}return a(l);case Pe:return o(l,u,(g=c._init)(c._payload),p)}if(tt(c))return function(i,a,o,l){for(var u=null,c=null,p=a,m=a=0,g=null;null!==p&&m<o.length;m++){p.index>m?(g=p,p=null):g=p.sibling;var y=d(i,p,o[m],l);if(null===y){null===p&&(p=g);break}e&&p&&null===y.alternate&&t(i,p),a=s(y,a,m),null===c?u=y:c.sibling=y,c=y,p=g}if(m===o.length)return n(i,p),ia&&Js(i,m),u;if(null===p){for(;m<o.length;m++)null!==(p=h(i,o[m],l))&&(a=s(p,a,m),null===c?u=p:c.sibling=p,c=p);return ia&&Js(i,m),u}for(p=r(i,p);m<o.length;m++)null!==(g=f(p,i,m,o[m],l))&&(e&&null!==g.alternate&&p.delete(null===g.key?m:g.key),a=s(g,a,m),null===c?u=g:c.sibling=g,c=g);return e&&p.forEach((function(e){return t(i,e)})),ia&&Js(i,m),u}(l,u,c,p);if(Le(c))return function(i,a,o,l){var u=Le(o);if("function"!=typeof u)throw Error(se(150));if(null==(o=u.call(o)))throw Error(se(151));for(var c=u=null,p=a,m=a=0,g=null,y=o.next();null!==p&&!y.done;m++,y=o.next()){p.index>m?(g=p,p=null):g=p.sibling;var v=d(i,p,y.value,l);if(null===v){null===p&&(p=g);break}e&&p&&null===v.alternate&&t(i,p),a=s(v,a,m),null===c?u=v:c.sibling=v,c=v,p=g}if(y.done)return n(i,p),ia&&Js(i,m),u;if(null===p){for(;!y.done;m++,y=o.next())null!==(y=h(i,y.value,l))&&(a=s(y,a,m),null===c?u=y:c.sibling=y,c=y);return ia&&Js(i,m),u}for(p=r(i,p);!y.done;m++,y=o.next())null!==(y=f(p,i,m,y.value,l))&&(e&&null!==y.alternate&&p.delete(null===y.key?m:y.key),a=s(y,a,m),null===c?u=y:c.sibling=y,c=y);return e&&p.forEach((function(e){return t(i,e)})),ia&&Js(i,m),u}(l,u,c,p);ya(l,c)}return"string"==typeof c&&""!==c||"number"==typeof c?(c=""+c,null!==u&&6===u.tag?(n(l,u.sibling),(u=i(u,c)).return=l,l=u):(n(l,u),(u=Mc(c,l.mode,p)).return=l,l=u),a(l)):n(l,u)}}var ba=wa(!0),_a=wa(!1),Ea=Ss(null),ka=null,Sa=null,Ta=null;function Ia(){Ta=Sa=ka=null}function Ca(e){var t=Ea.current;Ts(Ea),e._currentValue=t}function xa(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Na(e,t){ka=e,Ta=Sa=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(!!(e.lanes&t)&&(vl=!0),e.firstContext=null)}function Aa(e){var t=e._currentValue;if(Ta!==e)if(e={context:e,memoizedValue:t,next:null},null===Sa){if(null===ka)throw Error(se(308));Sa=e,ka.dependencies={lanes:0,firstContext:e}}else Sa=Sa.next=e;return t}var Ra=null;function Pa(e){null===Ra?Ra=[e]:Ra.push(e)}function Da(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,Pa(t)):(n.next=i.next,i.next=n),t.interleaved=n,Oa(e,r)}function Oa(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var La=!1;function Ma(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ua(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Fa(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Va(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,2&Cu){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Oa(e,n)}return null===(i=r.interleaved)?(t.next=t,Pa(r)):(t.next=i.next,i.next=t),r.interleaved=t,Oa(e,n)}function ja(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,wn(e,n)}}function za(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,s=null;if(null!==(n=n.firstBaseUpdate)){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===s?i=s=a:s=s.next=a,n=n.next}while(null!==n);null===s?i=s=t:s=s.next=t}else i=s=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ba(e,t,n,r){var i=e.updateQueue;La=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,o=i.shared.pending;if(null!==o){i.shared.pending=null;var l=o,u=l.next;l.next=null,null===a?s=u:a.next=u,a=l;var c=e.alternate;null!==c&&((o=(c=c.updateQueue).lastBaseUpdate)!==a&&(null===o?c.firstBaseUpdate=u:o.next=u,c.lastBaseUpdate=l))}if(null!==s){var h=i.baseState;for(a=0,c=u=l=null,o=s;;){var d=o.lane,f=o.eventTime;if((r&d)===d){null!==c&&(c=c.next={eventTime:f,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var p=e,m=o;switch(d=t,f=n,m.tag){case 1:if("function"==typeof(p=m.payload)){h=p.call(f,h,d);break e}h=p;break e;case 3:p.flags=-65537&p.flags|128;case 0:if(null==(d="function"==typeof(p=m.payload)?p.call(f,h,d):p))break e;h=Ue({},h,d);break e;case 2:La=!0}}null!==o.callback&&0!==o.lane&&(e.flags|=64,null===(d=i.effects)?i.effects=[o]:d.push(o))}else f={eventTime:f,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},null===c?(u=c=f,l=h):c=c.next=f,a|=d;if(null===(o=o.next)){if(null===(o=i.shared.pending))break;o=(d=o).next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}if(null===c&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,null!==(t=i.shared.interleaved)){i=t;do{a|=i.lane,i=i.next}while(i!==t)}else null===s&&(i.shared.lanes=0);Lu|=a,e.lanes=a,e.memoizedState=h}}function $a(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!=typeof i)throw Error(se(191,i));i.call(r)}}}var qa={},Ha=Ss(qa),Ka=Ss(qa),Wa=Ss(qa);function Ga(e){if(e===qa)throw Error(se(174));return e}function Qa(e,t){switch(Is(Wa,t),Is(Ka,e),Is(Ha,qa),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:lt(null,"");break;default:t=lt(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ts(Ha),Is(Ha,t)}function Ya(){Ts(Ha),Ts(Ka),Ts(Wa)}function Xa(e){Ga(Wa.current);var t=Ga(Ha.current),n=lt(t,e.type);t!==n&&(Is(Ka,e),Is(Ha,n))}function Ja(e){Ka.current===e&&(Ts(Ha),Ts(Ka))}var Za=Ss(0);function eo(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(128&t.flags)return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var to=[];function no(){for(var e=0;e<to.length;e++)to[e]._workInProgressVersionPrimary=null;to.length=0}var ro=be.ReactCurrentDispatcher,io=be.ReactCurrentBatchConfig,so=0,ao=null,oo=null,lo=null,uo=!1,co=!1,ho=0,fo=0;function po(){throw Error(se(321))}function mo(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!oi(e[n],t[n]))return!1;return!0}function go(e,t,n,r,i,s){if(so=s,ao=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ro.current=null===e||null===e.memoizedState?Zo:el,e=n(r,i),co){s=0;do{if(co=!1,ho=0,25<=s)throw Error(se(301));s+=1,lo=oo=null,t.updateQueue=null,ro.current=tl,e=n(r,i)}while(co)}if(ro.current=Jo,t=null!==oo&&null!==oo.next,so=0,lo=oo=ao=null,uo=!1,t)throw Error(se(300));return e}function yo(){var e=0!==ho;return ho=0,e}function vo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===lo?ao.memoizedState=lo=e:lo=lo.next=e,lo}function wo(){if(null===oo){var e=ao.alternate;e=null!==e?e.memoizedState:null}else e=oo.next;var t=null===lo?ao.memoizedState:lo.next;if(null!==t)lo=t,oo=e;else{if(null===e)throw Error(se(310));e={memoizedState:(oo=e).memoizedState,baseState:oo.baseState,baseQueue:oo.baseQueue,queue:oo.queue,next:null},null===lo?ao.memoizedState=lo=e:lo=lo.next=e}return lo}function bo(e,t){return"function"==typeof t?t(e):t}function _o(e){var t=wo(),n=t.queue;if(null===n)throw Error(se(311));n.lastRenderedReducer=e;var r=oo,i=r.baseQueue,s=n.pending;if(null!==s){if(null!==i){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(null!==i){s=i.next,r=r.baseState;var o=a=null,l=null,u=s;do{var c=u.lane;if((so&c)===c)null!==l&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===l?(o=l=h,a=r):l=l.next=h,ao.lanes|=c,Lu|=c}u=u.next}while(null!==u&&u!==s);null===l?a=r:l.next=o,oi(r,t.memoizedState)||(vl=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{s=i.lane,ao.lanes|=s,Lu|=s,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Eo(e){var t=wo(),n=t.queue;if(null===n)throw Error(se(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(null!==i){n.pending=null;var a=i=i.next;do{s=e(s,a.action),a=a.next}while(a!==i);oi(s,t.memoizedState)||(vl=!0),t.memoizedState=s,null===t.baseQueue&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function ko(){}function So(e,t){var n=ao,r=wo(),i=t(),s=!oi(r.memoizedState,i);if(s&&(r.memoizedState=i,vl=!0),r=r.queue,Mo(Co.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||null!==lo&&1&lo.memoizedState.tag){if(n.flags|=2048,Ro(9,Io.bind(null,n,r,i,t),void 0,null),null===xu)throw Error(se(349));30&so||To(n,t,i)}return i}function To(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=ao.updateQueue)?(t={lastEffect:null,stores:null},ao.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Io(e,t,n,r){t.value=n,t.getSnapshot=r,xo(t)&&No(e)}function Co(e,t,n){return n((function(){xo(t)&&No(e)}))}function xo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!oi(e,n)}catch(r){return!0}}function No(e){var t=Oa(e,1);null!==t&&tc(t,e,1,-1)}function Ao(e){var t=vo();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bo,lastRenderedState:e},t.queue=e,e=e.dispatch=Go.bind(null,ao,e),[t.memoizedState,e]}function Ro(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=ao.updateQueue)?(t={lastEffect:null,stores:null},ao.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Po(){return wo().memoizedState}function Do(e,t,n,r){var i=vo();ao.flags|=e,i.memoizedState=Ro(1|t,n,void 0,void 0===r?null:r)}function Oo(e,t,n,r){var i=wo();r=void 0===r?null:r;var s=void 0;if(null!==oo){var a=oo.memoizedState;if(s=a.destroy,null!==r&&mo(r,a.deps))return void(i.memoizedState=Ro(t,n,s,r))}ao.flags|=e,i.memoizedState=Ro(1|t,n,s,r)}function Lo(e,t){return Do(8390656,8,e,t)}function Mo(e,t){return Oo(2048,8,e,t)}function Uo(e,t){return Oo(4,2,e,t)}function Fo(e,t){return Oo(4,4,e,t)}function Vo(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function jo(e,t,n){return n=null!=n?n.concat([e]):null,Oo(4,4,Vo.bind(null,t,e),n)}function zo(){}function Bo(e,t){var n=wo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function $o(e,t){var n=wo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function qo(e,t,n){return 21&so?(oi(n,t)||(n=gn(),ao.lanes|=n,Lu|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,vl=!0),e.memoizedState=n)}function Ho(e,t){var n=bn;bn=0!==n&&4>n?n:4,e(!0);var r=io.transition;io.transition={};try{e(!1),t()}finally{bn=n,io.transition=r}}function Ko(){return wo().memoizedState}function Wo(e,t,n){var r=ec(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Qo(e))Yo(t,n);else if(null!==(n=Da(e,t,n,r))){tc(n,e,r,Zu()),Xo(n,t,r)}}function Go(e,t,n){var r=ec(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qo(e))Yo(t,i);else{var s=e.alternate;if(0===e.lanes&&(null===s||0===s.lanes)&&null!==(s=t.lastRenderedReducer))try{var a=t.lastRenderedState,o=s(a,n);if(i.hasEagerState=!0,i.eagerState=o,oi(o,a)){var l=t.interleaved;return null===l?(i.next=i,Pa(t)):(i.next=l.next,l.next=i),void(t.interleaved=i)}}catch(af){}null!==(n=Da(e,t,i,r))&&(tc(n,e,r,i=Zu()),Xo(n,t,r))}}function Qo(e){var t=e.alternate;return e===ao||null!==t&&t===ao}function Yo(e,t){co=uo=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xo(e,t,n){if(4194240&n){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,wn(e,n)}}var Jo={readContext:Aa,useCallback:po,useContext:po,useEffect:po,useImperativeHandle:po,useInsertionEffect:po,useLayoutEffect:po,useMemo:po,useReducer:po,useRef:po,useState:po,useDebugValue:po,useDeferredValue:po,useTransition:po,useMutableSource:po,useSyncExternalStore:po,useId:po,unstable_isNewReconciler:!1},Zo={readContext:Aa,useCallback:function(e,t){return vo().memoizedState=[e,void 0===t?null:t],e},useContext:Aa,useEffect:Lo,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,Do(4194308,4,Vo.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Do(4194308,4,e,t)},useInsertionEffect:function(e,t){return Do(4,2,e,t)},useMemo:function(e,t){var n=vo();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=vo();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Wo.bind(null,ao,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},vo().memoizedState=e},useState:Ao,useDebugValue:zo,useDeferredValue:function(e){return vo().memoizedState=e},useTransition:function(){var e=Ao(!1),t=e[0];return e=Ho.bind(null,e[1]),vo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ao,i=vo();if(ia){if(void 0===n)throw Error(se(407));n=n()}else{if(n=t(),null===xu)throw Error(se(349));30&so||To(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Lo(Co.bind(null,r,s,e),[e]),r.flags|=2048,Ro(9,Io.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=vo(),t=xu.identifierPrefix;if(ia){var n=Xs;t=":"+t+"R"+(n=(Ys&~(1<<32-on(Ys)-1)).toString(32)+n),0<(n=ho++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=fo++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},el={readContext:Aa,useCallback:Bo,useContext:Aa,useEffect:Mo,useImperativeHandle:jo,useInsertionEffect:Uo,useLayoutEffect:Fo,useMemo:$o,useReducer:_o,useRef:Po,useState:function(){return _o(bo)},useDebugValue:zo,useDeferredValue:function(e){return qo(wo(),oo.memoizedState,e)},useTransition:function(){return[_o(bo)[0],wo().memoizedState]},useMutableSource:ko,useSyncExternalStore:So,useId:Ko,unstable_isNewReconciler:!1},tl={readContext:Aa,useCallback:Bo,useContext:Aa,useEffect:Mo,useImperativeHandle:jo,useInsertionEffect:Uo,useLayoutEffect:Fo,useMemo:$o,useReducer:Eo,useRef:Po,useState:function(){return Eo(bo)},useDebugValue:zo,useDeferredValue:function(e){var t=wo();return null===oo?t.memoizedState=e:qo(t,oo.memoizedState,e)},useTransition:function(){return[Eo(bo)[0],wo().memoizedState]},useMutableSource:ko,useSyncExternalStore:So,useId:Ko,unstable_isNewReconciler:!1};function nl(e,t){if(e&&e.defaultProps){for(var n in t=Ue({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rl(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:Ue({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var il={isMounted:function(e){return!!(e=e._reactInternals)&&Bt(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Zu(),i=ec(e),s=Fa(r,i);s.payload=t,null!=n&&(s.callback=n),null!==(t=Va(e,s,i))&&(tc(t,e,i,r),ja(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Zu(),i=ec(e),s=Fa(r,i);s.tag=1,s.payload=t,null!=n&&(s.callback=n),null!==(t=Va(e,s,i))&&(tc(t,e,i,r),ja(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Zu(),r=ec(e),i=Fa(n,r);i.tag=2,null!=t&&(i.callback=t),null!==(t=Va(e,i,r))&&(tc(t,e,r,n),ja(t,e,r))}};function sl(e,t,n,r,i,s,a){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,s,a):!t.prototype||!t.prototype.isPureReactComponent||(!li(n,r)||!li(i,s))}function al(e,t,n){var r=!1,i=Cs,s=t.contextType;return"object"==typeof s&&null!==s?s=Aa(s):(i=Ps(t)?As:xs.current,s=(r=null!=(r=t.contextTypes))?Rs(e,i):Cs),t=new t(n,s),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=il,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function ol(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&il.enqueueReplaceState(t,t.state,null)}function ll(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ma(e);var s=t.contextType;"object"==typeof s&&null!==s?i.context=Aa(s):(s=Ps(t)?As:xs.current,i.context=Rs(e,s)),i.state=e.memoizedState,"function"==typeof(s=t.getDerivedStateFromProps)&&(rl(e,t,s,n),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&il.enqueueReplaceState(i,i.state,null),Ba(e,n,i,r),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.flags|=4194308)}function ul(e,t){try{var n="",r=t;do{n+=ze(r),r=r.return}while(r);var i=n}catch(s){i="\nError generating stack: "+s.message+"\n"+s.stack}return{value:e,source:t,stack:i,digest:null}}function cl(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}var hl="function"==typeof WeakMap?WeakMap:Map;function dl(e,t,n){(n=Fa(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){$u||($u=!0,qu=r)},n}function fl(e,t,n){(n=Fa(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){}}var s=e.stateNode;return null!==s&&"function"==typeof s.componentDidCatch&&(n.callback=function(){"function"!=typeof r&&(null===Hu?Hu=new Set([this]):Hu.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function pl(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new hl;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Sc.bind(null,e,t,n),t.then(e,e))}function ml(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function gl(e,t,n,r,i){return 1&e.mode?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Fa(-1,1)).tag=2,Va(n,t,1))),n.lanes|=1),e)}var yl=be.ReactCurrentOwner,vl=!1;function wl(e,t,n,r){t.child=null===e?_a(t,null,n,r):ba(t,e.child,n,r)}function bl(e,t,n,r,i){n=n.render;var s=t.ref;return Na(t,i),r=go(e,t,n,r,s,i),n=yo(),null===e||vl?(ia&&n&&ea(t),t.flags|=1,wl(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,$l(e,t,i))}function _l(e,t,n,r,i){if(null===e){var s=n.type;return"function"!=typeof s||Rc(s)||void 0!==s.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Dc(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=s,El(e,t,s,r,i))}if(s=e.child,!(e.lanes&i)){var a=s.memoizedProps;if((n=null!==(n=n.compare)?n:li)(a,r)&&e.ref===t.ref)return $l(e,t,i)}return t.flags|=1,(e=Pc(s,r)).ref=t.ref,e.return=t,t.child=e}function El(e,t,n,r,i){if(null!==e){var s=e.memoizedProps;if(li(s,r)&&e.ref===t.ref){if(vl=!1,t.pendingProps=r=s,!(e.lanes&i))return t.lanes=e.lanes,$l(e,t,i);131072&e.flags&&(vl=!0)}}return Tl(e,t,n,r,i)}function kl(e,t,n){var r=t.pendingProps,i=r.children,s=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(1&t.mode){if(!(1073741824&n))return e=null!==s?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Is(Pu,Ru),Ru|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==s?s.baseLanes:n,Is(Pu,Ru),Ru|=r}else t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Is(Pu,Ru),Ru|=n;else null!==s?(r=s.baseLanes|n,t.memoizedState=null):r=n,Is(Pu,Ru),Ru|=r;return wl(e,t,i,n),t.child}function Sl(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Tl(e,t,n,r,i){var s=Ps(n)?As:xs.current;return s=Rs(t,s),Na(t,i),n=go(e,t,n,r,s,i),r=yo(),null===e||vl?(ia&&r&&ea(t),t.flags|=1,wl(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,$l(e,t,i))}function Il(e,t,n,r,i){if(Ps(n)){var s=!0;Ms(t)}else s=!1;if(Na(t,i),null===t.stateNode)Bl(e,t),al(t,n,r),ll(t,n,r,i),r=!0;else if(null===e){var a=t.stateNode,o=t.memoizedProps;a.props=o;var l=a.context,u=n.contextType;"object"==typeof u&&null!==u?u=Aa(u):u=Rs(t,u=Ps(n)?As:xs.current);var c=n.getDerivedStateFromProps,h="function"==typeof c||"function"==typeof a.getSnapshotBeforeUpdate;h||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(o!==r||l!==u)&&ol(t,a,r,u),La=!1;var d=t.memoizedState;a.state=d,Ba(t,r,a,i),l=t.memoizedState,o!==r||d!==l||Ns.current||La?("function"==typeof c&&(rl(t,n,c,r),l=t.memoizedState),(o=La||sl(t,n,o,r,d,l,u))?(h||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||("function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"==typeof a.componentDidMount&&(t.flags|=4194308)):("function"==typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=o):("function"==typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ua(e,t),o=t.memoizedProps,u=t.type===t.elementType?o:nl(t.type,o),a.props=u,h=t.pendingProps,d=a.context,"object"==typeof(l=n.contextType)&&null!==l?l=Aa(l):l=Rs(t,l=Ps(n)?As:xs.current);var f=n.getDerivedStateFromProps;(c="function"==typeof f||"function"==typeof a.getSnapshotBeforeUpdate)||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(o!==h||d!==l)&&ol(t,a,r,l),La=!1,d=t.memoizedState,a.state=d,Ba(t,r,a,i);var p=t.memoizedState;o!==h||d!==p||Ns.current||La?("function"==typeof f&&(rl(t,n,f,r),p=t.memoizedState),(u=La||sl(t,n,u,r,d,p,l)||!1)?(c||"function"!=typeof a.UNSAFE_componentWillUpdate&&"function"!=typeof a.componentWillUpdate||("function"==typeof a.componentWillUpdate&&a.componentWillUpdate(r,p,l),"function"==typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,p,l)),"function"==typeof a.componentDidUpdate&&(t.flags|=4),"function"==typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof a.componentDidUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=l,r=u):("function"!=typeof a.componentDidUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return Cl(e,t,n,r,s,i)}function Cl(e,t,n,r,i,s){Sl(e,t);var a=!!(128&t.flags);if(!r&&!a)return i&&Us(t,n,!1),$l(e,t,s);r=t.stateNode,yl.current=t;var o=a&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&a?(t.child=ba(t,e.child,null,s),t.child=ba(t,null,o,s)):wl(e,t,o,s),t.memoizedState=r.state,i&&Us(t,n,!0),t.child}function xl(e){var t=e.stateNode;t.pendingContext?Os(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Os(0,t.context,!1),Qa(e,t.containerInfo)}function Nl(e,t,n,r,i){return fa(),pa(i),t.flags|=256,wl(e,t,n,r),t.child}var Al,Rl,Pl,Dl,Ol={dehydrated:null,treeContext:null,retryLane:0};function Ll(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ml(e,t,n){var r,i=t.pendingProps,s=Za.current,a=!1,o=!!(128&t.flags);if((r=o)||(r=(null===e||null!==e.memoizedState)&&!!(2&s)),r?(a=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(s|=1),Is(Za,1&s),null===e)return ua(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(1&t.mode?"$!"===e.data?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=i.children,e=i.fallback,a?(i=t.mode,a=t.child,o={mode:"hidden",children:o},1&i||null===a?a=Lc(o,i,0,null):(a.childLanes=0,a.pendingProps=o),e=Oc(e,i,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Ll(n),t.memoizedState=Ol,e):Ul(t,o));if(null!==(s=e.memoizedState)&&null!==(r=s.dehydrated))return function(e,t,n,r,i,s,a){if(n)return 256&t.flags?(t.flags&=-257,Fl(e,t,a,r=cl(Error(se(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Lc({mode:"visible",children:r.children},i,0,null),(s=Oc(s,i,a,null)).flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,1&t.mode&&ba(t,e.child,null,a),t.child.memoizedState=Ll(a),t.memoizedState=Ol,s);if(!(1&t.mode))return Fl(e,t,a,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var o=r.dgst;return r=o,Fl(e,t,a,r=cl(s=Error(se(419)),r,void 0))}if(o=!!(a&e.childLanes),vl||o){if(null!==(r=xu)){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=i&(r.suspendedLanes|a)?0:i)&&i!==s.retryLane&&(s.retryLane=i,Oa(e,i),tc(r,e,i,-1))}return pc(),Fl(e,t,a,r=cl(Error(se(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=Ic.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,ra=us(i.nextSibling),na=t,ia=!0,sa=null,null!==e&&(Ws[Gs++]=Ys,Ws[Gs++]=Xs,Ws[Gs++]=Qs,Ys=e.id,Xs=e.overflow,Qs=t),t=Ul(t,r.children),t.flags|=4096,t)}(e,t,o,i,r,s,n);if(a){a=i.fallback,o=t.mode,r=(s=e.child).sibling;var l={mode:"hidden",children:i.children};return 1&o||t.child===s?(i=Pc(s,l)).subtreeFlags=14680064&s.subtreeFlags:((i=t.child).childLanes=0,i.pendingProps=l,t.deletions=null),null!==r?a=Pc(r,a):(a=Oc(a,o,n,null)).flags|=2,a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,o=null===(o=e.child.memoizedState)?Ll(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Ol,i}return e=(a=e.child).sibling,i=Pc(a,{mode:"visible",children:i.children}),!(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Ul(e,t){return(t=Lc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Fl(e,t,n,r){return null!==r&&pa(r),ba(t,e.child,null,n),(e=Ul(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Vl(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),xa(e.return,t,n)}function jl(e,t,n,r,i){var s=e.memoizedState;null===s?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function zl(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(wl(e,t,r.children,n),2&(r=Za.current))r=1&r|2,t.flags|=128;else{if(null!==e&&128&e.flags)e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Vl(e,n,t);else if(19===e.tag)Vl(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Is(Za,r),1&t.mode)switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===eo(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),jl(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===eo(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}jl(t,!0,n,null,s);break;case"together":jl(t,!1,null,null,void 0);break;default:t.memoizedState=null}else t.memoizedState=null;return t.child}function Bl(e,t){!(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function $l(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Lu|=t.lanes,!(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(se(153));if(null!==t.child){for(n=Pc(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Pc(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function ql(e,t){if(!ia)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Hl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Kl(e,t,n){var r=t.pendingProps;switch(ta(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Hl(t),null;case 1:case 17:return Ps(t.type)&&Ds(),Hl(t),null;case 3:return r=t.stateNode,Ya(),Ts(Ns),Ts(xs),no(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(ha(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&!(256&t.flags)||(t.flags|=1024,null!==sa&&(sc(sa),sa=null))),Rl(e,t),Hl(t),null;case 5:Ja(t);var i=Ga(Wa.current);if(n=t.type,null!==e&&null!=t.stateNode)Pl(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(se(166));return Hl(t),null}if(e=Ga(Ha.current),ha(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[ds]=t,r[fs]=s,e=!!(1&t.mode),n){case"dialog":Vi("cancel",r),Vi("close",r);break;case"iframe":case"object":case"embed":Vi("load",r);break;case"video":case"audio":for(i=0;i<Li.length;i++)Vi(Li[i],r);break;case"source":Vi("error",r);break;case"img":case"image":case"link":Vi("error",r),Vi("load",r);break;case"details":Vi("toggle",r);break;case"input":Ye(r,s),Vi("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Vi("invalid",r);break;case"textarea":it(r,s),Vi("invalid",r)}for(var a in vt(n,s),i=null,s)if(s.hasOwnProperty(a)){var o=s[a];"children"===a?"string"==typeof o?r.textContent!==o&&(!0!==s.suppressHydrationWarning&&Ji(r.textContent,o,e),i=["children",o]):"number"==typeof o&&r.textContent!==""+o&&(!0!==s.suppressHydrationWarning&&Ji(r.textContent,o,e),i=["children",""+o]):oe.hasOwnProperty(a)&&null!=o&&"onScroll"===a&&Vi("scroll",r)}switch(n){case"input":Ke(r),Ze(r,s,!0);break;case"textarea":Ke(r),at(r);break;case"select":case"option":break;default:"function"==typeof s.onClick&&(r.onclick=Zi)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{a=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=ot(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=a.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),"select"===n&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[ds]=t,e[fs]=r,Al(e,t,!1,!1),t.stateNode=e;e:{switch(a=wt(n,r),n){case"dialog":Vi("cancel",e),Vi("close",e),i=r;break;case"iframe":case"object":case"embed":Vi("load",e),i=r;break;case"video":case"audio":for(i=0;i<Li.length;i++)Vi(Li[i],e);i=r;break;case"source":Vi("error",e),i=r;break;case"img":case"image":case"link":Vi("error",e),Vi("load",e),i=r;break;case"details":Vi("toggle",e),i=r;break;case"input":Ye(e,r),i=Qe(e,r),Vi("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ue({},r,{value:void 0}),Vi("invalid",e);break;case"textarea":it(e,r),i=rt(e,r),Vi("invalid",e)}for(s in vt(n,i),o=i)if(o.hasOwnProperty(s)){var l=o[s];"style"===s?gt(e,l):"dangerouslySetInnerHTML"===s?null!=(l=l?l.__html:void 0)&&ht(e,l):"children"===s?"string"==typeof l?("textarea"!==n||""!==l)&&dt(e,l):"number"==typeof l&&dt(e,""+l):"suppressContentEditableWarning"!==s&&"suppressHydrationWarning"!==s&&"autoFocus"!==s&&(oe.hasOwnProperty(s)?null!=l&&"onScroll"===s&&Vi("scroll",e):null!=l&&we(e,s,l,a))}switch(n){case"input":Ke(e),Ze(e,r,!1);break;case"textarea":Ke(e),at(e);break;case"option":null!=r.value&&e.setAttribute("value",""+qe(r.value));break;case"select":e.multiple=!!r.multiple,null!=(s=r.value)?nt(e,!!r.multiple,s,!1):null!=r.defaultValue&&nt(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof i.onClick&&(e.onclick=Zi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Hl(t),null;case 6:if(e&&null!=t.stateNode)Dl(e,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(se(166));if(n=Ga(Wa.current),Ga(Ha.current),ha(t)){if(r=t.stateNode,n=t.memoizedProps,r[ds]=t,(s=r.nodeValue!==n)&&null!==(e=na))switch(e.tag){case 3:Ji(r.nodeValue,n,!!(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Ji(r.nodeValue,n,!!(1&e.mode))}s&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[ds]=t,t.stateNode=r}return Hl(t),null;case 13:if(Ts(Za),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ia&&null!==ra&&1&t.mode&&!(128&t.flags))da(),fa(),t.flags|=98560,s=!1;else if(s=ha(t),null!==r&&null!==r.dehydrated){if(null===e){if(!s)throw Error(se(318));if(!(s=null!==(s=t.memoizedState)?s.dehydrated:null))throw Error(se(317));s[ds]=t}else fa(),!(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Hl(t),s=!1}else null!==sa&&(sc(sa),sa=null),s=!0;if(!s)return 65536&t.flags?t:null}return 128&t.flags?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,1&t.mode&&(null===e||1&Za.current?0===Du&&(Du=3):pc())),null!==t.updateQueue&&(t.flags|=4),Hl(t),null);case 4:return Ya(),Rl(e,t),null===e&&Bi(t.stateNode.containerInfo),Hl(t),null;case 10:return Ca(t.type._context),Hl(t),null;case 19:if(Ts(Za),null===(s=t.memoizedState))return Hl(t),null;if(r=!!(128&t.flags),null===(a=s.rendering))if(r)ql(s,!1);else{if(0!==Du||null!==e&&128&e.flags)for(e=t.child;null!==e;){if(null!==(a=eo(e))){for(t.flags|=128,ql(s,!1),null!==(r=a.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(s=n).flags&=14680066,null===(a=s.alternate)?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Is(Za,1&Za.current|2),t.child}e=e.sibling}null!==s.tail&&Xt()>zu&&(t.flags|=128,r=!0,ql(s,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=eo(a))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),ql(s,!0),null===s.tail&&"hidden"===s.tailMode&&!a.alternate&&!ia)return Hl(t),null}else 2*Xt()-s.renderingStartTime>zu&&1073741824!==n&&(t.flags|=128,r=!0,ql(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(null!==(n=s.last)?n.sibling=a:t.child=a,s.last=a)}return null!==s.tail?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Xt(),t.sibling=null,n=Za.current,Is(Za,r?1&n|2:1&n),t):(Hl(t),null);case 22:case 23:return cc(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&1&t.mode?!!(1073741824&Ru)&&(Hl(t),6&t.subtreeFlags&&(t.flags|=8192)):Hl(t),null;case 24:case 25:return null}throw Error(se(156,t.tag))}function Wl(e,t){switch(ta(t),t.tag){case 1:return Ps(t.type)&&Ds(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Ya(),Ts(Ns),Ts(xs),no(),65536&(e=t.flags)&&!(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Ja(t),null;case 13:if(Ts(Za),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(se(340));fa()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ts(Za),null;case 4:return Ya(),null;case 10:return Ca(t.type._context),null;case 22:case 23:return cc(),null;default:return null}}Al=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Rl=function(){},Pl=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Ga(Ha.current);var s,a=null;switch(n){case"input":i=Qe(e,i),r=Qe(e,r),a=[];break;case"select":i=Ue({},i,{value:void 0}),r=Ue({},r,{value:void 0}),a=[];break;case"textarea":i=rt(e,i),r=rt(e,r),a=[];break;default:"function"!=typeof i.onClick&&"function"==typeof r.onClick&&(e.onclick=Zi)}for(u in vt(n,r),n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&null!=i[u])if("style"===u){var o=i[u];for(s in o)o.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(oe.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(o=null!=i?i[u]:void 0,r.hasOwnProperty(u)&&l!==o&&(null!=l||null!=o))if("style"===u)if(o){for(s in o)!o.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&o[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(a||(a=[]),a.push(u,n)),n=l;else"dangerouslySetInnerHTML"===u?(l=l?l.__html:void 0,o=o?o.__html:void 0,null!=l&&o!==l&&(a=a||[]).push(u,l)):"children"===u?"string"!=typeof l&&"number"!=typeof l||(a=a||[]).push(u,""+l):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(oe.hasOwnProperty(u)?(null!=l&&"onScroll"===u&&Vi("scroll",e),a||o===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}},Dl=function(e,t,n,r){n!==r&&(t.flags|=4)};var Gl=!1,Ql=!1,Yl="function"==typeof WeakSet?WeakSet:Set,Xl=null;function Jl(e,t){var n=e.ref;if(null!==n)if("function"==typeof n)try{n(null)}catch(r){kc(e,t,r)}else n.current=null}function Zl(e,t,n){try{n()}catch(r){kc(e,t,r)}}var eu=!1;function tu(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,void 0!==s&&Zl(t,n,s)}i=i.next}while(i!==r)}}function nu(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ru(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"==typeof t?t(e):t.current=e}}function iu(e){var t=e.alternate;null!==t&&(e.alternate=null,iu(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[ds],delete t[fs],delete t[ms],delete t[gs],delete t[ys])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function su(e){return 5===e.tag||3===e.tag||4===e.tag}function au(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||su(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ou(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=Zi));else if(4!==r&&null!==(e=e.child))for(ou(e,t,n),e=e.sibling;null!==e;)ou(e,t,n),e=e.sibling}function lu(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(lu(e,t,n),e=e.sibling;null!==e;)lu(e,t,n),e=e.sibling}var uu=null,cu=!1;function hu(e,t,n){for(n=n.child;null!==n;)du(e,t,n),n=n.sibling}function du(e,t,n){if(an&&"function"==typeof an.onCommitFiberUnmount)try{an.onCommitFiberUnmount(sn,n)}catch(o){}switch(n.tag){case 5:Ql||Jl(n,t);case 6:var r=uu,i=cu;uu=null,hu(e,t,n),cu=i,null!==(uu=r)&&(cu?(e=uu,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):uu.removeChild(n.stateNode));break;case 18:null!==uu&&(cu?(e=uu,n=n.stateNode,8===e.nodeType?ls(e.parentNode,n):1===e.nodeType&&ls(e,n),$n(e)):ls(uu,n.stateNode));break;case 4:r=uu,i=cu,uu=n.stateNode.containerInfo,cu=!0,hu(e,t,n),uu=r,cu=i;break;case 0:case 11:case 14:case 15:if(!Ql&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,void 0!==a&&(2&s||4&s)&&Zl(n,t,a),i=i.next}while(i!==r)}hu(e,t,n);break;case 1:if(!Ql&&(Jl(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){kc(n,t,o)}hu(e,t,n);break;case 21:hu(e,t,n);break;case 22:1&n.mode?(Ql=(r=Ql)||null!==n.memoizedState,hu(e,t,n),Ql=r):hu(e,t,n);break;default:hu(e,t,n)}}function fu(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Yl),t.forEach((function(t){var r=Cc.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function pu(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,a=t,o=a;e:for(;null!==o;){switch(o.tag){case 5:uu=o.stateNode,cu=!1;break e;case 3:case 4:uu=o.stateNode.containerInfo,cu=!0;break e}o=o.return}if(null===uu)throw Error(se(160));du(s,a,i),uu=null,cu=!1;var l=i.alternate;null!==l&&(l.return=null),i.return=null}catch(af){kc(i,t,af)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)mu(t,e),t=t.sibling}function mu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(pu(t,e),gu(e),4&r){try{tu(3,e,e.return),nu(3,e)}catch(rf){kc(e,e.return,rf)}try{tu(5,e,e.return)}catch(rf){kc(e,e.return,rf)}}break;case 1:pu(t,e),gu(e),512&r&&null!==n&&Jl(n,n.return);break;case 5:if(pu(t,e),gu(e),512&r&&null!==n&&Jl(n,n.return),32&e.flags){var i=e.stateNode;try{dt(i,"")}catch(rf){kc(e,e.return,rf)}}if(4&r&&null!=(i=e.stateNode)){var s=e.memoizedProps,a=null!==n?n.memoizedProps:s,o=e.type,l=e.updateQueue;if(e.updateQueue=null,null!==l)try{"input"===o&&"radio"===s.type&&null!=s.name&&Xe(i,s),wt(o,a);var u=wt(o,s);for(a=0;a<l.length;a+=2){var c=l[a],h=l[a+1];"style"===c?gt(i,h):"dangerouslySetInnerHTML"===c?ht(i,h):"children"===c?dt(i,h):we(i,c,h,u)}switch(o){case"input":Je(i,s);break;case"textarea":st(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;null!=f?nt(i,!!s.multiple,f,!1):d!==!!s.multiple&&(null!=s.defaultValue?nt(i,!!s.multiple,s.defaultValue,!0):nt(i,!!s.multiple,s.multiple?[]:"",!1))}i[fs]=s}catch(rf){kc(e,e.return,rf)}}break;case 6:if(pu(t,e),gu(e),4&r){if(null===e.stateNode)throw Error(se(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(rf){kc(e,e.return,rf)}}break;case 3:if(pu(t,e),gu(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{$n(t.containerInfo)}catch(rf){kc(e,e.return,rf)}break;case 4:default:pu(t,e),gu(e);break;case 13:pu(t,e),gu(e),8192&(i=e.child).flags&&(s=null!==i.memoizedState,i.stateNode.isHidden=s,!s||null!==i.alternate&&null!==i.alternate.memoizedState||(ju=Xt())),4&r&&fu(e);break;case 22:if(c=null!==n&&null!==n.memoizedState,1&e.mode?(Ql=(u=Ql)||c,pu(t,e),Ql=u):pu(t,e),gu(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!c&&1&e.mode)for(Xl=e,c=e.child;null!==c;){for(h=Xl=c;null!==Xl;){switch(f=(d=Xl).child,d.tag){case 0:case 11:case 14:case 15:tu(4,d,d.return);break;case 1:Jl(d,d.return);var p=d.stateNode;if("function"==typeof p.componentWillUnmount){r=d,n=d.return;try{t=r,p.props=t.memoizedProps,p.state=t.memoizedState,p.componentWillUnmount()}catch(rf){kc(r,n,rf)}}break;case 5:Jl(d,d.return);break;case 22:if(null!==d.memoizedState){bu(h);continue}}null!==f?(f.return=d,Xl=f):bu(h)}c=c.sibling}e:for(c=null,h=e;;){if(5===h.tag){if(null===c){c=h;try{i=h.stateNode,u?"function"==typeof(s=i.style).setProperty?s.setProperty("display","none","important"):s.display="none":(o=h.stateNode,a=null!=(l=h.memoizedProps.style)&&l.hasOwnProperty("display")?l.display:null,o.style.display=mt("display",a))}catch(rf){kc(e,e.return,rf)}}}else if(6===h.tag){if(null===c)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(rf){kc(e,e.return,rf)}}else if((22!==h.tag&&23!==h.tag||null===h.memoizedState||h===e)&&null!==h.child){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;null===h.sibling;){if(null===h.return||h.return===e)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:pu(t,e),gu(e),4&r&&fu(e);case 21:}}function gu(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(su(n)){var r=n;break e}n=n.return}throw Error(se(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(dt(i,""),r.flags&=-33),lu(e,au(e),i);break;case 3:case 4:var s=r.stateNode.containerInfo;ou(e,au(e),s);break;default:throw Error(se(161))}}catch(a){kc(e,e.return,a)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function yu(e,t,n){Xl=e,vu(e)}function vu(e,t,n){for(var r=!!(1&e.mode);null!==Xl;){var i=Xl,s=i.child;if(22===i.tag&&r){var a=null!==i.memoizedState||Gl;if(!a){var o=i.alternate,l=null!==o&&null!==o.memoizedState||Ql;o=Gl;var u=Ql;if(Gl=a,(Ql=l)&&!u)for(Xl=i;null!==Xl;)l=(a=Xl).child,22===a.tag&&null!==a.memoizedState?_u(i):null!==l?(l.return=a,Xl=l):_u(i);for(;null!==s;)Xl=s,vu(s),s=s.sibling;Xl=i,Gl=o,Ql=u}wu(e)}else 8772&i.subtreeFlags&&null!==s?(s.return=i,Xl=s):wu(e)}}function wu(e){for(;null!==Xl;){var t=Xl;if(8772&t.flags){var n=t.alternate;try{if(8772&t.flags)switch(t.tag){case 0:case 11:case 15:Ql||nu(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Ql)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:nl(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;null!==s&&$a(t,s,r);break;case 3:var a=t.updateQueue;if(null!==a){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}$a(t,a,n)}break;case 5:var o=t.stateNode;if(null===n&&4&t.flags){n=o;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var c=u.memoizedState;if(null!==c){var h=c.dehydrated;null!==h&&$n(h)}}}break;default:throw Error(se(163))}Ql||512&t.flags&&ru(t)}catch(sf){kc(t,t.return,sf)}}if(t===e){Xl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Xl=n;break}Xl=t.return}}function bu(e){for(;null!==Xl;){var t=Xl;if(t===e){Xl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Xl=n;break}Xl=t.return}}function _u(e){for(;null!==Xl;){var t=Xl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{nu(4,t)}catch(l){kc(t,n,l)}break;case 1:var r=t.stateNode;if("function"==typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(l){kc(t,i,l)}}var s=t.return;try{ru(t)}catch(l){kc(t,s,l)}break;case 5:var a=t.return;try{ru(t)}catch(l){kc(t,a,l)}}}catch(l){kc(t,t.return,l)}if(t===e){Xl=null;break}var o=t.sibling;if(null!==o){o.return=t.return,Xl=o;break}Xl=t.return}}var Eu,ku=Math.ceil,Su=be.ReactCurrentDispatcher,Tu=be.ReactCurrentOwner,Iu=be.ReactCurrentBatchConfig,Cu=0,xu=null,Nu=null,Au=0,Ru=0,Pu=Ss(0),Du=0,Ou=null,Lu=0,Mu=0,Uu=0,Fu=null,Vu=null,ju=0,zu=1/0,Bu=null,$u=!1,qu=null,Hu=null,Ku=!1,Wu=null,Gu=0,Qu=0,Yu=null,Xu=-1,Ju=0;function Zu(){return 6&Cu?Xt():-1!==Xu?Xu:Xu=Xt()}function ec(e){return 1&e.mode?2&Cu&&0!==Au?Au&-Au:null!==ma.transition?(0===Ju&&(Ju=gn()),Ju):0!==(e=bn)?e:e=void 0===(e=window.event)?16:Xn(e.type):1}function tc(e,t,n,r){if(50<Qu)throw Qu=0,Yu=null,Error(se(185));vn(e,n,r),2&Cu&&e===xu||(e===xu&&(!(2&Cu)&&(Mu|=n),4===Du&&ac(e,Au)),nc(e,r),1===n&&0===Cu&&!(1&t.mode)&&(zu=Xt()+500,Vs&&Bs()))}function nc(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-on(s),o=1<<a,l=i[a];-1===l?o&n&&!(o&r)||(i[a]=pn(o,t)):l<=t&&(e.expiredLanes|=o),s&=~o}}(e,t);var r=fn(e,e===xu?Au:0);if(0===r)null!==n&&Gt(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Gt(n),1===t)0===e.tag?function(e){Vs=!0,zs(e)}(oc.bind(null,e)):zs(oc.bind(null,e)),as((function(){!(6&Cu)&&Bs()})),n=null;else{switch(_n(r)){case 1:n=Zt;break;case 4:n=en;break;case 16:default:n=tn;break;case 536870912:n=rn}n=xc(n,rc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function rc(e,t){if(Xu=-1,Ju=0,6&Cu)throw Error(se(327));var n=e.callbackNode;if(_c()&&e.callbackNode!==n)return null;var r=fn(e,e===xu?Au:0);if(0===r)return null;if(30&r||r&e.expiredLanes||t)t=mc(e,r);else{t=r;var i=Cu;Cu|=2;var s=fc();for(xu===e&&Au===t||(Bu=null,zu=Xt()+500,hc(e,t));;)try{yc();break}catch(o){dc(e,o)}Ia(),Su.current=s,Cu=i,null!==Nu?t=0:(xu=null,Au=0,t=Du)}if(0!==t){if(2===t&&(0!==(i=mn(e))&&(r=i,t=ic(e,i))),1===t)throw n=Ou,hc(e,0),ac(e,r),nc(e,Xt()),n;if(6===t)ac(e,r);else{if(i=e.current.alternate,!(30&r||function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!oi(s(),i))return!1}catch(a){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)||(t=mc(e,r),2===t&&(s=mn(e),0!==s&&(r=s,t=ic(e,s))),1!==t)))throw n=Ou,hc(e,0),ac(e,r),nc(e,Xt()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(se(345));case 2:case 5:bc(e,Vu,Bu);break;case 3:if(ac(e,r),(130023424&r)===r&&10<(t=ju+500-Xt())){if(0!==fn(e,0))break;if(((i=e.suspendedLanes)&r)!==r){Zu(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=rs(bc.bind(null,e,Vu,Bu),t);break}bc(e,Vu,Bu);break;case 4:if(ac(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-on(r);s=1<<a,(a=t[a])>i&&(i=a),r&=~s}if(r=i,10<(r=(120>(r=Xt()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ku(r/1960))-r)){e.timeoutHandle=rs(bc.bind(null,e,Vu,Bu),r);break}bc(e,Vu,Bu);break;default:throw Error(se(329))}}}return nc(e,Xt()),e.callbackNode===n?rc.bind(null,e):null}function ic(e,t){var n=Fu;return e.current.memoizedState.isDehydrated&&(hc(e,t).flags|=256),2!==(e=mc(e,t))&&(t=Vu,Vu=n,null!==t&&sc(t)),e}function sc(e){null===Vu?Vu=e:Vu.push.apply(Vu,e)}function ac(e,t){for(t&=~Uu,t&=~Mu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-on(t),r=1<<n;e[n]=-1,t&=~r}}function oc(e){if(6&Cu)throw Error(se(327));_c();var t=fn(e,0);if(!(1&t))return nc(e,Xt()),null;var n=mc(e,t);if(0!==e.tag&&2===n){var r=mn(e);0!==r&&(t=r,n=ic(e,r))}if(1===n)throw n=Ou,hc(e,0),ac(e,t),nc(e,Xt()),n;if(6===n)throw Error(se(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,bc(e,Vu,Bu),nc(e,Xt()),null}function lc(e,t){var n=Cu;Cu|=1;try{return e(t)}finally{0===(Cu=n)&&(zu=Xt()+500,Vs&&Bs())}}function uc(e){null!==Wu&&0===Wu.tag&&!(6&Cu)&&_c();var t=Cu;Cu|=1;var n=Iu.transition,r=bn;try{if(Iu.transition=null,bn=1,e)return e()}finally{bn=r,Iu.transition=n,!(6&(Cu=t))&&Bs()}}function cc(){Ru=Pu.current,Ts(Pu)}function hc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,is(n)),null!==Nu)for(n=Nu.return;null!==n;){var r=n;switch(ta(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&Ds();break;case 3:Ya(),Ts(Ns),Ts(xs),no();break;case 5:Ja(r);break;case 4:Ya();break;case 13:case 19:Ts(Za);break;case 10:Ca(r.type._context);break;case 22:case 23:cc()}n=n.return}if(xu=e,Nu=e=Pc(e.current,null),Au=Ru=t,Du=0,Ou=null,Uu=Mu=Lu=0,Vu=Fu=null,null!==Ra){for(t=0;t<Ra.length;t++)if(null!==(r=(n=Ra[t]).interleaved)){n.interleaved=null;var i=r.next,s=n.pending;if(null!==s){var a=s.next;s.next=i,r.next=a}n.pending=r}Ra=null}return e}function dc(e,t){for(;;){var n=Nu;try{if(Ia(),ro.current=Jo,uo){for(var r=ao.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}uo=!1}if(so=0,lo=oo=ao=null,co=!1,ho=0,Tu.current=null,null===n||null===n.return){Du=1,Ou=t,Nu=null;break}e:{var s=e,a=n.return,o=n,l=t;if(t=Au,o.flags|=32768,null!==l&&"object"==typeof l&&"function"==typeof l.then){var u=l,c=o,h=c.tag;if(!(1&c.mode||0!==h&&11!==h&&15!==h)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=ml(a);if(null!==f){f.flags&=-257,gl(f,a,o,0,t),1&f.mode&&pl(s,u,t),l=u;var p=(t=f).updateQueue;if(null===p){var m=new Set;m.add(l),t.updateQueue=m}else p.add(l);break e}if(!(1&t)){pl(s,u,t),pc();break e}l=Error(se(426))}else if(ia&&1&o.mode){var g=ml(a);if(null!==g){!(65536&g.flags)&&(g.flags|=256),gl(g,a,o,0,t),pa(ul(l,o));break e}}s=l=ul(l,o),4!==Du&&(Du=2),null===Fu?Fu=[s]:Fu.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t,za(s,dl(0,l,t));break e;case 1:o=l;var y=s.type,v=s.stateNode;if(!(128&s.flags||"function"!=typeof y.getDerivedStateFromError&&(null===v||"function"!=typeof v.componentDidCatch||null!==Hu&&Hu.has(v)))){s.flags|=65536,t&=-t,s.lanes|=t,za(s,fl(s,o,t));break e}}s=s.return}while(null!==s)}wc(n)}catch(w){t=w,Nu===n&&null!==n&&(Nu=n=n.return);continue}break}}function fc(){var e=Su.current;return Su.current=Jo,null===e?Jo:e}function pc(){0!==Du&&3!==Du&&2!==Du||(Du=4),null===xu||!(268435455&Lu)&&!(268435455&Mu)||ac(xu,Au)}function mc(e,t){var n=Cu;Cu|=2;var r=fc();for(xu===e&&Au===t||(Bu=null,hc(e,t));;)try{gc();break}catch(nf){dc(e,nf)}if(Ia(),Cu=n,Su.current=r,null!==Nu)throw Error(se(261));return xu=null,Au=0,Du}function gc(){for(;null!==Nu;)vc(Nu)}function yc(){for(;null!==Nu&&!Qt();)vc(Nu)}function vc(e){var t=Eu(e.alternate,e,Ru);e.memoizedProps=e.pendingProps,null===t?wc(e):Nu=t,Tu.current=null}function wc(e){var t=e;do{var n=t.alternate;if(e=t.return,32768&t.flags){if(null!==(n=Wl(n,t)))return n.flags&=32767,void(Nu=n);if(null===e)return Du=6,void(Nu=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}else if(null!==(n=Kl(n,t,Ru)))return void(Nu=n);if(null!==(t=t.sibling))return void(Nu=t);Nu=t=e}while(null!==t);0===Du&&(Du=5)}function bc(e,t,n){var r=bn,i=Iu.transition;try{Iu.transition=null,bn=1,function(e,t,n,r){do{_c()}while(null!==Wu);if(6&Cu)throw Error(se(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(se(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-on(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}(e,s),e===xu&&(Nu=xu=null,Au=0),!(2064&n.subtreeFlags)&&!(2064&n.flags)||Ku||(Ku=!0,xc(tn,(function(){return _c(),null}))),s=!!(15990&n.flags),!!(15990&n.subtreeFlags)||s){s=Iu.transition,Iu.transition=null;var a=bn;bn=1;var o=Cu;Cu|=4,Tu.current=null,function(e,t){if(es=Hn,fi(e=di())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch(b){n=null;break e}var a=0,o=-1,l=-1,u=0,c=0,h=e,d=null;t:for(;;){for(var f;h!==n||0!==i&&3!==h.nodeType||(o=a+i),h!==s||0!==r&&3!==h.nodeType||(l=a+r),3===h.nodeType&&(a+=h.nodeValue.length),null!==(f=h.firstChild);)d=h,h=f;for(;;){if(h===e)break t;if(d===n&&++u===i&&(o=a),d===s&&++c===r&&(l=a),null!==(f=h.nextSibling))break;d=(h=d).parentNode}h=f}n=-1===o||-1===l?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ts={focusedElem:e,selectionRange:n},Hn=!1,Xl=t;null!==Xl;)if(e=(t=Xl).child,1028&t.subtreeFlags&&null!==e)e.return=t,Xl=e;else for(;null!==Xl;){t=Xl;try{var p=t.alternate;if(1024&t.flags)switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==p){var m=p.memoizedProps,g=p.memoizedState,y=t.stateNode,v=y.getSnapshotBeforeUpdate(t.elementType===t.type?m:nl(t.type,m),g);y.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var w=t.stateNode.containerInfo;1===w.nodeType?w.textContent="":9===w.nodeType&&w.documentElement&&w.removeChild(w.documentElement);break;default:throw Error(se(163))}}catch(b){kc(t,t.return,b)}if(null!==(e=t.sibling)){e.return=t.return,Xl=e;break}Xl=t.return}p=eu,eu=!1}(e,n),mu(n,e),pi(ts),Hn=!!es,ts=es=null,e.current=n,yu(n),Yt(),Cu=o,bn=a,Iu.transition=s}else e.current=n;if(Ku&&(Ku=!1,Wu=e,Gu=i),s=e.pendingLanes,0===s&&(Hu=null),function(e){if(an&&"function"==typeof an.onCommitFiberRoot)try{an.onCommitFiberRoot(sn,e,void 0,!(128&~e.current.flags))}catch(t){}}(n.stateNode),nc(e,Xt()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if($u)throw $u=!1,e=qu,qu=null,e;!!(1&Gu)&&0!==e.tag&&_c(),s=e.pendingLanes,1&s?e===Yu?Qu++:(Qu=0,Yu=e):Qu=0,Bs()}(e,t,n,r)}finally{Iu.transition=i,bn=r}return null}function _c(){if(null!==Wu){var e=_n(Gu),t=Iu.transition,n=bn;try{if(Iu.transition=null,bn=16>e?16:e,null===Wu)var r=!1;else{if(e=Wu,Wu=null,Gu=0,6&Cu)throw Error(se(331));var i=Cu;for(Cu|=4,Xl=e.current;null!==Xl;){var s=Xl,a=s.child;if(16&Xl.flags){var o=s.deletions;if(null!==o){for(var l=0;l<o.length;l++){var u=o[l];for(Xl=u;null!==Xl;){var c=Xl;switch(c.tag){case 0:case 11:case 15:tu(8,c,s)}var h=c.child;if(null!==h)h.return=c,Xl=h;else for(;null!==Xl;){var d=(c=Xl).sibling,f=c.return;if(iu(c),c===u){Xl=null;break}if(null!==d){d.return=f,Xl=d;break}Xl=f}}}var p=s.alternate;if(null!==p){var m=p.child;if(null!==m){p.child=null;do{var g=m.sibling;m.sibling=null,m=g}while(null!==m)}}Xl=s}}if(2064&s.subtreeFlags&&null!==a)a.return=s,Xl=a;else e:for(;null!==Xl;){if(2048&(s=Xl).flags)switch(s.tag){case 0:case 11:case 15:tu(9,s,s.return)}var y=s.sibling;if(null!==y){y.return=s.return,Xl=y;break e}Xl=s.return}}var v=e.current;for(Xl=v;null!==Xl;){var w=(a=Xl).child;if(2064&a.subtreeFlags&&null!==w)w.return=a,Xl=w;else e:for(a=v;null!==Xl;){if(2048&(o=Xl).flags)try{switch(o.tag){case 0:case 11:case 15:nu(9,o)}}catch(_){kc(o,o.return,_)}if(o===a){Xl=null;break e}var b=o.sibling;if(null!==b){b.return=o.return,Xl=b;break e}Xl=o.return}}if(Cu=i,Bs(),an&&"function"==typeof an.onPostCommitFiberRoot)try{an.onPostCommitFiberRoot(sn,e)}catch(_){}r=!0}return r}finally{bn=n,Iu.transition=t}}return!1}function Ec(e,t,n){e=Va(e,t=dl(0,t=ul(n,t),1),1),t=Zu(),null!==e&&(vn(e,1,t),nc(e,t))}function kc(e,t,n){if(3===e.tag)Ec(e,e,n);else for(;null!==t;){if(3===t.tag){Ec(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===Hu||!Hu.has(r))){t=Va(t,e=fl(t,e=ul(n,e),1),1),e=Zu(),null!==t&&(vn(t,1,e),nc(t,e));break}}t=t.return}}function Sc(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=Zu(),e.pingedLanes|=e.suspendedLanes&n,xu===e&&(Au&n)===n&&(4===Du||3===Du&&(130023424&Au)===Au&&500>Xt()-ju?hc(e,0):Uu|=n),nc(e,t)}function Tc(e,t){0===t&&(1&e.mode?(t=hn,!(130023424&(hn<<=1))&&(hn=4194304)):t=1);var n=Zu();null!==(e=Oa(e,t))&&(vn(e,t,n),nc(e,n))}function Ic(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Tc(e,n)}function Cc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(se(314))}null!==r&&r.delete(t),Tc(e,n)}function xc(e,t){return Wt(e,t)}function Nc(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ac(e,t,n,r){return new Nc(e,t,n,r)}function Rc(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Pc(e,t){var n=e.alternate;return null===n?((n=Ac(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Dc(e,t,n,r,i,s){var a=2;if(r=e,"function"==typeof e)Rc(e)&&(a=1);else if("string"==typeof e)a=5;else e:switch(e){case ke:return Oc(n.children,i,s,t);case Se:a=8,i|=8;break;case Te:return(e=Ac(12,n,t,2|i)).elementType=Te,e.lanes=s,e;case Ne:return(e=Ac(13,n,t,i)).elementType=Ne,e.lanes=s,e;case Ae:return(e=Ac(19,n,t,i)).elementType=Ae,e.lanes=s,e;case De:return Lc(n,i,s,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case Ie:a=10;break e;case Ce:a=9;break e;case xe:a=11;break e;case Re:a=14;break e;case Pe:a=16,r=null;break e}throw Error(se(130,null==e?e:typeof e,""))}return(t=Ac(a,n,t,i)).elementType=e,t.type=r,t.lanes=s,t}function Oc(e,t,n,r){return(e=Ac(7,e,r,t)).lanes=n,e}function Lc(e,t,n,r){return(e=Ac(22,e,r,t)).elementType=De,e.lanes=n,e.stateNode={isHidden:!1},e}function Mc(e,t,n){return(e=Ac(6,e,null,t)).lanes=n,e}function Uc(e,t,n){return(t=Ac(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fc(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yn(0),this.expirationTimes=yn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yn(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vc(e,t,n,r,i,s,a,o,l){return e=new Fc(e,t,n,o,l),1===t?(t=1,!0===s&&(t|=8)):t=0,s=Ac(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ma(s),e}function jc(e){if(!e)return Cs;e:{if(Bt(e=e._reactInternals)!==e||1!==e.tag)throw Error(se(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ps(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(se(171))}if(1===e.tag){var n=e.type;if(Ps(n))return Ls(e,n,t)}return t}function zc(e,t,n,r,i,s,a,o,l){return(e=Vc(n,r,!0,e,0,s,0,o,l)).context=jc(null),n=e.current,(s=Fa(r=Zu(),i=ec(n))).callback=null!=t?t:null,Va(n,s,i),e.current.lanes=i,vn(e,i,r),nc(e,r),e}function Bc(e,t,n,r){var i=t.current,s=Zu(),a=ec(i);return n=jc(n),null===t.context?t.context=n:t.pendingContext=n,(t=Fa(s,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Va(i,t,a))&&(tc(e,i,a,s),ja(e,i,a)),a}function $c(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function qc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Hc(e,t){qc(e,t),(e=e.alternate)&&qc(e,t)}Eu=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Ns.current)vl=!0;else{if(!(e.lanes&n||128&t.flags))return vl=!1,function(e,t,n){switch(t.tag){case 3:xl(t),fa();break;case 5:Xa(t);break;case 1:Ps(t.type)&&Ms(t);break;case 4:Qa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Is(Ea,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Is(Za,1&Za.current),t.flags|=128,null):n&t.child.childLanes?Ml(e,t,n):(Is(Za,1&Za.current),null!==(e=$l(e,t,n))?e.sibling:null);Is(Za,1&Za.current);break;case 19:if(r=!!(n&t.childLanes),128&e.flags){if(r)return zl(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Is(Za,Za.current),r)break;return null;case 22:case 23:return t.lanes=0,kl(e,t,n)}return $l(e,t,n)}(e,t,n);vl=!!(131072&e.flags)}else vl=!1,ia&&1048576&t.flags&&Zs(t,Ks,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Bl(e,t),e=t.pendingProps;var i=Rs(t,xs.current);Na(t,n),i=go(null,t,r,e,i,n);var s=yo();return t.flags|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ps(r)?(s=!0,Ms(t)):s=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,Ma(t),i.updater=il,t.stateNode=i,i._reactInternals=t,ll(t,r,e,n),t=Cl(null,t,r,!0,s,n)):(t.tag=0,ia&&s&&ea(t),wl(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Bl(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"==typeof e)return Rc(e)?1:0;if(null!=e){if((e=e.$$typeof)===xe)return 11;if(e===Re)return 14}return 2}(r),e=nl(r,e),i){case 0:t=Tl(null,t,r,e,n);break e;case 1:t=Il(null,t,r,e,n);break e;case 11:t=bl(null,t,r,e,n);break e;case 14:t=_l(null,t,r,nl(r.type,e),n);break e}throw Error(se(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,Tl(e,t,r,i=t.elementType===r?i:nl(r,i),n);case 1:return r=t.type,i=t.pendingProps,Il(e,t,r,i=t.elementType===r?i:nl(r,i),n);case 3:e:{if(xl(t),null===e)throw Error(se(387));r=t.pendingProps,i=(s=t.memoizedState).element,Ua(e,t),Ba(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated){if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,256&t.flags){t=Nl(e,t,r,n,i=ul(Error(se(423)),t));break e}if(r!==i){t=Nl(e,t,r,n,i=ul(Error(se(424)),t));break e}for(ra=us(t.stateNode.containerInfo.firstChild),na=t,ia=!0,sa=null,n=_a(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(fa(),r===i){t=$l(e,t,n);break e}wl(e,t,r,n)}t=t.child}return t;case 5:return Xa(t),null===e&&ua(t),r=t.type,i=t.pendingProps,s=null!==e?e.memoizedProps:null,a=i.children,ns(r,i)?a=null:null!==s&&ns(r,s)&&(t.flags|=32),Sl(e,t),wl(e,t,a,n),t.child;case 6:return null===e&&ua(t),null;case 13:return Ml(e,t,n);case 4:return Qa(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=ba(t,null,r,n):wl(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,bl(e,t,r,i=t.elementType===r?i:nl(r,i),n);case 7:return wl(e,t,t.pendingProps,n),t.child;case 8:case 12:return wl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,Is(Ea,r._currentValue),r._currentValue=a,null!==s)if(oi(s.value,a)){if(s.children===i.children&&!Ns.current){t=$l(e,t,n);break e}}else for(null!==(s=t.child)&&(s.return=t);null!==s;){var o=s.dependencies;if(null!==o){a=s.child;for(var l=o.firstContext;null!==l;){if(l.context===r){if(1===s.tag){(l=Fa(-1,n&-n)).tag=2;var u=s.updateQueue;if(null!==u){var c=(u=u.shared).pending;null===c?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,null!==(l=s.alternate)&&(l.lanes|=n),xa(s.return,n,t),o.lanes|=n;break}l=l.next}}else if(10===s.tag)a=s.type===t.type?null:s.child;else if(18===s.tag){if(null===(a=s.return))throw Error(se(341));a.lanes|=n,null!==(o=a.alternate)&&(o.lanes|=n),xa(a,n,t),a=s.sibling}else a=s.child;if(null!==a)a.return=s;else for(a=s;null!==a;){if(a===t){a=null;break}if(null!==(s=a.sibling)){s.return=a.return,a=s;break}a=a.return}s=a}wl(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Na(t,n),r=r(i=Aa(i)),t.flags|=1,wl(e,t,r,n),t.child;case 14:return i=nl(r=t.type,t.pendingProps),_l(e,t,r,i=nl(r.type,i),n);case 15:return El(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nl(r,i),Bl(e,t),t.tag=1,Ps(r)?(e=!0,Ms(t)):e=!1,Na(t,n),al(t,r,i),ll(t,r,i,n),Cl(null,t,r,!0,e,n);case 19:return zl(e,t,n);case 22:return kl(e,t,n)}throw Error(se(156,t.tag))};var Kc="function"==typeof reportError?reportError:function(e){};function Wc(e){this._internalRoot=e}function Gc(e){this._internalRoot=e}function Qc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Yc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Xc(){}function Jc(e,t,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if("function"==typeof i){var o=i;i=function(){var e=$c(a);o.call(e)}}Bc(t,a,e,i)}else a=function(e,t,n,r,i){if(i){if("function"==typeof r){var s=r;r=function(){var e=$c(a);s.call(e)}}var a=zc(t,r,e,0,null,!1,0,"",Xc);return e._reactRootContainer=a,e[ps]=a.current,Bi(8===e.nodeType?e.parentNode:e),uc(),a}for(;i=e.lastChild;)e.removeChild(i);if("function"==typeof r){var o=r;r=function(){var e=$c(l);o.call(e)}}var l=Vc(e,0,!1,null,0,!1,0,"",Xc);return e._reactRootContainer=l,e[ps]=l.current,Bi(8===e.nodeType?e.parentNode:e),uc((function(){Bc(t,l,n,r)})),l}(n,t,e,i,r);return $c(a)}Gc.prototype.render=Wc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(se(409));Bc(e,t,null,null)},Gc.prototype.unmount=Wc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;uc((function(){Bc(null,e,null,null)})),t[ps]=null}},Gc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Tn();e={blockedOn:null,target:e,priority:t};for(var n=0;n<On.length&&0!==t&&t<On[n].priority;n++);On.splice(n,0,e),0===n&&Fn(e)}},En=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dn(t.pendingLanes);0!==n&&(wn(t,1|n),nc(t,Xt()),!(6&Cu)&&(zu=Xt()+500,Bs()))}break;case 13:uc((function(){var t=Oa(e,1);if(null!==t){var n=Zu();tc(t,e,1,n)}})),Hc(e,1)}},kn=function(e){if(13===e.tag){var t=Oa(e,134217728);if(null!==t)tc(t,e,134217728,Zu());Hc(e,134217728)}},Sn=function(e){if(13===e.tag){var t=ec(e),n=Oa(e,t);if(null!==n)tc(n,e,t,Zu());Hc(e,t)}},Tn=function(){return bn},In=function(e,t){var n=bn;try{return bn=e,t()}finally{bn=n}},Et=function(e,t,n){switch(t){case"input":if(Je(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=_s(r);if(!i)throw Error(se(90));We(r),Je(r,i)}}}break;case"textarea":st(e,n);break;case"select":null!=(t=n.value)&&nt(e,!!n.multiple,t,!1)}},xt=lc,Nt=uc;var Zc={usingClientEntryPoint:!1,Events:[ws,bs,_s,It,Ct,lc]},eh={findFiberByHostInstance:vs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},th={bundleType:eh.bundleType,version:eh.version,rendererPackageName:eh.rendererPackageName,rendererConfig:eh.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:be.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ht(e))?null:e.stateNode},findFiberByHostInstance:eh.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var nh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nh.isDisabled&&nh.supportsFiber)try{sn=nh.inject(th),an=nh}catch(ct){}}Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zc,Z.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Qc(t))throw Error(se(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:Ee,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},Z.createRoot=function(e,t){if(!Qc(e))throw Error(se(299));var n=!1,r="",i=Kc;return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=Vc(e,1,!1,null,0,n,0,r,i),e[ps]=t.current,Bi(8===e.nodeType?e.parentNode:e),new Wc(t)},Z.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(se(188));throw e=Object.keys(e).join(","),Error(se(268,e))}return e=null===(e=Ht(t))?null:e.stateNode},Z.flushSync=function(e){return uc(e)},Z.hydrate=function(e,t,n){if(!Yc(t))throw Error(se(200));return Jc(null,e,t,!0,n)},Z.hydrateRoot=function(e,t,n){if(!Qc(e))throw Error(se(405));var r=null!=n&&n.hydratedSources||null,i=!1,s="",a=Kc;if(null!=n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(s=n.identifierPrefix),void 0!==n.onRecoverableError&&(a=n.onRecoverableError)),t=zc(t,null,e,1,null!=n?n:null,i,0,s,a),e[ps]=t.current,Bi(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Gc(t)},Z.render=function(e,t,n){if(!Yc(t))throw Error(se(200));return Jc(null,e,t,!1,n)},Z.unmountComponentAtNode=function(e){if(!Yc(e))throw Error(se(40));return!!e._reactRootContainer&&(uc((function(){Jc(null,null,e,!1,(function(){e._reactRootContainer=null,e[ps]=null}))})),!0)},Z.unstable_batchedUpdates=lc,Z.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Yc(n))throw Error(se(200));if(null==e||void 0===e._reactInternals)throw Error(se(38));return Jc(e,t,n,!1,r)},Z.version="18.3.1-next-f1338f8080-20240426",function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){}}(),J.exports=Z;var rh,ih,sh=J.exports;
/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ah(){return ah=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ah.apply(this,arguments)}X.createRoot=sh.createRoot,X.hydrateRoot=sh.hydrateRoot,(ih=rh||(rh={})).Pop="POP",ih.Push="PUSH",ih.Replace="REPLACE";const oh="popstate";function lh(e){return void 0===e&&(e={}),function(e,t,n,r){void 0===r&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,o=rh.Pop,l=null,u=c();null==u&&(u=0,a.replaceState(ah({},a.state,{idx:u}),""));function c(){return(a.state||{idx:null}).idx}function h(){o=rh.Pop;let e=c(),t=null==e?null:e-u;u=e,l&&l({action:o,location:m.location,delta:t})}function d(e,t){o=rh.Push;let n=dh(m.location,e,t);u=c()+1;let r=hh(n,u),h=m.createHref(n);try{a.pushState(r,"",h)}catch(d){if(d instanceof DOMException&&"DataCloneError"===d.name)throw d;i.location.assign(h)}s&&l&&l({action:o,location:m.location,delta:1})}function f(e,t){o=rh.Replace;let n=dh(m.location,e,t);u=c();let r=hh(n,u),i=m.createHref(n);a.replaceState(r,"",i),s&&l&&l({action:o,location:m.location,delta:0})}function p(e){let t="null"!==i.location.origin?i.location.origin:i.location.href,n="string"==typeof e?e:fh(e);return n=n.replace(/ $/,"%20"),uh(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}let m={get action(){return o},get location(){return e(i,a)},listen(e){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(oh,h),l=e,()=>{i.removeEventListener(oh,h),l=null}},createHref:e=>t(i,e),createURL:p,encodeLocation(e){let t=p(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:d,replace:f,go:e=>a.go(e)};return m}((function(e,t){let{pathname:n,search:r,hash:i}=e.location;return dh("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"==typeof t?t:fh(t)}),0,e)}function uh(e,t){if(!1===e||null==e)throw new Error(t)}function ch(e,t){if(!e)try{throw new Error(t)}catch(nf){}}function hh(e,t){return{usr:e.state,key:e.key,idx:t}}function dh(e,t,n,r){return void 0===n&&(n=null),ah({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?ph(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function fh(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function ph(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}var mh,gh;function yh(e,t,n){return void 0===n&&(n="/"),function(e,t,n){let r="string"==typeof t?ph(t):t,i=Rh(r.pathname||"/",n);if(null==i)return null;let s=vh(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(s);let a=null;for(let o=0;null==a&&o<s.length;++o){let e=Ah(i);a=xh(s[o],e)}return a}(e,t,n)}function vh(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let i=(e,i,s)=>{let a={relativePath:void 0===s?e.path||"":s,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};a.relativePath.startsWith("/")&&(uh(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),a.relativePath=a.relativePath.slice(r.length));let o=Lh([r,a.relativePath]),l=n.concat(a);e.children&&e.children.length>0&&(uh(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+o+'".'),vh(e.children,t,l,o)),(null!=e.path||e.index)&&t.push({path:o,score:Ch(o,e.index),routesMeta:l})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of wh(e.path))i(e,t,r);else i(e,t)})),t}function wh(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(0===r.length)return i?[s,""]:[s];let a=wh(r.join("/")),o=[];return o.push(...a.map((e=>""===e?s:[s,e].join("/")))),i&&o.push(...a),o.map((t=>e.startsWith("/")&&""===t?"/":t))}(gh=mh||(mh={})).data="data",gh.deferred="deferred",gh.redirect="redirect",gh.error="error";const bh=/^:[\w-]+$/,_h=3,Eh=2,kh=1,Sh=10,Th=-2,Ih=e=>"*"===e;function Ch(e,t){let n=e.split("/"),r=n.length;return n.some(Ih)&&(r+=Th),t&&(r+=Eh),n.filter((e=>!Ih(e))).reduce(((e,t)=>e+(bh.test(t)?_h:""===t?kh:Sh)),r)}function xh(e,t,n){let{routesMeta:r}=e,i={},s="/",a=[];for(let o=0;o<r.length;++o){let e=r[o],n=o===r.length-1,l="/"===s?t:t.slice(s.length)||"/",u=Nh({path:e.relativePath,caseSensitive:e.caseSensitive,end:n},l),c=e.route;if(!u)return null;Object.assign(i,u.params),a.push({params:i,pathname:Lh([s,u.pathname]),pathnameBase:Mh(Lh([s,u.pathnameBase])),route:c}),"/"!==u.pathnameBase&&(s=Lh([s,u.pathnameBase]))}return a}function Nh(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);ch("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let s=new RegExp(i,t?void 0:"i");return[s,r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],a=s.replace(/(.)\/+$/,"$1"),o=i.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:i}=t;if("*"===r){let e=o[n]||"";a=s.slice(0,s.length-e.length).replace(/(.)\/+$/,"$1")}const l=o[n];return e[r]=i&&!l?void 0:(l||"").replace(/%2F/g,"/"),e}),{}),pathname:s,pathnameBase:a,pattern:e}}function Ah(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return ch(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function Rh(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function Ph(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function Dh(e,t){let n=function(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}(e);return t?n.map(((e,t)=>t===n.length-1?e.pathname:e.pathnameBase)):n.map((e=>e.pathnameBase))}function Oh(e,t,n,r){let i;void 0===r&&(r=!1),"string"==typeof e?i=ph(e):(i=ah({},e),uh(!i.pathname||!i.pathname.includes("?"),Ph("?","pathname","search",i)),uh(!i.pathname||!i.pathname.includes("#"),Ph("#","pathname","hash",i)),uh(!i.search||!i.search.includes("#"),Ph("#","search","hash",i)));let s,a=""===e||""===i.pathname,o=a?"/":i.pathname;if(null==o)s=n;else{let e=t.length-1;if(!r&&o.startsWith("..")){let t=o.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}s=e>=0?t[e]:"/"}let l=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:i=""}="string"==typeof e?ph(e):e,s=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:s,search:Uh(r),hash:Fh(i)}}(i,s),u=o&&"/"!==o&&o.endsWith("/"),c=(a||"."===o)&&n.endsWith("/");return l.pathname.endsWith("/")||!u&&!c||(l.pathname+="/"),l}const Lh=e=>e.join("/").replace(/\/\/+/g,"/"),Mh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Uh=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",Fh=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";const Vh=["post","put","patch","delete"];new Set(Vh);const jh=["get",...Vh];
/**
 * React Router v6.28.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function zh(){return zh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zh.apply(this,arguments)}new Set(jh);const Bh=j.createContext(null),$h=j.createContext(null),qh=j.createContext(null),Hh=j.createContext(null),Kh=j.createContext({outlet:null,matches:[],isDataRoute:!1}),Wh=j.createContext(null);function Gh(){return null!=j.useContext(Hh)}function Qh(){return Gh()||uh(!1),j.useContext(Hh).location}function Yh(e){j.useContext(qh).static||j.useLayoutEffect(e)}function Xh(){let{isDataRoute:e}=j.useContext(Kh);return e?function(){let{router:e}=function(){let e=j.useContext(Bh);return e||uh(!1),e}(sd.UseNavigateStable),t=od(ad.UseNavigateStable),n=j.useRef(!1);return Yh((()=>{n.current=!0})),j.useCallback((function(r,i){void 0===i&&(i={}),n.current&&("number"==typeof r?e.navigate(r):e.navigate(r,zh({fromRouteId:t},i)))}),[e,t])}():function(){Gh()||uh(!1);let e=j.useContext(Bh),{basename:t,future:n,navigator:r}=j.useContext(qh),{matches:i}=j.useContext(Kh),{pathname:s}=Qh(),a=JSON.stringify(Dh(i,n.v7_relativeSplatPath)),o=j.useRef(!1);return Yh((()=>{o.current=!0})),j.useCallback((function(n,i){if(void 0===i&&(i={}),!o.current)return;if("number"==typeof n)return void r.go(n);let l=Oh(n,JSON.parse(a),s,"path"===i.relative);null==e&&"/"!==t&&(l.pathname="/"===l.pathname?t:Lh([t,l.pathname])),(i.replace?r.replace:r.push)(l,i.state,i)}),[t,r,a,s,e])}()}const Jh=j.createContext(null);function Zh(e,t){let{relative:n}=void 0===t?{}:t,{future:r}=j.useContext(qh),{matches:i}=j.useContext(Kh),{pathname:s}=Qh(),a=JSON.stringify(Dh(i,r.v7_relativeSplatPath));return j.useMemo((()=>Oh(e,JSON.parse(a),s,"path"===n)),[e,a,s,n])}function ed(e,t){return function(e,t,n,r){Gh()||uh(!1);let{navigator:i}=j.useContext(qh),{matches:s}=j.useContext(Kh),a=s[s.length-1],o=a?a.params:{};!a||a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let u,c=Qh();if(t){var h;let e="string"==typeof t?ph(t):t;"/"===l||(null==(h=e.pathname)?void 0:h.startsWith(l))||uh(!1),u=e}else u=c;let d=u.pathname||"/",f=d;if("/"!==l){let e=l.replace(/^\//,"").split("/");f="/"+d.replace(/^\//,"").split("/").slice(e.length).join("/")}let p=yh(e,{pathname:f}),m=function(e,t,n,r){var i;void 0===t&&(t=[]);void 0===n&&(n=null);void 0===r&&(r=null);if(null==e){var s;if(!n)return null;if(n.errors)e=n.matches;else{if(!(null!=(s=r)&&s.v7_partialHydration&&0===t.length&&!n.initialized&&n.matches.length>0))return null;e=n.matches}}let a=e,o=null==(i=n)?void 0:i.errors;if(null!=o){let e=a.findIndex((e=>e.route.id&&void 0!==(null==o?void 0:o[e.route.id])));e>=0||uh(!1),a=a.slice(0,Math.min(a.length,e+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<a.length;c++){let e=a[c];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(u=c),e.route.id){let{loaderData:t,errors:r}=n,i=e.route.loader&&void 0===t[e.route.id]&&(!r||void 0===r[e.route.id]);if(e.route.lazy||i){l=!0,a=u>=0?a.slice(0,u+1):[a[0]];break}}}return a.reduceRight(((e,r,i)=>{let s,c=!1,h=null,d=null;n&&(s=o&&r.route.id?o[r.route.id]:void 0,h=r.route.errorElement||nd,l&&(u<0&&0===i?(c=!0,d=null):u===i&&(c=!0,d=r.route.hydrateFallbackElement||null)));let f=t.concat(a.slice(0,i+1)),p=()=>{let t;return t=s?h:c?d:r.route.Component?j.createElement(r.route.Component,null):r.route.element?r.route.element:e,j.createElement(id,{match:r,routeContext:{outlet:e,matches:f,isDataRoute:null!=n},children:t})};return n&&(r.route.ErrorBoundary||r.route.errorElement||0===i)?j.createElement(rd,{location:n.location,revalidation:n.revalidation,component:h,error:s,children:p(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):p()}),null)}(p&&p.map((e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Lh([l,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?l:Lh([l,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),s,n,r);if(t&&m)return j.createElement(Hh.Provider,{value:{location:zh({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:rh.Pop}},m);return m}(e,t)}function td(){let e=function(){var e;let t=j.useContext(Wh),n=function(){let e=j.useContext($h);return e||uh(!1),e}(ad.UseRouteError),r=od(ad.UseRouteError);if(void 0!==t)return t;return null==(e=n.errors)?void 0:e[r]}(),t=function(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:r},n):null,null)}const nd=j.createElement(td,null);class rd extends j.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){}render(){return void 0!==this.state.error?j.createElement(Kh.Provider,{value:this.props.routeContext},j.createElement(Wh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function id(e){let{routeContext:t,match:n,children:r}=e,i=j.useContext(Bh);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(Kh.Provider,{value:t},r)}var sd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(sd||{}),ad=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ad||{});function od(e){let t=function(){let e=j.useContext(Kh);return e||uh(!1),e}(),n=t.matches[t.matches.length-1];return n.route.id||uh(!1),n.route.id}const ld={};const ud=(e,t,n)=>{var r;ld[r="⚠️ React Router Future Flag Warning: "+t+". You can use the `"+e+"` future flag to opt-in early. For more information, see "+n+"."]||(ld[r]=!0)};function cd(e){return function(e){let t=j.useContext(Kh).outlet;return t?j.createElement(Jh.Provider,{value:e},t):t}(e.context)}function hd(e){uh(!1)}function dd(e){let{basename:t="/",children:n=null,location:r,navigationType:i=rh.Pop,navigator:s,static:a=!1,future:o}=e;Gh()&&uh(!1);let l=t.replace(/^\/*/,"/"),u=j.useMemo((()=>({basename:l,navigator:s,static:a,future:zh({v7_relativeSplatPath:!1},o)})),[l,o,s,a]);"string"==typeof r&&(r=ph(r));let{pathname:c="/",search:h="",hash:d="",state:f=null,key:p="default"}=r,m=j.useMemo((()=>{let e=Rh(c,l);return null==e?null:{location:{pathname:e,search:h,hash:d,state:f,key:p},navigationType:i}}),[l,c,h,d,f,p,i]);return null==m?null:j.createElement(qh.Provider,{value:u},j.createElement(Hh.Provider,{children:n,value:m}))}function fd(e){let{children:t,location:n}=e;return ed(pd(t),n)}function pd(e,t){void 0===t&&(t=[]);let n=[];return j.Children.forEach(e,((e,r)=>{if(!j.isValidElement(e))return;let i=[...t,r];if(e.type===j.Fragment)return void n.push.apply(n,pd(e.props.children,i));e.type!==hd&&uh(!1),e.props.index&&e.props.children&&uh(!1);let s={id:e.props.id||i.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(s.children=pd(e.props.children,i)),n.push(s)})),n}
/**
 * React Router DOM v6.28.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function md(){return md=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},md.apply(this,arguments)}new Promise((()=>{}));const gd=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"];try{window.__reactRouterVersion="6"}catch(nf){}const yd=B.startTransition;function vd(e){let{basename:t,children:n,future:r,window:i}=e,s=j.useRef();null==s.current&&(s.current=lh({window:i,v5Compat:!0}));let a=s.current,[o,l]=j.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},c=j.useCallback((e=>{u&&yd?yd((()=>l(e))):l(e)}),[l,u]);return j.useLayoutEffect((()=>a.listen(c)),[a,c]),j.useEffect((()=>{return void 0===(null==(e=r)?void 0:e.v7_startTransition)&&ud("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),void(void 0!==(null==e?void 0:e.v7_relativeSplatPath)||t||ud("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"));var e,t}),[r]),j.createElement(dd,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:a,future:r})}const wd="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,bd=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_d=j.forwardRef((function(e,t){let n,{onClick:r,relative:i,reloadDocument:s,replace:a,state:o,target:l,to:u,preventScrollReset:c,viewTransition:h}=e,d=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,gd),{basename:f}=j.useContext(qh),p=!1;if("string"==typeof u&&bd.test(u)&&(n=u,wd))try{let e=new URL(window.location.href),t=u.startsWith("//")?new URL(e.protocol+u):new URL(u),n=Rh(t.pathname,f);t.origin===e.origin&&null!=n?u=n+t.search+t.hash:p=!0}catch(nf){}let m=function(e,t){let{relative:n}=void 0===t?{}:t;Gh()||uh(!1);let{basename:r,navigator:i}=j.useContext(qh),{hash:s,pathname:a,search:o}=Zh(e,{relative:n}),l=a;return"/"!==r&&(l="/"===a?r:Lh([r,a])),i.createHref({pathname:l,search:o,hash:s})}(u,{relative:i}),g=function(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:a,viewTransition:o}=void 0===t?{}:t,l=Xh(),u=Qh(),c=Zh(e,{relative:a});return j.useCallback((t=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,n)){t.preventDefault();let n=void 0!==r?r:fh(u)===fh(c);l(e,{replace:n,state:i,preventScrollReset:s,relative:a,viewTransition:o})}}),[u,l,c,r,i,n,e,s,a,o])}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */(u,{replace:a,state:o,target:l,preventScrollReset:c,relative:i,viewTransition:h});return j.createElement("a",md({},d,{href:n||m,onClick:p||s?r:function(e){r&&r(e),e.defaultPrevented||g(e)},ref:t,target:l}))}));var Ed,kd,Sd,Td;(kd=Ed||(Ed={})).UseScrollRestoration="useScrollRestoration",kd.UseSubmit="useSubmit",kd.UseSubmitFetcher="useSubmitFetcher",kd.UseFetcher="useFetcher",kd.useViewTransitionState="useViewTransitionState",(Td=Sd||(Sd={})).UseFetcher="useFetcher",Td.UseFetchers="useFetchers",Td.UseScrollRestoration="useScrollRestoration";var Id={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=(e,t)=>{const n=j.forwardRef((({color:n="currentColor",size:r=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:a="",children:o,...l},u)=>{return j.createElement("svg",{ref:u,...Id,width:r,height:r,stroke:n,strokeWidth:s?24*Number(i)/Number(r):i,className:["lucide",`lucide-${c=e,c.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim()}`,a].join(" "),...l},[...t.map((([e,t])=>j.createElement(e,t))),...Array.isArray(o)?o:[o]]);var c}));return n.displayName=`${e}`,n},xd=Cd("Glasses",[["circle",{cx:"6",cy:"15",r:"4",key:"vux9w4"}],["circle",{cx:"18",cy:"15",r:"4",key:"18o8ve"}],["path",{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2",key:"1ag4bs"}],["path",{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2",key:"1hm1gs"}],["path",{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2",key:"1r31ai"}]]),Nd=Cd("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),Ad=Cd("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);let Rd,Pd,Dd,Od={data:""},Ld=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Md=/\/\*[^]*?\*\/|  +/g,Ud=/\n+/g,Fd=(e,t)=>{let n="",r="",i="";for(let s in e){let a=e[s];"@"==s[0]?"i"==s[1]?n=s+" "+a+";":r+="f"==s[1]?Fd(a,s):s+"{"+Fd(a,"k"==s[1]?"":t)+"}":"object"==typeof a?r+=Fd(a,t?t.replace(/([^,])+/g,(e=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):s):null!=a&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=Fd.p?Fd.p(s,a):s+":"+a+";")}return n+(t&&i?t+"{"+i+"}":i)+r},Vd={},jd=e=>{if("object"==typeof e){let t="";for(let n in e)t+=n+jd(e[n]);return t}return e};function zd(e){let t=this||{},n=e.call?e(t.p):e;return((e,t,n,r,i)=>{let s=jd(e),a=Vd[s]||(Vd[s]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return"go"+n})(s));if(!Vd[a]){let t=s!==e?e:(e=>{let t,n,r=[{}];for(;t=Ld.exec(e.replace(Md,""));)t[4]?r.shift():t[3]?(n=t[3].replace(Ud," ").trim(),r.unshift(r[0][n]=r[0][n]||{})):r[0][t[1]]=t[2].replace(Ud," ").trim();return r[0]})(e);Vd[a]=Fd(i?{["@keyframes "+a]:t}:t,n?"":"."+a)}let o=n&&Vd.g?Vd.g:null;return n&&(Vd.g=Vd[a]),l=Vd[a],u=t,c=r,(h=o)?u.data=u.data.replace(h,l):-1===u.data.indexOf(l)&&(u.data=c?l+u.data:u.data+l),a;var l,u,c,h})(n.unshift?n.raw?((e,t,n)=>e.reduce(((e,r,i)=>{let s=t[i];if(s&&s.call){let e=s(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;s=t?"."+t:e&&"object"==typeof e?e.props?"":Fd(e,""):!1===e?"":e}return e+r+(null==s?"":s)}),""))(n,[].slice.call(arguments,1),t.p):n.reduce(((e,n)=>Object.assign(e,n&&n.call?n(t.p):n)),{}):n,(r=t.target,"object"==typeof window?((r?r.querySelector("#_goober"):window._goober)||Object.assign((r||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:r||Od),t.g,t.o,t.k);var r}zd.bind({g:1});let Bd=zd.bind({k:1});function $d(e,t){let n=this||{};return function(){let t=arguments;return function r(i,s){let a=Object.assign({},i),o=a.className||r.className;n.p=Object.assign({theme:Pd&&Pd()},a),n.o=/ *go\d+/.test(o),a.className=zd.apply(n,t)+(o?" "+o:"");let l=e;return e[0]&&(l=a.as||e,delete a.as),Dd&&l[0]&&Dd(a),Rd(l,a)}}}var qd=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,Hd=(()=>{let e=0;return()=>(++e).toString()})(),Kd=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),Wd=new Map,Gd=e=>{if(Wd.has(e))return;let t=setTimeout((()=>{Wd.delete(e),Jd({type:4,toastId:e})}),1e3);Wd.set(e,t)},Qd=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&(e=>{let t=Wd.get(e);t&&clearTimeout(t)})(t.toast.id),{...e,toasts:e.toasts.map((e=>e.id===t.toast.id?{...e,...t.toast}:e))};case 2:let{toast:n}=t;return e.toasts.find((e=>e.id===n.id))?Qd(e,{type:1,toast:n}):Qd(e,{type:0,toast:n});case 3:let{toastId:r}=t;return r?Gd(r):e.toasts.forEach((e=>{Gd(e.id)})),{...e,toasts:e.toasts.map((e=>e.id===r||void 0===r?{...e,visible:!1}:e))};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter((e=>e.id!==t.toastId))};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map((e=>({...e,pauseDuration:e.pauseDuration+i})))}}},Yd=[],Xd={toasts:[],pausedAt:void 0},Jd=e=>{Xd=Qd(Xd,e),Yd.forEach((e=>{e(Xd)}))},Zd={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},ef=e=>(t,n)=>{let r=((e,t="blank",n)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||Hd()}))(t,e,n);return Jd({type:2,toast:r}),r.id},tf=(e,t)=>ef("blank")(e,t);tf.error=ef("error"),tf.success=ef("success"),tf.loading=ef("loading"),tf.custom=ef("custom"),tf.dismiss=e=>{Jd({type:3,toastId:e})},tf.remove=e=>Jd({type:4,toastId:e}),tf.promise=(e,t,n)=>{let r=tf.loading(t.loading,{...n,...null==n?void 0:n.loading});return e.then((e=>(tf.success(qd(t.success,e),{id:r,...n,...null==n?void 0:n.success}),e))).catch((e=>{tf.error(qd(t.error,e),{id:r,...n,...null==n?void 0:n.error})})),e};var nf,rf,sf,af,of=(e,t)=>{Jd({type:1,toast:{id:e,height:t}})},lf=()=>{Jd({type:5,time:Date.now()})},uf=e=>{let{toasts:t,pausedAt:n}=((e={})=>{let[t,n]=j.useState(Xd);j.useEffect((()=>(Yd.push(n),()=>{let e=Yd.indexOf(n);e>-1&&Yd.splice(e,1)})),[t]);let r=t.toasts.map((t=>{var n,r;return{...e,...e[t.type],...t,duration:t.duration||(null==(n=e[t.type])?void 0:n.duration)||(null==e?void 0:e.duration)||Zd[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}}));return{...t,toasts:r}})(e);j.useEffect((()=>{if(n)return;let e=Date.now(),r=t.map((t=>{if(t.duration===1/0)return;let n=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(n<0))return setTimeout((()=>tf.dismiss(t.id)),n);t.visible&&tf.dismiss(t.id)}));return()=>{r.forEach((e=>e&&clearTimeout(e)))}}),[t,n]);let r=j.useCallback((()=>{n&&Jd({type:6,time:Date.now()})}),[n]),i=j.useCallback(((e,n)=>{let{reverseOrder:r=!1,gutter:i=8,defaultPosition:s}=n||{},a=t.filter((t=>(t.position||s)===(e.position||s)&&t.height)),o=a.findIndex((t=>t.id===e.id)),l=a.filter(((e,t)=>t<o&&e.visible)).length;return a.filter((e=>e.visible)).slice(...r?[l+1]:[0,l]).reduce(((e,t)=>e+(t.height||0)+i),0)}),[t]);return{toasts:t,handlers:{updateHeight:of,startPause:lf,endPause:r,calculateOffset:i}}},cf=Bd`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,hf=Bd`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,df=Bd`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ff=$d("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${cf} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${hf} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${df} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,pf=Bd`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,mf=$d("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${pf} 1s linear infinite;
`,gf=Bd`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,yf=Bd`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,vf=$d("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${gf} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${yf} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,wf=$d("div")`
  position: absolute;
`,bf=$d("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,_f=Bd`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ef=$d("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${_f} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,kf=({toast:e})=>{let{icon:t,type:n,iconTheme:r}=e;return void 0!==t?"string"==typeof t?j.createElement(Ef,null,t):t:"blank"===n?null:j.createElement(bf,null,j.createElement(mf,{...r}),"loading"!==n&&j.createElement(wf,null,"error"===n?j.createElement(ff,{...r}):j.createElement(vf,{...r})))},Sf=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,Tf=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,If=$d("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Cf=$d("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,xf=j.memo((({toast:e,position:t,style:n,children:r})=>{let i=e.height?((e,t)=>{let n=e.includes("top")?1:-1,[r,i]=Kd()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Sf(n),Tf(n)];return{animation:t?`${Bd(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Bd(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},s=j.createElement(kf,{toast:e}),a=j.createElement(Cf,{...e.ariaProps},qd(e.message,e));return j.createElement(If,{className:e.className,style:{...i,...n,...e.style}},"function"==typeof r?r({icon:s,message:a}):j.createElement(j.Fragment,null,s,a))}));nf=j.createElement,Fd.p=rf,Rd=nf,Pd=sf,Dd=af;var Nf=({id:e,className:t,style:n,onHeightUpdate:r,children:i})=>{let s=j.useCallback((t=>{if(t){let n=()=>{let n=t.getBoundingClientRect().height;r(e,n)};n(),new MutationObserver(n).observe(t,{subtree:!0,childList:!0,characterData:!0})}}),[e,r]);return j.createElement("div",{ref:s,className:t,style:n},i)},Af=zd`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Rf=({reverseOrder:e,position:t="top-center",toastOptions:n,gutter:r,children:i,containerStyle:s,containerClassName:a})=>{let{toasts:o,handlers:l}=uf(n);return j.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...s},className:a,onMouseEnter:l.startPause,onMouseLeave:l.endPause},o.map((n=>{let s=n.position||t,a=((e,t)=>{let n=e.includes("top"),r=n?{top:0}:{bottom:0},i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Kd()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(n?1:-1)}px)`,...r,...i}})(s,l.calculateOffset(n,{reverseOrder:e,gutter:r,defaultPosition:t}));return j.createElement(Nf,{id:n.id,key:n.id,onHeightUpdate:l.updateHeight,className:n.visible?Af:"",style:a},"custom"===n.type?qd(n.message,n):i?i(n):j.createElement(xf,{toast:n,position:s}))})))},Pf={};
/**
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
 */
const Df=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Of={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,a=s?e[i+1]:0,o=i+2<e.length,l=o?e[i+2]:0,u=t>>2,c=(3&t)<<4|a>>4;let h=(15&a)<<2|l>>6,d=63&l;o||(d=64,s||(h=64)),r.push(n[u],n[c],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Df(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i;const a=i<e.length?n[e.charAt(i)]:64;++i;const o=i<e.length?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==a||null==o)throw new Lf;const l=t<<2|s>>4;if(r.push(l),64!==a){const e=s<<4&240|a>>2;if(r.push(e),64!==o){const e=a<<6&192|o;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Lf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Mf=function(e){return function(e){const t=Df(e);return Of.encodeByteArray(t,!0)}(e).replace(/\./g,"")},Uf=function(e){try{return Of.decodeString(e,!0)}catch(nf){}return null};
/**
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
 */
const Ff=()=>
/**
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
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Vf=()=>{try{return Ff()||(()=>{if("undefined"==typeof process)return;const e=Pf.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(nf){return}const t=e&&Uf(e[1]);return t&&JSON.parse(t)})()}catch(nf){return}},jf=e=>{var t,n;return null===(n=null===(t=Vf())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},zf=e=>{const t=jf(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Bf=()=>{var e;return null===(e=Vf())||void 0===e?void 0:e.config},$f=e=>{var t;return null===(t=Vf())||void 0===t?void 0:t[`_${e}`]};
/**
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
 */
class qf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
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
 */
/**
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
 */
function Hf(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Kf(){return!function(){var e;const t=null===(e=Vf())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(nf){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}class Wf extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Wf.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gf.prototype.create)}}class Gf{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(Qf,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",a=`${this.serviceName}: ${s} (${r}).`;return new Wf(r,a,n)}}const Qf=/\{\$([^}]+)}/g;function Yf(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(Xf(n)&&Xf(s)){if(!Yf(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Xf(e){return null!==e&&"object"==typeof e}
/**
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
 */function Jf(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}class Zf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=ep),void 0===r.error&&(r.error=ep),void 0===r.complete&&(r.complete=ep);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(nf){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(nf){"undefined"!=typeof console&&console.error}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function ep(){}
/**
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
 */function tp(e){return e&&e._delegate?e._delegate:e}class np{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
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
 */const rp="[DEFAULT]";
/**
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
 */class ip{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new qf;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(nf){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(nf){if(r)return null;throw nf}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:rp})}catch(nf){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(nf){}}}}clearInstance(e=rp){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=rp){return this.instances.has(e)}getOptions(e=rp){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(i)&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===rp?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}var r;return n||null}normalizeInstanceIdentifier(e=rp){return this.component?this.component.multipleInstances?e:rp:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class sp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ip(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
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
 */var ap,op;(op=ap||(ap={}))[op.DEBUG=0]="DEBUG",op[op.VERBOSE=1]="VERBOSE",op[op.INFO=2]="INFO",op[op.WARN=3]="WARN",op[op.ERROR=4]="ERROR",op[op.SILENT=5]="SILENT";const lp={debug:ap.DEBUG,verbose:ap.VERBOSE,info:ap.INFO,warn:ap.WARN,error:ap.ERROR,silent:ap.SILENT},up=ap.INFO,cp={[ap.DEBUG]:"log",[ap.VERBOSE]:"log",[ap.INFO]:"info",[ap.WARN]:"warn",[ap.ERROR]:"error"},hp=(e,t,...n)=>{if(t<e.logLevel)return;(new Date).toISOString();if(!cp[t])throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class dp{constructor(e){this.name=e,this._logLevel=up,this._logHandler=hp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ap))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?lp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ap.DEBUG,...e),this._logHandler(this,ap.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ap.VERBOSE,...e),this._logHandler(this,ap.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ap.INFO,...e),this._logHandler(this,ap.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ap.WARN,...e),this._logHandler(this,ap.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ap.ERROR,...e),this._logHandler(this,ap.ERROR,...e)}}let fp,pp;const mp=new WeakMap,gp=new WeakMap,yp=new WeakMap,vp=new WeakMap,wp=new WeakMap;let bp={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return gp.get(e);if("objectStoreNames"===t)return e.objectStoreNames||yp.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kp(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function _p(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(pp||(pp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Sp(this),t),kp(mp.get(this))}:function(...t){return kp(e.apply(Sp(this),t))}:function(t,...n){const r=e.call(Sp(this),t,...n);return yp.set(r,t.sort?t.sort():[t]),kp(r)}}function Ep(e){return"function"==typeof e?_p(e):(e instanceof IDBTransaction&&function(e){if(gp.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));gp.set(e,t)}(e),t=e,(fp||(fp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,bp):e);var t}function kp(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(kp(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&mp.set(t,e)})).catch((()=>{})),wp.set(t,e),t}(e);if(vp.has(e))return vp.get(e);const t=Ep(e);return t!==e&&(vp.set(e,t),wp.set(t,e)),t}const Sp=e=>wp.get(e);const Tp=["get","getKey","getAll","getAllKeys","count"],Ip=["put","add","delete","clear"],Cp=new Map;function xp(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Cp.get(t))return Cp.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Ip.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Tp.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let a=s.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),i&&s.done]))[0]};return Cp.set(t,s),s}bp=(e=>({...e,get:(t,n,r)=>xp(t,n)||e.get(t,n,r),has:(t,n)=>!!xp(t,n)||e.has(t,n)}))(bp);
/**
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
 */
class Np{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Ap="@firebase/app",Rp="0.10.13",Pp=new dp("@firebase/app"),Dp="@firebase/app-compat",Op="@firebase/analytics-compat",Lp="@firebase/analytics",Mp="@firebase/app-check-compat",Up="@firebase/app-check",Fp="@firebase/auth",Vp="@firebase/auth-compat",jp="@firebase/database",zp="@firebase/data-connect",Bp="@firebase/database-compat",$p="@firebase/functions",qp="@firebase/functions-compat",Hp="@firebase/installations",Kp="@firebase/installations-compat",Wp="@firebase/messaging",Gp="@firebase/messaging-compat",Qp="@firebase/performance",Yp="@firebase/performance-compat",Xp="@firebase/remote-config",Jp="@firebase/remote-config-compat",Zp="@firebase/storage",em="@firebase/storage-compat",tm="@firebase/firestore",nm="@firebase/vertexai-preview",rm="@firebase/firestore-compat",im="firebase",sm="[DEFAULT]",am={[Ap]:"fire-core",[Dp]:"fire-core-compat",[Lp]:"fire-analytics",[Op]:"fire-analytics-compat",[Up]:"fire-app-check",[Mp]:"fire-app-check-compat",[Fp]:"fire-auth",[Vp]:"fire-auth-compat",[jp]:"fire-rtdb",[zp]:"fire-data-connect",[Bp]:"fire-rtdb-compat",[$p]:"fire-fn",[qp]:"fire-fn-compat",[Hp]:"fire-iid",[Kp]:"fire-iid-compat",[Wp]:"fire-fcm",[Gp]:"fire-fcm-compat",[Qp]:"fire-perf",[Yp]:"fire-perf-compat",[Xp]:"fire-rc",[Jp]:"fire-rc-compat",[Zp]:"fire-gcs",[em]:"fire-gcs-compat",[tm]:"fire-fst",[rm]:"fire-fst-compat",[nm]:"fire-vertex","fire-js":"fire-js",[im]:"fire-js-all"},om=new Map,lm=new Map,um=new Map;function cm(e,t){try{e.container.addComponent(t)}catch(nf){Pp.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,nf)}}function hm(e){const t=e.name;if(um.has(t))return Pp.debug(`There were multiple attempts to register component ${t}.`),!1;um.set(t,e);for(const n of om.values())cm(n,e);for(const n of lm.values())cm(n,e);return!0}function dm(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function fm(e){return void 0!==e.settings}
/**
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
 */const pm=new Gf("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
/**
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
 */
class mm{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new np("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pm.create("app-deleted",{appName:this._name})}}
/**
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
 */const gm="10.14.1";function ym(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:sm,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw pm.create("bad-app-name",{appName:String(i)});if(n||(n=Bf()),!n)throw pm.create("no-options");const s=om.get(i);if(s){if(Yf(n,s.options)&&Yf(r,s.config))return s;throw pm.create("duplicate-app",{appName:i})}const a=new sp(i);for(const l of um.values())a.addComponent(l);const o=new mm(n,r,a);return om.set(i,o),o}function vm(e=sm){const t=om.get(e);if(!t&&e===sm&&Bf())return ym();if(!t)throw pm.create("no-app",{appName:e});return t}function wm(e,t,n){var r;let i=null!==(r=am[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Pp.warn(e.join(" "))}hm(new np(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
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
 */const bm="firebase-heartbeat-store";let _m=null;function Em(){return _m||(_m=function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(e,t),o=kp(a);return r&&a.addEventListener("upgradeneeded",(e=>{r(kp(a.result),e.oldVersion,e.newVersion,kp(a.transaction),e)})),n&&a.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),o.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),o}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(bm)}catch(nf){}}}).catch((e=>{throw pm.create("idb-open",{originalErrorMessage:e.message})}))),_m}async function km(e,t){try{const n=(await Em()).transaction(bm,"readwrite"),r=n.objectStore(bm);await r.put(t,Sm(e)),await n.done}catch(nf){if(nf instanceof Wf)Pp.warn(nf.message);else{const t=pm.create("idb-set",{originalErrorMessage:null==nf?void 0:nf.message});Pp.warn(t.message)}}}function Sm(e){return`${e.name}!${e.options.appId}`}
/**
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
 */class Tm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Cm(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Im();if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some((e=>e.date===r)))return;return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}catch(nf){Pp.warn(nf)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=Im(),{heartbeatsToSend:n,unsentEntries:r}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),xm(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),xm(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=Mf(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(nf){return Pp.warn(nf),""}}}function Im(){return(new Date).toISOString().substring(0,10)}class Cm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(nf){return!1}}()&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await Em()).transaction(bm),n=await t.objectStore(bm).get(Sm(e));return await t.done,n}catch(nf){if(nf instanceof Wf)Pp.warn(nf.message);else{const t=pm.create("idb-get",{originalErrorMessage:null==nf?void 0:nf.message});Pp.warn(t.message)}}}(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return km(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return km(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function xm(e){return Mf(JSON.stringify({version:2,heartbeats:e})).length}
/**
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
 */var Nm;Nm="",hm(new np("platform-logger",(e=>new Np(e)),"PRIVATE")),hm(new np("heartbeat",(e=>new Tm(e)),"PRIVATE")),wm(Ap,Rp,Nm),wm(Ap,Rp,"esm2017"),wm("fire-js","");
/**
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
 */
wm("firebase","10.14.1","app");var Am,Rm,Pm="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e;
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */function t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function n(e,t,n){n||(n=0);var r=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],a=t+(s^n&(i^s))+r[0]+3614090360&4294967295;a=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=n+(a<<7&4294967295|a>>>25))+((a=s+(i^t&(n^i))+r[1]+3905402710&4294967295)<<12&4294967295|a>>>20))+((a=i+(n^s&(t^n))+r[2]+606105819&4294967295)<<17&4294967295|a>>>15))+((a=n+(t^i&(s^t))+r[3]+3250441966&4294967295)<<22&4294967295|a>>>10))+((a=t+(s^n&(i^s))+r[4]+4118548399&4294967295)<<7&4294967295|a>>>25))+((a=s+(i^t&(n^i))+r[5]+1200080426&4294967295)<<12&4294967295|a>>>20))+((a=i+(n^s&(t^n))+r[6]+2821735955&4294967295)<<17&4294967295|a>>>15))+((a=n+(t^i&(s^t))+r[7]+4249261313&4294967295)<<22&4294967295|a>>>10))+((a=t+(s^n&(i^s))+r[8]+1770035416&4294967295)<<7&4294967295|a>>>25))+((a=s+(i^t&(n^i))+r[9]+2336552879&4294967295)<<12&4294967295|a>>>20))+((a=i+(n^s&(t^n))+r[10]+4294925233&4294967295)<<17&4294967295|a>>>15))+((a=n+(t^i&(s^t))+r[11]+2304563134&4294967295)<<22&4294967295|a>>>10))+((a=t+(s^n&(i^s))+r[12]+1804603682&4294967295)<<7&4294967295|a>>>25))+((a=s+(i^t&(n^i))+r[13]+4254626195&4294967295)<<12&4294967295|a>>>20))+((a=i+(n^s&(t^n))+r[14]+2792965006&4294967295)<<17&4294967295|a>>>15))+((a=n+(t^i&(s^t))+r[15]+1236535329&4294967295)<<22&4294967295|a>>>10))+((a=t+(i^s&(n^i))+r[1]+4129170786&4294967295)<<5&4294967295|a>>>27))+((a=s+(n^i&(t^n))+r[6]+3225465664&4294967295)<<9&4294967295|a>>>23))+((a=i+(t^n&(s^t))+r[11]+643717713&4294967295)<<14&4294967295|a>>>18))+((a=n+(s^t&(i^s))+r[0]+3921069994&4294967295)<<20&4294967295|a>>>12))+((a=t+(i^s&(n^i))+r[5]+3593408605&4294967295)<<5&4294967295|a>>>27))+((a=s+(n^i&(t^n))+r[10]+38016083&4294967295)<<9&4294967295|a>>>23))+((a=i+(t^n&(s^t))+r[15]+3634488961&4294967295)<<14&4294967295|a>>>18))+((a=n+(s^t&(i^s))+r[4]+3889429448&4294967295)<<20&4294967295|a>>>12))+((a=t+(i^s&(n^i))+r[9]+568446438&4294967295)<<5&4294967295|a>>>27))+((a=s+(n^i&(t^n))+r[14]+3275163606&4294967295)<<9&4294967295|a>>>23))+((a=i+(t^n&(s^t))+r[3]+4107603335&4294967295)<<14&4294967295|a>>>18))+((a=n+(s^t&(i^s))+r[8]+1163531501&4294967295)<<20&4294967295|a>>>12))+((a=t+(i^s&(n^i))+r[13]+2850285829&4294967295)<<5&4294967295|a>>>27))+((a=s+(n^i&(t^n))+r[2]+4243563512&4294967295)<<9&4294967295|a>>>23))+((a=i+(t^n&(s^t))+r[7]+1735328473&4294967295)<<14&4294967295|a>>>18))+((a=n+(s^t&(i^s))+r[12]+2368359562&4294967295)<<20&4294967295|a>>>12))+((a=t+(n^i^s)+r[5]+4294588738&4294967295)<<4&4294967295|a>>>28))+((a=s+(t^n^i)+r[8]+2272392833&4294967295)<<11&4294967295|a>>>21))+((a=i+(s^t^n)+r[11]+1839030562&4294967295)<<16&4294967295|a>>>16))+((a=n+(i^s^t)+r[14]+4259657740&4294967295)<<23&4294967295|a>>>9))+((a=t+(n^i^s)+r[1]+2763975236&4294967295)<<4&4294967295|a>>>28))+((a=s+(t^n^i)+r[4]+1272893353&4294967295)<<11&4294967295|a>>>21))+((a=i+(s^t^n)+r[7]+4139469664&4294967295)<<16&4294967295|a>>>16))+((a=n+(i^s^t)+r[10]+3200236656&4294967295)<<23&4294967295|a>>>9))+((a=t+(n^i^s)+r[13]+681279174&4294967295)<<4&4294967295|a>>>28))+((a=s+(t^n^i)+r[0]+3936430074&4294967295)<<11&4294967295|a>>>21))+((a=i+(s^t^n)+r[3]+3572445317&4294967295)<<16&4294967295|a>>>16))+((a=n+(i^s^t)+r[6]+76029189&4294967295)<<23&4294967295|a>>>9))+((a=t+(n^i^s)+r[9]+3654602809&4294967295)<<4&4294967295|a>>>28))+((a=s+(t^n^i)+r[12]+3873151461&4294967295)<<11&4294967295|a>>>21))+((a=i+(s^t^n)+r[15]+530742520&4294967295)<<16&4294967295|a>>>16))+((a=n+(i^s^t)+r[2]+3299628645&4294967295)<<23&4294967295|a>>>9))+((a=t+(i^(n|~s))+r[0]+4096336452&4294967295)<<6&4294967295|a>>>26))+((a=s+(n^(t|~i))+r[7]+1126891415&4294967295)<<10&4294967295|a>>>22))+((a=i+(t^(s|~n))+r[14]+2878612391&4294967295)<<15&4294967295|a>>>17))+((a=n+(s^(i|~t))+r[5]+4237533241&4294967295)<<21&4294967295|a>>>11))+((a=t+(i^(n|~s))+r[12]+1700485571&4294967295)<<6&4294967295|a>>>26))+((a=s+(n^(t|~i))+r[3]+2399980690&4294967295)<<10&4294967295|a>>>22))+((a=i+(t^(s|~n))+r[10]+4293915773&4294967295)<<15&4294967295|a>>>17))+((a=n+(s^(i|~t))+r[1]+2240044497&4294967295)<<21&4294967295|a>>>11))+((a=t+(i^(n|~s))+r[8]+1873313359&4294967295)<<6&4294967295|a>>>26))+((a=s+(n^(t|~i))+r[15]+4264355552&4294967295)<<10&4294967295|a>>>22))+((a=i+(t^(s|~n))+r[6]+2734768916&4294967295)<<15&4294967295|a>>>17))+((a=n+(s^(i|~t))+r[13]+1309151649&4294967295)<<21&4294967295|a>>>11))+((s=(t=n+((a=t+(i^(n|~s))+r[4]+4149444226&4294967295)<<6&4294967295|a>>>26))+((a=s+(n^(t|~i))+r[11]+3174756917&4294967295)<<10&4294967295|a>>>22))^((i=s+((a=i+(t^(s|~n))+r[2]+718787259&4294967295)<<15&4294967295|a>>>17))|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(a<<21&4294967295|a>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function r(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}!function(e,t){function n(){}n.prototype=t.prototype,e.D=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.C=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}(t,(function(){this.blockSize=-1})),t.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},t.prototype.u=function(e,t){void 0===t&&(t=e.length);for(var r=t-this.blockSize,i=this.B,s=this.h,a=0;a<t;){if(0==s)for(;a<=r;)n(this,e,a),a+=this.blockSize;if("string"==typeof e){for(;a<t;)if(i[s++]=e.charCodeAt(a++),s==this.blockSize){n(this,i),s=0;break}}else for(;a<t;)if(i[s++]=e[a++],s==this.blockSize){n(this,i),s=0;break}}this.h=s,this.o+=t},t.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.u(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var i={};function s(e){return-128<=e&&128>e?function(e,t){var n=i;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,(function(e){return new r([0|e],0>e?-1:0)})):new r([0|e],0>e?-1:0)}function a(e){if(isNaN(e)||!isFinite(e))return o;if(0>e)return d(a(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=4294967296;return new r(t,0)}var o=s(0),l=s(1),u=s(16777216);function c(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function h(e){return-1==e.h}function d(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new r(n,~e.h).add(l)}function f(e,t){return e.add(d(t))}function p(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function m(e,t){this.g=e,this.h=t}function g(e,t){if(c(t))throw Error("division by zero");if(c(e))return new m(o,o);if(h(e))return t=g(d(e),t),new m(d(t.g),d(t.h));if(h(t))return t=g(e,d(t)),new m(d(t.g),t.h);if(30<e.g.length){if(h(e)||h(t))throw Error("slowDivide_ only works with positive integers.");for(var n=l,r=t;0>=r.l(e);)n=y(n),r=y(r);var i=v(n,1),s=v(r,1);for(r=v(r,2),n=v(n,2);!c(r);){var u=s.add(r);0>=u.l(e)&&(i=i.add(n),s=u),r=v(r,1),n=v(n,1)}return t=f(e,i.j(t)),new m(i,t)}for(i=o;0<=e.l(t);){for(n=Math.max(1,Math.floor(e.m()/t.m())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),u=(s=a(n)).j(t);h(u)||0<u.l(e);)u=(s=a(n-=r)).j(t);c(s)&&(s=l),i=i.add(s),e=f(e,u)}return new m(i,e)}function y(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.i(i)<<1|e.i(i-1)>>>31;return new r(n,e.h)}function v(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,s=[],a=0;a<i;a++)s[a]=0<t?e.i(a+n)>>>t|e.i(a+n+1)<<32-t:e.i(a+n);return new r(s,e.h)}(e=r.prototype).m=function(){if(h(this))return-d(this).m();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.i(n);e+=(0<=r?r:4294967296+r)*t,t*=4294967296}return e},e.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(c(this))return"0";if(h(this))return"-"+d(this).toString(e);for(var t=a(Math.pow(e,6)),n=this,r="";;){var i=g(n,t).g,s=((0<(n=f(n,i.j(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(c(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},e.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return h(e=f(this,e))?-1:c(e)?0:1},e.abs=function(){return h(this)?d(this):this},e.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,s=0;s<=t;s++){var a=i+(65535&this.i(s))+(65535&e.i(s)),o=(a>>>16)+(this.i(s)>>>16)+(e.i(s)>>>16);i=o>>>16,a&=65535,o&=65535,n[s]=o<<16|a}return new r(n,-2147483648&n[n.length-1]?-1:0)},e.j=function(e){if(c(this)||c(e))return o;if(h(this))return h(e)?d(this).j(d(e)):d(d(this).j(e));if(h(e))return d(this.j(d(e)));if(0>this.l(u)&&0>e.l(u))return a(this.m()*e.m());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<e.g.length;s++){var l=this.i(i)>>>16,f=65535&this.i(i),m=e.i(s)>>>16,g=65535&e.i(s);n[2*i+2*s]+=f*g,p(n,2*i+2*s),n[2*i+2*s+1]+=l*g,p(n,2*i+2*s+1),n[2*i+2*s+1]+=f*m,p(n,2*i+2*s+1),n[2*i+2*s+2]+=l*m,p(n,2*i+2*s+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new r(n,0)},e.A=function(e){return g(this,e).h},e.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)&e.i(i);return new r(n,this.h&e.h)},e.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)|e.i(i);return new r(n,this.h|e.h)},e.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)^e.i(i);return new r(n,this.h^e.h)},t.prototype.digest=t.prototype.v,t.prototype.reset=t.prototype.s,t.prototype.update=t.prototype.u,Rm=t,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.A,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=a,r.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return d(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=a(Math.pow(n,8)),i=o,s=0;s<t.length;s+=8){var l=Math.min(8,t.length-s),u=parseInt(t.substring(s,s+l),n);8>l?(l=a(Math.pow(n,l)),i=i.j(l).add(a(u))):i=(i=i.j(r)).add(a(u))}return i},Am=r}).apply(void 0!==Pm?Pm:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var Dm,Om,Lm,Mm,Um,Fm,Vm,jm,zm="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e,t="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){return e==Array.prototype||e==Object.prototype||(e[t]=n.value),e};var n=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof zm&&zm];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);!function(e,r){if(r)e:{var i=n;e=e.split(".");for(var s=0;s<e.length-1;s++){var a=e[s];if(!(a in i))break e;i=i[a]}(r=r(s=i[e=e[e.length-1]]))!=s&&null!=r&&t(i,e,{configurable:!0,writable:!0,value:r})}}("Array.prototype.values",(function(e){return e||function(){return function(e,t){e instanceof String&&(e+="");var n=0,r=!1,i={next:function(){if(!r&&n<e.length){var i=n++;return{value:t(i,e[i]),done:!1}}return r=!0,{done:!0,value:void 0}}};return i[Symbol.iterator]=function(){return i},i}(this,(function(e,t){return t}))}}));
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
var r=r||{},i=this||self;function s(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function a(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function o(e,t,n){return e.call.apply(e.bind,arguments)}function l(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function u(e,t,n){return(u=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:l).apply(null,arguments)}function c(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function h(e,t){function n(){}n.prototype=t.prototype,e.aa=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Qb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function d(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function f(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(s(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function p(e){return/^[\s\xa0]*$/.test(e)}function m(){var e=i.navigator;return e&&(e=e.userAgent)?e:""}function g(e){return g[" "](e),e}g[" "]=function(){};var y=!(-1==m().indexOf("Gecko")||-1!=m().toLowerCase().indexOf("webkit")&&-1==m().indexOf("Edge")||-1!=m().indexOf("Trident")||-1!=m().indexOf("MSIE")||-1!=m().indexOf("Edge"));function v(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function w(e){const t={};for(const n in e)t[n]=e[n];return t}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<b.length;t++)n=b[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function E(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function k(e){i.setTimeout((()=>{throw e}),0)}function S(){var e=N;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var T=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new I),(e=>e.reset()));class I{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let C,x=!1,N=new class{constructor(){this.h=this.g=null}add(e,t){const n=T.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},A=()=>{const e=i.Promise.resolve(void 0);C=()=>{e.then(R)}};var R=()=>{for(var e;e=S();){try{e.h.call(e.g)}catch(n){k(n)}var t=T;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}x=!1};function P(){this.s=this.s,this.C=this.C}function D(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}P.prototype.s=!1,P.prototype.ma=function(){this.s||(this.s=!0,this.N())},P.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},D.prototype.h=function(){this.defaultPrevented=!0};var O=function(){if(!i.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};i.addEventListener("test",e,t),i.removeEventListener("test",e,t)}catch(n){}return e}();function L(e,t){if(D.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(y){e:{try{g(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:M[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&L.aa.h.call(this)}}h(L,D);var M={2:"touch",3:"pen",4:"mouse"};L.prototype.h=function(){L.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var U="closure_listenable_"+(1e6*Math.random()|0),F=0;function V(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++F,this.da=this.fa=!1}function j(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function z(e){this.src=e,this.g={},this.h=0}function B(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=Array.prototype.indexOf.call(i,t,void 0);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(j(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function $(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.da&&s.listener==t&&s.capture==!!n&&s.ha==r)return i}return-1}z.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var a=$(e,t,r,i);return-1<a?(t=e[a],n||(t.fa=!1)):((t=new V(t,this.src,s,!!r,i)).fa=n,e.push(t)),t};var q="closure_lm_"+(1e6*Math.random()|0),H={};function K(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)K(e,t[s],n,r,i);return null}return n=Z(n),e&&e[U]?e.K(t,n,a(r)?!!r.capture:!!r,i):function(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=a(i)?!!i.capture:!!i,l=X(e);if(l||(e[q]=l=new z(e)),n=l.add(t,n,r,o,s),n.proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}const t=Y;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)O||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Q(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}(e,t,n,!1,r,i)}function W(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)W(e,t[s],n,r,i);else r=a(r)?!!r.capture:!!r,n=Z(n),e&&e[U]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=$(s=e.g[t],n,r,i))&&(j(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=X(e))&&(t=e.g[t.toString()],e=-1,t&&(e=$(t,n,r,i)),(n=-1<e?t[e]:null)&&G(n))}function G(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[U])B(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Q(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=X(t))?(B(n,e),0==n.h&&(n.src=null,t[q]=null)):j(e)}}}function Q(e){return e in H?H[e]:H[e]="on"+e}function Y(e,t){if(e.da)e=!0;else{t=new L(t,this);var n=e.listener,r=e.ha||e.src;e.fa&&G(e),e=n.call(r,t)}return e}function X(e){return(e=e[q])instanceof z?e:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function Z(e){return"function"==typeof e?e:(e[J]||(e[J]=function(t){return e.handleEvent(t)}),e[J])}function ee(){P.call(this),this.i=new z(this),this.M=this,this.F=null}function te(e,t){var n,r=e.F;if(r)for(n=[];r;r=r.F)n.push(r);if(e=e.M,r=t.type||t,"string"==typeof t)t=new D(t,e);else if(t instanceof D)t.target=t.target||e;else{var i=t;_(t=new D(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var a=t.g=n[s];i=ne(a,r,!0,t)&&i}if(i=ne(a=t.g=e,r,!0,t)&&i,i=ne(a,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=ne(a=t.g=n[s],r,!1,t)&&i}function ne(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var a=t[s];if(a&&!a.da&&a.capture==n){var o=a.listener,l=a.ha||a.src;a.fa&&B(e.i,a),i=!1!==o.call(l,r)&&i}}return i&&!r.defaultPrevented}function re(e,t,n){if("function"==typeof e)n&&(e=u(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=u(e.handleEvent,e)}return 2147483647<Number(t)?-1:i.setTimeout(e,t||0)}function ie(e){e.g=re((()=>{e.g=null,e.i&&(e.i=!1,ie(e))}),e.l);const t=e.h;e.h=null,e.m.apply(null,t)}h(ee,P),ee.prototype[U]=!0,ee.prototype.removeEventListener=function(e,t,n,r){W(this,e,t,n,r)},ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)j(n[r]);delete t.g[e],t.h--}}this.F=null},ee.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ee.prototype.L=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};class se extends P{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:ie(this)}N(){super.N(),this.g&&(i.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ae(e){P.call(this),this.h=e,this.g={}}h(ae,P);var oe=[];function le(e){v(e.g,(function(e,t){this.g.hasOwnProperty(t)&&G(e)}),e),e.g={}}ae.prototype.N=function(){ae.aa.N.call(this),le(this)},ae.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ue=i.JSON.stringify,ce=i.JSON.parse,he=class{stringify(e){return i.JSON.stringify(e,void 0)}parse(e){return i.JSON.parse(e,void 0)}};function de(){}function fe(e){return e.h||(e.h=e.i())}function pe(){}de.prototype.h=null;var me={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ge(){D.call(this,"d")}function ye(){D.call(this,"c")}h(ge,D),h(ye,D);var ve={},we=null;function be(){return we=we||new ee}function _e(e){D.call(this,ve.La,e)}function Ee(e){const t=be();te(t,new _e(t))}function ke(e,t){D.call(this,ve.STAT_EVENT,e),this.stat=t}function Se(e){const t=be();te(t,new ke(t,e))}function Te(e,t){D.call(this,ve.Ma,e),this.size=t}function Ie(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return i.setTimeout((function(){e()}),t)}function Ce(){this.g=!0}function xe(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var a=1;a<i.length;a++)i[a]=""}}}return ue(n)}catch(o){return t}}(e,n)+(r?" "+r:"")}))}ve.La="serverreachability",h(_e,D),ve.STAT_EVENT="statevent",h(ke,D),ve.Ma="timingevent",h(Te,D),Ce.prototype.xa=function(){this.g=!1},Ce.prototype.info=function(){};var Ne,Ae={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Re={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function Pe(){}function De(e,t,n,r){this.j=e,this.i=t,this.l=n,this.R=r||1,this.U=new ae(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Oe}function Oe(){this.i=null,this.g="",this.h=!1}h(Pe,de),Pe.prototype.g=function(){return new XMLHttpRequest},Pe.prototype.i=function(){return{}},Ne=new Pe;var Le={},Me={};function Ue(e,t,n){e.L=1,e.v=ut(it(t)),e.m=n,e.P=!0,Fe(e,null)}function Fe(e,t){e.F=Date.now(),ze(e),e.A=it(e.v);var n=e.A,r=e.R;Array.isArray(r)||(r=[String(r)]),kt(n.i,"t",r),e.C=0,n=e.j.J,e.h=new Oe,e.g=hn(e.j,n?t:null,!e.m),0<e.O&&(e.M=new se(u(e.Y,e,e.g),e.O)),t=e.U,n=e.g,r=e.ca;var i="readystatechange";Array.isArray(i)||(i&&(oe[0]=i.toString()),i=oe);for(var s=0;s<i.length;s++){var a=K(n,i[s],r||t.handleEvent,!1,t.h||t);if(!a)break;t.g[a.key]=a}t=e.H?w(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Ee(),function(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var a="",o=s.split("&"),l=0;l<o.length;l++){var u=o[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");a=2<=h.length&&"type"==h[1]?a+(c+"=")+u+"&":a+(c+"=redacted&")}}else a=null;else a=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+a}))}(e.i,e.u,e.A,e.l,e.R,e.m)}function Ve(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.j.Ca)}function je(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Me:(n=Number(t.substring(n,r)),isNaN(n)?Le:(r+=1)+n>t.length?Me:(t=t.slice(r,r+n),e.C=r+n,t))}function ze(e){e.S=Date.now()+e.I,Be(e,e.I)}function Be(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Ie(u(e.ba,e),t)}function $e(e){e.B&&(i.clearTimeout(e.B),e.B=null)}function qe(e){0==e.j.G||e.J||an(e.j,e)}function He(e){$e(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,le(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function Ke(e,t){try{var n=e.j;if(0!=n.G&&(n.g==e||Xe(n.h,e)))if(!e.K&&Xe(n.h,e)&&3==n.G){try{var r=n.Da.g.parse(t)}catch(af){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;sn(n),Gt(n)}tn(n),Se(18)}}else n.za=i[1],0<n.za-n.T&&37500>i[2]&&n.F&&0==n.v&&!n.C&&(n.C=Ie(u(n.Za,n),6e3));if(1>=Ye(n.h)&&n.ca){try{n.ca()}catch(af){}n.ca=void 0}}else ln(n,11)}else if((e.K||n.g==e)&&sn(n),!p(t))for(i=n.Da.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.K=u[1],n.ia=u[2];const t=u[3];null!=t&&(n.la=t,n.j.info("VER="+n.la));const i=u[4];null!=i&&(n.Aa=i,n.j.info("SVER="+n.Aa));const c=u[5];null!=c&&"number"==typeof c&&0<c&&(r=1.5*c,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Je(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.ya=e,lt(r.I,r.D,e))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-e.F,n.j.info("Handshake RTT: "+n.R+"ms"));var a=e;if((r=n).qa=cn(r,r.J?r.ia:null,r.W),a.K){Ze(r.h,a);var o=a,l=r.L;l&&(o.I=l),o.B&&($e(o),ze(o)),r.g=a}else en(r);0<n.i.length&&Yt(n)}else"stop"!=u[0]&&"close"!=u[0]||ln(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?ln(n,7):Wt(n):"noop"!=u[0]&&n.l&&n.l.ta(u),n.v=0)}Ee()}catch(af){}}De.prototype.ca=function(e){e=e.target;const t=this.M;t&&3==$t(e)?t.j():this.Y(e)},De.prototype.Y=function(e){try{if(e==this.g)e:{const d=$t(this.g);var t=this.g.Ba();this.g.Z();if(!(3>d)&&(3!=d||this.g&&(this.h.h||this.g.oa()||qt(this.g)))){this.J||4!=d||7==t||Ee(),$e(this);var n=this.g.Z();this.X=n;t:if(Ve(this)){var r=qt(this.g);e="";var s=r.length,a=4==$t(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){He(this),qe(this);var o="";break t}this.h.i=new i.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:!(a&&t==s-1)});r.length=0,this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.oa();if(this.o=200==n,function(e,t,n,r,i,s,a){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+a}))}(this.i,this.u,this.A,this.l,this.R,d,n),this.o){if(this.T&&!this.K){t:{if(this.g){var l,u=this.g;if((l=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!p(l)){var c=l;break t}}c=null}if(!(n=c)){this.o=!1,this.s=3,Se(12),He(this),qe(this);break e}xe(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ke(this,n)}if(this.P){let e;for(n=!0;!this.J&&this.C<o.length;){if(e=je(this,o),e==Me){4==d&&(this.s=4,Se(14),n=!1),xe(this.i,this.l,null,"[Incomplete Response]");break}if(e==Le){this.s=4,Se(15),xe(this.i,this.l,o,"[Invalid Chunk]"),n=!1;break}xe(this.i,this.l,e,null),Ke(this,e)}if(Ve(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=d||0!=o.length||this.h.h||(this.s=1,Se(16),n=!1),this.o=this.o&&n,n){if(0<o.length&&!this.W){this.W=!0;var h=this.j;h.g==this&&h.ba&&!h.M&&(h.j.info("Great, no buffering proxy detected. Bytes received: "+o.length),nn(h),h.M=!0,Se(11))}}else xe(this.i,this.l,o,"[Invalid Chunked Response]"),He(this),qe(this)}else xe(this.i,this.l,o,null),Ke(this,o);4==d&&He(this),this.o&&!this.J&&(4==d?an(this.j,this):(this.o=!1,ze(this)))}else(function(e){const t={};e=(e.g&&2<=$t(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(p(e[r]))continue;var n=E(e[r]);const i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,(function(e){return e.join(", ")}))})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.s=3,Se(12)):(this.s=0,Se(13)),He(this),qe(this)}}}catch(d){}},De.prototype.cancel=function(){this.J=!0,He(this)},De.prototype.ba=function(){this.B=null;const e=Date.now();0<=e-this.S?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.i,this.A),2!=this.L&&(Ee(),Se(17)),He(this),this.s=2,qe(this)):Be(this,this.S-e)};var We=class{constructor(e,t){this.g=e,this.map=t}};function Ge(e){this.l=e||10,i.PerformanceNavigationTiming?e=0<(e=i.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(i.chrome&&i.chrome.loadTimes&&i.chrome.loadTimes()&&i.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Qe(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Ye(e){return e.h?1:e.g?e.g.size:0}function Xe(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Je(e,t){e.g?e.g.add(t):e.h=t}function Ze(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function et(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return d(e.i)}function tt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(s(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(s(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}(e),r=function(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(s(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,a=0;a<i;a++)t.call(void 0,r[a],n&&n[a],e)}Ge.prototype.cancel=function(){if(this.i=et(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var nt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rt(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof rt){this.h=e.h,st(this,e.j),this.o=e.o,this.g=e.g,at(this,e.s),this.l=e.l;var t=e.i,n=new wt;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),ot(this,n),this.m=e.m}else e&&(t=String(e).match(nt))?(this.h=!1,st(this,t[1]||"",!0),this.o=ht(t[2]||""),this.g=ht(t[3]||"",!0),at(this,t[4]),this.l=ht(t[5]||"",!0),ot(this,t[6]||"",!0),this.m=ht(t[7]||"")):(this.h=!1,this.i=new wt(null,this.h))}function it(e){return new rt(e)}function st(e,t,n){e.j=n?ht(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function at(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function ot(e,t,n){t instanceof wt?(e.i=t,function(e,t){t&&!e.j&&(bt(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(_t(this,t),kt(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=dt(t,yt)),e.i=new wt(t,e.h))}function lt(e,t,n){e.i.set(t,n)}function ut(e){return lt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ht(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function dt(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,ft),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ft(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}rt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(dt(t,pt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(dt(t,pt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.s)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(dt(n,"/"==n.charAt(0)?gt:mt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",dt(n,vt)),e.join("")};var pt=/[#\/\?@]/g,mt=/[#\?:]/g,gt=/[#\?]/g,yt=/[#\?@]/g,vt=/#/g;function wt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function bt(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function _t(e,t){bt(e),t=St(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Et(e,t){return bt(e),t=St(e,t),e.g.has(t)}function kt(e,t,n){_t(e,t),0<n.length&&(e.i=null,e.g.set(St(e,t),d(n)),e.h+=n.length)}function St(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Tt(e,t,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(s){}}function It(){this.g=new he}function Ct(e,t,n){const r=n||"";try{tt(e,(function(e,n){let i=e;a(e)&&(i=ue(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(nf){throw t.push(r+"type="+encodeURIComponent("_badmap")),nf}}function xt(e){this.l=e.Ub||null,this.j=e.eb||!1}function Nt(e,t){ee.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function At(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function Rt(e){e.readyState=4,e.l=null,e.j=null,e.v=null,Pt(e)}function Pt(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function Dt(e){let t="";return v(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Ot(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Dt(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):lt(e,t,n))}function Lt(e){ee.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(e=wt.prototype).add=function(e,t){bt(this),this.i=null,e=St(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},e.forEach=function(e,t){bt(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},e.na=function(){bt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},e.V=function(e){bt(this);let t=[];if("string"==typeof e)Et(this,e)&&(t=t.concat(this.g.get(St(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},e.set=function(e,t){return bt(this),this.i=null,Et(this,e=St(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e&&0<(e=this.V(e)).length?String(e[0]):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),a=this.V(r);for(r=0;r<a.length;r++){var i=s;""!==a[r]&&(i+="="+encodeURIComponent(String(a[r]))),e.push(i)}}return this.i=e.join("&")},h(xt,de),xt.prototype.g=function(){return new Nt(this.l,this.j)},xt.prototype.i=function(e){return function(){return e}}({}),h(Nt,ee),(e=Nt.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,Pt(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||i).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Rt(this)),this.readyState=0},e.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Pt(this)),this.g&&(this.readyState=3,Pt(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==i.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;At(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))},e.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Rt(this):Pt(this),3==this.readyState&&At(this)}},e.Ra=function(e){this.g&&(this.response=this.responseText=e,Rt(this))},e.Qa=function(e){this.g&&(this.response=e,Rt(this))},e.ga=function(){this.g&&Rt(this)},e.setRequestHeader=function(e,t){this.u.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Nt.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),h(Lt,ee);var Mt=/^https?$/i,Ut=["POST","PUT"];function Ft(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,Vt(e),zt(e)}function Vt(e){e.A||(e.A=!0,te(e,"complete"),te(e,"error"))}function jt(e){if(e.h&&void 0!==r&&(!e.v[1]||4!=$t(e)||2!=e.Z()))if(e.u&&4==$t(e))re(e.Ea,0,e);else if(te(e,"readystatechange"),4==$t(e)){e.h=!1;try{const r=e.Z();e:switch(r){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var s;if(s=0===r){var a=String(e.D).match(nt)[1]||null;!a&&i.self&&i.self.location&&(a=i.self.location.protocol.slice(0,-1)),s=!Mt.test(a?a.toLowerCase():"")}n=s}if(n)te(e,"complete"),te(e,"success");else{e.m=6;try{var o=2<$t(e)?e.g.statusText:""}catch(l){o=""}e.l=o+" ["+e.Z()+"]",Vt(e)}}finally{zt(e)}}}function zt(e,t){if(e.g){Bt(e);const n=e.g,r=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||te(e,"ready");try{n.onreadystatechange=r}catch(nf){}}}function Bt(e){e.I&&(i.clearTimeout(e.I),e.I=null)}function $t(e){return e.g?e.g.readyState:0}function qt(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Ht(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Kt(e){this.Aa=0,this.i=[],this.j=new Ce,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ht("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ht("baseRetryDelayMs",5e3,e),this.cb=Ht("retryDelaySeedMs",1e4,e),this.Wa=Ht("forwardChannelMaxRetries",2,e),this.wa=Ht("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new Ge(e&&e.concurrentRequestLimit),this.Da=new It,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function Wt(e){if(Qt(e),3==e.G){var t=e.U++,n=it(e.I);if(lt(n,"SID",e.K),lt(n,"RID",t),lt(n,"TYPE","terminate"),Jt(e,n),(t=new De(e,e.j,t)).L=2,t.v=ut(it(n)),n=!1,i.navigator&&i.navigator.sendBeacon)try{n=i.navigator.sendBeacon(t.v.toString(),"")}catch(r){}!n&&i.Image&&((new Image).src=t.v,n=!0),n||(t.g=hn(t.j,null),t.g.ea(t.v)),t.F=Date.now(),ze(t)}un(e)}function Gt(e){e.g&&(nn(e),e.g.cancel(),e.g=null)}function Qt(e){Gt(e),e.u&&(i.clearTimeout(e.u),e.u=null),sn(e),e.h.cancel(),e.s&&("number"==typeof e.s&&i.clearTimeout(e.s),e.s=null)}function Yt(e){if(!Qe(e.h)&&!e.s){e.s=!0;var t=e.Ga;C||A(),x||(C(),x=!0),N.add(t,e),e.B=0}}function Xt(e,t){var n;n=t?t.l:e.U++;const r=it(e.I);lt(r,"SID",e.K),lt(r,"RID",n),lt(r,"AID",e.T),Jt(e,r),e.m&&e.o&&Ot(r,e.m,e.o),n=new De(e,e.j,n,e.B+1),null===e.m&&(n.H=e.o),t&&(e.i=t.D.concat(e.i)),t=Zt(e,n,1e3),n.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),Je(e.h,n),Ue(n,r,t)}function Jt(e,t){e.H&&v(e.H,(function(e,n){lt(t,n,e)})),e.l&&tt({},(function(e,n){lt(t,n,e)}))}function Zt(e,t,n){n=Math.min(e.i.length,n);var r=e.l?u(e.l.Na,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let a=!0;for(let o=0;o<n;o++){let n=i[o].g;const l=i[o].map;if(n-=t,0>n)t=Math.max(0,i[o].g-100),a=!1;else try{Ct(l,e,"req"+n+"_")}catch(s){r&&r(l)}}if(a){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function en(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;C||A(),x||(C(),x=!0),N.add(t,e),e.v=0}}function tn(e){return!(e.g||e.u||3<=e.v)&&(e.Y++,e.u=Ie(u(e.Fa,e),on(e,e.v)),e.v++,!0)}function nn(e){null!=e.A&&(i.clearTimeout(e.A),e.A=null)}function rn(e){e.g=new De(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=it(e.qa);lt(t,"RID","rpc"),lt(t,"SID",e.K),lt(t,"AID",e.T),lt(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&lt(t,"TO",e.ja),lt(t,"TYPE","xmlhttp"),Jt(e,t),e.m&&e.o&&Ot(t,e.m,e.o),e.L&&(e.g.I=e.L);var n=e.g;e=e.ia,n.L=1,n.v=ut(it(t)),n.m=null,n.P=!0,Fe(n,e)}function sn(e){null!=e.C&&(i.clearTimeout(e.C),e.C=null)}function an(e,t){var n=null;if(e.g==t){sn(e),nn(e),e.g=null;var r=2}else{if(!Xe(e.h,t))return;n=t.D,Ze(e.h,t),r=1}if(0!=e.G)if(t.o)if(1==r){n=t.m?t.m.length:0,t=Date.now()-t.F;var i=e.B;te(r=be(),new Te(r,n)),Yt(e)}else en(e);else if(3==(i=t.s)||0==i&&0<t.X||!(1==r&&function(e,t){return!(Ye(e.h)>=e.h.j-(e.s?1:0)||(e.s?(e.i=t.D.concat(e.i),0):1==e.G||2==e.G||e.B>=(e.Va?0:e.Wa)||(e.s=Ie(u(e.Ga,e,t),on(e,e.B)),e.B++,0)))}(e,t)||2==r&&tn(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:ln(e,5);break;case 4:ln(e,10);break;case 3:ln(e,6);break;default:ln(e,2)}}function on(e,t){let n=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(n*=2),n*t}function ln(e,t){if(e.j.info("Error code "+t),2==t){var n=u(e.fb,e),r=e.Xa;const t=!r;r=new rt(r||"//www.google.com/images/cleardot.gif"),i.location&&"http"==i.location.protocol||st(r,"https"),ut(r),t?function(e,t){const n=new Ce;if(i.Image){const r=new Image;r.onload=c(Tt,n,"TestLoadImage: loaded",!0,t,r),r.onerror=c(Tt,n,"TestLoadImage: error",!1,t,r),r.onabort=c(Tt,n,"TestLoadImage: abort",!1,t,r),r.ontimeout=c(Tt,n,"TestLoadImage: timeout",!1,t,r),i.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(r.toString(),n):function(e,t){new Ce;const n=new AbortController,r=setTimeout((()=>{n.abort(),Tt(0,0,!1,t)}),1e4);fetch(e,{signal:n.signal}).then((e=>{clearTimeout(r),e.ok?Tt(0,0,!0,t):Tt(0,0,!1,t)})).catch((()=>{clearTimeout(r),Tt(0,0,!1,t)}))}(r.toString(),n)}else Se(2);e.G=0,e.l&&e.l.sa(t),un(e),Qt(e)}function un(e){if(e.G=0,e.ka=[],e.l){const t=et(e.h);0==t.length&&0==e.i.length||(f(e.ka,t),f(e.ka,e.i),e.h.i.length=0,d(e.i),e.i.length=0),e.l.ra()}}function cn(e,t,n){var r=n instanceof rt?it(n):new rt(n);if(""!=r.g)t&&(r.g=t+"."+r.g),at(r,r.s);else{var s=i.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var a=new rt(null);r&&st(a,r),t&&(a.g=t),s&&at(a,s),n&&(a.l=n),r=a}return n=e.D,t=e.ya,n&&t&&lt(r,n,t),lt(r,"VER",e.la),Jt(e,r),r}function hn(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=e.Ca&&!e.pa?new Lt(new xt({eb:n})):new Lt(e.pa)).Ha(e.J),t}function dn(){}function fn(){}function pn(e,t){ee.call(this),this.g=new Kt(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!p(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!p(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new yn(this)}function mn(e){ge.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function gn(){ye.call(this),this.status=1}function yn(e){this.g=e}(e=Lt.prototype).Ha=function(e){this.J=e},e.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ne.g(),this.v=this.o?fe(this.o):fe(Ne),this.g.onreadystatechange=u(this.Ea,this);try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(a){return void Ft(this,a)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),s=i.FormData&&e instanceof i.FormData,!(0<=Array.prototype.indexOf.call(Ut,t,void 0))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Bt(this),this.u=!0,this.g.send(e),this.u=!1}catch(a){Ft(this,a)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,te(this,"complete"),te(this,"abort"),zt(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),zt(this,!0)),Lt.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?jt(this):this.bb())},e.bb=function(){jt(this)},e.isActive=function(){return!!this.g},e.Z=function(){try{return 2<$t(this)?this.g.status:-1}catch(ct){return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch(ct){return""}},e.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),ce(t)}},e.Ba=function(){return this.m},e.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(e=Kt.prototype).la=8,e.G=1,e.connect=function(e,t,n,r){Se(0),this.W=e,this.H=t||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=cn(this,null,this.W),Yt(this)},e.Ga=function(e){if(this.s)if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new De(this,this.j,e);let s=this.o;if(this.S&&(s?(s=w(s),_(s,this.S)):s=this.S),null!==this.m||this.O||(i.H=s,s=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Zt(this,i,t),lt(n=it(this.I),"RID",e),lt(n,"CVER",22),this.D&&lt(n,"X-HTTP-Session-Id",this.D),Jt(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Dt(s)))+"&"+t:this.m&&Ot(n,this.m,s)),Je(this.h,i),this.Ua&&lt(n,"TYPE","init"),this.P?(lt(n,"$req",t),lt(n,"SID","null"),i.T=!0,Ue(i,n,null)):Ue(i,n,t),this.G=2}}else 3==this.G&&(e?Xt(this,e):0==this.i.length||Qe(this.h)||Xt(this))},e.Fa=function(){if(this.u=null,rn(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=Ie(u(this.ab,this),e)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Se(10),Gt(this),rn(this))},e.Za=function(){null!=this.C&&(this.C=null,Gt(this),tn(this),Se(19))},e.fb=function(e){e?(this.j.info("Successfully pinged google.com"),Se(2)):(this.j.info("Failed to ping google.com"),Se(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},(e=dn.prototype).ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){},fn.prototype.g=function(e,t){return new pn(e,t)},h(pn,ee),pn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},pn.prototype.close=function(){Wt(this.g)},pn.prototype.o=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.u&&((n={}).__data__=ue(e),e=n);t.i.push(new We(t.Ya++,e)),3==t.G&&Yt(t)},pn.prototype.N=function(){this.g.l=null,delete this.j,Wt(this.g),delete this.g,pn.aa.N.call(this)},h(mn,ge),h(gn,ye),h(yn,dn),yn.prototype.ua=function(){te(this.g,"a")},yn.prototype.ta=function(e){te(this.g,new mn(e))},yn.prototype.sa=function(e){te(this.g,new gn)},yn.prototype.ra=function(){te(this.g,"b")},fn.prototype.createWebChannel=fn.prototype.g,pn.prototype.send=pn.prototype.o,pn.prototype.open=pn.prototype.m,pn.prototype.close=pn.prototype.close,jm=function(){return new fn},Vm=function(){return be()},Fm=ve,Um={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ae.NO_ERROR=0,Ae.TIMEOUT=8,Ae.HTTP_ERROR=6,Mm=Ae,Re.COMPLETE="complete",Lm=Re,pe.EventType=me,me.OPEN="a",me.CLOSE="b",me.ERROR="c",me.MESSAGE="d",ee.prototype.listen=ee.prototype.K,Om=pe,Lt.prototype.listenOnce=Lt.prototype.L,Lt.prototype.getLastError=Lt.prototype.Ka,Lt.prototype.getLastErrorCode=Lt.prototype.Ba,Lt.prototype.getStatus=Lt.prototype.Z,Lt.prototype.getResponseJson=Lt.prototype.Oa,Lt.prototype.getResponseText=Lt.prototype.oa,Lt.prototype.send=Lt.prototype.ea,Lt.prototype.setWithCredentials=Lt.prototype.Ha,Dm=Lt}).apply(void 0!==zm?zm:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});const Bm="@firebase/firestore";
/**
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
 */class $m{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}$m.UNAUTHENTICATED=new $m(null),$m.GOOGLE_CREDENTIALS=new $m("google-credentials-uid"),$m.FIRST_PARTY=new $m("first-party-uid"),$m.MOCK_USER=new $m("mock-user");
/**
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
 */
let qm="10.14.0";
/**
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
 */const Hm=new dp("@firebase/firestore");function Km(){return Hm.logLevel}function Wm(e,...t){if(Hm.logLevel<=ap.DEBUG){const n=t.map(Ym);Hm.debug(`Firestore (${qm}): ${e}`,...n)}}function Gm(e,...t){if(Hm.logLevel<=ap.ERROR){const n=t.map(Ym);Hm.error(`Firestore (${qm}): ${e}`,...n)}}function Qm(e,...t){if(Hm.logLevel<=ap.WARN){const n=t.map(Ym);Hm.warn(`Firestore (${qm}): ${e}`,...n)}}function Ym(e){if("string"==typeof e)return e;try{
/**
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
    */
return t=e,JSON.stringify(t)}catch(rf){return e}var t}
/**
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
 */function Xm(e="Unexpected state"){const t=`FIRESTORE (${qm}) INTERNAL ASSERTION FAILED: `+e;throw Gm(t),new Error(t)}function Jm(e,t){e||Xm()}function Zm(e,t){return e}
/**
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
 */const eg={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class tg extends Wf{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */class ng{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
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
 */class rg{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ig{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t($m.UNAUTHENTICATED)))}shutdown(){}}class sg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class ag{constructor(e){this.t=e,this.currentUser=$m.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Jm(void 0===this.o);let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new ng;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ng,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},a=e=>{Wm("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit((e=>a(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?a(e):(Wm("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ng)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Wm("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Jm("string"==typeof t.accessToken),new rg(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Jm(null===e||"string"==typeof e),new $m(e)}}class og{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=$m.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class lg{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new og(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t($m.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ug{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cg{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Jm(void 0===this.o);const n=e=>{null!=e.error&&Wm("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.R;return this.R=e.token,Wm("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{Wm("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?r(e):Wm("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Jm("string"==typeof e.token),this.R=e.token,new ug(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
/**
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
 */function hg(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
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
 */class dg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(256/62);let n="";for(;n.length<20;){const r=hg(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%62))}return n}}function fg(e,t){return e<t?-1:e>t?1:0}function pg(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
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
 */class mg{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new tg(eg.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new tg(eg.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new tg(eg.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new tg(eg.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return mg.fromMillis(Date.now())}static fromDate(e){return mg.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new mg(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?fg(this.nanoseconds,e.nanoseconds):fg(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
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
 */class gg{constructor(e){this.timestamp=e}static fromTimestamp(e){return new gg(e)}static min(){return new gg(new mg(0,0))}static max(){return new gg(new mg(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
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
 */class yg{constructor(e,t,n){void 0===t?t=0:t>e.length&&Xm(),void 0===n?n=e.length-t:n>e.length-t&&Xm(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===yg.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof yg?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class vg extends yg{construct(e,t,n){return new vg(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new tg(eg.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new vg(t)}static emptyPath(){return new vg([])}}const wg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bg extends yg{construct(e,t,n){return new bg(e,t,n)}static isValidIdentifier(e){return wg.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bg.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new bg(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new tg(eg.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new tg(eg.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new tg(eg.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new tg(eg.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new bg(t)}static emptyPath(){return new bg([])}}
/**
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
 */class _g{constructor(e){this.path=e}static fromPath(e){return new _g(vg.fromString(e))}static fromName(e){return new _g(vg.fromString(e).popFirst(5))}static empty(){return new _g(vg.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===vg.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return vg.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _g(new vg(e.slice()))}}function Eg(e){return new kg(e.readTime,e.key,-1)}class kg{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new kg(gg.min(),_g.empty(),-1)}static max(){return new kg(gg.max(),_g.empty(),-1)}}function Sg(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=_g.comparator(e.documentKey,t.documentKey),0!==n?n:fg(e.largestBatchId,t.largestBatchId)
/**
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
 */)}class Tg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
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
 */async function Ig(e){if(e.code!==eg.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;Wm("LocalStore","Unexpectedly lost primary lease")}
/**
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
 */class Cg{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Xm(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Cg(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Cg?t:Cg.resolve(t)}catch(t){return Cg.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Cg.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Cg.reject(t)}static resolve(e){return new Cg(((t,n)=>{t(e)}))}static reject(e){return new Cg(((t,n)=>{n(e)}))}static waitFor(e){return new Cg(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=Cg.resolve(!1);for(const n of e)t=t.next((e=>e?Cg.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new Cg(((n,r)=>{const i=e.length,s=new Array(i);let a=0;for(let o=0;o<i;o++){const l=o;t(e[l]).next((e=>{s[l]=e,++a,a===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new Cg(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}function xg(e){return"IndexedDbTransactionError"===e.name}
/**
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
 */class Ng{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ie(e),this.se=e=>t.writeSequenceNumber(e))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}function Ag(e){return null==e}function Rg(e){return 0===e&&1/e==-1/0}
/**
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
 */
function Pg(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Dg(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Og(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
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
 */Ng.oe=-1;class Lg{constructor(e,t){this.comparator=e,this.root=t||Ug.EMPTY}insert(e,t){return new Lg(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ug.BLACK,null,null))}remove(e){return new Lg(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ug.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Mg(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Mg(this.root,e,this.comparator,!1)}getReverseIterator(){return new Mg(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Mg(this.root,e,this.comparator,!0)}}class Mg{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ug{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Ug.RED,this.left=null!=r?r:Ug.EMPTY,this.right=null!=i?i:Ug.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Ug(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ug.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Ug.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ug.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ug.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Xm();if(this.right.isRed())throw Xm();const e=this.left.check();if(e!==this.right.check())throw Xm();return e+(this.isRed()?0:1)}}Ug.EMPTY=null,Ug.RED=!0,Ug.BLACK=!1,Ug.EMPTY=new class{constructor(){this.size=0}get key(){throw Xm()}get value(){throw Xm()}get color(){throw Xm()}get left(){throw Xm()}get right(){throw Xm()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Ug(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
 */
class Fg{constructor(e){this.comparator=e,this.data=new Lg(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Vg(this.data.getIterator())}getIteratorFrom(e){return new Vg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Fg))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Fg(this.comparator);return t.data=e,t}}class Vg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
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
 */class jg{constructor(e){this.fields=e,e.sort(bg.comparator)}static empty(){return new jg([])}unionWith(e){let t=new Fg(bg.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new jg(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return pg(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */class zg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
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
 */class Bg{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new zg("Invalid base64 string: "+t):t}}(e);return new Bg(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Bg(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fg(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Bg.EMPTY_BYTE_STRING=new Bg("");const $g=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qg(e){if(Jm(!!e),"string"==typeof e){let t=0;const n=$g.exec(e);if(Jm(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Hg(e.seconds),nanos:Hg(e.nanos)}}function Hg(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Kg(e){return"string"==typeof e?Bg.fromBase64String(e):Bg.fromUint8Array(e)}
/**
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
 */function Wg(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Gg(e){const t=e.mapValue.fields.__previous_value__;return Wg(t)?Gg(t):t}function Qg(e){const t=qg(e.mapValue.fields.__local_write_time__.timestampValue);return new mg(t.seconds,t.nanos)}
/**
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
 */class Yg{constructor(e,t,n,r,i,s,a,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}}class Xg{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Xg("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Xg&&e.projectId===this.projectId&&e.database===this.database}}
/**
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
 */const Jg={fields:{__type__:{stringValue:"__max__"}}};function Zg(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Wg(e)?4:function(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
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
 */(e)?9007199254740991:function(e){var t,n;return"__vector__"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}(e)?10:11:Xm()}function ey(e,t){if(e===t)return!0;const n=Zg(e);if(n!==Zg(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Qg(e).isEqual(Qg(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=qg(e.timestampValue),r=qg(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return r=t,Kg(e.bytesValue).isEqual(Kg(r.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Hg(e.geoPointValue.latitude)===Hg(t.geoPointValue.latitude)&&Hg(e.geoPointValue.longitude)===Hg(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Hg(e.integerValue)===Hg(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Hg(e.doubleValue),r=Hg(t.doubleValue);return n===r?Rg(n)===Rg(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return pg(e.arrayValue.values||[],t.arrayValue.values||[],ey);case 10:case 11:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Pg(n)!==Pg(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!ey(n[i],r[i])))return!1;return!0}(e,t);default:return Xm()}var r}function ty(e,t){return void 0!==(e.values||[]).find((e=>ey(e,t)))}function ny(e,t){if(e===t)return 0;const n=Zg(e),r=Zg(t);if(n!==r)return fg(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return fg(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Hg(e.integerValue||e.doubleValue),r=Hg(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return ry(e.timestampValue,t.timestampValue);case 4:return ry(Qg(e),Qg(t));case 5:return fg(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Kg(e),r=Kg(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=fg(n[i],r[i]);if(0!==e)return e}return fg(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=fg(Hg(e.latitude),Hg(t.latitude));return 0!==n?n:fg(Hg(e.longitude),Hg(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return iy(e.arrayValue,t.arrayValue);case 10:return function(e,t){var n,r,i,s;const a=e.fields||{},o=t.fields||{},l=null===(n=a.value)||void 0===n?void 0:n.arrayValue,u=null===(r=o.value)||void 0===r?void 0:r.arrayValue,c=fg((null===(i=null==l?void 0:l.values)||void 0===i?void 0:i.length)||0,(null===(s=null==u?void 0:u.values)||void 0===s?void 0:s.length)||0);return 0!==c?c:iy(l,u)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===Jg&&t===Jg)return 0;if(e===Jg)return 1;if(t===Jg)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let a=0;a<r.length&&a<s.length;++a){const e=fg(r[a],s[a]);if(0!==e)return e;const t=ny(n[r[a]],i[s[a]]);if(0!==t)return t}return fg(r.length,s.length)}(e.mapValue,t.mapValue);default:throw Xm()}}function ry(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return fg(e,t);const n=qg(e),r=qg(t),i=fg(n.seconds,r.seconds);return 0!==i?i:fg(n.nanos,r.nanos)}function iy(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=ny(n[i],r[i]);if(e)return e}return fg(n.length,r.length)}function sy(e){return ay(e)}function ay(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=qg(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Kg(e.bytesValue).toBase64():"referenceValue"in e?function(e){return _g.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=ay(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${ay(e.fields[i])}`;return n+"}"}(e.mapValue):Xm()}function oy(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function ly(e){return!!e&&"integerValue"in e}function uy(e){return!!e&&"arrayValue"in e}function cy(e){return!!e&&"nullValue"in e}function hy(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function dy(e){return!!e&&"mapValue"in e}function fy(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Dg(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=fy(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=fy(e.arrayValue.values[n]);return t}return Object.assign({},e)}class py{constructor(e){this.value=e}static empty(){return new py({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!dy(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=fy(t)}setAll(e){let t=bg.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=fy(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());dy(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ey(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];dy(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Dg(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new py(fy(this.value))}}function my(e){const t=[];return Dg(e.fields,((e,n)=>{const r=new bg([e]);if(dy(n)){const e=my(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new jg(t)
/**
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
 */}class gy{constructor(e,t,n,r,i,s,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new gy(e,0,gg.min(),gg.min(),gg.min(),py.empty(),0)}static newFoundDocument(e,t,n,r){return new gy(e,1,t,gg.min(),n,r,0)}static newNoDocument(e,t){return new gy(e,2,t,gg.min(),gg.min(),py.empty(),0)}static newUnknownDocument(e,t){return new gy(e,3,t,gg.min(),gg.min(),py.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(gg.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=py.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=py.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=gg.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof gy&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gy(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
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
 */class yy{constructor(e,t){this.position=e,this.inclusive=t}}function vy(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],a=e.position[i];if(r=s.field.isKeyField()?_g.comparator(_g.fromName(a.referenceValue),n.key):ny(a,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function wy(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ey(e.position[n],t.position[n]))return!1;return!0}
/**
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
 */class by{constructor(e,t="asc"){this.field=e,this.dir=t}}function _y(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
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
 */class Ey{}class ky extends Ey{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Ay(e,t,n):"array-contains"===t?new Oy(e,n):"in"===t?new Ly(e,n):"not-in"===t?new My(e,n):"array-contains-any"===t?new Uy(e,n):new ky(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Ry(e,n):new Py(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(ny(t,this.value)):null!==t&&Zg(this.value)===Zg(t)&&this.matchesComparison(ny(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Xm()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Sy extends Ey{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Sy(e,t)}matches(e){return Ty(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ty(e){return"and"===e.op}function Iy(e){return function(e){for(const t of e.filters)if(t instanceof Sy)return!1;return!0}(e)&&Ty(e)}function Cy(e){if(e instanceof ky)return e.field.canonicalString()+e.op.toString()+sy(e.value);if(Iy(e))return e.filters.map((e=>Cy(e))).join(",");{const t=e.filters.map((e=>Cy(e))).join(",");return`${e.op}(${t})`}}function xy(e,t){return e instanceof ky?(n=e,(r=t)instanceof ky&&n.op===r.op&&n.field.isEqual(r.field)&&ey(n.value,r.value)):e instanceof Sy?function(e,t){return t instanceof Sy&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&xy(n,t.filters[r])),!0)}(e,t):void Xm();var n,r}function Ny(e){return e instanceof ky?`${(t=e).field.canonicalString()} ${t.op} ${sy(t.value)}`:e instanceof Sy?function(e){return e.op.toString()+" {"+e.getFilters().map(Ny).join(" ,")+"}"}(e):"Filter";var t}class Ay extends ky{constructor(e,t,n){super(e,t,n),this.key=_g.fromName(n.referenceValue)}matches(e){const t=_g.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ry extends ky{constructor(e,t){super(e,"in",t),this.keys=Dy("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Py extends ky{constructor(e,t){super(e,"not-in",t),this.keys=Dy("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Dy(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>_g.fromName(e.referenceValue)))}class Oy extends ky{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return uy(t)&&ty(t.arrayValue,this.value)}}class Ly extends ky{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&ty(this.value.arrayValue,t)}}class My extends ky{constructor(e,t){super(e,"not-in",t)}matches(e){if(ty(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!ty(this.value.arrayValue,t)}}class Uy extends ky{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!uy(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>ty(this.value.arrayValue,e)))}}
/**
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
 */class Fy{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.ue=null}}function Vy(e,t=null,n=[],r=[],i=null,s=null,a=null){return new Fy(e,t,n,r,i,s,a)}function jy(e){const t=Zm(e);if(null===t.ue){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>Cy(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>{return(t=e).field.canonicalString()+t.dir;var t})).join(","),Ag(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>sy(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>sy(e))).join(",")),t.ue=e}return t.ue}function zy(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!_y(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!xy(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!wy(e.startAt,t.startAt)&&wy(e.endAt,t.endAt)}function By(e){return _g.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
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
 */class $y{constructor(e,t=null,n=[],r=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function qy(e){return new $y(e)}function Hy(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Ky(e){return null!==e.collectionGroup}function Wy(e){const t=Zm(e);if(null===t.ce){t.ce=[];const e=new Set;for(const r of t.explicitOrderBy)t.ce.push(r),e.add(r.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(e){let t=new Fg(bg.comparator);return e.filters.forEach((e=>{e.getFlattenedFilters().forEach((e=>{e.isInequality()&&(t=t.add(e.field))}))})),t})(t).forEach((r=>{e.has(r.canonicalString())||r.isKeyField()||t.ce.push(new by(r,n))})),e.has(bg.keyField().canonicalString())||t.ce.push(new by(bg.keyField(),n))}return t.ce}function Gy(e){const t=Zm(e);return t.le||(t.le=function(e,t){if("F"===e.limitType)return Vy(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map((e=>{const t="desc"===e.dir?"asc":"desc";return new by(e.field,t)}));const n=e.endAt?new yy(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new yy(e.startAt.position,e.startAt.inclusive):null;return Vy(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(t,Wy(e))),t.le}function Qy(e,t){const n=e.filters.concat([t]);return new $y(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Yy(e,t,n){return new $y(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Xy(e,t){return zy(Gy(e),Gy(t))&&e.limitType===t.limitType}function Jy(e){return`${jy(Gy(e))}|lt:${e.limitType}`}function Zy(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>Ny(e))).join(", ")}]`),Ag(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t})).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>sy(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>sy(e))).join(",")),`Target(${t})`}(Gy(e))}; limitType=${e.limitType})`}function ev(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):_g.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of Wy(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(r=t,!((n=e).startAt&&!function(e,t,n){const r=vy(e,t,n);return e.inclusive?r<=0:r<0}(n.startAt,Wy(n),r)||n.endAt&&!function(e,t,n){const r=vy(e,t,n);return e.inclusive?r>=0:r>0}(n.endAt,Wy(n),r)));var n,r}function tv(e){return(t,n)=>{let r=!1;for(const i of Wy(e)){const e=nv(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function nv(e,t,n){const r=e.field.isKeyField()?_g.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?ny(r,i):Xm()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Xm()}}
/**
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
 */class rv{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Dg(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return Og(this.inner)}size(){return this.innerSize}}
/**
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
 */const iv=new Lg(_g.comparator);function sv(){return iv}const av=new Lg(_g.comparator);function ov(...e){let t=av;for(const n of e)t=t.insert(n.key,n);return t}function lv(e){let t=av;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function uv(){return hv()}function cv(){return hv()}function hv(){return new rv((e=>e.toString()),((e,t)=>e.isEqual(t)))}const dv=new Lg(_g.comparator),fv=new Fg(_g.comparator);function pv(...e){let t=fv;for(const n of e)t=t.add(n);return t}const mv=new Fg(fg);
/**
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
 */
function gv(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rg(t)?"-0":t}}function yv(e){return{integerValue:""+e}}function vv(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!Rg(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}(t)?yv(t):gv(e,t)}
/**
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
 */class wv{constructor(){this._=void 0}}function bv(e,t,n){return e instanceof kv?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&Wg(t)&&(t=Gg(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Sv?Tv(e,t):e instanceof Iv?Cv(e,t):function(e,t){const n=Ev(e,t),r=Nv(n)+Nv(e.Pe);return ly(n)&&ly(e.Pe)?yv(r):gv(e.serializer,r)}(e,t)}function _v(e,t,n){return e instanceof Sv?Tv(e,t):e instanceof Iv?Cv(e,t):n}function Ev(e,t){return e instanceof xv?ly(n=t)||(r=n)&&"doubleValue"in r?t:{integerValue:0}:null;var n,r}class kv extends wv{}class Sv extends wv{constructor(e){super(),this.elements=e}}function Tv(e,t){const n=Av(t);for(const r of e.elements)n.some((e=>ey(e,r)))||n.push(r);return{arrayValue:{values:n}}}class Iv extends wv{constructor(e){super(),this.elements=e}}function Cv(e,t){let n=Av(t);for(const r of e.elements)n=n.filter((e=>!ey(e,r)));return{arrayValue:{values:n}}}class xv extends wv{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Nv(e){return Hg(e.integerValue||e.doubleValue)}function Av(e){return uy(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
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
 */class Rv{constructor(e,t){this.field=e,this.transform=t}}class Pv{constructor(e,t){this.version=e,this.transformResults=t}}class Dv{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Dv}static exists(e){return new Dv(void 0,e)}static updateTime(e){return new Dv(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ov(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Lv{}function Mv(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Kv(e.key,Dv.none()):new zv(e.key,e.data,Dv.none());{const n=e.data,r=py.empty();let i=new Fg(bg.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new Bv(e.key,r,new jg(i.toArray()),Dv.none())}}function Uv(e,t,n){var r;e instanceof zv?function(e,t,n){const r=e.value.clone(),i=qv(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Bv?function(e,t,n){if(!Ov(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=qv(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll($v(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):(r=n,t.convertToNoDocument(r.version).setHasCommittedMutations())}function Fv(e,t,n,r){return e instanceof zv?function(e,t,n,r){if(!Ov(e.precondition,t))return n;const i=e.value.clone(),s=Hv(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof Bv?function(e,t,n,r){if(!Ov(e.precondition,t))return n;const i=Hv(e.fieldTransforms,r,t),s=t.data;return s.setAll($v(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):(i=t,s=n,Ov(e.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):s);var i,s}function Vv(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Ev(r.transform,e||null);null!=i&&(null===n&&(n=py.empty()),n.set(r.field,i))}return n||null}function jv(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&pg(n,r,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof Sv&&r instanceof Sv||n instanceof Iv&&r instanceof Iv?pg(n.elements,r.elements,ey):n instanceof xv&&r instanceof xv?ey(n.Pe,r.Pe):n instanceof kv&&r instanceof kv);var n,r}(e,t))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask)));var n,r}class zv extends Lv{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Bv extends Lv{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function $v(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function qv(e,t,n){const r=new Map;Jm(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],a=s.transform,o=t.data.field(s.field);r.set(s.field,_v(a,o,n[i]))}return r}function Hv(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,bv(e,s,t))}return r}class Kv extends Lv{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Wv extends Lv{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
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
 */class Gv{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&Uv(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Fv(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Fv(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=cv();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let a=this.applyToLocalView(s,i.mutatedFields);a=t.has(r.key)?null:a;const o=Mv(s,a);null!==o&&n.set(r.key,o),s.isValidDocument()||s.convertToNoDocument(gg.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),pv())}isEqual(e){return this.batchId===e.batchId&&pg(this.mutations,e.mutations,((e,t)=>jv(e,t)))&&pg(this.baseMutations,e.baseMutations,((e,t)=>jv(e,t)))}}class Qv{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Jm(e.mutations.length===n.length);let r=function(){return dv}();const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Qv(e,t,n,r)}}
/**
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
 */class Yv{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
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
 */class Xv{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
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
 */var Jv,Zv;function ew(e){if(void 0===e)return Gm("GRPC error has no .code"),eg.UNKNOWN;switch(e){case Jv.OK:return eg.OK;case Jv.CANCELLED:return eg.CANCELLED;case Jv.UNKNOWN:return eg.UNKNOWN;case Jv.DEADLINE_EXCEEDED:return eg.DEADLINE_EXCEEDED;case Jv.RESOURCE_EXHAUSTED:return eg.RESOURCE_EXHAUSTED;case Jv.INTERNAL:return eg.INTERNAL;case Jv.UNAVAILABLE:return eg.UNAVAILABLE;case Jv.UNAUTHENTICATED:return eg.UNAUTHENTICATED;case Jv.INVALID_ARGUMENT:return eg.INVALID_ARGUMENT;case Jv.NOT_FOUND:return eg.NOT_FOUND;case Jv.ALREADY_EXISTS:return eg.ALREADY_EXISTS;case Jv.PERMISSION_DENIED:return eg.PERMISSION_DENIED;case Jv.FAILED_PRECONDITION:return eg.FAILED_PRECONDITION;case Jv.ABORTED:return eg.ABORTED;case Jv.OUT_OF_RANGE:return eg.OUT_OF_RANGE;case Jv.UNIMPLEMENTED:return eg.UNIMPLEMENTED;case Jv.DATA_LOSS:return eg.DATA_LOSS;default:return Xm()}}(Zv=Jv||(Jv={}))[Zv.OK=0]="OK",Zv[Zv.CANCELLED=1]="CANCELLED",Zv[Zv.UNKNOWN=2]="UNKNOWN",Zv[Zv.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Zv[Zv.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Zv[Zv.NOT_FOUND=5]="NOT_FOUND",Zv[Zv.ALREADY_EXISTS=6]="ALREADY_EXISTS",Zv[Zv.PERMISSION_DENIED=7]="PERMISSION_DENIED",Zv[Zv.UNAUTHENTICATED=16]="UNAUTHENTICATED",Zv[Zv.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Zv[Zv.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Zv[Zv.ABORTED=10]="ABORTED",Zv[Zv.OUT_OF_RANGE=11]="OUT_OF_RANGE",Zv[Zv.UNIMPLEMENTED=12]="UNIMPLEMENTED",Zv[Zv.INTERNAL=13]="INTERNAL",Zv[Zv.UNAVAILABLE=14]="UNAVAILABLE",Zv[Zv.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */
const tw=new Am([4294967295,4294967295],0);function nw(e){const t=(new TextEncoder).encode(e),n=new Rm;return n.update(t),new Uint8Array(n.digest())}function rw(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Am([n,r],0),new Am([i,s],0)]}class iw{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new sw(`Invalid padding: ${t}`);if(n<0)throw new sw(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new sw(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new sw(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Am.fromNumber(this.Ie)}Ee(e,t,n){let r=e.add(t.multiply(Am.fromNumber(n)));return 1===r.compare(tw)&&(r=new Am([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ie)return!1;const t=nw(e),[n,r]=rw(t);for(let i=0;i<this.hashCount;i++){const e=this.Ee(n,r,i);if(!this.de(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new iw(i,r,t);return n.forEach((e=>s.insert(e))),s}insert(e){if(0===this.Ie)return;const t=nw(e),[n,r]=rw(t);for(let i=0;i<this.hashCount;i++){const e=this.Ee(n,r,i);this.Ae(e)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class sw extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
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
 */class aw{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,ow.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new aw(gg.min(),r,new Lg(fg),sv(),pv())}}class ow{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new ow(n,t,pv(),pv(),pv())}}
/**
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
 */class lw{constructor(e,t,n,r){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=r}}class uw{constructor(e,t){this.targetId=e,this.me=t}}class cw{constructor(e,t,n=Bg.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class hw{constructor(){this.fe=0,this.ge=pw(),this.pe=Bg.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=pv(),t=pv(),n=pv();return this.ge.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Xm()}})),new ow(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=pw()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Jm(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class dw{constructor(e){this.Le=e,this.Be=new Map,this.ke=sv(),this.qe=fw(),this.Qe=new Lg(fg)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,(t=>{const n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:Xm()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach(((e,n)=>{this.ze(n)&&t(n)}))}He(e){const t=e.targetId,n=e.me.count,r=this.Je(t);if(r){const i=r.target;if(By(i))if(0===n){const e=new _g(i.path);this.Ue(t,e,gy.newNoDocument(e,gg.min()))}else Jm(1===n);else{const r=this.Ye(t);if(r!==n){const n=this.Ze(e),i=n?this.Xe(n,e,r):1;if(0!==i){this.je(t);const e=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,e)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=t;let s,a;try{s=Kg(n).toUint8Array()}catch(o){if(o instanceof zg)return Qm("Decoding the base64 bloom filter in existence filter failed ("+o.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw o}try{a=new iw(s,r,i)}catch(o){return Qm(o instanceof sw?"BloomFilter error: ":"Applying bloom filter failed: ",o),null}return 0===a.Ie?null:a}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let r=0;return n.forEach((n=>{const i=this.Le.tt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.Ue(t,n,null),r++)})),r}rt(e){const t=new Map;this.Be.forEach(((n,r)=>{const i=this.Je(r);if(i){if(n.current&&By(i.target)){const t=new _g(i.target.path);null!==this.ke.get(t)||this.it(r,t)||this.Ue(r,t,gy.newNoDocument(t,e))}n.be&&(t.set(r,n.ve()),n.Ce())}}));let n=pv();this.qe.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Je(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.ke.forEach(((t,n)=>n.setReadTime(e)));const r=new aw(e,t,this.Qe,this.ke,n);return this.ke=sv(),this.qe=fw(),this.Qe=new Lg(fg),r}$e(e,t){if(!this.ze(e))return;const n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;const r=this.Ge(e);this.it(e,t)?r.Fe(t,1):r.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new hw,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Fg(fg),this.qe=this.qe.insert(e,t)),t}ze(e){const t=null!==this.Je(e);return t||Wm("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new hw),this.Le.getRemoteKeysForTarget(e).forEach((t=>{this.Ue(e,t,null)}))}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function fw(){return new Lg(_g.comparator)}function pw(){return new Lg(_g.comparator)}const mw=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),gw=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),yw=(()=>({and:"AND",or:"OR"}))();class vw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ww(e,t){return e.useProto3Json||Ag(t)?t:{value:t}}function bw(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function _w(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Ew(e,t){return bw(e,t.toTimestamp())}function kw(e){return Jm(!!e),gg.fromTimestamp(function(e){const t=qg(e);return new mg(t.seconds,t.nanos)}(e))}function Sw(e,t){return Tw(e,t).canonicalString()}function Tw(e,t){const n=(r=e,new vg(["projects",r.projectId,"databases",r.database])).child("documents");var r;return void 0===t?n:n.child(t)}function Iw(e){const t=vg.fromString(e);return Jm(qw(t)),t}function Cw(e,t){return Sw(e.databaseId,t.path)}function xw(e,t){const n=Iw(t);if(n.get(1)!==e.databaseId.projectId)throw new tg(eg.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new tg(eg.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new _g(Rw(n))}function Nw(e,t){return Sw(e.databaseId,t)}function Aw(e){return new vg(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Rw(e){return Jm(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Pw(e,t,n){return{name:Cw(e,t),fields:n.value.mapValue.fields}}function Dw(e,t){return{documents:[Nw(e,t.path)]}}function Ow(e,t){const n={structuredQuery:{}},r=t.path;let i;null!==t.collectionGroup?(i=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Nw(e,i);const s=function(e){if(0!==e.length)return Bw(Sy.create(e,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const a=function(e){if(0!==e.length)return e.map((e=>{return{field:jw((t=e).field),direction:Uw(t.dir)};var t}))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);const o=ww(e,t.limit);return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(l=t.startAt).inclusive,values:l.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{_t:n,parent:i};var l}function Lw(e){let t=function(e){const t=Iw(e);return 4===t.length?vg.emptyPath():Rw(t)}(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Jm(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=Mw(e);return t instanceof Sy&&Iy(t)?t.getFilters():[t]}(n.where));let a=[];n.orderBy&&(a=n.orderBy.map((e=>{return new by(zw((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));let o=null;n.limit&&(o=function(e){let t;return t="object"==typeof e?e.value:e,Ag(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new yy(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new yy(n,t)}(n.endAt)),function(e,t,n,r,i,s,a,o){return new $y(e,t,n,r,i,s,a,o)}(t,i,a,s,o,"F",l,u)}function Mw(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=zw(e.unaryFilter.field);return ky.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=zw(e.unaryFilter.field);return ky.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=zw(e.unaryFilter.field);return ky.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=zw(e.unaryFilter.field);return ky.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Xm()}}(e):void 0!==e.fieldFilter?(t=e,ky.create(zw(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Xm()}}(t.fieldFilter.op),t.fieldFilter.value)):void 0!==e.compositeFilter?function(e){return Sy.create(e.compositeFilter.filters.map((e=>Mw(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Xm()}}(e.compositeFilter.op))}(e):Xm();var t}function Uw(e){return mw[e]}function Fw(e){return gw[e]}function Vw(e){return yw[e]}function jw(e){return{fieldPath:e.canonicalString()}}function zw(e){return bg.fromServerFormat(e.fieldPath)}function Bw(e){return e instanceof ky?function(e){if("=="===e.op){if(hy(e.value))return{unaryFilter:{field:jw(e.field),op:"IS_NAN"}};if(cy(e.value))return{unaryFilter:{field:jw(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(hy(e.value))return{unaryFilter:{field:jw(e.field),op:"IS_NOT_NAN"}};if(cy(e.value))return{unaryFilter:{field:jw(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:jw(e.field),op:Fw(e.op),value:e.value}}}(e):e instanceof Sy?function(e){const t=e.getFilters().map((e=>Bw(e)));return 1===t.length?t[0]:{compositeFilter:{op:Vw(e.op),filters:t}}}(e):Xm()}function $w(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function qw(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
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
 */class Hw{constructor(e,t,n,r,i=gg.min(),s=gg.min(),a=Bg.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new Hw(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Hw(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Hw(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Hw(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
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
 */class Kw{constructor(e){this.ct=e}}function Ww(e){const t=Lw({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Yy(t,t.limit,"L"):t}
/**
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
 */class Gw{constructor(){this.un=new Qw}addToCollectionParentIndex(e,t){return this.un.add(t),Cg.resolve()}getCollectionParents(e,t){return Cg.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return Cg.resolve()}deleteFieldIndex(e,t){return Cg.resolve()}deleteAllFieldIndexes(e){return Cg.resolve()}createTargetIndexes(e,t){return Cg.resolve()}getDocumentsMatchingTarget(e,t){return Cg.resolve(null)}getIndexType(e,t){return Cg.resolve(0)}getFieldIndexes(e,t){return Cg.resolve([])}getNextCollectionGroupToUpdate(e){return Cg.resolve(null)}getMinOffset(e,t){return Cg.resolve(kg.min())}getMinOffsetFromCollectionGroup(e,t){return Cg.resolve(kg.min())}updateCollectionGroup(e,t,n){return Cg.resolve()}updateIndexEntries(e,t){return Cg.resolve()}}class Qw{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Fg(vg.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Fg(vg.comparator)).toArray()}}
/**
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
 */class Yw{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Yw(0)}static kn(){return new Yw(-1)}}
/**
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
 */class Xw{constructor(){this.changes=new rv((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,gy.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Cg.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
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
 */
/**
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
 */class Jw{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
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
 */class Zw{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&Fv(n.mutation,e,jg.empty(),mg.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,pv()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=pv()){const r=uv();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=ov();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=uv();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,pv())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=sv();const s=hv(),a=hv();return t.forEach(((e,t)=>{const a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof Bv)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),Fv(a.mutation,t,a.mutation.getFieldMask(),mg.now())):s.set(t.key,jg.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return a.set(e,new Jw(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),a)))}recalculateAndSaveOverlays(e,t){const n=hv();let r=new Lg(((e,t)=>e-t)),i=pv();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let a=n.get(e)||jg.empty();a=i.applyToLocalView(s,a),n.set(e,a);const o=(r.get(i.batchId)||pv()).add(e);r=r.insert(i.batchId,o)}))})).next((()=>{const s=[],a=r.getReverseIterator();for(;a.hasNext();){const r=a.getNext(),o=r.key,l=r.value,u=cv();l.forEach((e=>{if(!i.has(e)){const r=Mv(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,o,u))}return Cg.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n,r){return i=t,_g.isDocumentKey(i.path)&&null===i.collectionGroup&&0===i.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):Ky(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r);var i}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):Cg.resolve(uv());let a=-1,o=i;return s.next((t=>Cg.forEach(t,((t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),i.get(t)?Cg.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{o=o.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,o,t,pv()))).next((e=>({batchId:a,changes:lv(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new _g(t)).next((e=>{let t=ov();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup;let s=ov();return this.indexManager.getCollectionParents(e,i).next((a=>Cg.forEach(a,(a=>{const o=(l=t,u=a.child(i),new $y(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt));var l,u;return this.getDocumentsMatchingCollectionQuery(e,o,n,r).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r)))).next((e=>{i.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,gy.newInvalidDocument(r)))}));let n=ov();return e.forEach(((e,r)=>{const s=i.get(e);void 0!==s&&Fv(s.mutation,r,jg.empty(),mg.now()),ev(t,r)&&(n=n.insert(e,r))})),n}))}}
/**
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
 */class eb{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return Cg.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,{id:(n=t).id,version:n.version,createTime:kw(n.createTime)}),Cg.resolve();var n}getNamedQuery(e,t){return Cg.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,{name:(n=t).name,query:Ww(n.bundledQuery),readTime:kw(n.readTime)}),Cg.resolve();var n}}
/**
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
 */class tb{constructor(){this.overlays=new Lg(_g.comparator),this.Ir=new Map}getOverlay(e,t){return Cg.resolve(this.overlays.get(t))}getOverlays(e,t){const n=uv();return Cg.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.ht(e,t,r)})),Cg.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Ir.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.Ir.delete(n)),Cg.resolve()}getOverlaysForCollection(e,t,n){const r=uv(),i=t.length+1,s=new _g(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){const e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Cg.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Lg(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=uv(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const a=uv(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach(((e,t)=>a.set(e,t))),!(a.size()>=r)););return Cg.resolve(a)}ht(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.Ir.get(r.largestBatchId).delete(n.key);this.Ir.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Yv(t,n));let i=this.Ir.get(t);void 0===i&&(i=pv(),this.Ir.set(t,i)),this.Ir.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
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
 */class nb{constructor(){this.sessionToken=Bg.EMPTY_BYTE_STRING}getSessionToken(e){return Cg.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Cg.resolve()}}
/**
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
 */class rb{constructor(){this.Tr=new Fg(ib.Er),this.dr=new Fg(ib.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const n=new ib(e,t);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.Vr(new ib(e,t))}mr(e,t){e.forEach((e=>this.removeReference(e,t)))}gr(e){const t=new _g(new vg([])),n=new ib(t,e),r=new ib(t,e+1),i=[];return this.dr.forEachInRange([n,r],(e=>{this.Vr(e),i.push(e.key)})),i}pr(){this.Tr.forEach((e=>this.Vr(e)))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new _g(new vg([])),n=new ib(t,e),r=new ib(t,e+1);let i=pv();return this.dr.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new ib(e,0),n=this.Tr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class ib{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return _g.comparator(e.key,t.key)||fg(e.wr,t.wr)}static Ar(e,t){return fg(e.wr,t.wr)||_g.comparator(e.key,t.key)}}
/**
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
 */class sb{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Fg(ib.Er)}checkEmpty(e){return Cg.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Gv(i,t,n,r);this.mutationQueue.push(s);for(const a of r)this.br=this.br.add(new ib(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return Cg.resolve(s)}lookupMutationBatch(e,t){return Cg.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.vr(n),i=r<0?0:r;return Cg.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Cg.resolve(0===this.mutationQueue.length?-1:this.Sr-1)}getAllMutationBatches(e){return Cg.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new ib(t,0),r=new ib(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([n,r],(e=>{const t=this.Dr(e.wr);i.push(t)})),Cg.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Fg(fg);return t.forEach((e=>{const t=new ib(e,0),r=new ib(e,Number.POSITIVE_INFINITY);this.br.forEachInRange([t,r],(e=>{n=n.add(e.wr)}))})),Cg.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;_g.isDocumentKey(i)||(i=i.child(""));const s=new ib(new _g(i),0);let a=new Fg(fg);return this.br.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.wr)),!0)}),s),Cg.resolve(this.Cr(a))}Cr(e){const t=[];return e.forEach((e=>{const n=this.Dr(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Jm(0===this.Fr(t.batchId,"removed")),this.mutationQueue.shift();let n=this.br;return Cg.forEach(t.mutations,(r=>{const i=new ib(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.br=n}))}On(e){}containsKey(e,t){const n=new ib(t,0),r=this.br.firstAfterOrEqual(n);return Cg.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Cg.resolve()}Fr(e,t){return this.vr(e)}vr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
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
 */class ab{constructor(e){this.Mr=e,this.docs=new Lg(_g.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Mr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Cg.resolve(n?n.document.mutableCopy():gy.newInvalidDocument(t))}getEntries(e,t){let n=sv();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():gy.newInvalidDocument(e))})),Cg.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=sv();const s=t.path,a=new _g(s.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){const{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||Sg(Eg(a),n)<=0||(r.has(a.key)||ev(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return Cg.resolve(i)}getAllFromCollectionGroup(e,t,n,r){Xm()}Or(e,t){return Cg.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new ob(this)}getSize(e){return Cg.resolve(this.size)}}class ob extends Xw{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.cr.addEntry(e,r)):this.cr.removeEntry(n)})),Cg.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}
/**
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
 */class lb{constructor(e){this.persistence=e,this.Nr=new rv((e=>jy(e)),zy),this.lastRemoteSnapshotVersion=gg.min(),this.highestTargetId=0,this.Lr=0,this.Br=new rb,this.targetCount=0,this.kr=Yw.Bn()}forEachTarget(e,t){return this.Nr.forEach(((e,n)=>t(n))),Cg.resolve()}getLastRemoteSnapshotVersion(e){return Cg.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Cg.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),Cg.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Lr&&(this.Lr=t),Cg.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Yw(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,Cg.resolve()}updateTargetData(e,t){return this.Kn(t),Cg.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,Cg.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Nr.forEach(((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Nr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)})),Cg.waitFor(i).next((()=>r))}getTargetCount(e){return Cg.resolve(this.targetCount)}getTargetData(e,t){const n=this.Nr.get(t)||null;return Cg.resolve(n)}addMatchingKeys(e,t,n){return this.Br.Rr(t,n),Cg.resolve()}removeMatchingKeys(e,t,n){this.Br.mr(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),Cg.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),Cg.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Br.yr(t);return Cg.resolve(n)}containsKey(e,t){return Cg.resolve(this.Br.containsKey(t))}}
/**
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
 */class ub{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Ng(0),this.Kr=!1,this.Kr=!0,this.$r=new nb,this.referenceDelegate=e(this),this.Ur=new lb(this),this.indexManager=new Gw,this.remoteDocumentCache=new ab((e=>this.referenceDelegate.Wr(e))),this.serializer=new Kw(t),this.Gr=new eb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new tb,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.qr[e.toKey()];return n||(n=new sb(t,this.referenceDelegate),this.qr[e.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,n){Wm("MemoryPersistence","Starting transaction:",e);const r=new cb(this.Qr.next());return this.referenceDelegate.zr(),n(r).next((e=>this.referenceDelegate.jr(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Hr(e,t){return Cg.or(Object.values(this.qr).map((n=>()=>n.containsKey(e,t))))}}class cb extends Tg{constructor(e){super(),this.currentSequenceNumber=e}}class hb{constructor(e){this.persistence=e,this.Jr=new rb,this.Yr=null}static Zr(e){return new hb(e)}get Xr(){if(this.Yr)return this.Yr;throw Xm()}addReference(e,t,n){return this.Jr.addReference(n,t),this.Xr.delete(n.toString()),Cg.resolve()}removeReference(e,t,n){return this.Jr.removeReference(n,t),this.Xr.add(n.toString()),Cg.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),Cg.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach((e=>this.Xr.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Xr.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Cg.forEach(this.Xr,(n=>{const r=_g.fromPath(n);return this.ei(e,r).next((e=>{e||t.removeEntry(r,gg.min())}))})).next((()=>(this.Yr=null,t.apply(e))))}updateLimboDocument(e,t){return this.ei(e,t).next((e=>{e?this.Xr.delete(t.toString()):this.Xr.add(t.toString())}))}Wr(e){return 0}ei(e,t){return Cg.or([()=>Cg.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}
/**
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
 */class db{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.$i=n,this.Ui=r}static Wi(e,t){let n=pv(),r=pv();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new db(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */class fb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
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
 */class pb{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=Kf()?8:function(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}(Hf())>0?6:4}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null};return this.Yi(e,t).next((e=>{i.result=e})).next((()=>{if(!i.result)return this.Zi(e,t,r,n).next((e=>{i.result=e}))})).next((()=>{if(i.result)return;const n=new fb;return this.Xi(e,t,n).next((r=>{if(i.result=r,this.zi)return this.es(e,t,n,r.size)}))})).next((()=>i.result))}es(e,t,n,r){return n.documentReadCount<this.ji?(Km()<=ap.DEBUG&&Wm("QueryEngine","SDK will not create cache indexes for query:",Zy(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),Cg.resolve()):(Km()<=ap.DEBUG&&Wm("QueryEngine","Query:",Zy(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Hi*r?(Km()<=ap.DEBUG&&Wm("QueryEngine","The SDK decides to create cache indexes for query:",Zy(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Gy(t))):Cg.resolve())}Yi(e,t){if(Hy(t))return Cg.resolve(null);let n=Gy(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=Yy(t,null,"F"),n=Gy(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=pv(...r);return this.Ji.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.ts(t,r);return this.ns(t,s,i,n.readTime)?this.Yi(e,Yy(t,null,"F")):this.rs(e,s,t,n)}))))})))))}Zi(e,t,n,r){return Hy(t)||r.isEqual(gg.min())?Cg.resolve(null):this.Ji.getDocuments(e,n).next((i=>{const s=this.ts(t,i);return this.ns(t,s,n,r)?Cg.resolve(null):(Km()<=ap.DEBUG&&Wm("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Zy(t)),this.rs(e,s,t,function(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=gg.fromTimestamp(1e9===r?new mg(n+1,0):new mg(n,r));return new kg(i,_g.empty(),t)}(r,-1)).next((e=>e)))}))}ts(e,t){let n=new Fg(tv(e));return t.forEach(((t,r)=>{ev(e,r)&&(n=n.add(r))})),n}ns(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Xi(e,t,n){return Km()<=ap.DEBUG&&Wm("QueryEngine","Using full collection scan to execute query:",Zy(t)),this.Ji.getDocumentsMatchingQuery(e,t,kg.min(),n)}rs(e,t,n,r){return this.Ji.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
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
 */class mb{constructor(e,t,n,r){this.persistence=e,this.ss=t,this.serializer=r,this.os=new Lg(fg),this._s=new rv((e=>jy(e)),zy),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(n)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Zw(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.os)))}}async function gb(e,t){const n=Zm(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.ls(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let a=pv();for(const e of r){i.push(e.batchId);for(const t of e.mutations)a=a.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)a=a.add(t.key)}return n.localDocuments.getDocuments(e,a).next((e=>({hs:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function yb(e){const t=Zm(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Ur.getLastRemoteSnapshotVersion(e)))}function vb(e,t){const n=Zm(e),r=t.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];t.targetChanges.forEach(((s,o)=>{const l=i.get(o);if(!l)return;a.push(n.Ur.removeMatchingKeys(e,s.removedDocuments,o).next((()=>n.Ur.addMatchingKeys(e,s.addedDocuments,o))));let u=l.withSequenceNumber(e.currentSequenceNumber);var c,h,d;null!==t.targetMismatches.get(o)?u=u.withResumeToken(Bg.EMPTY_BYTE_STRING,gg.min()).withLastLimboFreeSnapshotVersion(gg.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(o,u),h=u,d=s,(0===(c=l).resumeToken.approximateByteSize()||h.snapshotVersion.toMicroseconds()-c.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&a.push(n.Ur.updateTargetData(e,u))}));let o=sv(),l=pv();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),a.push(function(e,t,n){let r=pv(),i=pv();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=sv();return n.forEach(((n,s)=>{const a=e.get(n);s.isFoundDocument()!==a.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(gg.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!a.isValidDocument()||s.version.compareTo(a.version)>0||0===s.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):Wm("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",s.version)})),{Ps:r,Is:i}}))}(e,s,t.documentUpdates).next((e=>{o=e.Ps,l=e.Is}))),!r.isEqual(gg.min())){const t=n.Ur.getLastRemoteSnapshotVersion(e).next((t=>n.Ur.setTargetsMetadata(e,e.currentSequenceNumber,r)));a.push(t)}return Cg.waitFor(a).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,o,l))).next((()=>o))})).then((e=>(n.os=i,e)))}function wb(e,t){const n=Zm(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}async function bb(e,t,n){const r=Zm(e),i=r.os.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(a){if(!xg(a))throw a;Wm("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.os=r.os.remove(t),r._s.delete(i.target)}function _b(e,t,n){const r=Zm(e);let i=gg.min(),s=pv();return r.persistence.runTransaction("Execute query","readwrite",(e=>function(e,t,n){const r=Zm(e),i=r._s.get(n);return void 0!==i?Cg.resolve(r.os.get(i)):r.Ur.getTargetData(t,n)}(r,e,Gy(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.ss.getDocumentsMatchingQuery(e,t,n?i:gg.min(),n?s:pv()))).next((e=>(function(e,t,n){let r=e.us.get(t)||gg.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.us.set(t,r)}(r,function(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}(t),e),{documents:e,Ts:s})))))}class Eb{constructor(){this.activeTargetIds=mv}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class kb{constructor(){this.so=new Eb,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,n){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Eb,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
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
 */class Sb{_o(e){}shutdown(){}}
/**
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
 */class Tb{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Wm("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Wm("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Ib=null;function Cb(){return null===Ib?Ib=268435456+Math.round(2147483648*Math.random()):Ib++,"0x"+Ib.toString(16)
/**
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
 */}const xb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
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
 */class Nb{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}
/**
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
 */const Ab="WebChannelConnection";class Rb extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Do=t+"://"+e.host,this.vo=`projects/${n}/databases/${r}`,this.Co="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get Fo(){return!1}Mo(e,t,n,r,i){const s=Cb(),a=this.xo(e,t.toUriEncodedString());Wm("RestConnection",`Sending RPC '${e}' ${s}:`,a,n);const o={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(o,r,i),this.No(e,a,o,n).then((t=>(Wm("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw Qm("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",n),t}))}Lo(e,t,n,r,i,s){return this.Mo(e,t,n,r,i)}Oo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+qm,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}xo(e,t){const n=xb[e];return`${this.Do}/v1/${t}:${n}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,n,r){const i=Cb();return new Promise(((s,a)=>{const o=new Dm;o.setWithCredentials(!0),o.listenOnce(Lm.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Mm.NO_ERROR:const t=o.getResponseJson();Wm(Ab,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case Mm.TIMEOUT:Wm(Ab,`RPC '${e}' ${i} timed out`),a(new tg(eg.DEADLINE_EXCEEDED,"Request time out"));break;case Mm.HTTP_ERROR:const n=o.getStatus();if(Wm(Ab,`RPC '${e}' ${i} failed with status:`,n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(eg).indexOf(t)>=0?t:eg.UNKNOWN}(t.status);a(new tg(e,t.message))}else a(new tg(eg.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new tg(eg.UNAVAILABLE,"Connection failed."));break;default:Xm()}}finally{Wm(Ab,`RPC '${e}' ${i} completed.`)}}));const l=JSON.stringify(r);Wm(Ab,`RPC '${e}' ${i} sending request:`,r),o.send(t,"POST",l,n,15)}))}Bo(e,t,n){const r=Cb(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=jm(),a=Vm(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(o.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(o.useFetchStreams=!0),this.Oo(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;const u=i.join("");Wm(Ab,`Creating RPC '${e}' stream ${r}: ${u}`,o);const c=s.createWebChannel(u,o);let h=!1,d=!1;const f=new Nb({Io:t=>{d?Wm(Ab,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(h||(Wm(Ab,`Opening RPC '${e}' stream ${r} transport.`),c.open(),h=!0),Wm(Ab,`RPC '${e}' stream ${r} sending:`,t),c.send(t))},To:()=>c.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(c,Om.EventType.OPEN,(()=>{d||(Wm(Ab,`RPC '${e}' stream ${r} transport opened.`),f.yo())})),p(c,Om.EventType.CLOSE,(()=>{d||(d=!0,Wm(Ab,`RPC '${e}' stream ${r} transport closed`),f.So())})),p(c,Om.EventType.ERROR,(t=>{d||(d=!0,Qm(Ab,`RPC '${e}' stream ${r} transport errored:`,t),f.So(new tg(eg.UNAVAILABLE,"The operation could not be completed")))})),p(c,Om.EventType.MESSAGE,(t=>{var n;if(!d){const i=t.data[0];Jm(!!i);const s=i,a=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(a){Wm(Ab,`RPC '${e}' stream ${r} received error:`,a);const t=a.status;let n=function(e){const t=Jv[e];if(void 0!==t)return ew(t)}(t),i=a.message;void 0===n&&(n=eg.INTERNAL,i="Unknown error status: "+t+" with message "+a.message),d=!0,f.So(new tg(n,i)),c.close()}else Wm(Ab,`RPC '${e}' stream ${r} received:`,i),f.bo(i)}})),p(a,Fm.STAT_EVENT,(t=>{t.stat===Um.PROXY?Wm(Ab,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===Um.NOPROXY&&Wm(Ab,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.wo()}),0),f}}function Pb(){return"undefined"!=typeof document?document:null}
/**
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
 */function Db(e){return new vw(e,!0)}
/**
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
 */class Ob{constructor(e,t,n=1e3,r=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=n,this.qo=r,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),r=Math.max(0,t-n);r>0&&Wm("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,(()=>(this.Uo=Date.now(),e()))),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){null!==this.$o&&(this.$o.skipDelay(),this.$o=null)}cancel(){null!==this.$o&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}
/**
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
 */class Lb{constructor(e,t,n,r,i,s,a,o){this.ui=e,this.Ho=n,this.Jo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Ob(e,t)}n_(){return 1===this.state||5===this.state||this.r_()}r_(){return 2===this.state||3===this.state}start(){this.e_=0,4!==this.state?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&null===this.Zo&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,(()=>this.__())))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,4!==e?this.t_.reset():t&&t.code===eg.RESOURCE_EXHAUSTED?(Gm(t.toString()),Gm("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===eg.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Yo===t&&this.P_(e,n)}),(t=>{e((()=>{const e=new tg(eg.UNKNOWN,"Fetching auth token failed: "+t.message);return this.I_(e)}))}))}P_(e,t){const n=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo((()=>{n((()=>this.listener.Eo()))})),this.stream.Ro((()=>{n((()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,(()=>(this.r_()&&(this.state=3),Promise.resolve()))),this.listener.Ro())))})),this.stream.mo((e=>{n((()=>this.I_(e)))})),this.stream.onMessage((e=>{n((()=>1==++this.e_?this.E_(e):this.onNext(e)))}))}i_(){this.state=5,this.t_.Go((async()=>{this.state=0,this.start()}))}I_(e){return Wm("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget((()=>this.Yo===e?t():(Wm("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Mb extends Lb{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const i="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:Xm(),s=t.targetChange.targetIds||[],a=function(e,t){return e.useProto3Json?(Jm(void 0===t||"string"==typeof t),Bg.fromBase64String(t||"")):(Jm(void 0===t||t instanceof Buffer||t instanceof Uint8Array),Bg.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,l=o&&function(e){const t=void 0===e.code?eg.UNKNOWN:ew(e.code);return new tg(t,e.message||"")}(o);n=new cw(i,s,a,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=xw(e,r.document.name),s=kw(r.document.updateTime),a=r.document.createTime?kw(r.document.createTime):gg.min(),o=new py({mapValue:{fields:r.document.fields}}),l=gy.newFoundDocument(i,s,a,o),u=r.targetIds||[],c=r.removedTargetIds||[];n=new lw(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=xw(e,r.document),s=r.readTime?kw(r.readTime):gg.min(),a=gy.newNoDocument(i,s),o=r.removedTargetIds||[];n=new lw([],o,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=xw(e,r.document),s=r.removedTargetIds||[];n=new lw([],s,i,null)}else{if(!("filter"in t))return Xm();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,s=new Xv(r,i),a=e.targetId;n=new uw(a,s)}}var r;return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return gg.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?gg.min():t.readTime?kw(t.readTime):gg.min()}(e);return this.listener.d_(t,n)}A_(e){const t={};t.database=Aw(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=By(r)?{documents:Dw(e,r)}:{query:Ow(e,r)._t},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=_w(e,t.resumeToken);const r=ww(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(gg.min())>0){n.readTime=bw(e,t.snapshotVersion.toTimestamp());const r=ww(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Xm()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.a_(t)}R_(e){const t={};t.database=Aw(this.serializer),t.removeTarget=e,this.a_(t)}}class Ub extends Lb{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return Jm(!!e.streamToken),this.lastStreamToken=e.streamToken,Jm(!e.writeResults||0===e.writeResults.length),this.listener.f_()}onNext(e){Jm(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=function(e,t){return e&&e.length>0?(Jm(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?kw(e.updateTime):kw(t);return n.isEqual(gg.min())&&(n=kw(t)),new Pv(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=kw(e.commitTime);return this.listener.g_(n,t)}p_(){const e={};e.database=Aw(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>function(e,t){let n;if(t instanceof zv)n={update:Pw(e,t.key,t.value)};else if(t instanceof Kv)n={delete:Cw(e,t.key)};else if(t instanceof Bv)n={update:Pw(e,t.key,t.data),updateMask:$w(t.fieldMask)};else{if(!(t instanceof Wv))return Xm();n={verify:Cw(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof kv)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Sv)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Iv)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof xv)return{fieldPath:t.field.canonicalString(),increment:n.Pe};throw Xm()}(0,e)))),t.precondition.isNone||(n.currentDocument=(r=e,void 0!==(i=t.precondition).updateTime?{updateTime:Ew(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:Xm())),n;var r,i}(this.serializer,e)))};this.a_(t)}}
/**
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
 */class Fb extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.y_=!1}w_(){if(this.y_)throw new tg(eg.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,n,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.Mo(e,Tw(t,n),r,i,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===eg.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new tg(eg.UNKNOWN,e.toString())}))}Lo(e,t,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,a])=>this.connection.Lo(e,Tw(t,n),r,s,a,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===eg.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new tg(eg.UNKNOWN,e.toString())}))}terminate(){this.y_=!0,this.connection.terminate()}}class Vb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){0===this.S_&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve()))))}M_(e){"Online"===this.state?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,"Online"===e&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Gm(t),this.D_=!1):Wm("OnlineStateTracker",t)}x_(){null!==this.b_&&(this.b_.cancel(),this.b_=null)}}
/**
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
 */class jb{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o((e=>{n.enqueueAndForget((async()=>{Qb(this)&&(Wm("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Zm(e);t.L_.add(4),await Bb(t),t.q_.set("Unknown"),t.L_.delete(4),await zb(t)}(this))}))})),this.q_=new Vb(n,r)}}async function zb(e){if(Qb(e))for(const t of e.B_)await t(!0)}async function Bb(e){for(const t of e.B_)await t(!1)}function $b(e,t){const n=Zm(e);n.N_.has(t.targetId)||(n.N_.set(t.targetId,t),Gb(n)?Wb(n):f_(n).r_()&&Hb(n,t))}function qb(e,t){const n=Zm(e),r=f_(n);n.N_.delete(t),r.r_()&&Kb(n,t),0===n.N_.size&&(r.r_()?r.o_():Qb(n)&&n.q_.set("Unknown"))}function Hb(e,t){if(e.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(gg.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}f_(e).A_(t)}function Kb(e,t){e.Q_.xe(t),f_(e).R_(t)}function Wb(e){e.Q_=new dw({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>e.N_.get(t)||null,tt:()=>e.datastore.serializer.databaseId}),f_(e).start(),e.q_.v_()}function Gb(e){return Qb(e)&&!f_(e).n_()&&e.N_.size>0}function Qb(e){return 0===Zm(e).L_.size}function Yb(e){e.Q_=void 0}async function Xb(e){e.q_.set("Online")}async function Jb(e){e.N_.forEach(((t,n)=>{Hb(e,t)}))}async function Zb(e,t){Yb(e),Gb(e)?(e.q_.M_(t),Wb(e)):e.q_.set("Unknown")}async function e_(e,t,n){if(e.q_.set("Online"),t instanceof cw&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.N_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.N_.delete(r),e.Q_.removeTarget(r))}(e,t)}catch(r){Wm("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await t_(e,r)}else if(t instanceof lw?e.Q_.Ke(t):t instanceof uw?e.Q_.He(t):e.Q_.We(t),!n.isEqual(gg.min()))try{const t=await yb(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Q_.rt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.N_.get(r);i&&e.N_.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const r=e.N_.get(t);if(!r)return;e.N_.set(t,r.withResumeToken(Bg.EMPTY_BYTE_STRING,r.snapshotVersion)),Kb(e,t);const i=new Hw(r.target,t,n,r.sequenceNumber);Hb(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(i){Wm("RemoteStore","Failed to raise snapshot:",i),await t_(e,i)}}async function t_(e,t,n){if(!xg(t))throw t;e.L_.add(1),await Bb(e),e.q_.set("Offline"),n||(n=()=>yb(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Wm("RemoteStore","Retrying IndexedDB access"),await n(),e.L_.delete(1),await zb(e)}))}function n_(e,t){return t().catch((n=>t_(e,n,t)))}async function r_(e){const t=Zm(e),n=p_(t);let r=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;i_(t);)try{const e=await wb(t.localStore,r);if(null===e){0===t.O_.length&&n.o_();break}r=e.batchId,s_(t,e)}catch(i){await t_(t,i)}a_(t)&&o_(t)}function i_(e){return Qb(e)&&e.O_.length<10}function s_(e,t){e.O_.push(t);const n=p_(e);n.r_()&&n.V_&&n.m_(t.mutations)}function a_(e){return Qb(e)&&!p_(e).n_()&&e.O_.length>0}function o_(e){p_(e).start()}async function l_(e){p_(e).p_()}async function u_(e){const t=p_(e);for(const n of e.O_)t.m_(n.mutations)}async function c_(e,t,n){const r=e.O_.shift(),i=Qv.from(r,t,n);await n_(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await r_(e)}async function h_(e,t){t&&p_(e).V_&&await async function(e,t){if(function(e){switch(e){default:return Xm();case eg.CANCELLED:case eg.UNKNOWN:case eg.DEADLINE_EXCEEDED:case eg.RESOURCE_EXHAUSTED:case eg.INTERNAL:case eg.UNAVAILABLE:case eg.UNAUTHENTICATED:return!1;case eg.INVALID_ARGUMENT:case eg.NOT_FOUND:case eg.ALREADY_EXISTS:case eg.PERMISSION_DENIED:case eg.FAILED_PRECONDITION:case eg.ABORTED:case eg.OUT_OF_RANGE:case eg.UNIMPLEMENTED:case eg.DATA_LOSS:return!0}}(n=t.code)&&n!==eg.ABORTED){const n=e.O_.shift();p_(e).s_(),await n_(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await r_(e)}var n}(e,t),a_(e)&&o_(e)}async function d_(e,t){const n=Zm(e);n.asyncQueue.verifyOperationInProgress(),Wm("RemoteStore","RemoteStore received new credentials");const r=Qb(n);n.L_.add(3),await Bb(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.L_.delete(3),await zb(n)}function f_(e){return e.K_||(e.K_=function(e,t,n){const r=Zm(e);return r.w_(),new Mb(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Eo:Xb.bind(null,e),Ro:Jb.bind(null,e),mo:Zb.bind(null,e),d_:e_.bind(null,e)}),e.B_.push((async t=>{t?(e.K_.s_(),Gb(e)?Wb(e):e.q_.set("Unknown")):(await e.K_.stop(),Yb(e))}))),e.K_}function p_(e){return e.U_||(e.U_=function(e,t,n){const r=Zm(e);return r.w_(),new Ub(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Eo:()=>Promise.resolve(),Ro:l_.bind(null,e),mo:h_.bind(null,e),f_:u_.bind(null,e),g_:c_.bind(null,e)}),e.B_.push((async t=>{t?(e.U_.s_(),await r_(e)):(await e.U_.stop(),e.O_.length>0&&(Wm("RemoteStore",`Stopping write stream with ${e.O_.length} pending writes`),e.O_=[]))}))),e.U_
/**
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
 */}class m_{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new ng,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,a=new m_(e,t,s,r,i);return a.start(n),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new tg(eg.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function g_(e,t){if(Gm("AsyncQueue",`${t}: ${e}`),xg(e))return new tg(eg.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
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
 */class y_{constructor(e){this.comparator=e?(t,n)=>e(t,n)||_g.comparator(t.key,n.key):(e,t)=>_g.comparator(e.key,t.key),this.keyedMap=ov(),this.sortedSet=new Lg(this.comparator)}static emptySet(e){return new y_(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof y_))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new y_;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
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
 */class v_{constructor(){this.W_=new Lg(_g.comparator)}track(e){const t=e.doc.key,n=this.W_.get(t);n?0!==e.type&&3===n.type?this.W_=this.W_.insert(t,e):3===e.type&&1!==n.type?this.W_=this.W_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.W_=this.W_.remove(t):1===e.type&&2===n.type?this.W_=this.W_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):Xm():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal(((t,n)=>{e.push(n)})),e}}class w_{constructor(e,t,n,r,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new w_(e,t,y_.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xy(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
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
 */class b_{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some((e=>e.J_()))}}class __{constructor(){this.queries=E_(),this.onlineState="Unknown",this.Y_=new Set}terminate(){!function(e,t){const n=Zm(e),r=n.queries;n.queries=E_(),r.forEach(((e,n)=>{for(const r of n.j_)r.onError(t)}))}(this,new tg(eg.ABORTED,"Firestore shutting down"))}}function E_(){return new rv((e=>Jy(e)),Xy)}function k_(e,t){const n=Zm(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.j_)e.X_(i)&&(r=!0);t.z_=i}}r&&T_(n)}function S_(e,t,n){const r=Zm(e),i=r.queries.get(t);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(t)}function T_(e){e.Y_.forEach((e=>{e.next()}))}var I_,C_;(C_=I_||(I_={})).ea="default",C_.Cache="cache";class x_{constructor(e,t,n){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new w_(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache)return!0;if(!this.J_())return!0;const n="Offline"!==t;return(!this.options._a||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}oa(e){e=w_.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==I_.Cache}}
/**
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
 */class N_{constructor(e){this.key=e}}class A_{constructor(e){this.key=e}}class R_{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=pv(),this.mutatedKeys=pv(),this.Aa=tv(e),this.Ra=new y_(this.Aa)}get Va(){return this.Ta}ma(e,t){const n=t?t.fa:new v_,r=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,a=!1;const o="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),c=ev(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations);let f=!1;u&&c?u.data.isEqual(c.data)?h!==d&&(n.track({type:3,doc:c}),f=!0):this.ga(u,c)||(n.track({type:2,doc:c}),f=!0,(o&&this.Aa(c,o)>0||l&&this.Aa(c,l)<0)&&(a=!0)):!u&&c?(n.track({type:0,doc:c}),f=!0):u&&!c&&(n.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(c?(s=s.add(c),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Ra:s,fa:n,ns:a,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const s=e.fa.G_();s.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Xm()}};return n(e)-n(t)}(e.type,t.type)||this.Aa(e.doc,t.doc))),this.pa(n),r=null!=r&&r;const a=t&&!r?this.ya():[],o=0===this.da.size&&this.current&&!r?1:0,l=o!==this.Ea;return this.Ea=o,0!==s.length||l?{snapshot:new w_(this.query,e.Ra,i,s,e.mutatedKeys,0===o,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new v_,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach((e=>this.Ta=this.Ta.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Ta=this.Ta.delete(e))),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=pv(),this.Ra.forEach((e=>{this.Sa(e.key)&&(this.da=this.da.add(e.key))}));const t=[];return e.forEach((e=>{this.da.has(e)||t.push(new A_(e))})),this.da.forEach((n=>{e.has(n)||t.push(new N_(n))})),t}ba(e){this.Ta=e.Ts,this.da=pv();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return w_.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,0===this.Ea,this.hasCachedResults)}}class P_{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class D_{constructor(e){this.key=e,this.va=!1}}class O_{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Ca={},this.Fa=new rv((e=>Jy(e)),Xy),this.Ma=new Map,this.xa=new Set,this.Oa=new Lg(_g.comparator),this.Na=new Map,this.La=new rb,this.Ba={},this.ka=new Map,this.qa=Yw.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return!0===this.Qa}}async function L_(e,t,n=!0){const r=nE(e);let i;const s=r.Fa.get(t);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await U_(r,t,n,!0),i}async function M_(e,t){const n=nE(e);await U_(n,t,!0,!1)}async function U_(e,t,n,r){const i=await function(e,t){const n=Zm(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Ur.getTargetData(e,t).next((i=>i?(r=i,Cg.resolve(r)):n.Ur.allocateTargetId(e).next((i=>(r=new Hw(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.Ur.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.os.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.os=n.os.insert(e.targetId,e),n._s.set(t,e.targetId)),e}))}(e.localStore,Gy(t)),s=i.targetId,a=e.sharedClientState.addLocalQueryTarget(s,n);let o;return r&&(o=await async function(e,t,n,r,i){e.Ka=(t,n,r)=>async function(e,t,n,r){let i=t.view.ma(n);i.ns&&(i=await _b(e.localStore,t.query,!1).then((({documents:e})=>t.view.ma(e,i))));const s=r&&r.targetChanges.get(t.targetId),a=r&&null!=r.targetMismatches.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s,a);return Y_(e,t.targetId,o.wa),o.snapshot}(e,t,n,r);const s=await _b(e.localStore,t,!0),a=new R_(t,s.Ts),o=a.ma(s.documents),l=ow.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=a.applyChanges(o,e.isPrimaryClient,l);Y_(e,n,u.wa);const c=new P_(t,n,a);return e.Fa.set(t,c),e.Ma.has(n)?e.Ma.get(n).push(t):e.Ma.set(n,[t]),u.snapshot}(e,t,s,"current"===a,i.resumeToken)),e.isPrimaryClient&&n&&$b(e.remoteStore,i),o}async function F_(e,t,n){const r=Zm(e),i=r.Fa.get(t),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter((e=>!Xy(e,t)))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await bb(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),n&&qb(r.remoteStore,i.targetId),G_(r,i.targetId)})).catch(Ig)):(G_(r,i.targetId),await bb(r.localStore,i.targetId,!0))}async function V_(e,t){const n=Zm(e),r=n.Fa.get(t),i=n.Ma.get(r.targetId);n.isPrimaryClient&&1===i.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),qb(n.remoteStore,r.targetId))}async function j_(e,t,n){const r=function(e){const t=Zm(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=q_.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=H_.bind(null,t),t}(e);try{const e=await function(e,t){const n=Zm(e),r=mg.now(),i=t.reduce(((e,t)=>e.add(t.key)),pv());let s,a;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let o=sv(),l=pv();return n.cs.getEntries(e,i).next((e=>{o=e,o.forEach(((e,t)=>{t.isValidDocument()||(l=l.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,o))).next((i=>{s=i;const a=[];for(const e of t){const t=Vv(e,s.get(e.key).overlayedDocument);null!=t&&a.push(new Bv(e.key,t,my(t.value.mapValue),Dv.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,a,t)})).next((t=>{a=t;const r=t.applyToLocalDocumentSet(s,l);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:a.batchId,changes:lv(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Ba[e.currentUser.toKey()];r||(r=new Lg(fg)),r=r.insert(t,n),e.Ba[e.currentUser.toKey()]=r}(r,e.batchId,n),await Z_(r,e.changes),await r_(r.remoteStore)}catch(i){const e=g_(i,"Failed to persist write");n.reject(e)}}async function z_(e,t){const n=Zm(e);try{const e=await vb(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Na.get(t);r&&(Jm(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.va=!0:e.modifiedDocuments.size>0?Jm(r.va):e.removedDocuments.size>0&&(Jm(r.va),r.va=!1))})),await Z_(n,e,t)}catch(r){await Ig(r)}}function B_(e,t,n){const r=Zm(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Fa.forEach(((n,r)=>{const i=r.view.Z_(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=Zm(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.j_)i.Z_(t)&&(r=!0)})),r&&T_(n)}(r.eventManager,t),e.length&&r.Ca.d_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function $_(e,t,n){const r=Zm(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Na.get(t),s=i&&i.key;if(s){let e=new Lg(_g.comparator);e=e.insert(s,gy.newNoDocument(s,gg.min()));const n=pv().add(s),i=new aw(gg.min(),new Map,new Lg(fg),e,n);await z_(r,i),r.Oa=r.Oa.remove(s),r.Na.delete(t),J_(r)}else await bb(r.localStore,t,!1).then((()=>G_(r,t,n))).catch(Ig)}async function q_(e,t){const n=Zm(e),r=t.batch.batchId;try{const e=await function(e,t){const n=Zm(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let a=Cg.resolve();return s.forEach((e=>{a=a.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);Jm(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),a.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=pv();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(n.localStore,t);W_(n,r,null),K_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Z_(n,e)}catch(i){await Ig(i)}}async function H_(e,t,n){const r=Zm(e);try{const e=await function(e,t){const n=Zm(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(Jm(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);W_(r,t,n),K_(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Z_(r,e)}catch(i){await Ig(i)}}function K_(e,t){(e.ka.get(t)||[]).forEach((e=>{e.resolve()})),e.ka.delete(t)}function W_(e,t,n){const r=Zm(e);let i=r.Ba[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Ba[r.currentUser.toKey()]=i}}function G_(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Ma.get(t))e.Fa.delete(r),n&&e.Ca.$a(r,n);e.Ma.delete(t),e.isPrimaryClient&&e.La.gr(t).forEach((t=>{e.La.containsKey(t)||Q_(e,t)}))}function Q_(e,t){e.xa.delete(t.path.canonicalString());const n=e.Oa.get(t);null!==n&&(qb(e.remoteStore,n),e.Oa=e.Oa.remove(t),e.Na.delete(n),J_(e))}function Y_(e,t,n){for(const r of n)r instanceof N_?(e.La.addReference(r.key,t),X_(e,r)):r instanceof A_?(Wm("SyncEngine","Document no longer in limbo: "+r.key),e.La.removeReference(r.key,t),e.La.containsKey(r.key)||Q_(e,r.key)):Xm()}function X_(e,t){const n=t.key,r=n.path.canonicalString();e.Oa.get(n)||e.xa.has(r)||(Wm("SyncEngine","New document in limbo: "+n),e.xa.add(r),J_(e))}function J_(e){for(;e.xa.size>0&&e.Oa.size<e.maxConcurrentLimboResolutions;){const t=e.xa.values().next().value;e.xa.delete(t);const n=new _g(vg.fromString(t)),r=e.qa.next();e.Na.set(r,new D_(n)),e.Oa=e.Oa.insert(n,r),$b(e.remoteStore,new Hw(Gy(qy(n.path)),r,"TargetPurposeLimboResolution",Ng.oe))}}async function Z_(e,t,n){const r=Zm(e),i=[],s=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach(((e,o)=>{a.push(r.Ka(o,t,n).then((e=>{var t;if((e||n)&&r.isPrimaryClient){const i=e?!e.fromCache:null===(t=null==n?void 0:n.targetChanges.get(o.targetId))||void 0===t?void 0:t.current;r.sharedClientState.updateQueryState(o.targetId,i?"current":"not-current")}if(e){i.push(e);const t=db.Wi(o.targetId,e);s.push(t)}})))})),await Promise.all(a),r.Ca.d_(i),await async function(e,t){const n=Zm(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Cg.forEach(t,(t=>Cg.forEach(t.$i,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Cg.forEach(t.Ui,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(r){if(!xg(r))throw r;Wm("LocalStore","Failed to update sequence numbers: "+r)}for(const i of t){const e=i.targetId;if(!i.fromCache){const t=n.os.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.os=n.os.insert(e,i)}}}(r.localStore,s))}async function eE(e,t){const n=Zm(e);if(!n.currentUser.isEqual(t)){Wm("SyncEngine","User change. New user:",t.toKey());const e=await gb(n.localStore,t);n.currentUser=t,i="'waitForPendingWrites' promise is rejected due to a user change.",(r=n).ka.forEach((e=>{e.forEach((e=>{e.reject(new tg(eg.CANCELLED,i))}))})),r.ka.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Z_(n,e.hs)}var r,i}function tE(e,t){const n=Zm(e),r=n.Na.get(t);if(r&&r.va)return pv().add(r.key);{let e=pv();const r=n.Ma.get(t);if(!r)return e;for(const t of r){const r=n.Fa.get(t);e=e.unionWith(r.view.Va)}return e}}function nE(e){const t=Zm(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=z_.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=tE.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=$_.bind(null,t),t.Ca.d_=k_.bind(null,t.eventManager),t.Ca.$a=S_.bind(null,t.eventManager),t}class rE{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Db(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return function(e,t,n,r){return new mb(e,t,n,r)}(this.persistence,new pb,e.initialUser,this.serializer)}Ga(e){return new ub(hb.Zr,this.serializer)}Wa(e){return new kb}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}rE.provider={build:()=>new rE};class iE{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>B_(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=eE.bind(null,this.syncEngine),await async function(e,t){const n=Zm(e);t?(n.L_.delete(2),await zb(n)):t||(n.L_.add(2),await Bb(n),n.q_.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new __}createDatastore(e){const t=Db(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Rb(r));var r;return function(e,t,n,r){return new Fb(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(e,t,n,r,i){return new jb(e,t,n,r,i)}(this.localStore,this.datastore,e.asyncQueue,(e=>B_(this.syncEngine,e,0)),Tb.D()?new Tb:new Sb)}createSyncEngine(e,t){return function(e,t,n,r,i,s,a){const o=new O_(e,t,n,r,i,s);return a&&(o.Qa=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){const t=Zm(e);Wm("RemoteStore","RemoteStore shutting down."),t.L_.add(5),await Bb(t),t.k_.shutdown(),t.q_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}iE.provider={build:()=>new iE};
/**
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
 */
/**
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
 */
class sE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Gm("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}
/**
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
 */class aE{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=$m.UNAUTHENTICATED,this.clientId=dg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async e=>{Wm("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Wm("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ng;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(rf){const n=g_(rf,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function oE(e,t){e.asyncQueue.verifyOperationInProgress(),Wm("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await gb(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function lE(e,t){e.asyncQueue.verifyOperationInProgress();const n=await async function(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Wm("FirestoreClient","Using user provided OfflineComponentProvider");try{await oE(e,e._uninitializedComponentsProvider._offline)}catch(t){const i=t;if(!("FirebaseError"===(n=i).name?n.code===eg.FAILED_PRECONDITION||n.code===eg.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&n instanceof DOMException)||22===n.code||20===n.code||11===n.code))throw i;Qm("Error using user provided cache. Falling back to memory cache: "+i),await oE(e,new rE)}}else Wm("FirestoreClient","Using default OfflineComponentProvider"),await oE(e,new rE);var n;return e._offlineComponents}(e);Wm("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener((e=>d_(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>d_(t.remoteStore,n))),e._onlineComponents=t}async function uE(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Wm("FirestoreClient","Using user provided OnlineComponentProvider"),await lE(e,e._uninitializedComponentsProvider._online)):(Wm("FirestoreClient","Using default OnlineComponentProvider"),await lE(e,new iE))),e._onlineComponents}async function cE(e){const t=await uE(e),n=t.eventManager;return n.onListen=L_.bind(null,t.syncEngine),n.onUnlisten=F_.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=M_.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=V_.bind(null,t.syncEngine),n}function hE(e,t,n={}){const r=new ng;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new sE({next:n=>{s.Za(),t.enqueueAndForget((()=>async function(e,t){const n=Zm(e),r=t.query;let i=3;const s=n.queries.get(r);if(s){const e=s.j_.indexOf(t);e>=0&&(s.j_.splice(e,1),0===s.j_.length?i=t.J_()?0:1:!s.H_()&&t.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}(e,a))),n.fromCache&&"server"===r.source?i.reject(new tg(eg.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),a=new x_(n,s,{includeMetadataChanges:!0,_a:!0});return async function(t,n){const r=Zm(t);let i=3;const s=n.query;let a=r.queries.get(s);a?!a.H_()&&n.J_()&&(i=2):(a=new b_,i=n.J_()?0:1);try{switch(i){case 0:a.z_=await r.onListen(s,!0);break;case 1:a.z_=await r.onListen(s,!1);break;case 2:await r.onFirstRemoteStoreListen(s)}}catch(e){const r=g_(e,`Initialization of query '${Zy(n.query)}' failed`);return void n.onError(r)}r.queries.set(s,a),a.j_.push(n),n.Z_(r.onlineState),a.z_&&n.X_(a.z_)&&T_(r)}(e,a)}(await cE(e),e.asyncQueue,t,n,r))),r.promise
/**
 * @license
 * Copyright 2023 Google LLC
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
 */}function dE(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
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
 */}const fE=new Map;
/**
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
 */function pE(e,t,n){if(!n)throw new tg(eg.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function mE(e){if(!_g.isDocumentKey(e))throw new tg(eg.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function gE(e){if(_g.isDocumentKey(e))throw new tg(eg.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function yE(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":Xm()}function vE(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new tg(eg.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=yE(e);throw new tg(eg.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
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
 */class wE{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new tg(eg.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new tg(eg.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new tg(eg.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dE(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new tg(eg.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new tg(eg.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new tg(eg.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class bE{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wE({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new tg(eg.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new tg(eg.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wE(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new ig;switch(e.type){case"firstParty":return new lg(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new tg(eg.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=fE.get(e);t&&(Wm("ComponentProvider","Removing Datastore"),fE.delete(e),t.terminate())}(this),Promise.resolve()}}function _E(e,t,n,r={}){var i;const s=(e=vE(e,bE))._getSettings(),a=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==a&&Qm("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=$m.MOCK_USER;else{t=function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Mf(JSON.stringify({alg:"none",type:"JWT"})),Mf(JSON.stringify(s)),""].join(".")}(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new tg(eg.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new $m(s)}e._authCredentials=new sg(new rg(t,n))}}
/**
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
 */class EE{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new EE(this.firestore,e,this._query)}}class kE{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new SE(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new kE(this.firestore,e,this._key)}}class SE extends EE{constructor(e,t,n){super(e,t,qy(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new kE(this.firestore,null,new _g(e))}withConverter(e){return new SE(this.firestore,e,this._path)}}function TE(e,t,...n){if(e=tp(e),pE("collection","path",t),e instanceof bE){const r=vg.fromString(t,...n);return gE(r),new SE(e,null,r)}{if(!(e instanceof kE||e instanceof SE))throw new tg(eg.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(vg.fromString(t,...n));return gE(r),new SE(e.firestore,null,r)}}
/**
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
 */
class IE{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Ob(this,"async_queue_retry"),this.Vu=()=>{const e=Pb();e&&Wm("AsyncQueue","Visibility state changed to "+e.visibilityState),this.t_.jo()},this.mu=e;const t=Pb();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Pb();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise((()=>{}));const t=new ng;return this.gu((()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Pu.push(e),this.pu())))}async pu(){if(0!==this.Pu.length){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(nf){if(!xg(nf))throw nf;Wm("AsyncQueue","Operation failed with retryable error: "+nf)}this.Pu.length>0&&this.t_.Go((()=>this.pu()))}}gu(e){const t=this.mu.then((()=>(this.du=!0,e().catch((e=>{this.Eu=e,this.du=!1;throw Gm("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e})).then((e=>(this.du=!1,e))))));return this.mu=t,t}enqueueAfterDelay(e,t,n){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const r=m_.createAndSchedule(this,e,t,n,(e=>this.yu(e)));return this.Tu.push(r),r}fu(){this.Eu&&Xm()}verifyOperationInProgress(){}async wu(){let e;do{e=this.mu,await e}while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then((()=>{this.Tu.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.Tu)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.wu()}))}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class CE extends bE{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new IE,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new IE(e),this._firestoreClient=void 0,await e}}}function xE(e){if(e._terminated)throw new tg(eg.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){var t,n,r;const i=e._freezeSettings(),s=(a=e._databaseId,o=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",l=e._persistenceKey,u=i,new Yg(a,o,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,dE(u.experimentalLongPollingOptions),u.useFetchStreams));var a,o,l,u;e._componentsProvider||(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),e._firestoreClient=new aE(e._authCredentials,e._appCheckCredentials,e._queue,s,e._componentsProvider&&function(e){const t=null==e?void 0:e._online.build();return{_offline:null==e?void 0:e._offline.build(t),_online:t}}(e._componentsProvider))}
/**
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
 */(e),e._firestoreClient}class NE{constructor(e){this._byteString=e}static fromBase64String(e){try{return new NE(Bg.fromBase64String(e))}catch(t){throw new tg(eg.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new NE(Bg.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
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
 */class AE{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new tg(eg.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bg(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
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
 */class RE{constructor(e){this._methodName=e}}
/**
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
 */class PE{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new tg(eg.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new tg(eg.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return fg(this._lat,e._lat)||fg(this._long,e._long)}}
/**
 * @license
 * Copyright 2024 Google LLC
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
 */class DE{constructor(e){this._values=(e||[]).map((e=>e))}toArray(){return this._values.map((e=>e))}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}}
/**
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
 */const OE=/^__.*__$/;class LE{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Bv(e,this.data,this.fieldMask,t,this.fieldTransforms):new zv(e,this.data,t,this.fieldTransforms)}}function ME(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Xm()}}class UE{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new UE(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Fu({path:n,xu:!1});return r.Ou(e),r}Nu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Fu({path:n,xu:!1});return r.vu(),r}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return QE(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(0===e.length)throw this.Bu("Document fields must not be empty");if(ME(this.Cu)&&OE.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class FE{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Db(e)}Qu(e,t,n,r=!1){return new UE({Cu:e,methodName:t,qu:n,path:bg.emptyPath(),xu:!1,ku:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function VE(e){const t=e._freezeSettings(),n=Db(e._databaseId);return new FE(e._databaseId,!!t.ignoreUndefinedProperties,n)}function jE(e,t,n,r,i,s={}){const a=e.Qu(s.merge||s.mergeFields?2:0,t,n,i);HE("Data must be an object, but it was:",a,r);const o=$E(r,a);let l,u;if(s.merge)l=new jg(a.fieldMask),u=a.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=KE(t,r,n);if(!a.contains(i))throw new tg(eg.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);YE(e,i)||e.push(i)}l=new jg(e),u=a.fieldTransforms.filter((e=>l.covers(e.field)))}else l=null,u=a.fieldTransforms;return new LE(new py(o),l,u)}class zE extends RE{_toFieldTransform(e){return new Rv(e.path,new kv)}isEqual(e){return e instanceof zE}}function BE(e,t){if(qE(e=tp(e)))return HE("Unsupported field value:",t,e),$E(e,t);if(e instanceof RE)return function(e,t){if(!ME(t.Cu))throw t.Bu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Bu(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.xu&&4!==t.Cu)throw t.Bu("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=BE(i,t.Lu(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=tp(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return vv(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=mg.fromDate(e);return{timestampValue:bw(t.serializer,n)}}if(e instanceof mg){const n=new mg(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:bw(t.serializer,n)}}if(e instanceof PE)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof NE)return{bytesValue:_w(t.serializer,e._byteString)};if(e instanceof kE){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Bu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Sw(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof DE)return n=t,{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:e.toArray().map((e=>{if("number"!=typeof e)throw n.Bu("VectorValues must only contain numeric values.");return gv(n.serializer,e)}))}}}}};var n;throw t.Bu(`Unsupported field value: ${yE(e)}`)}(e,t)}function $E(e,t){const n={};return Og(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Dg(e,((e,r)=>{const i=BE(r,t.Mu(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function qE(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof mg||e instanceof PE||e instanceof NE||e instanceof kE||e instanceof RE||e instanceof DE)}function HE(e,t,n){if(!qE(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=yE(n);throw"an object"===r?t.Bu(e+" a custom object"):t.Bu(e+" "+r)}var r}function KE(e,t,n){if((t=tp(t))instanceof AE)return t._internalPath;if("string"==typeof t)return GE(e,t);throw QE("Field path arguments must be of type string or ",e,!1,void 0,n)}const WE=new RegExp("[~\\*/\\[\\]]");function GE(e,t,n){if(t.search(WE)>=0)throw QE(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new AE(...t.split("."))._internalPath}catch(sf){throw QE(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function QE(e,t,n,r,i){const s=r&&!r.isEmpty(),a=void 0!==i;let o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new tg(eg.INVALID_ARGUMENT,o+e+l)}function YE(e,t){return e.some((e=>e.isEqual(t)))}
/**
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
 */class XE{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new kE(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new JE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ZE("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class JE extends XE{data(){return super.data()}}function ZE(e,t){return"string"==typeof t?GE(e,t):t instanceof AE?t._internalPath:t._delegate._internalPath}
/**
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
 */class ek{}class tk extends ek{}function nk(e,t,...n){let r=[];t instanceof ek&&r.push(t),r=r.concat(n),function(e){const t=e.filter((e=>e instanceof sk)).length,n=e.filter((e=>e instanceof rk)).length;if(t>1||t>0&&n>0)throw new tg(eg.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)e=i._apply(e);return e}class rk extends tk{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new rk(e,t,n)}_apply(e){const t=this._parse(e);return lk(e._query,t),new EE(e.firestore,e.converter,Qy(e._query,t))}_parse(e){const t=VE(e.firestore),n=function(e,t,n,r,i,s,a){let o;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new tg(eg.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){ok(a,s);const t=[];for(const n of a)t.push(ak(r,e,n));o={arrayValue:{values:t}}}else o=ak(r,e,a)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||ok(a,s),o=function(e,t,n,r=!1){return BE(n,e.Qu(r?4:3,t))}(n,t,a,"in"===s||"not-in"===s);return ky.create(i,s,o)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function ik(e,t,n){const r=t,i=ZE("where",e);return rk._create(i,r,n)}class sk extends ek{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new sk(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:Sy.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const i of r)lk(n,i),n=Qy(n,i)}(e._query,t),new EE(e.firestore,e.converter,Qy(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function ak(e,t,n){if("string"==typeof(n=tp(n))){if(""===n)throw new tg(eg.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ky(t)&&-1!==n.indexOf("/"))throw new tg(eg.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(vg.fromString(n));if(!_g.isDocumentKey(r))throw new tg(eg.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return oy(e,new _g(r))}if(n instanceof kE)return oy(e,n._key);throw new tg(eg.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${yE(n)}.`)}function ok(e,t){if(!Array.isArray(e)||0===e.length)throw new tg(eg.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function lk(e,t){const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new tg(eg.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new tg(eg.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class uk{convertValue(e,t="none"){switch(Zg(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Hg(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Kg(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Xm()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Dg(e,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertVectorValue(e){var t,n,r;const i=null===(r=null===(n=null===(t=e.fields)||void 0===t?void 0:t.value.arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map((e=>Hg(e.doubleValue)));return new DE(i)}convertGeoPoint(e){return new PE(Hg(e.latitude),Hg(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Gg(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Qg(e));default:return null}}convertTimestamp(e){const t=qg(e);return new mg(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=vg.fromString(e);Jm(qw(n));const r=new Xg(n.get(1),n.get(3)),i=new _g(n.popFirst(5));return r.isEqual(t)||Gm(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
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
 */
/**
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
 */
class ck{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class hk extends XE{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new dk(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(ZE("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class dk extends hk{data(e={}){return super.data(e)}}class fk{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new ck(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new dk(this._firestore,this._userDataWriter,n.key,n,new ck(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new tg(eg.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new dk(e._firestore,e._userDataWriter,n.doc.key,n.doc,new ck(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new dk(e._firestore,e._userDataWriter,t.doc.key,t.doc,new ck(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:pk(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function pk(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Xm()}}class mk extends uk{constructor(e){super(),this.firestore=e}convertBytes(e){return new NE(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new kE(this.firestore,null,t)}}function gk(e){e=vE(e,EE);const t=vE(e.firestore,CE),n=xE(t),r=new mk(t);return function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new tg(eg.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),hE(n,e._query).then((n=>new fk(t,r,e,n)))}function yk(e,t){const n=vE(e.firestore,CE),r=function(e,t,...n){if(e=tp(e),1===arguments.length&&(t=dg.newId()),pE("doc","path",t),e instanceof bE){const r=vg.fromString(t,...n);return mE(r),new kE(e,null,new _g(r))}{if(!(e instanceof kE||e instanceof SE))throw new tg(eg.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(vg.fromString(t,...n));return mE(r),new kE(e.firestore,e instanceof SE?e.converter:null,new _g(r))}}(e),i=function(e,t){let n;return n=e?e.toFirestore(t):t,n}(e.converter,t);return function(e,t){return function(e,t){const n=new ng;return e.asyncQueue.enqueueAndForget((async()=>j_(await function(e){return uE(e).then((e=>e.syncEngine))}(e),t,n))),n.promise}(xE(e),t)}(n,[jE(VE(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,Dv.exists(!1))]).then((()=>r))}function vk(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function wk(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}!function(e,t=!0){qm=gm,hm(new np("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new CE(new ag(e.getProvider("auth-internal")),new cg(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new tg(eg.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xg(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),wm(Bm,"4.7.3",e),wm(Bm,"4.7.3","esm2017")}(),"function"==typeof SuppressedError&&SuppressedError;const bk=wk,_k=new Gf("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Ek=new dp("@firebase/auth");function kk(e,...t){Ek.logLevel<=ap.ERROR&&Ek.error(`Auth (${gm}): ${e}`,...t)}
/**
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
 */function Sk(e,...t){throw xk(e,...t)}function Tk(e,...t){return xk(e,...t)}function Ik(e,t,n){const r=Object.assign(Object.assign({},bk()),{[t]:n});return new Gf("auth","Firebase",r).create(t,{appName:e.name})}function Ck(e){return Ik(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function xk(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return _k.create(e,...t)}function Nk(e,t,...n){if(!e)throw xk(t,...n)}function Ak(e){const t="INTERNAL ASSERTION FAILED: "+e;throw kk(t),new Error(t)}function Rk(e,t){e||Ak(t)}
/**
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
 */function Pk(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Dk(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
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
 */function Ok(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==Dk()&&"https:"!==Dk()&&!function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&!("connection"in navigator)||navigator.onLine}
/**
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
 */
class Lk{constructor(e,t){this.shortDelay=e,this.longDelay=t,Rk(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Hf())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return Ok()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
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
 */function Mk(e,t){Rk(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
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
 */class Uk{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void Ak("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void Ak("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void Ak("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
 */const Fk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Vk=new Lk(3e4,6e4);
/**
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
 */function jk(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function zk(e,t,n,r,i={}){return Bk(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const a=Jf(Object.assign({key:e.config.apiKey},s)).slice(1),o=await e._getAdditionalHeaders();o["Content-Type"]="application/json",e.languageCode&&(o["X-Firebase-Locale"]=e.languageCode);const l=Object.assign({method:t,headers:o},i);return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent||(l.referrerPolicy="no-referrer"),Uk.fetch()($k(e,e.config.apiHost,n,a),l)}))}async function Bk(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Fk),t);try{const t=new qk(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Hk(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Hk(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Hk(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw Hk(e,"user-disabled",s);const o=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw Ik(e,o,a);Sk(e,o)}}catch(nf){if(nf instanceof Wf)throw nf;Sk(e,"network-request-failed",{message:String(nf)})}}function $k(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Mk(e.config,i):`${e.config.apiScheme}://${i}`}class qk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Tk(this.auth,"network-request-failed"))),Vk.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Hk(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Tk(e,t,r);return i.customData._tokenResponse=n,i}
/**
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
 */async function Kk(e,t){return zk(e,"POST","/v1/accounts:lookup",t)}
/**
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
 */function Wk(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(nf){}}function Gk(e){return 1e3*Number(e)}function Qk(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return kk("JWT malformed, contained fewer than 3 sections"),null;try{const e=Uf(n);return e?JSON.parse(e):(kk("Failed to decode base64 JWT payload"),null)}catch(nf){return kk("Caught error parsing JWT payload as JSON",null==nf?void 0:nf.toString()),null}}function Yk(e){const t=Qk(e);return Nk(t,"internal-error"),Nk(void 0!==t.exp,"internal-error"),Nk(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
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
 */async function Xk(e,t,n=!1){if(n)return t;try{return await t}catch(nf){throw nf instanceof Wf&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
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
 */(nf)&&e.auth.currentUser===e&&await e.auth.signOut(),nf}}class Jk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(nf){return void("auth/network-request-failed"===(null==nf?void 0:nf.code)&&this.schedule(!0))}this.schedule()}}
/**
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
 */class Zk{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wk(this.lastLoginAt),this.creationTime=Wk(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
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
 */async function eS(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Xk(e,Kk(n,{idToken:r}));Nk(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const a=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?tS(s.providerUserInfo):[],o=(l=e.providerData,u=a,[...l.filter((e=>!u.some((t=>t.providerId===e.providerId)))),...u]);var l,u;const c=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==o?void 0:o.length)),d=!!c&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Zk(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}function tS(e){return e.map((e=>{var{providerId:t}=e,n=vk(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
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
 */
/**
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
 */
class nS{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Nk(e.idToken,"internal-error"),Nk(void 0!==e.idToken,"internal-error"),Nk(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):Yk(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Nk(0!==e.length,"internal-error");const t=Yk(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(Nk(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await async function(e,t){const n=await Bk(e,{},(async()=>{const n=Jf({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=$k(e,r,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Uk.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new nS;return n&&(Nk("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(Nk("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(Nk("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new nS,this.toJSON())}_performRefresh(){return Ak("not implemented")}}
/**
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
 */function rS(e,t){Nk("string"==typeof e||void 0===e,"internal-error",{appName:t})}class iS{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=vk(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Jk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Zk(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Xk(this,this.stsTokenManager.getToken(this.auth,e));return Nk(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=tp(e),r=await n.getIdToken(t),i=Qk(r);Nk(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,a=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Wk(Gk(i.auth_time)),issuedAtTime:Wk(Gk(i.iat)),expirationTime:Wk(Gk(i.exp)),signInProvider:a||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=tp(e);await eS(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Nk(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new iS(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Nk(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await eS(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(fm(this.auth.app))return Promise.reject(Ck(this.auth));const e=await this.getIdToken();return await Xk(this,async function(e,t){return zk(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,a,o,l,u;const c=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(a=t.tenantId)&&void 0!==a?a:void 0,m=null!==(o=t._redirectEventId)&&void 0!==o?o:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:_,stsTokenManager:E}=t;Nk(v&&E,e,"internal-error");const k=nS.fromJSON(this.name,E);Nk("string"==typeof v,e,"internal-error"),rS(c,e.name),rS(h,e.name),Nk("boolean"==typeof w,e,"internal-error"),Nk("boolean"==typeof b,e,"internal-error"),rS(d,e.name),rS(f,e.name),rS(p,e.name),rS(m,e.name),rS(g,e.name),rS(y,e.name);const S=new iS({uid:v,auth:e,email:h,emailVerified:w,displayName:c,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:k,createdAt:g,lastLoginAt:y});return _&&Array.isArray(_)&&(S.providerData=_.map((e=>Object.assign({},e)))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new nS;r.updateFromServerResponse(t);const i=new iS({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await eS(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];Nk(void 0!==r.localId,"internal-error");const i=void 0!==r.providerUserInfo?tS(r.providerUserInfo):[],s=!(r.email&&r.passwordHash||(null==i?void 0:i.length)),a=new nS;a.updateFromIdToken(n);const o=new iS({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:s}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Zk(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash||(null==i?void 0:i.length))};return Object.assign(o,l),o}}
/**
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
 */const sS=new Map;function aS(e){Rk(e instanceof Function,"Expected a class definition");let t=sS.get(e);return t?(Rk(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,sS.set(e,t),t)}
/**
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
 */class oS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}oS.type="NONE";const lS=oS;
/**
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
 */function uS(e,t,n){return`firebase:${e}:${t}:${n}`}class cS{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=uS(this.userKey,r.apiKey,i),this.fullPersistenceKey=uS("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?iS._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new cS(aS(lS),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||aS(lS);const s=uS(n,e.config.apiKey,e.name);let a=null;for(const u of t)try{const t=await u._get(s);if(t){const n=iS._fromJSON(e,t);u!==i&&(a=n),i=u;break}}catch(l){}const o=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&o.length?(i=o[0],a&&await i._set(s,a.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(l){}}))),new cS(i,e,n)):new cS(i,e,n)}}
/**
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
 */function hS(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(mS(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(dS(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(yS(t))return"Blackberry";if(vS(t))return"Webos";if(fS(t))return"Safari";if((t.includes("chrome/")||pS(t))&&!t.includes("edge/"))return"Chrome";if(gS(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function dS(e=Hf()){return/firefox\//i.test(e)}function fS(e=Hf()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function pS(e=Hf()){return/crios\//i.test(e)}function mS(e=Hf()){return/iemobile/i.test(e)}function gS(e=Hf()){return/android/i.test(e)}function yS(e=Hf()){return/blackberry/i.test(e)}function vS(e=Hf()){return/webos/i.test(e)}function wS(e=Hf()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function bS(){return function(){const e=Hf();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function _S(e=Hf()){return wS(e)||gS(e)||vS(e)||yS(e)||/windows phone/i.test(e)||mS(e)}
/**
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
 */function ES(e,t=[]){let n;switch(e){case"Browser":n=hS(Hf());break;case"Worker":n=`${hS(Hf())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${gm}/${r}`}
/**
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
 */class kS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(nf){r(nf)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(nf){t.reverse();for(const r of t)try{r()}catch(n){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==nf?void 0:nf.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */class SS{constructor(e){var t,n,r,i;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,i,s,a;const o={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,o),this.validatePasswordCharacterOptions(e,o),o.isValid&&(o.isValid=null===(t=o.meetsMinPasswordLength)||void 0===t||t),o.isValid&&(o.isValid=null===(n=o.meetsMaxPasswordLength)||void 0===n||n),o.isValid&&(o.isValid=null===(r=o.containsLowercaseLetter)||void 0===r||r),o.isValid&&(o.isValid=null===(i=o.containsUppercaseLetter)||void 0===i||i),o.isValid&&(o.isValid=null===(s=o.containsNumericCharacter)||void 0===s||s),o.isValid&&(o.isValid=null===(a=o.containsNonAlphanumericCharacter)||void 0===a||a),o}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}
/**
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
 */class TS{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new CS(this),this.idTokenSubscription=new CS(this),this.beforeStateQueue=new kS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_k,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=aS(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await cS.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(nf){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e,!0)):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await Kk(this,{idToken:e}),n=await iS._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(fm(this.app)){const e=this.app.settings.authIdToken;return e?new Promise((t=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(e).then(t,t)))})):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);n&&n!==s||!(null==a?void 0:a.user)||(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(nf){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(nf)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Nk(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(nf){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await eS(e)}catch(nf){if("auth/network-request-failed"!==(null==nf?void 0:nf.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(fm(this.app))return Promise.reject(Ck(this));const t=e?tp(e):null;return t&&Nk(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Nk(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return fm(this.app)?Promise.reject(Ck(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return fm(this.app)?Promise.reject(Ck(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(aS(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return zk(e,"GET","/v2/passwordPolicy",jk(e,t))}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */(this),t=new SS(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Gf("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return zk(e,"POST","/v2/accounts:revokeToken",jk(e,t))}(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&aS(e)||this._popupRedirectResolver;Nk(t,this,"argument-error"),this.redirectPersistenceManager=await cS.create(this,[aS(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Nk(a,this,"internal-error"),a.then((()=>{s||i(this.currentUser)})),"function"==typeof t){const i=e.addObserver(t,n,r);return()=>{s=!0,i()}}{const n=e.addObserver(t);return()=>{s=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Nk(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ES(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){Ek.logLevel<=ap.WARN&&Ek.warn(`Auth (${gm}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function IS(e){return tp(e)}class CS{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new Zf(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return Nk(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
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
 */let xS={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function NS(e,t,n){const r=IS(e);Nk(r._canInitEmulator,r,"emulator-config-failed"),Nk(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=AS(t),{host:s,port:a}=function(e){const t=AS(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:RS(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:RS(t)}}}(t),o=null===a?"":`:${a}`;r.config.emulator={url:`${i}//${s}${o}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:!1})}),function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&console.info;"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
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
 */()}function AS(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function RS(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class PS{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ak("not implemented")}_getIdTokenResponse(e){return Ak("not implemented")}_linkToIdToken(e,t){return Ak("not implemented")}_getReauthenticationResolver(e){return Ak("not implemented")}}
/**
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
 */async function DS(e,t){return async function(e,t,n,r,i={}){const s=await zk(e,t,n,r,i);return"mfaPendingCredential"in s&&Sk(e,"multi-factor-auth-required",{_serverResponse:s}),s}(e,"POST","/v1/accounts:signInWithIdp",jk(e,t))}
/**
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
 */class OS extends PS{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new OS(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Sk("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=vk(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new OS(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return DS(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,DS(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,DS(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Jf(t)}return e}}
/**
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
 */class LS{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
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
 */class MS extends LS{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
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
 */class US extends MS{constructor(){super("facebook.com")}static credential(e){return OS._fromParams({providerId:US.PROVIDER_ID,signInMethod:US.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return US.credentialFromTaggedObject(e)}static credentialFromError(e){return US.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return US.credential(e.oauthAccessToken)}catch(t){return null}}}US.FACEBOOK_SIGN_IN_METHOD="facebook.com",US.PROVIDER_ID="facebook.com";
/**
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
 */
class FS extends MS{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return OS._fromParams({providerId:FS.PROVIDER_ID,signInMethod:FS.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return FS.credentialFromTaggedObject(e)}static credentialFromError(e){return FS.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return FS.credential(t,n)}catch(r){return null}}}FS.GOOGLE_SIGN_IN_METHOD="google.com",FS.PROVIDER_ID="google.com";
/**
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
 */
class VS extends MS{constructor(){super("github.com")}static credential(e){return OS._fromParams({providerId:VS.PROVIDER_ID,signInMethod:VS.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return VS.credentialFromTaggedObject(e)}static credentialFromError(e){return VS.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return VS.credential(e.oauthAccessToken)}catch(t){return null}}}VS.GITHUB_SIGN_IN_METHOD="github.com",VS.PROVIDER_ID="github.com";
/**
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
 */
class jS extends MS{constructor(){super("twitter.com")}static credential(e,t){return OS._fromParams({providerId:jS.PROVIDER_ID,signInMethod:jS.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return jS.credentialFromTaggedObject(e)}static credentialFromError(e){return jS.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return jS.credential(t,n)}catch(r){return null}}}jS.TWITTER_SIGN_IN_METHOD="twitter.com",jS.PROVIDER_ID="twitter.com";
/**
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
 */
class zS{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await iS._fromIdTokenResponse(e,n,r),s=BS(n);return new zS({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=BS(n);return new zS({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function BS(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
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
 */class $S extends Wf{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,$S.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new $S(e,t,n,r)}}function qS(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw $S._fromErrorAndOperation(e,n,t,r);throw n}))}const HS="__sak";
/**
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
 */class KS{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(HS,"1"),this.storage.removeItem(HS),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
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
 */class WS extends KS{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=_S(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);bS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}WS.type="LOCAL";const GS=WS;
/**
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
 */class QS extends KS{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}QS.type="SESSION";const YS=QS;
/**
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
 */
/**
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
 */
class XS{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new XS(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const a=Array.from(s).map((async e=>e(t.origin,i))),o=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}})))}(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
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
 */
function JS(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
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
 */XS.receivers=[];class ZS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((a,o)=>{const l=JS("",20);r.port1.start();const u=setTimeout((()=>{o(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{o(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),a(t.data.response);break;default:clearTimeout(u),clearTimeout(i),o(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
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
 */function eT(){return window}
/**
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
 */
function tT(){return void 0!==eT().WorkerGlobalScope&&"function"==typeof eT().importScripts}
/**
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
 */
const nT="firebaseLocalStorageDb",rT="firebaseLocalStorage",iT="fbase_key";class sT{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function aT(e,t){return e.transaction([rT],t?"readwrite":"readonly").objectStore(rT)}function oT(){const e=indexedDB.open(nT,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(rT,{keyPath:iT})}catch(nf){n(nf)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(rT)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(nT);return new sT(e).toPromise()}(),t(await oT()))}))}))}async function lT(e,t,n){const r=aT(e,!0).put({[iT]:t,value:n});return new sT(r).toPromise()}function uT(e,t){const n=aT(e,!0).delete(t);return new sT(n).toPromise()}class cT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await oT()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(nf){if(t++>3)throw nf;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=XS._getInstance(tT()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new ZS(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await oT();return await lT(e,HS,"1"),await uT(e,HS),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>lT(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=aT(e,!1).get(t),r=await new sT(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>uT(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=aT(e,!1).getAll();return new sT(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}cT.type="LOCAL";const hT=cT;new Lk(3e4,6e4);
/**
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
 */
class dT extends PS{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return DS(e,this._buildIdpRequest())}_linkToIdToken(e,t){return DS(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return DS(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function fT(e){
/**
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
 */
return async function(e,t,n=!1){if(fm(e.app))return Promise.reject(Ck(e));const r="signIn",i=await qS(e,r,t),s=await zS._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}(e.auth,new dT(e),e.bypassAuthState)}function pT(e){const{auth:t,user:n}=e;return Nk(n,t,"internal-error"),
/**
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
 */
async function(e,t,n=!1){const{auth:r}=e;if(fm(r.app))return Promise.reject(Ck(r));const i="reauthenticate";try{const s=await Xk(e,qS(r,i,t,e),n);Nk(s.idToken,r,"internal-error");const a=Qk(s.idToken);Nk(a,r,"internal-error");const{sub:o}=a;return Nk(e.uid===o,r,"user-mismatch"),zS._forOperation(e,i,s)}catch(nf){throw"auth/user-not-found"===(null==nf?void 0:nf.code)&&Sk(r,"user-mismatch"),nf}}(n,new dT(e),e.bypassAuthState)}async function mT(e){const{auth:t,user:n}=e;return Nk(n,t,"internal-error"),async function(e,t,n=!1){const r=await Xk(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return zS._forOperation(e,"link",r)}(n,new dT(e),e.bypassAuthState)}
/**
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
 */class gT{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(nf){this.reject(nf)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:a}=e;if(s)return void this.reject(s);const o={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(o))}catch(nf){this.reject(nf)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fT;case"linkViaPopup":case"linkViaRedirect":return mT;case"reauthViaPopup":case"reauthViaRedirect":return pT;default:Sk(this.auth,"internal-error")}}resolve(e){Rk(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rk(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
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
 */const yT=new Lk(2e3,1e4);class vT extends gT{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,vT.currentPopupAction&&vT.currentPopupAction.cancel(),vT.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Nk(e,this.auth,"internal-error"),e}async onExecution(){Rk(1===this.filter.length,"Popup operations only handle one event");const e=JS();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Tk(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Tk(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vT.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Tk(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,yT.get())};e()}}vT.currentPopupAction=null;
/**
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
 */
const wT="pendingRedirect",bT=new Map;class _T extends gT{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=bT.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return uS(wT,e.config.apiKey,e.name)}(t),r=function(e){return aS(e._redirectPersistence)}(e);if(!(await r._isAvailable()))return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(nf){e=()=>Promise.reject(nf)}bT.set(this.auth._key(),e)}return this.bypassAuthState||bT.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function ET(e,t){bT.set(e._key(),t)}async function kT(e,t,n=!1){if(fm(e.app))return Promise.reject(Ck(e));const r=IS(e),i=
/**
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
 */
function(e,t){return t?aS(t):(Nk(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}(r,t),s=new _T(r,i,n),a=await s.execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}
/**
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
 */class ST{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return IT(e);default:return!1}}
/**
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!IT(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Tk(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(TT(e))}saveEventToCache(e){this.cachedEventUids.add(TT(e)),this.lastProcessedEventTime=Date.now()}}function TT(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function IT({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
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
 */
const CT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xT=/^https?/;async function NT(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return zk(e,"GET","/v1/projects",t)}(e);for(const r of t)try{if(AT(r))return}catch(n){}Sk(e,"unauthorized-domain")}function AT(e){const t=Pk(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!xT.test(n))return!1;if(CT.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
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
 */const RT=new Lk(3e4,6e4);function PT(){const e=eT().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function DT(e){return new Promise(((t,n)=>{var r,i,s,a;function o(){PT(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{PT(),n(Tk(e,"network-request-failed"))},timeout:RT.get()})}if(null===(i=null===(r=eT().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=eT().gapi)||void 0===s?void 0:s.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return eT()[t]=()=>{gapi.load?o():n(Tk(e,"network-request-failed"))},(a=`${xS.gapiScript}?onload=${t}`,xS.loadJS(a)).catch((e=>n(e)))}o()}})).catch((e=>{throw OT=null,e}))}let OT=null;
/**
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
 */
const LT=new Lk(5e3,15e3),MT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},UT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function FT(e){const t=e.config;Nk(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Mk(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:gm},i=UT.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Jf(r).slice(1)}`}async function VT(e){const t=await function(e){return OT=OT||DT(e),OT}(e),n=eT().gapi;return Nk(n,e,"internal-error"),t.open({where:document.body,url:FT(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:MT,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=Tk(e,"network-request-failed"),s=eT().setTimeout((()=>{r(i)}),LT.get());function a(){eT().clearTimeout(s),n(t)}t.ping(a).then(a,(()=>{r(i)}))}))))}
/**
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
 */const jT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class zT{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(nf){}}}function BT(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const l=Object.assign(Object.assign({},jT),{width:r.toString(),height:i.toString(),top:s,left:a}),u=Hf().toLowerCase();n&&(o=pS(u)?"_blank":n),dS(u)&&(t=t||"http://localhost",l.scrollbars="yes");const c=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Hf()){var t;return wS(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==o)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
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
 */(t||"",o),new zT(null);const h=window.open(t||"",o,c);Nk(h,e,"popup-blocked");try{h.focus()}catch(nf){}return new zT(h)}const $T="__/auth/handler",qT="emulator/auth/handler",HT=encodeURIComponent("fac");async function KT(e,t,n,r,i,s){Nk(e.config.authDomain,e,"auth-domain-config-required"),Nk(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:gm,eventId:i};if(t instanceof LS){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries({}))a[e]=t}if(t instanceof MS){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(a.scopes=e.join(","))}e.tenantId&&(a.tid=e.tenantId);const o=a;for(const c of Object.keys(o))void 0===o[c]&&delete o[c];const l=await e._getAppCheckToken(),u=l?`#${HT}=${encodeURIComponent(l)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${$T}`;return Mk(e,qT)}
/**
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
 */(e)}?${Jf(o).slice(1)}${u}`}const WT="webStorageSupport";const GT=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=YS,this._completeRedirectFn=kT,this._overrideRedirectResult=ET}async _openPopup(e,t,n,r){var i;Rk(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return BT(e,await KT(e,t,n,Pk(),r),JS())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){eT().location.href=e}(await KT(e,t,n,Pk(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Rk(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await VT(e),n=new ST(e);return t.register("authEvent",(t=>{Nk(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(WT,{type:WT},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[WT];void 0!==i&&t(!!i),Sk(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=NT(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return _S()||fS()||wS()}};var QT="@firebase/auth",YT="1.7.9";
/**
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
 */
class XT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Nk(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
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
 */
/**
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
 */
const JT=$f("authIdTokenMaxAge")||300;let ZT=null;var eI,tI;eI={loadJS:e=>new Promise(((t,n)=>{const r=document.createElement("script");var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=Tk("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)})),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},xS=eI,tI="Browser",hm(new np("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=n.options;Nk(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const o={apiKey:s,authDomain:a,clientPlatform:tI,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ES(tI)},l=new TS(n,r,i,o);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(aS);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(l,t),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),hm(new np("auth-internal",(e=>{const t=IS(e.getProvider("auth").getImmediate());return new XT(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),wm(QT,YT,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(tI)),wm(QT,YT,"esm2017");function nI(e,t){const n={};for(const r in e)e.hasOwnProperty(r)&&(n[r]=t(e[r]));return n}function rI(e){if(null==e)return null;if(e instanceof Number&&(e=e.valueOf()),"number"==typeof e&&isFinite(e))return e;if(!0===e||!1===e)return e;if("[object String]"===Object.prototype.toString.call(e))return e;if(e instanceof Date)return e.toISOString();if(Array.isArray(e))return e.map((e=>rI(e)));if("function"==typeof e||"object"==typeof e)return nI(e,(e=>rI(e)));throw new Error("Data cannot be encoded in JSON: "+e)}function iI(e){if(null==e)return e;if(e["@type"])switch(e["@type"]){case"type.googleapis.com/google.protobuf.Int64Value":case"type.googleapis.com/google.protobuf.UInt64Value":{const t=Number(e.value);if(isNaN(t))throw new Error("Data cannot be decoded from JSON: "+e);return t}default:throw new Error("Data cannot be decoded from JSON: "+e)}return Array.isArray(e)?e.map((e=>iI(e))):"function"==typeof e||"object"==typeof e?nI(e,(e=>iI(e))):e}
/**
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
 */const sI="functions",aI={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};
/**
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
 */class oI extends Wf{constructor(e,t,n){super(`${sI}/${e}`,t||""),this.details=n}}
/**
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
 */
class lI{constructor(e,t,n){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=t.getImmediate({optional:!0}),this.auth||e.get().then((e=>this.auth=e),(()=>{})),this.messaging||t.get().then((e=>this.messaging=e),(()=>{})),this.appCheck||n.get().then((e=>this.appCheck=e),(()=>{}))}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return null==e?void 0:e.accessToken}catch(nf){return}}async getMessagingToken(){if(this.messaging&&"Notification"in self&&"granted"===Notification.permission)try{return await this.messaging.getToken()}catch(nf){return}}async getAppCheckToken(e){if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){return{authToken:await this.getAuthToken(),messagingToken:await this.getMessagingToken(),appCheckToken:await this.getAppCheckToken(e)}}}
/**
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
 */const uI="us-central1";class cI{constructor(e,t,n,r,i=uI,s){this.app=e,this.fetchImpl=s,this.emulatorOrigin=null,this.contextProvider=new lI(t,n,r),this.cancelAllRequests=new Promise((e=>{this.deleteService=()=>Promise.resolve(e())}));try{const e=new URL(i);this.customDomain=e.origin+("/"===e.pathname?"":e.pathname),this.region=uI}catch(nf){this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;if(null!==this.emulatorOrigin){return`${this.emulatorOrigin}/${t}/${this.region}/${e}`}return null!==this.customDomain?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function hI(e,t,n){return n=>function(e,t,n,r){const i=e._url(t);return async function(e,t,n,r){n=rI(n);const i={data:n},s={},a=await e.contextProvider.getContext(r.limitedUseAppCheckTokens);a.authToken&&(s.Authorization="Bearer "+a.authToken);a.messagingToken&&(s["Firebase-Instance-ID-Token"]=a.messagingToken);null!==a.appCheckToken&&(s["X-Firebase-AppCheck"]=a.appCheckToken);const o=r.timeout||7e4,l=function(e){let t=null;return{promise:new Promise(((n,r)=>{t=setTimeout((()=>{r(new oI("deadline-exceeded","deadline-exceeded"))}),e)})),cancel:()=>{t&&clearTimeout(t)}}}(o),u=await Promise.race([dI(t,i,s,e.fetchImpl),l.promise,e.cancelAllRequests]);if(l.cancel(),!u)throw new oI("cancelled","Firebase Functions instance was deleted.");const c=function(e,t){let n,r=function(e){if(e>=200&&e<300)return"ok";switch(e){case 0:case 500:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}(e),i=r;try{const e=t&&t.error;if(e){const t=e.status;if("string"==typeof t){if(!aI[t])return new oI("internal","internal");r=aI[t],i=t}const s=e.message;"string"==typeof s&&(i=s),n=e.details,void 0!==n&&(n=iI(n))}}catch(nf){}return"ok"===r?null:new oI(r,i,n)}(u.status,u.json);if(c)throw c;if(!u.json)throw new oI("internal","Response is not valid JSON object.");let h=u.json.data;void 0===h&&(h=u.json.result);if(void 0===h)throw new oI("internal","Response is missing data field.");return{data:iI(h)}}(e,i,n,r)}(e,t,n,{})}async function dI(e,t,n,r){let i;n["Content-Type"]="application/json";try{i=await r(e,{method:"POST",body:JSON.stringify(t),headers:n})}catch(nf){return{status:0,json:null}}let s=null;try{s=await i.json()}catch(nf){}return{status:i.status,json:s}}const fI="@firebase/functions",pI="0.11.8";!function(e,t){hm(new np(sI,((t,{instanceIdentifier:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("messaging-internal"),a=t.getProvider("app-check-internal");return new cI(r,i,s,a,n,e)}),"PUBLIC").setMultipleInstances(!0)),wm(fI,pI,t),wm(fI,pI,"esm2017")}
/**
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
 */(fetch.bind(self));const mI=ym({apiKey:"YOUR_API_KEY",authDomain:"YOUR_AUTH_DOMAIN",projectId:"YOUR_PROJECT_ID",storageBucket:"YOUR_STORAGE_BUCKET",messagingSenderId:"YOUR_MESSAGING_SENDER_ID",appId:"YOUR_APP_ID"}),gI=function(e){const t="string"==typeof e?e:"(default)",n=dm("object"==typeof e?e:vm(),"firestore").getImmediate({identifier:t});if(!n._initialized){const e=zf("firestore");e&&_E(n,...e)}return n}(mI);!function(e=vm()){const t=dm(e,"auth");if(t.isInitialized())return t.getImmediate();const n=
/**
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
 */
function(e,t){const n=dm(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(Yf(n.getOptions(),null!=t?t:{}))return e;Sk(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:GT,persistence:[hT,GS,YS]}),r=$f("authTokenSyncURL");if(r&&"boolean"==typeof isSecureContext&&isSecureContext){const e=new URL(r,location.origin);if(location.origin===e.origin){const t=(i=e.toString(),async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>JT)return;const r=null==t?void 0:t.token;ZT!==r&&(ZT=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){tp(e).beforeAuthStateChanged(t,n)}(n,t,(()=>t(n.currentUser))),function(e,t,n,r){tp(e).onIdTokenChanged(t,n,r)}(n,(e=>t(e)))}}var i;const s=jf("auth");s&&NS(n,`http://${s}`)}(mI);const yI=function(e=vm(),t=uI){const n=dm(tp(e),sI).getImmediate({identifier:t}),r=zf("functions");return r&&function(e,t,n){!function(e,t,n){e.emulatorOrigin=`http://${t}:${n}`}(tp(e),t,n)}(n,...r),n}(mI),vI="newsletter_subscribers",wI=async e=>{const t=nk(TE(gI,vI),ik("email","==",e));if(!(await gk(t)).empty)throw new Error("Email already subscribed");const n={email:e,subscribeDate:new zE("serverTimestamp"),unsubscribeToken:Math.random().toString(36).substring(2)+Date.now().toString(36)},r=(i="sendWelcomeEmail",hI(tp(yI),i));var i;return await r({email:e,unsubscribeToken:n.unsubscribeToken}),yk(TE(gI,vI),n)};function bI({isOpen:e,onClose:t}){const[n,r]=j.useState(""),[i,s]=j.useState(!1);if(!e)return null;return Y.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",children:[Y.jsx(Rf,{position:"top-center"}),Y.jsx("div",{className:"absolute inset-0 bg-black/60 backdrop-blur-sm",onClick:t}),Y.jsxs("div",{className:"relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-8 max-w-md w-full",children:[Y.jsx("button",{onClick:t,className:"absolute top-4 right-4 text-gray-400 hover:text-white transition-colors",children:Y.jsx(Ad,{className:"h-6 w-6"})}),Y.jsxs("div",{className:"text-center mb-6",children:[Y.jsx("h3",{className:"text-2xl font-bold text-white mb-2",children:"Join the Spatial Learning Revolution"}),Y.jsx("p",{className:"text-gray-300",children:"Be part of an innovative community shaping the future of education in the Spatial Web. Get exclusive access to:"})]}),Y.jsx("div",{className:"space-y-4 mb-6",children:["Early access to spatial computing tools","Advanced teaching methodologies","Community events and workshops","Latest spatial web research"].map(((e,t)=>Y.jsxs("div",{className:"flex items-center text-gray-300",children:[Y.jsx("div",{className:"h-2 w-2 bg-cyan-400 rounded-full mr-3"}),e]},t)))}),Y.jsxs("form",{onSubmit:async e=>{e.preventDefault(),s(!0);try{const e=await(async e=>{const t=nk(TE(gI,vI),ik("email","==",e));return!(await gk(t)).empty})(n);if(e)return void tf.error("This email is already subscribed!");await wI(n),tf.success("Successfully subscribed to newsletter!"),r(""),t()}catch(i){tf.error("Failed to subscribe. Please try again.")}finally{s(!1)}},className:"space-y-4",children:[Y.jsx("input",{type:"email",value:n,onChange:e=>r(e.target.value),placeholder:"Enter your email",className:"w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400",required:!0}),Y.jsx("button",{type:"submit",disabled:i,className:"w-full px-4 py-3 bg-cyan-500 hover:bg-cyan-600 disabled:bg-cyan-500/50 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-colors",children:i?"Subscribing...":"Join the Spatial Web Community"})]})]})]})}function _I({isOpen:e,onClose:t}){const[n,r]=j.useState(""),[i,s]=j.useState(""),[a,o]=j.useState("");if(!e)return null;return Y.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",children:[Y.jsx("div",{className:"absolute inset-0 bg-black/60 backdrop-blur-sm",onClick:t}),Y.jsxs("div",{className:"relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-8 max-w-md w-full",children:[Y.jsx("button",{onClick:t,className:"absolute top-4 right-4 text-gray-400 hover:text-white transition-colors",children:Y.jsx(Ad,{className:"h-6 w-6"})}),Y.jsxs("div",{className:"text-center mb-6",children:[Y.jsx("h3",{className:"text-2xl font-bold text-white mb-2",children:"Advertise in the Metaverse"}),Y.jsx("p",{className:"text-gray-300",children:"Reach over 3,000 XR professionals, educators, and decision-makers in the educational technology space."})]}),Y.jsx("div",{className:"space-y-4 mb-6",children:["Target audience of XR/AR/VR enthusiasts","High-engagement educational community","Premium ad placements available","Custom sponsorship opportunities"].map(((e,t)=>Y.jsxs("div",{className:"flex items-center text-gray-300",children:[Y.jsx("div",{className:"h-2 w-2 bg-cyan-400 rounded-full mr-3"}),e]},t)))}),Y.jsxs("form",{onSubmit:e=>{e.preventDefault(),t()},className:"space-y-4",children:[Y.jsx("input",{type:"email",value:n,onChange:e=>r(e.target.value),placeholder:"Your business email",className:"w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400",required:!0}),Y.jsx("input",{type:"tel",value:i,onChange:e=>s(e.target.value),placeholder:"Phone number",className:"w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400",required:!0}),Y.jsx("textarea",{value:a,onChange:e=>o(e.target.value),placeholder:"Tell us about your advertising goals",rows:4,className:"w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none",required:!0}),Y.jsx("button",{type:"submit",className:"w-full px-4 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-colors",children:"Get in Touch"})]})]})]})}function EI(){const[e,t]=j.useState(!1),[n,r]=j.useState(!1),[i,s]=j.useState(!1);return Y.jsxs(Y.Fragment,{children:[Y.jsxs("nav",{className:"fixed w-full z-50 bg-black/10 backdrop-blur-lg border-b border-white/10",children:[Y.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:Y.jsxs("div",{className:"flex items-center justify-between h-16",children:[Y.jsxs("div",{className:"flex items-center",children:[Y.jsx(_d,{to:"/",className:"flex-shrink-0",children:Y.jsx(xd,{className:"h-8 w-8 text-cyan-400"})}),Y.jsx("div",{className:"hidden md:block",children:Y.jsxs("div",{className:"ml-10 flex items-baseline space-x-4",children:[Y.jsx(_d,{to:"/resources",className:"text-white hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors",children:"Resources"}),Y.jsx(_d,{to:"/case-studies",className:"text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors",children:"Case Studies"}),Y.jsx(_d,{to:"/tools",className:"text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors",children:"Tools"}),Y.jsx(_d,{to:"/research",className:"text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors",children:"Research"}),Y.jsx(_d,{to:"/professional-development",className:"text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors",children:"Professional Development"}),Y.jsx("button",{onClick:()=>s(!0),className:"text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors",children:"Advertise with us"})]})})]}),Y.jsx("div",{className:"hidden md:block",children:Y.jsx("button",{onClick:()=>r(!0),className:"bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors",children:"Join Community"})}),Y.jsx("div",{className:"md:hidden",children:Y.jsx("button",{onClick:()=>t(!e),className:"text-gray-400 hover:text-white",children:e?Y.jsx(Ad,{className:"h-6 w-6"}):Y.jsx(Nd,{className:"h-6 w-6"})})})]})}),e&&Y.jsx("div",{className:"md:hidden",children:Y.jsxs("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-lg",children:[Y.jsx(_d,{to:"/resources",className:"text-white block px-3 py-2 rounded-md text-base font-medium",children:"Resources"}),Y.jsx(_d,{to:"/case-studies",className:"text-gray-300 block px-3 py-2 rounded-md text-base font-medium",children:"Case Studies"}),Y.jsx(_d,{to:"/tools",className:"text-gray-300 block px-3 py-2 rounded-md text-base font-medium",children:"Tools"}),Y.jsx(_d,{to:"/research",className:"text-gray-300 block px-3 py-2 rounded-md text-base font-medium",children:"Research"}),Y.jsx(_d,{to:"/professional-development",className:"text-gray-300 block px-3 py-2 rounded-md text-base font-medium",children:"Professional Development"}),Y.jsx("button",{onClick:()=>s(!0),className:"text-gray-300 w-full text-left block px-3 py-2 rounded-md text-base font-medium",children:"Advertise with us"})]})})]}),Y.jsx(bI,{isOpen:n,onClose:()=>r(!1)}),Y.jsx(_I,{isOpen:i,onClose:()=>s(!1)})]})}function kI(){return Y.jsxs("div",{className:"App",children:[Y.jsx(EI,{}),Y.jsx(cd,{})," "]})}X.createRoot(document.getElementById("root")).render(Y.jsx(z.StrictMode,{children:Y.jsx(vd,{basename:"/test/",children:Y.jsx(fd,{children:Y.jsx(hd,{path:"/",element:Y.jsx(kI,{})})})})}));
