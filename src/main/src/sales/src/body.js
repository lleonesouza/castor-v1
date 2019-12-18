import React from "react";
import { GridUl, FlexUl, BodyDiv } from "../css";
import Delete from '../../../../medias/lotties/delete'

export default function Body({ list }) {
  return (
    <BodyDiv>
       <GridUl top>
        <li> Nome </li>
        <li> Preço Unit </li>
        <li> Qnt </li>
        <li> Total </li>
        <li> </li>
      </GridUl>
      {list.map((item, index)=> (
        <GridUl hover>
          <li> {item.name} </li>
          <li> {item.price} </li>
          <li> {item.quantity} </li>
          <li> {item.total} </li>
          <li  onClick={() => alert('ok')} > <Delete/> </li>
        </GridUl>
      ))}
    </BodyDiv>
  );
}