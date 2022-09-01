

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

// деструктуризация
{
	console.log(' ');
	let input = 'Sasha Shlyapik';
	let parts = input.split(' '); //метод split, в качестве разделителя пробел
	console.log(parts);
	let lastName = parts[1];
	let Name = parts[0];
	console.log(Name, lastName);
	console.log(' ');
    let [a,b] = [parts[0],parts[1]] // деструктурирующее присваивание
    console.log(a,b);
    console.log(' ');
    [a,b] = parts;
    console.log(a,b);
    console.log(' ');
    [Name, lastName] = input.split(' ');
    console.log(Name, lastName);
    function hi(userInfo) {
	let [ lastname, name, ] = userInfo;
	console.log(`Привет, ${name} ${lastname}, я тебя очень уважаю`);
	}
	input = 'Shlyapik Sasha Sergeevi4';
	hi(input.split(' '));

}

// spread-оператор
 console.log(' ');
{
	let numbers = [1,2,3,4]; 
	// суть в том , что если передать в функцию сам массив, 
	//мы в результате получим хрень и нам нужно 
	//как бы разделить массив на составляющие
	function sum() {
		let result = 0;
		for (let i = 0; i < arguments.length; i++) {
		result += arguments[i];
		}
		return result;
	}
	let result = sum(...numbers); // спред-оператор ...
	console.log(result);
}

// rest-оператор
 console.log(' ');
{
	let a = [1,2,3,4];
	{
		let [first,second] = a;
		console.log(first,second); // деструктуризация, а если нужен конец массива в 1 переменной?
	}
	let [first,second, ...rest] = a; // вот и спред-оператор пригодился
	console.log(first,second,rest);
	let numbers = [1, 2, 3, 4];
	let numbers2 = [5, 6, 7, 8];
	let result = numbers.concat(numbers2); // массив можно объединить с помощью метода concat()
	console.log(result);
	//или с помощью спред-оператора
	result = [...numbers,...numbers2];
	console.log(result);
}

// цикл for..of
 console.log(' ');
{
	function sum() {
	let result = 0;
	for (let arg of arguments) {
	result += arg;
	}
	return result;
	}
	console.log(sum(1, 2, 3, 4));
}
// цикл for … of упрощает нам работу, позволяя не вычислять значения индексов массива, как это было в стандартном
// цикле for. Все манипуляции с индексами for … of проводит сам незаметно для нас, а мы можем просто пользоваться текущим
// элементом перебираемого массива 

// • Объект в JavaScript – это набор свойств, к которым можно обращаться по именам.
// • Массив – это упорядоченный набор элементов, к которым можно обращаться по числовым индексам.
// • Деструктуризация упрощает процесс извлечения значений из объектов и массивов.
// • Rest-оператор упрощает извлечение остатка массива, объекта или аргументов функции.
// • Spread-оператор упрощает разброс элементов по массиву, объектам или аргументам функции.
// • Symbol генерирует уникальное значение.
// • Итератор описывает, как нужно перебирать значения.
// • Цикл for … in перебирает перечислимые свойства объекта.
// • Цикл for … of перебирает всё, у чего есть итератор


//Задание 1
//ForEach - создать аналог метода (перебор массива + применение к каждому эл. функции)
function forEach(array,fn){
	for (let i = 0; i<array.length;i++){
		fn(array[i],i,array);
	}
}

//Задание 2
//map - создать аналог метода (перебор массива + применение к каждому эл. функции + записывает значение в новый массив)
function map(array,fn){
	let modif = [];
	for (let i=0;i<array.length;i++){
		modif[i] = fn(array[i],i,array);
	}
	return modif;
} 

//Задание 3
// reduce - создать аналог метода (перебор массива с сохранением предыдущего результата)
function reduce(array,fn,initial){ //initial необязательная переменная , в нее записывается 1 промежуточный результат
	//в противном случае это будет первый элемент массива
	let hasInitial = typeof initial !== 'undefined';
	let prev = hasInitial ? initial : array[0];
	for (let i = hasInitial ? 0:1;i<array.length;i++){ // если есть initial то начинаем с 0 элемента массива , если нет 
		prev = fn(prev,array[i],array);
	}
	return prev;
}

//Задание 4
// перебрать все свойства объекта + заглавные буквы + записать все в массив
function uppArr(obj){
	let arr = [];
	for (let name in obj){
		arr.push(name.toUpperCase()); //toUpperCase - преобразование строки в заглавные буквы
	}
	return arr;
}
// чуть более элегантное решение
function upperArr(obj){
	return Object.keys(obj).map(name=>name.toUpperCase()) // возвращает массив, содержащий имена всех свойств объекта.
}

//Задание 5
//Фунĸция принимает объеĸт и должна вернуть Proxy для этого объеĸта
//Proxy должен перехватывать все попытĸи записи значений свойств и возводить
//это значение в ĸвадрат (тяжелая тяжесть как это сделать >.<)

