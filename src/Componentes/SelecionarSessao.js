import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';



export default function SelecionarSecao(){
    const[sessao, setSessao] = useState([]);
    const {idFilme} = useParams();
    const[filme, setFilme] = useState({});

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);

        promise.then(resposta => {
            setSessao(resposta.data.days);
            setFilme(resposta.data);
        });
    }, []);
    return (
        <Funçao>
            <p>Selecione o horário</p>
            <ListaSessoes>
                {sessao.map(sessao => 
                <Sessoes>
                    <p>{sessao.weekday} - {sessao.date}</p>
                     {sessao.showtimes.map(horario => 
                     <div>
                        <Link to ={`/assentos/${horario.id}`}style={{ textDecoration: 'none'}} >
                            {horario.name}
                        </Link></div>)}
                </Sessoes>)}
                <Rodape>
                    <img src ={filme.posterURL} alt = {filme.title}/>
                    <p>{filme.title}</p>
                </Rodape>
            </ListaSessoes>
        
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

const ListaSessoes = styled.div `
    width: 375px;
    display:flex;
    align-items: center;
    justify-content: initial;
    flex-wrap: wrap;  
`;

const Sessoes = styled.div `
    display:flex;
    flex-direction: column;
    align-items: initial;
    justify-content: center;
    height: 209px;
    border-radius: 3px;
    background-color: #FFFFFF;
    margin-bottom: 70px;
    p{
        font-size: 20px;
    }
    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 82px;
        height: 43px;
        background-color: #E8833A;
        border-radius: 3px;
        margin-bottom: 5px;
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