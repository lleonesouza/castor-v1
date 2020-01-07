const db = require("../../models/index");

module.exports = {
  getEmployees: () => {
    return db.get("employees");
  },
  updateEmployee: updates => {
    let employees = db.get("employees");
    let foundIndex = employees.findIndex(employee => employee.id === updates.id);
    employees[foundIndex] = updates;
    db.set("employees", employees);
    return employees;
  },
  deleteEmployee: id => {
    let employees = db.get("employees");
    employees = employees.filter(employee => {
      return employee.id !== id;
    });
    db.set("employees", employees);
    return employees;
  },
  createEmployee: newEmbloyee => {
    let employees = db.get("employees");
    employees.push(newEmbloyee);
    db.set("employees", employees);
    return employees;
  }
};
