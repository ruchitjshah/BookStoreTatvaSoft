import { CreateUserModel, LoginModel } from "../models/AuthModel";
import UserModel from "../models/UserModel";
import API from "./request";

class AuthService {
    ENDPOINT = 'api/public';

    public async login(data: LoginModel): Promise<UserModel> {
        const url = `${this.ENDPOINT}/login`;
        return API.post(url, data).then((res) => {
            console.log("login",res);
            
            return res.data as UserModel;
        });
    }

    public async create(model: CreateUserModel): Promise<CreateUserModel> {
        const url = `${this.ENDPOINT}/register`;
        return API.post<CreateUserModel>(url, model).then((res) => {
            return res.data;
        });
    }
}
export default new AuthService();