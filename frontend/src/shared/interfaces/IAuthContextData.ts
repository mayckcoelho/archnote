import IUser from "./IUser";
import ISignInRequest from "./ISignInRequest";
import ISignInResponse from "./ISignInResponse";

interface IAuthContextData {
    signed: boolean;
    user: IUser | null;
    loading: boolean;
    signIn: (data: ISignInRequest) => Promise<void | ISignInResponse>;
    signOut(): void;
}

export default IAuthContextData;