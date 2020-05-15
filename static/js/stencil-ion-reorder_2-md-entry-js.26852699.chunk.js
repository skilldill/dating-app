(this["webpackJsonpdating-app"]=this["webpackJsonpdating-app"]||[]).push([[35],{169:function(e,t,r){"use strict";r.r(t),r.d(t,"ion_reorder",(function(){return u})),r.d(t,"ion_reorder_group",(function(){return f}));var n=r(5),i=r(1),o=r.n(i),s=r(4),a=r(7),l=r(11),c=r(14),h=r(13),d=r(204),u=function(){function e(t){Object(a.a)(this,e),Object(c.l)(this,t)}return Object(l.a)(e,[{key:"onClick",value:function(e){e.preventDefault(),e.stopImmediatePropagation()}},{key:"render",value:function(){var e=Object(h.b)(this),t="ios"===e?"reorder-three-outline":"reorder-two-sharp";return Object(c.j)(c.b,{class:e},Object(c.j)("slot",null,Object(c.j)("ion-icon",{name:t,lazy:!1,class:"reorder-icon"})))}}]),e}();u.style={ios:":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:34px;opacity:0.4}",md:":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:31px;opacity:0.3}"};var f=function(){function e(t){Object(a.a)(this,e),Object(c.l)(this,t),this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.state=0,this.disabled=!0,this.ionItemReorder=Object(c.f)(this,"ionItemReorder",7)}return Object(l.a)(e,[{key:"disabledChanged",value:function(){this.gesture&&this.gesture.enable(!this.disabled)}},{key:"connectedCallback",value:function(){var e=Object(s.a)(o.a.mark((function e(){var t,n=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=this.el.closest("ion-content"))){e.next=5;break}return e.next=4,t.getScrollElement();case 4:this.scrollEl=e.sent;case 5:return e.next=7,Promise.resolve().then(r.bind(null,53));case 7:this.gesture=e.sent.createGesture({el:this.el,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:!1,canStart:function(e){return n.canStart(e)},onStart:function(e){return n.onStart(e)},onMove:function(e){return n.onMove(e)},onEnd:function(){return n.onEnd()}}),this.disabledChanged();case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"disconnectedCallback",value:function(){this.onEnd(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}},{key:"complete",value:function(e){return Promise.resolve(this.completeSync(e))}},{key:"canStart",value:function(e){if(this.selectedItemEl||0!==this.state)return!1;var t=e.event.target.closest("ion-reorder");if(!t)return!1;var r=v(t,this.el);return!!r&&(e.data=r,!0)}},{key:"onStart",value:function(e){e.event.preventDefault();var t=this.selectedItemEl=e.data,r=this.cachedHeights;r.length=0;var n=this.el,i=n.children;if(i&&0!==i.length){for(var o=0,s=0;s<i.length;s++){var a=i[s];o+=a.offsetHeight,r.push(o),a.$ionIndex=s}var l=n.getBoundingClientRect();if(this.containerTop=l.top,this.containerBottom=l.bottom,this.scrollEl){var c=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=c.top+p,this.scrollElBottom=c.bottom-p}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=b(t),this.selectedItemHeight=t.offsetHeight,this.state=1,t.classList.add(g),Object(d.a)()}}},{key:"onMove",value:function(e){var t=this.selectedItemEl;if(t){var r=this.autoscroll(e.currentY),n=this.containerTop-r,i=this.containerBottom-r,o=Math.max(n,Math.min(e.currentY,i)),s=r+o-e.startY,a=o-n,l=this.itemIndexForTop(a);if(l!==this.lastToIndex){var c=b(t);this.lastToIndex=l,Object(d.b)(),this.reorderMove(c,l)}t.style.transform="translateY(".concat(s,"px)")}}},{key:"onEnd",value:function(){var e=this.selectedItemEl;if(this.state=2,e){var t=this.lastToIndex,r=b(e);t===r?this.completeSync():this.ionItemReorder.emit({from:r,to:t,complete:this.completeSync.bind(this)}),Object(d.c)()}else this.state=0}},{key:"completeSync",value:function(e){var t=this.selectedItemEl;if(t&&2===this.state){var r=this.el.children,n=r.length,i=this.lastToIndex,o=b(t);if(i!==o&&(!e||!0===e)){var s=o<i?r[i+1]:r[i];this.el.insertBefore(t,s)}Array.isArray(e)&&(e=y(e,o,i));for(var a=0;a<n;a++)r[a].style.transform="";t.style.transition="",t.classList.remove(g),this.selectedItemEl=void 0,this.state=0}return e}},{key:"itemIndexForTop",value:function(e){var t=this.cachedHeights,r=0;for(r=0;r<t.length&&!(t[r]>e);r++);return r}},{key:"reorderMove",value:function(e,t){for(var r=this.selectedItemHeight,n=this.el.children,i=0;i<n.length;i++){var o=n[i].style,s="";i>e&&i<=t?s="translateY(".concat(-r,"px)"):i<e&&i>=t&&(s="translateY(".concat(r,"px)")),o.transform=s}}},{key:"autoscroll",value:function(e){if(!this.scrollEl)return 0;var t=0;return e<this.scrollElTop?t=-m:e>this.scrollElBottom&&(t=m),0!==t&&this.scrollEl.scrollBy(0,t),this.scrollEl.scrollTop-this.scrollElInitial}},{key:"render",value:function(){var e,t=Object(h.b)(this);return Object(c.j)(c.b,{class:(e={},Object(n.a)(e,t,!0),Object(n.a)(e,"reorder-enabled",!this.disabled),Object(n.a)(e,"reorder-list-active",0!==this.state),e)})}},{key:"el",get:function(){return Object(c.g)(this)}}],[{key:"watchers",get:function(){return{disabled:["disabledChanged"]}}}]),e}(),b=function(e){return e.$ionIndex},v=function(e,t){for(var r;e;){if((r=e.parentElement)===t)return e;e=r}},p=60,m=10,g="reorder-selected",y=function(e,t,r){var n=e[t];return e.splice(t,1),e.splice(r,0,n),e.slice()};f.style=".reorder-list-active>*{-webkit-transition:-webkit-transform 300ms;transition:-webkit-transform 300ms;transition:transform 300ms;transition:transform 300ms, -webkit-transform 300ms;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none !important;transition:none !important;-webkit-box-shadow:0 0 10px rgba(0, 0, 0, 0.4);box-shadow:0 0 10px rgba(0, 0, 0, 0.4);opacity:0.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}"},204:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return s})),r.d(t,"d",(function(){return n}));var n=function(){var e=window.TapticEngine;e&&e.selection()},i=function(){var e=window.TapticEngine;e&&e.gestureSelectionStart()},o=function(){var e=window.TapticEngine;e&&e.gestureSelectionChanged()},s=function(){var e=window.TapticEngine;e&&e.gestureSelectionEnd()}}}]);
//# sourceMappingURL=stencil-ion-reorder_2-md-entry-js.26852699.chunk.js.map