(window.webpackJsonp=window.webpackJsonp||[]).push([[17,6,7],{454:function(t,e,r){var content=r(457);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("1930a9a0",content,!0,{sourceMap:!1})},456:function(t,e,r){"use strict";r(454)},457:function(t,e,r){var n=r(17)(!1);n.push([t.i,".logo-image{width:140px;height:44px;cursor:pointer}",""]),t.exports=n},458:function(t,e,r){"use strict";r.r(e);var n={methods:{toIndex:function(){this.$router.push("/")}}},o=(r(456),r(60)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{staticClass:"logo-image",attrs:{alt:"logo",src:"/image/logo.png"},on:{click:function(e){return t.toIndex()}}})}),[],!1,null,null,null);e.default=component.exports},459:function(t,e,r){"use strict";r.r(e);var n=r(24),o=(r(85),{methods:{logout:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$auth.logout();case 3:window.location.href="/login",e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()}}}),c=r(60),l=r(75),v=r.n(l),d=r(212),_=r(194),f=r(195),h=r(128),m=r(84),x=r(514),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-right"},[r("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[t.$auth.loggedIn?r("v-btn",t._g(t._b({staticClass:"black--text",attrs:{color:"white",dark:""}},"v-btn",o,!1),n),[t._v("\n          "+t._s(t.$auth.user.name)+"\n          "),r("v-icon",[t._v("mdi-chevron-down")])],1):t._e(),t._v(" "),t.$auth.loggedIn?t._e():r("v-btn",t._g(t._b({staticClass:"black--text",attrs:{color:"white",dark:""}},"v-btn",o,!1),n),[t._v("\n          メニュー\n          "),r("v-icon",[t._v("mdi-chevron-down")])],1)]}}])},[t._v(" "),t.$auth.loggedIn?r("v-list",[r("v-list-item",{attrs:{link:"",to:"/"}},[r("v-list-item-title",[t._v("ホーム")])],1),t._v(" "),r("v-list-item",{attrs:{link:"",to:"/mypage"}},[r("v-list-item-title",[t._v("マイページ")])],1),t._v(" "),r("v-list-item",{on:{click:function(e){return t.logout()}}},[r("v-list-item-title",[t._v("ログアウト")])],1)],1):t._e(),t._v(" "),t.$auth.loggedIn?t._e():r("v-list",[r("v-list-item",{attrs:{link:"",to:"/"}},[r("v-list-item-title",[t._v("ホーム")])],1),t._v(" "),r("v-list-item",{attrs:{link:"",to:"/register"}},[r("v-list-item-title",[t._v("会員登録")])],1),t._v(" "),r("v-list-item",{attrs:{link:"",to:"/login"}},[r("v-list-item-title",[t._v("ログイン")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:d.a,VIcon:_.a,VList:f.a,VListItem:h.a,VListItemTitle:m.b,VMenu:x.a})},573:function(t,e,r){"use strict";r.r(e);var n=r(24),o=(r(213),r(172),r(85),{middleware:"auth",data:function(){return{favorites:[],reservations:[],cancelOverlay:!1,index:"",reservation_id:"",favoriteMessage:"",reservationMessage:""}},methods:{getReservations:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/api/v1/users/".concat(t.$auth.user.id,"/reservations")).then((function(e){t.reservations=e.data.reservations,0==t.reservations.length&&(t.reservationMessage="予約はありません。"),console.log(t.reservations)})).catch((function(t){console.log(t.response)}));case 2:case"end":return e.stop()}}),e)})))()},getFavorites:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/api/v1/users/".concat(t.$auth.user.id,"/favorites")).then((function(e){t.favorites=e.data.favorites,0==t.favorites.length&&(t.favoriteMessage="お気に入り店舗はありません。")})).catch((function(t){console.log(t.response)}));case 2:case"end":return e.stop()}}),e)})))()},like:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var body;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return body={shop_id:t.id,user_id:e.$auth.user.id},r.next=3,e.$axios.post("/api/v1/favorites/",body).then((function(t){console.log(t),e.favorites.push(t.data.favorites)})).catch((function(t){console.log(t.response)}));case 3:case"end":return r.stop()}}),r)})))()},unlike:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$axios.delete("/api/v1/favorites/"+t).then((function(r){var n=e.favorites.findIndex((function(e){return e.id===t}));e.favorites.splice(n,1)})).catch((function(t){console.log(t.response)}));case 2:case"end":return r.stop()}}),r)})))()},openCancelOverlay:function(t,e){this.cancelOverlay=!0,this.index=t+1,this.reservation_id=e},closeCancelOverlay:function(){this.cancelOverlay=!1},cancelReservation:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$axios.delete("/api/v1/reservations/"+t).then((function(r){e.cancelOverlay=!1;var n=e.reservations.findIndex((function(e){return e.id===t}));e.reservations.splice(n,1)})).catch((function(t){console.log(t.response)}));case 2:case"end":return r.stop()}}),r)})))()}},created:function(){this.getReservations(),this.getFavorites()}}),c=r(60),l=r(75),v=r.n(l),d=r(212),_=r(466),f=r(453),h=r(562),m=r(439),x=r(194),w=r(167),C=r(197),k=r(563),y=r(477),$=r(449),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"align-center d-flex justify-space-between mt-4 mb-5"},[r("Logo"),t._v(" "),r("LoginMenu")],1),t._v(" "),r("h2",{staticClass:"mt-5 pt-5"},[t._v(t._s(t.$auth.user.name)+"さん")]),t._v(" "),r("v-row",{staticClass:"mb-5"},[r("v-overlay",{attrs:{value:t.cancelOverlay}},[r("v-card",{staticClass:"pb-3 pt-5 pr-5 pl-5",attrs:{light:""}},[r("div",{},[t._v("\n          予約"+t._s(t.index)+"を取り消します。よろしいですか？\n        ")]),t._v(" "),r("div",{staticClass:"text-center pb-3 mt-5"},[r("v-btn",{attrs:{color:"blue accent-4 white--text pl-5 pr-5 mr-2"},on:{click:function(e){return t.cancelReservation(t.reservation_id)}}},[t._v("取り消しする")]),t._v(" "),r("v-btn",{attrs:{color:"black white--text"},on:{click:function(e){return t.closeCancelOverlay()}}},[t._v("キャンセル")])],1)])],1),t._v(" "),r("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"5"}},[r("h3",{staticClass:"mt-5 mb-3"},[t._v("予約状況")]),t._v(" "),r("p",[t._v(t._s(t.reservationMessage))]),t._v(" "),r("v-row",t._l(t.reservations,(function(e,n){return r("v-col",{key:e.id,attrs:{cols:"12"}},[r("v-card",{staticClass:"reservation-card"},[r("v-card-title",{staticClass:"pb-2 pt-2"},[r("v-icon",{staticClass:"mr-2",attrs:{color:"black"}},[t._v("mdi-clock")]),t._v("予約"),r("span",{staticClass:"ml-1"},[t._v(t._s(n+1))])],1),t._v(" "),r("v-divider"),t._v(" "),r("v-simple-table",{staticClass:"table reservation-table"},[r("tbody",[r("tr",[r("th",{staticClass:"text-left bg-gray border-top"},[t._v("店名")]),t._v(" "),r("td",{staticClass:"border-top bg-white"},[t._v(t._s(e.shops.name))])]),t._v(" "),r("tr",[r("th",{staticClass:"text-left bg-gray"},[t._v("予約日")]),t._v(" "),r("td",{staticClass:"bg-white"},[t._v(t._s(t.$dateFns.format(new Date(e.date.substr(0,10)),"Y年M月d日")))])]),t._v(" "),r("tr",[r("th",{staticClass:"text-left bg-gray"},[t._v("時間")]),t._v(" "),r("td",{staticClass:"bg-white"},[t._v(t._s(t.$dateFns.format(new Date(e.date),"H:mm")))])]),t._v(" "),r("tr",[r("th",{staticClass:"text-left bg-gray"},[t._v("人数")]),t._v(" "),r("td",{staticClass:"bg-white"},[t._v(t._s(e.number)+"人")])])])]),t._v(" "),r("div",{staticClass:"text-center pb-3 pt-3"},[r("v-btn",{staticClass:"mr-2",attrs:{small:"",color:"blue accent-4 white--text",to:"/edit?id="+e.id}},[t._v("予約変更")]),t._v(" "),r("v-btn",{attrs:{small:"",color:"blue accent-4 white--text"},on:{click:function(r){return t.openCancelOverlay(n,e.id)}}},[t._v("予約を取り消す")])],1)],1)],1)})),1)],1),t._v(" "),r("v-spacer"),t._v(" "),r("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"6"}},[r("h3",{staticClass:"mt-5 mb-3"},[t._v("お気に入り店舗")]),t._v(" "),r("p",[t._v(t._s(t.favoriteMessage))]),t._v(" "),r("v-row",t._l(t.favorites,(function(e){return r("v-col",{key:e.id,attrs:{cols:"12",xs:"12",sm:"6",md:"6"}},[r("v-card",{staticClass:"shop-card"},[r("v-img",{attrs:{src:""+e.shops.image_url,height:"150"}}),t._v(" "),r("v-card-title",{staticClass:"text-h6 mt-2 shop-title"},[t._v("\n              "+t._s(e.shops.name)+"\n            ")]),t._v(" "),r("v-card-text",{staticClass:"mr-2 black--text shop-text"},[r("span",[t._v("#"+t._s(e.shops.area.name))]),t._v(" "),r("span",[t._v("#"+t._s(e.shops.genre.name))])]),t._v(" "),r("div",{staticClass:"d-flex align-center justify-space-between ml-3 mr-3 pb-2"},[r("v-btn",{staticClass:" blue accent-4 white--text",attrs:{small:"",to:"/detail?id="+e.shops.id}},[t._v("詳しくみる")]),t._v(" "),e.user_id==t.$auth.user.id?r("v-icon",{attrs:{large:"",color:"red"},on:{click:function(r){return t.unlike(e.id)}}},[t._v("mdi-cards-heart")]):r("v-icon",{attrs:{large:"",color:"grey lighten-2"},on:{click:function(r){return t.like(e.shops)}}},[t._v("mdi-cards-heart")])],1)],1)],1)})),1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{Logo:r(458).default,LoginMenu:r(459).default}),v()(component,{VBtn:d.a,VCard:_.a,VCardText:f.a,VCardTitle:f.b,VCol:h.a,VDivider:m.a,VIcon:x.a,VImg:w.a,VOverlay:C.a,VRow:k.a,VSimpleTable:y.a,VSpacer:$.a})}}]);