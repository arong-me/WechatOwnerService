(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-location-location"],{"08a9":function(t,e,a){"use strict";a.r(e);var i=a("a9bd"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"160f":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".header[data-v-472e28de]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?60?%;font-size:%?28?%;padding:%?15?% %?20?%;line-height:%?60?%;border-bottom:%?20?% solid #f4f4f4}.header .search-input[data-v-472e28de]{height:%?60?%;-webkit-box-flex:1;-webkit-flex:1;flex:1;padding-left:%?30?%;background:#efeff5;border-radius:%?10?%;color:#6d6d6d}.header .search-btn[data-v-472e28de]{text-align:center;margin-left:%?20?%;width:%?100?%;background:#aaa;border-radius:%?10?%;color:#ebebeb}.getLocation[data-v-472e28de]{font-size:%?30?%;height:%?80?%;line-height:%?80?%;text-align:center;border-bottom:%?20?% solid #f4f4f4}.addLocation[data-v-472e28de]{position:relative;font-size:%?30?%;height:%?80?%;line-height:%?80?%;padding-left:%?15?%}.addLocation-icon[data-v-472e28de]{width:%?30?%;line-height:%?27?%;height:%?30?%;text-align:center;position:absolute;right:%?15?%;top:%?20?%;border-radius:%?30?%;color:#ffd671;border:2px solid #ffd671}.myLocation[data-v-472e28de]{background:#f4f4f4;height:%?100?%;padding-left:%?15?%;line-height:%?130?%;font-size:%?25?%;color:#e3e3e3}.result-container[data-v-472e28de]{position:fixed;top:%?90?%;bottom:0;right:0;left:0;z-index:1000;background:#fff}.search-result-list[data-v-472e28de]{padding:%?15?%;height:100%}.search-result[data-v-472e28de]{line-height:%?50?%;height:%?100?%;font-size:%?28?%;border-bottom:%?1?% solid #ececec}.search-result-desc[data-v-472e28de]{line-height:%?45?%;font-size:%?27?%;color:#aaa}",""]),t.exports=e},4257:function(t,e,a){var i=a("160f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("796f54f5",i,!0,{sourceMap:!1,shadowMode:!1})},"6ed2":function(t,e,a){"use strict";var i,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"header"},[a("v-uni-view",{staticClass:"search-input"},[a("v-uni-input",{attrs:{placeholder:"请输入小区名称"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.input.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"search-btn"},[t._v("搜索")])],1),a("v-uni-view",{staticClass:"result-container",attrs:{hidden:t.hidden}},[a("v-uni-scroll-view",{staticClass:"search-result-list",attrs:{"scroll-y":"true",hidden:t.hidden}},[t._l(t.locationList,(function(e,i){return[a("v-uni-view",{key:i+"_0",staticClass:"search-result",attrs:{"data-key":e.address},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onTap.apply(void 0,arguments)}}},[t._v(t._s(e.name)),a("v-uni-view",{staticClass:"search-result-desc"},[t._v(t._s(e.address))])],1)]}))],2)],1),a("v-uni-view",{staticClass:"getLocation",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getLocation.apply(void 0,arguments)}}},[t._v("点击定位当前位置")]),a("v-uni-view",{staticClass:"addLocation"},[t._v("新增收货地址"),a("v-uni-view",{staticClass:"addLocation-icon"},[t._v("+")])],1),a("v-uni-view",{staticClass:"myLocation"},[t._v("我的收货地址")]),a("v-uni-view",{staticClass:"LocatonInfo"}),a("v-uni-view",{staticClass:"userTel"})],1)},o=[];a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}))},a9bd:function(t,e,a){"use strict";var i=a("ee27");a("c975"),a("ac1f"),a("841c"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;i(a("0dd3"));var n=a("a293"),o=(n.constant,{data:function(){return{locationList:[],hidden:!0}},components:{},props:{},onLoad:function(t){n.onLoad(t)},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{onTap:function(t){wx.setStorageSync("location",t.currentTarget.dataset.key),wx.switchTab({url:"/pages/home/home"})},getLocation:function(){wx.getLocation({type:"gcj02",success:function(t){var e=t.latitude,a=t.longitude;wx.request({url:"http://api.map.baidu.com/geocoder/v2/?ak=btsVVWf0TM1zUBEbzFz6QqWF&coordtype=gcj02ll&location="+e+","+a+"&output=json&pois=0",method:"get",success:function(t){console.log(t.data.result.formatted_address),wx.setStorageSync("location",t.data.result.formatted_address.substr(t.data.result.formatted_address.indexOf("市")+1,10))}})}}),wx.switchTab({url:"/pages/home/home"})},input:function(t){t.detail.value?(this.setData({hidden:!1}),this.search(t.detail.value)):this.setData({hidden:!0})},search:function(t){var e=this;wx.request({url:"http://api.map.baidu.com/place/v2/search?query="+t+"&page_size=20&page_num=0&scope=2&region=南昌&output=json&ak=btsVVWf0TM1zUBEbzFz6QqWF",success:function(t){console.log(t),e.locationList=t.data.results}})}}});e.default=o},c87c:function(t,e,a){"use strict";var i=a("4257"),n=a.n(i);n.a},c8cb:function(t,e,a){"use strict";a.r(e);var i=a("6ed2"),n=a("08a9");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("c87c");var s,d=a("f0c5"),c=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"472e28de",null,!1,i["a"],s);e["default"]=c.exports}}]);