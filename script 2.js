// multiplication two numbers and compain resalt with 6
var a,b,resalt;
a = +prompt ('enter first number', '');
b = +prompt('enter second number', '');
resalt = a*b;
//first method
if (resalt < 6) {
	console.log(resalt, 'less');
}
else {
	console.log(resalt, ' more');
};
//second method
 (resalt <6) ? console.log('less') : console.log('more');
