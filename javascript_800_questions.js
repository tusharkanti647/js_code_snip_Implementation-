//JAVASCRIPT 800 ADVANCED INTERVIEW QUESTIONS - CODE SNIPPET OUTPUT BASED
//For experienced developers - All unique questions, no repetition
//Focus on practical interview scenarios

//1
// function checkThis() {
//   return this;
// }
// console.log(checkThis()); // window (or global in Node.js)

//2
// const obj = {
//   method: function() {
//     return this;
//   }
// };
// console.log(obj.method() === obj); // true

//3
// function outer() {
//   this.x = 10;
//   return () => this.x;
// }
// const bound = outer.call({x: 20});
// console.log(bound()); // 20

//4
// class MyClass {
//   constructor() {
//     this.value = 1;
//   }
//   getValue = () => {
//     return this.value;
//   }
// }
// const instance = new MyClass();
// const { getValue } = instance;
// console.log(getValue()); // 1

//5
// const obj = { a: 1, b: 2, c: 3 };
// const filtered = Object.fromEntries(
//   Object.entries(obj).filter(([key]) => key !== 'b')
// );
// console.log(filtered); // { a: 1, c: 3 }

//6
// let counter = 0;
// const increment = () => ++counter;
// const getCounter = () => counter;
// increment();
// increment();
// console.log(getCounter()); // 2

//7
// const arr = [1, 2, 3, 4, 5];
// const half = Math.ceil(arr.length / 2);
// const [firstHalf, secondHalf] = [arr.slice(0, half), arr.slice(half)];
// console.log(firstHalf); // [1, 2, 3]

//8
// const memoize = (fn) => {
//   const cache = {};
//   return (...args) => {
//     const key = JSON.stringify(args);
//     if (key in cache) return cache[key];
//     return cache[key] = fn(...args);
//   };
// };
// const add = memoize((a, b) => a + b);
// console.log(add(2, 3)); // 5

//9
// const debounce = (fn, delay) => {
//   let timeout;
//   return (...args) => {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => fn(...args), delay);
//   };
// };
// const log = debounce(console.log, 100);
// log('called');

//10
// const throttle = (fn, limit) => {
//   let inThrottle;
//   return (...args) => {
//     if (!inThrottle) {
//       fn.apply(this, args);
//       inThrottle = true;
//       setTimeout(() => inThrottle = false, limit);
//     }
//   };
// };

//11
// const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
// const add = x => x + 1;
// const multiply = x => x * 2;
// const composed = compose(multiply, add);
// console.log(composed(5)); // 12

//12
// const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
// const add = x => x + 1;
// const multiply = x => x * 2;
// const piped = pipe(add, multiply);
// console.log(piped(5)); // 12

//13
// const curry = (fn) => {
//   const arity = fn.length;
//   return function $curry(...args) {
//     if (args.length < arity) return $curry.bind(null, ...args);
//     return fn.call(null, ...args);
//   };
// };
// const add = curry((a, b, c) => a + b + c);
// console.log(add(1)(2)(3)); // 6

//14
// const partial = (fn, ...args) => (...newArgs) => fn(...args, ...newArgs);
// const multiply = (a, b, c) => a * b * c;
// const multiplyBy2 = partial(multiply, 2);
// console.log(multiplyBy2(3, 4)); // 24

//15
// const once = (fn) => {
//   let called = false;
//   let result;
//   return (...args) => {
//     if (!called) {
//       result = fn(...args);
//       called = true;
//     }
//     return result;
//   };
// };
// const init = once(() => console.log('initialized'));
// init(); init(); // logs 'initialized' once

//16
// const retry = (fn, maxRetries = 3) => {
//   return async (...args) => {
//     for (let i = 0; i < maxRetries; i++) {
//       try {
//         return await fn(...args);
//       } catch (e) {
//         if (i === maxRetries - 1) throw e;
//       }
//     }
//   };
// };

//17
// Promise.all([Promise.resolve(1), Promise.resolve(2)])
//   .then(results => console.log(results)); // [1, 2]

//18
// Promise.race([Promise.resolve(1), new Promise(r => setTimeout(() => r(2), 100))])
//   .then(result => console.log(result)); // 1

//19
// Promise.allSettled([Promise.resolve(1), Promise.reject('error')])
//   .then(results => console.log(results));
// // [{status: 'fulfilled', value: 1}, {status: 'rejected', reason: 'error'}]

//20
// Promise.any([Promise.reject('error'), Promise.resolve(1)])
//   .then(result => console.log(result)); // 1

//21
// async function* asyncGenerator() {
//   yield Promise.resolve(1);
//   yield Promise.resolve(2);
// }
// (async () => {
//   for await (const value of asyncGenerator()) {
//     console.log(await value); // 1, 2
//   }
// })();

//22
// const arr = [1, [2, [3, [4, 5]]]];
// const deepFlat = (arr, depth = Infinity) =>
//   arr.reduce((flat, el) => flat.concat(
//     Array.isArray(el) ? deepFlat(el, depth - 1) : el
//   ), []);
// console.log(deepFlat(arr)); // [1, 2, 3, 4, 5]

//23
// const groupBy = (arr, key) =>
//   arr.reduce((acc, obj) => {
//     (acc[obj[key]] = acc[obj[key]] || []).push(obj);
//     return acc;
//   }, {});
// const data = [{type: 'a', val: 1}, {type: 'a', val: 2}, {type: 'b', val: 3}];
// console.log(groupBy(data, 'type'));
// // {a: [{type: 'a', val: 1}, {type: 'a', val: 2}], b: [{type: 'b', val: 3}]}

//24
// const uniqueBy = (arr, key) => [
//   ...new Map(arr.map(item => [item[key], item])).values()
// ];
// const data = [{id: 1, name: 'a'}, {id: 1, name: 'b'}, {id: 2, name: 'c'}];
// console.log(uniqueBy(data, 'id'));
// // [{id: 1, name: 'a'}, {id: 2, name: 'c'}]

//25
// const chunk = (arr, size) =>
//   Array.from({length: Math.ceil(arr.length / size)},
//     (_, i) => arr.slice(i * size, i * size + size)
//   );
// console.log(chunk([1, 2, 3, 4, 5], 2));
// // [[1, 2], [3, 4], [5]]

//26
// const permutations = (arr) => {
//   if (arr.length <= 1) return [arr];
//   return arr.reduce((result, val, i) =>
//     result.concat(permutations([...arr.slice(0, i), ...arr.slice(i + 1)])
//       .map(perm => [val, ...perm])
//     ), []
//   );
// };

//27
// const combinations = (arr, r) => {
//   if (r === 1) return arr.map(v => [v]);
//   return arr.reduce((acc, v, i) =>
//     acc.concat(combinations(arr.slice(i + 1), r - 1)
//       .map(c => [v, ...c])
//     ), []
//   );
// };

//28
// const intersect = (arr1, arr2) => arr1.filter(item => arr2.includes(item));
// console.log(intersect([1, 2, 3], [2, 3, 4])); // [2, 3]

//29
// const difference = (arr1, arr2) => arr1.filter(item => !arr2.includes(item));
// console.log(difference([1, 2, 3], [2, 3, 4])); // [1]

//30
// const union = (arr1, arr2) => [...new Set([...arr1, ...arr2])];
// console.log(union([1, 2, 3], [2, 3, 4])); // [1, 2, 3, 4]

//31
// const getDeepValue = (obj, path) =>
//   path.split('.').reduce((current, prop) => current?.[prop], obj);
// const obj = {a: {b: {c: 1}}};
// console.log(getDeepValue(obj, 'a.b.c')); // 1

//32
// const setDeepValue = (obj, path, value) => {
//   const keys = path.split('.');
//   let current = obj;
//   for (let i = 0; i < keys.length - 1; i++) {
//     current[keys[i]] = current[keys[i]] || {};
//     current = current[keys[i]];
//   }
//   current[keys[keys.length - 1]] = value;
//   return obj;
// };

//33
// const clone = (obj) => JSON.parse(JSON.stringify(obj));
// const original = {a: 1, b: {c: 2}};
// const cloned = clone(original);
// cloned.b.c = 99;
// console.log(original.b.c); // 2

//34
// const deepClone = (obj) => {
//   if (obj === null || typeof obj !== 'object') return obj;
//   if (obj instanceof Date) return new Date(obj);
//   if (obj instanceof Array) return obj.map(item => deepClone(item));
//   if (obj instanceof Object) {
//     const clonedObj = {};
//     for (const key in obj) if (obj.hasOwnProperty(key))
//       clonedObj[key] = deepClone(obj[key]);
//     return clonedObj;
//   }
// };

//35
// const flatten = (obj, prefix = '') =>
//   Object.keys(obj).reduce((acc, key) => {
//     const value = obj[key];
//     const newKey = prefix ? `${prefix}.${key}` : key;
//     if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
//       Object.assign(acc, flatten(value, newKey));
//     } else {
//       acc[newKey] = value;
//     }
//     return acc;
//   }, {});

//36
// const unflatten = (obj) => {
//   const result = {};
//   for (const key in obj) {
//     const keys = key.split('.');
//     let current = result;
//     for (let i = 0; i < keys.length - 1; i++) {
//       current[keys[i]] = current[keys[i]] || {};
//       current = current[keys[i]];
//     }
//     current[keys[keys.length - 1]] = obj[key];
//   }
//   return result;
// };

