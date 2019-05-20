// REFERENCE`
// ==> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
// ==> https://davidwalsh.name/es7-es8-features
// ==> https://hackernoon.com/es8-was-released-and-here-are-its-main-new-features-ee9c394adf66

// ES7 features:
//
// Array.prototype.includes
// Exponentiation Operator

// ES8 features:
//
// String padding
// Object.values/Object.entries
// Object.getOwnPropertyDescriptors
// Trailing commas in function parameter lists and calls
// Async Functions

// =======================================================================================> ES7 features`

// // ***************************** Array.prototype.includes *****************************
// let arr  = ['a', 'b', 'c']
// arr.includes('a') // true, not 0 like indexOf would give
// arr.includes('d') // false
// // ************************************************************************************

// // ******************************** Exponentiation ***********************************
// // 2 to the power of 8
// Math.pow(2, 8) // 256
// // ..becomes
// alert(2 ** 8 )// 256

// // ************************************************************************************

// ==============================================================================> ES8 features`
// // ***************************** String padding *****************************
//
// // str.padStart(targetLength [, padString])
//
// let str1 = '93-25-65-98';
//
// let newStr1 = str1.padStart(str1.length + 4, '+374');
// console.log(newStr1); // +37493-19-28-65
//
// let str2 = '125';
//
// let newStr2 = str2.padStart(4, '*/*')
// console.log(str2, 'new str2: ', newStr2); // *125
//
// let newStr3 = str2.padStart(5, '*/*')
// console.log(str2, 'new str3: ', newStr2); // */125
//
// let newStr4 = str2.padStart(6, '*/*')
// console.log(str2, 'new str4: ', newStr2); // */*125
//
// // str.padEnd(targetLength [, padString])
//
// let arr = ['My', 'name', 'is', 'Anjela'];
// let str = '';
// arr.map((item, index) => {
//     if (index !== arr.length - 1) {
//         str += item.padEnd(item.length + 1, ' ');
//     } else {
//         str += item.padEnd(item.length + 1, '.');
//     }
// })
//
// console.log(str);
//
// // **************************************************************************

// // ***************************** Object.values *****************************
//
// const obj1 = {x: 'xxx', y: 1};
// console.log(Object.values(obj1)); // ['xxx', 1]
//
// const obj2 = ['e', 's', '8']; // same as { 0: 'e', 1: 's', 2: '8' };
// console.log(Object.values(obj2)); // ['e', 's', '8']
//
// // when we use numeric keys, the values returned in a numerical
// // order according to the keys
// const obj3 = {10: 'xxx', 1: 'yyy', 3: 'zzz'};
// console.log(Object.values(obj3)); // ['yyy', 'zzz', 'xxx']
// console.log(Object.values('es8'));
// let x = Object.values([function () {
//     console.log('function 1')
// }, function () {
//     console.log('function 2')
// }]);
//
// console.log(x[0]);
// // **************************************************************************
//
//
// // ***************************** Object.entries *****************************

// // [[key1, value1], [key2, value2], ...]
// const obj4 = { x: 'xxx', y: 1 };
// console.log(Object.entries(obj4)); // [['x','xxx'], ['y', 1]]
//
// const obj5 = ['e', 's', '8'];
// console.log(Object.entries(obj5)); // [['0', 'e'], ['1', 's'], ['2', '8']]
//
// const obj6 = { 10: 'xxx', 1: 'yyy', 3: 'zzz' };
// console.log(Object.entries(obj6)); // [['1', 'yyy'], ['3', 'zzz'], ['10', 'xxx']]
// console.log(Object.entries('es8')); // [['0', 'e'], ['1', 's'], ['2', '8']]
//
// // **************************************************************************

// // ***************************** Object.getOwnPropertyDescriptors *****************************
//
// const obj = {
//     _property1: 42,
//     yy() { return 777; },
//     get es7() { return 777; },
//     get es8() { return 888; }
// };
//
// Object.defineProperty(obj, 'x', {
//     // writable: false,
//     get: () => {
//         return obj._property1
//     },
//     set: (x)=> {
//         console.log(obj._property1, 'value');
//         obj._property1 = x + 5;
//     }
// });
//
// var o = Object.getOwnPropertyDescriptors(obj);
// console.log(o);
//
// obj.x = 55;
//
// console.log(obj.x, 'obj.property1');
// console.log(obj._property1, 'obj.property1');
//
// // **************************************************************************

