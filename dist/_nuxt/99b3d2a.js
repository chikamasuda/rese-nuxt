(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{533:function(e,t,n){var content=n(573);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(22).default)("6767ed6b",content,!0,{sourceMap:!1})},572:function(e,t,n){"use strict";n(533)},573:function(e,t,n){var r=n(21)(!1);r.push([e.i,".v-card[data-v-ebe85964]{width:80%;margin:30px auto}@media screen and (max-width:768px){.v-card[data-v-ebe85964]{width:100%}}",""]),e.exports=r},602:function(e,t,n){"use strict";n.r(t);var r=n(536),o=n(209),c=n(461),l=n(452),d=n(579),m=n(580),v=n(478),f=n(530),w=(n(29),n(8),n(53),n(13)),_=(n(58),{layout:"ownerMenuBar",middleware:"ownerAuth",data:function(){return{areas:["東京都","大阪府","福岡県"],genres:["寿司","焼肉","居酒屋","イタリアン","ラーメン"],owner:[],alert:!1,name:"",area:"",genre:"",image:[],description:"",shops:[]}},methods:{getOwnerInformation:function(){var e=this;return Object(w.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("/api/v1/owners").then((function(t){e.owner=t.data.owner})).catch((function(e){console.log(e.response)}));case 2:case"end":return t.stop()}}),t)})))()},createShop:function(){var e=this;return Object(w.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new FormData).append("name",e.name),n.append("area",e.area),n.append("description",e.description),n.append("genre",e.genre),n.append("owner_id",e.owner.id),n.append("image",e.image),console.log(n),r={header:{"Content-Type":"multipart/form-data"}},t.next=11,e.$axios.post("/api/v1/shops",n,r).then((function(t){e.name="",e.area="",e.description="",e.genre="",e.owner_id="",e.image="",e.alert=!0})).catch((function(e){console.log(e.response)}));case 11:case"end":return t.stop()}}),t)})))()}},created:function(){if(this.getOwnerInformation(),this.$store.state.ownerAuth.owner_user){var e=this.$cookies.get("owner_token");this.$axios.defaults.headers.common.Authorization="Bearer ".concat(e)}}}),h=(n(572),n(61)),component=Object(h.a)(_,(function(){var e=this,t=e._self._c;return t("div",[t(c.a,[t(l.b,{staticClass:"align-center"},[e._v("\n      店舗情報作成\n    ")]),e._v(" "),e.alert?t(r.a,{attrs:{type:"success",color:"green",dismissible:""},model:{value:e.alert,callback:function(t){e.alert=t},expression:"alert"}},[e._v("店舗情報を作成しました。")]):e._e(),e._v(" "),t(l.a,[t("label",{attrs:{for:""}},[e._v("店舗名")]),e._v(" "),t(v.a,{staticClass:"mb-3",attrs:{outlined:"",dense:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),t("label",{attrs:{for:""}},[e._v("エリア")]),e._v(" "),t(m.a,{staticClass:"mb-3",attrs:{outlined:"",dense:"",items:e.areas},model:{value:e.area,callback:function(t){e.area=t},expression:"area"}}),e._v(" "),t("label",{attrs:{for:""}},[e._v("ジャンル")]),e._v(" "),t(m.a,{staticClass:"mb-3",attrs:{outlined:"",dense:"",items:e.genres},model:{value:e.genre,callback:function(t){e.genre=t},expression:"genre"}}),e._v(" "),t("label",{attrs:{for:""}},[e._v("店舗画像")]),t("br"),e._v(" "),t(d.a,{staticClass:"mb-3",attrs:{outlined:"",dense:""},model:{value:e.image,callback:function(t){e.image=t},expression:"image"}}),e._v(" "),t("label",{attrs:{for:""}},[e._v("店舗説明文")]),e._v(" "),t(f.a,{attrs:{outlined:""},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}}),e._v(" "),t("div",{staticClass:"text-center mt-3"},[t(o.a,{staticClass:"black white--text mr-2",attrs:{type:"submit",to:"/owner/shop"}},[e._v("戻る")]),e._v(" "),t(o.a,{staticClass:"primary",attrs:{type:"submit"},on:{click:function(t){return e.createShop()}}},[e._v("店舗情報を作成")])],1)],1)],1)],1)}),[],!1,null,"ebe85964",null);t.default=component.exports}}]);