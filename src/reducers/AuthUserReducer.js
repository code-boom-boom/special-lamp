import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGOUT_USER,
    SIGNUP_USER,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILURE,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAILURE
} from "../actions/types";

/**
 * Initial auth user
 */

const INIT_STAT = {
    user: localStorage.getItem("user_id"),
    loading: false
};

export default (state = INIT_STAT, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state };
        case LOGIN_USER_SUCCESS:
            return { ...state };
        case LOGIN_USER_FAILURE:
            return { ...state };
        case LOGOUT_USER:
            return { ...state };
        case LOGOUT_USER_SUCCESS:
            return { ...state };
        case LOGOUT_USER_FAILURE:
            return { ...state };
        case SIGNUP_USER:
            return { ...state };
        case SIGNUP_USER_SUCCESS:
            return { ...state };
        case SIGNUP_USER_FAILURE:
            return { ...state };
        default:
            return { ...state };
    }
}