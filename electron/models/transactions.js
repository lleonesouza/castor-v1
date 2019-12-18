// @ts-check

let item = {
  type: "object",
  properties: {
    id: "string",
    title: "string",
    unit_price: "number",
    quantity: "number",
    tangible: "boolean"
  },
  required: ["id", "title", "unit_price", "quantity", "tangible"]
};

let transactions = {
  type: "array",
  items: {
    type: "object",
    properties: {
      items: { type: "array" },
      seller: { type: "string" },
      customer: { type: "string" },
      paymentMethod: {
        type: "string",
        enum: ["credit", "debit", "cash"]
      },
      cash: { type: "number" },
      total: { type: "number" },
      discount: { type: "number" },
      change: { type: "number" },
      amount: { type: "number" },
      date: { type: "string" }
    },
    required: [
      "items",
      "seller",
      "paymentMethod",
      "total",
      "amount",
      "date"
    ]
  },
  default: []
};

let month = {
  type: "object",
  properties: {
    name: { type: "string" },
    total: { type: "string" },
    bestSeller: { type: "string" },
    mostValuable: { type: "string" },
    days: {
      type: "array",
      items: {
        type: "object",
        properties: {
          transactions: transactions,
          date: { type: "string" },
          total: { type: "string" },
          bestSeller: { type: "string" },
          mostValuable: { type: "string" }
        }
      },
      default: []
    }
  }
};

let year = {
  type: "object",
  properties: {
    january: month,
    february: month,
    marchi: month,
    april: month,
    may: month,
    june: month,
    july: month,
    august: month,
    september: month,
    october: month,
    november: month,
    december: month
  }
};

module.exports = { transactions, month, year };
