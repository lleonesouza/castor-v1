import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { SalesDiv, ItemForm } from "./css";
import { SecondDiv } from '../../../css/wrappers/wrappers'
import Header from "./src/header2";
import Body from "./src/body";
import Footer from "./src/footer";
import { Context } from "../../../redux/contexts";

export default function NewSell() {
  let {items} = useContext(Context);

  let [list, setList] = useState([]);
  let [newItems, setNewItems] = useState([]);
  let [forceUpdate, setForceUpdate] = useState(true);

  let sum = () => {
    let sum = list.reduce((result,  item) => {
      return result + item.total
    }, null )
    return sum
  }

  let addItemToList = newItem => {
    let newList = list
    newList.push(newItem)
    setList(newList);
    setForceUpdate(!forceUpdate)
  }

  let totalItems = sum() || 0

  return (
    <SecondDiv>
    {forceUpdate}
    
      {items ? (
        <Header addItemToList={addItemToList} />
      ) : <ItemForm/>}

      <Body list={list} />
      
      <Footer totalItems={totalItems}/>
        
    </SecondDiv>
  );
}
