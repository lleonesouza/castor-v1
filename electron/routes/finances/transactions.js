const { ipcMain } = require("electron");
const {
  newTransaction,
  endDay,
  endMonth,
  getTransactions,
  getMonth,
  getYear
} = require("../../controllers/finances/transactions");
const {
  POST_TRANSACTION,
  POST_TRANSACTION_DAY,
  POST_TRANSACTION_MONTH,
  POST_TRANSACTION_YEAR,
  GET_TRANSACTION,
  GET_TRANSACTION_DAY,
  GET_TRANSACTION_MONTH,
  GET_TRANSACTION_YEAR
} = require('../../../actionTypes')

module.exports = {
  // CREATE NEW TRANSACTIONS
  // ROUTE: post:transaction
  // OK
  postTransaction: () =>
    ipcMain.handle(POST_TRANSACTION, async (event, transaction) => {
      newTransaction(transaction);
      return true;
    }),

  // CREATE NEW DAY
  // ROUTE: post:day
  postTransactionDay: () =>
    ipcMain.handle(POST_TRANSACTION_DAY, async (event) => {
      endDay();
      return true;
    }),

  // CREATE NEW MONTH
  // ROUTE: post:month
  postTransactionMonth: () =>
    ipcMain.handle(POST_TRANSACTION_MONTH, async (event) => {
      endMonth();
      return true;
    }),

  // CREATE NEW YEAR
  // ROUTE: post:month
  postTransactionYear: () =>
    ipcMain.handle(POST_TRANSACTION_YEAR, async (event) => {
      endMonth();
      return true;
    }),

  // GET ALL TRANSACTIONS
  // ROUTE: get:transaction
  getTransaction: () =>
    ipcMain.handle(GET_TRANSACTION, async (event) => {
      return getTransactions();
    }),

  // GET ALL MONTHS
  // ROUTE: get:month
  getTransactionDay: () =>
    ipcMain.handle(GET_TRANSACTION_DAY, async (event) => {
      return getMonth();
    }),

  // GET ALL YEAR
  // ROUTE: get:year
  getTransactionMonth: () =>
    ipcMain.handle(GET_TRANSACTION_MONTH, async (event) => {
      return getYear();
    }),

  // GET ALL YEAR
  // ROUTE: get:year
  getTransactionYear: () =>
    ipcMain.handle(GET_TRANSACTION_YEAR, async (event) => {
      return getYear();
    })
};
