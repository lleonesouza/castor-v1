const electron = require("electron");
const { ipcMain } = electron;

const {
  GET_EXCEL_ITEMS,
  PUT_EXCEL_ITEMS,
  WRITE_EXCEL_ITEMS
} = require('../../../actionTypes')

// Controllers
const { getExcelData } = require("../../controllers/xls/readers/excelReader");
const { writeExcelData } = require("../../controllers/xls/writers/excelWriter");

// get:execel:items
// ṕost:execel:items
// write:execel:items

module.exports = {
  // PUT EXCEL ITEMS
  // ROUTE: post:transaction
  // OK
  postExcelItems: () =>
    ipcMain.handle(PUT_EXCEL_ITEMS, async (event, updates) => {
      try {
        return await writeExcelData(updates);
      } catch (e) {
        console.log('e');
      }
    }),

  // GET EXCEL ITEMS
  // ROUTE: post:transaction
  // OK
  getExcelItems: () =>
    ipcMain.handle(GET_EXCEL_ITEMS, async (event) => {
        let jsonData = await getExcelData();
        return jsonData;
    })
};
