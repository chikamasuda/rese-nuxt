(window.webpackJsonp=window.webpackJsonp||[]).push([[21,6,7],{454:function(t,e,r){var content=r(457);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("1930a9a0",content,!0,{sourceMap:!1})},456:function(t,e,r){"use strict";r(454)},457:function(t,e,r){var n=r(17)(!1);n.push([t.i,".logo-image{width:140px;height:44px;cursor:pointer}",""]),t.exports=n},458:function(t,e,r){"use strict";r.r(e);var n={methods:{toIndex:function(){this.$router.push("/")}}},o=(r(456),r(60)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{staticClass:"logo-image",attrs:{alt:"logo",src:"/image/logo.png"},on:{click:function(e){return t.toIndex()}}})}),[],!1,null,null,null);e.default=component.exports},459:function(t,e,r){"use strict";r.r(e);var n=r(24),o=(r(85),{methods:{logout:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$auth.logout();case 3:t.$router.push("/login"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()}}}),l=r(60),c=r(75),d=r.n(c),v=r(212),f=r(194),m=r(195),h=r(128),_=r(84),w=r(514),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-right"},[r("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[t.$auth.loggedIn?r("v-btn",t._g(t._b({staticClass:"black--text",attrs:{color:"white",dark:""}},"v-btn",o,!1),n),[t._v("\n          "+t._s(t.$auth.user.name)+"\n          "),r("v-icon",[t._v("mdi-chevron-down")])],1):t._e(),t._v(" "),t.$auth.loggedIn?t._e():r("v-btn",t._g(t._b({staticClass:"black--text",attrs:{color:"white",dark:""}},"v-btn",o,!1),n),[t._v("\n          メニュー\n          "),r("v-icon",[t._v("mdi-chevron-down")])],1)]}}])},[t._v(" "),t.$auth.loggedIn?r("v-list",[r("v-list-item",{attrs:{link:"",to:"/"}},[r("v-list-item-title",[t._v("ホーム")])],1),t._v(" "),r("v-list-item",{attrs:{link:"",to:"/mypage"}},[r("v-list-item-title",[t._v("マイページ")])],1),t._v(" "),r("v-list-item",{on:{click:function(e){return t.logout()}}},[r("v-list-item-title",[t._v("ログアウト")])],1)],1):t._e(),t._v(" "),t.$auth.loggedIn?t._e():r("v-list",[r("v-list-item",{attrs:{link:"",to:"/"}},[r("v-list-item-title",[t._v("ホーム")])],1),t._v(" "),r("v-list-item",{attrs:{link:"",to:"/register"}},[r("v-list-item-title",[t._v("会員登録")])],1),t._v(" "),r("v-list-item",{attrs:{link:"",to:"/login"}},[r("v-list-item-title",[t._v("ログイン")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:v.a,VIcon:f.a,VList:m.a,VListItem:h.a,VListItemTitle:_.b,VMenu:w.a})},475:function(t,e,r){"use strict";var n=r(2),o=(r(52),r(66),r(211),r(12),r(4),r(11),r(65),r(171),r(10),r(9),r(15),r(16),r(13)),l=r(94),c=r(138);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:v({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},574:function(t,e,r){"use strict";r.r(e);var n=r(24),o=(r(85),r(30),{data:function(){return{name:"",email:"",password:"",nameError:"",emailError:"",passwordError:""}},methods:{register:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.post("/api/v1/users/registration",{name:t.name,email:t.email,password:t.password}).then((function(e){t.$router.push("/thanks")})).catch((function(e){t.nameError=e.response.data.data.errors.name,t.emailError=e.response.data.data.errors.email,t.passwordError=e.response.data.data.errors.password,console.log(e)}));case 2:case"end":return e.stop()}}),e)})))()}}}),l=r(60),c=r(75),d=r.n(c),v=r(212),f=r(466),m=r(453),h=r(439),_=r(475),w=r(515),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"align-center d-flex justify-space-between mt-4"},[r("Logo"),t._v(" "),r("LoginMenu")],1),t._v(" "),r("v-card",{staticClass:"mx-auto auth-card pb-2 bg-blue"},[r("v-card-title",{staticClass:"blue accent-4 white--text"},[t._v("Register")]),t._v(" "),r("v-divider"),t._v(" "),r("v-card-text",[r("v-form",{attrs:{method:"POST"},on:{submit:function(e){return e.preventDefault(),t.register.apply(null,arguments)}}},[r("v-text-field",{attrs:{type:"text",dense:"",required:"","prepend-icon":"mdi-account",placeholder:"Username"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),t._l(t.nameError,(function(e){return r("ul",{key:e.id,staticClass:"red--text ml-2"},[r("li",[t._v(t._s(e))])])})),t._v(" "),r("v-text-field",{staticClass:"mt-3",attrs:{type:"email",dense:"",required:"","prepend-icon":"mdi-email",placeholder:"Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),t._l(t.emailError,(function(e){return r("ul",{key:e.id,staticClass:"red--text ml-2"},[r("li",[t._v(t._s(e))])])})),t._v(" "),r("v-text-field",{staticClass:"mt-3",attrs:{type:"password",dense:"",required:"","prepend-icon":"mdi-lock",placeholder:"Password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),t._l(t.passwordError,(function(e){return r("ul",{key:e.id,staticClass:"red--text ml-2"},[r("li",[t._v(t._s(e))])])})),t._v(" "),r("span",{staticClass:"red--text"},[t._v(t._s(t.error))]),t._v(" "),r("div",{staticClass:"text-right mt-5 align-center"},[r("NuxtLink",{staticClass:"mr-5 login-link",attrs:{to:"/login"}},[t._v("ログインはこちら")]),t._v(" "),r("v-btn",{staticClass:"blue accent-4 white--text",attrs:{type:"submit"}},[t._v("会員登録")])],1)],2)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{Logo:r(458).default,LoginMenu:r(459).default}),d()(component,{VBtn:v.a,VCard:f.a,VCardText:m.a,VCardTitle:m.b,VDivider:h.a,VForm:_.a,VTextField:w.a})}}]);