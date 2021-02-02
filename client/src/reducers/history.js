import {GET_HISTORY} from '../actions/types';

const initialState = {
    records: [],
    loading: true 
};

export default function(state=initialState, action){
    const {type, payload} = action;

    switch(type){
        case GET_HISTORY:
            return{
                ...state,
                records: payload,
                loading: false
            };
         
        default:
            return state;    
    }
}