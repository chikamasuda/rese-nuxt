(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{582:function(t,n,e){"use strict";e.r(n);var r=e(210),o=e(461),c=e(453),d=e(478),l=e(197),v=e(195),m=e(127),_=e(57),f=e(535),h=e(479),w=e(449),x=e(64),C=e(475),k=(e(29),e(13)),R=(e(58),{layout:"admin",middleware:"adminAuth",data:function(){return{name:"",email:"",password:"",alert:!1,user:"",userLists:[]}},methods:{logout:function(){var t=this;return Object(k.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$store.dispatch("adminAuth/logout");case 2:window.location.href="/admin/login";case 3:case"end":return n.stop()}}),n)})))()},getAdminInformation:function(){var t=this;return Object(k.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$axios.get("/api/v1/admins").then((function(n){t.user=n.data.admin})).catch((function(t){console.log(t)}));case 2:case"end":return n.stop()}}),n)})))()},getUserInformation:function(){var t=this;return Object(k.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$axios.get("/api/v1/admins/mails/user-list").then((function(n){t.userLists=n.data.users})).catch((function(t){console.log(t)}));case 2:case"end":return n.stop()}}),n)})))()}},created:function(){this.getAdminInformation(),this.getUserInformation()}}),y=e(61),component=Object(y.a)(R,(function(){var t=this,n=t._self._c;return n("div",[n(x.a,{staticClass:"pr-3",attrs:{color:"white"}},[n(C.a,{staticClass:"title ml-4"},[t._v("Rese管理画面")]),t._v(" "),n(w.a),t._v(" "),n("div",[t._v("メニュー")]),t._v(" "),n(f.a,{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,c=e.attrs;return[n(r.a,t._g(t._b({attrs:{icon:""}},"v-btn",c,!1),o),[n(l.a,{},[t._v("mdi-chevron-down")])],1)]}}])},[t._v(" "),n(v.a,[n(m.a,[n(_.b,[n(l.a,{staticClass:"mr-2"},[t._v("mdi-account")]),t._v(t._s(t.user.name))],1)],1),t._v(" "),n(d.a),t._v(" "),n(m.a,{attrs:{to:"/admin",router:"",exact:""}},[n(_.b,[t._v("メール作成")])],1),t._v(" "),n(m.a,{attrs:{to:"/admin/owner"}},[n(_.b,[t._v("店舗代表者作成")])],1),t._v(" "),n(m.a,{on:{click:function(n){return t.logout()}}},[n(_.b,[t._v("ログアウト")])],1)],1)],1)],1),t._v(" "),n("div",{staticClass:"admin-card-area"},[n("h2",{staticClass:"admin-title"},[t._v("メール送信")]),t._v(" "),n(o.a,{staticClass:"admin-card"},[n(c.b,[t._v("ユーザー一覧")]),t._v(" "),n(h.a,[n("thead",{},[n("tr",[n("th",{staticClass:"text-left",attrs:{width:"10%"}},[t._v("\n                ID\n              ")]),t._v(" "),n("th",{staticClass:"text-left",attrs:{width:"70%"}},[t._v("\n                名前\n              ")]),t._v(" "),n("th",{staticClass:"text-left",attrs:{width:"20%"}})])]),t._v(" "),n("tbody",t._l(t.userLists,(function(e){return n("tr",{key:e.id,staticClass:"pb-5 link-items"},[n("td",[t._v(t._s(e.id))]),t._v(" "),n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",{staticClass:"text-right"},[n(r.a,{attrs:{small:"",color:"primary",to:"/admin/mail?id="+e.id}},[t._v("メール送信")])],1)])})),0)])],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports}}]);