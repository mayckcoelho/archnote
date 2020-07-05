import React, { useState, useEffect, useContext, createContext } from "react";
import * as auth from "../services/auth"
import api from "../services/api";
import { useAlert } from "react-alert";

import IUser from "../shared/interfaces/IUser";
import IAuthContextData from "../shared/interfaces/IAuthContextData";
import ISignInRequest from "../shared/interfaces/ISignInRequest";
import IRegisterRequest from "../shared/interfaces/IRegisterRequest";

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [loading, setLoading] = useState(true);

    const alert = useAlert();

    useEffect(() => {
        async function loadStoragedData() {
            const storagedUser = localStorage.getItem("@ANAuth:user");
            const storagedToken = localStorage.getItem("@ANAuth:token");

            if (storagedUser && storagedToken) {
                api.defaults.headers.Authorization = `Bearer ${storagedToken}`;

                setUser(JSON.parse(storagedUser))
            }

            setLoading(false);
        }

        loadStoragedData();
    }, [])

    const signIn = async (data: ISignInRequest) => {
        const response = await auth.signIn(data).catch(err => {
            alert.error(err.response.data.message)
        });
        if (response) {
            setUser(response.data.user);

            api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

            localStorage.setItem("@ANAuth:user", JSON.stringify(response.data.user))
            localStorage.setItem("@ANAuth:token", response.data.token)
        }
    }

    const register = async (data: IRegisterRequest) => {
        await auth.register(data).catch(err => {
            alert.error(err.response.data.message)
        });
    }

    const signOut = () => {
        localStorage.clear();
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, loading, signIn, register, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}