let arr1 = [4,9,16,20,25]
let arr2 = [2,4,8,16,32,64]

//Способ 1

let arr1Filtered = arr1.filter(item => !(Number.isInteger(Math.sqrt(item))))
console.log(arr1Filtered)
let arr2Filtered = arr2.filter(item => !(Number.isInteger(Math.sqrt(item))))
console.log(arr2Filtered)

//Способ 2
function checkroot(number) {
    for (var i = 0; i * i <= number; i++) {
        if (i * i === number)
            return false;
   }
   return true; 
}
let arr3Filtered = arr1.filter(item => checkroot(item))
console.log(arr3Filtered)
let arr4Filtered = arr2.filter(item => checkroot(item))
console.log(arr4Filtered)
// let m=5
// let arr= [10, 15, 16, 12, 25, 9, 7, 35, 13]
// let arrCopy = [] ;
// for (let i = 0; i < arr.length; i++){
//     if (arr[i]%2 == 1 && arr[i]%m == 0){
//         arrCopy.push(arr[i])
//     }
// }
// for(let i = 0; i < arrCopy.length; i++){
//     for (let j = 0; j < arrCopy.length-1;j++){
//         if (arrCopy[i] > arrCopy[i + 1]) {
//             let temp = arrCopy[i];
//             arrCopy[i] = arrCopy[i + 1];
//             arrCopy[i + 1] = temp;
//         }
//     }
// }
// let arrLengthCheck = arrCopy.length
// console.log(arrLengthCheck)
// for (let i = 0; i < arr.length; i++){
//     if (arr[i]%2 == 1 && arr[i]%m !== 0){
//         arrCopy.push(arr[i])
//     }
// }

// for(let i = arrLengthCheck; i < arrCopy.length; i++){
//     for (let j = arrLengthCheck; j < arrCopy.length-1;j++){
//         if (arrCopy[i] > arrCopy[i + 1]) {
//             temp = arrCopy[i];
//             arrCopy[i] = arrCopy[i + 1];
//             arrCopy[i + 1] = temp;
//         }
//     }
// }
// console.log(arrCopy)

// arrLengthCheck = arrCopy.length
// for (let i = 0; i < arr.length; i++){
//     if (arr[i]%2 == 0){
//         arrCopy.push(arr[i])
//     }
// }
// for(let i = arrLengthCheck; i < arrCopy.length; i++){
//     for (let j = arrLengthCheck; j < arrCopy.length-1;j++){
//         if (arrCopy[i] > arrCopy[i + 1]) {
//             let temp = arrCopy[i];
//             arrCopy[i] = arrCopy[i + 1];
//             arrCopy[i + 1] = temp;
//         }
//     }
// }
// console.log(arrCopy)
