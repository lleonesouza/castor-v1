const db = require("../../models/index");


let date = new Date();
let UTCday = date.getUTCDate();
let UTCmounth = date.getUTCMonth();
let UTCyear = date.getUTCFullYear();
let d = `${UTCday}/${UTCmounth}/${UTCyear}`;

// Cashier
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


let newTransaction = transaction => {
  console.log(transaction);
  let transactions = db.get("transactions");
  console.log(transactions);
  transactions.push(transaction);
  db.set("transactions", transactions);
  return transaction
};

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

let endMonth = () => {
  let month = db.get("month");
  let year = db.get("year");
  year[month.name] = month;
  db.set("year", year);
  db.delete("month");
};

// Get
let getTransactions = () => {
  // db.set('transactions', {test:'test'})
  // let a = db.get("transactions")
  // return a
};

let getMonth = () => {
  return db.get("month");
};
let getYear = () => {
  return db.get("year");
};

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