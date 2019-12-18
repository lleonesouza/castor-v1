import useActions from "./action";
import {
  POST_TRANSACTION,
  POST_TRANSACTION_DAY,
  POST_TRANSACTION_MONTH,
  POST_TRANSACTION_YEAR,
  GET_TRANSACTION,
  GET_TRANSACTION_DAY,
  GET_TRANSACTION_MONTH,
  GET_TRANSACTION_YEAR
} from "../../../actionTypes";

console.log(useActions);

module.exports = (state, action) => {
  switch (action.type) {
    case POST_TRANSACTION:
      const res = useActions(action.type);
      state.transactions.push(res);
      return state;
    case POST_TRANSACTION_DAY:
      const res = useActions(action.type);
      return { ...state, transaction: action.data };
    case POST_TRANSACTION_MONTH:
      const res = useActions(action.type);
      return { ...state, transaction: action.data };
    case POST_TRANSACTION_YEAR:
      const res = useActions(action.type);
      return { ...state, transaction: action.data };

    case GET_TRANSACTION:
      const res = useActions(action.type);
      return { ...state, transaction: action.data };

    case GET_TRANSACTION_DAY:
      const res = useActions(action.type);
      return { ...state, transaction: action.data };

    case GET_TRANSACTION_MONTH:
      const res = useActions(action.type);
      return { ...state, transaction: action.data };

    case GET_TRANSACTION_YEAR:
      const res = useActions(action.type);
      return { ...state, transaction: action.data };

    default:
      return state;
  }
};
