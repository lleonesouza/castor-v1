import React, { useEffect } from "react";
import IconExcelUp from "../../../../medias/svg/iconExcelUp";
import { P, ExcelWrapper, Blocks } from "../css";
import Actions from "../../../../redux/actions/actionTypes";

export default function excelPaths({ dispatch, paths }) {
  let xlsPath = paths()[0];

  console.log("paths", xlsPath);

  let { createPath, updatePath, exportXls } = Actions;

  let filter = filterName => {
    path[0].title === filterName;
    return path[0];
  };

  let dispatcher = (type, props) => {
    if (props) {
      dispatch({ type: type, ...props });
    } else {
      dispatch({ type: type, ...props });
    }
  };

  return (
    <ExcelWrapper>
      <Blocks>
        <IconExcelUp />
      </Blocks>

      <Blocks>
        <P> Caminho Atual: {xlsPath.path ? 'path' : 'Vázio'} </P>
        <P>Backup: {xlsPath.lastUpdate ? 'lasUpdate' : 'Nulo'}</P>
      </Blocks>

      <Blocks>
        <button onClick={() => dispatcher(updatePath, { path: {...xlsPath} })}>
          Importar
        </button>


        <button onClick={() => dispatcher(exportXls)}>Exportar Nova</button>

        {xlsPath.path ? (
          <button onClick={() => dispatcher(updatesXls)}>
            Atualizar Planilha
          </button>
        ) : null}

      </Blocks>
    </ExcelWrapper>
  );
}