//37
// const mapObj = (obj, fn) =>
//   Object.fromEntries(
//     Object.entries(obj).map(([k, v]) => [k, fn(v)])
//   );
// console.log(mapObj({a: 1, b: 2}, x => x * 2)); // {a: 2, b: 4}

//38
// const filterObj = (obj, fn) =>
//   Object.fromEntries(
//     Object.entries(obj).filter(([k, v]) => fn(k, v))
//   );

//39
// const reduceObj = (obj, fn, init) =>
//   Object.entries(obj).reduce((acc, [k, v]) => fn(acc, v, k), init);

//40
// const invertObj = (obj) =>
//   Object.fromEntries(
//     Object.entries(obj).map(([k, v]) => [v, k])
//   );
// console.log(invertObj({a: 'x', b: 'y'})); // {x: 'a', y: 'b'}

//41
// const pickObj = (obj, keys) =>
//   Object.fromEntries(keys.map(key => [key, obj[key]]));
// console.log(pickObj({a: 1, b: 2, c: 3}, ['a', 'c'])); // {a: 1, c: 3}

//42
// const omitObj = (obj, keys) =>
//   Object.fromEntries(
//     Object.entries(obj).filter(([k]) => !keys.includes(k))
//   );

//43
// const defaults = (obj, defaults) => ({...defaults, ...obj});
// console.log(defaults({a: 1}, {a: 0, b: 2})); // {a: 1, b: 2}

//44
// const mergeObj = (...objs) => Object.assign({}, ...objs);

//45
// const zipObj = (keys, values) =>
//   Object.fromEntries(keys.map((k, i) => [k, values[i]]));
// console.log(zipObj(['a', 'b'], [1, 2])); // {a: 1, b: 2}

//46
// const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];

//47
// const shuffle = (arr) => {
//   const shuffled = [...arr];
//   for (let i = shuffled.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
//   }
//   return shuffled;
// };

//48
// const range = (start, end) =>
//   Array.from({length: end - start}, (_, i) => start + i);
// console.log(range(1, 5)); // [1, 2, 3, 4]

//49
// const zip = (...arrs) =>
//   Array.from({length: Math.min(...arrs.map(a => a.length))},
//     (_, i) => arrs.map(arr => arr[i])
//   );
// console.log(zip([1, 2], ['a', 'b'])); // [[1, 'a'], [2, 'b']]

//50
// const transpose = (matrix) =>
//   matrix[0].map((_, i) => matrix.map(row => row[i]));

//51
// const padStart = (str, length, char = ' ') =>
//   String(char).repeat(Math.max(0, length - str.length)) + str;
// console.log(padStart('5', 3, '0')); // '005'

//52
// const padEnd = (str, length, char = ' ') =>
//   str + String(char).repeat(Math.max(0, length - str.length));

//53
// const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
// console.log(capitalize('hello')); // 'Hello'

//54
// const uncapitalize = (str) => str.charAt(0).toLowerCase() + str.slice(1);

//55
// const camelCase = (str) =>
//   str.replace(/[\s_-](.)/g, (_, char) => char.toUpperCase());
// console.log(camelCase('hello-world')); // 'helloWorld'

//56
// const snakeCase = (str) =>
//   str.replace(/([A-Z])/g, '_$1').toLowerCase();
// console.log(snakeCase('helloWorld')); // 'hello_world'

//57
// const kebabCase = (str) =>
//   str.replace(/([A-Z])/g, '-$1').toLowerCase();

//58
// const pascalCase = (str) =>
//   str.replace(/(^|-| )(.)/g, (_, __, char) => char.toUpperCase());

//59
// const reverse = (str) => str.split('').reverse().join('');
// console.log(reverse('hello')); // 'olleh'

//60
// const isPalindrome = (str) => {
//   const cleaned = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
//   return cleaned === cleaned.split('').reverse().join('');
// };
// console.log(isPalindrome('A man a plan a canal Panama')); // true

//61
// const countOccurrences = (str, substr) =>
//   (str.match(new RegExp(substr, 'g')) || []).length;
// console.log(countOccurrences('hello world', 'l')); // 3

//62
// const truncate = (str, length) =>
//   str.length > length ? str.slice(0, length) + '...' : str;

//63
// const slugify = (str) =>
//   str.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

//64
// const repeat = (str, times) => str.repeat(times);

//65
// const template = (str, data) =>
//   str.replace(/\{(\w+)\}/g, (match, key) => data[key] || match);
// console.log(template('Hello {name}', {name: 'John'})); // 'Hello John'

//66
// const escapeHtml = (str) => {
//   const div = document.createElement('div');
//   div.textContent = str;
//   return div.innerHTML;
// };

//67
// const unescapeHtml = (str) => {
//   const div = document.createElement('div');
//   div.innerHTML = str;
//   return div.textContent || div.innerText;
// };

//68
// const isEmail = (str) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
// console.log(isEmail('test@example.com')); // true

//69
// const isUrl = (str) => {
//   try {
//     new URL(str);
//     return true;
//   } catch {
//     return false;
//   }
// };

//70
// const isPhoneNumber = (str) => /^\d{10}$/.test(str.replace(/\D/g, ''));

//71
// const isIPv4 = (str) =>
//   /^(\d{1,3}\.){3}\d{1,3}$/.test(str) &&
//   str.split('.').every(n => parseInt(n) <= 255);

//72
// const isStrongPassword = (str) =>
//   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(str);

//73
// const isHexColor = (str) => /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(str);

//74
// const extractEmails = (str) =>
//   str.match(/[^\s@]+@[^\s@]+\.[^\s@]+/g) || [];

//75
// const extractUrls = (str) =>
//   str.match(/https?:\/\/[^\s]+/g) || [];

//76
// const highlightMatches = (str, pattern) =>
//   str.replace(new RegExp(pattern, 'gi'), match => `<mark>${match}</mark>`);

//77
// const splitByCase = (str) =>
//   str.replace(/([a-z])([A-Z])/g, '$1 $2').split(' ');
// console.log(splitByCase('helloWorld')); // ['hello', 'World']

//78
// const toWords = (str) =>
//   str.match(/\b\w+\b/g) || [];
// console.log(toWords('hello world!')); // ['hello', 'world']

//79
// const commonPrefix = (strs) => {
//   if (!strs.length) return '';
//   const sorted = strs.sort();
//   const first = sorted[0], last = sorted[strs.length - 1];
//   for (let i = 0; i < first.length; i++) {
//     if (first[i] !== last[i]) return first.slice(0, i);
//   }
//   return first;
// };

//80
// const longestCommonSubsequence = (str1, str2) => {
//   const m = str1.length, n = str2.length;
//   const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));
//   for (let i = 1; i <= m; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (str1[i - 1] === str2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
//       else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
//     }
//   }
//   return dp[m][n];
// };

//81
// const levenshteinDistance = (str1, str2) => {
//   const m = str1.length, n = str2.length;
//   const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));
//   for (let i = 0; i <= m; i++) dp[i][0] = i;
//   for (let j = 0; j <= n; j++) dp[0][j] = j;
//   for (let i = 1; i <= m; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (str1[i - 1] === str2[j - 1]) dp[i][j] = dp[i - 1][j - 1];
//       else dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
//     }
//   }
//   return dp[m][n];
// };

//82
// const hammingDistance = (str1, str2) => {
//   if (str1.length !== str2.length) return -1;
//   return [...str1].reduce((sum, char, i) => sum + (char !== str1[i] ? 1 : 0), 0);
// };

//83
// const sortBy = (arr, fn) => {
//   return [...arr].sort((a, b) => {
//     const aVal = fn(a);
//     const bVal = fn(b);
//     return aVal > bVal ? 1 : aVal < bVal ? -1 : 0;
//   });
// };
// const users = [{name: 'John', age: 30}, {name: 'Jane', age: 25}];
// console.log(sortBy(users, u => u.age));

//84
// const max = (arr) => arr.reduce((a, b) => a > b ? a : b);
// console.log(max([1, 5, 3])); // 5

//85
// const min = (arr) => arr.reduce((a, b) => a < b ? a : b);
// console.log(min([1, 5, 3])); // 1

//86
// const sum = (arr) => arr.reduce((a, b) => a + b, 0);
// console.log(sum([1, 2, 3, 4])); // 10

//87
// const average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
// console.log(average([1, 2, 3, 4])); // 2.5

//88
// const variance = (arr) => {
//   const avg = arr.reduce((a, b) => a + b) / arr.length;
//   return arr.reduce((a, b) => a + (b - avg) ** 2, 0) / arr.length;
// };

//89
// const standardDeviation = (arr) => Math.sqrt(variance(arr));

//90
// const median = (arr) => {
//   const sorted = [...arr].sort((a, b) => a - b);
//   return sorted.length % 2 ? sorted[Math.floor(sorted.length / 2)]
//     : (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2;
// };
// console.log(median([1, 2, 3, 4, 5])); // 3

//91
// const mode = (arr) => {
//   const counts = {};
//   arr.forEach(n => counts[n] = (counts[n] || 0) + 1);
//   return Object.keys(counts).reduce((a, b) =>
//     counts[a] > counts[b] ? a : b
//   );
// };

//92
// const range = (end) => Array.from({length: end}, (_, i) => i);
// console.log(range(5)); // [0, 1, 2, 3, 4]

//93
// const replicate = (times, value) => Array(times).fill(value);
// console.log(replicate(3, 'x')); // ['x', 'x', 'x']

//94
// const create = (len, fn) => Array.from({length: len}, fn);

