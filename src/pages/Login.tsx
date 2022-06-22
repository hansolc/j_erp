import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { login } from '../apis';

const Container = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: 2rem;
    font-weight: bold;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

interface IForm {
    username: string;
    password: string;
}

// 에러 핸들링 추가하기 errors 사용
function Login(){
    const { register, handleSubmit, watch, resetField, formState: { errors } } = useForm<IForm>();
    const onSubmit = ({username, password}: IForm) => {
        
        // Add condition if password is incorrect
        // resetField("password");
    };

    return (
        <Container>
            <Title>로그인 페이지</Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("username", { required: "Username is Required"})}></input>
                <input {...register("password", { required: "Password is required"})} type="password"></input>
                <button>click</button>
            </Form>
        </Container>
    )
}

export default Login;