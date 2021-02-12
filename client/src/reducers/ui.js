import {CALL_ADD, CALL_LEND, HIDE_FORM} from '../actions/types';

const initialState = {
    formAction: ""
};

export default function(state=initialState, action){
    switch(action.type){
        case CALL_ADD: 
            return {
                ...state,
                formAction: action.payload
            };
        case CALL_LEND: 
            return {
                ...state,
                formAction: action.payload
            };
        case HIDE_FORM: 
            return {
                ...state,
                formAction: action.payload
            };
        default: 
            return state;    
    }
}