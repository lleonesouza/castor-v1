import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import { getCachePath } from '../../../../redux/actions/excel'

let FirstDiv = styled.div({
  background: "rgba(0,0,0,1)",
  color: "white",
  width: "100%",
  height: "100vh",
  fontSize: "calc(10px + 2vmin)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
});

export default function main() {

  let [path, setPath] = useState(null)

  useEffect(() => {
      if(path === null) getCachePath('cache').then(res => setPath(res))
  })
  
  const onChange = (e) => {
    getCachePath(e.target.files[0].path).then(res => setPath(res))
  }

  console.log(path)

  return <FirstDiv>
    <h2>Caminho da tabela de Produtos: </h2>

    {path ? path : null}

    <p>Selecione um novo caminho:</p>

    <input onChange={(e) => onChange(e)} type="file"/>

  </FirstDiv>;
}
