//1 carring recarstion
// const fun = (a) => {
//     console.log(a);
//     return (b) => {
//         if (b) {
//             return fun(a + b);
//         } else {
//             return a // console.log(a);
//         }
//     }
// }
// console.log(fun(2)(4)(5)(6)(7)(8)(9)());


// const fun = (a) => {
//     let resukt = a || 0

//     return (function inner(b) {

//         if (!b) {
//             return resukt
//         } else {
//             resukt += b

//             return inner
//         }
//     })
// }
// console.log(fun(2)(4)(5)(6)(7)(8)(9)()); //41




// //2
// obj1={
//     name:"tushar",
//     age:20,
//     add:"cha"
//   }

//   const fun=(a, b)=>{
//     if(a in obj1){
//        obj1[a]=b;
//     }else{
//       obj1[a]=b;
//     }
//   }

//   fun("age", 40);
//   console.log(obj1);
//   fun("dist", "jha");
//   console.log(obj1);


//3
// const outDiv= document.getElementById("outer_div");
// const inDiv=document.getElementById("in_div");
// const btn=document.getElementById("btn");
// //bubbling events
// btn.addEventListener("click",()=>{
//     console.log("button clicked");
// })
// inDiv.addEventListener("click",()=>{
//     console.log("Inner div clicked");
// })
// outDiv.addEventListener("click",()=>{
//     console.log("Outer div clicked");
// })

// //chapters event
// btn.addEventListener("click",()=>{
//     console.log("button clicked");
// }, true)
// inDiv.addEventListener("click",()=>{
//     console.log("Inner div clicked");
// }, true)
// outDiv.addEventListener("click",()=>{
//     console.log("Outer div clicked");
// }, true)


//4    **How would you check if a number is an integer?
// function isInt(num) {
//     return num % 1 === 0;
//   }

//   console.log(isInt(4)); // true
//   console.log(isInt(12.2)); // false
//   console.log(isInt(0.3)); // false

//5
// const p1 = new Promise((reslove, reject) => {
//     return reslove(8);
// })
// const p2 = new Promise((reslove, reject) => {
//     return reslove("error");
// })

// p1
//     .then(data => console.log(data))
//     .catch(err => console.log(err));
//     p2
//     .then(data =>{})
//     .catch(err => console.log(err));

// Promise.all([p1, p2])
//     .then(datas => console.log(datas))
//     .catch(err => console.log(err));

//6 finde 1 duplicat value in array
// let arr=[1, 3,9,2,6,9,10,1,2];
// let ans =arr.filter((ele, ind)=>arr.indexOf(ele)!==ind);
// console.log(ans);

//7 Find the frequency of elements in array
// let arr=[2,4,2,8,6,3,4,2,7,4,8,2];
// arr.map((ele, ind)=>{
//     if(arr.indexOf(ele)!==ind){

//     }
// })

//-------------------------------------------------------------------------------------------------------
//8
// //Deep Equal check of a object
// function deepEqual(obj1, obj2) {

//     if (obj1 === obj2) return true;

//     if (
//         obj1 == null ||
//         typeof obj1 !== 'object' ||
//         obj2 == null ||
//         typeof obj2 !== 'object'
//     )
//         return false;

//     let keys1 = Object.keys(obj1);
//     let keys2 = Object.keys(obj2);

//     if (keys1.length !== keys2.length) return false;

//     for (let key of keys1) {
//         if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) return false;
//     }

//     return true;
// }

// // Example usage
// const object1 = {
//     name: 'John',
//     age: 30,
//     address: {
//         city: 'New York',
//         zip: '10001',
//     },
// };

// const object2 = {
//     name: 'John',
//     age: 30,
//     address: {
//         city: 'New York',
//         zip: '10001',
//     },
// };
// console.log(deepEqual(object1, object2)); // true

//-------------------------------------------------------------------------------------------------------
//9
// // JavaScript Memoization Code (Cache size = 5)
// function memoizeMathOperation(fn, cacheLimit = 5) {
//     const cache = new Map(); // preserves insertion order

