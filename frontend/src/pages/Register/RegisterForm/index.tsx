import React, { useRef } from "react";
import { SubmitHandler, FormHandles } from '@unform/core';
import * as Yup from "yup";

import { useHistory } from "react-router-dom";
import { useAuth } from "../../../contexts/auth";

import { Form, TextInput, SubmitButton } from "./styles"
import IRgisterRequest from "../../../shared/interfaces/IRegisterRequest"

interface IDictionary {
    [index: string]: string;
}

const LoginForm: React.FC = () => {
    const { register } = useAuth();

    const history = useHistory();
    const formRef = useRef<FormHandles | null>(null);

    const handleSubmit: SubmitHandler<IRgisterRequest> = async (data, { reset }) => {
        try {
            const schema = Yup.object().shape({
                name: Yup.string().required("Nome obrigatório"),
                email: Yup.string().email("Informe um e-mail válido").required("E-mail obrigatório"),
                password: Yup.string().min(6, "Informe ao menos 6 caractéres").required("Senha obrigatória"),
                confirm_password: Yup.string().required().test('passwords-match', 'Senhas não são iguais', function (value) {
                    return this.parent.password === value;
                }),
            });

            await schema.validate(data, {
                abortEarly: false
            });

            register(data);

            history.push("/");

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
            <TextInput name="name" label="Nome" placeholder="Informe seu nome" />
            <TextInput name="email" label="E-mail" type="email" placeholder="Informe seu e-mail" />
            <TextInput name="password" label="Senha" type="password" placeholder="Informe sua senha" />
            <TextInput name="confirm_password" label="Confirme sua Senha" type="password" placeholder="Confirme sua senha" />

            <SubmitButton type="submit">Entrar</SubmitButton>
        </Form>
    )
}

export default LoginForm;