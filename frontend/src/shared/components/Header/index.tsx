import React from "react"
import { useAuth } from "../../../contexts/auth"

import {
    Container,
    UserDetail,
    ButtonLogOut
} from "./styles"

import SignOut from "../../../assets/signout.svg"

const Header: React.FC = () => {

    const { signOut, user } = useAuth();

    return (
        <Container>
            <h1>ArchNote</h1>
            <UserDetail>
                <h3>{user?.name}</h3>
                <ButtonLogOut onClick={signOut}><img src={SignOut} alt="LogOut" /></ButtonLogOut>
            </UserDetail>
        </Container>
    )
}

export default Header;