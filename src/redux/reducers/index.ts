import { combineReducers } from "redux";
import authReducer from "./authReducer";
import gitHubUserReducer from "./gitHubUserReducer";
import gitHubRepositoryReducer from "./gitHubRepositoryReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    gitUser: gitHubUserReducer,
    gitRepository: gitHubRepositoryReducer
})

export default rootReducer;