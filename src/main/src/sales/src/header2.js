import React, { useState } from "react";
import { Context } from "../../../../redux/contexts";
import { Button, ItemForm, InputQuantity } from "../css";
import OK from "../../../../medias/lotties/ok";
import FilterResults from 'react-filter-search';
import SearchInput, {createFilter} from 'react-search-input'

export default function Newitem({ addItemToList }) {


  let [search, setSearch] = useState()


  let [quantity, setQuantity] = useState(1);
  let [item, setItem] = useState(null);
  let [loadingItem, setLoadingItem] = useState(false);

  // {loadingItem === true ? setTimeout(() => {
  //   setLoadingItem(false)
  // }, 500) : null}
  
  // let total = () => {
  //   if (item && quantity) {
  //     return item.price * quantity;
  //   } else return 0;
  // };

  // let onChangeQuantity = e => {
  //   if (item === null) {
  //     alert('Selecione um produto!')
  //   } else if (item.quantidade < e.target.value) {
  //     alert(`O estoque atual de ${item.nome} é de apenas ${item.quantidade} unidades, Desculpe!`)
  //   } else {
  //     setQuantity(e.target.value);
  //   }
  // };

  // let changeItem = selectedItem => {
  //   if (selectedItem[0]) {
  //     console.log(selectedItem[0])
  //     console.log(items[selectedItem[0].id])
  //     setItem(items[selectedItem[0].id]);
  //   }
  // };

  // let handleChange = event => {
  //   const { value } = event.target;
  //   this.setState({ value });
  // };

  // let submit = e => {
  //   if (item === null || !quantity || quantity === 0) {
  //     return alert("Selecione o item e/ou digite a quantidade")
  //   } else {
  //     let data = {
  //       id: 'item.id',
  //       name: item.name,
  //       price: item.price,
  //       quantity: quantity,
  //       total: total()
  //     };
  //     addItemToList(data);
  //     setItem(null);
  //     setQuantity(1);
  //     e.preventDefault();
  //     setLoadingItem(true)
  //   }
  // };



  let [searchTerm, setSearchTerm] = useState('secador')
  const KEYS_TO_FILTERS = ['name']
  // const filteredEmails = items.filter(createFilter(searchTerm, KEYS_TO_FILTERS))


  if (!loadingItem) {
    return (
      <ItemForm onSubmit={e => submit(e)}>
        
{/* 
    
        <SearchInput onChange={(e) => setSearchTerm(e)} />


        {filteredEmails.map(email => {
          return (
            <div >
                {email.name}
            </div>
          )
        })}
     


        <div>
     
     
      </div>


        <h3> {item ? item.price + " R$" : "0,00 R$"} </h3>

        <InputQuantity value={quantity} onChange={e => onChangeQuantity(e)} />

        <h3> {total()},00 R$ </h3>
        <Button type="submit">
          <OK />
        </Button> */}
        
      </ItemForm>
    );
  } else {
    return <ItemForm></ItemForm>
  }
}
