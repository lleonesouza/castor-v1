const db = require("../../models/index");

module.exports = {
  getSpending: () => {
    return db.get("spendings");
  },
  updateSpending: updates => {
    let spendings = db.get("spendings");
    let foundIndex = spendings.findIndex(spending => spending.id === updates.id);
    spendings[foundIndex] = updates;
    db.set("spendings", spendings);
    return spendings;
  },
  deleteSpending: id => {
    let spendings = db.get("spendings");
    spendings = spendings.filter(spending => {
      return spending.id !== id;
    });
    db.set("spendings", spendings);
    return spendings;
  },
  createSpending: newSpending => {
    let spendings = db.get("spendings");
    spendings.push(newSpending);
    db.set("spendings", spendings);
    return spendings;
  }
};
