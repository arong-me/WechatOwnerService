(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-payParkingFee-payParkingFee"],{"2bed":function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-scroll-view",{attrs:{"scroll-y":!0}},[i("v-uni-view",{staticClass:"block__title"},[t._v("车位信息")]),i("v-uni-view",{staticClass:"cu-list menu"},[i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-grey"},[t._v("小区")])],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"text-grey text-sm"},[t._v(t._s(t.communityName))])],1)],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-grey"},[t._v("车位编号")])],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"text-grey text-sm"},[t._v(t._s(t.num+"号车位"))])],1)],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-grey"},[t._v("车位类型")])],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"text-grey text-sm"},[t._v(t._s(t.feeTypeCdName))])],1)],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-grey"},[t._v("车牌号")])],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"text-grey text-sm"},[t._v(t._s(t.carNum))])],1)],1)],1),i("v-uni-view",{staticClass:"block__title"},[t._v("费用信息")]),i("v-uni-view",{staticClass:"cu-list menu fee-last"},[i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-grey"},[t._v("费用编号")])],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"text-grey text-sm"},[t._v(t._s(t.feeId))])],1)],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-grey"},[t._v("金额")])],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"text-grey text-sm"},[t._v(t._s(t.feePrice+"元/月"))])],1)],1),i("v-uni-view",{staticClass:"cu-item arrow"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-grey"},[t._v("周期")])],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-picker",{attrs:{bindchange:"PickerChange",value:t.index,range:t.feeMonthList},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.dateChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"picker"},[t._v(t._s(t.feeMonthName))])],1)],1)],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-grey"},[t._v("到期时间")])],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"text-grey text-sm"},[t._v(t._s(t.endTime))])],1)],1)],1)],1),i("v-uni-view",{staticClass:" bg-white  border flex justify-end",staticStyle:{position:"fixed",width:"100%",bottom:"0"}},[i("v-uni-view",{staticClass:"action text-orange margin-right line-height"},[t._v("合计："+t._s(t.receivableAmount)+"元")]),i("v-uni-view",{staticClass:"btn-group"},[i("v-uni-button",{staticClass:"cu-btn bg-red shadow-blur lgplus sharp",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onPayFee()}}},[t._v("提交订单")])],1)],1)],1)},s=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}))},"7a92":function(t,e,i){"use strict";i.r(e);var n=i("b283"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},8073:function(t,e,i){"use strict";i.r(e);var n=i("2bed"),a=i("7a92");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("d282");var o,c=i("f0c5"),u=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"6e2d440c",null,!1,n["a"],o);e["default"]=u.exports},"91c8":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".ppf_item[data-v-6e2d440c]{padding:%?0?% %?0?% %?0?% %?0?%}.block__title[data-v-6e2d440c]{margin:0;font-weight:400;font-size:14px;color:rgba(69,90,100,.6);padding:%?40?% %?30?% %?20?%}.button_up_blank[data-v-6e2d440c]{height:%?40?%}.fee-last[data-v-6e2d440c]{margin-bottom:%?200?%}.cu-btn.lgplus[data-v-6e2d440c]{padding:0 20px;font-size:18px;height:%?100?%}.cu-btn.sharp[data-v-6e2d440c]{border-radius:%?0?%}.line-height[data-v-6e2d440c]{line-height:%?100?%}",""]),t.exports=e},"93a3":function(t,e,i){var n=i("91c8");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("7bffb5fa",n,!0,{sourceMap:!1,shadowMode:!1})},b283:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("a293"),a=n.constant,s=n.util,o={data:function(){return{showFeeMonth:!1,feeMonthList:["一个月","半年","一年","两年"],feeMonthName:"一个月",feeMonth:1,endTime:"",ordEndTime:"",amount:0,receivableAmount:0,additionalAmount:0,num:"",feeTypeCdName:"",carNum:"",feePrice:0,communityId:"",communityName:"",feeId:""}},onLoad:function(t){n.onLoad(t);var e=JSON.parse(t.fee),i=this.feeMonth*e.feePrice,a=n.getCurrentCommunity(),o=new Date(e.endTime),c=s.date.addMonth(o,this.feeMonth);this.receivableAmount=i,this.communityId=a.communityId,this.communityName=a.communityName,this.num=e.num,this.feeTypeCdName=e.feeTypeCdName,this.carNum=e.carNum,this.feeId=e.feeId,this.feePrice=e.feePrice,this.endTime=s.date.formatDate(c),this.ordEndTime=e.endTime;var u=getCurrentPages(),r=u[u.length-2];r.needFefresh=!1},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{dateChange:function(t){console.log("onConfirm",t);var e=null;e=this.feeMonthList[t.detail.value];var i=1;if("一个月"==e)i=1;else if("半年"==e)i=6;else if("一年"==e)i=12;else{if("两年"!=e)return;i=24}var n=i*this.feePrice,a=new Date(this.ordEndTime),o=s.date.addMonth(a,i);this.showFeeMonth=!1,this.feeMonthName=e,this.receivableAmount=n,this.feeMonth=i,this.endTime=s.date.formatDate(o)},onFeeMonthCancel:function(t){this.showFeeMonth=!1},_payWxApp:function(t){var e=this.receivableAmount;wx.showLoading({title:"支付中"});var i="APP",s={cycles:this.feeMonth,communityId:this.communityId,feeId:this.feeId,feeName:"停车费",receivedAmount:e,tradeType:i};n.request({url:a.url.preOrder,header:n.getHeaders(),method:"POST",data:s,success:function(t){if(200==t.statusCode&&"0"==t.data.code){var e=t.data,i={appid:e.appId,noncestr:e.nonceStr,package:"Sign=WXPay",partnerid:e.partnerid,prepayid:e.prepayid,timestamp:e.timeStamp,sign:e.sign},n=JSON.stringify(i);return uni.requestPayment({provider:"wxpay",orderInfo:n,success:function(t){uni.showToast({title:"支付成功",duration:2e3}),uni.navigateBack({})},fail:function(t){console.log("fail:"+JSON.stringify(t))}}),void wx.hideLoading()}wx.hideLoading(),wx.showToast({title:"缴费失败",icon:"none",duration:2e3})},fail:function(t){wx.hideLoading(),wx.showToast({title:"服务器异常了",icon:"none",duration:2e3})}})},onPayFee:function(){var t=this.receivableAmount;wx.showLoading({title:"支付中"});var e="JSAPI",i={cycles:this.feeMonth,communityId:this.communityId,feeId:this.feeId,feeName:"停车费",receivedAmount:t,tradeType:e};n.request({url:a.url.preOrder,header:n.getHeaders(),method:"POST",data:i,success:function(t){if(console.log(t),200==t.statusCode&&"0"==t.data.code){var e=t.data;return uni.requestPayment({timeStamp:e.timeStamp,nonceStr:e.nonceStr,package:e.package,signType:e.signType,paySign:e.sign,success:function(t){uni.showToast({title:"支付成功",duration:2e3});var e=getCurrentPages(),i=e[e.length-2];i.needFefresh=!0,uni.navigateBack({})},fail:function(t){console.log("fail:"+JSON.stringify(t))}}),void uni.hideLoading()}uni.hideLoading(),uni.showToast({title:"缴费失败",icon:"none",duration:2e3})},fail:function(t){uni.hideLoading(),uni.showToast({title:"服务器异常了",icon:"none",duration:2e3})}})}}};e.default=o},d282:function(t,e,i){"use strict";var n=i("93a3"),a=i.n(n);a.a}}]);