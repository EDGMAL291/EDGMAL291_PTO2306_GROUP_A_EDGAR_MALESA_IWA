const firstName = 'John';
const age = 35;
const hobby = 'Coding';
//Removed the () as it's not important when there's only one parameter. Added .log to complete arrow function
const logTwice = parameter => {
  console.log(parameter)
  console.log(parameter)

}
//Changed function name to avoid naming conflicts with the variable, created a message variable to carry the message.
//The message variable works as a parameter for my logTwice function.
function outputText() {
  let message = `Hello, ${firstName} (${age}). I love ${hobby}!`
  logTwice(message)
}
//called my function {outputText()}
outputText()