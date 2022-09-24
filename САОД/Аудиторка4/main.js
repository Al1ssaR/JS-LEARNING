let stud = [{
    name:'Алиссар',
    marks:[5,5,5,5,5],
    N:123231,
},
{
    name:'Серега',
    marks:[3,3,3,3,3],
    N:123231,
},
{
    name:'Саня',
    marks:[5,5,5,5,4],
    N:123231,
},
{
    name:'Илья',
    marks:[3,3,5,4,4],
    N:123231,
},
{
    name:'Иван',
    marks:[5,5,5,5,5],
    N:123231,
},]
// console.log(stud)
// function SortbyMarks1(stud){
//     let summ=Array(stud.length).fill(0)
//     for(let i=0;i<stud.length;i++) {
//        summ[i]=stud[i].marks.reduce((count,person)=>{
//             count+=person
//             return count
//         },0)
//     }
//     console.log(summ)
//     const sortedStud = stud.map((item, index)=> {
//        item.summ = summ[index]
//        return item
//       });
//       sortedStud.sort(( a, b ) =>  b.summ - a.summ );
//     console.log(sortedStud)
// }
function SortbyMarks2(stud){
    let summ=Array(stud.length).fill(0)
    let lastPosition
    let sortedStud = []
    let sortedSumm = new Array()
    for (let i= 0;i<stud.length;i++){
       summ[i]=stud[i].marks.reduce((count,person)=>{
            count+=person
            return count
        },0)
        if (summ[i] < (5*stud.length) && summ[i] > (3*stud.length)){
            sortedStud.push(stud[i]) 
        }
    }
    
    for (let i= 0;i<stud.length;i++){
        if (summ[i] === (5*stud.length)){
            sortedStud.unshift(stud[i]) 
        }
        if (summ[i] === (3*stud.length)){
            sortedStud.push(stud[i]) 
        }
    }
    console.log(sortedStud)
}
// setTimeout(SortbyMarks1,0,stud)

SortbyMarks2(stud)



