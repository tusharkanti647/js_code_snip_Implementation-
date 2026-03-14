//1
//object assign polyfill

// let obj1 = { a: 1, b: 2 }
// let obj2 = { c: 3, d: 4 }
// let obj3 = { d: 5, e: 6 }
// let obj = Object.assign(obj1, obj2, obj3)
// console.log(obj, obj1)

// if (!Object.prototype.myAssign) {
//     Object.prototype.myAssign = function (resultObj, ...args) {

//         for (let i = 0; i < args.length; i++) {
//             for (let key in args[i]) {
//                 if (args[i].hasOwnProperty(key))
//                     resultObj[key] = args[i][key]
//             }
//         }

//         return resultObj
//     }
// }


// let obj = Object.myAssign({}, obj1, obj2, obj3)
// console.log(obj, obj1)

//2
//polyfile of object.create() method
//----------------------------------------------------------------------------------------------------
/*
Creates a new object
Sets its prototype to the provided object
Optionally defines properties
Does not run any constructor
*/
// if (typeof Object.myCreate !== "function") {
//   Object.myCreate = function (proto, propertiesObject) {
//     // Step 1: proto must be object or null
//     if (proto !== null && typeof proto !== "object") {
//       throw new TypeError("Object prototype may only be an Object or null");
//     }

//     // Step 2: create a temporary constructor
//     function F() {}
//     F.prototype = proto;

//     // Step 3: create object with desired prototype
//     const obj = new F();

//     // Step 4: define properties if provided
//     if (propertiesObject !== undefined) {
//       Object.defineProperties(obj, propertiesObject);
//     }

//     return obj;
//   };
// }

//Basic prototype inheritance
// const person = {
//   greet() {
//     return "Hello";
//   }
// };

// const user = Object.myCreate(person);
// console.log(user.greet()); // Hello
// console.log(Object.getPrototypeOf(user) === person); // true

// //With null prototype
// const obj = Object.myCreate(null);
// console.log(Object.getPrototypeOf(obj)); // null

// // With property descriptors
// const animal = {
//   type: "animal"
// };

// const dog = Object.myCreate(animal, {
//   name: {
//     value: "Tommy",
//     writable: true,
//     enumerable: true
//   }
// });

// console.log(dog.name); // Tommy
// console.log(dog.type); // animal

//3
// object deep clone method
//----------------------------------------------------------------------------------------------------
// function deepClone(obj, seen = new WeakMap()) {
//     if (obj === null || typeof obj !== "object") return obj;

//     if (obj instanceof Date) return new Date(obj);
//     if (obj instanceof Map) {
//         const map = new Map();
//         obj.forEach((v, k) => map.set(k, deepClone(v, seen)));
//         return map;
//     }
//     if (obj instanceof Set) {
//         const set = new Set();
//         obj.forEach(v => set.add(deepClone(v, seen)));
//         return set;
//     }

//     if (seen.has(obj)) return seen.get(obj);

//     const clone = Array.isArray(obj) ? [] : {};
//     seen.set(obj, clone);

//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             clone[key] = deepClone(obj[key], seen);
//         }
//     }

//     return clone;
// }


// //exampel used
// // const a = { x: { y: 1 } };
// // const b = deepClone(a);

// // b.x.y = 2;
// // console.log(a.x.y); // 1 ✅

// //circular object
// const a = {};
// a.self = a;

// const b = deepClone(a);
// console.log(b.self === b); // true ✅

//4
//object deep compare method
//----------------------------------------------------------------------------------------------------
// function deepEqual(a, b, seen = new WeakMap()) {
//     // Same reference or primitive value
//     if (a === b) return true;

//     // Handle null & non-objects
//     if (a === null || b === null) return false;
//     if (typeof a !== "object" || typeof b !== "object") return false;

//     // check the object constractor type array
//     if (a.constructor !== b.constructor) return false;

//     // check the Date object same or not, here getTime() method give me milisecond value of the date object
//     if (a instanceof Date) return a.getTime() === b.getTime();
//     if (a instanceof RegExp) return a.toString() === b.toString();

//     if (a instanceof Map) {
//         if (a.size !== b.size) return false;
//         for (let [key, val] of a) {
//             if (!b.has(key) || !deepEqual(val, b.get(key), seen)) return false;
//         }
//         return true;
//     }

