const Store = require("electron-store");
// @ts-check

let costs = {
  type: "array",
  costs: {
    type: "object",
    properties: {
      id: { type: "array" },
      title: { type: "array" },
      description: { type: "description" },
      value: { type: "number" },
      type: {
        type: "string",
        enum: ["service", "product"]
      }
    },
    required: [
      "id",
      "title",
      "type",
      "value"
    ]
  },
  default: []
};

let costsRecurrencies = {
    type: "array",
  costs: {
    type: "object",
    properties: {
      id: { type: "array" },
      title: { type: "array" },
      description: { type: "description" },
      value: { type: "number" },
      categories: { type: "string"},
      reconrrencies: {type: "string"}
    },
    required: [
      "id",
      "title",
      "value",
      "reconrrencies"
    ]
  },
  default: []
}

let expenses = {
  type: "array",
  expenses: {
    type: "object",
    properties: {
      title: { type: "array" },
      description: { type: "string" },
      categorie: { type: "string" },
      tag: { type: "number" },
      value: { type: "number" },
      date: { type: "string" },
    },
    required: [
      "title",
      "description",
      "categorie",
      "value",
      "date"
    ]
  },
  default: []
};

let expensesRecurrencies = {
    type: "array",
    expenses: {
      type: "object",
      properties: {
        title: { type: "array" },
        description: { type: "string" },
        categorie: { type: "string" },
        recurrence: { type: "number" },
        value: { type: "number" },
        date: { type: "string" },
        paymentMethod: {
          type: "string",
          enum: ["credit", "debit", "cash"]
        }
      },
      required: [
        "items",
        "seller",
        "paymentMethod",
        "discount",
        "change",
        "total",
        "value"
      ]
    },
    default: []
  };

module.exports = {
  costs,
  costsRecurrencies,
  expenses,
  expensesRecurrencies
}
