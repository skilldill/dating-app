(this["webpackJsonpdating-app"]=this["webpackJsonpdating-app"]||[]).push([[64],{181:function(e,t,n){"use strict";n.r(t),n.d(t,"ion_nav",(function(){return g})),n.d(t,"ion_nav_link",(function(){return w}));var i=n(27),r=n(2),s=n.n(r),a=n(4),o=n(7),u=n(11),c=n(14),v=n(13),h=n(23),l=n(24),f=n(54),d=n(227),p=function(){function e(t,n){Object(o.a)(this,e),this.component=t,this.params=n,this.state=1}return Object(u.a)(e,[{key:"init",value:function(){var e=Object(a.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state=2,this.element){e.next=6;break}return n=this.component,e.next=5,Object(d.a)(this.delegate,t,n,["ion-page","ion-page-invisible"],this.params);case 5:this.element=e.sent;case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_destroy",value:function(){Object(h.b)(3!==this.state,"view state must be ATTACHED");var e=this.element;e&&(this.delegate?this.delegate.removeViewFromDom(e.parentElement,e):e.remove()),this.nav=void 0,this.state=3}}]),e}(),m=function(e,t,n){if(!e)return!1;if(e.component!==t)return!1;var i=e.params;if(i===n)return!0;if(!i&&!n)return!0;if(!i||!n)return!1;var r=Object.keys(i),s=Object.keys(n);if(r.length!==s.length)return!1;for(var a=0,o=r;a<o.length;a++){var u=o[a];if(i[u]!==n[u])return!1}return!0},b=function(e,t){return e?e instanceof p?e:new p(e,t):null},g=function(){function e(t){Object(o.a)(this,e),Object(c.l)(this,t),this.transInstr=[],this.animationEnabled=!0,this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.animated=!0,this.ionNavWillLoad=Object(c.f)(this,"ionNavWillLoad",7),this.ionNavWillChange=Object(c.f)(this,"ionNavWillChange",3),this.ionNavDidChange=Object(c.f)(this,"ionNavDidChange",3)}return Object(u.a)(e,[{key:"swipeGestureChanged",value:function(){this.gesture&&this.gesture.enable(!0===this.swipeGesture)}},{key:"rootChanged",value:function(){void 0!==this.root&&(this.useRouter||this.setRoot(this.root,this.rootParams))}},{key:"componentWillLoad",value:function(){if(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]"),void 0===this.swipeGesture){var e=Object(v.b)(this);this.swipeGesture=v.c.getBoolean("swipeBackEnabled","ios"===e)}this.ionNavWillLoad.emit()}},{key:"componentDidLoad",value:function(){var e=Object(a.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.rootChanged(),e.next=3,n.e(0).then(n.bind(null,230));case 3:this.gesture=e.sent.createSwipeBackGesture(this.el,this.canStart.bind(this),this.onStart.bind(this),this.onMove.bind(this),this.onEnd.bind(this)),this.swipeGestureChanged();case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUnload",value:function(){var e,t=Object(i.a)(this.views);try{for(t.s();!(e=t.n()).done;){var n=e.value;Object(l.f)(n.element,l.c),n._destroy()}}catch(r){t.e(r)}finally{t.f()}this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.transInstr.length=this.views.length=0,this.destroyed=!0}},{key:"push",value:function(e,t,n,i){return this.queueTrns({insertStart:-1,insertViews:[{page:e,params:t}],opts:n},i)}},{key:"insert",value:function(e,t,n,i,r){return this.queueTrns({insertStart:e,insertViews:[{page:t,params:n}],opts:i},r)}},{key:"insertPages",value:function(e,t,n,i){return this.queueTrns({insertStart:e,insertViews:t,opts:n},i)}},{key:"pop",value:function(e,t){return this.queueTrns({removeStart:-1,removeCount:1,opts:e},t)}},{key:"popTo",value:function(e,t,n){var i={removeStart:-1,removeCount:-1,opts:t};return"object"===typeof e&&e.component?(i.removeView=e,i.removeStart=1):"number"===typeof e&&(i.removeStart=e+1),this.queueTrns(i,n)}},{key:"popToRoot",value:function(e,t){return this.queueTrns({removeStart:1,removeCount:-1,opts:e},t)}},{key:"removeIndex",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0;return this.queueTrns({removeStart:e,removeCount:t,opts:n},i)}},{key:"setRoot",value:function(e,t,n,i){return this.setPages([{page:e,params:t}],n,i)}},{key:"setPages",value:function(e,t,n){return null==t&&(t={}),!0!==t.animated&&(t.animated=!1),this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},n)}},{key:"setRouteId",value:function(e,t,n){var i,r=this.getActiveSync();if(m(r,e,t))return Promise.resolve({changed:!1,element:r.element});var o,u=new Promise((function(e){return i=e})),c={updateURL:!1,viewIsReady:function(e){var t,n=new Promise((function(e){return t=e}));return i({changed:!0,element:e,markVisible:function(){var e=Object(a.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(),e.next=3,o;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}),n}};if("root"===n)o=this.setRoot(e,t,c);else{var v=this.views.find((function(n){return m(n,e,t)}));v?o=this.popTo(v,Object.assign(Object.assign({},c),{direction:"back"})):"forward"===n?o=this.push(e,t,c):"back"===n&&(o=this.setRoot(e,t,Object.assign(Object.assign({},c),{direction:"back",animated:!0})))}return u}},{key:"getRouteId",value:function(){var e=Object(a.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.getActiveSync(),e.abrupt("return",t?{id:t.element.tagName,params:t.params,element:t.element}:void 0);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getActive",value:function(){return Promise.resolve(this.getActiveSync())}},{key:"getByIndex",value:function(e){return Promise.resolve(this.views[e])}},{key:"canGoBack",value:function(e){return Promise.resolve(this.canGoBackSync(e))}},{key:"getPrevious",value:function(e){return Promise.resolve(this.getPreviousSync(e))}},{key:"getLength",value:function(){return this.views.length}},{key:"getActiveSync",value:function(){return this.views[this.views.length-1]}},{key:"canGoBackSync",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getActiveSync();return!(!e||!this.getPreviousSync(e))}},{key:"getPreviousSync",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getActiveSync();if(e){var t=this.views,n=t.indexOf(e);return n>0?t[n-1]:void 0}}},{key:"queueTrns",value:function(e,t){if(this.isTransitioning&&null!=e.opts&&e.opts.skipIfBusy)return Promise.resolve(!1);var n=new Promise((function(t,n){e.resolve=t,e.reject=n}));return e.done=t,e.insertViews&&0===e.insertViews.length&&(e.insertViews=void 0),this.transInstr.push(e),this.nextTrns(),n}},{key:"success",value:function(e,t){if(this.destroyed)this.fireError("nav controller was destroyed",t);else if(t.done&&t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction),t.resolve(e.hasCompleted),!1!==t.opts.updateURL&&this.useRouter){var n=document.querySelector("ion-router");if(n){var i="back"===e.direction?"back":"forward";n.navChanged(i)}}}},{key:"failed",value:function(e,t){this.destroyed?this.fireError("nav controller was destroyed",t):(this.transInstr.length=0,this.fireError(e,t))}},{key:"fireError",value:function(e,t){t.done&&t.done(!1,!1,e),t.reject&&!this.destroyed?t.reject(e):t.resolve(!1)}},{key:"nextTrns",value:function(){if(this.isTransitioning)return!1;var e=this.transInstr.shift();return!!e&&(this.runTransition(e),!0)}},{key:"runTransition",value:function(){var e=Object(a.a)(s.a.mark((function e(t){var n,i,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,this.ionNavWillChange.emit(),this.isTransitioning=!0,this.prepareTI(t),n=this.getActiveSync(),i=this.getEnteringView(t,n),n||i){e.next=8;break}throw new Error("no views in the stack to be removed");case 8:if(!i||1!==i.state){e.next=11;break}return e.next=11,i.init(this.el);case 11:if(this.postViewInit(i,n,t),!((t.enteringRequiresTransition||t.leavingRequiresTransition)&&i!==n)){e.next=19;break}return e.next=16,this.transition(i,n,t);case 16:e.t0=e.sent,e.next=20;break;case 19:e.t0={hasCompleted:!0,requiresTransition:!1};case 20:r=e.t0,this.success(r,t),this.ionNavDidChange.emit(),e.next=28;break;case 25:e.prev=25,e.t1=e.catch(0),this.failed(e.t1,t);case 28:this.isTransitioning=!1,this.nextTrns();case 30:case"end":return e.stop()}}),e,this,[[0,25]])})));return function(t){return e.apply(this,arguments)}}()},{key:"prepareTI",value:function(e){var t=this.views.length;if(e.opts=e.opts||{},void 0===e.opts.delegate&&(e.opts.delegate=this.delegate),void 0!==e.removeView){Object(h.b)(void 0!==e.removeStart,"removeView needs removeStart"),Object(h.b)(void 0!==e.removeCount,"removeView needs removeCount");var n=this.views.indexOf(e.removeView);if(n<0)throw new Error("removeView was not found");e.removeStart+=n}void 0!==e.removeStart&&(e.removeStart<0&&(e.removeStart=t-1),e.removeCount<0&&(e.removeCount=t-e.removeStart),e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===t),e.insertViews&&((e.insertStart<0||e.insertStart>t)&&(e.insertStart=t),e.enteringRequiresTransition=e.insertStart===t);var r=e.insertViews;if(r){Object(h.b)(r.length>0,"length can not be zero");var s=r.map((function(e){return e instanceof p?e:"page"in e?b(e.page,e.params):b(e,void 0)})).filter((function(e){return null!==e}));if(0===s.length)throw new Error("invalid views to insert");var a,o=Object(i.a)(s);try{for(o.s();!(a=o.n()).done;){var u=a.value;u.delegate=e.opts.delegate;var c=u.nav;if(c&&c!==this)throw new Error("inserted view was already inserted");if(3===u.state)throw new Error("inserted view was already destroyed")}}catch(v){o.e(v)}finally{o.f()}e.insertViews=s}}},{key:"getEnteringView",value:function(e,t){var n=e.insertViews;if(void 0!==n)return n[n.length-1];var i=e.removeStart;if(void 0!==i)for(var r=this.views,s=i+e.removeCount,a=r.length-1;a>=0;a--){var o=r[a];if((a<i||a>=s)&&o!==t)return o}}},{key:"postViewInit",value:function(e,t,n){Object(h.b)(t||e,"Both leavingView and enteringView are null"),Object(h.b)(n.resolve,"resolve must be valid"),Object(h.b)(n.reject,"reject must be valid");var r,s=n.opts,a=n.insertViews,o=n.removeStart,u=n.removeCount;if(void 0!==o&&void 0!==u){Object(h.b)(o>=0,"removeStart can not be negative"),Object(h.b)(u>=0,"removeCount can not be negative"),r=[];for(var c=0;c<u;c++){var v=this.views[c+o];v&&v!==e&&v!==t&&r.push(v)}s.direction=s.direction||"back"}var f=this.views.length+(void 0!==a?a.length:0)-(void 0!==u?u:0);if(Object(h.b)(f>=0,"final balance can not be negative"),0===f)throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(a){var d,p=n.insertStart,m=Object(i.a)(a);try{for(m.s();!(d=m.n()).done;){var b=d.value;this.insertViewAt(b,p),p++}}catch(S){m.e(S)}finally{m.f()}n.enteringRequiresTransition&&(s.direction=s.direction||"forward")}if(r&&r.length>0){var g,w=Object(i.a)(r);try{for(w.s();!(g=w.n()).done;){var y=g.value;Object(l.f)(y.element,l.a),Object(l.f)(y.element,l.b),Object(l.f)(y.element,l.c)}}catch(S){w.e(S)}finally{w.f()}var k,j=Object(i.a)(r);try{for(j.s();!(k=j.n()).done;){var O=k.value;this.destroyView(O)}}catch(S){j.e(S)}finally{j.f()}}}},{key:"transition",value:function(){var e=Object(a.a)(s.a.mark((function e(t,n,i){var r,a,o,u,c,h,f,d,p=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.opts,a=r.progressAnimation?function(e){return p.sbAni=e}:void 0,o=Object(v.b)(this),u=t.element,c=n&&n.element,h=Object.assign({mode:o,showGoBack:this.canGoBackSync(t),baseEl:this.el,animationBuilder:this.animation||r.animationBuilder||v.c.get("navAnimation"),progressCallback:a,animated:this.animated&&v.c.getBoolean("animated",!0),enteringEl:u,leavingEl:c},r),e.next=8,Object(l.h)(h);case 8:return f=e.sent,d=f.hasCompleted,e.abrupt("return",this.transitionFinish(d,t,n,r));case 11:case"end":return e.stop()}}),e,this)})));return function(t,n,i){return e.apply(this,arguments)}}()},{key:"transitionFinish",value:function(e,t,n,i){var r=e?t:n;return r&&this.cleanup(r),{hasCompleted:e,requiresTransition:!0,enteringView:t,leavingView:n,direction:i.direction}}},{key:"insertViewAt",value:function(e,t){var n=this.views,i=n.indexOf(e);i>-1?(Object(h.b)(e.nav===this,"view is not part of the nav"),n.splice(t,0,n.splice(i,1)[0])):(Object(h.b)(!e.nav,"nav is used"),e.nav=this,n.splice(t,0,e))}},{key:"removeView",value:function(e){Object(h.b)(2===e.state||3===e.state,"view state should be loaded or destroyed");var t=this.views,n=t.indexOf(e);Object(h.b)(n>-1,"view must be part of the stack"),n>=0&&t.splice(n,1)}},{key:"destroyView",value:function(e){e._destroy(),this.removeView(e)}},{key:"cleanup",value:function(e){if(!this.destroyed)for(var t=this.views,n=t.indexOf(e),i=t.length-1;i>=0;i--){var r=t[i],s=r.element;i>n?(Object(l.f)(s,l.c),this.destroyView(r)):i<n&&Object(l.g)(s,!0)}}},{key:"canStart",value:function(){return!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.animationEnabled&&this.canGoBackSync()}},{key:"onStart",value:function(){this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:!0}},void 0)}},{key:"onMove",value:function(e){this.sbAni&&this.sbAni.progressStep(e)}},{key:"onEnd",value:function(e,t,n){var i=this;if(this.sbAni){this.animationEnabled=!1,this.sbAni.onFinish((function(){i.animationEnabled=!0}),{oneTimeCallback:!0});var r=e?-.001:.001;e?r+=Object(f.a)([0,0],[.32,.72],[0,1],[1,1],t)[0]:(this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"),r+=Object(f.a)([0,0],[1,0],[.68,.28],[1,1],t)[0]),this.sbAni.progressEnd(e?1:0,r,n)}}},{key:"render",value:function(){return Object(c.j)("slot",null)}},{key:"el",get:function(){return Object(c.g)(this)}}],[{key:"watchers",get:function(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}}}]),e}();g.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";var w=function(){function e(t){var n=this;Object(o.a)(this,e),Object(c.l)(this,t),this.routerDirection="forward",this.onClick=function(){return function(e,t,n,i){var r=e.closest("ion-nav");if(r)if("forward"===t){if(void 0!==n)return r.push(n,i,{skipIfBusy:!0})}else if("root"===t){if(void 0!==n)return r.setRoot(n,i,{skipIfBusy:!0})}else if("back"===t)return r.pop({skipIfBusy:!0});return Promise.resolve(!1)}(n.el,n.routerDirection,n.component,n.componentProps)}}return Object(u.a)(e,[{key:"render",value:function(){return Object(c.j)(c.b,{onClick:this.onClick})}},{key:"el",get:function(){return Object(c.g)(this)}}]),e}()},227:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var i=n(2),r=n.n(i),s=n(4),a=function(){var e=Object(s.a)(r.a.mark((function e(t,n,i,s,a){var o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return",t.attachViewToDom(n,i,a,s));case 2:if("string"===typeof i||i instanceof HTMLElement){e.next=4;break}throw new Error("framework delegate is missing");case 4:if(o="string"===typeof i?n.ownerDocument&&n.ownerDocument.createElement(i):i,s&&s.forEach((function(e){return o.classList.add(e)})),a&&Object.assign(o,a),n.appendChild(o),!o.componentOnReady){e.next=11;break}return e.next=11,o.componentOnReady();case 11:return e.abrupt("return",o);case 12:case"end":return e.stop()}}),e)})));return function(t,n,i,r,s){return e.apply(this,arguments)}}(),o=function(e,t){if(t){if(e){var n=t.parentElement;return e.removeViewFromDom(n,t)}t.remove()}return Promise.resolve()}}}]);
//# sourceMappingURL=64.d92eef16.chunk.js.map