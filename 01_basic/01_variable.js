const accountId = 15963
let accountPassword = "59482"
var accountGmail = "dk@gmail.com"

accountCity = "Surat"

//accountId = 123 // not allowed it is a const varible 

accountPassword = "123"                      

accountGmail = "123@gmail.com"

accountCity = "Sapur"

/* 
Prefer not to use var 
becaus of issue in block scope and finctional scope                                                 
*/

console.log(accountId);
console.table([accountPassword,accountGmail,accountCity,accountId])