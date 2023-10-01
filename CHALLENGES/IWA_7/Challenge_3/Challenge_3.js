const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'

// Only change below this line


const positiveLeo = Math.abs(parseFloat(leoBalance));
const positiveSarah = Math.abs(parseFloat(sarahBalance));
const total = parseFloat(positiveLeo) + parseFloat(positiveSarah);
const owed = total.toFixed(2);
const totalOwed = `Total amount owed: R ${owed}`;
const leo = `${leoName.trim()} ${leoSurname.trim()} (Owed: R ${positiveLeo})`;
const sarah = `${sarahName.trim()} ${sarahSurname.trim()} (Owed: R ${positiveSarah})`;

const result = leo +  sarah + divider + " " + totalOwed +" "+ divider

console.log(result)