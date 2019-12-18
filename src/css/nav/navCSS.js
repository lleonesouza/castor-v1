import styled from "@emotion/styled";

let NavDiv = styled.div(props => ({
  ...props.theme.nav.navDiv,
  background: props.theme.colors.three,
  color: props.theme.colors.four,
  transition: "1s all",
  borderRadius: props.theme.nav.borderRadius
}));

let NavUl = styled.ul(props => ({
  display: "flex",
  transition: "1s all",
  ...props.theme.nav.ul,
  height: "100%",
  width: "100%",
  margin: "auto",
  padding: 0,
  boxShadow: `${props.theme.nav.boxShadow} ${props.theme.colors.four}`
}));

let NavLi = styled.li(props => ({
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  minWidth: "80px",
  width: "8vw",
  border: `3px ${props.theme.colors.four} solid`,
  color: props.theme.colors.four,
  cursor: "pointer",
  borderRadius: "10px",
  margin: "2px",
  ":hover, :focus": {
    background: "#282c345b"
  }
}));

let FirstDiv = styled.div(props => ({
  transition: "1s all",
  ...props.theme.nav.firstDiv,
  background: `${props.theme.colors.two}`,
  color: `${props.theme.colors.one}`,
  position: "absolute",
  fontSize: "calc(10px + 2vmin)",
  padding: "0",
  margin: "0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "-1",
}));

let LogoIcon = styled.svg(props => ({
    position: 'relative',
  
}));

export { NavDiv, NavUl, NavLi, FirstDiv, LogoIcon };
