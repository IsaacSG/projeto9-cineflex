import React from "react";
import Header from "./Componentes/Header";
import SelecionarFilme from "./Componentes/SelecionarFilme";
import SelecionarSecao from "./Componentes/SelecionarSessao";
import SelecionarAssento from "./Componentes/SelecionarAssento";
import Sucesso from "./Componentes/Sucesso";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App(){
    return(
        <BrowserRouter>

            <Header />
            <Routes>
                <Route path="/" element = {<SelecionarFilme />} />
                <Route path="/sessoes/:idFilme" element = {<SelecionarSecao/>} />
                <Route path="/assentos/:idSessao" element = {<SelecionarAssento/>} />
                <Route path="/sucesso" element = {<Sucesso/>} />
            </Routes>
        </BrowserRouter>
    );
}