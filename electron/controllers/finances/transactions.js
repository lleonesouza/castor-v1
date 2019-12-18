const db = require("../../models/index");


let date = new Date();
let UTCday = date.getUTCDate();
let UTCmounth = date.getUTCMonth();
let UTCyear = date.getUTCFullYear();
let d = `${UTCday}/${UTCmounth}/${UTCyear}`;

let monthNumberToName = month => {
  let name;
  if (month === 0) {
    name = "january";
  }
  if (month === 1) {
    name = "february";
  }
  if (month === 2) {
    name = "marchi";
  }
  if (month === 3) {
    name = "april";
  }
  if (month === 4) {
    name = "may";
  }
  if (month === 5) {
    name = "june";
  }
  if (month === 6) {
    name = "july";
  }
  if (month === 7) {
    name = "august";
  }
  if (month === 8) {
    name = "september";
  }
  if (month === 9) {
    name = "october";
  }
  if (month === 10) {
    name = "november";
  }
  if (month === 11) {
    name = "december";
  }
  return name;
};


// CREATE NEW TRANSACTION
// SCHEMA: TRANSACTIONS
let newTransaction = transaction => {
  let transactions = db.get("transactions");
   transactions.push(transaction);
   db.set("transactions", transactions);
   return transaction
};

let transactions = {
  items: [
    {
      "id": "r123",
      "title": "Red pill",
      "unit_price": 10000,
      "quantity": 1,
      "tangible": true
    },
    {
      "id": "b123",
      "title": "Blue pill",
      "unit_price": 10000,
      "quantity": 1,
      "tangible": true
    }
  ],
  seller: "admin",
  customer: "client",
  paymentMethod: "cash",
  cash: 100,
  total: 95,
  discount: 5,
  change: 10,
  amount: 90,
  date: `${UTCday}/${UTCmounth}/${UTCyear}`
}

// CREATE NEW DAY AT MONTH AND RESET TRANSACTION
// SCHEMA: DAY
let endDay = () => {
  let transactions = db.get("transactions");
  let day = {
    date: d,
    total: "total",
    bestSeller: "bestSeller",
    mostValuable: "mostValuable",
    transactions: transactions
  };
  let month = db.get("month");
  if (!month.name) {
    month.name = monthNumberToName(UTCmounth);
  }
  month.total = month.total + day.total;
  month.day[UTCday] = day;
  db.set("month", month);
  db.delete("transactions");
};

// CREATE NEW MONTH AT YEAR AND RESET MONTH
// SCHEMA: MONTH
let endMonth = () => {
  let month = db.get("month");
  let year = db.get("year");
  year[month.name] = month;
  db.set("year", year);
  db.delete("month");
};



// GET ALL TRANSACTIONS
let getTransactions = () => {
  // db.set('transactions', {test:'test'})
  // let a = db.get("transactions")
  // return a
};

// GET ALL MONTHS
let getMonth = () => {
  return db.get("month");
};

// GET ALL YEARS
let getYear = () => {
  return db.get("year");
};


// CLEAR ALL
let clearAll = () => {
  db.clear()
}

module.exports = {
  newTransaction,
  endDay,
  endMonth,
  getTransactions,
  getMonth,
  getYear
};