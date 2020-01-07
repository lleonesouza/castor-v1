import useActions from "../actions/useActions";
import {
    getPath,
    createPath,
    updatePath,
    deletePath,
} from "../actions/actionTypes";

let pathReducer = [
  {
    title: getPath,
    action: (state, action) => {
      let paths = useActions(action.type)
      return { ...state, paths: paths}
    },
    description:
      "read the default excel path, save it to -path:paths- and the paths"
  },
  {
    title: createPath,
    action: (state, action) => {
      let paths = useActions(action.type, action.path)
      return { ...state, paths: paths };
    },
    description:
      "push a new transaction to -transactions:day- key at electron-store"
  },
  {
    title: updatePath,
    action: (state, action) => {
      console.log(action)
      let paths = useActions(action.type, action.path)
      return { ...state, paths: paths };
    },
    description: "create a new transaction at electron-store"
  },
  {
    title: deletePath,
    action: (state, action) => {
      let paths = useActions(action.type, action.path)
      return { ...state, paths: paths };
    },
    description: "create a new transaction at electron-store"
  }
];

export default pathReducer;
