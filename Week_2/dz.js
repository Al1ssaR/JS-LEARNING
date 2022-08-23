

var name = 'Ваня';
var lastName = 'Крупеня';
var old = 19;
var profession= 'Вафельный рожок';

var fullInfo = name + ' ' + lastName + ' (' + old + ', ' + profession + ')'; //Дофигища конкатенаций (неудобно)
console.log(fullInfo);

var FULLinfo = `${name} ${lastName} (${old}, ${profession})`; // Удобно, современно, молодежно (строковая интерполяция) (($ - маркер))
console.log(FULLinfo);

// Структура строковой интерполяции (заметное сокращение кода)

// `` - косые кавычки (гравис), оборачиваем все
// ${} - место вставки переменной

console.log(' ');

// Изучаем объекты (Объект - это набор свойств
var obj = {
	name: 'Alissar', // свойство name , значение Serega
	lastName: 'Balikov', 
	old: 21,
	work:'programmer'
};
// Как обратиться к свойствам объекта
console.log(obj.lastName); //точечное обращение Dot notation
console.log(obj['name']);
obj.name = 'Sasha';
console.log(obj['name']);
// Также свойства объекта можно создавать на лету
obj.mmr = 5000;
console.log(obj.mmr);
console.log(' ');

// Массивы

var student ={
	name: 'Sanya',
	lastName: 'Balikov'
};
var array = ['Sergey','Ivan','Sanya'];
array.push('Dimas');
for (let i=0; i<array.length;i++){

	console.log(array[i]);
}
console.log(' ');
var arr =[
	{
		name: 'Sanya',
		lastName: 'Balikov'
	},
	{
		name: 'Alissar',
		lastName: 'Krypenya'
	},
	{
	name: 'vanya',
		lastName: 'gigachad'
	}
];
for (let i=0; i<arr.length;i++){

	console.log(arr[i].name);
}