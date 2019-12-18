import React from "react";
import ReactDOM from "react-dom";
import isElectron from 'is-electron';

// Components
import Main from "./main";

export default function App() {
  if(isElectron()){
    return (
      <Main /> 
    );
  }else{
    return <h1>you are not in desktop environment</h1>
  }
  
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
