(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{225:function(e,t,a){"use strict";a.r(t);var s=a(6),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"debugging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#debugging"}},[e._v("#")]),e._v(" Debugging")]),e._v(" "),a("p",[e._v("Recommendations on how to debug AssemblyScript modules.")]),e._v(" "),a("h2",{attrs:{id:"source-maps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#source-maps"}},[e._v("#")]),e._v(" Source maps")]),e._v(" "),a("p",[e._v("The compiler supports generating a source map alongside a binary using the "),a("code",[e._v("--sourceMap")]),e._v(" option.")]),e._v(" "),a("h3",{attrs:{id:"relative-source-maps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#relative-source-maps"}},[e._v("#")]),e._v(" Relative source maps")]),e._v(" "),a("p",[e._v("By default, specifying the "),a("code",[e._v("--sourceMap")]),e._v(" option will create a source mapping section pointing to the source map with a relative path, defaulting to "),a("code",[e._v("myModule.wasm.map")]),e._v(" with "),a("code",[e._v("myModule")]),e._v(" being the name of the respective binary. This works when instantiating a module with "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiateStreaming",target:"_blank",rel:"noopener noreferrer"}},[e._v("WebAssembly.instantiateStreaming"),a("OutboundLink")],1),e._v(" because the VM can obtain the absolute URL the source map is relative to from the provided "),a("code",[e._v("Response")]),e._v(" object, but does not work if a module is instantiated from a buffer or otherwise without a path context.")]),e._v(" "),a("h3",{attrs:{id:"absolute-source-maps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#absolute-source-maps"}},[e._v("#")]),e._v(" Absolute source maps")]),e._v(" "),a("p",[e._v("Where relative source maps cannot be used, for example if "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiate",target:"_blank",rel:"noopener noreferrer"}},[e._v("WebAssembly.instantiate"),a("OutboundLink")],1),e._v(" is used to instantiate a module from a binary buffer, it is also possible to specify an absolute path to the source map using "),a("code",[e._v("--sourceMap absolutePathToSourceMap")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"stack-traces"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stack-traces"}},[e._v("#")]),e._v(" Stack traces")]),e._v(" "),a("p",[e._v("A JavaScript VM is able to display stack traces originating in WebAssembly code. However, optimizing a WebAssembly module will usually drop all the debug information, making these stack traces hard to grasp. Using an unoptimized module or a module otherwise preserving debug information can help here. The AssemblyScript compiler preserves debug information by specifying the "),a("code",[e._v("--debug")]),e._v(" compiler option.")]),e._v(" "),a("h2",{attrs:{id:"disabling-assertions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disabling-assertions"}},[e._v("#")]),e._v(" Disabling assertions")]),e._v(" "),a("p",[e._v("By default, the compiler will preserve any "),a("code",[e._v("assert(expression)")]),e._v("s in a module, leading to an "),a("code",[e._v("abort")]),e._v(" if one of the respective expectations failed. These assertions can be disabled with the "),a("code",[e._v("--noAssert")]),e._v(" compiler option, though, essentially replacing them with "),a("code",[e._v("nop")]),e._v("s, doing nothing. Doing so can lead to smaller binaries once sufficiently confident that no assertions will be hit anyway, but also introduces the risk that a module explodes for no longer asserted reasons.")]),e._v(" "),a("h2",{attrs:{id:"overriding-abort"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overriding-abort"}},[e._v("#")]),e._v(" Overriding "),a("code",[e._v("abort")])]),e._v(" "),a("p",[e._v("As mentioned above, assertions require that an implementation of the "),a("code",[e._v("abort")]),e._v(" interface is present, which by default is imported as "),a("code",[e._v("abort")]),e._v(" from within the "),a("code",[e._v("env")]),e._v(" module, handling aborts externally. This can be overridden by specifying a custom abort handler through "),a("code",[e._v("--use abort=assembly/index/myAbort")]),e._v(" (here: a function named "),a("code",[e._v("myAbort")]),e._v(" in "),a("code",[e._v("assembly/index.ts")]),e._v(") or the abort interface can be disabled completely (just trapping with an "),a("code",[e._v("unreachable")]),e._v(") through "),a("code",[e._v("--use abort=")]),e._v(". The signature of the abort function, if overridden, is:")]),e._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("abort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n  message"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("string")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  fileName"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("string")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  lineNumber"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("u32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  columnNumber"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("u32")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("void")]),e._v("\n")])])]),a("h2",{attrs:{id:"manual-tracing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manual-tracing"}},[e._v("#")]),e._v(" Manual tracing")]),e._v(" "),a("p",[e._v("The standard library provides a relatively basic "),a("code",[e._v("trace")]),e._v(" utility function that is imported from the host and understood by the "),a("RouterLink",{attrs:{to:"/loader.html"}},[e._v("loader")]),e._v(". For example")],1),e._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("trace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"HERE"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" otherValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),a("p",[e._v("will, by default, call the "),a("code",[e._v("trace")]),e._v(" function imported from the "),a("code",[e._v("env")]),e._v(" module with a string message and two arbitrary values that can be anything convertible to an "),a("code",[e._v("f64")]),e._v(". The loader for example will log the output to console. Similar to "),a("RouterLink",{attrs:{to:"/debugging.html#overriding-abort"}},[e._v("overriding abort")]),e._v(", the implementation can be overridden using the "),a("code",[e._v("--use")]),e._v(" compiler option. Signature of the trace function is:")],1),e._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("trace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n  message"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("i32")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// number of given parameters a0 to a4")]),e._v("\n  a0"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("f64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  a1"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("f64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  a2"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("f64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  a3"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("f64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  a4"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("f64")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("void")]),e._v("\n")])])]),a("p",[e._v("One thing to note here is that calling "),a("code",[e._v("trace")]),e._v(" in top-level statements can lead to situations where "),a("RouterLink",{attrs:{to:"/memory.html#accessing-memory-during-instantiation"}},[e._v("memory is accessed during instantiation")]),e._v(", hence not being able to read the message without taking the respective precautions.")],1),e._v(" "),a("h2",{attrs:{id:"breakpoints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#breakpoints"}},[e._v("#")]),e._v(" Breakpoints")]),e._v(" "),a("p",[e._v("Some JavaScript engines also support adding break points when running WebAssembly binaries. Please consult your engine's documentation.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://developers.google.com/web/tools/chrome-devtools/javascript/breakpoints",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chrome"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Tools/Debugger/How_to/Set_a_breakpoint",target:"_blank",rel:"noopener noreferrer"}},[e._v("Firefox"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://nodejs.org/api/debugger.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("node.js"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://support.apple.com/de-de/guide/safari-developer/dev5e4caf347/mac",target:"_blank",rel:"noopener noreferrer"}},[e._v("Safari"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"additional-resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#additional-resources"}},[e._v("#")]),e._v(" Additional resources")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://medium.com/@torch2424/making-web-assembly-even-faster-debugging-web-assembly-performance-with-assemblyscript-and-a-4d30cb6463f1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Making Web Assembly Even Faster: Debugging Web Assembly Performance with AssemblyScript and a Gameboy Emulator"),a("OutboundLink")],1),e._v(" (Aaron Turner, March 2018)")])])])}),[],!1,null,null,null);t.default=r.exports}}]);