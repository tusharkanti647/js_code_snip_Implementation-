//1
//array includes() method polyfilles

// if (!Array.prototype.myIncludes) {
//     Array.prototype.myIncludes = function (element) {
//         let length = this.length
//         for (let i = 0; i < length; i++) {
//             if (this[i] === element) return true
//         }

//         return false
//     }
// }

// some advance array.includes polifilles
// if (!Array.prototype.myIncludes) {
//     Array.prototype.myIncludes = function (searchElement, fromIndex = 0) {
//         const arr = this;
//         const len = arr.length;

//         if (len === 0) return false;

//         let start = fromIndex >= 0 ? fromIndex : Math.max(len + fromIndex, 0);

//         for (let i = start; i < len; i++) {
//             // SameValueZero comparison (handles NaN)
//             if (arr[i] === searchElement ||
//                 (Number.isNaN(arr[i]) && Number.isNaN(searchElement))) {
//                 return true;
//             }
//         }

//         return false;
//     };
// }

// let arr = [1, 2, 3, 4, 5, 6]
// console.log(arr.myIncludes(4)) //true
// console.log(arr.myIncludes(8)) //false


//---------------------------------------------------------------------------------------------------------
//2
//array at() method polyfilles

// let arr = [1, 2, 3, 4, 5, 6]
// console.log(arr.at(4)) //5
// console.log(arr.at(-3)) //4
// console.log(arr.at(10)) //undefined
// console.log(arr.at(-8)) //undefined

// if (!Array.prototype.myAt) {
//     Array.prototype.myAt = function (index) {
//         let length = this.length
//         let ind = index < 0 ? index + length : index

//         if (ind < 0 || ind >= length) {
//             return undefined
//         }
//         return this[ind]
//     }
// }




// console.log(arr.myAt(4)) //5
// console.log(arr.myAt(-3)) //4
// console.log(arr.myAt(10)) //undefined
// console.log(arr.myAt(-10)) //undefined




//---------------------------------------------------------------------------------------------------------
//3
//array map() method polyfilles

//this is map function work
// let arr = [1, 2, 3, 4, 5, 6]
// let result = arr.map((ele, ind, manArray) => {
//     console.log('Element: ', ele, ', Index: ', ind, ', itretedArray: ', manArray)//Element:  1 , Index:  0 , itretedArray:  [ 1, 2, 3, 4, 5, 6 ]
//     return ele * 2
// })
// console.log(result) //[ 2, 4, 6, 8, 10, 12 ]


//this is my map function
// if (!Array.prototype.myMap) {
//     Array.prototype.myMap = function (callBackFun) {

//         let result = []
//         for (let i = 0; i < this.length; i++) {
//             result[i] = callBackFun(this[i], i, this)
//         }

//         return result
//     }
// }


//advance
// if (!Array.prototype.myMap) {
//   Array.prototype.myMap = function (callback, thisArg) {

//     if (typeof callback !== "function") {
//       throw new TypeError(callback + " is not a function");
//     }

//     const arr = this;
//     const len = arr.length;
//     const result = new Array(len);

//     for (let i = 0; i < len; i++) {
//       if (i in arr) { // handle sparse arrays
//         result[i] = callback.call(thisArg, arr[i], i, arr);
//       }
//     }

//     return result;

//   };
// }
// let arr = [1, 2, 3, 4, 5, 6]
// let result = arr.myMap((ele, ind, manArray) => {
//     console.log('Element: ', ele, ', Index: ', ind, ', itretedArray: ', manArray)//Element:  1 , Index:  0 , itretedArray:  [ 1, 2, 3, 4, 5, 6 ]
//     return ele * 2
// })
// console.log(result) //[ 2, 4, 6, 8, 10, 12 ]



//---------------------------------------------------------------------------------------------------------
//3
//array reduce() method polyfilles

//this is map function work
// let arr = [1, 2, 3, 4, 5, 6]
// let result = arr.reduce((accumaltor, element, index, manArray) => {
//     console.log('accumaltor: ', accumaltor, ', Element: ', element, ', Index: ', index, ', itretedArray: ', manArray, )//accumaltor:  15 , Element:  6 , Index:  5 , itretedArray:  [ 1, 2, 3, 4, 5, 6 ]
//     return accumaltor + element
// }, 0)
// console.log(result) //21

// if (!Array.prototype.myReduce) {
//     Array.prototype.myReduce = function (callbackFun, initialValue) {
//         for (let i = 0; i < this.length; i++) {
//             initialValue = callbackFun(initialValue, this[i], i, this)
//         }

//         return initialValue
//     }
// }

// let arr = [1, 2, 3, 4, 5, 6]
// let result = arr.myReduce((accumaltor, element, index, manArray) => {
//     console.log('accumaltor: ', accumaltor, ', Element: ', element, ', Index: ', index, ', itretedArray: ', manArray,)//accumaltor:  15 , Element:  6 , Index:  5 , itretedArray:  [ 1, 2, 3, 4, 5, 6 ]
//     return accumaltor + element
// }, 0)
// console.log(result) //21