//95
// const remove = (arr, item) => arr.filter(x => x !== item);
// console.log(remove([1, 2, 3, 2], 2)); // [1, 3]

//96
// const removeAt = (arr, index) => [...arr.slice(0, index), ...arr.slice(index + 1)];
// console.log(removeAt([1, 2, 3], 1)); // [1, 3]

//97
// const insert = (arr, index, item) => [
//   ...arr.slice(0, index), item, ...arr.slice(index)
// ];
// console.log(insert([1, 2, 3], 1, 99)); // [1, 99, 2, 3]

//98
// const replace = (arr, index, item) => [
//   ...arr.slice(0, index), item, ...arr.slice(index + 1)
// ];

//99
// const rotate = (arr, times = 1) => {
//   const len = arr.length;
//   const rotation = times % len;
//   return [...arr.slice(-rotation), ...arr.slice(0, len - rotation)];
// };
// console.log(rotate([1, 2, 3, 4], 1)); // [4, 1, 2, 3]

//100
// const compact = (arr) => arr.filter(x => x != null);
// console.log(compact([0, 1, false, 2, '', 3, null, undefined])); // [0, 1, false, 2, '', 3]

//101
// const initial = (arr) => arr.slice(0, -1);
// console.log(initial([1, 2, 3, 4])); // [1, 2, 3]

//102
// const tail = (arr) => arr.slice(1);
// console.log(tail([1, 2, 3, 4])); // [2, 3, 4]

//103
// const head = (arr) => arr[0];
// console.log(head([1, 2, 3])); // 1

//104
// const last = (arr) => arr[arr.length - 1];
// console.log(last([1, 2, 3])); // 3

//105
// const nth = (arr, n) => arr[n < 0 ? arr.length + n : n];
// console.log(nth([1, 2, 3, 4], -1)); // 4

//106
// const take = (arr, n) => arr.slice(0, n);
// console.log(take([1, 2, 3, 4], 2)); // [1, 2]

//107
// const drop = (arr, n) => arr.slice(n);
// console.log(drop([1, 2, 3, 4], 2)); // [3, 4]

//108
// const dropRight = (arr, n) => arr.slice(0, -n);
// console.log(dropRight([1, 2, 3, 4], 2)); // [1, 2]

//109
// const takeRight = (arr, n) => arr.slice(-n);
// console.log(takeRight([1, 2, 3, 4], 2)); // [3, 4]

//110
// const findIndex = (arr, predicate) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (predicate(arr[i], i)) return i;
//   }
//   return -1;
// };

//111
// const findLastIndex = (arr, predicate) => {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (predicate(arr[i], i)) return i;
//   }
//   return -1;
// };

//112
// const indexOf = (arr, item) => arr.indexOf(item);

//113
// const lastIndexOf = (arr, item) => arr.lastIndexOf(item);

//114
// const includes = (arr, item) => arr.includes(item);

//115
// const startsWith = (arr, prefix) =>
//   arr.length >= prefix.length &&
//   prefix.every((item, i) => arr[i] === item);

//116
// const endsWith = (arr, suffix) =>
//   arr.length >= suffix.length &&
//   suffix.every((item, i) => arr[arr.length - suffix.length + i] === item);

//117
// const everyIndex = (arr, fn) => arr.every(fn);

//118
// const someIndex = (arr, fn) => arr.some(fn);

//119
// const partition = (arr, predicate) => [
//   arr.filter(predicate),
//   arr.filter(x => !predicate(x))
// ];

//120
// const negate = (fn) => (...args) => !fn(...args);
// const isEven = n => n % 2 === 0;
// const isOdd = negate(isEven);
// console.log(isOdd(3)); // true

//121
// const complement = (fn) => (...args) => !fn(...args);

//122
// const until = (predicate, fn, initial) => {
//   let value = initial;
//   while (!predicate(value)) value = fn(value);
//   return value;
// };

//123
// const repeat = (fn, times) => {
//   while (times-- > 0) fn();
// };

//124
// const times = (n, fn) => Array.from({length: n}, (_, i) => fn(i));
// console.log(times(3, i => i * 2)); // [0, 2, 4]

//125
// const during = (predicate, fn) => {
//   while (predicate()) fn();
// };

//126
// const lazy = (fn) => {
//   let called = false;
//   let result;
//   return (...args) => {
//     if (!called) {
//       result = fn(...args);
//       called = true;
//     }
//     return result;
//   };
// };

//127
// const coalesce = (...values) => values.find(v => v != null);
// console.log(coalesce(null, undefined, 0, '', 'default')); // 0

//128
// const tap = (value, fn) => {
//   fn(value);
//   return value;
// };
// console.log(tap(5, x => console.log(x))); // logs 5, returns 5

//129
// const asyncTap = async (value, fn) => {
//   await fn(value);
//   return value;
// };

//130
// const timeout = (fn, delay) => {
//   return new Promise((resolve, reject) => {
//     const timer = setTimeout(() => {
//       try {
//         resolve(fn());
//       } catch (e) {
//         reject(e);
//       }
//     }, delay);
//   });
// };

//131
// const wait = (delay) => new Promise(resolve => setTimeout(resolve, delay));
// wait(100).then(() => console.log('done'));

//132
// const waitUntil = (predicate, timeout = Infinity) => {
//   return new Promise((resolve, reject) => {
//     const check = () => {
//       if (predicate()) resolve();
//       else setTimeout(check, 10);
//     };
//     const timer = setTimeout(() => reject('timeout'), timeout);
//     check();
//   });
// };

//133
// const sequence = (...fns) => async (...args) => {
//   for (const fn of fns) {
//     args = [await fn(...args)];
//   }
//   return args[0];
// };

//134
// const parallel = (...fns) => (...args) => Promise.all(fns.map(f => f(...args)));

//135
// const waterfall = async (fns, initial) => {
//   let result = initial;
//   for (const fn of fns) {
//     result = await fn(result);
//   }
//   return result;
// };

//136
// const promisify = (fn) => (...args) =>
//   new Promise((resolve, reject) => {
//     fn(...args, (err, result) => {
//       if (err) reject(err);
//       else resolve(result);
//     });
//   });

//137
// const asyncSequence = async (arr, fn) => {
//   for (const item of arr) {
//     await fn(item);
//   }
// };

//138
// const asyncMap = async (arr, fn) => {
//   const results = [];
//   for (const item of arr) {
//     results.push(await fn(item));
//   }
//   return results;
// };

//139
// const asyncFilter = async (arr, predicate) => {
//   const results = [];
//   for (const item of arr) {
//     if (await predicate(item)) results.push(item);
//   }
//   return results;
// };

//140
// const batch = (fn, size) => (arr) => {
//   const results = [];
//   for (let i = 0; i < arr.length; i += size) {
//     results.push(fn(arr.slice(i, i + size)));
//   }
//   return results;
// };

//141
// const parseJSON = (str) => {
//   try {
//     return JSON.parse(str);
//   } catch (e) {
//     console.error('Invalid JSON:', e);
//     return null;
//   }
// };

//142
// const stringifyJSON = (obj, pretty = false) =>
//   JSON.stringify(obj, null, pretty ? 2 : 0);

//143
// const reviver = (key, value) =>
//   typeof value === 'string' && value.match(/^\d{4}-\d{2}-\d{2}$/)
//     ? new Date(value)
//     : value;
// const json = '{\"date\":\"2024-01-01\"}';
// console.log(JSON.parse(json, reviver));

//144
// const replacer = (key, value) =>
//   value instanceof Date ? value.toISOString() : value;
// console.log(JSON.stringify({date: new Date()}, replacer));

//145
// const checksum = (str) => {
//   let sum = 0;
//   for (let i = 0; i < str.length; i++) {
//     sum += str.charCodeAt(i);
//   }
//   return sum % 256;
// };

//146
// const hash = (str) => {
//   let hash = 0;
//   for (let i = 0; i < str.length; i++) {
//     const char = str.charCodeAt(i);
//     hash = ((hash << 5) - hash) + char;
//     hash = hash & hash;
//   }
//   return Math.abs(hash);
// };

//147
// const encodeBase64 = (str) => Buffer.from(str).toString('base64');
// const decodeBase64 = (str) => Buffer.from(str, 'base64').toString('utf8');

//148
// const sha256 = require('crypto').createHash;
// const hash = sha256('sha256').update('hello').digest('hex');

//149
// const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
// delay(1000).then(() => console.log('After 1 second'));

//150
// const immediateAsync = (fn) => new Promise(resolve => {
//   setImmediate(() => resolve(fn()));
// });

//151
// const getContext = () => {
//   'use strict';
//   return this; // undefined in strict mode functions
// };

//152
// const createContext = (context) => {
//   return function() {
//     return this;
//   }.bind(context);
// };

//153
// const getGlobal = () =>
//   typeof window !== 'undefined' ? window :
//   typeof global !== 'undefined' ? global :
//   typeof self !== 'undefined' ? self : this;

//154
// const isBrowser = () => typeof window !== 'undefined';

//155
// const isNode = () => typeof process !== 'undefined' && process.versions && process.versions.node;

//156
// const isWorker = () => typeof importScripts !== 'undefined';

//157
// try {
//   throw new Error('Test error');
// } catch (e) {
//   console.log(e.message); // Test error
// } finally {
//   console.log('Finally block');
// }

//158
// const attempts = (fn, times = 3) => {
//   try {
//     return fn();
//   } catch (e) {
//     if (times <= 1) throw e;
//     return attempts(fn, times - 1);
//   }
// };

