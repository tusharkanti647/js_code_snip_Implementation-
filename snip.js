//1
// let a=[];
// let b=[];
// console.log(a==b); //false
// console.log(a===b); //false
// console.log(!a==!b); //true

//2
// let a=[20];
// let b=["20"];
// console.log(a[0]==b[0]); //true
// console.log(a[0]===b[0]); //false

//3
// let a=[1, 2, 3, 4];
// let b={name: "John", age:"22",};
// console.log(...a); //return a string  of number  1 2 3 4
// console.log(...b); //give error

//4
// console.log(typeof NaN) //number
// let a;
// console.log(typeof a) //undefined
// let b=null
// console.log(typeof b) //object

//5
// let da=10 - -10;
// console.log(da); // 20

//6
// let a = new Set([1, 2, 2, 3, 4, 1]);
// console.log(a); // {1, 2,3, 4}  basically it is set

// 7
// let b={name: "John", age:"22",};
// console.log(delete b.name); //true
// console.log(b); //{age:"22"}

//8
// let b={name: "John", age:"22",};
// console.log(delete b); //false
// console.log(b); //{name: "John", age:"22",}

//9
// let a=["name", "age", "gender"];
// const [x, y]=a
// console.log(x, y); // name, age

//10
// let a={age:40, gender:"male"}
// let b={name: "John", age:"22",};
// console.log({...a,...b}); //{age: '22', gender: 'male', name: 'John'}

//11
// let b=false || {} || null;
// console.log(b); //{}

// let c=false|| null  || {};
// console.log(c); //{}

// let c=false|| null  || "";
// console.log(c); //""
/*
if given || or operator it allweas return 1st true vale from the left side
here { }  it return true value

if given || or operator it all are false then it returns lats false value
*/

//12
// let b1=false && {} && null;
// console.log(b1); //false

// let c={} && false && null;
// console.log(c); //false
// let d=false && "" &&"5";
// console.log(d); //false

// let d=true && "d" && false;
// console.log(d); //false

//13
// let name="tush";
// function getName(){
//     console.log(name); // Error Cannot access 'name' before initialization
//     let name="ram";
// }
// getName();

//14
// console.log(`${(x=>x)("tushar")} i love`)

// //15
// const str="i love";
// console.log(!typeof str==="object");//false
// console.log(!typeof str==="string");//false
// console.log(!typeof str==="false"); //false
// console.log(!typeof str===false); //true
// console.log(!typeof str);//false

/*
js excute the code left to right. so in 86 line "typeof str"='string', then
"!typeof str"=false, then false==="object" is allweas false.
*/

//16
// const obj={name :"anil"};
// Object.seal(obj);
// console.log(obj);//{name :"anil"}
// obj.name = "tushar";
// console.log(obj);//{name :"tushar"}
// obj.age=29; //if i used  seal in object do not change the key value pare, only chhange the exting key value
// console.log(obj);//{name :"tushar"}

//17
// const a=[2, 3, 4,5];
// //remove 1st element
// a.shift();
// console.log(a); //[3,4,5]

//remove last element
// a.pop();
// console.log(a); //[3,4]

//18
// let a=["amm", "apple", "orange"];
// delete a[1];
// console.log(a); //["amm", empty, "orange"]
// console.log(a.length); //3

//19
// let a=2;
//  setTimeout(()=>{
//     console.log(a); //100
//  });
//  a=100;

//20
// let a=2;
// let b=1;

//     console.log(--a===b); //true
// console.log(a--===b);//false
//  a=3
//  d=--a;
//  e=a--;
//  console.log(d);//2
//  console.log(e);//2


//21
// let a=2;
// let b=1;
// let c=1;
//     console.log(--a===b === c); //false
//      console.log(--a===b == c); //true
// console.log(true ==1) //true
// console.log(true ===1) //false
/*
--a===b > true
then true===1 =false ans
*/

