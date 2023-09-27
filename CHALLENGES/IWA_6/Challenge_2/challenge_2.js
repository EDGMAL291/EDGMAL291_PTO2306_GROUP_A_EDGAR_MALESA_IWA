const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

let balance;

if ((typeof hourOfDay !== 'undefined') && (typeof minuteOfDay !== 'undefined') && (hourOfDay === 0) && (minuteOfDay === 0)) {
    const taxDecimal = parseFloat(tax) / 100;
    const salaryAfterTax = salary * (1 - taxDecimal); 
    balance = salaryAfterTax - transport - food - rent;
}

if (typeof balance !== 'undefined') {
    console.log("R " + balance.toFixed(2));
} else {
    console.log("Time is not known or it's not midnight, balance is not calculated.");
}
