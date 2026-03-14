//-----------------------------------------------------------------------------------------------------------
//1
// Write a function in JavaScript that checks if a given string is a valid IPv4 address.

// function isValidIPv4(str) {
//   const octets = str.split(".");
//   if (octets.length !== 4) return false;
//   for (let i = 0; i < octets.length; i++) {
//     const octet = octets[i];
//     if (isNaN(octet) || octet < 0 || octet > 255) return false;
//     if (octet.length > 1 && octet[0] === "0") return false;
//   }
//   return true;
// }

// // Example usage:
// console.log(isValidIPv4("192.168.0.1")); // Output: true
// console.log(isValidIPv4("256.0.0.0")); // Output: false

/* Explanation:

An IPv4 address consists of four octets separated by periods, with each octet being a
number between 0 and 255.

The function first splits the string into an array of octets using the split() method.

It then checks if the array has exactly four elements and if each element is a number between 0 and 255.

It also checks if each octet does not start with a 0 unless it is a single-digit octet.

If any of these conditions are not met, the function returns false. Otherwise, it returns true.

In the example usage, we pass the strings '192.168.0.1' and '256.0.0.0' to the isValidIPv4 function.
The function returns true for the first string because it is a valid IPv4 address and false
for the second string because it is not a valid IPv4 address.
 */

//-----------------------------------------------------------------------------------------------------------
//2
// Write a function in JavaScript that generates a random hexadecimal color code.

// function generetHexaString() {
//     let a = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//     let str = '#'
//     for (let i = 0; i < 6; i++) {
//         let ind = Math.floor(Math.random() * 16)

//         str += a[ind]
//     }

//     return str
// }

// // Example usage:
// console.log(generetHexaString()); // Output: true
// console.log(generetHexaString()); // Output: false

/* Explanation:

 */

//-----------------------------------------------------------------------------------------------------------
//3
//Write a function in JavaScript to determine the type of a value.

// const getType = (val) => (val === null ? null : val?.constructor.name);

// // Example usage:
// console.log(getType(42));
// console.log(getType("Hello"));
// console.log(getType(true));
// console.log(getType([1, 2, 3]));
// console.log(getType({ name: "John", age: 25 }));
// console.log(getType(null));
// console.log(getType(undefined));
// console.log(getType(function () { }));
// //The function should print "array" for "[]" and "null" for "null" types.

/* Explanation:

 */

//-----------------------------------------------------------------------------------------------------------
//4
//Write a custom event in js frontend

//create or emit the event
// const myEvent = new CustomEvent("userLogin", {
//     detail: { name: "Tushar", role: "developer" }
// });

// window.dispatchEvent(myEvent);

// //captcher the event
// useEffect(() => {
//     const handleUserLogin = (event) => {
//         console.log("User Logged In:", event.detail);
//     };

//     window.addEventListener("userLogin", handleUserLogin);

//     return () => {
//         window.removeEventListener("userLogin", handleUserLogin);
//     };
// }, []);


//-----------------------------------------------------------------------------------------------------------
//5
//Write a curry method question
//link https://www.greatfrontend.com/questions/javascript/curry?language=js&tab=coding

// function curry(fun) {

//     return function curredFunction(...args) {
//         let context = this
//         if (args.length >= fun.length) {
//             return fun.apply(context, args)
//         }

//         return function (...nextArgs) {
//             return curredFunction.apply(context, [...args, ...nextArgs])
//         }
//     }
// }

// // use the curred function
// function multiplyThreeNumbers(a, b, c) {
//     return a * b * c;
// }

// const curriedMultiplyThreeNumbers = curry(multiplyThreeNumbers);
// console.log(curriedMultiplyThreeNumbers(4)(5)(6)); // 120


// //--------------------------------------------------------------------
// // this binding used
// const curried = curry(function (foo, bar) {
//     return this.base * foo + bar;
// });

// const obj = { base: 5, mul: curried };

// console.log(obj.mul(2)(3));
// // 5*2 + 3 = 13

// // const containsFour = curriedMultiplyThreeNumbers(4);
// // const containsFourMulFive = containsFour(5);
// // containsFourMulFive(6); // 120

//--------------------------------------------------------------------------------------------------------
//6 Memoize function
//check the bello link question
//https://www.greatfrontend.com/questions/javascript/memoize?language=js&tab=coding
// https://www.greatfrontend.com/questions/javascript/promisify?language=js&tab=coding
//--------------------------------------------------------------------------------------------------------



//--------------------------------------------------------------------------------------------------------
//7 Promisify polyfill
//check the bello link question

// https://www.greatfrontend.com/questions/javascript/promisify?language=js&tab=coding
//--------------------------------------------------------------------------------------------------------
