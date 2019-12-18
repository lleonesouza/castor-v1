const electron = require("electron");
const { BrowserWindow } = electron;
const { app } = electron;
const { main, menu } = require("./electron/bin/index");
const path = require("path");
require("electron-reload")(__dirname, {
  electron: path.join(__dirname, "node_modules", ".bin", "electron")
});

app.on("ready", () => {
  let mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    }
  });

  menu(mainWindow)
  
  main(app, mainWindow);
});
