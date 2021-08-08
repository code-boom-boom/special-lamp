/**
 * App Reducers
 */
import { combineReducers } from "redux";
import settings from "./settings";
import authUserReducer from "./AuthUserReducer";
import sidebarReducer from "./SidebarReducer";

const reducers = combineReducers({
    settings,
    authUser: authUserReducer,
    sidebar: sidebarReducer
});

export default reducers;