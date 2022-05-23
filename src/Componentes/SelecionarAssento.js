import {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

export default function SelecionarAssento(props){
    const [assento, setAssento] = useState([]);
    const {idSessao} = useParams();
    const [filme, setFilme] = useState({});

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);

        promise.then(resposta => {
            setAssento(resposta.data.seats);
            setFilme(resposta.data);
        });
    }, []);
    console.log(assento);
    return(
        <Funçao>
            <p>Selecione o(s) assento(s)</p>
            <Assentos>
                {assento.map(item => 
                
                    <div>{item.name}</div>)}
            </Assentos>
            <Inputs>
                <p>Nome do comprador:</p>
                <input placeholder='Digite seu nome...'/>
                <p>CPF do comprador:</p>
                <input placeholder='Digite seu CPF' />
            </Inputs>
            <Reserva>
                <Link to="/sucesso"style={{ textDecoration: 'none'}}>
                    <div>Reservar assento(s)</div>
                </Link>
            </Reserva>
            <Rodape>
                <img src ={filme.movie.posterURL} alt = {filme.movie.title}/>
                <p>{filme.movie.title}</p>
                <p>{filme.day.weekday}
                {filme.name}</p>
            </Rodape>
            
        
        </Funçao>

    );
}

const Funçao = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    height: 110px;
    margin-top: 68px;
    p{
        font-size: 24px;
        color: #293845;
    }
`;

const Assentos = styled.div`
    margin-top: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 375px;
    div{
        margin-left: 10px;
        margin-bottom: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 25px;
        height: 25px;
        border-radius: 17px;
        background-color: #C3CFD9;

    }
`;

const Rodape = styled.div`
    position: fixed;
    bottom:0;
    display:flex;
    align-items: center;
    justify-content: center;
    width: 375px;
    height: 117px;
    border-radius: 3px;
    border-color: #9EADBA;
    background-color: #DFE6ED;
    img{
        width: 48px;
        height: 72px;
    }
    p{
        font-size: 22px;
    }
`;

const Reserva = styled.div`
    height: 42px;
    width: 225px;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #E8833A;
`;

const Inputs = styled.div`
    input{
        height: 51px;
        width: 327px;
    }
`;