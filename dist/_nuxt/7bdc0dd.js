(window.webpackJsonp=window.webpackJsonp||[]).push([[23,6,7],{454:function(t,e,n){var content=n(457);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("c2fd3238",content,!0,{sourceMap:!1})},456:function(t,e,n){"use strict";n(454)},457:function(t,e,n){var o=n(21)(!1);o.push([t.i,".logo-image{width:140px;height:44px;cursor:pointer}",""]),t.exports=o},458:function(t,e,n){"use strict";n.r(e);var o={methods:{toIndex:function(){this.$router.push("/")}}},r=(n(456),n(61)),component=Object(r.a)(o,(function(){var t=this;return(0,t._self._c)("img",{staticClass:"logo-image",attrs:{alt:"logo",src:"/image/logo.png"},on:{click:function(e){return t.toIndex()}}})}),[],!1,null,null,null);e.default=component.exports},459:function(t,e,n){"use strict";n.r(e);var o=n(210),r=n(197),l=n(195),c=n(127),v=n(57),_=n(524),d=(n(29),n(9)),f=(n(58),{methods:{logout:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$auth.logout("user");case 3:window.location.href="/login",e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()}}}),h=n(61),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-right"},[e(_.a,{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(n){var l=n.on,c=n.attrs;return[t.$auth.loggedIn?e(o.a,t._g(t._b({staticClass:"black--text",attrs:{color:"white",dark:""}},"v-btn",c,!1),l),[t._v("\n          "+t._s(t.$auth.user.name)+"\n          "),e(r.a,[t._v("mdi-chevron-down")])],1):t._e(),t._v(" "),t.$auth.loggedIn?t._e():e(o.a,t._g(t._b({staticClass:"black--text",attrs:{color:"white",dark:""}},"v-btn",c,!1),l),[t._v("\n          メニュー\n          "),e(r.a,[t._v("mdi-chevron-down")])],1)]}}])},[t._v(" "),t.$auth.loggedIn?e(l.a,[e(c.a,{attrs:{link:"",to:"/"}},[e(v.b,[t._v("ホーム")])],1),t._v(" "),e(c.a,{attrs:{link:"",to:"/mypage"}},[e(v.b,[t._v("マイページ")])],1),t._v(" "),e(c.a,{on:{click:function(e){return t.logout()}}},[e(v.b,[t._v("ログアウト")])],1)],1):t._e(),t._v(" "),t.$auth.loggedIn?t._e():e(l.a,[e(c.a,{attrs:{link:"",to:"/"}},[e(v.b,[t._v("ホーム")])],1),t._v(" "),e(c.a,{attrs:{link:"",to:"/register"}},[e(v.b,[t._v("会員登録")])],1),t._v(" "),e(c.a,{attrs:{link:"",to:"/login"}},[e(v.b,[t._v("ログイン")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},582:function(t,e,n){"use strict";n.r(e);var o=n(210),r=n(461),l=n(453),c=n(571),v=n(477),_=n(570),d=n(560),f={data:function(){return{value:"https://moonlit-fudge-322432.netlify.app/reservationDetail?id=".concat(this.$route.query.id),size:300,shop:""}},components:{QrcodeVue:n.n(d).a}},h=n(61),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"align-center d-flex justify-space-between mt-4 mb-5"},[e("Logo"),t._v(" "),e("LoginMenu")],1),t._v(" "),e(_.a,{staticClass:"mb-5 justify-center pt-3"},[e(c.a,{attrs:{cols:"12",xs:"12",sm:"6",md:"4"}},[e(r.a,{staticClass:"text-center"},[e(l.b,{staticClass:"text-center"},[t._v("QRコード")]),t._v(" "),e(v.a),t._v(" "),e(l.a,[e("p",{staticClass:"text-left"},[t._v("QRコードをスキャンして、予約情報の確認ができます。")]),t._v(" "),e("qrcode-vue",{attrs:{value:t.value,size:t.size,level:"H"}})],1),t._v(" "),e(o.a,{staticClass:"white--text mb-4 pr-5 pl-5",attrs:{color:"black",to:"/mypage"}},[t._v("戻る")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Logo:n(458).default,LoginMenu:n(459).default})}}]);