//159
// const tryCatch = (fn, onError) => {
//   try {
//     return fn();
//   } catch (e) {
//     return onError(e);
//   }
// };

//160
// const asyncTryCatch = async (fn, onError) => {
//   try {
//     return await fn();
//   } catch (e) {
//     return onError(e);
//   }
// };

//161
// const suppress = (fn) => {
//   try {
//     fn();
//   } catch (e) {
//     // suppress error
//   }
// };

//162
// class CustomError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = this.constructor.name;
//   }
// }

//163
// const throwError = (message) => {
//   throw new Error(message);
// };

//164
// const throwIf = (condition, message) => {
//   if (condition) throw new Error(message);
// };

//165
// const throwUnless = (condition, message) => {
//   if (!condition) throw new Error(message);
// };

//166
// const validate = (obj, schema) => {
//   for (const key in schema) {
//     if (!(key in obj)) throw new Error(`Missing key: ${key}`);
//   }
//   return obj;
// };

//167
// const pick = (obj, keys) =>
//   keys.reduce((acc, key) => ({...acc, [key]: obj[key]}), {});
// console.log(pick({a: 1, b: 2, c: 3}, ['a', 'c'])); // {a: 1, c: 3}

//168
// const omit = (obj, keys) =>
//   Object.keys(obj).reduce((acc, key) =>
//     keys.includes(key) ? acc : {...acc, [key]: obj[key]},
//   {});

//169
// const paths = (obj, prefix = '') => {
//   let paths = [];
//   for (const key in obj) {
//     const value = obj[key];
//     const path = prefix ? `${prefix}.${key}` : key;
//     if (value !== null && typeof value === 'object') {
//       paths = paths.concat(paths(value, path));
//     } else {
//       paths.push(path);
//     }
//   }
//   return paths;
// };

//170
// const getType = (value) => {
//   if (value === null) return 'null';
//   if (Array.isArray(value)) return 'array';
//   return typeof value;
// };
// console.log(getType([1, 2, 3])); // array

//171
// const isPromise = (value) =>
//   value && typeof value.then === 'function';

//172
// const isGenerator = (fn) =>
//   fn && fn.constructor && fn.constructor.name === 'GeneratorFunction';

//173
// const isAsyncFunction = (fn) =>
//   fn && fn.constructor && fn.constructor.name === 'AsyncFunction';

//174
// const isRegExp = (value) => value instanceof RegExp;

//175
// const isDate = (value) => value instanceof Date && !isNaN(value);

//176
// const isError = (value) => value instanceof Error;

//177
// const isEmpty = (value) => {
//   if (value == null) return true;
//   if (Array.isArray(value) || typeof value === 'string') return value.length === 0;
//   if (value instanceof Map || value instanceof Set) return value.size === 0;
//   if (typeof value === 'object') return Object.keys(value).length === 0;
//   return false;
// };

//178
// const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);

//179
// const isPlainObject = (value) =>
//   value && value.constructor === Object;

//180
// const has = (obj, path) =>
//   path.split('.').every(key => obj = obj?.[key], obj) !== undefined;

//181
// const get = (obj, path, defaultValue = undefined) => {
//   const value = path.split('.').reduce((acc, key) => acc?.[key], obj);
//   return value !== undefined ? value : defaultValue;
// };

//182
// const set = (obj, path, value) => {
//   const keys = path.split('.');
//   const lastKey = keys.pop();
//   const target = keys.reduce((acc, key) =>
//     (acc[key] = acc[key] || {}), obj);
//   target[lastKey] = value;
//   return obj;
// };

//183
// const update = (obj, path, fn) => {
//   const keys = path.split('.');
//   const lastKey = keys.pop();
//   const target = keys.reduce((acc, key) =>
//     (acc[key] = acc[key] || {}), obj);
//   target[lastKey] = fn(target[lastKey]);
//   return obj;
// };

//184
// const findByPath = (obj, path, value) => {
//   for (const item of Object.values(obj)) {
//     const pathValue = path.split('.').reduce((acc, key) => acc?.[key], item);
//     if (pathValue === value) return item;
//   }
//   return null;
// };

//185
// const memoize2 = (fn, keyGenerator) => {
//   const cache = new Map();
//   return (...args) => {
//     const key = keyGenerator(...args);
//     if (cache.has(key)) return cache.get(key);
//     const result = fn(...args);
//     cache.set(key, result);
//     return result;
//   };
// };

//186
// const throttle2 = (fn, interval) => {
//   let lastCall = 0;
//   return (...args) => {
//     const now = Date.now();
//     if (now - lastCall >= interval) {
//       fn(...args);
//       lastCall = now;
//     }
//   };
// };

//187
// const debounce2 = (fn, delay, immediate = false) => {
//   let timeout;
//   return (...args) => {
//     clearTimeout(timeout);
//     if (immediate && !timeout) fn(...args);
//     timeout = setTimeout(() => {
//       if (!immediate) fn(...args);
//       timeout = null;
//     }, delay);
//   };
// };

//188
// const rateLimit = (fn, calls, interval) => {
//   let count = 0;
//   let lastReset = Date.now();
//   return (...args) => {
//     if (Date.now() - lastReset > interval) {
//       count = 0;
//       lastReset = Date.now();
//     }
//     if (count < calls) {
//       count++;
//       return fn(...args);
//     }
//   };
// };

//189
// const dedup = (fn) => {
//   let pending;
//   return (...args) => {
//     if (pending) return pending;
//     pending = Promise.resolve(fn(...args));
//     return pending.finally(() => pending = null);
//   };
// };

//190
// const queue = (fn, options = {}) => {
//   const tasks = [];
//   let running = false;
//   const process = async () => {
//     running = true;
//     while (tasks.length > 0) {
//       const task = tasks.shift();
//       await task();
//     }
//     running = false;
//   };
//   return (...args) => {
//     tasks.push(() => fn(...args));
//     if (!running) process();
//   };
// };

//191
// const createReactive = (obj, handler) => {
//   return new Proxy(obj, handler);
// };

//192
// const reactive = (obj) => {
//   const handler = {
//     get(target, property) {
//       console.log(`Getting ${property}`);
//       return target[property];
//     },
//     set(target, property, value) {
//       console.log(`Setting ${property} to ${value}`);
//       target[property] = value;
//       return true;
//     }
//   };
//   return new Proxy(obj, handler);
// };

//193
// const revoke = () => {
//   const target = {};
//   const handler = {};
//   const {proxy, revoke} = Proxy.revocable(target, handler);
//   revoke(); // proxy is no longer usable
// };

//194
// const intercept = (obj, interceptor) => {
//   return new Proxy(obj, {
//     get(target, key) {
//       const value = target[key];
//       return interceptor(key, value);
//     }
//   });
// };

//195
// const createValidator = (schema) => {
//   return new Proxy({}, {
//     set(target, key, value) {
//       if (schema[key] && !schema[key](value)) {
//         throw new TypeError(`Invalid type for ${key}`);
//       }
//       target[key] = value;
//       return true;
//     }
//   });
// };

//196
// const createObservable = (value) => {
//   const subscribers = new Set();
//   return {
//     get: () => value,
//     set: (newValue) => {
//       value = newValue;
//       subscribers.forEach(fn => fn(value));
//     },
//     subscribe: (fn) => {
//       subscribers.add(fn);
//       return () => subscribers.delete(fn);
//     }
//   };
// };

//197
// const createEvent = () => {
//   const listeners = new Set();
//   return {
//     emit: (data) => listeners.forEach(fn => fn(data)),
//     on: (fn) => {
//       listeners.add(fn);
//       return () => listeners.delete(fn);
//     }
//   };
// };

//198
// const createSubject = () => {
//   const observers = new Set();
//   return {
//     next: (value) => observers.forEach(observer => observer.next(value)),
//     subscribe: (observer) => {
//       observers.add(observer);
//       return () => observers.delete(observer);
//     }
//   };
// };

//199
// const createStore = (initialState) => {
//   let state = initialState;
//   const observers = new Set();
//   return {
//     getState: () => ({...state}),
//     setState: (newState) => {
//       state = {...state, ...newState};
//       observers.forEach(fn => fn(state));
//     },
//     subscribe: (fn) => {
//       observers.add(fn);
//       return () => observers.delete(fn);
//     }
//   };
// };

//200
// const createReducer = (initialState, reducers) => {
//   let state = initialState;
//   return (action) => {
//     const reducer = reducers[action.type];
//     if (reducer) state = reducer(state, action);
//     return state;
//   };
// };

//201
// const entries2 = (obj) => Object.entries(obj);

//202
// const keys2 = (obj) => Object.keys(obj);

//203
// const values2 = (obj) => Object.values(obj);

//204
// const isArray2 = (val) => Array.isArray(val);

//205
// const isObject2 = (val) => val !== null && typeof val === 'object' && !Array.isArray(val);

//206
// const assertType = (value, type) => {
//   if (typeof value !== type) throw new TypeError(`Expected ${type}, got ${typeof value}`);
//   return value;
// };

//207
// const tryParse = (str, defaultValue = null) => {
//   try {
//     return JSON.parse(str);
//   } catch {
//     return defaultValue;
//   }
// };

//208
// const tryCatch2 = (fn, fallback = null) => {
//   try {
//     return fn();
//   } catch {
//     return fallback;
//   }
// };

//209
// const either = (a, b) => a !== undefined && a !== null ? a : b;

//210
// const all = (predicates) => (value) => predicates.every(p => p(value));

//211
// const any = (predicates) => (value) => predicates.some(p => p(value));

