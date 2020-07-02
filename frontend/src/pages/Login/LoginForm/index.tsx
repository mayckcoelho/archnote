import React, { useRef } from "react";
import { SubmitHandler, FormHandles } from '@unform/core';
import * as Yup from "yup";

import { useAuth } from "../../../contexts/auth";

import { Form, TextInput, SubmitButton } from "./styles"
import ISignInRequest from "../../../shared/interfaces/ISignInRequest"

interface IDictionary {
    [index: string]: string;
}

const LoginForm: React.FC = () => {
    const { signIn } = useAuth();

    const formRef = useRef<FormHandles | null>(null);

    const handleSubmit: SubmitHandler<ISignInRequest> = async (data, { reset }) => {
        try {
            const schema = Yup.object().shape({
                email: Yup.string().email("Informe um e-mail válido").required("E-mail obrigatório"),
                password: Yup.string().min(6, "Informe ao menos 6 caractéres").required("Senha obrigatória"),
            });

            await schema.validate(data, {
                abortEarly: false
            });

            signIn(data);
        } catch (err) {
            const validationErrors = {} as IDictionary;
            if (err instanceof Yup.ValidationError) {
                err.inner.forEach(error => {
                    validationErrors[error.path] = error.message;
                });
                formRef.current?.setErrors(validationErrors);
            }
        }
    }

    return (
        <Form ref={formRef} onSubmit={handleSubmit}>
            <TextInput name="email" label="E-mail" type="email" placeholder="Informe seu e-mail" />
            <TextInput name="password" label="Senha" type="password" placeholder="Informe sua senha" />

            <SubmitButton type="submit">Entrar</SubmitButton>
        </Form>
    )
}

export default LoginForm;