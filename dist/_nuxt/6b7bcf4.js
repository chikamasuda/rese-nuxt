(window.webpackJsonp=window.webpackJsonp||[]).push([[18,6,7],{454:function(t,e,r){var content=r(457);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("c2fd3238",content,!0,{sourceMap:!1})},456:function(t,e,r){"use strict";r(454)},457:function(t,e,r){var n=r(21)(!1);n.push([t.i,".logo-image{width:140px;height:44px;cursor:pointer}",""]),t.exports=n},458:function(t,e,r){"use strict";r.r(e);var n={methods:{toIndex:function(){this.$router.push("/")}}},o=(r(456),r(61)),component=Object(o.a)(n,(function(){var t=this;return(0,t._self._c)("img",{staticClass:"logo-image",attrs:{alt:"logo",src:"/image/logo.png"},on:{click:function(e){return t.toIndex()}}})}),[],!1,null,null,null);e.default=component.exports},459:function(t,e,r){"use strict";r.r(e);var n=r(210),o=r(197),l=r(195),c=r(127),d=r(57),f=r(535),h=(r(29),r(13)),v=(r(58),{methods:{logout:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$auth.logout;case 3:window.location.href="/login",e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()}}}),m=r(61),component=Object(m.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-right"},[e(f.a,{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(r){var l=r.on,c=r.attrs;return[t.$auth.loggedIn?e(n.a,t._g(t._b({staticClass:"black--text",attrs:{color:"white",dark:""}},"v-btn",c,!1),l),[t._v("\n          "+t._s(t.$auth.user.name)+"\n          "),e(o.a,[t._v("mdi-chevron-down")])],1):t._e(),t._v(" "),t.$auth.loggedIn?t._e():e(n.a,t._g(t._b({staticClass:"black--text",attrs:{color:"white",dark:""}},"v-btn",c,!1),l),[t._v("\n          メニュー\n          "),e(o.a,[t._v("mdi-chevron-down")])],1)]}}])},[t._v(" "),t.$auth.loggedIn?e(l.a,[e(c.a,{attrs:{link:"",to:"/"}},[e(d.b,[t._v("ホーム")])],1),t._v(" "),e(c.a,{attrs:{link:"",to:"/mypage"}},[e(d.b,[t._v("マイページ")])],1),t._v(" "),e(c.a,{on:{click:function(e){return t.logout()}}},[e(d.b,[t._v("ログアウト")])],1)],1):t._e(),t._v(" "),t.$auth.loggedIn?t._e():e(l.a,[e(c.a,{attrs:{link:"",to:"/"}},[e(d.b,[t._v("ホーム")])],1),t._v(" "),e(c.a,{attrs:{link:"",to:"/register"}},[e(d.b,[t._v("会員登録")])],1),t._v(" "),e(c.a,{attrs:{link:"",to:"/login"}},[e(d.b,[t._v("ログイン")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},480:function(t,e,r){"use strict";var n=r(2),o=(r(52),r(69),r(211),r(12),r(4),r(11),r(66),r(170),r(10),r(8),r(16),r(17),r(14)),l=r(93),c=r(137);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},588:function(t,e,r){"use strict";r.r(e);var n=r(210),o=r(461),l=r(453),c=r(478),d=r(480),f=r(481),h=r(13),v=(r(58),{layout:"header",data:function(){return{form:{email:"",password:""},emailError:[],passwordError:[],error:""}},methods:{login:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$auth.loginWith("local",{data:t.form}).then((function(t){console.log(t),window.location.href="/"})).catch((function(e){console.log(e),"401"==e.response.status&&(t.error=e.response.data.message),t.emailError=e.response.data.data.errors.email,t.passwordError=e.response.data.data.errors.password}));case 1:case"end":return e.stop()}}),e)})))()}}}),m=r(61),component=Object(m.a)(v,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"align-center d-flex justify-space-between mt-4"},[e("Logo"),t._v(" "),e("LoginMenu")],1),t._v(" "),e(o.a,{staticClass:"mx-auto auth-card pb-2 bg-blue"},[e(l.b,{staticClass:"blue accent-4 white--text"},[t._v("Login")]),t._v(" "),e(c.a),t._v(" "),e(l.a,[e(d.a,{attrs:{method:"POST"},on:{submit:function(e){return e.preventDefault(),t.login.apply(null,arguments)}}},[e(f.a,{attrs:{type:"email",dense:"",required:"","prepend-icon":"mdi-email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),t._v(" "),t._l(t.emailError,(function(r){return e("ul",{key:r.id,staticClass:"red--text ml-2"},[e("li",[t._v(t._s(r))])])})),t._v(" "),e(f.a,{staticClass:"mt-3",attrs:{type:"password",dense:"",required:"","prepend-icon":"mdi-lock"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),t._v(" "),t._l(t.passwordError,(function(r){return e("ul",{key:r.id,staticClass:"red--text ml-2"},[e("li",[t._v(t._s(r))])])})),t._v(" "),e("p",{staticClass:"red--text ml-5 pl-3"},[t._v(t._s(t.error))]),t._v(" "),e("div",{staticClass:"text-right mt-5 align-center"},[e("NuxtLink",{staticClass:"mr-5",attrs:{to:"/register"}},[t._v("会員登録はこちら")]),t._v(" "),e(n.a,{staticClass:"blue accent-4 white--text",attrs:{type:"submit"}},[t._v("ログイン")])],1)],2)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Logo:r(458).default,LoginMenu:r(459).default})}}]);