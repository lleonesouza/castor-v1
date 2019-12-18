const { dialog } = require("electron");
const {setExcelPathItem} = require('../../controllers/xls/path')

const optionsBox = {
  type: 'question',
  buttons: ['Ok, thanks'],
  defaultId: 2,
  title: 'Selected Excel',
  message: 'OK',
  detail: 'Um novo caminho para o excel foi selecionado com sucesso!',
  checkboxLabel: 'Remember my answer',
  checkboxChecked: true,
};

const messageBox = (mainWindow, options) => {
  dialog.showMessageBox(mainWindow, options, (a, b) => {
    console.log(a);
    console.log(b);
  });
};

let options = {
  defaultPath: "/",
  title: "Choose Excel File",
  properties: ["openFile"],
  filters: [
    {
      name: "Excel",
      extensions: [
        "xlsx",
        "xlsm",
        "xlsb",
        "xltx",
        "xltm",
        "xls",
        "xlt",
        "xls",
        "xml",
        "xml",
        "xlam",
        "xla",
        "xlw",
        "xlr"
      ]
    }
  ]
};

module.exports = selectExcel = mainWindow => {
  dialog.showOpenDialog(mainWindow, options).then(res => {
    let isCancel = res.canceled;
    if (!isCancel) {
      let path = res.filePaths[0];
      setExcelPathItem(path)
        .then(res => {
          console.log(res);
          messageBox(mainWindow, optionsBox);
        })
        .catch(e => console.log(e));
    }
  });
};