//22
// let a=4;
// console.log(a*a);//16
// console.log(a**a);//256
// console.log(a***a)//error

//23
// let data="size";
// let bird={
//     size:"small"
// }
// console.log(bird[data]);//small
// console.log(bird.data);//undifined
// console.log(bird.size);//small
// console.log(bird["size"]);//small
// console.log(bird[size]);//error

//24
// let a=6;
// let b=new Number(6); //here create a new number object thats false
// console.log(a==b);//true
// console.log(a===b);//false

//27
// let a=0;
// console.log(++a);//1
// console.log(a++);//1
// console.log(a);//2

//28
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

// console.log("1");
// setTimeout(()=>{
//   console.log("2");
// }, 0);
// const p1=new Promise((resolve, reject)=>{

//   resolve("3");
// });
// p1.then((res)=>console.log(res));

// (function (){
//   console.log("12");
// })();

// new Promise((resolve, reject)=>{

//   resolve("4");
// }).then((res)=>console.log(res));
// console.log("5");  //1 12 5 3 4 2 fetch data

//29
// let a="a";
// let b="z";
// console.log(a.charCodeAt(0));
// console.log(b.charCodeAt(0));

//30
// let obj={
//     name:"tushar",
//     grit: function(){
//         console.log(this.name);
//     },
//     gritAgain:()=>{
//         console.log(this.name);
//     }
// }
// obj.grit();//tushar
// obj.gritAgain(); //undifined

//31  shaddoing
// let a=1;
// const f1=()=>{

//     const f2=()=>{
//         if(a===1){
//             let a=4;
//             console.log(a);//4
//         }
//         console.log(a); //1
//     }
//     f2();
// }
// f1();

//31.a
// var a=1;
// let b1=5;
// const f1=()=>{

//     const f2=()=>{

//         if(a===1){
//             console.log("hello")
//             var a=4;
//             console.log(a + " 244");//4
//         }
//         console.log(a +" ksm"); //undifine
//     }

//     f2();
//     return a;
// }
// console.log(f1() +" g=hello");
// console.log(a);

// 31.b
// function fun(job){
//     var a=1;

//     if(job){
//         var a=10;
//     }

//     {
//         var a=100;
//         {
//             var a=5000;
//         }
//     }

//     function t(){
//         var a=50;
//     }
//     var a= t();

//     return a;
// }
// var ans=fun(true);
// console.log(ans);


//32
// let a=5;
// let a=8; //error
// var b=6;
// var b=7;

//33
// let arr=[1,2,3];
// console.log(Array.isArray(arr)) //true

// 34 object itrttion
// const obj={
//     a:"aa",
//     b:"bb",
//     c:"cc",
//     d:"dd",
//   }

//   for(let a in obj){
//     console.log(a, obj[a]);
//   }

// // for(let a of obj){
// //     console.log(a, obj[a]); //error
// //   }


// 35
// var array1 = ['a','b','c','d','e','f'];
// var array2 = array1;
// array2.length = 0;
// console.log(array1, array2); //[], []

//36
// const person1 = {
//     name: 'Willie',
//     address: {
//       city: 'Austin',
//       state: 'Texas'
//     }
//   };

//   const person2 = {...person1};

//   person2.name = 'Waylon';
//   person2.address.city = 'Fort Worth';

//   console.log(person1.address.city); //Fort Worth


// 37.a
// function sayHi() {
//      return (() => 0)();
// }
// console.log(typeof sayHi()); //number

//37.b
// function sayHi(a, b) {
//      return [1,b,3];
// }
// console.log(sayHi.length); //2 its return the length of the arguments
// console.log(sayHi().length) //3 it is give me the reurn value length

//38
//console.log([...'Ayush']);
//Answer ["A", "y", "u", "s", "h"] Explanation A string is an iterable. The spread operator maps every character of an iterable to one element.

