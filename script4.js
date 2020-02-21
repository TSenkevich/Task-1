// security check
//if you enter password than the file open
let password = prompt('enter password', '');
if (password == '9583' || password =='1747') {
    document.write('Access is open to the database A, B or C');
}
else if (password == "3331" || password == "7922"){
    document.write('Access is open to the database  B or C');
} 
else if (password == "9455" || password == "8997"){
    document.write('Access is open to the database C');
}
else 
    document.write('Access closed');