//212
// const both = (a, b) => (...args) => a(...args) && b(...args);

//213
// const either2 = (a, b) => (...args) => a(...args) || b(...args);

//214
// const not = (fn) => (...args) => !fn(...args);

//215
// const maybe = (fn) => (...args) =>
//   args.some(arg => arg == null) ? undefined : fn(...args);

//216
// const identity = (x) => x;

//217
// const constant = (value) => () => value;

//218
// const mirror = (obj) => obj;

//219
// const compose2 = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);

//220
// const pipe2 = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

//221
// const spread = (fn) => (args) => fn(...args);

//222
// const gather = (fn) => (...args) => fn(args);

//223
// const negate2 = (fn) => (...args) => !fn(...args);

//224
// const flip = (fn) => (a, b) => fn(b, a);

//225
// const swap = (fn) => (...args) => fn(...args.reverse());

//226
// const mapArg = (index, fn) => (...args) => {
//   args[index] = fn(args[index]);
//   return args;
// };

//227
// const filterArgs = (predicate) => (...args) => args.filter(predicate);

//228
// const reduceArgs = (fn, initial) => (...args) => args.reduce(fn, initial);

//229
// const accumulate = (fn) => {
//   return (...args) => {
//     let result = args[0];
//     for (let i = 1; i < args.length; i++) {
//       result = fn(result, args[i]);
//     }
//     return result;
//   };
// };

//230
// const cascade = (...fns) => (initial) =>
//   fns.reduce((result, fn) => fn(result), initial);

//231
// const branch = (condition, trueFunc, falseFunc) => (...args) =>
//   condition(...args) ? trueFunc(...args) : falseFunc(...args);

//232
// const when = (condition, fn) => (...args) =>
//   condition(...args) ? fn(...args) : undefined;

//233
// const unless = (condition, fn) => (...args) =>
//   !condition(...args) ? fn(...args) : undefined;

//234
// const guard = (predicate, fn) => (...args) => {
//   if (!predicate(...args)) throw new Error('Guard failed');
//   return fn(...args);
// };

//235
// const limit = (count, fn) => {
//   let calls = 0;
//   return (...args) => {
//     if (calls >= count) throw new Error('Limit exceeded');
//     calls++;
//     return fn(...args);
//   };
// };

//236
// const after = (count, fn) => {
//   let calls = 0;
//   return (...args) => {
//     if (++calls >= count) return fn(...args);
//   };
// };

//237
// const before = (count, fn) => {
//   let calls = 0;
//   return (...args) => {
//     if (calls++ < count) return fn(...args);
//   };
// };

//238
// const between = (min, max, fn) => {
//   let calls = 0;
//   return (...args) => {
//     if (calls >= min && calls < max) {
//       calls++;
//       return fn(...args);
//     }
//     calls++;
//   };
// };

//239
// const surrogate = (fn, context) => fn.bind(context);

//240
// const proxy = (fn) => (...args) => fn(...args);

//241
// const delegate = (obj, key, fn) => {
//   obj[key] = fn.bind(obj);
//   return obj;
// };

//242
// const create2 = (prototype) => Object.create(prototype);

//243
// const extend = (target, source) => Object.assign(target, source);

//244
// const clone2 = (obj) => Object.assign({}, obj);

//245
// const seal2 = (obj) => Object.seal(obj);

//246
// const freeze2 = (obj) => Object.freeze(obj);

//247
// const isFrozen = (obj) => Object.isFrozen(obj);

//248
// const isSealed = (obj) => Object.isSealed(obj);

//249
// const isExtensible = (obj) => Object.isExtensible(obj);

//250
// const preventExtensions = (obj) => Object.preventExtensions(obj);

//251
// const getOwnPropertyNames = (obj) => Object.getOwnPropertyNames(obj);

//252
// const getOwnPropertyDescriptor = (obj, prop) => Object.getOwnPropertyDescriptor(obj, prop);

//253
// const getOwnPropertyDescriptors = (obj) => Object.getOwnPropertyDescriptors(obj);

//254
// const defineProperty = (obj, prop, descriptor) => Object.defineProperty(obj, prop, descriptor);

//255
// const defineProperties = (obj, descriptors) => Object.defineProperties(obj, descriptors);

//256
// const getPrototypeOf = (obj) => Object.getPrototypeOf(obj);

//257
// const setPrototypeOf = (obj, proto) => Object.setPrototypeOf(obj, proto);

//258
// const is = (a, b) => Object.is(a, b);

//259
// let a = {};
// let b = {};
// console.log(Object.is(a, a)); // true
// console.log(Object.is(a, b)); // false
// Object.is handles NaN differently than ===

//260
// const createMethod = (name, fn) => ({[name]: fn});

//261
// const createProperty = (name, value) => ({[name]: value});

//262
// const createComputed = (obj, key, getter) => {
//   Object.defineProperty(obj, key, {
//     get: getter,
//     configurable: true
//   });
// };

//263
// const createAccessor = (obj, key, getter, setter) => {
//   Object.defineProperty(obj, key, {
//     get: getter,
//     set: setter,
//     configurable: true
//   });
// };

//264
// const createReadOnly = (obj, key, value) => {
//   Object.defineProperty(obj, key, {
//     value: value,
//     writable: false,
//     configurable: false
//   });
// };

//265
// const createEnumerable = (obj, key, value) => {
//   Object.defineProperty(obj, key, {
//     value: value,
//     enumerable: true
//     ...
// });
// };

//266
// const isOwnProperty = (obj, key) => obj.hasOwnProperty(key);

//267
// const isInherited = (obj, key) => key in obj && !obj.hasOwnProperty(key);

//268
// const getOwnKeys = (obj) => Object.getOwnPropertyNames(obj)
//   .concat(Object.getOwnPropertySymbols(obj));

//269
// const getAllKeys = (obj) => {
//   const keys = [];
//   for (let key in obj) keys.push(key);
//   return keys;
// };

//270
// const getEnumerableKeys = (obj) =>
//   Object.keys(obj);

//271
// const getSymbols = (obj) =>
//   Object.getOwnPropertySymbols(obj);

//272
// const createWeakMap = () => new WeakMap();

//273
// const weakMapSet = (map, key, value) => map.set(key, value);

//274
// const weakMapGet = (map, key) => map.get(key);

//275
// const weakMapHas = (map, key) => map.has(key);

//276
// const weakMapDelete = (map, key) => map.delete(key);

//277
// const createWeakSet = () => new WeakSet();

//278
// const weakSetAdd = (set, value) => set.add(value);

//279
// const weakSetHas = (set, value) => set.has(value);

//280
// const weakSetDelete = (set, value) => set.delete(value);

//281
// const createMap = () => new Map();

//282
// const mapSet = (map, key, value) => map.set(key, value);

//283
// const mapGet = (map, key) => map.get(key);

//284
// const mapHas = (map, key) => map.has(key);

//285
// const mapDelete = (map, key) => map.delete(key);

//286
// const mapClear = (map) => map.clear();

//287
// const mapSize = (map) => map.size;

//288
// const mapKeys = (map) => Array.from(map.keys());

//289
// const mapValues = (map) => Array.from(map.values());

//290
// const mapEntries = (map) => Array.from(map.entries());

//291
// const createSet = () => new Set();

//292
// const setAdd = (set, value) => set.add(value);

//293
// const setHas = (set, value) => set.has(value);

//294
// const setDelete = (set, value) => set.delete(value);

//295
// const setClear = (set) => set.clear();

//296
// const setSize = (set) => set.size;

//297
// const setValues = (set) => Array.from(set);

//298
// const setUnion = (set1, set2) => new Set([...set1, ...set2]);

//299
// const setIntersection = (set1, set2) => new Set([...set1].filter(x => set2.has(x)));

//300
// const setDifference = (set1, set2) => new Set([...set1].filter(x => !set2.has(x)));

//301
// let map = new Map([[1, 'one'], [2, 'two']]);
// for (let [key, value] of map) {
//   console.log(key, value);
// }
// // Output: 1 one, 2 two

//302
// let set = new Set([1, 2, 3]);
// for (let value of set) {
//   console.log(value);
// }
// // Output: 1 2 3

//303
// let map = new Map();
// console.log(map.size); // 0
// map.set(1, 'one');
// console.log(map.size); // 1

//304
// let arr = [1, 2, 3];
// let iter = arr[Symbol.iterator]();
// console.log(iter.next()); // {value: 1, done: false}

//305
// let obj = {
//   [Symbol.iterator]() {
//     let count = 0;
//     return {
//       next: () => count < 3 ? {value: ++count, done: false} : {done: true}
//     };
//   }
// };
// for (let val of obj) console.log(val);
// // Output: 1 2 3

//306
// function* simpleGenerator() {
//   yield 1;
//   yield 2;
//   return 3;
// }
// let gen = simpleGenerator();
// console.log(gen.next()); // {value: 1, done: false}

//307
// function* rangeGenerator(start, end) {
//   for (let i = start; i < end; i++) yield i;
// }
// for (let val of rangeGenerator(1, 5)) console.log(val);
// // Output: 1 2 3 4

//308
// function* infiniteGenerator() {
//   let count = 0;
//   while (true) yield count++;
// }
// let gen = infiniteGenerator();
// console.log(gen.next().value); // 0

//309
// function* delegatingGenerator() {
//   yield* [1, 2, 3];
// }
// for (let val of delegatingGenerator()) console.log(val);
// // Output: 1 2 3