//     if (a instanceof Set) {
//         if (a.size !== b.size) return false;
//         for (let val of a) {
//             if (![...b].some(v => deepEqual(v, val, seen))) return false;
//         }
//         return true;
//     }

//     //Circular Reference check
//     if (seen.has(a)) return seen.get(a) === b;
//     seen.set(a, b);

//     const keysA = Object.keys(a);
//     const keysB = Object.keys(b);

//     if (keysA.length !== keysB.length) return false;

//     for (let key of keysA) {
//         if (!deepEqual(a[key], b[key], seen)) return false;
//     }

//     return true;
// }


// //test
// const x = { a: { b: 'yy' } };
// x.self = x;

// const y = { a: { b: 'yy' } };
// y.self = y;

// console.log(deepEqual(x, y));

//4
//deeep merge of two object
//----------------------------------------------------------------------------------------------------


// function deepMerge(target, source) {
//     for (const key in source) {
//         if (source[key] instanceof Object && key in target) {
//             Object.assign(source[key], deepMerge(target[key], source[key]));
//         }
//     }
//     Object.assign(target || {}, source);
//     return target;
// }

// const obj1 = { a: 1, b: { x: 10, y: 20 } };
// const obj2 = { b: { y: 30, z: 40 }, c: 3 };

// const mergedObj = deepMerge(obj1, obj2);

// console.log(mergedObj); // Output: { a: 1, b: { x: 10, y: 30, z: 40 }, c: 3 }


//5
//object deep compare clone
//question link https://www.greatfrontend.com/questions/javascript/deep-clone
//----------------------------------------------------------------------------------------------------
// export default function deepClone(value) {
//     // Primitive values or null
//     if (value === null || typeof value !== "object") {
//         return value;
//     }

//     // Array
//     if (Array.isArray(value)) {
//         return value.map((item) => deepClone(item));
//     }

//     // Object
//     const cloned = {};
//     for (const key in value) {
//         cloned[key] = deepClone(value[key]);
//     }

//     return cloned;
// }

//exampel used 1
// const obj1 = { user: { role: "admin" } };

// const clonedObj1 = deepClone(obj1);

// clonedObj1.user.role = "guest";

// console.log(clonedObj1.user.role); // guest
// console.log(obj1.user.role);       // admin

// //exampel used 2
// const obj2 = { foo: [{ bar: "baz" }] };

// const clonedObj2 = deepClone(obj2);

// obj2.foo[0].bar = "bax";

// console.log(obj2.foo[0].bar);   // bax
// console.log(clonedObj2.foo[0].bar); // baz


//6
//JSON.stringyfy method
//question link https://www.greatfrontend.com/questions/javascript/json-stringify?language=js&tab=coding
//----------------------------------------------------------------------------------------------------
// export default function jsonStringify(value) {

//     // null
//     if (value === null) {
//         return "null";
//     }

//     // number or boolean
//     if (typeof value === "number" || typeof value === "boolean") {
//         return String(value);
//     }

//     // string
//     if (typeof value === "string") {
//         return '"' + value + '"';
//     }

//     // array
//     if (Array.isArray(value)) {
//         let result = value.map(v => jsonStringify(v));
//         return "[" + result.join(",") + "]";
//     }

//     // object
//     if (typeof value === "object") {
//         let result = Object.keys(value).map(key => {
//             return '"' + key + '":' + jsonStringify(value[key]);
//         });

//         return "{" + result.join(",") + "}";
//     }
// }

// //use
// console.log(jsonStringify({ foo: 'bar' }));
// // '{"foo":"bar"}'

// console.log(jsonStringify({ foo: 'bar', bar: [1, 2, 3] }));
// // '{"foo":"bar","bar":[1,2,3]}'

// jsonStringify(true);
// // "true"

// jsonStringify("foo");
// // '"foo"'
// console.log(jsonStringify([1, 2, true, undefined, 'hgg', 77]));


//--------------------------------------------------------------------------------------------------------
//7
//check the bello link question
//https://www.greatfrontend.com/questions/javascript/html-serializer?language=js&tab=coding&qns_slideout=true

//--------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------
//8 for object squje
//check the bello link question
//https://www.greatfrontend.com/questions/javascript/squash-object?language=js&tab=coding

//--------------------------------------------------------------------------------------------------------