//39
//console.log('1' - - '1'); //2
//console.log('1' + - '1'); //1-1
// console.log(1 + - '1'); //0
// console.log('1' + - 1); //1-1
//With type coercion string is converted to number and are treated as 1 - -1 = 2
//+ operator is used for concatenation of strings in javascript, so it is evaluated as '1' + '-1' = 1-1.

//40
// (function(){
//     console.log( this);
//  }).call(10); //object

//  (function(){
//     console.log(this);
//  }).call(10); // [Number: 10]
//same case for the apply method
//Explanation** — call invokes the function with new this which in this case is 10 which is basically a constructor of Number and Number is object in javascript.

//41
// "use strict"
//  let greeting;
// greetign = {}; // Typo!
// console.log(greetign); // {}
// // if used "use strict" then give error message

//42
// function checkAge(data) {
//     if (data === { age: 18 }) {
//       console.log('You are an adult!');
//     } else if (data == { age: 18 }) {
//       console.log('You are still an adult.');
//     } else {
//       console.log(`Hmm.. You don't have an age I guess`);
//     }
//   }

//   checkAge({ age: 18 });
//   Answer Hmm.. You don't have an age I guess Explanation When testing equality, primitives are compared by their value, while objects are compared by their reference. JavaScript checks if the objects have a reference to the same location in memory.
//   The two objects that we are comparing don’t have that: the object we passed as a parameter refers to a different location in memory than the object we used in order to check equality.
//   Circuit logo
//   Did you know that tech startups big and small are turning to Circui

//43
// var obj =
// {
//     length: 20,
//     height: 35,
// }
// if ("breadth" in obj === false){
//     obj.breadth = 12;
// }
// console.log(obj.breadth);//12
// console.log(Object.hasOwn(obj, "length")); // true
// console.log(obj.hasOwnProperty("breadth")); // true
//44
// console.log(Math.cbrt(125)); //5
//Explanation: cbrt return the cubic root of a number. The method is find in the math library of Javascript.

//45
// var a=5 , b=1
// var obj = { a : 10 }
// with(obj)
// {
//       alert(b) //1
// }
// Explanation: Firstly the interpreter checks obj for property b. But it doesn’t find any property b so it takes the value from outside the object within the code snippet.

//46.a
// var a;
// a += 10;
// console.log(a);//nan
// console.log (undefined + 10) //NaN
// console.log (null + 10) //10


//46.b
// var grade = 'B';
// var result;
// switch (grade) {
//     case 'A':
//         {
//             result += "10";
//             break;
//         }
//     case 'B':
//         {
//             result += " 9";
//             break;
//         }
//     case 'C':
//         {
//             result += " 8";
//             break;
//         }
//     default:
//         result += " 0";
// }
// console.log(result); //undefined 9

// 46.c
// var grade='A';
// var result=0;
// switch(grade)
// {
//     case 'A':
//         result+="10";
//     case 'B':
//         result+=" 9";
//     case 'C':
//         result+=" 8";
//     default:
//         result+=" 0";
// }
// document.write(result); //0 10 980

// 47
// var a1 = [,,,];
// var a2 = new Array(3);
// console.log(0 in a1) //false
// console.log(0 in a2) //false
// console.log(a1, a2) //[ <3 empty items> ] [ <3 empty items> ]
//Explanation: Array a1 is defined with null values. Therefore we can access the indexes 0, 1 and 2. But array a2 is only defined not declared. Therefore we cannot access index 0.

//48
// var values=["one","two","Three"];
// var ans=values.shift();
// document.writeln(ans);//one

//49
// let counter = 0;
// for (var i = 1; i <= 10; i++) {
//   counter+= i;
// }
// console.log(counter);//55
// console.log(i);//11

//50
// const object1 = {
//     a: 10,
//     b: 20,
//     c: function () {
//       console.log(this.a + this.b);
//     },
//   };
//   object1.c();//30
//   const func = object1.c;
//   func();//nan

