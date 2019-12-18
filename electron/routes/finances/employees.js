const electron = require("electron");
const { ipcMain } = electron;
const {
  newEmployees,
  endDay,
  endMonth,
  getEmployeess,
  getMonth,
  getYear
} = require("../../controllers/finances/employees");

module.exports = {
  // CREATE NEW TRANSACTIONS
  // ROUTE: post:employees
  // OK
  postEmployees: () =>
    ipcMain.handle("post:employees", async (event, employees) => {
      newEmployees(employees);
      return true;
    }),

  // CREATE NEW DAY
  // ROUTE: post:day
  postEmployeesDay: () =>
    ipcMain.handle("post:employees:day", async (event, path) => {
      endDay();
      return true;
    }),

  // CREATE NEW MONTH
  // ROUTE: post:month
  postEmployeesMonth: () =>
    ipcMain.handle("post:employees:month", async (event, path) => {
      endMonth();
      return true;
    }),

  // CREATE NEW YEAR
  // ROUTE: post:month
  postEmployeesYear: () =>
    ipcMain.handle("post:employees:year", async (event, path) => {
      endMonth();
      return true;
    }),

  // GET ALL TRANSACTIONS
  // ROUTE: get:employees
  getEmployees: () =>
    ipcMain.handle("get:employees", async (event, path) => {
      return getEmployeess();
    }),

  // GET ALL MONTHS
  // ROUTE: get:month
  getEmployeesDay: () =>
    ipcMain.handle("get:employees:day", async (event, path) => {
      return getMonth();
    }),

  // GET ALL YEAR
  // ROUTE: get:year
  getEmployeesMonth: () =>
    ipcMain.handle("get:employees:month", async (event, path) => {
      return getYear();
    }),

  // GET ALL YEAR
  // ROUTE: get:year
  getEmployeesYear: () =>
    ipcMain.handle("get:employees:year", async (event, path) => {
      return getYear();
    })
};
