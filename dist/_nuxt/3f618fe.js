(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{505:function(t,e,n){"use strict";n.r(e);var r=n(21),o=(n(91),{data:function(){return{shopList:""}},methods:{getShopList:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/api/v1/shops").then((function(e){t.shopList=e.data.shops})).catch((function(t){console.log(t.response)}));case 2:case"end":return e.stop()}}),e)})))()}},created:function(){this.getShopList()}}),c=n(75),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("NuxtChild")],1)}),[],!1,null,null,null);e.default=component.exports}}]);