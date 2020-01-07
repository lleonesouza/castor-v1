const db = require("../../models/index");

module.exports = {
  getPath: () => {
    return db.get("paths");
  },
  updatePath: updates => {
    console.log(updates)
    let paths = db.get("paths");
    let foundIndex = paths.findIndex(paths => paths.id === updates.id);
    paths[foundIndex] = updates;
    db.set("paths", paths);
    return paths;
  },
  deletePath: id => {
    let paths = db.get("paths");
    paths = paths.filter(paths => {
      return paths.id !== id;
    });
    db.set("paths", paths);
    return paths;
  },
  createPath: newPath => {
    let paths = db.get("paths");
    paths.push(newPath);
    db.set("paths", paths);
    return paths;
  }
};
