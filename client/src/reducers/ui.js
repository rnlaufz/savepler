import {CALL_ADD, CALL_LEND} from '../actions/types';

const initialState = {
    formAction: ""
};

export default function(state=initialState, action){
    switch(action.type){
        case CALL_ADD: 
            return {
                ...state,
                formAction: "add"
            };
        case CALL_LEND: 
            return {
                ...state,
                formAction: "lend"
            };
        default: 
            return state;    
    }
}