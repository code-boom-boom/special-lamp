import { combineReducers } from "redux";

import authUserReducer from "./AuthUserReducer";

const reducers = combineReducers({
    authUser: authUserReducer,
});

export default reducers;