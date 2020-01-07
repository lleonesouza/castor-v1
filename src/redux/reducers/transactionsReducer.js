import {
  createTransaction,
  createTransactionDay,
  createTransactionMonth,
  createTransactionYear,
  getTransaction,
  getTransactionDay,
  getTransactionMonth,
  getTransactionYear
} from "../actions/actionTypes";

let transactionsReducer = [
  {
    title: createTransaction,
    action: (state, action) => {
      return { ...state };
    },
    description:
      "push a new transaction to -transactions- key at electron-store and return it"
  },
  {
    title: createTransactionDay,
    action: (state, action) => {
      return { ...state, count: 10 };
    },
    description:
      "push a new transaction to -transactions:day- key at electron-store"
  },
  {
    title: createTransactionMonth,
    action: (state, action) => {
      return { ...state };
    },
    description: "create a new transaction at electron-store"
  },
  {
    title: createTransactionYear,
    action: (state, action) => {
      return { ...state };
    },
    description: "create a new transaction at electron-store"
  },
  {
    title: getTransaction,
    action: (state, action) => {
      return { ...state, count: 10 };
    },
    description: "create a new transaction at electron-store"
  },
  {
    title: getTransactionDay,
    action: (state, action) => {
      return { ...state };
    },
    description: "create a new transaction at electron-store"
  },
  {
    title: getTransactionMonth,
    action: (state, action) => {
      return { ...state };
    },
    description: "create a new transaction at electron-store"
  },
  {
    title: getTransactionYear,
    action: (state, action) => {
      return { ...state };
    },
    description: "create a new transaction at electron-store"
  }
];

export default transactionsReducer;
