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

function SortbyMarks(stud){
    let summ=Array(stud.length).fill(0)
    for(let i=0;i<stud.length;i++) {
       summ[i]=stud[i].marks.reduce((count,person)=>{
            count+=person
            return count
        },0)
    }
    console.log(summ)
    stud.forEach((item, index, array)=> {
        stud[index].summ = summ[index]
      });
      console.log(stud)
    stud.sort(( a, b ) =>  b.summ - a.summ );
    console.log(stud)
}
SortbyMarks(stud)

