import { combineReducers } from "redux";
import authReducer from "./authReducer";
import gitHubUserReducer from "./gitHubUserReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    gitUser: gitHubUserReducer
})

export default rootReducer;