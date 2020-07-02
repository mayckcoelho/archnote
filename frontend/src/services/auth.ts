import api from "./api";
import ISignInRequest from "../shared/interfaces/ISignInRequest";
import ISignInResponse from "../shared/interfaces/ISignInResponse";

export async function signIn(data: ISignInRequest): Promise<ISignInResponse> {
    return await api.post("/users/authenticate", data)
}