import { GET_GIT_USER } from "../types";
import * as gitUser from "../../interface/gitUser"
import { Dispatch } from 'redux';
import { URL_GIT_USERS } from "../../utils/constants"

import axios from "axios";

export const getGitUserInformation = (): any => {
    return (dispatch: Dispatch<gitUser.getGitUserAction>) => (
        axios.get(`${URL_GIT_USERS}/MasomCunha`).then((response) => {

            const { data } = response;

            dispatch({
                type: GET_GIT_USER,
                payload: data
            })
        }).catch((error) => {
            console.log(error)
        })
    )
} 


