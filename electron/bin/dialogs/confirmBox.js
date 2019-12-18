const { dialog } = require("electron");


const options = {
    type: 'question',
    buttons: ['Cancel', 'Yes, please', 'No, thanks'],
    defaultId: 2,
    title: 'Question',
    message: 'Do you want to do this?',
    detail: 'It does not really matter',
    checkboxLabel: 'Remember my answer',
    checkboxChecked: true,
  };

  dialog.showMessageBox(options, (a, b) => {
    console.log(a);
    console.log(b);
  });

  