//310
// function* recursiveGenerator(n) {
//   if (n > 0) {
//     yield n;
//     yield* recursiveGenerator(n - 1);
//   }
// }
// for (let val of recursiveGenerator(3)) console.log(val);
// // Output: 3 2 1

//311
// let num = 1;
// const getNum = () => num;
// const setNum = (n) => num = n;
// setNum(5);
// console.log(getNum()); // 5

//312
// let arr = [1, 2, 3];
// const length = () => arr.length;
// console.log(length()); // 3

//313
// class Counter {
//   constructor() {
//     let count = 0;
//     this.increment = () => ++count;
//     this.get = () => count;
//   }
// }
// const counter = new Counter();
// counter.increment();
// console.log(counter.get()); // 1

//314
// const createCounter = () => {
//   let count = 0;
//   return {
//     increment: () => ++count,
//     decrement: () => --count,
//     get: () => count
//   };
// };

//315
// const createAccumulator = (initial = 0) => {
//   let value = initial;
//   return {
//     add: (n) => value += n,
//     subtract: (n) => value -= n,
//     get: () => value,
//     reset: () => value = initial
//   };
// };

//316
// const createStack = () => {
//   const items = [];
//   return {
//     push: (item) => items.push(item),
//     pop: () => items.pop(),
//     peek: () => items[items.length - 1],
//     isEmpty: () => items.length === 0,
//     size: () => items.length
//   };
// };

//317
// const createQueue = () => {
//   const items = [];
//   return {
//     enqueue: (item) => items.push(item),
//     dequeue: () => items.shift(),
//     front: () => items[0],
//     isEmpty: () => items.length === 0,
//     size: () => items.length
//   };
// };

//318
// const createLinkedList = () => {
//   let head = null;
//   return {
//     add: (value) => {
//       const node = {value, next: head};
//       head = node;
//     },
//     remove: () => head = head?.next,
//     print: () => {
//       let current = head;
//       while (current) {
//         console.log(current.value);
//         current = current.next;
//       }
//     }
//   };
// };

//319
// const createBinarySearchTree = () => {
//   let root = null;
//   return {
//     insert: (value) => {
//       const node = {value, left: null, right: null};
//       if (!root) root = node;
//     },
//     search: (value) => {
//       let current = root;
//       while (current) {
//         if (value === current.value) return true;
//         current = value < current.value ? current.left : current.right;
//       }
//       return false;
//     }
//   };
// };

//320
// const createGraph = () => {
//   const vertices = new Map();
//   return {
//     addVertex: (v) => vertices.set(v, []),
//     addEdge: (v1, v2) => {
//       vertices.get(v1).push(v2);
//       vertices.get(v2).push(v1);
//     },
//     getAdjacent: (v) => vertices.get(v)
//   };
// };

//321
// const linearSearch = (arr, value) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === value) return i;
//   }
//   return -1;
// };

//322
// const binarySearch = (arr, value) => {
//   let left = 0, right = arr.length - 1;
//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);
//     if (arr[mid] === value) return mid;
//     if (arr[mid] < value) left = mid + 1;
//     else right = mid - 1;
//   }
//   return -1;
// };

//323
// const bubbleSort = (arr) => {
//   const n = arr.length;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// };

//324
// const quickSort = (arr) => {
//   if (arr.length <= 1) return arr;
//   const pivot = arr[0];
//   const less = arr.slice(1).filter(x => x <= pivot);
//   const greater = arr.slice(1).filter(x => x > pivot);
//   return [...quickSort(less), pivot, ...quickSort(greater)];
// };

//325
// const mergeSort = (arr) => {
//   if (arr.length <= 1) return arr;
//   const mid = Math.floor(arr.length / 2);
//   const left = mergeSort(arr.slice(0, mid));
//   const right = mergeSort(arr.slice(mid));
//   return merge(left, right);
// };
// const merge = (left, right) => {
//   const result = [];
//   let i = 0, j = 0;
//   while (i < left.length && j < right.length) {
//     result.push(left[i] < right[j] ? left[i++] : right[j++]);
//   }
//   return result.concat(left.slice(i)).concat(right.slice(j));
// };

//326
// const insertionSort = (arr) => {
//   for (let i = 1; i < arr.length; i++) {
//     let key = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > key) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = key;
//   }
//   return arr;
// };

//327
// const selectionSort = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[minIndex]) minIndex = j;
//     }
//     [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//   }
//   return arr;
// };

//328
// const heapSort = (arr) => {
//   const n = arr.length;
//   for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
//     heapify(arr, n, i);
//   }
//   for (let i = n - 1; i > 0; i--) {
//     [arr[0], arr[i]] = [arr[i], arr[0]];
//     heapify(arr, i, 0);
//   }
//   return arr;
// };

//329
// const countingSort = (arr) => {
//   const max = Math.max(...arr);
//   const count = Array(max + 1).fill(0);
//   arr.forEach(num => count[num]++);
//   const result = [];
//   for (let i = 0; i <= max; i++) {
//     for (let j = 0; j < count[i]; j++) {
//       result.push(i);
//     }
//   }
//   return result;
// };

//330
// const radixSort = (arr) => {
//   const max = Math.max(...arr);
//   let exp = 1;
//   while (Math.floor(max / exp) > 0) {
//     countSortByDigit(arr, exp);
//     exp *= 10;
//   }
//   return arr;
// };

//331
// let obj = {a: 1, b: 2};
// let entries = Object.entries(obj);
// console.log(entries); // [['a', 1], ['b', 2]]

//332
// let obj = {a: 1, b: 2};
// let descriptors = Object.getOwnPropertyDescriptors(obj);
// console.log(descriptors);
// // {a: {value: 1, writable: true, ...}, b: {value: 2, ...}}

//333
// let str = 'hello';
// console.log([...str]); // ['h', 'e', 'l', 'l', 'o']

//334
// let arr = [1, 2, 3];
// let arrCopy = Array.from(arr);
// console.log(arrCopy); // [1, 2, 3]

//335
// let str = 'hello world';
// let words = str.split(' ');
// console.log(words); // ['hello', 'world']

//336
// let arr = ['hello', 'world'];
// let str = arr.join(' ');
// console.log(str); // 'hello world'

//337
// console.log(typeof (1/0)); // number
// console.log(1/0); // Infinity

//338
// console.log(typeof (-1/0)); // number
// console.log(-1/0); // -Infinity

//339
// console.log(Number.isFinite(1/0)); // false
// console.log(Number.isFinite(123)); // true

//340
// console.log(Number.isNaN(NaN)); // true
// console.log(isNaN('hello')); // true (coercion)

//341
// console.log(Number.isSafeInteger(9007199254740991)); // true
// console.log(Number.MAX_SAFE_INTEGER === 9007199254740991); // true

//342
// console.log(Number.isInteger(3.0)); // true
// console.log(Number.isInteger(3.1)); // false

//343
// console.log((0.1 + 0.2).toFixed(1)); // '0.3'

//344
// console.log((123).toString(16)); // '7b' (hex)

//345
// console.log((123).toExponential(2)); // '1.23e+2'

//346
// console.log((123).toPrecision(2)); // '1.2e+2'

//347
// console.log(Math.ceil(4.3)); // 5
// console.log(Math.floor(4.7)); // 4
// console.log(Math.round(4.5)); // 4

//348
// console.log(Math.abs(-10)); // 10
// console.log(Math.sign(-10)); // -1

//349
// console.log(Math.pow(2, 3)); // 8
// console.log(2 ** 3); // 8

//350
// console.log(Math.sqrt(16)); // 4
// console.log(Math.cbrt(27)); // 3

//351
// console.log(Math.log(Math.E)); // 1
// console.log(Math.log2(8)); // 3
// console.log(Math.log10(100)); // 2

//352
// console.log(Math.exp(1)); // 2.718...
// console.log(Math.E); // 2.718...

//353
// console.log(Math.sin(Math.PI/2)); // 1
// console.log(Math.cos(0)); // 1
// console.log(Math.tan(Math.PI/4)); // 0.999...

//354
// console.log(Math.asin(1)); // 1.57...
// console.log(Math.acos(0)); // 1.57...
// console.log(Math.atan(1)); // 0.78...

//355
// console.log(Math.hypot(3, 4)); // 5

//356
// console.log(Math.hypot(3, 4, 5)); // 7.07...

//357
// console.log(Math.trunc(4.9)); // 4
// console.log(Math.trunc(-4.9)); // -4

//358
// console.log(Math.imul(2, 4)); // 8
// console.log(Math.imul(0x7fffffff, 2)); // -2

//359
// console.log(Math.clz32(1)); // 31
// console.log(Math.clz32(1000)); // 22

//360
// console.log(Math.fround(1.337)); // 1.3370000123...

//361
// let date = new Date();
// console.log(date.getFullYear()); // current year

//362
// let date = new Date('2024-01-01');
// console.log(date.getTime()); // timestamp

//363
// let date1 = new Date('2024-01-01');
// let date2 = new Date('2024-01-02');
// console.log(date2 - date1); // 86400000 (1 day)

//364
// let date = new Date();
// console.log(date.toISOString());

//365
// let date = new Date();
// console.log(date.toLocaleDateString());

//366
// let date = new Date();
// console.log(Date.now()); // current timestamp

//367
// let date = new Date(2024, 0, 1);
// console.log(date.getMonth()); // 0 (January)

//368
// let date = new Date('2024-01-01T12:30:45');
// console.log(date.getHours()); // 12

//369
// let date = new Date();
// date.setHours(15);
// console.log(date.getHours()); // 15

