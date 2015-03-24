// var a = 1;
var a = 2520

var test = function(num) {
	for (var i = 1; i <= 20; i++) {

		if (num % i !== 0) {
			return false;
		}
	}

	return true;
}

while (true) {

	if (test(a)) {
		console.log(a);
		return;
	}

	a++;
}

