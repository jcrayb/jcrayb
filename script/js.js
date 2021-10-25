const dbtn = document.getElementById('dbtn');
const drop = document.getElementById('dropdown');
let isTrue= false;

dbtn.addEventListener('click', () => {
	isTrue = isTrue != true;
	console.log(isTrue)
	
	if(isTrue){
		drop.style.display= 'block'
	} else {
		drop.style.display = 'none'
	}
})