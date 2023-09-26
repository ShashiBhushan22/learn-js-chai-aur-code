const accountId = 144553
let accountEmail = "sbj@jha"
var accountPassword ="12345"
accountCity = "Itahari"
let accountState;
/*
Prefer not to use var
because of issue in block scope and functional scope
 */
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);