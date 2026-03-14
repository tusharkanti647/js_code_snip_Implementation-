// export function isArray(value) {
//     return Array.isArray(value);
// }

// export function isFunction(value) {
//     return typeof value === "function";
// }

// export function isObject(value) {
//     return value !== null && (typeof value === "object" || typeof value === "function");
// }

// export function isPlainObject(value) {
//     if (value === null || typeof value !== "object") {
//         return false;
//     }

//     const proto = Object.getPrototypeOf(value);

//     return proto === Object.prototype || proto === null;
// }
//question https://www.greatfrontend.com/questions/javascript/type-utilities-ii?language=js&tab=coding



///2nd question
//question link https://www.greatfrontend.com/questions/javascript/data-merging?language=js&tab=coding
// /**
//  * @param {Array<{user: number, duration: number, equipment: Array<string>}>} sessions
//  * @return {Array}
//  */
// export default function mergeData(sessions) {
//     // throw 'Not implemented!';
//     let result = [];
//     for (let i = 0; i < sessions.length; i++) {
//         let obj = result.find((ele) => {
//             // console.log(ele, sessions[i])
//             return (ele.user === sessions[i].user)
//         });
//         // console.log('jjjj', obj)
//         if (obj) {
//             obj.duration = obj.duration + sessions[i].duration;
//             sessions[i].equipment.map((e) => {
//                 if (!obj.equipment.includes(e)) {
//                     obj.equipment.push(e)
//                 }
//             })
//             // obj.equipment = ([...obj.equipment, ...sessions[i].equipment]);
//         } else {
//             result.push(sessions[i]);
//         }
//     }

//     return result;
// }

// console.log(mergeData([
//     { user: 8, duration: 50, equipment: ['bench'] },
//     { user: 7, duration: 150, equipment: ['dumbbell', 'kettlebell'] },
//     { user: 8, duration: 50, equipment: ['bench'] },
//     { user: 7, duration: 150, equipment: ['bench', 'kettlebell'] },

// ]))


