(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"05ec":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{attrs:{value:!0,persistent:"",id:"edit-peminjaman"}},[a("q-card",{staticStyle:{"min-width":"500px"},attrs:{flat:""}},[a("q-toolbar",[a("q-toolbar-title",[t._v("Input Data Peminjaman")])],1),a("q-card-section",[a("div",{staticClass:"row items-center"},[a("div",{staticClass:"col-4"},[a("div",{staticClass:"text-body2"},[t._v("Nama")])]),a("div",{staticClass:"col-8"},[a("q-input",{attrs:{dense:"",outlined:""},model:{value:t.item.nama,callback:function(e){t.$set(t.item,"nama",e)},expression:"item.nama"}})],1)]),a("div",{staticClass:"row items-center q-mt-lg"},[a("div",{staticClass:"col-4"},[a("div",{staticClass:"text-body2"},[t._v("No. Anggota")])]),a("div",{staticClass:"col-8"},[a("q-input",{attrs:{dense:"",outlined:""},model:{value:t.item.no_anggota,callback:function(e){t.$set(t.item,"no_anggota",e)},expression:"item.no_anggota"}})],1)]),a("div",{staticClass:"row items-center q-mt-lg"},[a("div",{staticClass:"col-4"},[a("div",{staticClass:"text-body2"},[t._v("Diterima")])]),a("div",{staticClass:"col-8"},[a("q-toggle",{attrs:{dense:"",outlined:""},model:{value:t.item.accepted,callback:function(e){t.$set(t.item,"accepted",e)},expression:"item.accepted"}})],1)]),a("q-separator",{staticClass:"q-my-lg"}),t._l(t.item.kriteria_data,(function(e,i){return[a("div",{key:e.id,staticClass:"row items-center q-mt-lg"},[a("div",{staticClass:"col-4"},[a("div",{staticClass:"text-body2"},[t._v(t._s(t.kriteria_mapping[e.column_name].label))])]),a("div",{staticClass:"col-8"},["kategorial"===t.kriteria_mapping[e.column_name].type?a("q-select",{attrs:{dense:"",outlined:"",options:t.kriteria_mapping[e.column_name].options.map((function(t){return t.label}))},model:{value:t.item.kriteria_data[i].value,callback:function(e){t.$set(t.item.kriteria_data[i],"value",e)},expression:"item.kriteria_data[index].value"}}):t._e(),"numerik"===t.kriteria_mapping[e.column_name].type?a("q-input",{attrs:{dense:"",outlined:"",type:"number"},model:{value:t.item.kriteria_data[i].value,callback:function(e){t.$set(t.item.kriteria_data[i],"value",e)},expression:"item.kriteria_data[index].value"}}):t._e()],1)])]}))],2),a("q-card-actions",[a("q-btn",{attrs:{label:"Simpan",dark:"",color:"primary",unelevated:"",loading:t.loading},on:{click:t.save}}),a("q-btn",{attrs:{label:"Batal",unelevated:"",loading:t.loading},on:{click:function(e){return t.$router.back()}}})],1)],1)],1)},n=[],r=a("5039"),s=r["a"],o=a("2877"),c=Object(o["a"])(s,i,n,!1,null,null,null);e["default"]=c.exports},"33ef":function(t,e,a){t.exports=a.p+"js/2.f32ca760.worker.js"},5039:function(t,e,a){"use strict";(function(t){var i=a("967e"),n=a.n(i),r=(a("ac4d"),a("8a81"),a("ac6a"),a("96cf"),a("fa84")),s=a.n(r),o=a("780a"),c=a("731b"),l=a("25f1"),u=a("f2ec");e["a"]={name:"EditPeminjaman",props:{id:String},data:function(){return{item:{nama:"",no_anggota:"",accepted:!1,kriteria_data:[]},kriteria_mapping:{},loading:!1}},methods:{load_kriteria:function(){var t=s()(n.a.mark((function t(){var e,a,i,r,s,c,l;return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o["b"].get("/kriteria",{params:{keyword:""}});case 2:for(e=t.sent,a=!0,i=!1,r=void 0,t.prev=6,s=e.data[Symbol.iterator]();!(a=(c=s.next()).done);a=!0)l=c.value,Object.defineProperty(this.kriteria_mapping,l.column_name,{value:{label:l.label,type:l.type,options:l.options}}),console.log(l);t.next=14;break;case 10:t.prev=10,t.t0=t["catch"](6),i=!0,r=t.t0;case 14:t.prev=14,t.prev=15,a||null==s.return||s.return();case 17:if(t.prev=17,!i){t.next=20;break}throw r;case 20:return t.finish(17);case 21:return t.finish(14);case 22:case"end":return t.stop()}}),t,this,[[6,10,14,22],[15,,17,21]])})));function e(){return t.apply(this,arguments)}return e}(),check_invalid_kd:function(){var e=s()(n.a.mark((function e(){var a,i,r;return n.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=this.item.kriteria_data,e.next=3,Object(c["a"])(new l["a"](t));case 3:return i=e.sent,e.next=6,i.kd_invalid({kriteria_data:a});case 6:return r=e.sent,u["a"].terminate(i),e.abrupt("return",r);case 9:case"end":return e.stop()}}),e,this)})));function a(){return e.apply(this,arguments)}return a}(),save:function(){var t=s()(n.a.mark((function t(){var e;return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,this.check_invalid_kd();case 3:if(e=t.sent,!e){t.next=10;break}return this.loading=!1,this.$store.set("appGlobal/notification@type","negative"),this.$store.set("appGlobal/notification@message",e.message),this.$store.set("appGlobal/notification@show",!0),t.abrupt("return");case 10:return t.next=12,o["b"].put("/alternative/".concat(this.id),this.item);case 12:this.loading=!1,this.$store.set("appGlobal/notification@type","positive"),this.$store.set("appGlobal/notification@message","Sukses mengubah data alternative"),this.$store.set("appGlobal/notification@show",!0),this.$emit("update"),this.$router.back();case 18:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),load_data:function(){var t=s()(n.a.mark((function t(){var e;return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o["b"].get("/alternative/".concat(this.id));case 2:e=t.sent,this.item=e.data;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){var t=s()(n.a.mark((function t(){return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.load_kriteria();case 2:return t.next=4,this.load_data();case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}}).call(this,a("33ef"))}}]);