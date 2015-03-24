// var a = 13195;
var a = 600851475143;
var index = 2;

while (index < a) {
	if (a % index === 0) {

		console.log(index);
		a = a / index;
		index = 2;

	} else {

		index++;
	
	}
}

console.log(a);