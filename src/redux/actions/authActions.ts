import { LOGIN_USER } from "../types";
import * as interfaceAuthRedux from "../../interface/auth"


export const login = (): interfaceAuthRedux.authRequest => ({
    type: LOGIN_USER,
    payload: true
})