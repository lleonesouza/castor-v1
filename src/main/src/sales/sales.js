import React, { useContext, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { SalesDiv, ItemForm } from "./css";
import Header from "./src/header2";
import Body from "./src/body";
import Footer from "./src/footer";

export default function NewSell({ useTracked }) {
  let [list, setList] = useState([]);
  let [newItems, setNewItems] = useState([]);
  let [forceUpdate, setForceUpdate] = useState(true);

  let sum = () => {
    let sum = list.reduce((result, item) => {
      return result + item.total;
    }, null);
    return sum;
  };

  let addItemToList = newItem => {
    let newList = list;
    newList.push(newItem);
    setList(newList);
    setForceUpdate(!forceUpdate);
  };

  let totalItems = sum() || 0;

  const [state, dispatch] = useTracked();

  return (
    <Fragment>
      {forceUpdate}

      <div>
        <span>Text: {state.text}</span>
        <input
          value={state.text}
          onChange={event =>
            dispatch({ type: "setText", text: event.target.value })
          }
        />
      </div>

      <Header addItemToList={addItemToList} />

      <Body list={list} />

      <Footer totalItems={totalItems} />
    </Fragment>
  );
}
