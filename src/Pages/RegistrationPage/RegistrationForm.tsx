import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Form,Body,InputFeild } from './RegistrationFormStyle';

export default function RegistrationForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [regCred, setregCred] = useState();
    const navigate = useNavigate();
    console.log(regCred);
    const onSubmit = (data: any) => {
        setregCred(data);
        fetch('http://localhost:3000/credentials', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
        navigate('/');
    }
    return (
        <Body>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="username">User Name</label>
                <InputFeild id="username" {...register('username')} />
                <label htmlFor="password">Password</label>
                <InputFeild id="password" {...register('password', { required: true })} />
                <label htmlFor="fullname">Full name</label>
                <InputFeild id="fullname" {...register('fullname')} />
                <label htmlFor="email">Email</label>
                <InputFeild id="email" {...register('email')} />
                <label htmlFor="phonenumber">Phone Number</label>
                <InputFeild id="phonenumber" {...register('phonenumber')} />
                <label htmlFor="country">Country</label>
                <InputFeild id="country" {...register('country')} />
                <label htmlFor="address">Address</label>
                <InputFeild id="address" {...register('address')} />
                <label htmlFor="gender">Gender</label>
                <InputFeild id="gender" {...register('gender')} />
                <input type="submit" />
            </Form>

        </Body>
    )
}

