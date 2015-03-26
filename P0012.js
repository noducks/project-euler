var num = 1;

while(true) {

	//  Get Triangular number
	var tri = 0;

	for (var i = 1; i <= num; i++) {
		
		tri += i;

	};
	
	var factorCount = 0;

	// find number of factors
	for (var i = 0; i < tri; i++) {
		if (tri % i === 0) {
			factorCount++;
		}
	}

	console.log(num + ':' + tri + ':' + factorCount);

	if (factorCount >= 500) {
		return;
	}

	num += 1;
}