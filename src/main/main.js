import React, { Fragment, useState, useEffect } from "react";
import { HashRouter, Route } from "react-router-dom";
import { Context } from "../redux/contexts";
import Theme from "../css/theme";
import { FirstDiv } from '../css/nav/navCSS';
import { ThemeProvider } from "emotion-theming";
import IconCastor from "../medias/svg/iconCastor";
// Actions
import {
  getExcelItems,
  postTransaction,
  getTransactions,
  getMonth,
  getYear
} from "../redux/actions";

// Components
import Login from "./login/login";
import Nav from "./src/nav/nav";

export default function main({ routes, userConfig }) {
  var isLogged = true;
  let [items, setItems] = useState(null);
  let [transactions, setTransactions] = useState(null);
  let [theme, setTheme] = useState(Theme(userConfig.theme));

  console.log(theme)

  let updateTheme = (value) => {
    let option ={ 
      ...userConfig.theme,
      ...value
    }
    setTheme(Theme(option))
  };

  let getItems = async () => {
    let items = await getExcelItems();
    setItems(items);
  };

  let getSales = async () => {
    let transactions = await getTransactions();
    setTransactions(transactions);
  };

  let compose = () => {
    if (items === null) {
      getItems();
    }
    if (transactions === null) {
      getSales();
    }
    getTransactions();
  };

  useEffect(() => {
    compose();
  });

  let actions = {
    setItems,
    setTransactions,
    postTransaction,
    getSales,
    getItems,
    getMonth,
    getYear,
    updateTheme
  };

  let context = {
    items,
    transactions,
    actions,
    userConfig
  };

  return (
    <HashRouter>
      {!isLogged ? (
        <Route path="/*" exact component={Login} />
      ) : (
        <ThemeProvider theme={theme}>

        
            <Nav navRoutes={routes}
            IconCastor={IconCastor} 
            />
          

          <FirstDiv>
            <Context.Provider value={context}>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.url}
                  component={route.component}
                />
              ))}
            </Context.Provider>
          </FirstDiv>
        </ThemeProvider>
      )}
    </HashRouter>
  );
}
