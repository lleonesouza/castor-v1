import React, { useReducer, useEffect } from "react";
import { HashRouter, Route } from "react-router-dom";
import { Context } from "../redux/contexts";
import {
  employeesReducer,
  productsReducer,
  spendingsReducer,
  transactionsReducer
} from '../redux/reducers/index'

import { FirstDiv } from "../css/nav/navCSS";
import Nav from "./src/nav/nav";

export default function main({ routes, userConfig, updateTheme }) {

  let [transaction, dispatchTransaction] = useReducer(transactionsReducer, {})
  let [employees, dispatchEmployees] = useReducer(employeesReducer, {});
  let [spendings, dispatchSpending] = useReducer(spendingsReducer, {})
  let [products, dispatchProducts] = useReducer(productsReducer, {});

  let context = {
    state: {
      transaction,
      spendings,
      employees,
      products,
      userConfig
    },
    actions: {
      dispatchTransaction,
      dispatchSpending,
      dispatchEmployees,
      dispatchProducts,
      updateTheme
    }
  };
  
  return (
    <HashRouter>
      <Nav navRoutes={routes} />

      <FirstDiv>
        <Context.Provider value={context}>
          {routes.map((route, index) => (
            <Route key={index} path={route.url} component={route.component} />
          ))}
        </Context.Provider>
      </FirstDiv>
    </HashRouter>
  );
}
