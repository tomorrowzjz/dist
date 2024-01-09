(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{369:function(s,t,a){"use strict";a.r(t);var n=a(25),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"vue虚拟滚动-vue-virtual-scroll-list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue虚拟滚动-vue-virtual-scroll-list"}},[s._v("#")]),s._v(" vue虚拟滚动（vue-virtual-scroll-list）")]),s._v(" "),a("h2",{attrs:{id:"背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[s._v("#")]),s._v(" 背景")]),s._v(" "),a("p",[s._v("​       在项目中有一个sku表（是一个尺码和颜色乘积的表格），假如有10个颜色，20个尺码，那这个sku表就会有200行。有一个客户有100个颜色的需求，100个颜色的时候如果有5个尺码，就会有500行，这样会使页面很卡，于是找到了vue-virtual-scroll-list这个插件。")]),s._v(" "),a("h2",{attrs:{id:"用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法"}},[s._v("#")]),s._v(" 用法")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<template>\n  <div>\n    <virtual-list style=\"height: 360px; overflow-y: auto;\" // make list scrollable\n      :data-key=\"'id'\"\n      :data-sources=\"items\"\n      :data-component=\"itemComponent\"\n    />\n  </div>\n</template>\n\n<script>\n  import Item from './Item'\n  import VirtualList from 'vue-virtual-scroll-list'\n function createData(len) {\n     const arr = []\n     for (let index = 0; index < len; index++) {\n         const obj = { id: index, text: Math.random() }\n         arr.push(obj)\n     }\n     return arr\n }\n  export default {\n    name: 'root',\n    data () {\n      return {\n        itemComponent: Item,\n        items: createData(200)\n      }\n    },\n    components: { 'virtual-list': VirtualList }\n  }\n<\/script>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// item\n<template>\n  <div>每一行的内容</div>\n</template>\n\n<script>\n  export default {\n    name: 'item-component',\n    props: {\n      index: { // 每一行的索引\n        type: Number\n      },\n      source: { // 每一行的内容\n        type: Object,\n        default () {\n          return {}\n        }\n      }\n    }\n  }\n<\/script>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("h3",{attrs:{id:"参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[s._v("#")]),s._v(" 参数")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("strong",[s._v("Prop")])]),s._v(" "),a("th",[a("strong",[s._v("Type")])]),s._v(" "),a("th",[a("strong",[s._v("Description")])])])]),s._v(" "),a("tbody",[a("tr",[a("td",[a("code",[s._v("data-key")])]),s._v(" "),a("td",[s._v("String|Function")]),s._v(" "),a("td",[s._v("从"),a("code",[s._v("data-sources")]),s._v("每个数据对象中获取唯一键。或每个函数都调用"),a("code",[s._v("data-source")]),s._v("并返回其唯一键。在中，其值"),a("strong",[s._v("必须唯一")]),a("code",[s._v("data-sources")]),s._v("，用于标识商品尺寸。")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("data-sources")])]),s._v(" "),a("td",[s._v("Array[Object]")]),s._v(" "),a("td",[s._v("列表数据，每一行都必须有一个唯一的id(data-key)")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("data-component")])]),s._v(" "),a("td",[s._v("Component")]),s._v(" "),a("td",[s._v("每一行的子组件")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("keeps")])]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[s._v("默认30个，默认渲染的个数")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("extra-props")])]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td",[s._v("默认{} data-component组件的额外props通过改属性传入,内部已有source和index两个")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("estimate-size")])]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[s._v("默认50，每一行的高度，如果接近平均大小，则滚动条长度看起来会更准确。")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("scroll")])]),s._v(" "),a("td",[s._v("事件")]),s._v(" "),a("td",[s._v("滚动时发出param "),a("code",[s._v("(event, range)")]),s._v("。")])])])]),s._v(" "),a("p",[s._v("剩下的参数  https://www.npmjs.com/package/vue-virtual-scroll-list")]),s._v(" "),a("h2",{attrs:{id:"原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[s._v("#")]),s._v(" 原理")]),s._v(" "),a("img",{attrs:{src:s.$withBase("/vue-virtual-scroll-list.png"),alt:"mixureSecure"}}),s._v(" "),a("p",[s._v("如上图，他只渲染keeps传入的个数，滚动时通过改变padding的值来模拟滚动，里面的每一个item在滚动时动态替换里面的值")]),s._v(" "),a("p",[s._v("核心源码如下\n"),a("img",{attrs:{src:s.$withBase("/vue-virtual-scroll-list原理.png"),alt:"mixureSecure"}})]),s._v(" "),a("p",[s._v("永远之渲染props的keeps传入的个数，所以这样不会卡")])])}),[],!1,null,null,null);t.default=e.exports}}]);