import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function Teste(){
    return(
        <>
            <App />
        </>
    );
}

ReactDOM.render(<Teste />, document.querySelector(".root"));