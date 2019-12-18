const electron = require("electron");
const { ipcMain } = electron;
const {
  newSpendings,
  endDay,
  endMonth,
  getSpendingss,
  getMonth,
  getYear
} = require("../../controllers/finances/spendings");

module.exports = {
  // CREATE NEW TRANSACTIONS
  // ROUTE: post:spendings
  // OK
  postSpendings: () =>
    ipcMain.handle("post:spendings", async (event, spendings) => {
      newSpendings(spendings);
      return true;
    }),

  // CREATE NEW DAY
  // ROUTE: post:day
  postSpendingsDay: () =>
    ipcMain.handle("post:spendings:day", async (event, path) => {
      endDay();
      return true;
    }),

  // CREATE NEW MONTH
  // ROUTE: post:month
  postSpendingsMonth: () =>
    ipcMain.handle("post:spendings:month", async (event, path) => {
      endMonth();
      return true;
    }),

  // CREATE NEW YEAR
  // ROUTE: post:month
  postSpendingsYear: () =>
    ipcMain.handle("post:spendings:year", async (event, path) => {
      endMonth();
      return true;
    }),

  // GET ALL TRANSACTIONS
  // ROUTE: get:spendings
  getSpendings: () =>
    ipcMain.handle("get:spendings", async (event, path) => {
      return getSpendingss();
    }),

  // GET ALL MONTHS
  // ROUTE: get:month
  getSpendingsDay: () =>
    ipcMain.handle("get:spendings:day", async (event, path) => {
      return getMonth();
    }),

  // GET ALL YEAR
  // ROUTE: get:year
  getSpendingsMonth: () =>
    ipcMain.handle("get:spendings:month", async (event, path) => {
      return getYear();
    }),

  // GET ALL YEAR
  // ROUTE: get:year
  getSpendingsYear: () =>
    ipcMain.handle("get:spendings:year", async (event, path) => {
      return getYear();
    })
};
