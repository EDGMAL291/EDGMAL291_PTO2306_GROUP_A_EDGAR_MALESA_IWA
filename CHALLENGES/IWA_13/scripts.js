let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below

//function was not properly declared using the arrow function
const logCalc = () => {
  //changed the comparison sign from = to === and used string instead of numerical-string 
    const isString = typeof calculated === 'string' 
    //Used parseInt on the first calcutated change the string ('1') to (1) when calculated === 'string' basically true.
    const calculatedAsNumber = isString ? parseInt(calculated) : calculated
    calculated = calculatedAsNumber + 1 
}
//function was not properly declared using the arrow function
const calcUser = () => {
  //logCalc was not called so i added () to properly call the function.
  logCalc()
  if (calculated > 2) user = 'John'
  if (calculated > 2) state = 'requesting'
  if (calculated > 3) state = 'idle'
}
//function was not properly declared using the arrow function
const checkUser = () => {
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`)
    //Changed the state to 'stop' to stop the code from running more than once. after the conditions are met the code will stop.
	  state = 'stop'
  }
}

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()