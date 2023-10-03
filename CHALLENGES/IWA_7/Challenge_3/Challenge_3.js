const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'

// Only change below this line

/* used Math.abs() to return positive values, toFixed() for decimal, trim()
for space. \n to start a on a new line. 

*/
const positiveLeo = Math.abs(parseFloat(leoBalance)).toFixed(2);
const positiveSarah = Math.abs(parseFloat(sarahBalance)).toFixed(2);
const total = parseFloat(positiveLeo) + parseFloat(positiveSarah);
const owed = total.toFixed(2);
const totalOwed = `Total amount owed: R ${owed}`;
const leo = `${leoName.trim()} ${leoSurname.trim()} (Owed: R ${positiveLeo})`;
const sarah = `${sarahName.trim()} ${sarahSurname.trim()} (Owed: R ${positiveSarah})`;

// used double \n to create 2 empty lines. 
const result = `\n${leo}\n${sarah}\n\n${divider}\n  ${totalOwed}  \n${divider}\n`;

console.log(result);
