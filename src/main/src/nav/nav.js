import React, {useState} from "react";
import { NavDiv, NavUl } from "../../../css/nav/navCSS";
import Option from "./options";
import IconExitLeft from '../../../medias/svg/iconExitLeft'
import IconExitRight from '../../../medias/svg/iconExitRight'
import IconCastor from "../../../medias/svg/iconCastor";



export default function nav({ navRoutes }) {

  return (
    <NavDiv >
      <NavUl >
     

        {navRoutes.map((options, index) => (
          <Option key={index} options={options} />
        ))}

     

             Sair 
       <IconExitLeft/>
      </NavUl>
    </NavDiv>
  );
}
