import {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

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
            <Filmes>
                
                {filmes.map(filme => 
                    <Filme>
                        <img src ={filme.posterURL} alt = {filme.title}/>
                    </Filme>)}
            </Filmes>
        </Funçao>
    );
}

const Funçao = styled.div`
    display:flex;
    align-items: center;
    justify-content:center;
    width: 374px;
    height: 110px;
    p{
        font-size: 24px;
        color: #293845;
    }
`;

const Filme = styled.div `
    display:flex;
    align-items: center;
    justify-content: center;
    width: 145px;
    height: 209px;
    border-radius: 3px;
    img{
        width: 129px;
        height: 193px;
    }
`;