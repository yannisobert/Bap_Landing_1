(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{3479:function(e,t,n){"use strict";n.r(t);n(10);var r=n(3),o=n(11),c=n(393);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var O={transition:"page-static",async asyncData(e){let{app:t}=e;const{data:n}=await t.$axios.get("release-notes");return{notes:n}},head:{title:"What's new"},created(){this.setViewedChangelog(c.version)},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.d)("templateLocalState",["setViewedChangelog"]))},v=n(9),component=Object(v.a)(O,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-content"},[n("div",{staticClass:"l-wrap"},[n("h1",[e._v("What's new")]),e._v(" "),e._l(e.notes,(function(t){return n("article",{key:t._id},[n("h2",[e._v("V. "+e._s(t.version))]),e._v(" "),n("div",{directives:[{name:"uhtml",rawName:"v-uhtml.sanitize",value:t.notes,expression:"note.notes",modifiers:{sanitize:!0}}]})])}))],2)])}),[],!1,null,null,null);t.default=component.exports}}]);