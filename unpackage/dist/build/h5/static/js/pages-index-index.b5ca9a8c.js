(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0482":function(t,e,i){"use strict";var a={uniNoticeBar:i("0dd3").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"margin-bottom-xs"},[i("uni-notice-bar",{attrs:{showIcon:"true",scrollable:"true",single:"true",speed:"30",text:"欢迎访问HC智慧家园"}})],1),i("v-uni-scroll-view",{staticClass:"scroll-restaurants-list",staticStyle:{height:"100%"},attrs:{"scroll-y":"true"},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.lower.apply(void 0,arguments)}}},[i("v-uni-swiper",{staticClass:"categoryList padding-top-xs bg-white",attrs:{"indicator-dots":"true","indicator-color":"rgba(228,228,228,1)","indicator-active-color":"#FECA49"}},[t._l(t.categoryList,(function(e,a){return[i("v-uni-swiper-item",[t._l(e,(function(e,a){return["callProperty"!=e.href?i("v-uni-view",{key:a+"_0",staticClass:"category-info"},[i("v-uni-navigator",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toPage(e.href)}}},[i("v-uni-image",{staticClass:"category-image",attrs:{src:e.src}}),i("v-uni-view",{staticClass:"category-text"},[t._v(t._s(e.name))])],1)],1):t._e(),"callProperty"==e.href?i("v-uni-view",{key:a+"_1",staticClass:"category-info"},[i("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.callPropertyTel()}}},[i("v-uni-image",{staticClass:"category-image",attrs:{src:e.src}}),i("v-uni-view",{staticClass:"category-text"},[t._v(t._s(e.name))])],1)],1):t._e()]}))],2)]}))],2),i("v-uni-swiper",{staticClass:"ad-swiper bg-white",attrs:{"indicator-dots":"true","indicator-color":"rgba(228,228,228,1)","indicator-active-color":"#FECA49",autoplay:"true",interval:"5000",duration:"1000",circular:"true"}},[t._l(t.ad,(function(t,e){return[i("v-uni-swiper-item",[i("v-uni-image",{attrs:{src:t.url}})],1)]}))],2),i("v-uni-scroll-view",{staticClass:"bg-white nav",attrs:{"scroll-x":!0,"scroll-with-animation":!0,"scroll-left":t.scrollLeft}},t._l(t.activitiTitle,(function(e,a){return i("v-uni-view",{key:a,staticClass:"cu-item",class:e.typeCd==t.curTypeCd?"text-green cur":"",attrs:{"data-id":a},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.selectActiviti(e)}}},[t._v(t._s(e.name))])})),1),i("v-uni-view",{staticClass:"noticesList bg-white margin-top-1"},[t._l(t.notices,(function(e,a){return[i("v-uni-view",{key:a+"_0",staticClass:"noticesList-list",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t._toDetail(e)}}},[i("v-uni-view",{staticClass:"notices-info"},[i("v-uni-view",{staticClass:"notices-info-name"},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"notice-bottom"},[i("v-uni-view",[i("v-uni-text",{staticClass:"lg text-gray cuIcon-time"}),i("v-uni-text",{staticClass:"notice-startTime margin-left-xs"},[t._v(t._s(e.startTime))])],1)],1)],1),i("v-uni-view",{staticClass:"notices-info-image"},[i("v-uni-image",{attrs:{src:e.src}})],1)],1)]}))],2)],1),i("v-uni-view",{staticClass:"cu-modal",class:1==t.callPropertyModal?"show":""},[i("v-uni-view",{staticClass:"cu-dialog"},[i("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[i("v-uni-view",{staticClass:"content"},[t._v("拨打电话")]),i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._cancleCall()}}},[i("v-uni-text",{staticClass:"cuIcon-close text-red"})],1)],1),i("v-uni-view",{staticClass:"padding-xl"},[t._v("您确认拨打"+t._s(t.property.name)+"-"+t._s(t.property.tel))]),i("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[i("v-uni-view",{staticClass:"action margin-0 flex-sub  solid-left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._cancleCall()}}},[t._v("取消")]),i("v-uni-view",{staticClass:"action margin-0 flex-sub text-green solid-left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._doCall()}}},[t._v("拨号")])],1)],1)],1)],1)},n=[];i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}))},"09c7":function(t,e,i){"use strict";i.r(e);var a=i("4df49"),o=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=o.a},1115:function(t,e,i){var a=i("ec46");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("2b6410ce",a,!0,{sourceMap:!1,shadowMode:!1})},"4df49":function(t,e,i){"use strict";var a=i("ee27");i("99af"),i("4160"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(i("0dd3")),n=i("a293"),c=n.constant,d={data:function(){return{communityId:"",property:{},callPropertyModal:!1,ad:[],notices:[],page:1,row:7,activitiTitle:[{typeCd:"10003",name:"公共安全及消防"},{typeCd:"10004",name:"政务及党政"},{typeCd:"10005",name:"费用公开"},{typeCd:"10001",name:"小区文化"},{typeCd:"10002",name:"其他"}],curTypeCd:"10003",categoryList:{pageone:[{name:"物业费",src:"/static/images/index_property.png",href:"/pages/roomFeeList/roomFeeList"},{name:"停车费",src:"/static/images/index_park.png",href:"/pages/payParkingFeeList/payParkingFeeList"},{name:"投诉建议",src:"/static/images/index_complaint.png",href:"/pages/complaint/complaint"},{name:"家庭成员",src:"/static/images/index_member.png",href:"/pages/familyList/familyList"},{name:"报修",src:"/static/images/index_repair.png",href:"/pages/repair/repair"},{name:"智慧开门",src:"/static/images/index_openDoor.png",href:"/pages/openDoor/openDoor"},{name:"公告",src:"/static/images/index_notice.png",href:"/pages/notice/index"},{name:"联系客服",src:"/static/images/index_persion.png",href:"callProperty"}]},selected:0,mask1Hidden:!0,mask2Hidden:!0,animationData:"",location:"",characteristicSelected:[!1,!1,!1,!1,!1,!1,!1],discountSelected:null,selectedNumb:0,sortSelected:"综合排序"}},components:{uniNoticeBar:o.default},onLoad:function(t){var e=this;n.onLoad(t);var i=n.checkLoginStatus();i?n.getOwner((function(t){var i="";i=null==t?c.mapping.HC_TEST_COMMUNITY_ID:t.communityId,e.communityId=i})):e.communityId=c.mapping.HC_TEST_COMMUNITY_ID,e.loadActivitesFun(),e.loadCommunityAdvertPhotoFun()},onReady:function(){},onShow:function(){var t=this;t.location=wx.getStorageSync("location"),n.checkLoginStatus()&&t.judgeBindOwnerFun()},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){this.notices.length>=this.page*this.row&&(this.page=this.page+1,this.loadActivitesFun())},onShareAppMessage:function(){},methods:{judgeBindOwnerFun:function(){n.getOwner((function(t){}))},loadActivitesFun:function(){var t=this,e={page:this.page,row:this.row,communityId:this.communityId,typeCd:this.curTypeCd};n.request({url:c.url.listActivitiess,header:n.getHeaders(),method:"GET",data:e,success:function(e){if(200==e.statusCode){var i=e.data.activitiess,a=[];return i.forEach((function(e){e.src=c.url.filePath+"?fileId="+e.headerImg+"&communityId="+t.communityId+"&time="+new Date,a.push(e)})),void(t.notices=t.notices.concat(a))}wx.showToast({title:"服务器异常了",icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:"服务器异常了",icon:"none",duration:2e3})}})},loadCommunityAdvertPhotoFun:function(){var t=this,e={page:1,row:5,communityId:this.communityId};n.request({url:c.url.listAdvertPhoto,header:n.getHeaders(),method:"GET",data:e,success:function(e){if(console.log("请求返回信息：",e),200==e.statusCode){var i=e.data,a=[];return i.forEach((function(t){t.url=c.url.baseUrl+t.url+"&time="+new Date,a.push(t)})),void(t.ad=a)}wx.showToast({title:"服务器异常了",icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:"服务器异常了",icon:"none",duration:2e3})}})},moreActivitiesFun:function(){n.navigateTo({url:"/pages/activites/activites"})},showModal:function(t){n.navigateTo({url:"../bindOwner/bindOwner"})},callPropertyTel:function(){var t=this,e=n.checkLoginStatus();if(e){var i={page:1,row:5,communityId:this.communityId,memberTypeCd:"390001200002"};n.request({url:c.url.listStore,header:n.getHeaders(),method:"GET",data:i,success:function(e){if(200==e.statusCode)return t.property=e.data.stores[0],void(t.callPropertyModal=!0);wx.showToast({title:"服务器异常了",icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:"服务器异常了",icon:"none",duration:2e3})}})}else uni.navigateTo({url:"../showlogin/showlogin"})},_doCall:function(){var t=this;uni.makePhoneCall({phoneNumber:t.property.tel,success:function(t){console.log("调用成功!")},fail:function(t){console.log("调用失败!")}})},_toDetail:function(t){uni.navigateTo({url:"/pages/activitesDetail/activitesDetail?activitiesId="+t.activitiesId+"&title="+t.title+"&communityId="+t.communityId})},_cancleCall:function(){this.callPropertyModal=!1},selectActiviti:function(t){this.curTypeCd=t.typeCd,this.notices=[],this.page=1,this.loadActivitesFun()},toPage:function(t){n.navigateTo({url:t})}}};e.default=d},8766:function(t,e,i){"use strict";i.r(e);var a=i("0482"),o=i("09c7");for(var n in o)"default"!==n&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("8bd3");var c,d=i("f0c5"),r=Object(d["a"])(o["default"],a["b"],a["c"],!1,null,"7b17fcd9",null,!1,a["a"],c);e["default"]=r.exports},"8bd3":function(t,e,i){"use strict";var a=i("1115"),o=i.n(a);o.a},ec46:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@font-face{font-family:iconfont;src:url("data:application/x-font-woff2;charset=utf-8;base64,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") format("woff2") /* iOS 4.1- */}.iconfont[data-v-7b17fcd9]{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.iconyuedu[data-v-7b17fcd9]:before{content:"\\e64a"}.icongengduo[data-v-7b17fcd9]:before{content:"\\e64c"}.iconbianji[data-v-7b17fcd9]:before{content:"\\eabd"}.iconshenqing[data-v-7b17fcd9]:before{content:"\\e6a3"}.iconzhaoshangxiaochengxu-shimingrenzheng[data-v-7b17fcd9]:before{content:"\\e634"}.icondengdai[data-v-7b17fcd9]:before{content:"\\e66a"}.icongengduo1[data-v-7b17fcd9]:before{content:"\\e86d"}.iconjiaruwomen[data-v-7b17fcd9]:before{content:"\\e612"}.iconshenqingtongguo[data-v-7b17fcd9]:before{content:"\\e606"}.iconpengyouquan[data-v-7b17fcd9]:before{content:"\\e8b4"}.iconadd[data-v-7b17fcd9]:before{content:"\\e6ec"}.iconcategory[data-v-7b17fcd9]:before{content:"\\e6eb"}.iconall[data-v-7b17fcd9]:before{content:"\\e6ef"}.iconclose[data-v-7b17fcd9]:before{content:"\\e6f0"}.iconbad[data-v-7b17fcd9]:before{content:"\\e6f1"}.iconfalling[data-v-7b17fcd9]:before{content:"\\e6f8"}.icongood[data-v-7b17fcd9]:before{content:"\\e6f9"}.iconaccount[data-v-7b17fcd9]:before{content:"\\e6fa"}.iconeditor[data-v-7b17fcd9]:before{content:"\\e6f6"}.iconemail[data-v-7b17fcd9]:before{content:"\\e6fb"}.iconfavorites[data-v-7b17fcd9]:before{content:"\\e6fe"}.iconloading[data-v-7b17fcd9]:before{content:"\\e6fc"}.iconreduce[data-v-7b17fcd9]:before{content:"\\e700"}.iconremind[data-v-7b17fcd9]:before{content:"\\e701"}.iconQRcode[data-v-7b17fcd9]:before{content:"\\e704"}.iconscanning[data-v-7b17fcd9]:before{content:"\\e705"}.iconsuccess[data-v-7b17fcd9]:before{content:"\\e709"}.iconsearch[data-v-7b17fcd9]:before{content:"\\e70a"}.iconaccount1[data-v-7b17fcd9]:before{content:"\\e716"}.iconadd-fill[data-v-7b17fcd9]:before{content:"\\e717"}.iconbad-fill[data-v-7b17fcd9]:before{content:"\\e719"}.iconfavorites-fill[data-v-7b17fcd9]:before{content:"\\e721"}.icongood-fill[data-v-7b17fcd9]:before{content:"\\e723"}.iconreduce-fill[data-v-7b17fcd9]:before{content:"\\e730"}.iconcollection[data-v-7b17fcd9]:before{content:"\\e797"}.iconcollection-fill1[data-v-7b17fcd9]:before{content:"\\e798"}.iconconsumption-fill[data-v-7b17fcd9]:before{content:"\\e799"}.iconconsumption[data-v-7b17fcd9]:before{content:"\\e79a"}.iconwode[data-v-7b17fcd9]:before{content:"\\e6b4"}.iconshouye1[data-v-7b17fcd9]:before{content:"\\e6b3"}.heard-location-text[data-v-7b17fcd9]{position:absolute;overflow:hidden}.overall-sort-list[data-v-7b17fcd9],.filterList[data-v-7b17fcd9],.filterList-footer[data-v-7b17fcd9]{background:#fff}.overall-sort-list[data-v-7b17fcd9]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;border-top:1px solid transparent;display:-webkit-box;display:-webkit-flex;display:flex}.overall-sort[data-v-7b17fcd9]{font-size:%?25?%;height:%?70?%;line-height:%?70?%;margin-left:%?30?%}.filterList[data-v-7b17fcd9]{height:%?500?%;font-size:%?27?%;overflow:hidden}.filterList-characteristic-title[data-v-7b17fcd9],.filterList-discount-title[data-v-7b17fcd9]{position:relative;height:%?50?%;line-height:%?50?%;background:#fbfbfb;font-weight:400;padding-left:%?30?%}.filterList-characteristic-title[data-v-7b17fcd9]::before,\r\n.filterList-discount-title[data-v-7b17fcd9]::before{content:"";position:absolute;left:0;top:%?15?%;display:inline-block;width:%?5?%;height:%?20?%;background:#fed161}.filterList-characteristic-items[data-v-7b17fcd9]{height:%?200?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-align-content:space-around;align-content:space-around}.filterList-characteristic-item[data-v-7b17fcd9]{text-align:center;height:%?70?%;width:%?200?%;margin:0 %?20?%;border-radius:%?70?%;border:%?2?% solid #ececec;line-height:%?70?%}.filterList-discount-item-icon[data-v-7b17fcd9]{padding:0 %?4?%;color:#fff}.filterList-discount-item[data-v-7b17fcd9]{margin-left:%?30?%;height:%?80?%;line-height:%?80?%;border-bottom:%?1?% solid #ececec}.filterList-footer[data-v-7b17fcd9]{height:%?90?%;display:-webkit-box;display:-webkit-flex;display:flex}.filterList-footer-delect[data-v-7b17fcd9]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?25?%;line-height:%?90?%;padding-left:%?30?%}.filterList-footer-finish[data-v-7b17fcd9]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;text-align:center;line-height:%?90?%;font-size:%?35?%;width:%?210?%;background:#ffd161;position:relative}.filterList-footer-finish-number[data-v-7b17fcd9]{height:%?30?%;width:%?30?%;line-height:%?31?%;font-size:%?25?%;margin-left:%?15?%;color:#ffd161;border-radius:50%;background:#000}.characteristic-selected[data-v-7b17fcd9]{background:#fffbf1;border-color:#ffe9b7;color:#ffe6b4}.discount-selected[data-v-7b17fcd9]{color:#ffe6b4}.heard[data-v-7b17fcd9]{-webkit-justify-content:space-around;justify-content:space-around;display:-webkit-box;display:-webkit-flex;display:flex;width:100%;height:%?80?%;background:#0a0}.heard-location-icon[data-v-7b17fcd9]{position:absolute;top:%?12?%;height:%?25?%;width:%?25?%}.heard-location-text[data-v-7b17fcd9]{left:%?47?%;top:%?9?%;height:%?30?%;width:%?190?%;white-space:nowrap;text-overflow:ellipsis}.heard-location[data-v-7b17fcd9]{position:relative;font-size:%?25?%;padding:%?5?% %?15?%;margin:%?10?%;width:%?250?%;height:%?40?%;background:#080;color:#fff;border-radius:%?20?%}.heard-location[data-v-7b17fcd9]:after{content:"";position:absolute;top:%?20?%;left:%?250?%;width:%?8?%;height:%?8?%;border:%?3?% solid #fff;border-bottom:none;border-left:none;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.heard-search[data-v-7b17fcd9]{font-size:%?25?%;padding:%?5?% %?15?%;margin:%?10?%;height:%?40?%;width:%?400?%;background:#fff;border-radius:%?20?%;line-height:%?40?%}.heard-search-icon[data-v-7b17fcd9]{height:%?21?%;width:%?21?%}.categoryList[data-v-7b17fcd9]{width:100%;height:%?360?%;border-bottom:%?20?% solid #f4f4f4}.category-info[data-v-7b17fcd9]{display:inline-block;text-align:center;position:relative;margin-top:%?20?%;height:%?130?%;width:25%}.category-image[data-v-7b17fcd9]{width:%?80?%;height:%?80?%}.category-text[data-v-7b17fcd9]{font-size:%?25?%;width:100%\r\n  /* line-height: 30rpx */}.header-title[data-v-7b17fcd9]{width:100%;height:%?100?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;display:-webkit-box;display:-webkit-flex;display:flex;line-height:%?100?%;font-size:%?34?%;font-weight:700;border:%?1?% solid #ececec}.header-title .new[data-v-7b17fcd9]{margin-left:%?20?%}.header-title .gd[data-v-7b17fcd9]{margin-right:%?20?%;color:#8a8a8a}.sort-list[data-v-7b17fcd9]{-webkit-justify-content:space-around;justify-content:space-around;display:-webkit-box;display:-webkit-flex;display:flex;background:#fff;width:100%;height:%?80?%;font-size:%?27?%;color:#6a6a6a;-webkit-align-content:center;align-content:center;border:%?1?% solid #ececec}.sort[data-v-7b17fcd9]{text-align:center;margin:auto 0;height:%?30?%;line-height:%?30?%;border-right:%?1?% solid #ececec;-webkit-box-flex:1;-webkit-flex:1;flex:1}.sort-active[data-v-7b17fcd9]{color:#000;font-weight:800}.noticesList-list[data-v-7b17fcd9]{font-size:%?25?%;display:-webkit-box;display:-webkit-flex;display:flex;width:100%;padding:%?10?% 0;border-bottom:%?1?% solid #ececec;color:#6d6d6d;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.notices-info-name[data-v-7b17fcd9]{margin-top:%?10?%;color:#000;font-size:%?30?%;display:-webkit-box;  /*设置为弹性盒子*/-webkit-line-clamp:2;  /*最多显示5行*/overflow:hidden;  /*超出隐藏*/text-overflow:ellipsis;  /*超出显示为省略号*/-webkit-box-orient:vertical;word-break:break-all  /*强制英文单词自动换行*/}.notices-info-image uni-image[data-v-7b17fcd9]{width:%?200?%;height:%?150?%;margin:%?10?% %?20?% %?0?% %?20?%;border-radius:%?10?%}.notices-info[data-v-7b17fcd9]{margin:%?10?% %?0?% %?0?% %?20?%;height:%?150?%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.notice-bottom[data-v-7b17fcd9]{display:-webkit-box;display:-webkit-flex;display:flex;text-align:left}.notice-bottom uni-view[data-v-7b17fcd9]{margin-right:%?20?%}.notice-bottom uni-icon[data-v-7b17fcd9]{color:#8a8a8a;display:inline-block;width:%?40?%;height:%?40?%}.notice-bottom uni-view uni-text[data-v-7b17fcd9]{font-size:%?25?%;line-height:%?40?%}.mask[data-v-7b17fcd9]{width:100%;height:100%;position:fixed;z-index:999;background-color:rgba(15,15,26,.7)}.ad-swiper[data-v-7b17fcd9]{width:100%;height:%?240?%;border-bottom:%?20?% solid #f4f4f4}.ad-swiper uni-image[data-v-7b17fcd9]{width:100%;height:inherit}.bock-icon[data-v-7b17fcd9]{height:%?34?%;width:%?14?%;line-height:%?100?%;background-color:#0a0}.margin-top-1[data-v-7b17fcd9]{margin-top:%?2?%}.tec-height[data-v-7b17fcd9]{height:%?120?%}',""]),t.exports=e}}]);