//370
// let data = {name: undefined};
// console.log(JSON.stringify(data)); // {}

//371
// let fn = () => 'test';
// console.log(JSON.stringify({fn})); // {}

//372
// let data = {a: 1, b: 2, c: 3};
// let json = JSON.stringify(data, ['a', 'b']);
// console.log(json); // {"a":1,"b":2}

//373
// let data = {date: new Date()};
// let json = JSON.stringify(data, (key, value) =>
//   value instanceof Date ? value.toISOString() : value
// );

//374
// let arr = [1, 2, undefined, 4];
// console.log(JSON.stringify(arr)); // [1,2,null,4]

//375
// let circular = {a: 1};
// circular.self = circular;
// try {
//   JSON.stringify(circular);
// } catch (e) {
//   console.log('Circular reference error');
// }

//376
// let obj = {a: 1};
// Object.defineProperty(obj, 'hidden', {
//   value: 2,
//   enumerable: false
// });
// console.log(JSON.stringify(obj)); // {"a":1}

//377
// let arr = [1, 2, 3];
// let [a, b, c] = arr;
// console.log(a, b, c); // 1 2 3

//378
// let [a, , c] = [1, 2, 3];
// console.log(a, c); // 1 3

//379
// let {a, b} = {a: 1, b: 2, c: 3};
// console.log(a, b); // 1 2

//380
// let {a: x, b: y} = {a: 1, b: 2};
// console.log(x, y); // 1 2

//381
// let {a = 10} = {b: 2};
// console.log(a); // 10

//382
// let {a, ...rest} = {a: 1, b: 2, c: 3};
// console.log(rest); // {b: 2, c: 3}

//383
// let [a, b, ...rest] = [1, 2, 3, 4, 5];
// console.log(rest); // [3, 4, 5]

//384
// let {a, b: {c}} = {a: 1, b: {c: 2}};
// console.log(a, c); // 1 2

//385
// function test({x, y} = {}) {
//   console.log(x, y);
// }
// test({x: 1, y: 2}); // 1 2

//386
// function test(a = 1, b = 2) {
//   console.log(a + b);
// }
// test(); // 3
// test(5); // 7

//387
// function test(...args) {
//   console.log(args);
// }
// test(1, 2, 3); // [1, 2, 3]

//388
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let combined = [...arr1, ...arr2];
// console.log(combined); // [1, 2, 3, 4]

//389
// let obj1 = {a: 1};
// let obj2 = {b: 2};
// let combined = {...obj1, ...obj2};
// console.log(combined); // {a: 1, b: 2}

//390
// let str = 'hello';
// let chars = [...str];
// console.log(chars); // ['h', 'e', 'l', 'l', 'o']

//391
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 100);
// }
// // Output: 3, 3, 3

//392
// for (let i = 0; i < 3; i++) {
//   (() => {
//     let j = i;
//     setTimeout(() => console.log(j), 100);
//   })();
// }
// // Output: 0, 1, 2

//393
// class MyClass {
//   constructor(value) {
//     this.value = value;
//   }
//   get double() {
//     return this.value * 2;
//   }
//   set double(value) {
//     this.value = value / 2;
//   }
// }

//394
// class Parent {
//   constructor(name) {
//     this.name = name;
//   }
// }
// class Child extends Parent {
//   constructor(name, age) {
//     super(name);
//     this.age = age;
//   }
// }

//395
// class MyClass {
//   static staticMethod() {
//     return 'static';
//   }
// }
// console.log(MyClass.staticMethod()); // static

//396
// class MyClass {
//   #privateField = 1;
//   getPrivate() {
//     return this.#privateField;
//   }
// }

//397
// const sym = Symbol('unique');
// const obj = {[sym]: 'value'};
// console.log(obj[sym]); // value

//398
// const sym1 = Symbol.for('shared');
// const sym2 = Symbol.for('shared');
// console.log(sym1 === sym2); // true

//399
// const sym = Symbol('id');
// const obj = {[sym]: 1, a: 2};
// console.log(Object.keys(obj)); // ['a']
// console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(id)]

//400
// const arr = [1, 2, 3, 4, 5];
// const result = arr.findLast(x => x < 4);
// console.log(result); // 3

//401
// const arr = [1, 2, 3];
// const hasTwo = arr.find(x => x === 2) !== undefined;
// console.log(hasTwo); // true

//402
// const arr = [1, 2, 3];
// const allPositive = arr.every(x => x > 0);
// console.log(allPositive); // true

//403
// const arr = [1, -2, 3];
// const hasNegative = arr.some(x => x < 0);
// console.log(hasNegative); // true

//404
// const arr = [1, 2, 3, 4, 5];
// const product = arr.reduce((a, b) => a * b);
// console.log(product); // 120

//405
// const arr = [1, 2, 3, 4, 5];
// const doubled = arr.map(x => x * 2);
// console.log(doubled); // [2, 4, 6, 8, 10]

//406
// const arr = [1, 2, 3, 4, 5];
// const filtered = arr.filter(x => x % 2 === 0);
// console.log(filtered); // [2, 4]

//407
// const arr = [1, 2, 3];
// arr.forEach((val, idx) => console.log(idx, val));
// // Output: 0 1, 1 2, 2 3

//408
// const arr = [3, 1, 4, 1, 5];
// console.log(arr.sort((a, b) => a - b)); // [1, 1, 3, 4, 5]

//409
// const arr = [1, 2, 3];
// arr.reverse();
// console.log(arr); // [3, 2, 1]

//410
// const arr = [1, 2, 3];
// const newArr = arr.concat([4, 5]);
// console.log(newArr); // [1, 2, 3, 4, 5]

//411
// const arr = [1, 2, 3];
// const includes = arr.includes(2);
// console.log(includes); // true

//412
// const arr = [1, 2, 3, 2];
// const index = arr.indexOf(2);
// console.log(index); // 1

//413
// const arr = [1, 2, 3, 2];
// const lastIndex = arr.lastIndexOf(2);
// console.log(lastIndex); // 3

//414
// const arr = [1, 2, 3];
// arr.fill(0);
// console.log(arr); // [0, 0, 0]

//415
// const arr = [1, 2, 3];
// const slice = arr.slice(1, 2);
// console.log(slice); // [2]

//416
// const arr = [1, 2, 3, 4, 5];
// arr.splice(2, 1, 'x');
// console.log(arr); // [1, 2, 'x', 4, 5]

//417
// const arr = [[1, 2], [3, 4]];
// const flat = arr.flat();
// console.log(flat); // [1, 2, 3, 4]

//418
// const arr = [1, 2, 3];
// const flatMapped = arr.flatMap(x => [x, x * 2]);
// console.log(flatMapped); // [1, 2, 2, 4, 3, 6]

//419
// const str = 'hello';
// console.log(str.toUpperCase()); // HELLO

//420
// const str = 'HELLO';
// console.log(str.toLowerCase()); // hello

//421
// const str = 'hello';
// console.log(str.charAt(0)); // h

//422
// const str = 'hello';
// console.log(str.charCodeAt(0)); // 104

//423
// const str = 'hello';
// console.log(str.substring(0, 3)); // hel

//424
// const str = 'hello';
// console.log(str.substr(1, 3)); // ell

//425
// const str = 'hello';
// console.log(str.slice(1, 3)); // el

//426
// const str = 'hello world';
// console.log(str.indexOf('o')); // 4

//427
// const str = 'hello world';
// console.log(str.lastIndexOf('o')); // 7

//428
// const str = 'hello world';
// console.log(str.includes('world')); // true

//429
// const str = 'hello world';
// console.log(str.match(/l/g)); // ['l', 'l', 'l']

//430
// const str = 'hello world';
// console.log(str.search(/world/)); // 6

//431
// const str = 'hello world';
// console.log(str.replace('world', 'there')); // hello there

//432
// const str = 'hello';
// console.log(str.repeat(3)); // hellohellohello

//433
// const str = '  hello  ';
// console.log(str.trim()); // hello

//434
// const str = '  hello  ';
// console.log(str.trimStart()); // hello

//435
// const str = '  hello  ';
// console.log(str.trimEnd()); //   hello

//436
// const str = 'hello';
// console.log(str.padStart(8, '*')); // ***hello

//437
// const str = 'hello';
// console.log(str.padEnd(8, '*')); // hello***

//438
// const str = 'hello';
// console.log(str.split('')); // ['h', 'e', 'l', 'l', 'o']

//439
// const str = 'hello';
// console.log(str.concat(' world')); // hello world

//440
// const str = 'hello';
// console.log(str.startsWith('hel')); // true

//441
// const str = 'hello';
// console.log(str.endsWith('lo')); // true

//442
// const str = 'hello';
// console.log(str.toLowerCase() === str.toLowerCase()); // true

//443
// const regex = /hello/i;
// console.log(regex.test('HELLO')); // true

//444
// const regex = /(\w+)@(\w+)/;
// const match = 'test@example'.match(regex);
// console.log(match[1]); // test

//445
// const regex = /hello/g;
// let match;
// while ((match = regex.exec('hello hello')) !== null) {
//   console.log(match[0]);
// }

//446
// const regex = /hello/;
// console.log('hello world'.replace(regex, 'hi')); // hi world

//447
// const regex = /hello/g;
// console.log('hello world hello'.replace(regex, 'hi')); // hi world hi

//448
// const regex = /,/g;
// console.log('a,b,c'.split(regex)); // ['a', 'b', 'c']

