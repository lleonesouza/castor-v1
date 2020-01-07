import styled from "@emotion/styled";

let ExcelWrapper = styled.div({
  border: "1px white solid",
  borderRadius: '100px',
  height: "40vh",
  width: "200px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  background: 'rgba(255, 255, 255, 0.2)',
});

let Blocks = styled.div({
  height: "20vh",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column"
});

let P = styled.p({
  margin: "0px",
  padding: "0px"
});

let Label = styled.label({

})

let Grid = styled.div({
  display: "grid",
  gridTemplateColumns: "100px 100px 2fr 1fr",
  gridTemplateRows: "1fr 1fr 1fr",
  height: "90%",
  width: "90%",
  margin: 0,
  padding: 0
});

let ModalDiv = styled.div({
  position: "absolute",
  top: "15vh",
  left: "20vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0px 0px 30px -1px rgba(0,0,0,0.8)",
  borderRadius: "20px",
  backgroundColor: "rgba(0,0,0,0.95)",
  color: "white",
  width: "60vw",
  height: "70vh",
  marign: "auto",
  zIndex: 2
});

export { P, Grid, ExcelWrapper, Blocks };
