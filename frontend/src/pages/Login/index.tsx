import React from "react";
import { Container, Card, CardHeader, CardTitle, NewAccountTitle, NewAccountLink } from "./styles";

import FormLogin from "./LoginForm";

const Login: React.FC = () => {

    return (
        <Container>
            <Card>
                <CardHeader>
                    <CardTitle>Já possui uma conta?</CardTitle>
                </CardHeader>
                <FormLogin />
            </Card>
            <NewAccountTitle>Não tem uma conta ainda?</NewAccountTitle>
            <NewAccountLink href="/register">Crie uma conta</NewAccountLink>
        </Container>
    )
}

export default Login;