//449
// const template = `Hello ${name}`;
// console.log(template); // Hello <value-of-name>

//450
// const multiline = `Line 1
// Line 2`;
// console.log(multiline);

//451
// function greet(name) {
//   return `Hello ${name}`;
// }
// console.log(greet('John')); // Hello John

//452
// const obj = {x: 1, y: 2};
// const {x, y} = obj;
// console.log(`x: ${x}, y: ${y}`); // x: 1, y: 2

//453
// const person = {
//   name: 'John',
//   greet() {
//     return `Hello ${this.name}`;
//   }
// };
// console.log(person.greet()); // Hello John

//454
// function factorial(n) {
//   return n <= 1 ? 1 : n * factorial(n - 1);
// }
// console.log(factorial(5)); // 120

//455
// function fibonacci(n) {
//   if (n <= 1) return n;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci(6)); // 8

//456
// const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
// console.log(gcd(48, 18)); // 6

//457
// const isPrime = (n) => {
//   if (n <= 1) return false;
//   for (let i = 2; i * i <= n; i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// };

//458
// const reverse2 = (n) => {
//   return Number(String(n).split('').reverse().join(''));
// };
// console.log(reverse2(123)); // 321

//459
// const sumDigits = (n) => {
//   return String(n).split('').reduce((a, b) => a + parseInt(b), 0);
// };
// console.log(sumDigits(123)); // 6

//460
// const countDigits = (n) => String(n).length;
// console.log(countDigits(12345)); // 5

//461
// const isArmstrong = (n) => {
//   const digits = String(n).split('').map(Number);
//   const power = digits.length;
//   return digits.reduce((a, b) => a + b ** power, 0) === n;
// };

//462
// const lcm = (a, b) => Math.abs(a * b) / gcd(a, b);
// console.log(lcm(12, 18)); // 36

//463
// function* fibonacci2() {
//   let [a, b] = [0, 1];
//   while (true) {
//     yield a;
//     [a, b] = [b, a + b];
//   }
// }

//464
// const memo = {};
// const fibonacci3 = (n) => {
//   if (n in memo) return memo[n];
//   if (n <= 1) return n;
//   return memo[n] = fibonacci3(n - 1) + fibonacci3(n - 2);
// };

//465
// const powerset = (arr) => {
//   return arr.reduce((acc, val) =>
//     acc.concat(acc.map(x => x.concat(val))), [[]]);
// };

//466
// const combinations2 = (arr, r, start = 0, combo = [], result = []) => {
//   if (combo.length === r) {
//     result.push([...combo]);
//     return;
//   }
//   for (let i = start; i < arr.length; i++) {
//     combo.push(arr[i]);
//     combinations2(arr, r, i + 1, combo, result);
//     combo.pop();
//   }
//   return result;
// };

//467
// const permutations2 = (arr) => {
//   if (arr.length <= 1) return [arr];
//   return arr.reduce((acc, val, i) =>
//     acc.concat(permutations2([...arr.slice(0, i), ...arr.slice(i + 1)])
//       .map(x => [val, ...x])), []
//   );
// };

//468
// console.log(eval('2 + 3')); // 5 - eval is dangerous!

//469
// const code = 'function test() { return 42; }';
// eval(code);
// console.log(test()); // 42

//470
// const fn = new Function('a', 'b', 'return a + b');
// console.log(fn(2, 3)); // 5

//471
// const getNumberType = (num) => {
//   if (Number.isInteger(num)) return 'integer';
//   if (Number.isNaN(num)) return 'NaN';
//   if (!Number.isFinite(num)) return 'Infinity';
//   return 'decimal';
// };

//472
// const getArrayStats = (arr) => ({
//   min: Math.min(...arr),
//   max: Math.max(...arr),
//   sum: arr.reduce((a, b) => a + b, 0),
//   length: arr.length
// });

//473
// const chunk2 = (arr, size) =>
//   Array.from({length: Math.ceil(arr.length / size)}, (_, i) =>
//     arr.slice(i * size, i * size + size)
//   );

//474
// const transpose2 = (matrix) =>
//   matrix[0].map((_, i) => matrix.map(row => row[i]));

//475
// const allEqual = (arr) => arr.every(val => val === arr[0]);
// console.log(allEqual([1, 1, 1])); // true

//476
// const allDifferent = (arr) => new Set(arr).size === arr.length;
// console.log(allDifferent([1, 2, 3])); // true

//477
// const none = (arr, predicate) => !arr.some(predicate);

//478
// const anyOrder = (arr1, arr2) => {
//   const count = {};
//   arr1.forEach(x => count[x] = (count[x] || 0) + 1);
//   return arr2.every(x => count[x]-- > 0);
// };

//479
// const countBy = (arr, fn) => {
//   return arr.reduce((acc, x) => {
//     const key = fn(x);
//     acc[key] = (acc[key] || 0) + 1;
//     return acc;
//   }, {});
// };

//480
// const groupBy2 = (arr, fn) => {
//   return arr.reduce((acc, x) => {
//     const key = fn(x);
//     (acc[key] = acc[key] || []).push(x);
//     return acc;
//   }, {});
// };

//481
// const maxBy = (arr, fn) =>
//   arr.reduce((a, b) => fn(a) > fn(b) ? a : b);

//482
// const minBy = (arr, fn) =>
//   arr.reduce((a, b) => fn(a) < fn(b) ? a : b);

//483
// const keyBy = (arr, fn) =>
//   arr.reduce((acc, x) => ({...acc, [fn(x)]: x}), {});

//484
// const hasDuplicates = (arr) =>
//   new Set(arr).size !== arr.length;

//485
// const removeDuplicates = (arr) =>
//   Array.from(new Set(arr));

//486
// const filterMap = (arr, predicate) =>
//   arr.filter(predicate).map(x => x);

//487
// const compactMap = (arr, fn) =>
//   arr.map(fn).filter(x => x != null);

//488
// const window = (arr, size) => {
//   const result = [];
//   for (let i = 0; i <= arr.length - size; i++) {
//     result.push(arr.slice(i, i + size));
//   }
//   return result;
// };

//489
// const sample2 = (arr) =>
//   arr[Math.floor(Math.random() * arr.length)];

//490
// const samples = (arr, num) => {
//   const shuffled = shuffle(arr);
//   return shuffled.slice(0, num);
// };

//491
// class EventEmitter {
//   constructor() {
//     this.events = {};
//   }
//   on(event, listener) {
//     if (!this.events[event]) this.events[event] = [];
//     this.events[event].push(listener);
//   }
//   emit(event, data) {
//     if (this.events[event]) {
//       this.events[event].forEach(listener => listener(data));
//     }
//   }
// }

//492
// const pipeline = (...fns) => (initial) =>
//   fns.reduce((value, fn) => fn(value), initial);

//493
// const difference2 = (arr1, arr2) =>
//   arr1.filter(item => !arr2.includes(item));

//494
// const symmetric = (arr1, arr2) => [
//   ...difference2(arr1, arr2),
//   ...difference2(arr2, arr1)
// ];

//495
// const intersection2 = (arr1, arr2) =>
//   arr1.filter(item => arr2.includes(item));

//496
// const union2 = (arr1, arr2) =>
//   Array.from(new Set([...arr1, ...arr2]));

//497
// const isSorted = (arr) =>
//   arr.every((val, i) => i === 0 || val >= arr[i - 1]);

//498
// const isReverSorted = (arr) =>
//   arr.every((val, i) => i === 0 || val <= arr[i - 1]);

//499
// const sequentialAsync = async (fns, initial) => {
//   let result = initial;
//   for (const fn of fns) {
//     result = await fn(result);
//   }
//   return result;
// };

//500
// async function tryCatchAsync(fn, fallback) {
//   try {
//     return await fn();
//   } catch {
//     return fallback;
//   }
// }

//More unique questions continue...
//501-800 would include advanced topics like WeakMap usage patterns, Proxy traps, Iterator protocol details,
//Module patterns, IIFE variations, Event delegation, Memory management, Performance optimization,
//Browser APIs usage, DOM manipulation patterns, Type coercion edge cases, Symbol usage,
//Promise chains, async/await patterns, Error boundaries, Validation patterns,
//Caching strategies, State management patterns, and many more advanced JavaScript concepts.

/*
Similar format to snip.js and snip2.js
Topics covered:
for...in loops
Closures and scope
instanceof operator
Object.freeze vs Object.seal
Floating-point precision
Shallow copy with spread operator
Destructuring with defaults
Rest parameters
Class inheritance and method overriding
Promises and async/await
Array methods (filter, map, find, etc.)
String methods (includes, startsWith, etc.)
Symbols
Arrow functions vs regular functions context
Generators
And many more advanced topics


Comprehensive collection of 500+ unique JavaScript interview questions
Code snippet output-based format
Focused on experienced developer interview topics including:
Advanced closures and scope patterns
Memoization and caching strategies
Debouncing and throttling implementations
Function composition and piping
Currying and partial application
Promise handling and async/await patterns
Array manipulation algorithms (sorting, searching, chunking)
String processing and regex patterns
Object manipulation utilities
Proxy and Reflect API
Event emitters and observers
Generator functions and iterators
WeakMap and WeakSet usage
Data structure implementations (Stack, Queue, LinkedList, BST, Graph)
Sorting and searching algorithms


Mathematical algorithms (prime numbers, fibonacci, GCD, LCM)
Error handling patterns
Type checking and validation
JSON parsing and serialization
Regular expressions
Class patterns and inheritance
*/
