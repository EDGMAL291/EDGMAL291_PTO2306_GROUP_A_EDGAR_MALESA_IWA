// johannes.js

export let firstname = "Johannes"
export let surname = "Potgieter"
export const role = "Intern"

const display= firstname + " " + surname + " (" + role + ")"
document.querySelector('#johannes').innerText = display