var isPrime = function(num){

	for (var x = 2; x < (num - 1); x++) {
		if (num % x === 0) {
			return false;
		}
	}

	return true;
}

var count = 1;

for (var i = 2; i <= 150000; i++) {
	if (isPrime(i)) {
		if (count === 10001) {
			console.log('Prime: ' + i);
			break;
		}
		count++;
	}
}