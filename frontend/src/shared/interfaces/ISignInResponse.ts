import IUser from "./IUser";

interface ISignInResponse {
    data: {
        token: string;
        user: IUser;
    }
}

export default ISignInResponse;