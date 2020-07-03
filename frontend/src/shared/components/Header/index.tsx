import React from "react"
import { useAuth } from "../../../contexts/auth"

import {
    Container,
    UserDetail,
    ButtonLogOut
} from "./styles"

import SignOut from "../../../assets/signout.png"

const Header: React.FC = () => {

    const { signOut, user } = useAuth();

    return (
        <Container>
            <h1>ArchNote</h1>
            <UserDetail>
                <h1>{user?.name}</h1>
                <ButtonLogOut onClick={signOut}><img src={SignOut} alt="LogOut" /></ButtonLogOut>
            </UserDetail>
        </Container>
    )
}

export default Header;