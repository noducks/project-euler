var a = 1;
var b = 2;
var c = 3;


for (var a = 1; a < 1000; a++) {
	for (var b = Math.max(2,a); b < 1000; b++) {
		for (var c = Math.max(3,b); c < 1000; c++) {


			if (a*a + b*b === c*c) {
				console.log('Pythag Triplet: ' + a + ' ' + b + ' ' + c);


				if (a + b + c === 1000) {

					return console.log('They equal 1000: ' + a*b*c);

				}
			}


		}
	}
}