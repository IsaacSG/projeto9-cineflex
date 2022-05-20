import React from 'react';
import styled from 'styled-components';

export default function Header() {
    return (
        <Head>
            <h1>CINEFLEX</h1>
        </Head>
    );
}

const Head = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    height: 67px;
    background: #C3CFD9;
    h1{
        color: #E8833A;
        font-size: 34px;
    }
`;