//4
//pollifile of sort method
//----------------------------------------------------------------------------------------------------
// if (!Array.prototype.mySort) {
//     Array.prototype.mySort = function (compareFn) {
//         const arr = this;
//         const len = arr.length;

//         // Default compare function (like native sort)
//         const compare =
//             typeof compareFn === "function"
//                 ? compareFn
//                 : (a, b) => String(a).localeCompare(String(b));

//         /*
// localeCompare() is a built-in JavaScript string method used to compare two strings based on language (locale) rules, not simple ASCII order.

// console.log("a".localeCompare("b")); // -1
// console.log("b".localeCompare("a")); // 1
// console.log("a".localeCompare("a")); // 0

// console.log("D".localeCompare("a")); // 1
//         */

//         for (let i = 0; i < len - 1; i++) {
//             for (let j = 0; j < len - i - 1; j++) {
//                 if (compare(arr[j], arr[j + 1]) > 0) {
//                     // swap
//                     const temp = arr[j];
//                     arr[j] = arr[j + 1];
//                     arr[j + 1] = temp;
//                 }
//             }
//         }
//         return arr;
//     };
// }

// //default sort is a string sort
// const arr = [10, 2, 1, 20];
// arr.mySort();
// console.log(arr);
// // ["1", "10", "2", "20"]

// //numbaring sort
// const nums = [10, 2, 1, 20];
// nums.mySort((a, b) => a - b);
// console.log(nums);
// // [1, 2, 10, 20]



//5
//polyfile of slice method
//----------------------------------------------------------------------------------------------------
// let arr = [8, 9, 10, 11, 12]
// let arr1 = arr.slice(-3, -1)
// console.log(arr, arr1) //[ 8, 9, 10, 11, 12 ] [ 10, 11 ]
// let arr2 = arr.slice(undefined, undefined)
// console.log(arr2) //[ 8, 9, 10, 11, 12 ]
// let arr3 = arr.slice(undefined, null)
// console.log(arr3) //[  ]
// let arr4 = arr.slice(null, null)
// console.log(arr4) //[  ]
// let arr5 = arr.slice(null, undefined)
// console.log(arr5) //[ 8, 9, 10, 11, 12  ]
// let arr6 = arr.slice(3, 7)
// console.log(arr6) //[ 11, 12  ]



// if (!Array.prototype.mySlice) {
//     Array.prototype.mySlice = function (start, end) {
//         const arr = this;
//         const len = arr.length;
//         const result = [];

//         // Handle default values
//         let s = start ?? 0;
//         let e = end ?? len;

//         // Handle negative indexes
//         if (s < 0) s = Math.max(len + s, 0);
//         if (e < 0) e = Math.max(len + e, 0);

//         // Clamp to array bounds
//         s = Math.min(s, len);
//         e = Math.min(e, len);

//         for (let i = s; i < e; i++) {
//             result.push(arr[i]);
//         }

//         return result;
//     };
// }

// let arr = [8, 9, 10, 11, 12]
// let arr1 = arr.mySlice(1, 3)
// console.log(arr, arr1)

//6
//polyfile of flat method
//----------------------------------------------------------------------------------------------------
// let arr = [6, 7, [8, 9], [[11, 12, [44, 2]]]]
// console.log(arr.flat())



/* Creates a new array
Flattens nested arrays
Accepts a depth (default = 1)
Does not mutate the original array

*/

// if (!Array.prototype.myFlat) {
//     Array.prototype.myFlat = function (depth = 1) {
//         const result = [];

//         function flatten(arr, d) {
//             for (let i = 0; i < arr.length; i++) {
//                 const value = arr[i];

//                 if (Array.isArray(value) && d > 0) {
//                     flatten(value, d - 1);
//                 } else {
//                     result.push(value);
//                 }
//             }
//         }

//         flatten(this, depth);
//         return result;
//     };
// }

// console.log(arr.myFlat(0))


//7
//polyfile of filter method
//----------------------------------------------------------------------------------------------------

/*
Returns a new array
Does NOT mutate the original array
Iterates over each element
Keeps elements where callback returns true
Skips empty slots (sparse arrays)
*/

// if (!Array.prototype.myFilter) {
//     Array.prototype.myFilter = function (callback, thisArg) {
//         if (typeof callback !== "function") {
//             throw new TypeError(callback + " is not a function");
//         }

//         const result = [];
//         const arr = this;

//         for (let i = 0; i < arr.length; i++) {
//             // skip empty slots
//             if (!(i in arr)) continue;

//             if (callback.call(thisArg, arr[i], i, arr)) {
//                 result.push(arr[i]);
//             }
//         }

//         return result;
//     };
// }

// const nums = [1, 2, 3, 4, 5];
// const even = nums.myFilter(n => n % 2 === 0);
// console.log(even);
// // [2, 4]

// const checker = {
//     min: 3
// };

// //used of thisArg
// const result = nums.myFilter(function (n) {
//     return n >= this.min;
// }, checker);

// console.log(result);
// [3, 4, 5]