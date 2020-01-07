const Menu = require("electron").Menu;
const selectExcel = require('../controllers/IpcMainOn/dialogs/selectExcel')

process.env.NODE_ENV = "!production";

const menu = mainWindow => {
  const menuTemplate = [
    {
      label: "File",
      submenu: [
        {
          label: "Select Excel",
          accelerator: process.platform === "darwin" ? "Command+E" : "Ctrl+E",
          click() {
            selectExcel(mainWindow);
          }
        },
        {
          label: "Create Excel",
          click() {
            generateExcel(mainWindow);
          }
        },
        {
          label: "Paths",
          click() {
            pathWindow();
          }
        },
        {
          label: "Backup",
          click() {
            backupWindow();
          }
        },
        {
          label: "Quit",
          accelerator: process.platform === "darwin" ? "Command+Q" : "Ctrl+Q",
          click() {
            app.quit();
          }
        }
      ]
    },
    {
      label: "About",
      submenu: [
        {
          label: "Software",
          click() {
            handler.createAddWindow();
          }
        },
        {
          label: "Author",
          click() {
            handler.createAddWindow();
          }
        },
        {
          label: "Donate",
          accelerator: process.platform === "darwin" ? "Command+Q" : "Ctrl+Q",
          click() {
            app.quit();
          }
        }
      ]
    },
    {
      label: "Help",
      submenu: [
        {
          label: "Examples",
          click() {
            handler.createAddWindow();
          }
        },
        {
          label: "Videos Helps",
          click() {
            handler.createAddWindow();
          }
        },
        {
          label: "Report Error",
          accelerator: process.platform === "darwin" ? "Command+Q" : "Ctrl+R",
          click() {
            app.quit();
          }
        }
      ]
    }
  ];

  // If Mac, add empty object to menu
  if (process.platform == "darwin") {
    menuTemplate.unshit({});
  }

  // Add Developoer tools if not in prodution
  if (process.env.NODE_ENV !== "production") {
    menuTemplate.push({
      label: "Developer Tools",
      submenu: [
        {
          label: "Toggle DevTools",
          accelerator: process.platform == "darwin" ? "Command+I" : "Ctrl+I",
          click(item, focusedWindow) {
            focusedWindow.toggleDevTools();
          }
        },
        {
          role: "reload"
        }
      ]
    });
  }

  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(mainMenu);
};

module.exports = menu;
