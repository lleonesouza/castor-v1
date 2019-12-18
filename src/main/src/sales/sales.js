import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { SalesDiv, ItemForm, GridUl } from "./css";
import Header from "./src/header";
import Body from "./src/body";
import Footer from "./src/footer";
import { Context } from "../../../redux/contexts";

export default function NewSell() {
  let context = useContext(Context);
  let postTransaction = context.actions.postTransaction
  let items = context.items;
  let [list, setList] = useState([]);
  let [forceUpdate, setForceUpdate] = useState(true);

  let sum = () => {
    let sum = list.reduce((result,  item) => {
      return result + item.total
    }, null )
    return sum
  }

  let totalItems = sum() || 0

  let submitTrasanction = (paymentMethod, discount) => {
    if(paymentMethod !== null && list.length >= 1){
    let transaction = {
      seller: "admin",
      items: list,
      paymentMethod: paymentMethod,
      value: sum(),
      total: sum() - discount,
      discount: discount,
    };
    postTransaction(transaction)
    }else{
      alert('Ops! Falta adicionar o método de pagamento ou o produto.')
    }
  }

  let addItemToList = newItem => {
    let newList = list
    newList.push(newItem)
    setList(newList);
    setForceUpdate(!forceUpdate)
  }

  return (
    <SalesDiv>
      <Link to="/"> Voltar </Link>
    {forceUpdate}
      
      {items ? (
        <Header list={list} items={items} addItemToList={addItemToList} />
      ) : <ItemForm/>}

      <Body list={list} />
      
      <Footer submitTrasanction={submitTrasanction}
      totalItems={totalItems}/>

    </SalesDiv>
  );
}
