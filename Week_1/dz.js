// Задание 1.1
var a;
a="Привет мир";
function aboba(a){
	console.log(a);
	return a;
}
aboba(a);

// Задание 1.2
var n1,n2,rs;
n1=5;
n2=7;
function sum(a,b){
	return a+b;
}
rs= sum(n1,n2);
console.log(rs);

// Задание 1.3
var n3,n4,e;
n3=12;
n4=48;
var func = function(){
	console.log(n3+n4);
};
func();

// Задание 1.4
function Counter(N){
	return () => ++N;
}
var f = Counter(10);
console.log(f());
console.log(f());
console.log(f());

// Задание 2.1
function retArgs(){
	return [...arguments];
}
console.log(retArgs(1,2,12));

// Задание 2.2
function bindFunction(fn, ...args){
	return fn.bind(null, ...args);
}
var bf=bindFunction(sum,12,99)
console.log(bf());