//51
// function counter() {
//     let count = 0;
//     return function() {
//       count++;
//       console.log(count);
//     }
//   }
//   const increment = counter();
//   increment(); // 1
//   increment(); // 2
//   increment(); // 3


//52
// function saySomething(message,m){
//     return this.name + " is " + message+'jjjj'+m;
//   }        
//   var person4 = {name:  "John"};
//   let a=saySomething.apply(person4, ["awesome",'uuuu']);
//   console.log(a)

// //53
// let arr=[1,2,3,4,5,6,7,8,9]

// let a=arr.slice(2,4)
// console.log({arr, a})

// let b=arr.splice(2,1,'add')
// console.log({arr, b})

// let c=arr.splice(2,3)
// console.log({arr, c})

//------------------------------------------------------------------------------------


// // 54
// var a = Math.max();
// var b = Math.min();
// console.log(a); //-Infinity
// console.log(b);//Infinity
// //The Math.max() method returns -Infinity by default and the Math.min() 
// // method returns Infinity value by default when passed without any parameters.

//-------------------------------------------------------------------------------------------------------


// //55  Object Key Confusion
// const obj = {
//   1: "one",
//   0: "zero",
//   true: "truth",
//   false: "false"
// };

// console.log(obj[1]);      // Output: "one"
// console.log(obj[true]);   // Output: "truth"

// /* Explanation:
//  Object keys are automatically converted to strings.
// When querying obj[true], it looks for the key "true", not the true Boolean value.
// */

//-------------------------------------------------------------------------------------------------------

// //56  Adding Objects?
// console.log({} + []);  // Output: "[object Object]"
// console.log([] + {});  // Output: "[object Object]"
// console.log({} + {});  // Output: "[object Object][object Object]"
// console.log([] + []);  // Output: ""

// /* Explanation:
// Explanation:
// [] (an empty array) is converted to an empty string ("").

// When adding an object to an empty string, the object gets coerced to "[object Object]".
// */

//-------------------------------------------------------------------------------------------------------

// //57  Deleting a Property vs. Variable
// var a = 10;
// delete a;
// console.log(a);  // Output: 10

// const obj = { b: 20 };
// delete obj.b;
// console.log(obj.b);  // Output: undefined


// /* Explanation:
// Explanation:
// [] (an empty array) is converted to an empty string ("").

// When adding an object to an empty string, the object gets coerced to "[object Object]".
// */

//-------------------------------------------------------------------------------------------------------


//58  Object Comparison Trap
// const a = {};
// const b = {};

// console.log(a === b);  // Output: false
// console.log(a == b);   // Output: false
// console.log(!{} === !{});  // Output: true
// console.log(!{} == !{});   // Output: true
// console.log(!!{} === !!{});  // Output: true
// console.log(!!{} == !!{});   // Output: true
// console.log([] === []);  // Output: false
// console.log([] == []);   // Output: false
// console.log(![] === ![]);  // Output: true
// console.log(![] == ![]);   // Output: true
// console.log(!![] === !![]);  // Output: true
// console.log(!![] == !![]);   // Output: true


/* Explanation:

*/

//-------------------------------------------------------------------------------------------------------

// // //59  What output do you expect from the following code snippet?
// var z = 1,
//     y = z = typeof y;
// console.log(y); //undefined


// // /* Explanation:

// // */

//-------------------------------------------------------------------------------------------------------

// // //60  What output do you expect from the following code snippet?
// console.log("10" + 20 + 30); //102030
// console.log("10" + "20" + 30); //102030
// console.log(10 + 20 + "30"); //3030

//-------------------------------------------------------------------------------------------------------
// //61

// console.log(3 > 2 > 1);  // false
// /* Explanation:
// go left to right
// 3 > 2 //true
// then true > 1  //here true convert to number 1
// then 1>1 //false
// */
//-------------------------------------------------------------------------------------------------------

// //62
// var array = ["1", "2", "3", "4", "5"];
// delete array[3];
// console.log(array.length); // 5 
// console.log(array); // [ '1', '2', '3', <1 empty item>, '5' ]

