(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{378:function(t,e,i){},381:function(t,e,i){"use strict";var n=i(378);i.n(n).a},382:function(t,e,i){"use strict";var n={name:"TiButton",props:{type:{type:String,default:"default"},plain:{type:Boolean,default:!1},round:{type:Boolean,default:!1},circle:{type:Boolean,default:!1},icon:{type:String,default:""},disabled:{type:Boolean,default:!1}},methods:{handleClick:function(t){this.$emit("click",t)}}},a=(i(381),i(4)),l=Object(a.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{staticClass:"ti-button",class:["ti-button_"+t.type,{"is-plain":t.plain,"is-round":t.round,"is-circle":t.circle,"is-disabled":t.disabled}],attrs:{disabled:t.disabled},on:{click:t.handleClick}},[t.icon?i("i",{class:t.icon}):t._e(),t._v(" "),t.$slots.default?i("span",[t._t("default")],2):t._e()])}),[],!1,null,"d49536a8",null);e.a=l.exports},386:function(t,e,i){},389:function(t,e,i){},401:function(t,e,i){},407:function(t,e,i){"use strict";var n=i(389);i.n(n).a},412:function(t,e,i){"use strict";i(87);var n=i(38),a={name:"TiSwitch",props:{value:{type:Boolean,default:!1},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},name:{type:String,default:""}},methods:{handleClick:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$emit("input",!t.value),e.next=3,t.$nextTick();case 3:t.setColor(),t.$refs.input.value=t.value;case 5:case"end":return e.stop()}}),e)})))()},setColor:function(){if(this.activeColor||this.inactiveColor){var t=this.value?this.activeColor:this.inactiveColor;this.$refs.core.style.borderColor=t,this.$refs.core.style.backgroundColor=t}}},mounted:function(){this.setColor(),this.$refs.input.value=this.value}},l=(i(407),i(4)),o=Object(l.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ti-switch",class:{"is-checked":this.value},on:{click:this.handleClick}},[e("input",{ref:"input",staticClass:"ti-switch-input",attrs:{name:this.name,type:"checkbox"}}),this._v(" "),e("span",{ref:"core",staticClass:"ti-switch-core"},[e("span",{staticClass:"ti-switch-button"})])])}),[],!1,null,null,null);e.a=o.exports},447:function(t,e,i){"use strict";var n=i(401);i.n(n).a},454:function(t,e,i){"use strict";var n={name:"TiDialog",props:{title:{type:String,default:"提示"},width:{type:String,default:"50%"},top:{type:String,default:"15vh"},visible:{type:Boolean,default:!1}},methods:{handleClose:function(){this.$emit("update:visible",!1)},afterEnter:function(){this.$emit("opened")},afterLeave:function(){this.$emit("close")}}},a=(i(447),i(4)),l=Object(a.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"dialog-fade"},on:{"after-enter":t.afterEnter,"after-leave":t.afterLeave}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"ti-dialog_wrapper",on:{click:function(e){return e.target!==e.currentTarget?null:t.handleClose(e)}}},[i("div",{staticClass:"ti-dialog",style:{width:t.width,marginTop:t.top}},[i("div",{staticClass:"ti-dialog_header"},[t._t("title",[i("span",{staticClass:"ti-dialog_title"},[t._v(t._s(t.title))])]),t._v(" "),i("button",{staticClass:"ti-dialog_headerbtn",on:{click:t.handleClose}},[i("i",{staticClass:"ti-icon-close"})])],2),t._v(" "),i("div",{staticClass:"ti-dialog_body"},[t._t("default")],2),t._v(" "),t.$slots.footer?i("div",{staticClass:"ti-dialog_footer"},[t._t("footer")],2):t._e()])])])}),[],!1,null,null,null);e.a=l.exports},549:function(t,e,i){"use strict";i.r(e);var n=i(382),a=i(412),l=i(454),o=(i(386),{name:"Dialog",components:{TiButton:n.a,TiSwitch:a.a,TiDialog:l.a},data:function(){return{dialogVisible:!1}},methods:{open:function(){console.log("对话框显示了")},close:function(){console.log("对话框关闭了")}}}),s=i(4),c=Object(s.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("ti-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("点击显示 Dialog")]),t._v(" "),i("ti-dialog",{attrs:{width:"30%",top:"200px",title:"Dialog标题",visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e},opened:t.open,closed:t.close},scopedSlots:t._u([{key:"footer",fn:function(){return[i("ti-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),i("ti-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("确 定")])]},proxy:!0}])},[i("ul",[i("li",[t._v("Dialog内容 1")]),t._v(" "),i("li",[t._v("Dialog内容 2")]),t._v(" "),i("li",[t._v("Dialog内容 3")])])])],1)}),[],!1,null,null,null);e.default=c.exports}}]);