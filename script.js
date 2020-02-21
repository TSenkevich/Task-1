'use strict';// it  meanes We write ES6

let  money = +prompt('Your budget for a month', ' '),
     time = prompt('Enter the date YYYY-MM-DD');
    

let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};
// ask user two times the same queshions
for (let i = 0; i < 2; i++) {
    let nameItem = prompt('Enter the required cost item this month', ''),
        costItem = prompt('How much will it cost?', '');
     // check answers is not cancel or empty string
        if (
          nameItem != null &&  costItem != null 
         && nameItem != '' && costItem != '' && nameItem.length <50
         ) {
             appData.expenses[nameItem] = costItem;
        }
       else { 
        nameItem = prompt('Enter the required cost item this month', '');
        costItem = prompt('How much will it cost?', '');
        appData.expenses[nameItem] = costItem;
       }               
}; 

appData.mooneyPerDay = appData.budget/30;
//output message with the value mooneyPerDay
alert("Budget per day: " + appData.mooneyPerDay);

if (appData.mooneyPerDay <= 100) {
    console.log('You are poor');
}
else  if (appData.mooneyPerDay <= 500){
    console.log('Middle level');
}
else if (appData.mooneyPerDay > 500){ 
    console.log('You are rich');
}
else {console.log('Incorrect data');
};
