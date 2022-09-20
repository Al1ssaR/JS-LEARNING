console.log ("Структуры и алгоримты (задание на паре)");
{
	let tovarname = ['Картофель','Морковь','Рис'];
	let tovarprice = [12, 2, 14];
	console.log("Стоимость товаров");
	for(let i = 0; i<tovarprice.length;i++){
		console.log(`${tovarname[i]} стоимость: ${tovarprice[i]}`);
	}
	let count = Array(tovarprice.length).fill(0);
	for (let i = 0; i<tovarprice.length;i++){
		for(let j=0; j<tovarprice.length;j++){
			if (tovarprice[i] < tovarprice[j]){
				count[i]++;
			}
		}
	}
	for (let i=0; i<tovarprice.length;i++){
		let tovarcheck;
		if (count[i]<2 ){tovarcheck = "другой товар"}
			else tovarcheck = "других товара"
		if (count[i]==0){
			console.log(`${tovarname[i]} самый дорогой (товаров дороже нет)`);
		}
		else
		 console.log(`${tovarname[i]} дешевле чем ${count[i]} ${tovarcheck}`)
	}

}