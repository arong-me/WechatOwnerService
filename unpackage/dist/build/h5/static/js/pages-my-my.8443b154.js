(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-my"],{"3b26":function(t,e,n){"use strict";n.r(e);var i=n("e6cfd"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"7cd4":function(t,e,n){"use strict";var i,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"user-container bg-white "},[n("v-uni-view",{staticClass:"userinfo"},[[t.login?n("v-uni-view",[n("v-uni-view",{staticClass:"cu-avatar header-img round ",style:{backgroundImage:"url("+t.headerImg+")"}}),n("v-uni-view",{staticClass:"userinfo-nickname text-center margin-top"},[n("v-uni-text",[t._v(t._s(t.userName))])],1)],1):n("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showLongModel.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"userinfo-avatar"},[n("v-uni-open-data",{attrs:{type:"userAvatarUrl",lang:"zh_CN"}})],1),n("v-uni-view",{staticClass:"userinfo-nickname text-center margin-top"},[n("v-uni-text",[t._v("请登录")])],1)],1)]],2)],1),n("v-uni-view",{staticClass:"cu-list menu  margin-top"},[0==t.ownerFlag?n("v-uni-view",{staticClass:"cu-item arrow",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bindingOwner()}}},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"cuIcon-profile text-pink"}),n("v-uni-text",{staticClass:"text-grey"},[t._v("绑定业主")])],1)],1):n("v-uni-view",{staticClass:"cu-item arrow",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.viewOwner()}}},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"cuIcon-profile text-pink"}),n("v-uni-text",{staticClass:"text-grey"},[t._v("业主信息")])],1)],1),n("v-uni-view",{staticClass:"cu-item arrow",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.myProperty()}}},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"cuIcon-service text-red"}),n("v-uni-text",{staticClass:"text-grey"},[t._v("我的物业")])],1)],1),n("v-uni-view",{staticClass:"cu-item arrow",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.myComplaint()}}},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"cuIcon-form text-green"}),n("v-uni-text",{staticClass:"text-grey"},[t._v("我的投诉单")])],1)],1),n("v-uni-view",{staticClass:"cu-item arrow",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.myHouse()}}},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"cuIcon-home text-blue"}),n("v-uni-text",{staticClass:"text-grey"},[t._v("我的房屋")])],1)],1),n("v-uni-view",{staticClass:"cu-item arrow",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.myRepair()}}},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"cuIcon-formfill text-orange"}),n("v-uni-text",{staticClass:"text-grey"},[t._v("我的报修单")])],1)],1),n("v-uni-view",{staticClass:"cu-item arrow",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.mySettings()}}},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"cuIcon-settings text-gray"}),n("v-uni-text",{staticClass:"text-grey"},[t._v("设置")])],1)],1)],1)],1)},a=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},"7ec2":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"/**index.wxss**/.user-container[data-v-7b008dff]{padding:%?50?% 0\r\n\t/*border: 1px solid black;*/}.userinfo[data-v-7b008dff]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.userinfo-avatar[data-v-7b008dff]{display:block;overflow:hidden;border-radius:50%;width:%?200?%;height:%?200?%}.userinfo-nickname[data-v-7b008dff]{color:#aaa}.tab-container[data-v-7b008dff]{\r\n\t/*border: 1px solid black;*/margin-top:%?30?%}.tab-item[data-v-7b008dff]{padding:%?20?% %?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.tab-item-hover[data-v-7b008dff]{background-color:#e6e6e6}.tab-icon[data-v-7b008dff]{width:%?30?%;height:%?30?%}.tab-text[data-v-7b008dff]{display:inline-block;margin-left:%?10?%;color:#1e1e1e}.tab-arrow[data-v-7b008dff]{display:inline-block;width:%?20?%;height:%?20?%;border:1px solid #cdcdcd;border-left:none;border-bottom:none;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.border-bottom .icon[data-v-7b008dff]{font-size:%?38?%;line-height:%?38?%}.header-img[data-v-7b008dff]{width:%?200?%;height:%?200?%}",""]),t.exports=e},"92e6":function(t,e,n){var i=n("7ec2");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("213d60e8",i,!0,{sourceMap:!1,shadowMode:!1})},a998:function(t,e,n){"use strict";var i=n("92e6"),o=n.n(i);o.a},bb44:function(t,e,n){"use strict";n.r(e);var i=n("7cd4"),o=n("3b26");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("a998");var s,r=n("f0c5"),c=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"7b008dff",null,!1,i["a"],s);e["default"]=c.exports},e6cfd:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("675c"),o=i.factory,a=i.constant,s=(getApp().globalData,{data:function(){return{userInfo:{},headerImg:"",userName:"",ownerFlag:!1,login:!0}},components:{},props:{},onLoad:function(){i.onLoad(options);var t=this,e=i.checkLoginStatus();e&&o.login.checkLoginStatus((function(){t.userInfo=i.getUserInfo(),t.loadOwenrInfo()}))},onShow:function(){var t=this;t.ckeckUserInfo()?(t.login=!0,t.loadOwenrInfo(),t.userInfo=i.getUserInfo(),this.loadOwnerHeaderImg()):t.login=!1},methods:{bindingOwner:function(){this.ckeckUserInfo()?wx.navigateTo({url:"../bindOwner/bindOwner"}):uni.navigateTo({url:"../showlogin/showlogin"})},viewOwner:function(){this.ckeckUserInfo()?wx.navigateTo({url:"../viewBindOwner/viewBindOwner"}):uni.navigateTo({url:"../showlogin/showlogin"})},loadOwenrInfo:function(){var t=this;i.getOwner((function(e){console.log(e),t.ownerFlag=!!e}))},myProperty:function(){this.ckeckUserInfo()?wx.navigateTo({url:"../myProperty/myProperty"}):uni.navigateTo({url:"../showlogin/showlogin"})},myComplaint:function(){this.ckeckUserInfo()?wx.navigateTo({url:"../complaintList/complaintList"}):uni.navigateTo({url:"../showlogin/showlogin"})},onGotUserInfo:function(t){console.log("nickname="+JSON.stringify(t.detail.userInfo))},myHouse:function(){this.ckeckUserInfo()?wx.navigateTo({url:"../my/myHouse"}):uni.navigateTo({url:"../showlogin/showlogin"})},myRepair:function(){this.ckeckUserInfo()?wx.navigateTo({url:"/pages/myRepair/myRepair"}):uni.navigateTo({url:"../showlogin/showlogin"})},mySettings:function(){this.ckeckUserInfo()?wx.navigateTo({url:"/pages/settings/settings"}):uni.navigateTo({url:"../showlogin/showlogin"})},loadOwnerHeaderImg:function(){var t=this;i.getOwner((function(e){var n=a.url.getOwnerPhotoPath+"?objId="+e.memberId+"&communityId="+e.communityId+"&fileTypeCd=10000";t.headerImg=n,t.userName=e.appUserName}))},showLongModel:function(){uni.navigateTo({url:"../login/login"})},ckeckUserInfo:function(){return i.checkLoginStatus()}}});e.default=s}}]);