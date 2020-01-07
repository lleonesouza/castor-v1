const url = require("url");
const path = require("path");

// IpcMain Handler
const useRoutes = require('../routes/useRoutes')
const actionMap = require('../routes/actionTypes')
const controllers = require('../controllers/index')

// IpcMain On
// const useRoutes = require('../routes/useIpcOn')
// const actionMap = require('../routes/actionTypesOn')
// const controllers = require('../controllers/indexOn')

var main = (app, mainWindow) => {
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "../../build/index.html"),
      protocol: "file:",
      slashes: true
    })
  );

  mainWindow.on("closed", () => {
    app.quit();
  });

  useRoutes({controllers, actionMap}, mainWindow)
};

module.exports = main;