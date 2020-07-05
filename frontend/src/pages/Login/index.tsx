import React from "react";
import { Container, Card, CardHeader, CardTitle, NewAccountTitle, NewAccountLink, Name } from "./styles";

import FormLogin from "./LoginForm";

const Login: React.FC = () => {

    return (
        <Container>
            <Name>ArchNote</Name>
            <Card>
                <CardHeader>
                    <CardTitle>Já possui uma conta?</CardTitle>
                </CardHeader>
                <FormLogin />
                <NewAccountTitle>Não tem uma conta ainda?</NewAccountTitle>
                <NewAccountLink href="/register">Crie uma conta</NewAccountLink>
            </Card>
        </Container>
    )
}

export default Login;