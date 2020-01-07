// @ts-check

let paths = {
    type: "array",
    items: {
        type: "object",
        properties: {
          id: { type: "string" },
          title: { type: "string" },
          path: { type: "string" },
          lastUpdate: { type: "string" },
          isWorking: { type: "string" }
        },
        required: ["id", "title"],
    },
    default: [{
        id: '0',
        title: 'xls'
    },
    {
        id: '1',
        title: 'pdfTransactions'
    },
    {
        id: '2',
        title: 'pdfSpendings'
    }]
};

module.exports = {
  paths
};
