var res = [];

for(var i = 999; i > 99; i--) {
	for (var j = 999; j > 99; j-- ) {

		var a = (i*j).toString();
		var b = a.split('').reverse().join('');	
		
		if (a === b) {
			res.push(a);
			j = 0;
		}	
	}
}

console.log(Math.max.apply(null, res));