// let newArr = array.filter((ele) => ele) //[ '1', '2', '3', '5' ]
// console.log(newArr);
// /* Explanation:
// after the delete a rray elemnt from a array stil the array length is same in delete postion put 'empty ele ment


// let newArr = array.filter((ele) => ele) 
// upper line filter the all false value so i get upper like array [ '1', '2', '3', '5' ] with remove  emty space

// */


//-------------------------------------------------------------------------------------------------------

// //63
// let array = [undefined, "1", false, "3", 0, null, 22, "5", NaN];
// console.log(array); //[ undefined, '1', false, '3', 0, null, 22, '5', NaN ]

// let newArr = array.filter((ele) => ele)
// console.log(newArr); //[ '1', '3', 22, '5' ]

//-------------------------------------------------------------------------------------------------------

//64
// var Employee = {
//     company: 'Acme'
// }
// var employee1 = Object.create(Employee);
// console.log(employee1); //{} > explan becuse company is prtotype property so that causes i can not see it
// delete employee1.company // also it can not be deleted
// console.log(employee1.company); //Acme
// delete Employee.company // now detted
// console.log(employee1.company); //undifine

// /* Explanation:

// */
//-------------------------------------------------------------------------------------------------------

// //65
// async function foo() {
//     console.log("A");
//     await Promise.resolve();
//     console.log("B");
//     await new Promise(resolve => setTimeout(resolve, 0));
//     console.log("C");
// }

// console.log("D");
// foo();
// console.log("E"); 

// //output 
// // D A E B C

// /* Explanation:

// */

//-------------------------------------------------------------------------------------------------------

// //66
// function display() {
//     var a = b = 10;
// }

// display();

// console.log('b', typeof b === 'undefined'); //false
// console.log('a', typeof a === 'undefined'); //true
// console.log(b); //10
// console.log(a) // ERROR ReferenceError: a is not defined

 /* Explanation:
in upper code  var a= b=10 meening  

>>>>
b = 10;     // assignment first
var a = b;  // then a is assigned b's value
>>>>

so b = 10
b is NOT declared with var, let, or const
JavaScript (non-strict mode) creates a global variable

window.b = 10; // in browser


output explantion

typeof undeclaredVariable never throws an error
Instead, it returns the string "undefined". so bllow line is true
console.log('a', typeof a === 'undefined'); //true
 */

 
//-------------------------------------------------------------------------------------------------------

//67

// function add(a, b) {
//   return a + b;
// }
// function add(a, b, c = 10) {
//   return a + b + c;
// }
// console.log(add(5, 10)); //25
// /* Explanation:

//  */

 
//-------------------------------------------------------------------------------------------------------

//68
// function f1()
// {
// return {
// name: "Sandeep"
// };
// }
// function f2()
// {
// return
// {
// name: "Sandeep"
// };
// }  

// console.log(f1()) //{ name: 'Sandeep' }
// console.log(f2()) //undefined

/* Explanation:

 */

 
//-------------------------------------------------------------------------------------------------------

//69
// console.log('9' * 3); //27
// console.log('9hgg' * 3); //NaN


/*
empty string '' convert to false
then false convert to 0
the 0*3=0

for false conevrt to 0 then 0*3=0

similar true convert to 1 and 1*3=1
*/
// console.log('' * 3); //0 
// console.log(false * 3); //0
// console.log(true * 3); //1

/*
 1st [] (empty array) → converted to primitive
than [].toString() → "" (empty string)
than Number("") → 0
than 0 * 3 → 0

1st {} (object) → converted to primitive
than {}.toString() → "[object Object]"
than Number("[object Object]") → NaN
than NaN * 3 → NaN

1st Number(undefined) → NaN
than NaN * 3 → NaN

1st Number(null) → 0
than 0 * 3 → 0
*/
// console.log([] * 3); //0
// console.log({} * 3); //NaN
// console.log(undefined * 3); //NaN
// console.log(null * 3); //0

