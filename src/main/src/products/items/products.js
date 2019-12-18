import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Item from "./item";
import { Context } from "../../../../redux/contexts";

export default function Products() {
  let context = useContext(Context);
  return (
    <div>
      <Link to="/"> Voltar </Link>

      código de barras

             gs1    ||    padrão

              padrão

              generate id code -> 
              QR CODE or BarCode 

              Read from -> 
              webcam, cellphone(aplicativo)

              impress -> 
              
              
      <h1>Produto Produtos:</h1>
      
      {context.items ? context.items.map(item => <Item item={item} />) : null}
      
    </div>
  );
}
