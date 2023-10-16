// script.js
/* constants were assigned with ":" instead of "=". used class names to access elements within the 
respective roots, root1, root2 and root3. i then used document.query... access the specified root, and then i used
root1./2./3. to access elements within the root using query selector. 
*/
const root1 = document.querySelector('[data-key = "order1"]');
const biscuits1 = root1.querySelector('.biscuits .count');
const donuts1 = root1.querySelector('.donuts .count');
const pancakes1 = root1.querySelector('.pancakes .count');
const status1 = root1.querySelector('.status dd');

const root2 = document.querySelector('[data-key = "order2"]');
const biscuits2 = root2.querySelector('.biscuits .count');
const donuts2 = root2.querySelector('.donuts .count');
const pancakes2 = root2.querySelector('.pancakes .count');
const status2 = root2.querySelector('.status dd');

const root3 = document.querySelector('[data-key = "order3"]');
const biscuits3 = root3.querySelector('.biscuits .count');
const donuts3 = root3.querySelector('.donuts .count');
const pancakes3 = root3.querySelector('.pancakes .count');
const status3 = root3.querySelector('.status dd');

/*Here i am taking the textContent of the value stored in the const variables and assigning them to the value of 
data-.... using.getAttribute() method. for the status variable, i'm checking if data is delivered, if it is delivered it will 
output delivered otherwise it wil be set to pending.*/
biscuits1.textContent = root1.getAttribute('data-biscuits');
donuts1.textContent = root1.getAttribute('data-donuts');
pancakes1.textContent = root1.getAttribute('data-pancakes');
status1.textContent = root1.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending';

biscuits2.textContent = root2.getAttribute('data-biscuits');
donuts2.textContent = root2.getAttribute('data-donuts');
pancakes2.textContent = root2.getAttribute('data-pancakes');
status2.textContent = root2.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending';

biscuits3.textContent = root3.getAttribute('data-biscuits');
donuts3.textContent = root3.getAttribute('data-donuts');
pancakes3.textContent = root3.getAttribute('data-pancakes');
status3.textContent = root3.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending';

