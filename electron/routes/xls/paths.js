const electron = require("electron");
const { ipcMain } = electron;
const { setExcelPathItem, getExcelPathItem } = require("../../controllers/xls/path");

const {
  SET_PATH_ITEMS,
  GET_PATH_ITEMS
} = require('../../../actionTypes')

module.exports = {
  // GET EXCEL PATH ITEM
  // ROUTE: "path:items"
  getExcelPathItem: () =>
    ipcMain.handle(GET_PATH_ITEMS, async (event) => {
      return await getExcelPathItem();
    }),

  // SET EXCEL PATH ITEM
  // ROUTE: "path:items"
  setExcelPathItem: () =>
  ipcMain.handle(SET_PATH_ITEMS, async (event, path) => {
    return await setExcelPathItem(path);
  })

};
