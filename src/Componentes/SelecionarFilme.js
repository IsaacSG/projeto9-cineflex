import {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Filmes(){
    const[filmes, setFilmes] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        promise.then(resposta => {
            setFilmes(resposta.data);
        });
    }, []);


    return (
        <Funçao>
            <p>Selecione o filme</p>
            <ListaFilmes>
                {filmes.map(filme =>
                <Link to={`/sessoes/${filme.id}`}>
                    <Filme>
                        <img src ={filme.posterURL} alt = {filme.title}/>
                    </Filme>
                    </Link>)}
            </ListaFilmes>
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

const ListaFilmes = styled.div `
    width: 375px;
    display:flex;
    align-items: center;
    justify-content:center;
    flex-wrap: wrap;  
`;

const Filme = styled.div `
    display:flex;
    align-items: center;
    justify-content: center;
    width: 145px;
    height: 209px;
    border-radius: 3px;
    background-color: #FFFFFF;
    img{
        width: 129px;
        height: 193px;
    }
`;