import useActions from "../actions/useActions";
import {
  getItems,
  createItem,
  updateItem,
  deleteItem,

  getServices,
  createService,
  updateService,
  deleteService
} from "../actions/actionTypes";
let productsReducer = [
  {
    title: getItems,
    action: (state, action) => {
      let items = useActions(action.type)
      return { ...state, items: items}
    },
    description:
      "read the default excel path, save it to -products:items- and the items"
  },
  {
    title: createItem,
    action: (state, action) => {
      let items = useActions(action.type, action.item)
      return { ...state, items: items };
    },
    description:
      "push a new transaction to -transactions:day- key at electron-store"
  },
  {
    title: updateItem,
    action: (state, action) => {
      let items = useActions(action.type, action.item)
      return { ...state, items: items };
    },
    description: "create a new transaction at electron-store"
  },
  {
    title: deleteItem,
    action: (state, action) => {
      let items = useActions(action.type, action.item)
      return { ...state, items: items };
    },
    description: "create a new transaction at electron-store"
  },

  
  {
    title: getServices,
    action: (state, action) => {
      let services = useActions(action.type)
      return { ...state, services: services };
    },
    description: "create a new transaction at electron-store"
  },
  {
    title: createService,
    action: (state, action) => {
      let services = useActions(action.type, action.services)
      return { ...state, services: services };
    },
    description: "create a new transaction at electron-store"
  },
  {
    title: updateService,
    action: (state, action) => {
      let services = useActions(action.type, action.services)
      return { ...state, services: services };
    },
    description: "create a new transaction at electron-store"
  },
  {
    title: deleteService,
    action: (state, action) => {
      let services = useActions(action.type, action.services)
      return { ...state, services: services };
    },
    description: "create a new transaction at electron-store"
  }
];

export default productsReducer;
