var a = 1;
var b = 2;
var tmpB;
var res = 0;

while (a < 4000000 && b < 4000000) {

	console.log(b);

	if (b % 2 === 0) {
		res += b;
	}

	tmpB = b;

	b = a + b;

	a = tmpB;

}

console.log('Sum of even valued terms: ' + res);