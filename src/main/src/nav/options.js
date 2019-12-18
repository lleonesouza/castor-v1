import React from 'react'
import { Link } from "react-router-dom";
import { NavLi } from "../../../css/nav/navCSS";

export default function options({options}) {
  
  let {url, title, Icon} = options
    return (
    <Link
      style={{
        height: "100%",
        textDecoration: "none",
        display: "flex",
        flexDirection: "column"
      }}
      to={url}
    >
      <NavLi>
        <Icon /> {title}
      </NavLi>
    </Link>
  );
}
