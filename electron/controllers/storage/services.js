const db = require("../../models/index");

module.exports = {
  getServices: () => {
    return db.get("services");
  },
  updateService: updates => {
    let services = db.get("services");
    let foundIndex = services.findIndex(service => service.id === updates.id);
    services[foundIndex] = updates;
    db.set("services", services);
    return services;
  },
  deleteService: id => {
    let services = db.get("services");
    services = services.filter(Service => {
      return Service.id !== id;
    });
    db.set("services", services);
    return services;
  },
  createService: newService => {
    let services = db.get("services");
    services.push(newService);
    db.set("services", services);
    return services;
  }
};
