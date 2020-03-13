'use strict';// it  meanes We write ES6
let  money,time;  
function start() {
     while (isNaN(money) || money =='' || money == null){
           money = +prompt('Your budget for a month', ' ');
}
    time = prompt('Enter the date YYYY-MM-DD');
}
start();

let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : true
};
// ask user two times the same queshions
/*for (let i = 0; i < 2; i++) {
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
}; */
function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt ("Enter the required cost item this month", ""),
            b = prompt ("How much will it cost?", "");
    
        if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
    
            console.log ("done");
    
            appData.expenses[a] = b;
        } else {                            
            console.log ("bad result");
            i--;
        }
    
    };
}
chooseExpenses();

//the same weth cycle  WHILE

// let i = 0;
// while (i < 2) {
//     let a = prompt ("Enter the required cost item this month", ""),
//         b = prompt ("How much will it cost?", "");
//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
//         console.log ("done");
//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }

// the same weth cycle DO...WHILE

// let i = 0;
// do {
//     let a = prompt ("Enter the required cost item this month", ""),
//         b = prompt ("How much will it cost?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }
// while(i < 2);

function detectDayBudget() {
    appData.mooneyPerDay = (appData.budget/30).toFixed();
//output message with the value mooneyPerDay
    alert("Budget per day: " + appData.mooneyPerDay);
}
detectDayBudget();
function detectLevel(){
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
}
detectLevel();
function chooseOptExpenses(){
    for (let i = 1; i <= 3; i++) {
        let a = prompt ("Enter optional item this month", "");
            appData.optionalExpenses[i] = a;
    };
}
chooseOptExpenses();
function checkSavings() {
    let save = prompt('Total savings'),
        percent = prompt('Deposit income percentage');
        if (appData.savings == true) 
        appData.monthIncome = save/100/12*percent;
}
checkSavings();
console.log(appData);