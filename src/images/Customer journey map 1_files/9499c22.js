(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{1011:function(t,e,r){},1031:function(t,e,r){"use strict";var n=r(993).a,o=(r(1063),r(9)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"workspace-subheader"},[r("div",{staticClass:"workspace-subheader__title"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),t.description||t.hasSlotData?r("div",{staticClass:"workspace-subheader__wrap"},[r("div",{directives:[{name:"uhtml",rawName:"v-uhtml",value:t.description,expression:"description"}],staticClass:"workspace-subheader__description"}),t._v(" "),r("div",{staticClass:"workspace-subheader__slot"},[t._t("default")],2)]):t._e()])}),[],!1,null,"00aceca4",null);e.a=component.exports},1063:function(t,e,r){"use strict";r(1011)},1100:function(t,e,r){},1375:function(t,e,r){"use strict";r(10);var n=r(3),o=(r(1100),r(110)),c=r(14);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}const d=Object(c.a)(o.a);e.a=d.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},o.a.options.computed.classes.call(this))},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(t){this.$nextTick((()=>{var e;t?this.calculateInputHeight():null==(e=this.$refs.input)||e.style.removeProperty("height")}))},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout((()=>{this.autoGrow&&this.calculateInputHeight()}),0)},methods:{calculateInputHeight(){const input=this.$refs.input;if(!input)return;input.style.height="0";const t=input.scrollHeight,e=parseInt(this.rows,10)*parseFloat(this.rowHeight);input.style.height=Math.max(e,t)+"px"},genInput(){const input=o.a.options.methods.genInput.call(this);return input.tag="textarea",delete input.data.attrs.type,input.data.attrs.rows=this.rows,input},onInput(t){o.a.options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},1954:function(t,e,r){"use strict";(function(t){r(10);var n=r(3),o=r(11),c=r(1031);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a={name:"WorkspaceInvoicesPage",components:{WorkspaceSubheader:c.a},transition:"page-static",data:()=>({billTo:"",isShowing:!1,isSaving:!1,emails:[],multipleEmailField:{dirty:!1,valid:!1}}),async fetch(e){let{store:r,params:n,error:o}=e;const{workspaceId:c}=n;try{await r.dispatch("invoices/fetchInvoices",c),await r.dispatch("workspaces/fetchWorkspace",{workspaceId:c}),await r.dispatch("subscriptions/fetchSubscriptions",{workspaceId:c})}catch(e){o({statusCode:t.get(e,"response.status"),message:t.get(e,"response.data.message")})}},computed:d(d(d(d(d({},Object(o.e)("invoices",["invoices"])),Object(o.c)("workspaces",["currentWorkspace","isSuperAdmin","isBillingManager","currentWorkspaceName"])),Object(o.c)("subscriptions",["currentSubscription"])),Object(o.e)("auth",["user"])),{},{sortedInvoices(){return this.invoices&&t.orderBy(this.invoices,"invoiceDetails.date")}}),created(){this.isSuperAdmin||this.isBillingManager?(this.billTo=this.currentWorkspace.billTo||"",this.emails=this.currentSubscription.invoiceEmails||[],this.isShowing=!0):this.$nuxt.error({statusCode:403,message:"You do not have permission to access this page"})},methods:d(d(d({},Object(o.b)("workspaces",["updateWorkspace","updateBillTo"])),Object(o.b)("subscriptions",["updateInvoiceEmails"])),{},{async _updateBillTo(){this.isSaving=!0;try{await this.updateBillTo({workspaceId:this.currentWorkspace.id,billTo:this.billTo}),await this.updateInvoiceEmails({subscriptionId:this.currentSubscription.id,emails:this.emails}),this.setSuccess({text:"The billing information has been updated"}),this.isSaving=!1}catch(t){this.setError({error:t}),this.isSaving=!1}},getInvoiceDetailsDate(t){return this.$date(new Date(1e3*t.invoiceDetails.date),"MMM dd, yyyy")}})}}).call(this,r(12))},2344:function(t,e,r){},3210:function(t,e,r){"use strict";r(2344)},3538:function(t,e,r){"use strict";r.r(e);var n=r(1954).a,o=(r(3210),r(9)),c=r(20),l=r.n(c),d=r(1375),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.isShowing?r("div",{staticClass:"ws-invoices"},[r("workspace-subheader",{attrs:{title:"Bill to Information",description:"This text will show up at invoices you receive from UXPressia.\n    <a href='/examples/invoice-example.pdf' target='_blank'>Download Invoice example</a>"}}),t._v(" "),r("v-textarea",{staticClass:"ws-invoices__input",attrs:{rows:"3",label:"Bill to","single-line":!0,disabled:!t.$can("updateBillTo",t.currentWorkspace)},model:{value:t.billTo,callback:function(e){t.billTo=e},expression:"billTo"}}),t._v(" "),r("workspace-subheader",{attrs:{title:"Send invoice emails to",description:"These people will receive invoice emails"}}),t._v(" "),r("u-multiple-email-field",{attrs:{"combobox-class":"ws-invoices__input","chip-class":"ws-invoices__input-item",placeholder:"Enter email addresses","persistent-hint":!0,autocomplete:!1,"external-validate":function(){return[]},"external-default-name":t.currentWorkspaceName},on:{dirty:function(e){t.multipleEmailField.dirty=e},valid:function(e){t.multipleEmailField.valid=e}},model:{value:t.emails,callback:function(e){t.emails=e},expression:"emails"}}),t._v(" "),r("u-button",{staticClass:"mb-8",attrs:{disabled:!t.$can("updateBillTo",t.currentWorkspace),submitting:t.isSaving},nativeOn:{click:function(e){return e.stopPropagation(),t._updateBillTo.apply(null,arguments)}}},[t._v("\n    SAVE CHANGES\n  ")]),t._v(" "),r("workspace-subheader",{attrs:{title:"History"}}),t._v(" "),r("table",{staticClass:"ui-table"},[t._m(0),t._v(" "),r("tbody",t._l(t.sortedInvoices,(function(e){return r("tr",{key:e.id},[r("td",{staticClass:"text-left",attrs:{"data-label":"Id"}},[t._v("\n          "+t._s(e.id)+"\n        ")]),t._v(" "),r("td",{staticClass:"text-left",attrs:{"data-label":"Date"}},[t._v("\n          "+t._s(t.getInvoiceDetailsDate(e))+"\n        ")]),t._v(" "),r("td",{staticClass:"text-left",attrs:{"data-label":"Amount"}},[t._v("\n          $"+t._s(e.invoiceDetails.amount_due/100)+"\n        ")]),t._v(" "),r("td",{staticClass:"text-left",attrs:{"data-label":"Actions"}},[t.$can("read",e)?r("div",{staticClass:"ws-actions"},[t._v("\n            View invoice: "),r("a",{attrs:{href:"/invoices/"+e.id,target:"_blank"}},[t._v("HTML")]),t._v(" | "),r("a",{attrs:{href:"/export/invoices/"+e.id+".pdf",target:"_blank"}},[t._v("PDF")])]):t._e()])])})),0)])],1):t._e()}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",{staticClass:"text-left"},[t._v("\n          Id\n        ")]),t._v(" "),r("th",{staticClass:"text-left"},[t._v("\n          Date\n        ")]),t._v(" "),r("th",{staticClass:"text-left"},[t._v("\n          Amount\n        ")]),t._v(" "),r("th",{staticClass:"text-left"},[t._v("\n          Actions\n        ")])])])}],!1,null,null,null);e.default=component.exports;l()(component,{VTextarea:d.a})},993:function(t,e,r){"use strict";(function(t){e.a={name:"WorkspaceSubheader",components:{},props:{title:{type:String,required:!0},description:{type:String,default:""}},data:()=>({}),computed:{hasSlotData(){return t.has(this.$slots,"default")}}}}).call(this,r(12))}}]);