//     return function (...args) {
//         const key = JSON.stringify(args);

//         // Return cached value if present
//         if (cache.has(key)) {
//             console.log("Returning from cache:", key);
//             return cache.get(key);
//         }

//         // Calculate result
//         const result = fn(...args);

//         // Store in cache
//         cache.set(key, result);
//         console.log("Calculated and cached:", key);

//         // Remove oldest entry if cache exceeds limit
//         if (cache.size > cacheLimit) {
//             const oldestKey = cache.keys().next().value;
//             cache.delete(oldestKey);
//             console.log("Cache limit exceeded, removed:", oldestKey);
//         }

//         return result;
//     };
// }


// const add = (a, b) => a + b;
// const multiply = (a, b) => a * b;

// const memoizedAdd = memoizeMathOperation(add);
// const memoizedMultiply = memoizeMathOperation(multiply);

// // Usage
// console.log(memoizedAdd(2, 3)); // calculated → 5
// console.log(memoizedAdd(2, 3)); // cached → 5

// console.log(memoizedMultiply(4, 5)); // calculated → 20
// console.log(memoizedMultiply(4, 5)); // cached → 20

//-------------------------------------------------------------------------------------------------------
//10
//Below is a custom JavaScript function to deeply merge two nested objects, similar to Object.assign,
// but with deep (recursive) merging and without mutating the original objects.

// function deepMerge(obj1, obj2) {
//     const result = Array.isArray(obj1) ? [] : {};

//     // Copy values from obj1
//     for (const key in obj1) {
//         if (Object.prototype.hasOwnProperty.call(obj1, key)) {
//             if (
//                 typeof obj1[key] === "object" &&
//                 obj1[key] !== null &&
//                 !Array.isArray(obj1[key])
//             ) {
//                 result[key] = deepMerge(obj1[key], {});
//             } else {
//                 result[key] = obj1[key];
//             }
//         }
//     }

//     // Merge values from obj2
//     for (const key in obj2) {
//         if (Object.prototype.hasOwnProperty.call(obj2, key)) {
//             if (
//                 typeof obj2[key] === "object" &&
//                 obj2[key] !== null &&
//                 !Array.isArray(obj2[key])
//             ) {
//                 result[key] = deepMerge(result[key] || {}, obj2[key]);
//             } else {
//                 result[key] = obj2[key]; // overwrite
//             }
//         }
//     }

//     return result;
// }

// //obje1  define
// const objA = {
//     name: "Tushar",
//     address: {
//         city: "Kolkata",
//         pin: 700001
//     },
//     skills: ["JS", "React"]
// };

// //obje2  define
// const objB = {
//     age: 25,
//     address: {
//         pin: 700091,
//         country: "India"
//     },
//     skills: ["Node"]
// };

// // //asighn function call
// const merged = deepMerge(objA, objB);
// console.log(merged);


//11
//sorts methods


//-------------------------------------------------------------------------------------------------------
//12
//custom Array flat method
// or flat method polyfill

// if (!Array.prototype.myFlat) {
//     Array.prototype.myFlat = function (depth = 1) {
//         if (this == null) {
//             throw new TypeError("Array.prototype.myFlat called on null or undefined");
//         }

//         const result = [];

//         function flatten(array, depth) {
//             for (let i = 0; i < array.length; i++) {
//                 if (!(i in array)) continue; // skip empty slots

//                 const value = array[i];

//                 if (Array.isArray(value) && depth > 0) {
//                     flatten(value, depth - 1);
//                 } else {
//                     result.push(value);
//                 }
//             }
//         }

//         flatten(this, depth);
//         return result;
//     };
// }


// const arr = [1, [2, 3], [4, [5]]];
// console.log(arr.myFlat());
// // [1, 2, 3, 4, [5]]

// console.log(arr.myFlat(2));
// [1, 2, 3, 4, 5]

// ✔️ Returns new array
// ✔️ Does not mutate original array
// ✔️ Supports depth parameter
// ✔️ Skips holes in sparse arrays
// ✔️ Matches native Array.flat behavior
