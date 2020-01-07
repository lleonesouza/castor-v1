import React, { useTransition, Suspense } from "react";
import Suspenser from "./suspenser";
import actions from "../../../../redux/actions/actionTypes";

const SUSPENSE_CONFIG = { timeoutMs: 2000 };

export default function Products({ useTracked }) {
  const {getItems} = actions
  const [state, dispatch] = useTracked();
  const [startTransition, isPending] = useTransition(SUSPENSE_CONFIG);

  const dispatching = () => {
          dispatch({type: getItems});
  }

  if (typeof(state.items) === 'function') {
    return (
      <Suspense fallback={<h1>loading...</h1>}>
      <Suspenser items={state.items} />
    </Suspense>
    );
  } else {
    return <div>
      dispaching...
      { dispatching() }
    </div>
  }
}
