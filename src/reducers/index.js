/**
 * App Reducers
 */
import { combineReducers } from "redux";
import settings from "./settings";
import authUserReducer from "./AuthUserReducer";
import sidebarReducer from "./SidebarReducer";
import ecommerceReducer from "./EcommerceReducer";

const reducers = combineReducers({
    settings,
    authUser: authUserReducer,
    sidebar: sidebarReducer,
    ecommerce: ecommerceReducer,
});

export default reducers;