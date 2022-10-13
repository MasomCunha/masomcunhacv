import { GET_GIT_REPOSITORY } from "../types";
import * as gitRepository from "../../interface/gitRepository"

const initialState : gitRepository.gitRepositoryState = {
    gitRepository: []
}

const gitRepositoryReducer = (state = initialState, action: gitRepository.getGitRepositoryAction) => {
    switch(action.type){
        case GET_GIT_REPOSITORY: {
            
            let arrayRep = action.payload.reduce(function (previousValue: any/* gitRepository.gitRepository[] | [] */, currentValue) {
                previousValue.push({
                    html_url: currentValue.html_url
                })

                return previousValue
              }, []);


            return {
                ...state,
                gitRepository: arrayRep
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}


export default gitRepositoryReducer