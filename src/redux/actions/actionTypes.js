// Paths
// {...paths, xls: xls}
// names: 
// [xls, pdf]


module.exports = {
    // Transactions
    createTransaction: "post:transaction",
    createTransactionDay: "post:transaction:day",
    createTransactionMonth: "post:transaction:month",
    createTransactionYear: "post:transaction:year",

    getTransaction: "get:transaction",
    getTransactionDay: "get:transaction:day",
    getTransactionMonth: "get:transaction:month",
    getTransactionYear: "get:transaction:year",

    // Path
    createPath: "post:path",
    getPath: "get:paths",
    updatePath: "put:path",
    deletePath: "del:path",
  
    // Files Tools
    importXls: "dialog:import:xls",
    exportXls: "get:excel:items",
    updatesXls: "write:excel:items",
    exportPdf: "get:excel:service",

    // Items
    createItem: "post:item",
    getItems: "get:item",
    updateItem: "put:item",
    deleteItem: "del:item",
  
    // Spendings
    createSpending: "post:spending",
    getSpendings: "get:spendings",
    updateSpending: "put:spending",
    deleteSpending: "del:spending",
  
    // Employee
    createEmployee: "post:employee",
    getEmployees: "get:employees",
    updateEmployee: "put:employee",
    deleteEmployee: "del:employee"
  };
  