(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{234:function(n,e,s){"use strict";s.r(e);var t=s(6),a=Object(t.a)({},(function(){var n=this,e=n.$createElement,s=n._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"snippets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#snippets"}},[n._v("#")]),n._v(" Snippets")]),n._v(" "),s("p",[n._v("Small, copy-pastable AssemblyScript examples using common syntax and patterns.")]),n._v(" "),s("h2",{attrs:{id:"class"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#class"}},[n._v("#")]),n._v(" Class")]),n._v(" "),s("p",[n._v("An AssemblyScript snippet on using Classes, their instantiation, and their static properties.")]),n._v(" "),s("div",{staticClass:"language-editor extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("#!runtime=stub\nclass Animal<T> {\n  static ONE: i32 = 1;\n  static add(a: i32, b: i32): i32 { return a + b + Animal.ONE; }\n\n  two: i16 = 2; // 6\n  instanceSub<T>(a: T, b: T): T { return a - b + <T>Animal.ONE; } // tsc does not allow this\n}\n\nexport function staticOne(): i32 {\n  return Animal.ONE;\n}\n\nexport function staticAdd(a: i32, b: i32): i32 {\n  return Animal.add(a, b);\n}\n\nexport function instanceTwo(): i32 {\n  let animal = new Animal<i32>();\n  return animal.two;\n}\n\nexport function instanceSub(a: f32, b: f32): f32 {\n  let animal = new Animal<f32>();\n  return animal.instanceSub<f32>(a, b);\n}\n\n\n#!html\n<script>\nconst log = console.log;\nconsole.log = (...args) => {\n  log(...args);\n  let str = '';\n  args.forEach(arg => {\n    if (typeof arg == 'object') {\n      str += `${JSON.stringify(arg, null, 2)}<br/>`;\n    } else {\n      str += `${arg}<br/>`;\n    }\n  });\n  document.body.innerHTML += `<div>Log: ${str}</div>`;\n}\n\nloader.instantiate(module_wasm, { /* imports */ })\n  .then(({ exports }) => {\n    console.log(exports.staticOne());\n    console.log(exports.staticAdd(1, 2));\n    console.log(exports.instanceTwo());\n    console.log(exports.instanceSub(3.0, 1.0));\n  })\n<\/script>\n")])])]),s("h2",{attrs:{id:"extending-classes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#extending-classes"}},[n._v("#")]),n._v(" Extending Classes")]),n._v(" "),s("p",[n._v("Extending classes and general Object Orientated Programming (OOP) in AssemblyScript")]),n._v(" "),s("div",{staticClass:"language-editor extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("#!runtime=stub\n\nclass BaseClass {\n  static staticProp: i32 = 24;\n  instanceProp: i32;\n\n  constructor(value: i32) {\n    this.instanceProp = value;\n  }\n\n  add(a: i32, b: i32): i32 {\n    return a + b;\n  }\n}\n\nclass ExtendedClass extends BaseClass {\n\n  extendedProp: i32;\n\n  constructor(extendedValue: i32) {\n    super(1);\n\n    this.extendedProp = extendedValue;\n  }\n\n  add(a: i32): i32 {\n    return super.add(a, this.extendedProp + super.instanceProp);\n  }\n}\n\nexport function getStaticProp(): i32 {\n  return ExtendedClass.staticProp;\n}\n\nexport function overloadAdd(value: i32): i32 {\n  let extendedClass = new ExtendedClass(value);\n  return extendedClass.add(24);\n}\n\n#!html\n<script>\nconst log = console.log;\nconsole.log = (...args) => {\n  log(...args);\n  let str = '';\n  args.forEach(arg => {\n    if (typeof arg === 'object') {\n      str += `${JSON.stringify(arg, null, 2)}<br/>`;\n    } else {\n      str += `${arg}<br/>`;\n    }\n  });\n  document.body.innerHTML += `<div>Log: ${str}</div>`;\n}\n\nloader.instantiate(module_wasm, { /* imports */ })\n.then(({ exports }) => {\n  console.log(`getStaticProp: ${exports.getStaticProp()}`);\n  console.log(`overloadAdd: ${exports.overloadAdd(24)}`);\n})\n<\/script>\n")])])]),s("h2",{attrs:{id:"handling-null"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#handling-null"}},[n._v("#")]),n._v(" Handling Null")]),n._v(" "),s("p",[n._v("Handling Null as a union type for optional return values and simulating "),s("code",[n._v("try/catch")]),n._v(" for errors in AssemblyScript")]),n._v(" "),s("div",{staticClass:"language-editor extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('#!runtime=stub\nclass MyValue {\n  value: i32;\n\n  constructor(value: i32) {\n    this.value = value;\n  }\n}\n\n// Using a class type here, as some types are not nullable\nfunction getMyValue(isAble: boolean): MyValue | null {\n  let myValue = new MyValue(24);\n  if (isAble) {\n    return myValue;\n  } else {\n    return null;\n  }\n}\n\nexport function positiveAddWithMyValue(a: i32): i32 {\n  let myValue = getMyValue(a > 0);\n  if (myValue == null) {\n    return -1;\n  } else {\n    return a + myValue.value;\n  }\n}\n\n#!html\n<script>\nconst log = console.log;\nconsole.log = (...args) => {\n  log(...args);\n  let str = \'\';\n  args.forEach(arg => {\n    if (typeof arg == \'object\') {\n      str += `${JSON.stringify(arg, null, 2)}<br/>`;\n    } else {\n      str += `${arg}<br/>`;\n    }\n  });\n  document.body.innerHTML += `<div>Log: ${str}</div>`;\n}\n\nloader.instantiate(module_wasm, { /* imports */ })\n.then(({ exports }) => {\n  if(exports.positiveAddWithMyValue(24) > -1) {\n    console.log("Add was successful")\n  } else {\n    console.log("Could not add 24");\n  }\n\n  if(exports.positiveAddWithMyValue(-1) > -1) {\n  console.log("Add was successful")\n  } else {\n  console.log("Could not add -1");\n  }\n});\n<\/script>\n')])])]),s("h2",{attrs:{id:"switch-case"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#switch-case"}},[n._v("#")]),n._v(" Switch Case")]),n._v(" "),s("p",[n._v("Using "),s("code",[n._v("switch case")]),n._v(" statements in AssemblyScript.")]),n._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[n._v("NOTE")]),n._v(" "),s("p",[n._v("Currently, the switch conditions (case values) are implicitly converted to u32, i.e. switching over strings or similar is not yet supported.")])]),n._v(" "),s("div",{staticClass:"language-editor extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("#!runtime=stub\nexport function switchSurprise(a: i32): i32 {\n  let response = -1;\n\n  // Using a mix of braces and not using braces\n  // to show that both syntaxes are supported here.\n  switch (a) {\n    case 1:\n      response = 100;\n      break;\n    case 2: {   // Cases can also use braces\n      response = 200;\n      break;\n    }\n    case 3:\n      // Fall Through to the next case\n    case 4:\n      response = 400;\n      break;\n    default: {\n      response = 0;\n    }\n  }\n\n  return response;\n}\n\n#!html\n<script>\nconst log = console.log;\nconsole.log = (...args) => {\n  log(...args);\n  let str = '';\n  args.forEach(arg => {\n    if (typeof arg == 'object') {\n      str += `${JSON.stringify(arg, null, 2)}<br/>`;\n    } else {\n      str += `${arg}<br/>`;\n    }\n  });\n  document.body.innerHTML += `<div>Log: ${str}</div>`;\n}\n\nloader.instantiate(module_wasm, { /* imports */ })\n.then(({ exports }) => {\n  console.log(`switchSurprise(1) : ${exports.switchSurprise(1)}`);\n  console.log(`switchSurprise(2) : ${exports.switchSurprise(2)}`);\n  console.log(`switchSurprise(3) : ${exports.switchSurprise(3)}`);\n  console.log(`switchSurprise(4) : ${exports.switchSurprise(4)}`);\n  console.log(`switchSurprise(57) : ${exports.switchSurprise(57)}`);\n});\n<\/script>\n")])])]),s("h2",{attrs:{id:"ternary-if-else"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ternary-if-else"}},[n._v("#")]),n._v(" Ternary if-else")]),n._v(" "),s("p",[n._v("Using Ternary if-else in AssemblyScript")]),n._v(" "),s("div",{staticClass:"language-editor extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("#!runtime=stub\nexport function isTrue(a: i32): i32 {\n  let response = a > 0 ? 1 : 0;\n  return response;\n}\n\n#!html\n<script>\nconst log = console.log;\nconsole.log = (...args) => {\n  log(...args);\n  let str = '';\n  args.forEach(arg => {\n    if (typeof arg == 'object') {\n      str += `${JSON.stringify(arg, null, 2)}<br/>`;\n    } else {\n      str += `${arg}<br/>`;\n    }\n  });\n  document.body.innerHTML += `<div>Log: ${str}</div>`;\n}\n\nloader.instantiate(module_wasm, { /* imports */ })\n.then(({ exports }) => {\n  console.log(`is 24 greater than 0? ${exports.isTrue(24) > 0 ? true : false}`);\n  console.log(`is -3 greater than 0? ${exports.isTrue(-3) > 0 ? true : false}`);\n});\n<\/script>\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);