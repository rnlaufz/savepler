import {REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT} from '../actions/types';

const initialState = []

export default function (state = initialState, action) {
    const {type, payload} = action;

    switch(type){
        case USER_LOADED: 
            return {
                ...state
            };
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:     
            return {
                ...state
            };
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case AUTH_ERROR:
        case LOGOUT:             
            return {
                ...state
            };

        default:
            return state;    
    }
}