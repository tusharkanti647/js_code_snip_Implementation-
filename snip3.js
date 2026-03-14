//1
// let arr = [1, 2, 3];
// let indexMap = {};
// for (let i in arr) {
//   indexMap[i] = i;
// }
// console.log(indexMap); // { '0': '0', '1': '1', '2': '2' } - for...in iterates over all enumerable properties

//2
// function outer() {
//   var x = 10;
//   function inner() {
//     var x = 20;
//     console.log(x);
//   }
//   inner(); // 20
//   console.log(x); // 10
// }
// outer();

//3
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }
// const dog = new Animal('Dog');
// console.log(dog instanceof Animal); // true
// console.log(dog instanceof Object); // true

//4
// const obj = Object.freeze({a: 1});
// obj.a = 2;
// obj.b = 3;
// console.log(obj); // {a: 1} - freeze prevents adding/modifying properties

//5
// console.log(0.1 + 0.2); // 0.30000000000000004
// console.log(0.1 + 0.2 === 0.3); // false - floating point precision issue

//6
// let arr = [1, 2, 3];
// let copy = [...arr];
// copy[0] = 99;
// console.log(arr[0]); // 1 - spread creates shallow copy

//7
// const person = { name: 'John' };
// const { name, age = 25 } = person;
// console.log(age); // 25 - default value in destructuring

//8
// function test(...args) {
//   console.log(args);
// }
// test(1, 2, 3, 4); // [1, 2, 3, 4] - rest parameters collect remaining arguments

//9
// class Parent {
//   greet() {
//     return 'Hello from Parent';
//   }
// }
// class Child extends Parent {
//   greet() {
//     return 'Hello from Child';
//   }
// }
// const child = new Child();
// console.log(child.greet()); // Hello from Child - method overriding

//10
// let promise = new Promise((resolve, reject) => {
//   reject('Error');
// });
// promise.then(data => console.log(data)).catch(err => console.log(err)); // Error

//11
// const arr = [1, 2, 3, 4, 5];
// const filtered = arr.filter(x => x > 2);
// console.log(filtered); // [3, 4, 5]

//12
// const arr = [1, 2, 3];
// const mapped = arr.map(x => x * 2);
// console.log(mapped); // [2, 4, 6]

//13
// const arr = [1, 2, 3, 4, 5];
// const sum = arr.reduce((acc, val) => acc + val, 0);
// console.log(sum); // 15

//14
// const arr = ['a', 'b', 'c'];
// const found = arr.find(x => x === 'b');
// console.log(found); // 'b'

//15
// const arr = ['a', 'b', 'c'];
// const index = arr.findIndex(x => x === 'b');
// console.log(index); // 1

//16
// const arr = [1, 2, 2, 3, 3, 3];
// const unique = [...new Set(arr)];
// console.log(unique); // [1, 2, 3]

//17
// let str = 'hello';
// console.log(str.includes('ell')); // true
// console.log(str.startsWith('hel')); // true
// console.log(str.endsWith('lo')); // true

//18
// let str = 'apple';
// console.log(str.repeat(3)); // appleappleapple

//19
// let str = '  hello  ';
// console.log(str.trim()); // hello

//20
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.some(x => x > 3)); // true
// console.log(arr.every(x => x > 0)); // true

//21
// const sym = Symbol('id');
// const obj = { [sym]: 'value' };
// console.log(obj[sym]); // value - symbols as object keys

//22
// const obj = {
//   x: 1,
//   y: 2,
//   z: 3
// };
// const { x, ...rest } = obj;
// console.log(rest); // { y: 2, z: 3 } - rest in destructuring

//23
// const str = 'hello world';
// const words = str.split(' ');
// console.log(words); // ['hello', 'world']

//24
// const words = ['hello', 'world'];
// const str = words.join('-');
// console.log(str); // hello-world

//25
// let num = 42;
// console.log(num.toString(2)); // 101010 - binary representation

//26
// console.log(parseInt('FF', 16)); // 255 - hex to decimal

//27
// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// const merged = { ...obj1, ...obj2 };
// console.log(merged); // { a: 1, b: 3, c: 4 }

//28
// const arr = [[1, 2], [3, 4]];
// const flat = arr.flat();
// console.log(flat); // [1, 2, 3, 4]

//29
// const arr = [1, 2, 3];
// const mapped = arr.map(x => [x, x * 2]);
// const flattened = mapped.flatMap(x => x);
// console.log(flattened); // [1, 2, 2, 4, 3, 6]

