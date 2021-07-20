/* Differences between let, const and var
Var = can be use repeatedly declare with another value within the entire scope
let = can be assign a new value limitedly only within a block
const = fixed value, cannot reassigned a new value within a block


HOISTING - is moving of the var declaration on top. Let and Const do not allow hoisting.

example : 
		x = 1;
			console.log(x);
		var x; 
*/


// Var Sample 

{
	var Varsample = 1;
	{
		Varsample = 2;
		console.log(Varsample); // output is 2
	}
			console.log(Varsample); // output is still 2 as it reads the last declared variable
		}	
 

// Let Sample 


	let letSample = 1;
	{
		let letSample = 2; 
			letSample = 3;
		console.log(letSample); // output is 3
		{
			console.log(letSample); // output is 3 because its still within the scope of block
		}
	}
console.log(letSample); // output is 1 because its outside the block


//Const Sample 

	const constSample = 1;
	{
		//constSample = 2; an error will occur 
		console.log(constSample); // output is 1
		{
			console.log(constSample); // output is 1
		}
	}
	

