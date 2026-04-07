// //1
// // Object.create() is used to create a new object using an existing object as its prototype.
// const person = {
//     x: 10,
//     country: "India",
//     greet: function () {
//         console.log("Hello!");
//     }
// };

// let user = Object.create(person)
// /*
// person is the prototype
// user is a new object
// user does NOT have greet and country  directly
// JavaScript finds greet via the prototype chain
// */
// console.log(user) //{  } all are not own property of user all are prototype so bellow i get the value
// console.log(user.country) // India

// //adding property in new object
// user.name = "Tushar";
// console.log(user) //{ name: 'Tushar' }

// console.log(user.x); // 10 (from parent)
// user.x = 20;
// console.log(user); // { name: 'Tushar', x: 20 } (own property)

//-----------------------------------------------------------------------------------------------------------
// //2
// // Creating object with null prototype
// let obj = Object.create({})
// console.log(obj); // {}
// console.log(obj.toString()); //[object Object]

//-----------------------------------------------------------------------------------------------------------
// //3
// //Object.assign() is used to shallow copy properties from one or more source objects into a target object.
// //syntex is Object.assign(target, ...sources)

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: { h: 'H' } }
// const result = Object.assign(obj1, obj2);


// console.log(result); // { a: 1, b: 2, c: 3 }
// console.log(obj1);  // { a: 1, b: 2, c: 3 } (modified or muted the tragate object)

// //avoid the mutetion bello follow
// const obj1 = { a: 1, b: 2 };
// const obj2 = {b:5, c: 3 }
// const obj3 = {e: 8 }
// const result = Object.assign({}, obj1, obj2);
// console.log(result); // { a: 1, b: 5, c: 3, e:8 } here overwrite the b property
// console.log(obj1, obj2);  //{ a: 1, b: 2 }  {b: 5, c: 3 } now not muted


//-----------------------------------------------------------------------------------------------------------
//4
// let a = 13e4
// let b = new Number(16)
// console.log(a);//130000 exponent value, output: 130000
// console.log(b);// [Number: 16] integer value by number object
// console.log(a + b) //130016

// console.log(Number.MIN_VALUE); // 5e-324 smalest posetive number after desimal 323  place 0 then cam 5 0.0000....5
// console.log(Number.MIN_VALUE > 0); //true
// console.log(Number.MAX_VALUE);
// console.log(Number.MAX_VALUE * 2); //Infinity
// console.log(Number.POSITIVE_INFINITY); //Infinity
// console.log(Number.NEGATIVE_INFINITY); //-Infinity
// console.log(-1 / 0);//-Infinity

// //isfinite check a number is finity or not retrun boolean value
// console.log(Number.isFinite(0));  // true
// console.log(Number.isFinite(Infinity));  // false
// console.log(Number.isFinite(NaN));  // false
// console.log(Number.isFinite(undefined));  // false
// console.log(Number.isFinite(null));  // false
// console.log(Number.isFinite(''));  // false
// console.log(Number.isFinite('hhh'));  // false
// console.log(Number.isFinite({ hhh: '7' }));  // false empty object also give false
// console.log(Number.isFinite(true)); //false


//check the parsInt
// console.log(parseInt('80'));//80
// console.log(parseInt('80.6'));//80
// console.log(parseInt('tushar'));//NaN
// console.log(parseInt('80tushar'));//80
// console.log(parseInt('80.67tushar'));//80
// console.log(parseInt('tttt80'));//NaN
// console.log(Number('80gdg'));//NaN


// console.log(parseInt(NaN));//NaN
// console.log(parseInt(undefined));//NaN
// console.log(parseInt(null));//NaN
// console.log(parseInt(true));//NaN
// console.log(parseInt(false));//NaN
// console.log(parseInt([]));//NaN

//similar like parseFloat just return floting number remaining are similar
// console.log(parseInt('80'));//80
// console.log(parseInt('80.6'));//80.6


//tostring method
// let a = 80, b = NaN
// console.log(a.toString()); //'80'
// console.log(b.toString());//'NaN'
// console.log(true.toString()); // 'true'
// console.log({ a: 9 }.toString()); // '[object Object]'
// console.log([1, 2].toString()); //'1, 2'
// console.log([].toString());// ''
// console.log(null.toString());// error
// console.log(undefined.toString());//error

// console.log(undefined.toString()); //TypeError: Cannot read properties of undefined (reading 'toString')


//-----------------------------------------------------------------------------------------------------------
//5
//learn the Dates https://www.tpointtech.com /javascript-date



//-----------------------------------------------------------------------------------------------------------
//6
// let x = 1;

// if (function f() { }) {
//     x += typeof f;
// }

// console.log(x); //1undefined

/* Explanation:

The if statement is evaluating the function f as a boolean value. In JavaScript, functions are truthy
values, so the condition will evaluate to true and the code block inside the if statement will be
executed. The value of x is then incremented by the string "undefined", which is the result of
calling typeof f.
 */


//-----------------------------------------------------------------------------------------------------------
//7
// const firstname = fun();
// let na = 'tushar'
// function fun() {
//     return `my is ${na} malviya` //ReferenceError: Cannot access 'na' before initialization
// }
// console.log(firstname);


//-----------------------------------------------------------------------------------------------------------
//8
// var num = 4;
// function outer() {
//     var num = 2;
//     function inner() {
//         num++;
//         console.log("num1", num); //NaN
//         var num = 3;
//         console.log("num", num); //3
//     }
//     inner();
// }
// outer();





//-----------------------------------------------------------------------------------------------------------
//9
// console.log(Object.is(-0, +0)); // false
// console.log(Object.is(NaN, NaN)); // true

// console.log(-0 === +0); // true
// console.log(NaN === NaN); // false
// console.log(!NaN === !NaN); // true

// console.log(-0 == +0); // true
// console.log(NaN == NaN); // false
// console.log(!NaN == !NaN); // true



//-----------------------------------------------------------------------------------------------------------
//2



//-----------------------------------------------------------------------------------------------------------
//2


//-----------------------------------------------------------------------------------------------------------
//2


//-----------------------------------------------------------------------------------------------------------
//2


//-----------------------------------------------------------------------------------------------------------
//2


//-----------------------------------------------------------------------------------------------------------
//2


//-----------------------------------------------------------------------------------------------------------
//2


//-----------------------------------------------------------------------------------------------------------
//2


//-----------------------------------------------------------------------------------------------------------
//2


//-----------------------------------------------------------------------------------------------------------
//2


//-----------------------------------------------------------------------------------------------------------
//2


//-----------------------------------------------------------------------------------------------------------
//2


