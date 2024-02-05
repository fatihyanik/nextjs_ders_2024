// const callback = (n) => {
//     return n ** 2;
// }

// function higherOrder(callback, n) {
//     return callback(n) * n; // return callback(3) * 3;
// }

// console.log(higherOrder(callback, 3));

// const higherOrderFunction = (n) => {
//     const doSomething = (m) => {
//         const doWhatever = (t) => {
//             return 2 * n * 3 * m + t
//         }
//         return doWhatever
//     }
//     return doSomething
// }
// console.log(higherOrderFunction(2)(3)(10));














// const numbers = [1,2,3,4,5,6]

// const sumArray = (arr) => {
//     let sum = 0;
//     const callback = function(element){
//         sum +=element
//     } 
//     arr.forEach(callback)
//     return sum
// }
// console.log(sumArray(numbers));


const numbers2 = [1,2,3,4,5,6];

const sumArray2 = () =>{
    let sum = 0;
    numbers2.forEach(item=> sum +=item)
}

console.log(sumArray2(numbers2));