// // ***************************** Trailing Commas *****************************
//
// let myObj = { a:'b', b: 'c', }; // No error!
//
// let myArr = [1, 2, 3, ]; // No error!
//
//     console.log([1, 2, 3,].length) ;// 3
//     console.log([1, 2, 3, , , ].length) ; // 5
//
// // **************************************************************************

// // ******************** Converting Promise Handling to await ****************
// // Before: callback city!
// fetch('/users.json')
//     .then(response => response.json())
//     .then(json => {
//         console.log(json);
//     })
//     .catch(e => { console.log('error!'); })
//
// // After: no more callbacks!
// async function getJson() {
//     try {
//         let response = await fetch('/users.json');
//         let json = await response.json();
//         console.log(json);
//     }
//     catch(e) {
//         console.log('Error!', e);
//     }
// }
// // **************************************************************************

// // ***************************** async function *****************************
// var resolveAfter2Seconds = function() {
//     console.log("starting slow promise");
//     return new Promise(resolve => {
//         setTimeout(function() {
//             resolve("slow");
//             console.log("slow promise is done");
//         }, 2000);
//     });
// };
//
// var resolveAfter1Second = function() {
//     console.log("starting fast promise");
//     return new Promise(resolve => {
//         setTimeout(function() {
//             resolve("fast");
//             console.log("fast promise is done");
//         }, 1000);
//     });
// };
//
// var sequentialStart = async function() {
//     console.log('==SEQUENTIAL START==');
//
//     // 1. Execution gets here almost instantly
//     const slow = await resolveAfter2Seconds();
//     console.log(slow); // 2. this runs 2 seconds after 1.
//
//     const fast = await resolveAfter1Second();
//     console.log(fast); // 3. this runs 3 seconds after 1.
// };
//
// var concurrentStart = async function() {
//     console.log('==CONCURRENT START with await==');
//     const slow = resolveAfter2Seconds(); // starts timer immediately
//     const fast = resolveAfter1Second(); // starts timer immediately
//
//     // 1. Execution gets here almost instantly
//     console.log(await slow); // 2. this runs 2 seconds after 1.
//     console.log(await fast); // 3. this runs 2 seconds after 1., immediately after 2., since fast is already resolved
// };
//
// var concurrentPromise = function() {
//     console.log('==CONCURRENT START with Promise.all==');
//     console.log('Start:  ', new Date().getSeconds());
//     return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then((messages) => {
//         console.log(messages[0]); // slow
//         console.log(messages[1]); // fast
//         console.log('End: ', new Date().getSeconds());
//     });
// };
// //
// var parallel = async function() {
//     console.log('==PARALLEL with await Promise.all==');
//     console.log('Start:  ', new Date().getSeconds());
//     // Start 2 "jobs" in parallel and wait for both of them to complete
//     await Promise.all([
//         (async()=>console.log(await resolveAfter2Seconds()))(),
//         (async()=>console.log(await resolveAfter1Second()))()
//     ]);
//
//     console.log('End: ', new Date().getSeconds());
// };
//
// sequentialStart(); //  The code finishes after 3 seconds. After 2 seconds, logs "slow", then after 1 more second, "fast"
//
// // wait above to finish
// setTimeout(concurrentStart, 4000); // The code finishes after 2 seconds, logs "slow" and then "fast"
//
// // wait again
// setTimeout(concurrentPromise, 7000); // same as concurrentStart
//  // ==CONCURRENT START with Promise.all==
// // main.js:209 Start:  54
// // main.js:167 starting slow promise
// // main.js:177 starting fast promise
// // main.js:181 fast promise is done
// // main.js:171 slow promise is done
// // main.js:211 slow
// // main.js:212 fast
// // main.js:213 End:  56
//
// // // wait again
// setTimeout(parallel, 10000); // truly parallel: after 1 second, logs "fast", then after 1 more second, "slow"
// // ==PARALLEL with await Promise.all==
// // main.js:219 Start:   57
// // main.js:167 starting slow promise
// // main.js:177 starting fast promise
// // main.js:181 fast promise is done
// // main.js:223 fast
// // main.js:171 slow promise is done
// // main.js:222 slow
// // main.js:226 End:  59
// // **************************************************************************