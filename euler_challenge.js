//Micah Netz

var result = 0;

for(var i = 0; i < 1000; i++){
	if(i%3 === 0 || i%5 === 0){
		result += i;
	}
}

console.log("The sum result of all multiples of 3 or 5 from 0 to 1000 is: " + result);
