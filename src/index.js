import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./Styles/reset.css";

function Teste(){
    return(
        <>
            <App />
        </>
    );
}

ReactDOM.render(<Teste />, document.querySelector(".root"));