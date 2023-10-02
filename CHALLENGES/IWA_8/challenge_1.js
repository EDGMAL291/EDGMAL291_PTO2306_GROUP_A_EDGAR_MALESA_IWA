const leoName = 'Leo Musvaire';
const leoNumber = '2';
const leoStreet = 'Church St.';
const leoPostal = '3105';
const leoBalance = '-10';

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

// Only change below this line

const leo = {
    name: leoName,
	balance: leoBalance,
	"access id":" 47afb389-8014-4d0b-aff3-e40203d2107f", /* keys or values are to be put in "" if they have a hyphen,
    space or start with a number. that is why these are in quotation marks. and they are called like .[access id]
    */
	age: 24,
	address: {
		number: leoNumber,
		street: leoStreet,
		"postal-code": leoPostal, // these are called keys and are separated by a comma. 
	}
}

const sarah = {
	name: sarahName + sarahSurname,
	age: 62,
	"access id": "6b279ae5-5657-4240-80e9-23f6b635f7a8",
	balance: sarahBalance,
	address: {
		number:  sarahNumber,
		street: sarahStreet,
		"postal-code": sarahPostal
	}
}
console.log("Leo:", leo, leo["address"]["postal-code"]);
console.log("Sarah", sarah, sarah["address"]["postal-code"]);