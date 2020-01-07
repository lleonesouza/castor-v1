// Paths
// {...paths, xls: xls}
// names: 
// [xls, pdf]


module.exports = {
  // Path
  createPath: "post:path",
  getPath: "get:paths",
  updatePath: "put:path",
  deletePath: "del:path",

  // Excel
  exportXls: "get:excel:items",
  importXls: "put:excel:items",
  updatesXls: "write:excel:items",

  // Pdf
  exportPdf: "get:excel:service",
  importPdf: "put:excel:service",
  updatesPdf: "write:excel:service",

  // Transactions
  createTransaction: "post:transaction",
  createTransactionDay: "post:transaction:day",
  createTransactionMonth: "post:transaction:month",
  createTransactionYear: "post:transaction:year",

  getTransaction: "get:transaction",
  getTransactionDay: "get:transaction:day",
  getTransactionMonth: "get:transaction:month",
  getTransactionYear: "get:transaction:year",

  // Items
  createItem: "post:item",
  getItems: "get:item",
  updateItem: "put:item",
  deleteItem: "del:item",

  // Service
  createService: "post:service",
  getServices: "get:services",
  updateService: "put:service",
  deleteService: "del:service",

  // Spendings
  createItem: "post:item",
  getItems: "get:item",
  updateItem: "put:item",
  deleteItem: "del:item",

  // Employee
  createItem: "post:item",
  getItems: "get:item",
  updateItem: "put:item",
  deleteItem: "del:item"
};
