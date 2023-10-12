const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

//Used bracket notation and ? to check if futureId is available in the holidays object.
console.log(holidays[futureId]?.name || 'ID ' + futureId + ' not created yet')

/* I used spread operator to create a clone of Holiday[6] for variable copied. i used spread operator
   because it lets me assign new values to copied without changing or assigning new values to Holiday[6]
*/
const copied = {...holidays[christmas]};
copied.name = 'X-mas Day';
copied.date = new Date(holidays[christmas].date)

/* Used setHours() and setMinutes() instead of assigning the values to correctDate.hour with an equal sign.
this is going to change time for the copied object to 00:00 from 13:25. 
*/ 
copied.date.setHours(0);
copied.date.setMinutes(0);

/*Added getTime() to both compared values, to turn the date into time in milliseconds so that i can easily compare
the two dates. The 
*/  
//The following code will and should return true. 00:00 has less milliseconds than 13:25   
const isEarlier = copied.date.getTime() < holidays[christmas].date.getTime();
//This should log New date is earlier: True
console.log('New date is earlier:', isEarlier)

if (isEarlier) {
console.log('ID change:', holidays[christmas].id != copied.id) 
console.log('Name change:', copied.name) 
console.log('Date change:', copied.date)
};
/* Added parenthesis to getTime to the following objects and converted date to milliseconds. 
Math.min is going to assign the earliest date to firstHolidayTimestamp and Math.max will assign the latest or 
the last holiday of the year to lastHolidayTimestamp.
*/
const firstHolidayTimestamp = Math.min(
    new Date (holidays[0].date).getTime(),
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime(),
);

const lastHolidayTimestamp = Math.max(
    new Date (holidays[0].date).getTime(),
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime(),
);
//created new variables and converted date from milliseconds to normal date.
const firstHoliday = new Date(firstHolidayTimestamp);
const lastHoliday = new Date(lastHolidayTimestamp);

/*created new variables to store days, months and year from the converted dates and then added padding to have
a date format of DD/MM/YYYY for both 
*/
const firstDay = String(firstHoliday.getDate()).padStart(2, '0');
const firstMonth = String(firstHoliday.getMonth()+ 1).padStart(2, '0');

const lastDay = String(lastHoliday.getDate()).padStart(2, '0');
const lastMonth = String(lastHoliday.getMonth()+ 1).padStart(2,'0');

console.log(firstDay + '/' + firstMonth + '/' + `${currentYear}`)
console.log(lastDay + '/' + lastMonth + '/' + `${currentYear}`)

const randomIndex = Math.floor(Math.random() * 9);
const randomHoliday = holidays[randomIndex]
console.log(`${randomHoliday.name}, ${randomHoliday.date}`);
