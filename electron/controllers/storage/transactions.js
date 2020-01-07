const db = require("../../models/index");

let date = new Date();
let UTCday = date.getUTCDate();
let UTCmounth = date.getUTCMonth();
let UTCyear = date.getUTCFullYear();
let d = `${UTCday}/${UTCmounth}/${UTCyear}`;

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

module.exports = {
  // Push to Day table
  createTransaction: transaction => {
    let transactions = db.get("transactions");
     transactions.push(transaction);
     db.set("transactions", transactions);
     return transaction
  },
  
  // Push All transactions of the day to month table and reset day table
  createDayOnMonthT: day => {
    let transactions = db.get("transactions");
    // let day = {
    //   date: d,
    //   total: "total",
    //   bestSeller: "bestSeller",
    //   mostValuable: "mostValuable",
    //   transactions: transactions
    // };
    let month = db.get("month");
    if (!month.name) {
      month.name = monthNumberToName(UTCmounth);
    }
    month.total = month.total + day.total;
    month.day[UTCday] = day;
    db.set("month", month);
    db.delete("transactions");
  },
  
  // Push month to year table and reset month table
  createMonthOnYearT: month => {
//    let month = db.get("month");
    let year = db.get("year");
    year[month.name] = month;
    db.set("year", year);
    db.delete("month");
  },
  
  // Get Transaction Table
  getTransactions: () => {
    db.set('transactions', {test:'test'})
    let transactions = db.get("transactions")
    return transactions
  },
  
  // Get Month Table
  getTransactionsMonth: () => {
    return db.get("month");
  },
  
  // Get Year Table
  getTransactionsYear: () => {
    return db.get("year");
  },
}


