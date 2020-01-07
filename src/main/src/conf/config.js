import React, {useContext, useState} from 'react'


export default function config() {


    
    return (
      <div>
        My User Info:
        <br />
        <br />
        <label>
          Nome:
        </label>
        <br />
        <label>CPF: </label>
        <br />
        <label>Cell:</label>
        <br />
        <br />
        Tema:
        <select
          
        >
          <option value="day">Dia</option>
          <option value="night">Noite</option>
        </select>
        <br />
        Navigation Position:
        <select
       >
          <option value="left">Left</option>
          <option value="right">Right</option>
          <option value="top">Top</option>
          <option value="buttom">Buttom</option>
        </select>
        <br />
        Navigation:
        <select>
          <option value="left">Normal</option>
          <option value="right">Inverse</option>
        </select>


        valor minimo por parcela: 

        p*n*r/100

        juros? 
        <select>
          <option value="simple">Simples</option>
          <option value="compound">Composto</option>
        </select>

        % <input/>

        2x - amount (40r$ por parcela)
        3x - 120r$ (40r$ por parcela)
        6x - 240r$ (42r$ por parcela)

        <select>
          <option value="left">Normal</option>
          <option value="right">Inverse</option>
        </select>



      </div>
    );
}
