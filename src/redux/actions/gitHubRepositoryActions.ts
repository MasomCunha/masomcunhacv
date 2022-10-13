import { GET_GIT_REPOSITORY } from "../types";
import * as gitRepository from "../../interface/gitRepository"
import { Dispatch } from 'redux';


import axios from "axios";

export const getGitUserRepositories = (url: string): any => {
    return (dispatch: Dispatch<gitRepository.getGitRepositoryAction>) => (
        axios.get(url).then((response) => {

            const { data } = response;

            dispatch({
                type: GET_GIT_REPOSITORY,
                payload: data
            })
        }).catch((error) => {
            console.log(error)
        })
    )
} 


