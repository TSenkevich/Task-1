// odd or even check
let number = +prompt('Enter number', '');
// first method
if (number % 2 == 0) 
document.write(number, ' Odd number');
else document.write(number, ' Even number');
// second method 
(number % 2 == 0) ? (console.log('odd')) : (console.log('even'));
// second method
 (number % 2 ) ? (console.log('even')) : (console.log('odd'));