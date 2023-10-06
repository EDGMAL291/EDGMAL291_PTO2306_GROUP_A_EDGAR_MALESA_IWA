const salary = 4000;
const lodging = 'apartment';
const size = 'large';


// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport:  10.2,
};
  //added quotation marks to the keys to make it a string. objects only takes strings as keys not numbers
const tax = {
    '734': '3%',
    '234': '20%',
    '913': '12%',
    '415': '38%',
    '502': '42%',
};

const rent = {
    none: 0,
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400,
};

// You can change below however you want

/* changed tax.913 to [] notation, numbers, or strings with special characters can only be accesed 
   using bracket notation. i used parseInt to remove the percentage and turn Tax into a number.
*/   
const taxValue = parseFloat(tax['913'].replace('%', ''));
const taxInDecimal = taxValue / 100;

/* changed variable name to salaryAfterTax for readability and corrected the formula as to Bodmas rule.
*/
const salaryAfterTax = salary * (1 - taxInDecimal)
const balance = salaryAfterTax - expenses.transport - expenses.food - expenses[`${lodging}-${size}`]
console.log(balance.toFixed(2))