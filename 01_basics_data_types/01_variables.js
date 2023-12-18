/**
 * User account details.
 *
 * accountId: User's unique account identifier (constant)
 * accountEmail: User's email address (let)
 * accountPassword: User's login password (var)
 * accountCity: User's city (global variable)
 * accountState: User's state (let) - undefined
 */
const accountId = 144553;
let accountEmail = "hitesh@google.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

// accountId = 2 // not allowed to change constant


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


/**
 * Logs the user account details to the console in a table format.
 *
 * Uses console.table() to display the accountId, accountEmail,
 * accountPassword, accountCity and accountState variables in a
 * tabular format.
 *  ┌─────────┬─────────────┐
    │ (index) │   Values    │
    ├─────────┼─────────────┤
    │    0    │   144553    │
    │    1    │ 'hc@hc.com' │
    │    2    │ '21212121'  │
    │    3    │ 'Bengaluru' │
    │    4    │  undefined  │
    └─────────┴─────────────┘
 */
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
