import React, {useState} from "react";
import { NavDiv, NavUl } from "../../../css/nav/navCSS";
import Clock from "../../utils/clock/clock";
import Option from "./options";
import IconExitLeft from '../../../medias/svg/iconExitLeft'
import IconExitRight from '../../../medias/svg/iconExitRight'
import IconCastor from "../../../medias/svg/iconCastor";

export default function nav({ navRoutes }) {

  return (
    <NavDiv >
      <NavUl >

        <IconCastor />

        {navigator.onLine ? (
            <h3 style={{ margin: '0', padding: '0', color: "green" }}>Online</h3>
          ) : (
            <h3 style={{ margin: '0', padding: '0', color: "red" }}>Offline</h3>
          )}

        {navRoutes.map((options, index) => (
          <Option key={index} options={options} />
        ))}

        <p>
          Leone de Souza
        </p>

             Sair 
       <IconExitLeft/>
      </NavUl>
    </NavDiv>
  );
}
