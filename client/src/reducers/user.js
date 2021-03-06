import {REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, UPDATE_USER, UPDATE_FAIL, DELETE_USER} from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loading: true,
    userData: {},
    error: {}
}

export default function (state = initialState, action) {
    const {type, payload} = action;

    switch(type){
        case USER_LOADED: 
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                userData: payload
            };
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS: 
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            };
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case AUTH_ERROR:
        case LOGOUT:
        case DELETE_USER:    
            localStorage.removeItem('token');            
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            };

        case UPDATE_USER:
            return{
                ...state,
                userData: payload,
                token: null,
                isAuthenticated: false,
                loading: false
            };
        
        case UPDATE_FAIL: 
        return{
            ...state,
            error: payload,
            loading: false
        }    

        default:
            return state;    
    }
}