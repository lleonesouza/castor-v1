XLSX = require("xlsx");
const { getExcelData, mapFields, getWorksheet } = require("./importXls");
const {
  findPriceField,
  findNameField,
  findQuantityField
} = require("./synonyms");
const { getExcelPathItem } = require("./setPath");

let path = getExcelPathItem();

var updateStock = (id, quantity, WS) => {
  let realID = id - 1;
  let item = WS[realID];
  let stock = item.quantidade;
  let newStock = stock - quantity;
  item.quantidade = newStock;
};

var organizeRow = (excel, columnsName) => {
  let allRows = [];
  allRows.push(columnsName);
  excel.map(item => {
    let row = [];
    item.map(value => {
      row.push(value);
    });
    row.push(item.nome);
    row.push(item.quantidade);
    row.push(item.preco);
    row.push(item.descricao);
    allRows.push(row);
  });
  return allRows;
};

var organizeRow2 = (excel, columnsName) => {
  let allRows = [];
  allRows.push(columnsName);
  excel.map(item => {
    let arrayOfPropeties = Object.values(item);
    let row = [];
    arrayOfPropeties.map(value => {
      row.push(value);
    });
    allRows.push(row);
  });
  return allRows;
};

let writeExcel = results => {
  // Create new WB
  var ws_name = "SheetJS";
  var wb = XLSX.utils.book_new();

  // Make WS
  var ws_data = results;

  // Write WS to WB
  var wss = XLSX.utils.aoa_to_sheet(ws_data);
  XLSX.utils.book_append_sheet(wb, wss, ws_name);

  // Write WB to xlsx
  XLSX.writeFile(wb, "items.xlsx");
};

//Update and Write new Excel Table
let updatesXls = updates => {
  let WS_JSON = getExcelData(path);
  let WORKSHEET = getWorksheet(path);
  let columnsName = mapFields(WORKSHEET).columnsNames;
  let lowerCaseColumns = [];
  columnsName.map(item => {
    lowerCaseColumns.push(item.toLowerCase());
  });

  updates.map(({ id, quantity }) => {
    let realID = id - 1;
    let item = WS_JSON[realID];

    let { index, synonym } = findQuantityField(lowerCaseColumns);
    let stock = item[synonym];

    let newStock = stock - quantity;
    // updates
    WS_JSON[realID][synonym] = newStock;
    // check if is alright
    // return true
  });

  let results = organizeRow2(WS_JSON, columnsName);
  console.log(results);

  writeExcel(results);
};

let updates = [
  { id: 5, quantity: 1 },
  { id: 3, quantity: 1 }
];

// console.log(updateStock(3, 1))

module.exports = { updatesXls };
