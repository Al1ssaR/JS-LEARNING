let arr1 = [1,2,3,4,5,5]
let arr2 = [5,8,3,5,8,3]
let arr3 = [1,2,3,4,5,20]
function kget(arr,k){
 let summ1 = 0
 let summ2 = 0
for(let i = 0; i < k ; i++){
    summ1 += arr[i]
    // console.log(summ1)
 }
 for(let i = k; i < arr.length; i++){
            summ2+= arr[i]
            // console.log(summ2)
 }
 if (summ1==summ2){  
    console.log(arr.slice(0,k));
    console.log(arr.slice(k,arr.length));
    return true
 }
 return false
}

for (let i = 0; i<arr1.length;i++){
    if(kget(arr1,i)){
        console.log(`В массиве [${arr1}] есть позиция ${i-1}, которая делит массив на 2 части`)
        break
    }  
}
for (let i = 0; i<arr2.length;i++){
    if(kget(arr2,i)){
        console.log(`В массиве [${arr2}] есть позиция ${i-1}, которая делит массив на 2 части`)
        break
    }
}
for (let i = 0; i<arr3.length;i++){
    if(kget(arr3,i)){
        console.log(`В массиве [${arr3}] есть позиция ${i-1}, которая делит массив на 2 части`)
        break
    }
}