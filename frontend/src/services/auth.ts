import api from "./api";
import ISignInRequest from "../shared/interfaces/ISignInRequest";
import ISignInResponse from "../shared/interfaces/ISignInResponse";
import IRegisterRequest from "../shared/interfaces/IRegisterRequest"

export async function signIn(data: ISignInRequest): Promise<ISignInResponse> {
    return await api.post("/users/authenticate", data)
}

export async function register(data: IRegisterRequest): Promise<void> {
    return await api.post("/users/register", data)
}