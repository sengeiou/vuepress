(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{629:function(s,t,a){"use strict";a.r(t);var e=a(4),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"等价性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#等价性"}},[s._v("#")]),s._v(" 等价性")]),s._v(" "),a("blockquote",[a("p",[s._v("推荐在任何情景下摒弃 "),a("code",[s._v("==")]),s._v(" 操作符，使用 "),a("code",[s._v("===")]),s._v(" 替代。")])]),s._v(" "),a("p",[s._v("示例：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 故意混淆视野的取反操作，其实比较容易理解")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果上面的解决了，那这个呢？")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"},[s._v("默认的 falsy")]),a("ul",[a("li",[a("code",[s._v('""')]),s._v(" （空字符串）")]),s._v(" "),a("li",[a("code",[s._v("0")]),s._v("、"),a("code",[s._v("-0")]),s._v("、"),a("code",[s._v("NaN")]),s._v(" （非法的 "),a("code",[s._v("Number")]),s._v("）")]),s._v(" "),a("li",[a("code",[s._v("null")]),s._v("、"),a("code",[s._v("undefined")])]),s._v(" "),a("li",[a("code",[s._v("false")])])])]),a("h2",{attrs:{id:"非等价性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#非等价性"}},[s._v("#")]),s._v(" 非等价性")]),s._v(" "),a("p",[a("code",[s._v("<")]),s._v("、"),a("code",[s._v(">")]),s._v("、"),a("code",[s._v("<=")]),s._v(" 和 "),a("code",[s._v(">=")]),s._v(" 用于非等价性比较（关系比较）。")]),s._v(" "),a("p",[s._v("当比较的双方都为 "),a("code",[s._v("String")]),s._v(" 时按照字典顺序（typical alphabetic rules）比较，当其中一方为 "),a("code",[s._v("Number")]),s._v(" 时则均转为 "),a("code",[s._v("Number")]),s._v(" 再比较：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"aba"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"abb"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"43"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"42"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"43"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("42")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("当不同类型的值进行比较时：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"aba"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("42")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"aba"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("42")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"aba"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("42")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// 参考下方的解析，是由于 "aba" 转为数字时结果为 NaN')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"aba"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// NaN")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解析"}},[s._v("#")]),s._v(" 解析")]),s._v(" "),a("p",[s._v("关于这一部分 ECMA 有规范的说明："),a("a",{attrs:{href:"https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3",target:"_blank",rel:"noopener noreferrer"}},[s._v("5.1"),a("OutboundLink")],1),s._v(" 版、"),a("a",{attrs:{href:"http://www.ecma-international.org/ecma-262/6.0/#sec-7.2.12",target:"_blank",rel:"noopener noreferrer"}},[s._v("6.0"),a("OutboundLink")],1),s._v(" 版。")]),s._v(" "),a("p",[s._v("偷懒，借用一下阮一峰的翻译：")]),s._v(" "),a("ol",[a("li",[s._v("如果 "),a("code",[s._v("x")]),s._v(" 不是正常值（比如抛出一个错误），中断执行。")]),s._v(" "),a("li",[s._v("如果 "),a("code",[s._v("y")]),s._v(" 不是正常值，中断执行。")]),s._v(" "),a("li",[s._v("如果 "),a("code",[s._v("Type(x)")]),s._v(" 与 "),a("code",[s._v("Type(y)")]),s._v(" 相同，执行严格相等运算 "),a("code",[s._v("x === y")]),s._v("。")]),s._v(" "),a("li",[s._v("如果 "),a("code",[s._v("x")]),s._v(" 是 "),a("code",[s._v("null")]),s._v("，"),a("code",[s._v("y")]),s._v(" 是 "),a("code",[s._v("undefined")]),s._v("，返回 "),a("code",[s._v("true")]),s._v("。")]),s._v(" "),a("li",[s._v("如果 "),a("code",[s._v("x")]),s._v(" 是 "),a("code",[s._v("undefined")]),s._v("，"),a("code",[s._v("y")]),s._v(" 是 "),a("code",[s._v("null")]),s._v("，返回 "),a("code",[s._v("true")]),s._v("。")]),s._v(" "),a("li",[s._v("如果 "),a("code",[s._v("Type(x)")]),s._v(" 是数值，"),a("code",[s._v("Type(y)")]),s._v(" 是字符串，返回 "),a("code",[s._v("x == ToNumber(y)")]),s._v(" 的结果。")]),s._v(" "),a("li",[s._v("如果 "),a("code",[s._v("Type(x)")]),s._v(" 是字符串，"),a("code",[s._v("Type(y)")]),s._v(" 是数值，返回 "),a("code",[s._v("ToNumber(x) == y")]),s._v(" 的结果。")]),s._v(" "),a("li",[s._v("如果 "),a("code",[s._v("Type(x)")]),s._v(" 是布尔值，返回 "),a("code",[s._v("ToNumber(x) == y")]),s._v(" 的结果。")]),s._v(" "),a("li",[s._v("如果 "),a("code",[s._v("Type(y)")]),s._v(" 是布尔值，返回 "),a("code",[s._v("x == ToNumber(y)")]),s._v(" 的结果。")]),s._v(" "),a("li",[s._v("如果 "),a("code",[s._v("Type(x)")]),s._v(" 是字符串或数值或 "),a("code",[s._v("Symbol")]),s._v(" 值，"),a("code",[s._v("Type(y)")]),s._v(" 是对象，返回 "),a("code",[s._v("x == ToPrimitive(y)")]),s._v(" 的结果。")]),s._v(" "),a("li",[s._v("如果 "),a("code",[s._v("Type(x)")]),s._v(" 是对象，"),a("code",[s._v("Type(y)")]),s._v(" 是字符串或数值或 "),a("code",[s._v("Symbol")]),s._v(" 值，返回 "),a("code",[s._v("ToPrimitive(x) == y")]),s._v(" 的结果。")]),s._v(" "),a("li",[s._v("返回 "),a("code",[s._v("false")]),s._v("。")])]),s._v(" "),a("p",[s._v("根据上述规则则可以得到：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不符合以上 11 种条件，返回 false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"toprimitive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#toprimitive"}},[s._v("#")]),s._v(" ToPrimitive")]),s._v(" "),a("p",[s._v("对于以上的规则其中比较难以理解的为该部分了，对象转为原始值需要考虑三种（Boolean、String、Number）情况。")]),s._v(" "),a("h3",{attrs:{id:"_1-number"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-number"}},[s._v("#")]),s._v(" 1. Number")]),s._v(" "),a("p",[s._v("所有对象（包括数组、函数）都转为 true。")]),s._v(" "),a("h3",{attrs:{id:"_2-string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-string"}},[s._v("#")]),s._v(" 2. String")]),s._v(" "),a("p",[s._v("对象转为 "),a("strong",[s._v("String")]),s._v(" 经历以下步骤：")]),s._v(" "),a("ol",[a("li",[s._v("如果对象具有 "),a("code",[s._v("toString()")]),s._v(" 方法，则调用这个方法。如果它返回一个原始值，JavaScript 将这个值转为字符串（如果本身不是字符串的话），并返回这个字符串结果。")]),s._v(" "),a("li",[s._v("如果对象没有 "),a("code",[s._v("toString()")]),s._v(" 方法，或者这个方法并不返回一个原始值，那么 JavaScript 会调用 "),a("code",[s._v("valueOf()")]),s._v(" 方法。如果存在这个方法，则 JavaScript 调用它。如果返回值是原始值，JavaScript 将这个值转为字符串（如果本身不是字符串的话），并返回这个字符串结果。")]),s._v(" "),a("li",[s._v("否则，JavaScript 无法从 "),a("code",[s._v("toString()")]),s._v(" 或 "),a("code",[s._v("valueOf()")]),s._v(" 获得一个原始值，因此这时它将抛出一个类型错误异常。")])]),s._v(" "),a("h3",{attrs:{id:"_3-number"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-number"}},[s._v("#")]),s._v(" 3. Number")]),s._v(" "),a("p",[s._v("对象转为 "),a("strong",[s._v("Number")]),s._v(" 顺序有些区别：")]),s._v(" "),a("ol",[a("li",[s._v("如果对象具有 "),a("code",[s._v("valueOf()")]),s._v(" 方法，后者返回一个原始值，则 JavaScript 将这个原始值转为数字（如果需要的话），并返回这个数字。")]),s._v(" "),a("li",[s._v("否则，如果对象具有 "),a("code",[s._v("toString()")]),s._v(" 方法，后者返回一个原始值，则 JavaScript 将其转换并返回。")]),s._v(" "),a("li",[s._v("否则，JavaScript 抛出一个类型错误异常。")])])])}),[],!1,null,null,null);t.default=n.exports}}]);