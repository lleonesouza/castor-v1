import React, { Fragment, Suspense } from "react";

// Css
import {Grid} from "./css";

// Actions
import Actions from "../../../redux/actions/actionTypes";

// Components
import XlsController from "./src/xlsController";

function home({ useTracked }) {
  const [state, dispatch] = useTracked();

  let { getItems, getPath, getTransaction } = Actions;

  let dispatching = () => {
    dispatch({ type: getItems });
    dispatch({ type: getPath });
    dispatch({ type: getTransaction });
  };

  if (typeof state.paths === "function") {
    return (
      <Grid>
  
        <Suspense fallback={<h1>loading...</h1>}>
          <XlsController
            dispatch={dispatch}
            paths={state.paths}
          />
        </Suspense>


      </Grid>
    );
  } else {
    return (
      <Fragment>
        dispaching...
        {dispatching()}
      </Fragment>
    );
  }
}

export default React.memo(home);
