(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[655],{1210:function(t,e){"use strict";function n(t,e,n,r){return!1}Object.defineProperty(e,"__esModule",{value:!0}),e.getDomainLocale=n,("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},8418:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default,Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(2648).Z,i=n(7273).Z,a=o(n(7294)),c=n(6273),u=n(2725),s=n(3462),f=n(1018),l=n(7190),h=n(1210),p=n(8684),d={};function v(t,e,n,r){if(t&&c.isLocalURL(e)){Promise.resolve(t.prefetch(e,n,r)).catch(function(t){});var o=r&&void 0!==r.locale?r.locale:t&&t.locale;d[e+"%"+n+(o?"%"+o:"")]=!0}}var y=a.default.forwardRef(function(t,e){var n,o,y=t.href,b=t.as,g=t.children,O=t.prefetch,m=t.passHref,w=t.replace,x=t.shallow,P=t.scroll,j=t.locale,M=t.onClick,S=t.onMouseEnter,C=t.onTouchStart,_=t.legacyBehavior,I=void 0===_?!0!==Boolean(!1):_,E=i(t,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=g,I&&("string"==typeof n||"number"==typeof n)&&(n=a.default.createElement("a",null,n));var D=!1!==O,R=a.default.useContext(s.RouterContext),A=a.default.useContext(f.AppRouterContext);A&&(R=A);var k=a.default.useMemo(function(){var t=r(c.resolveHref(R,y,!0),2),e=t[0],n=t[1];return{href:e,as:b?c.resolveHref(R,b):n||e}},[R,y,b]),L=k.href,T=k.as,B=a.default.useRef(L),N=a.default.useRef(T);I&&(o=a.default.Children.only(n));var F=I?o&&"object"==typeof o&&o.ref:e,Q=r(l.useIntersection({rootMargin:"200px"}),3),U=Q[0],q=Q[1],G=Q[2],Y=a.default.useCallback(function(t){(N.current!==T||B.current!==L)&&(G(),N.current=T,B.current=L),U(t),F&&("function"==typeof F?F(t):"object"==typeof F&&(F.current=t))},[T,F,L,G,U]);a.default.useEffect(function(){var t=q&&D&&c.isLocalURL(L),e=void 0!==j?j:R&&R.locale,n=d[L+"%"+T+(e?"%"+e:"")];t&&!n&&v(R,L,T,{locale:e})},[T,L,q,j,D,R]);var H={ref:Y,onClick:function(t){I||"function"!=typeof M||M(t),I&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||function(t,e,n,r,o,i,u,s,f,l){if("A"!==t.currentTarget.nodeName.toUpperCase()||(!(p=(h=t).currentTarget.target)||"_self"===p)&&!h.metaKey&&!h.ctrlKey&&!h.shiftKey&&!h.altKey&&(!h.nativeEvent||2!==h.nativeEvent.which)&&c.isLocalURL(n)){t.preventDefault();var h,p,d=function(){"beforePopState"in e?e[o?"replace":"push"](n,r,{shallow:i,locale:s,scroll:u}):e[o?"replace":"push"](n,{forceOptimisticNavigation:!l})};f?a.default.startTransition(d):d()}}(t,R,L,T,w,x,P,j,Boolean(A),D)},onMouseEnter:function(t){I||"function"!=typeof S||S(t),I&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(t),!(!D&&A)&&c.isLocalURL(L)&&v(R,L,T,{priority:!0})},onTouchStart:function(t){I||"function"!=typeof C||C(t),I&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(t),!(!D&&A)&&c.isLocalURL(L)&&v(R,L,T,{priority:!0})}};if(!I||m||"a"===o.type&&!("href"in o.props)){var W=void 0!==j?j:R&&R.locale,Z=R&&R.isLocaleDomain&&h.getDomainLocale(T,W,R.locales,R.domainLocales);H.href=Z||p.addBasePath(u.addLocale(T,W,R&&R.defaultLocale))}return I?a.default.cloneElement(o,H):a.default.createElement("a",Object.assign({},E,H),n)});e.default=y,("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},1018:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.TemplateContext=e.GlobalLayoutRouterContext=e.LayoutRouterContext=e.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294)),o=r.default.createContext(null);e.AppRouterContext=o;var i=r.default.createContext(null);e.LayoutRouterContext=i;var a=r.default.createContext(null);e.GlobalLayoutRouterContext=a;var c=r.default.createContext(null);e.TemplateContext=c},1664:function(t,e,n){t.exports=n(8418)},1163:function(t,e,n){t.exports=n(387)},725:function(t,e,n){var r,o;"undefined"!=typeof self&&self,o=function(t){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e||4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,(function(e){return t[e]}).bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(e,n){e.exports=t},function(t,e,n){"use strict";var r={linear:function(t,e,n,r){return(n-e)*t/r+e},easeInQuad:function(t,e,n,r){return(n-e)*(t/=r)*t+e},easeOutQuad:function(t,e,n,r){return-(n-e)*(t/=r)*(t-2)+e},easeInOutQuad:function(t,e,n,r){var o=n-e;return(t/=r/2)<1?o/2*t*t+e:-o/2*(--t*(t-2)-1)+e},easeInCubic:function(t,e,n,r){return(n-e)*(t/=r)*t*t+e},easeOutCubic:function(t,e,n,r){return(n-e)*((t=t/r-1)*t*t+1)+e},easeInOutCubic:function(t,e,n,r){var o=n-e;return(t/=r/2)<1?o/2*t*t*t+e:o/2*((t-=2)*t*t+2)+e},easeInQuart:function(t,e,n,r){return(n-e)*(t/=r)*t*t*t+e},easeOutQuart:function(t,e,n,r){return-(n-e)*((t=t/r-1)*t*t*t-1)+e},easeInOutQuart:function(t,e,n,r){var o=n-e;return(t/=r/2)<1?o/2*t*t*t*t+e:-o/2*((t-=2)*t*t*t-2)+e},easeInQuint:function(t,e,n,r){return(n-e)*(t/=r)*t*t*t*t+e},easeOutQuint:function(t,e,n,r){return(n-e)*((t=t/r-1)*t*t*t*t+1)+e},easeInOutQuint:function(t,e,n,r){var o=n-e;return(t/=r/2)<1?o/2*t*t*t*t*t+e:o/2*((t-=2)*t*t*t*t+2)+e},easeInSine:function(t,e,n,r){var o=n-e;return-o*Math.cos(t/r*(Math.PI/2))+o+e},easeOutSine:function(t,e,n,r){return(n-e)*Math.sin(t/r*(Math.PI/2))+e},easeInOutSine:function(t,e,n,r){return-(n-e)/2*(Math.cos(Math.PI*t/r)-1)+e},easeInExpo:function(t,e,n,r){return 0==t?e:(n-e)*Math.pow(2,10*(t/r-1))+e},easeOutExpo:function(t,e,n,r){var o=n-e;return t==r?e+o:o*(1-Math.pow(2,-10*t/r))+e},easeInOutExpo:function(t,e,n,r){var o=n-e;return 0===t?e:t===r?e+o:(t/=r/2)<1?o/2*Math.pow(2,10*(t-1))+e:o/2*(2-Math.pow(2,-10*--t))+e},easeInCirc:function(t,e,n,r){return-(n-e)*(Math.sqrt(1-(t/=r)*t)-1)+e},easeOutCirc:function(t,e,n,r){return(n-e)*Math.sqrt(1-(t=t/r-1)*t)+e},easeInOutCirc:function(t,e,n,r){var o=n-e;return(t/=r/2)<1?-o/2*(Math.sqrt(1-t*t)-1)+e:o/2*(Math.sqrt(1-(t-=2)*t)+1)+e},easeInElastic:function(t,e,n,r){var o,i,a,c=n-e;return a=1.70158,0===t?e:1==(t/=r)?e+c:(i=0,i=.3*r,(o=c)<Math.abs(c)?(o=c,a=i/4):a=i/(2*Math.PI)*Math.asin(c/o),-o*Math.pow(2,10*(t-=1))*Math.sin((t*r-a)*(2*Math.PI)/i)+e)},easeOutElastic:function(t,e,n,r){var o,i,a,c=n-e;return a=1.70158,0===t?e:1==(t/=r)?e+c:(i=0,i=.3*r,(o=c)<Math.abs(c)?(o=c,a=i/4):a=i/(2*Math.PI)*Math.asin(c/o),o*Math.pow(2,-10*t)*Math.sin((t*r-a)*(2*Math.PI)/i)+c+e)},easeInOutElastic:function(t,e,n,r){var o,i,a,c=n-e;return a=1.70158,0===t?e:2==(t/=r/2)?e+c:(i=0,i=r*(.3*1.5),(o=c)<Math.abs(c)?(o=c,a=i/4):a=i/(2*Math.PI)*Math.asin(c/o),t<1?-(o*Math.pow(2,10*(t-=1))*Math.sin((t*r-a)*(2*Math.PI)/i)*.5)+e:o*Math.pow(2,-10*(t-=1))*Math.sin((t*r-a)*(2*Math.PI)/i)*.5+c+e)},easeInBack:function(t,e,n,r,o){return void 0===o&&(o=1.70158),(n-e)*(t/=r)*t*((o+1)*t-o)+e},easeOutBack:function(t,e,n,r,o){return void 0===o&&(o=1.70158),(n-e)*((t=t/r-1)*t*((o+1)*t+o)+1)+e},easeInOutBack:function(t,e,n,r,o){var i=n-e;return void 0===o&&(o=1.70158),(t/=r/2)<1?i/2*(t*t*((1+(o*=1.525))*t-o))+e:i/2*((t-=2)*t*((1+(o*=1.525))*t+o)+2)+e},easeInBounce:function(t,e,n,o){var i=n-e;return i-r.easeOutBounce(o-t,0,i,o)+e},easeOutBounce:function(t,e,n,r){var o=n-e;return(t/=r)<1/2.75?o*(7.5625*t*t)+e:t<2/2.75?o*(7.5625*(t-=1.5/2.75)*t+.75)+e:t<2.5/2.75?o*(7.5625*(t-=2.25/2.75)*t+.9375)+e:o*(7.5625*(t-=2.625/2.75)*t+.984375)+e},easeInOutBounce:function(t,e,n,o){var i=n-e;return t<o/2?.5*r.easeInBounce(2*t,0,i,o)+e:.5*r.easeOutBounce(2*t-o,0,i,o)+.5*i+e}};t.exports=r},function(t,e,n){t.exports=n(3)},function(t,e,n){"use strict";n.r(e),n.d(e,"ReactConfetti",function(){return B});var r,o,i,a,c=n(0),u=n.n(c),s=n(1),f=n.n(s);function l(t,e){return t+Math.random()*(e-t)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}(r=i||(i={}))[r.Circle=0]="Circle",r[r.Square=1]="Square",r[r.Strip=2]="Strip",(o=a||(a={}))[o.Positive=1]="Positive",o[o.Negative=-1]="Negative";var d=function(){var t,e;function n(t,e,r,o){(function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")})(this,n),p(this,"context",void 0),p(this,"radius",void 0),p(this,"x",void 0),p(this,"y",void 0),p(this,"w",void 0),p(this,"h",void 0),p(this,"vx",void 0),p(this,"vy",void 0),p(this,"shape",void 0),p(this,"angle",void 0),p(this,"angularSpin",void 0),p(this,"color",void 0),p(this,"rotateY",void 0),p(this,"rotationDirection",void 0),p(this,"getOptions",void 0),this.getOptions=e;var i=this.getOptions(),c=i.colors,u=i.initialVelocityX,s=i.initialVelocityY;this.context=t,this.x=r,this.y=o,this.w=l(5,20),this.h=l(5,20),this.radius=l(5,10),this.vx="number"==typeof u?l(-u,u):l(u.min,u.max),this.vy="number"==typeof s?l(-s,0):l(s.min,s.max),this.shape=Math.floor(0+3*Math.random()),this.angle=l(0,360)*Math.PI/180,this.angularSpin=l(-.2,.2),this.color=c[Math.floor(Math.random()*c.length)],this.rotateY=l(0,1),this.rotationDirection=l(0,1)?a.Positive:a.Negative}return t=[{key:"update",value:function(){var t=this.getOptions(),e=t.gravity,n=t.wind,r=t.friction,o=t.opacity,c=t.drawShape;this.x+=this.vx,this.y+=this.vy,this.vy+=e,this.vx+=n,this.vx*=r,this.vy*=r,this.rotateY>=1&&this.rotationDirection===a.Positive?this.rotationDirection=a.Negative:this.rotateY<=-1&&this.rotationDirection===a.Negative&&(this.rotationDirection=a.Positive);var u=.1*this.rotationDirection;if(this.rotateY+=u,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=o,this.context.lineCap="round",this.context.lineWidth=2,c&&"function"==typeof c)c.call(this,this.context);else switch(this.shape){case i.Circle:this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break;case i.Square:this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break;case i.Strip:this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h)}this.context.closePath(),this.context.restore()}}],h(n.prototype,t),e&&h(n,e),n}();function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var y=function t(e,n){var r=this;(function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")})(this,t),v(this,"canvas",void 0),v(this,"context",void 0),v(this,"getOptions",void 0),v(this,"x",0),v(this,"y",0),v(this,"w",0),v(this,"h",0),v(this,"lastNumberOfPieces",0),v(this,"tweenInitTime",Date.now()),v(this,"particles",[]),v(this,"particlesGenerated",0),v(this,"removeParticleAt",function(t){r.particles.splice(t,1)}),v(this,"getParticle",function(){var t=l(r.x,r.w+r.x),e=l(r.y,r.h+r.y);return new d(r.context,r.getOptions,t,e)}),v(this,"animate",function(){var t=r.canvas,e=r.context,n=r.particlesGenerated,o=r.lastNumberOfPieces,i=r.getOptions(),a=i.run,c=i.recycle,u=i.numberOfPieces,s=i.debug,f=i.tweenFunction,l=i.tweenDuration;if(!a)return!1;var h=r.particles.length,p=c?h:n,d=Date.now();if(p<u){o!==u&&(r.tweenInitTime=d,r.lastNumberOfPieces=u);for(var v=r.tweenInitTime,y=f(d-v>l?l:Math.max(0,d-v),p,u,l),b=Math.round(y-p),g=0;g<b;g++)r.particles.push(r.getParticle());r.particlesGenerated+=b}return s&&(e.font="12px sans-serif",e.fillStyle="#333",e.textAlign="right",e.fillText("Particles: ".concat(h),t.width-10,t.height-20)),r.particles.forEach(function(e,n){e.update(),(e.y>t.height||e.y<-100||e.x>t.width+100||e.x<-100)&&(c&&p<=u?r.particles[n]=r.getParticle():r.removeParticleAt(n))}),h>0||p<u}),this.canvas=e;var o=this.canvas.getContext("2d");if(!o)throw Error("Could not get canvas context");this.context=o,this.getOptions=n};function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach(function(e){m(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var w={width:"undefined"!=typeof window?window.innerWidth:300,height:"undefined"!=typeof window?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:f.a.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0},x=function(){var t;function e(t,n){var r=this;(function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")})(this,e),m(this,"canvas",void 0),m(this,"context",void 0),m(this,"_options",void 0),m(this,"generator",void 0),m(this,"rafId",void 0),m(this,"setOptionsWithDefaults",function(t){var e={confettiSource:{x:0,y:0,w:r.canvas.width,h:0}};r._options=g(g(g({},e),w),t),Object.assign(r,t.confettiSource)}),m(this,"update",function(){var t=r.options,e=t.run,n=t.onConfettiComplete,o=r.canvas,i=r.context;e&&(i.fillStyle="white",i.clearRect(0,0,o.width,o.height)),r.generator.animate()?r.rafId=requestAnimationFrame(r.update):(n&&"function"==typeof n&&r.generator.particlesGenerated>0&&n.call(r,r),r._options.run=!1)}),m(this,"reset",function(){r.generator&&r.generator.particlesGenerated>0&&(r.generator.particlesGenerated=0,r.generator.particles=[],r.generator.lastNumberOfPieces=0)}),m(this,"stop",function(){r.options={run:!1},r.rafId&&(cancelAnimationFrame(r.rafId),r.rafId=void 0)}),this.canvas=t;var o=this.canvas.getContext("2d");if(!o)throw Error("Could not get canvas context");this.context=o,this.generator=new y(this.canvas,function(){return r.options}),this.options=n,this.update()}return O(e.prototype,[{key:"options",get:function(){return this._options},set:function(t){var e=this._options&&this._options.run,n=this._options&&this._options.recycle;this.setOptionsWithDefaults(t),this.generator&&(Object.assign(this.generator,this.options.confettiSource),"boolean"==typeof t.recycle&&t.recycle&&!1===n&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),"boolean"==typeof t.run&&t.run&&!1===e&&this.update()}}]),t&&O(e,t),e}();function P(t){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function j(){return(j=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function M(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function S(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?M(Object(n),!0).forEach(function(e){A(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function C(t,e){if(t){if("string"==typeof t)return _(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(t,e):void 0}}function _(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function E(t,e){return(E=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function D(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function R(t){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function A(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var k=u.a.createRef(),L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&E(t,e)}(a,t);var e,n,r,o,i=(n=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}(),function(){var t,e,r,o=R(a);if(n){var i=R(this).constructor;r=Reflect.construct(o,arguments,i)}else r=o.apply(this,arguments);return t=this,e=r,e&&("object"===P(e)||"function"==typeof e)?e:D(t)});function a(t){var e;!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,a);for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return A(D(e=i.call.apply(i,[this,t].concat(r))),"canvas",u.a.createRef()),A(D(e),"confetti",void 0),e.canvas=t.canvasRef||k,e}return r=[{key:"componentDidMount",value:function(){if(this.canvas.current){var t=T(this.props)[0];this.confetti=new x(this.canvas.current,t)}}},{key:"componentDidUpdate",value:function(){var t=T(this.props)[0];this.confetti&&(this.confetti.options=t)}},{key:"componentWillUnmount",value:function(){this.confetti&&this.confetti.stop(),this.confetti=void 0}},{key:"render",value:function(){var t,e,n=function(t){if(Array.isArray(t))return t}(t=T(this.props))||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(t,2)||C(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),r=n[0],o=n[1],i=S({zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0},o.style);return u.a.createElement("canvas",j({width:r.width,height:r.height,ref:this.canvas},o,{style:i}))}}],I(a.prototype,r),o&&I(a,o),a}(c.Component);function T(t){var e,n={},r={},o=[].concat(function(t){if(Array.isArray(t))return _(t)}(e=Object.keys(w))||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(e)||C(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),["confettiSource","drawShape","onConfettiComplete"]),i=["canvasRef"];for(var a in t){var c=t[a];o.includes(a)?n[a]=c:i.includes(a)?i[a]=c:r[a]=c}return[n,r,{}]}A(L,"defaultProps",S({},w)),A(L,"displayName","ReactConfetti");var B=u.a.forwardRef(function(t,e){return u.a.createElement(L,j({canvasRef:e},t))});e.default=B}]).default},t.exports=o(n(7294))},8387:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isNavigator=e.isBrowser=e.off=e.on=e.noop=void 0;var n=function(){};e.noop=n,e.on=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];t&&t.addEventListener&&t.addEventListener.apply(t,e)},e.off=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];t&&t.removeEventListener&&t.removeEventListener.apply(t,e)},e.isBrowser="undefined"!=typeof window,e.isNavigator="undefined"!=typeof navigator},6713:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(7294),o=function(t){r.useEffect(t,[])};e.default=o},9050:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(655),o=n(7294),i=r.__importDefault(n(6258)),a=function(t){var e=o.useRef(0),n=o.useState(t),r=n[0],a=n[1],c=o.useCallback(function(t){cancelAnimationFrame(e.current),e.current=requestAnimationFrame(function(){a(t)})},[]);return i.default(function(){cancelAnimationFrame(e.current)}),[r,c]};e.default=a},6258:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(655),o=n(7294),i=r.__importDefault(n(6713)),a=function(t){var e=o.useRef(t);e.current=t,i.default(function(){return function(){return e.current()}})};e.default=a},2964:function(t,e,n){"use strict";var r=n(655),o=n(7294),i=r.__importDefault(n(9050)),a=n(8387),c=function(t,e){void 0===t&&(t=1/0),void 0===e&&(e=1/0);var n=i.default({width:a.isBrowser?window.innerWidth:t,height:a.isBrowser?window.innerHeight:e}),r=n[0],c=n[1];return o.useEffect(function(){if(a.isBrowser){var t=function(){c({width:window.innerWidth,height:window.innerHeight})};return a.on(window,"resize",t),function(){a.off(window,"resize",t)}}},[]),r};e.Z=c},9396:function(t,e,n){"use strict";function r(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):(function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n.push.apply(n,r)}return n})(Object(e)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}),t}n.d(e,{Z:function(){return r}})},797:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function o(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,{Z:function(){return o}})}}]);