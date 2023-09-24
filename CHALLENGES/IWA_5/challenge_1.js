const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately, we do not ship to your country of residence';
const NONE_SELECTED = 0; 

let country = 'RSA';
let customers = 1; 
let shipping = 0;
let currency = '';

let shoes = 300 * 1;
let toys = 100 * 5;
let shirts = 150 * NONE_SELECTED;
let batteries = 35 * 2;
let pens = 5 * NONE_SELECTED;

let total = shoes + toys + shirts + batteries + pens;

if (country === 'RSA') {
  shipping = 400;
  currency = 'R';
} else if (country === 'NAM') {  
  shipping = 600;
  currency = '$';
} else if (country === 'NK') {  
  console.log(BANNED_WARNING);
} else {
  shipping = 800;
  currency = '$';
}

if ((total >= 1000 && currency === 'R') || (total >= 60 && currency === '$')) {
  if (country === 'RSA' || country === 'NAM') {
    if (customers === 1) {
      shipping = 0;
    } else {
      console.log(FREE_WARNING);
    }
  }
}

console.log("Price:", currency + (total + shipping));
