import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import List from "./src/listTransactions";

export default function cashier() {


 
  return (
    <div>
    
      <h3> Horario de inicio: 7:22 am </h3>
      <h3> Fechar Caixa Data 25/11</h3>

      <List />
    </div>
  );
}
