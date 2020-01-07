import React from 'react'
import {Switch} from 'react-router-dom'

export default function switcher({routes, useTracked}) {
    return (
        <Switch>
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
        </Switch>
    )
}
