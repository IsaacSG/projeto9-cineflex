import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

export default function SelecionarAssento(){
    const [assento, setAssento] = useStates([]);
    const [idSessao] = useParams();
    const [filme, setFilme] = useState({});

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);

        promise.then(resposta => {
            setAssento(resposta.data.seats);
            setFilme(resposta.data);
        });
    }, []);
    
    return(

    );
}