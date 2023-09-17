// alex.js

export let firstname = "Alex"
export let surname = "Naidoo"
export const role = "Head of Marketing"

const display= firstname + " " + surname + " (" + role + ")"
document.querySelector('#alex').innerText = display