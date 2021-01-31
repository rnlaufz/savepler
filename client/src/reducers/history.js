import {GET_HISTORY} from '../actions/types';

const initialState = [];

export default function(state=initialState, action){
    const {type, payload} = action;

    switch(type){
        case GET_HISTORY:
            return{
                ...state
            };
         
        default:
            return state;    
    }
}