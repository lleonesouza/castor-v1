// @ts-check

let items = {
    type: "array",
    items: {
      type: "object",
      properties: {
        id: { type: "string" },
        title: { type: "string" },
        unit_price: { type: "string" },
        quantity: { type: "string" },
        tangible: { type: "string" }
      },
      required: ["id", "title", "unit_price", "quantity", "tangible"]
    },
    default: []
};

let services = {
  type: "array",
  items: {
    type: "object",
    properties: {
      id: { type: "string" },
      title: { type: "string" },
      unit_price: { type: "number" },
      quantity:{ type: "string" },
      tangible:{ type: "boolean" }
    },
    required: ["id", "title", "unit_price", "quantity", "tangible"]
  },
  default: []
};

module.exports = {
  items,
  services
};
