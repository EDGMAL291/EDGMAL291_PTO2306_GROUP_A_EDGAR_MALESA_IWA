const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

//Added document.querySelectorAll to my newly created variables (const) to access elements in HTML using classes

const status = document.querySelectorAll('.status')
const reserve = document.querySelectorAll('.reserve')
const checkout = document.querySelectorAll('.checkout')
const checkin = document.querySelectorAll('.checkin')



/** 
 *  Used a for loop that i just learnt to run a loop that will go thru each book and showing it's status and then 
 * assigned the status it gets from each book to a new variable : currentStatus, used trim() method to remove spaces
 * around the  the text of the element. Trimming the text makes it easy to use with STATUS_MAP[] in future.
*/
for( let i=0; i< status.length; i++){
    currentStatus = status[i].textContent.trim()

//This line is here to change the Status text colour to match the colour in STATUS_MAP, for example red for overdue.
 
status[i].style.color = STATUS_MAP[currentStatus].color;

/**
 * This is styling of the buttons, it checks if button is not disabled in other words if 
 * button is enabled. lastly checks if the book can be Reserved, checked out or in and then apply 
 * greyscale colors depending on whether it can or cannot.
 */

// Reserve
  reserve[i].disabled = !STATUS_MAP[currentStatus].canReserve;
  reserve[i].style.color = STATUS_MAP[currentStatus].canReserve ? 'white' : 'lightgray';
  reserve[i].style.backgroundColor = STATUS_MAP[currentStatus].canReserve ? 'gray' : 'darkgray';

// Checkout
  checkout[i].disabled = !STATUS_MAP[currentStatus].canCheckout;
  checkout[i].style.color = STATUS_MAP[currentStatus].canCheckout ? 'white' : 'lightgrey';
  checkout[i].style.backgroundColor = STATUS_MAP[currentStatus].canCheckout ? 'gray' : 'darkgray';
  
// Checkin
  checkin[i].disabled = !STATUS_MAP[currentStatus].canCheckIn;
  checkin[i].style.color = STATUS_MAP[currentStatus].canCheckIn ? 'white' : 'lightgray';
  checkin[i].style.backgroundColor = STATUS_MAP[currentStatus].canCheckIn ? 'gray' : 'darkgray';
};
