/**
 * App Reducers
 */
import { combineReducers } from "redux";
import settings from "./settings";
import authUserReducer from "./AuthUserReducer";

const reducers = combineReducers({
    settings,
    authUser: authUserReducer,
});

export default reducers;