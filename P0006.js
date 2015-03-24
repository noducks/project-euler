var squares = 0;
var sum = 0;


for (var i = 0; i <= 100; i++){

	squares = squares + i * i;
 	
 	sum = sum + i;

};


console.log(sum*sum - squares);