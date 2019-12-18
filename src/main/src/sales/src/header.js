import React, { useState } from "react";
import Search from "react-search";
import { SearchWrapper, Button, ItemForm, InputQuantity } from "../css";
import OK from "../../../../medias/lotties/ok";


export default function Newitem({ list, items, addItemToList }) {
  let searchItems = itemsArray => {
    let items = [];
    itemsArray.map((item, index) => {
      items.push({
        id: index,
        value: item.name
      });
    });
    return items;
  };

  let [quantity, setQuantity] = useState(1);
  let [item, setItem] = useState(null);
  let [loadingItem, setLoadingItem] = useState(false);

  {loadingItem === true ? setTimeout(() => {
    setLoadingItem(false)
  }, 500) : null}
  
  let total = () => {
    if (item && quantity) {
      return item.price * quantity;
    } else return 0;
  };

  let onChangeQuantity = e => {
    if (item === null) {
      alert('Selecione um produto!')
    } else if (item.quantidade < e.target.value) {
      alert(`O estoque atual de ${item.nome} é de apenas ${item.quantidade} unidades, Desculpe!`)
    } else {
      setQuantity(e.target.value);
    }
  };

  let changeItem = selectedItem => {
    if (selectedItem[0]) {
      console.log(selectedItem[0])
      console.log(items[selectedItem[0].id])
      setItem(items[selectedItem[0].id]);
    }
  };

 

  let submit = e => {
    if (item === null || !quantity || quantity === 0) {
      return alert("Selecione o item e/ou digite a quantidade")
    } else {
      let data = {
        id: 'item.id',
        name: item.name,
        price: item.price,
        quantity: quantity,
        total: total()
      };
      addItemToList(data);
      setItem(null);
      setQuantity(1);
      e.preventDefault();
      setLoadingItem(true)
    }
  };

  if (!loadingItem) {
    return (
      <ItemForm onSubmit={e => submit(e)}>
        <SearchWrapper>
          <Search
            items={searchItems(items)}
            placeholder="Produto"
            maxSelected={1}
            multiple={true}
            onItemsChanged={item => changeItem(item)}
            getItemsAsync={items => console.log("items")}
            onKeyChange={re => console.log(re)}
          />
        </SearchWrapper>

        <h3> {item ? item.price + " R$" : "0,00 R$"} </h3>

        <InputQuantity value={quantity} onChange={e => onChangeQuantity(e)} />

        <h3> {total()},00 R$ </h3>
        <Button type="submit">
          <OK />
        </Button>
      </ItemForm>
    );
  } else {
    return <ItemForm></ItemForm>
  }
}
