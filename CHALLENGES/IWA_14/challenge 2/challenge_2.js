// script.js
//Replaced function with const to create an arrow function for add() and multiply(), fixed the math sign for multiplying from - to *
const add = (a,b) => { return (a + b) };
const multiply = (a,b) => { return(a * b) }
/**
 * created a new variables [added and results] under the internal funct. and equated them to functions add() and multiply() respectively.
 * used the 2 objects [example1 and example2] as arguments in both functions using 'this' keyword to access a, b and c from the objects. 
 * added a and b and then multiplied the sum by this.internal.c to get the required values. added variable would then be used as argument a 
 * in multiply() and then internal.c as argument b
 */
function internal() {
	const added = add(this.internal.a,this.internal.b);
  const results = multiply(added, this.internal.c);
  console.log(results);
  return this 
};

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()