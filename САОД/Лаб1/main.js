let arr1 = [4,9,16,20,25]
let arr2 = [2,4,8,16,32,64]

//Способ 1

let arr1Filtered = arr1.filter(item => !(Number.isInteger(Math.sqrt(item))))
console.log(arr1Filtered)
let arr2Filtered = arr2.filter(item => !(Number.isInteger(Math.sqrt(item))))
console.log(arr2Filtered)

//Способ 2
function checkroot(number) {
    for (let i = 0; i * i <= number; i++) {
        if (i * i === number)
            return false;
   }
   return true; 
}
let arr3Filtered = arr1.filter(item => checkroot(item))
console.log(arr3Filtered)
let arr4Filtered = arr2.filter(item => checkroot(item))
console.log(arr4Filtered)
//Способ 3 
function sqrtGreat(x){
    var lo=0,hi=x,mid;
    while(lo<=hi){
        mid=Math.ceil((lo+hi)/2)
        if(mid*mid==x) return mid;
        if(mid*mid<x){
            lo=mid+1
        }else{
            hi=mid-1;
        }
    }

    
}

let arr5Filtered = arr1.filter(item => !(Number.isInteger(sqrtGreat(item))))
console.log(arr5Filtered)
let arr6Filtered = arr2.filter(item => !(Number.isInteger(sqrtGreat(item))))
console.log(arr6Filtered)
