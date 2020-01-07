const db = require("../../models/index");

module.exports = {
  getItems: () => {
    console.log(db.get("items"))
    return db.get("items");
  },
  updateItem: updates => {
    let items = db.get("items");
    let foundIndex = items.findIndex(item => item.id === updates.id);
    items[foundIndex] = updates;
    db.set("items", items);
    return items;
  },
  deleteItem: id => {
    let items = db.get("items");
    items = items.filter(item => {
      return item.id !== id;
    });
    db.set("items", items);
    return items;
  },
  createItem: newItem => {
    let items = db.get("items");
    items.push(newItem);
    db.set("items", items);
    return items;
  }
};
