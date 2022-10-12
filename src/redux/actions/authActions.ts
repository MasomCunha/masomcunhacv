import { LOGIN_USER } from "../types";
import * as interfaceAuthRedux from "../../interface/auth"


export const login = ( arg : boolean): interfaceAuthRedux.authRequest => ({
    type: LOGIN_USER,
    payload: arg
})