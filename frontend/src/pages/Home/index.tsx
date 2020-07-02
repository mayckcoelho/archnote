import React from "react";
import { useAuth } from "../../contexts/auth";

const Home: React.FC = () => {
    const { signOut } = useAuth();
    return (
        <>
            <h1>Home</h1>
            <button onClick={signOut}>Logout</button>
        </>
    )
}

export default Home;