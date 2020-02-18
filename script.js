'use strict';// it  meanes We write ES6

let  Money = prompt('Your budget for a month', ' '),
     Time = prompt('Enter the date YYYY-MM-DD');
    
console.log(Money);
console.log(Time);

let appData = {
    Budget : Money,
    timeData : Time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};

let q1 = prompt('Enter the required cost item this month', ''),
    q2 = prompt('How much will it cost?', ''),
    q3 = prompt('Enter the required cost item this month', ''),
    q4 = prompt('How much will it cost?', '');

    
appData.expenses[q1] = q2;
appData.expenses[q3] = q4;

console.log(appData['expenses']);

alert(Money/30);
