import useActions from "../actions/useActions";
import {
  importPdf,
  exportPdf,
  updatesPdf,
  importXls,
  exportXls,
  updatesXls
} from "../actions/actionTypes";

let pathReducer = [
  {
    title: importXls,
    action: (state, action) => {
      console.log(state);
      let promise = useActions(action.type);
      return { ...state, importXls: promise };
    },
    description:
      "set up excel path, read the table and save it to -products:items-"
  },
  {
    title: exportXls,
    action: (state, action) => {
      return { ...state, count: 10 };
    },
    description: "create a new transaction at electron-store"
  },
  {
    title: updatesXls,
    action: (state, action) => {
      return { ...state };
    },
    description: "create a new transaction at electron-store"
  },
  {
    title: exportPdf,
    action: (state, action) => {
      return { ...state, count: 10 };
    },
    description:
      "push a new transaction to -transactions:day- key at electron-store"
  },
  {
    title: updatesPdf,
    action: (state, action) => {
      return { ...state };
    },
    description: "create a new transaction at electron-store"
  },
  {
    title: importPdf,
    action: (state, action) => {
      return { ...state };
    },
    description: "create a new transaction at electron-store"
  }
];

export default pathReducer;
