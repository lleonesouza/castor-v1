// Finances
const transactions = require("./finances/transactions");
const spedings = require("./finances/spedings");
const employees = require("./finances/employees");

// Excel
const xls = require("./xls/xls");
const paths = require("./xls/paths");

// Auth
const auth = require("./auth/auth");
const roles = require("./auth/roles");

let functions = {
    ...paths,
  ...transactions,
  // ...spedings,
  // ...employees,

   ...xls,

  ...auth,
  ...roles
};


let routes = Object.values(functions)

console.log(routes)

module.exports = routes;
