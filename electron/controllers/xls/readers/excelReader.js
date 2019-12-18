XLSX = require("xlsx");
const {
  findPriceField,
  findNameField,
  findQuantityField
} = require("../synonyms");
const { getExcelPathItem } = require("../path");

var alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T"
];

var getWorksheet = path => {
  var workbook = XLSX.readFile(path);
  var book = workbook.SheetNames[0];
  return workbook.Sheets[book];
};

// Map Fields
var mapFields = worksheet => {
  var columnsName = [];
  var letterMap = [];
  alphabet.map(letter => {
    let cell = worksheet[letter + 1];
    if (cell) {
      columnsName.push(cell.v);
      letterMap.push(letter);
    }
  });
  return { columnsName, letterMap };
};

// Check if there are some value in the ROW and count it
var itemNumber = (worksheet, letterMap) => {
  let condition = false;
  let i = 1;
  while (condition === false) {
    let exist = false;
    letterMap.map(letter => {
      let cell = worksheet[letter + i];
      exist = cell ? true : false;
    });
    if (exist === false) {
      condition = true;
    } else {
      i++;
    }
  }
  return i - 2;
};

// Get Single Row
var getRowValue = (worksheet, letterMap, number) => {
  let row = [];
  letterMap.map(letter => {
    let cell = worksheet[letter + number];
    let cell_value = cell ? cell.v : undefined;
    row.push(cell_value);
  });
  return row;
};

// Get All Row
var getAllSheet = (worksheet, letterMap, itemsNumber) => {
  let sheet = [];
  for (let i = 2; i < itemsNumber + 2; i++) {
    sheet.push(getRowValue(worksheet, letterMap, i));
  }
  return sheet;
};

// Turn Array to Object and add map
var toObj = (selectedRow, columnsName) => {
  // console.log(selectedRow)
  let price = findPriceField(columnsName);
  let name = findNameField(columnsName);
  let quantity = findQuantityField(columnsName);

  // console.log(price, name, quantity)

  if (!name && !price && !quantity) {
    console.log("fail");
  }

  let Obj = selectedRow.reduce(function(result, item, index) {
    let key = columnsName[index].toLowerCase();
    if (key === price.synonym) {
      result[price.default] = item;
    } else if (key === name.synonym) {
      result[name.default] = item;
    } else if (key === quantity.synonym) {
      result[quantity.default] = item;
    } else {
      result[key] = item;
    }

    // console.log(key)

    return result;
  }, {});
  // console.log(Obj)

  return Obj;
};

// loop toObj
var arrayToObj = (items, columnsName) => {
  let array = [];
  items.map(item => {
    array.push(toObj(item, columnsName));
  });
  return array;
};

// Resolve all functions and return data
let getExcelData = async () => {
  try {
    var path = await getExcelPathItem();
    var worksheet = getWorksheet(path);
    var { letterMap, columnsName } = mapFields(worksheet);
    var itemsNumber = itemNumber(worksheet, letterMap);
    var items = getAllSheet(worksheet, letterMap, itemsNumber);
    var data = arrayToObj(items, columnsName);
    return data;
  } catch (e) {
    console.log(e);
  }
};

// return alert("No Path Selected, Please Select A Excel Table");

// var letterMap = mapFields(worksheet).letterMap;
// var columnsName = mapFields(worksheet).columnsNames;
// var selectedRow = getRowValue(worksheet, letterMap, 2);
// var itemsNumber = itemNumber(worksheet, letterMap);
// var items = getAllSheet(worksheet, letterMap, itemsNumber);
// var data = arrayToObj(items, columnsName);

module.exports = { getExcelData, mapFields, getWorksheet };
