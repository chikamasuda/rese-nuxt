(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{478:function(t,e,n){"use strict";n.r(e);var r=n(209),o=n(475),c=n(197),l=n(195),m=n(127),d=n(57),v=n(535),f=n(448),_=n(64),h=n(472),x=(n(29),n(13)),w=(n(58),{middleware:"adminAuth",data:function(){return{user:""}},methods:{logout:function(){var t=this;return Object(x.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("adminAuth/logout");case 2:window.location.href="/admin/login";case 3:case"end":return e.stop()}}),e)})))()},getAdminInformation:function(){var t=this;return Object(x.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/api/v1/admins").then((function(e){t.user=e.data.admin})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()}},created:function(){this.getAdminInformation()}}),k=n(61),component=Object(k.a)(w,(function(){var t=this,e=t._self._c;return e(_.a,{staticClass:"pr-3",attrs:{color:"white"}},[e(h.a,{staticClass:"title ml-4"},[t._v("Rese管理画面")]),t._v(" "),e(f.a),t._v(" "),e("div",[t._v("メニュー")]),t._v(" "),e(v.a,{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,l=n.attrs;return[e(r.a,t._g(t._b({attrs:{icon:""}},"v-btn",l,!1),o),[e(c.a,{},[t._v("mdi-chevron-down")])],1)]}}])},[t._v(" "),e(l.a,[e(m.a,[e(d.b,[e(c.a,{staticClass:"mr-2"},[t._v("mdi-account")]),t._v(t._s(t.user.name))],1)],1),t._v(" "),e(o.a),t._v(" "),e(m.a,{attrs:{to:"/admin",router:"",exact:""}},[e(d.b,[t._v("メール作成")])],1),t._v(" "),e(m.a,{attrs:{to:"/admin/owner"}},[e(d.b,[t._v("店舗代表者作成")])],1),t._v(" "),e(m.a,{on:{click:function(e){return t.logout()}}},[e(d.b,[t._v("ログアウト")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},599:function(t,e,n){"use strict";n.r(e);var r=n(537),o=n(209),c=n(464),l=n(452),m=n(475),d=n(482),v=n(477),f=n(479),_=n(531),h=(n(29),n(13)),x=(n(58),{layout:"admin",middleware:"adminAuth",data:function(){return{user:"",userLists:[],mailUser:"",content:"",title:"",alert:!1}},methods:{getAdminInformation:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/api/v1/admins").then((function(e){t.user=e.data.admin})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},getUserInformation:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/api/v1/admins/mails/user-list").then((function(e){t.userLists=e.data.users})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},getUserDetailInformation:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("api/v1/admins/mails/user/".concat(t.$route.query.id)).then((function(e){t.mailUser=e.data.user[0],console.log(t.mailUser)})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},createMail:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return data={email:t.mailUser.email,title:t.title,content:t.content},e.next=3,t.$axios.post("/api/v1/admins/mails/send",data).then((function(e){t.title="",t.content="",t.alert=!0})).catch((function(t){console.log(t.response)}));case 3:case"end":return e.stop()}}),e)})))()}},created:function(){this.getAdminInformation(),this.getUserInformation(),this.getUserDetailInformation()}}),w=n(61),component=Object(w.a)(x,(function(){var t=this,e=t._self._c;return e("div",[e("AdminHeader"),t._v(" "),e("div",{staticClass:"admin-card-area"},[e("h2",{staticClass:"admin-title"},[t._v("メール送信")]),t._v(" "),e(c.a,{staticClass:"admin-card"},[e(l.b,[t._v("メール作成")]),t._v(" "),e(m.a),t._v(" "),t.alert?e(r.a,{attrs:{type:"success",color:"green",dismissible:""},model:{value:t.alert,callback:function(e){t.alert=e},expression:"alert"}},[t._v("メールを送信しました。")]):t._e(),t._v(" "),e(v.a,[e(v.a,{staticClass:"table reservation-table"},[e("tbody",[e("tr",[e("th",{staticClass:"text-left bg-gray border-top"},[t._v("ユーザー名")]),t._v(" "),e("td",[t._v(t._s(t.mailUser.name))])]),t._v(" "),e("tr",[e("th",{staticClass:"text-left bg-gray"},[t._v("メールアドレス")]),t._v(" "),e("td",[t._v(t._s(t.mailUser.email))])])])])],1),t._v(" "),e(l.a,[e(d.a,{attrs:{method:"POST"},on:{submit:function(e){return e.preventDefault(),t.createMail()}}},[e("label",{attrs:{for:""}},[t._v("タイトル")]),t._v(" "),e(f.a,{staticClass:"mb-3",attrs:{outlined:"",dense:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),e("label",{attrs:{for:""}},[t._v("メール本文")]),t._v(" "),e(_.a,{attrs:{outlined:""},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),t._v(" "),e("div",{staticClass:"text-center mt-3"},[e(o.a,{staticClass:"black white--text mr-2",attrs:{type:"submit",to:"/admin"}},[t._v("戻る")]),t._v(" "),e(o.a,{staticClass:"primary",attrs:{type:"submit"}},[t._v("メール送信")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AdminHeader:n(478).default})}}]);