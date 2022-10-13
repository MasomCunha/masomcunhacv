import { GET_GIT_USER } from "../types";
import * as gitUser from "../../interface/gitUser"

const initialState : gitUser.gitUserState = {
    gitUser: null
}

const authReducer = (state = initialState, action: gitUser.getGitUserAction) => {
    switch(action.type){
        case GET_GIT_USER: {
            return {
                ...state,
                gitUser: {
                    login: action.payload.login,
                    avatar_url: action.payload.avatar_url,
                    html_url: action.payload.html_url,
                    repos_url: action.payload.repos_url
                }
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}


export default authReducer