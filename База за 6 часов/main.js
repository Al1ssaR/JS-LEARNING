console.log(Math.min(12,13,14,15))
console.log(Math.floor(12.4)) //округление в меньшую сторону
console.log(Math.ceil(12.4)) //округление в большую сторону
console.log(Math.round(12.4)) //округление до ближайшего целого
let name = 'Алиссар'
let age = 19
console.log(`Привет, ${name}, тебе ${age< 18 ?'меньше 18':'больше 18'}, я угадал?`) // использование тернарного оператора
//Замыкание - функция возвращает функцию (суть в том что переданные в первую функцию переменные статичны их нельзя изменить)
function CreateMemb(name){
    return function(age){
        console.log(name+age)
    }
}
let SanyaAction=CreateMemb('Sanya')
SanyaAction(1337)
SanyaAction(228)

let people=[
    {
        name:'Алиссар Баликов',
        budget:50000,
    },
    {
        name:'Саша Шляпик',
        budget:30000,
    },
    {
        name:'Илья Фокинский',
        budget:15000,
    }
]
let allBudget = people.filter(people=>people.budget>20000).reduce((summ,person)=>{
    summ+=person.budget
    return summ
},0)
console.log(`Общий бюджет: ${allBudget} рублей`)