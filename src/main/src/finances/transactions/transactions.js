import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from  '../../../../redux/contexts'
import List from "./src/listTransactions";

export default function cashier() {

  let {state, actions} = useContext(Context)
  let { transactions } = state
 
  
  return (
    <div>
      <Link to="/"> Voltar </Link>

      <h3> Horario de inicio: 7:22 am </h3>
      <h3> Fechar Caixa Data 25/11</h3>

      <p> Dinheiro: 148 r$ </p>
      <p> Crédito: 148 r$ </p>
      <p> Débito: 148 r$ </p>

      <List />
    </div>
  );
}