//30
// let a = 1;
// let b = a++;
// console.log(a, b); // 2, 1 - post-increment returns old value

//31
// let a = 1;
// let b = ++a;
// console.log(a, b); // 2, 2 - pre-increment returns new value

//32
// const obj = { a: 1 };
// console.log(Object.keys(obj)); // ['a']
// console.log(Object.values(obj)); // [1]
// console.log(Object.entries(obj)); // [['a', 1]]

//33
// const arr = [1, 2, 3, 4, 5];
// const sliced = arr.slice(1, 4);
// console.log(sliced); // [2, 3, 4]
// console.log(arr); // [1, 2, 3, 4, 5] - slice doesn't modify original

//34
// let a = [1, 2, 3];
// let b = a;
// b.push(4);
// console.log(a); // [1, 2, 3, 4] - array reference

//35
// const arr = [1, 2, 3];
// arr.length = 5;
// console.log(arr); // [1, 2, 3, empty, empty]

//36
// function test(a = 10, b = 20) {
//   console.log(a + b);
// }
// test(5); // 25

//37
// const obj = {
//   x: 1,
//   getX: function() {
//     return this.x;
//   }
// };
// const method = obj.getX;
// console.log(method()); // undefined - lost context

//38
// async function test() {
//   const result = await Promise.resolve('done');
//   console.log(result); // done
// }
// test();

//39
// let a = 1;
// let b = 2;
// [a, b] = [b, a];
// console.log(a, b); // 2, 1 - array destructuring for swap

//40
// const closure = (() => {
//   let count = 0;
//   return () => ++count;
// })();
// console.log(closure()); // 1
// console.log(closure()); // 2

//41
// const person = Object.create(null);
// console.log(person.toString); // undefined - null prototype

//42
// let arr = [1, 2, 3];
// for (let i = 0; i < arr.length; i++) {
//   setTimeout(() => console.log(arr[i]), 0);
// }
// // undefined, undefined, undefined

//43
// var arr = [1, 2, 3];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(() => console.log(arr[i]), 0);
// }
// // undefined, undefined, undefined

//44
// let result = '';
// for (let i = 1; i <= 3; i++) {
//   result += i;
// }
// console.log(result); // '123'

//45
// const str = 'hello';
// console.log(str[0]); // h - string indexing

//46
// const obj = {
//   a: 1,
//   b: 2
// };
// console.log('a' in obj); // true
// console.log('toString' in obj); // true - inherited property

//47
// function getName() {
//   console.log(this.name);
// }
// const person = { name: 'John' };
// getName.call(person); // John

//48
// function greet(greeting, punctuation) {
//   console.log(greeting + ' ' + this.name + punctuation);
// }
// const person = { name: 'John' };
// greet.apply(person, ['Hello', '!']); // Hello John!

//49
// const multiply = (a, b) => a * b;
// const multiplyByTwo = multiply.bind(null, 2);
// console.log(multiplyByTwo(5)); // 10

//50
// const arr = [3, 1, 4, 1, 5];
// arr.sort((a, b) => a - b);
// console.log(arr); // [1, 1, 3, 4, 5]

//51
// const arr = [1, 2, 3];
// arr.reverse();
// console.log(arr); // [3, 2, 1]

//52
// let arr = [1, 2, 3];
// let newArr = arr.concat([4, 5]);
// console.log(newArr); // [1, 2, 3, 4, 5]

//53
// let arr = [1, 2, 3];
// console.log(arr.includes(2)); // true
// console.log(arr.indexOf(2)); // 1

//54
// const obj = { a: 1 };
// Object.defineProperty(obj, 'b', {
//   value: 2,
//   writable: false
// });
// obj.b = 3;
// console.log(obj.b); // 2 - property is read-only

//55
// function* generator() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
// const gen = generator();
// console.log(gen.next().value); // 1

//56
// const obj = { a: 1, b: 2, c: 3 };
// for (const [key, value] of Object.entries(obj)) {
//   console.log(key, value);
// }
// // a 1, b 2, c 3

//57
// let arr = [1, 2, 3];
// let str = arr.toString();
// console.log(str); // '1,2,3'

//58
// const promise = Promise.reject('error');
// promise.catch(err => console.log(err)); // error

//59
// console.log(typeof null); // object - typeof quirk
// console.log(typeof undefined); // undefined
// console.log(typeof []); // object
// console.log(typeof {}); // object

//60
// const arr1 = [1, 2, 3];
// const arr2 = arr1.map(x => x);
// arr2[0] = 99;
// console.log(arr1[0]); // 1 - map creates new array
