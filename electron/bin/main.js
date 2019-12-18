const url = require("url");
const path = require("path");
const routes = require('../routes/index')

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

  routes.map(route => route())
};

module.exports = { main };