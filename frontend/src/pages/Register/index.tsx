import React from "react";
import { Container, Card, CardHeader, CardTitle, AccountTitle, AccountLink, Name } from "./styles";

import RegisterForm from "./RegisterForm";

const Login: React.FC = () => {

    return (
        <Container>
            <Name>ArchNote</Name>
            <Card>
                <CardHeader>
                    <CardTitle>Não tem uma conta ainda?</CardTitle>
                </CardHeader>
                <RegisterForm />
                <AccountTitle>Já possui uma conta?</AccountTitle>
                <AccountLink href="/">Faça o login</AccountLink>
            </Card>
        </Container>
    )
}

export default Login;