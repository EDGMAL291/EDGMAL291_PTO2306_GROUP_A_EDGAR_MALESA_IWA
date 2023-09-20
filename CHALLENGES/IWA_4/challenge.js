let year = 2050;
let state = 'student';
let count = 0;

if (year === 2050) {
	console.log("January", 'New Year’s Day');
	console.log("March", 'Human Rights Day');
	let month = 'April';
	console.log(month, 'Family Day');
	console.log(month, 'Freedom Day ');
	count += 4;

	if (state === "student") {
	  console.log('June', 'Youth Day');
		count += 1;
  }

	console.log('August', 'Women’s Day');
	console.log('September', 'Heritage Day');
	month = 'December';
	console.log(month, 'Day of Reconciliation');
	count += 3;

	if (state === "parent") {
	  console.log(month, 'Christmas Day');
		count += 1;
  }

	console.log(month, 'Day of Goodwill');
	count += 1;
}

console.log('Your status is:', state);
console.log('The year is:', year);
console.log('The total holidays is:', count);
