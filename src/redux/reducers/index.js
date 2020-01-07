import employeesReducer from "./transactionsReducer";
import productsReducer from "./productsReducers";
import spendingsReducer from "./transactionsReducer";
import transactionsReducer from "./transactionsReducer";
import xlsReducer from './xlsReducer'
import pathReducer from './pathReducer'

let myReducers = [
  ...employeesReducer,
  ...productsReducer,
  ...spendingsReducer,
  ...transactionsReducer,
  ...xlsReducer,
  ...pathReducer,
];

const compose = myReducers => {
  let reducers = {};
  myReducers.map((action) => {
    reducers[action.title] = action.action
  })

  var proxy = {
    get: (target, name) => {
      return target.hasOwnProperty(name) ? target[name] : (state, action) => {
        console.log('proxy')
        return state;
      };
    }
  };
  
  var proxyReducer = new Proxy(reducers, proxy);
  
  return (state, action) => {
    return (proxyReducer[action.type](state, action))
  }
};

let reducer = compose(myReducers)

export default reducer