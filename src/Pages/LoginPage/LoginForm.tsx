import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Form, Body, InputFeild } from './LoginFormStyle';

export default function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loginCred, setLoginCred] = useState();
    const navigate = useNavigate();

    const onSubmit = (data: any) => {
        setLoginCred(data);
        console.log(data)
        fetch('http://localhost:3000/credentials')
            .then((res) => res.json())
            .then((resp) => {
                console.log(resp);
                if (Object.keys(resp).length === 0) {
                    console.log('Enter a valid username');
                } else {
                    const dataList = Object.values(resp); // Convert the response object into an array of values
                    // Iterate over the dataList array and access properties of each object
                    dataList.forEach((obj: any) => {
                        console.log(obj);
                        if (obj.username === data.username && obj.password === data.password) {
                            console.log('success login');
                            navigate('/home');
                        }
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <Body>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="username">User Name</label>
                <InputFeild id="username" {...register('username')} />
                <label htmlFor="password">Password</label>
                <InputFeild id="password" {...register('password')} />
                <input type='submit' />
                <button onClick={() => { navigate('/registration') }}>New Registration ?</button>
            </Form>

        </Body>
    )
}

