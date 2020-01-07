import React, { useReducer } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { createContainer } from "react-tracked";
import reducer from "../redux/reducers/index";
import { FirstDiv, SecondDiv } from "../css/nav/navCSS";
import Nav from "./src/nav/nav";

export default function main({ routes, userConfig, updateTheme }) {
  const initialState = {
    userConfig: userConfig,
    paths: null,
    items: null,
    services: null,
    spendings: null,
    employees: null,
    transactions: null,
    transactionsDay: null,
    transactionsMonth: null,
    transactionsYear: null
  };

  const useValue = ({ reducer, initialState }) =>
    useReducer(reducer, initialState);

  const { Provider, useTracked } = createContainer(useValue);

  return (
    <HashRouter>
      <Nav navRoutes={routes} />
      <FirstDiv>
        <Provider reducer={reducer} initialState={initialState}>
            <SecondDiv>
              <Switch>
                {routes.map(({ url, Component }, index) => (
                  <Route
                    key={index}
                    exact
                    path={url}
                    render={props => (
                      <Component {...props} useTracked={useTracked} />
                    )}
                  />
                ))}
              </Switch>
            </SecondDiv>
        </Provider>
      </FirstDiv>
    </HashRouter>
  );
}
