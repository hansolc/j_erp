import React from 'react';
import styled from 'styled-components';

const Container = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Title = styled.h1`
    font-size: 2rem;
    font-weight: bold;
`


function Login(){
    return (
        <Container>
            <Title>로그인 페이지</Title>
        </Container>
    )
}

export default Login;