/*
1st [] is truthy
than ![] → false
than false → 0
than 0 * 3 → 0

1st {} is truthy
than !{} → false
than false → 0
than 0 * 3 → 0

bellow all are falsy than convert try than cam 1 than 1* 3=3
*/
// console.log(![] * 3); //0
// console.log(!{} * 3); //0
// console.log(!undefined * 3); //3
// console.log(!null * 3); //3
// console.log(!'' * 3); //3
/* Explanation:
'9' convert to number
 */

 
//-------------------------------------------------------------------------------------------------------

// //70
// const testArray = [1, 2, 3]; //
// testArray.push(7,8,9);
//console.log(testArray);/[ 1, 2, 3, 7, 8, 9 ]
// let a= testArray.pop();
// console.log(a) //9
// console.log(testArray); //[ 1, 2, 3, 7, 8 ]
// testArray.unshift(-7,-8,-9);
// console.log(testArray);
// testArray.shift();
// console.log(testArray);



// /* Explanation:

//  */

 
//-------------------------------------------------------------------------------------------------------

//71
// const arr = [1, 2, 3];
// const object1 = { x: 1, y: 2, z: 3 };


// console.log({...object1, ... arr});  //{ '0': 1, '1': 2, '2': 3, x: 1, y: 2, z: 3 }
// console.log([...arr, ... object1]); //TypeError: object1 is not iterable


//output
//TypeError: object1 is not iterable

/* Explanation:
The spread operator inside an array ([...]) expects iterable values
Arrays, strings, Sets, Maps → iterable ✅
Plain objects {} → ❌ not iterable
 */

 
//-------------------------------------------------------------------------------------------------------

//72
// function  Person (name, color){
// this.FullName=name;
// this.color=color
// }

// let person1=new Person('tushar', 'black')
// console.log(person1)
// Person.contry='India'
// Person.prototype.city='Delhi'

// let person2=new Person('ram', 'white')
// console.log(person2)
// console.log(person2.prototype)
// console.log(person2['contry'])
// console.log(person2['city'])
/* Explanation:

 */

 
//-------------------------------------------------------------------------------------------------------

//73
// console.log("Raj" - "Anuj" ); //NaN
// console.log(NaN + 10); //NaN
// console.log("Raj" - "Anuj" + 10); //NaN


/* Explanation:

 */

 
//-------------------------------------------------------------------------------------------------------

//74
// async function fun() {
//  console.log('A', await Promise.resolve("E").then(() => 'W'));
//  console.log('B', await Promise.resolve("F").then(() => console.log("H")));
// }

// fun();

/* Explanation:
What happens?

Promise.resolve("E") → resolved Promise
.then(() => 'W')

Ignores "E"
Returns 'W'
await waits for Promise → gets 'W'
console.log('A', 'W') // output A W

in 2nd line bellow description

What happens?

Promise.resolve("F") → resolved Promise
.then(() => console.log("H"))

Executes console.log("H") //output H
Logs "H" immediately
Returns undefined
await waits → gets undefined
console.log('B', undefined) //output B undefined

 */

 
//-------------------------------------------------------------------------------------------------------

//67
// isNaN("Hello")  // Returns true
// isNaN(345)   // Returns false
// isNaN('1')  // Returns false, since '1' is converted to Number type which results in 0 ( a number) 
// isNaN(true) // Returns false, since true converted to Number type results in 1 ( a number)
// isNaN(false) // Returns false
// isNaN(undefined) // Returns true
console.log(isNaN(null)) // Returns false, 
console.log(isNaN([])) // Returns false
console.log(isNaN({})) // Returns true


/* Explanation:

 */

 
//-------------------------------------------------------------------------------------------------------

//67

/* Explanation:

 */

 
//-------------------------------------------------------------------------------------------------------

//67

/* Explanation:

 */
