import React, {useState, useContext, Fragment} from "react";
import {InputDiscount, Close, Pa, PaymentDiv, Button, Footer } from "../css";
import Submit from "../../../../medias/lotties/ok";
import {Context} from '../../../../redux/contexts'
import Cash from "../../../../medias/lotties/cash";
import Debit from "../../../../medias/lotties/debit";
import Credit from "../../../../medias/lotties/credit";
import DailogCash from "./dialogCashInput"

export default function footer({totalItems}) {

  let {postTransaction} =  useContext(Context).actions
  let [payment , setPayment] = useState(null)
  let [openCash, setOpenCash ] = useState (false)

  let updatePayment = (value, type) => {

    if(value === "cash"){
      setOpenCash(true)

      let paymentMethod = {
        paymentMethod: type,
        value: ''
      }

      let start = (paymentMethod, value) => {

      }


    }


    setPayment({
      ...payment,
      [type]: value
    })
  }

  let submitPayment = ({paymentMethod, discount}) => {
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

  return (
    <Footer onSubmit={() => submitPayment(payment)}>

      <div>
        <select onChange={(e) => updatePayment(e.target.value, 'paymentMethod')}>
          <option value='credit'>Crédito</option>
          <option value='debit'>Débito</option>
          <option value='cash'>Dinheiro</option>
        </select>
      </div>

      {openCash ? (
        <Fragment>
          <Close onClick={() => setOpenCash(false)} />
          <DailogCash setOpenCash={setOpenCash} />
        </Fragment>
      ) : null}

      <Pa>
        Valor: <br /> {totalItems},00 R$
      </Pa>

      <Pa>
        Desconto: <br />
        <InputDiscount
          type="number"
          onChange={e => updatePayment(e.target.value, 'discount')}
          value={'discount'}
        />
      </Pa>


      {/* <Pa>
        Total: <br /> {totalItems - discount},00 R$
      </Pa> */}

    
      <Button type="submit" submit>
        <Submit /> Finalizar
      </Button>

    </Footer>
  );
}
