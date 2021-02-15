import {GET_HISTORY, GET_RECENT_HISTORY,  CLEAR_HISTORY, HISTORY_ERROR} from '../actions/types';

const initialState = {
    allRecords: [],
    recentRecords: [],
    loading: true 
};

export default function(state=initialState, action){
    const {type, payload} = action;

    switch(type){
        case GET_HISTORY:
            return{
                ...state,
                allRecords: payload,
                loading: false
            };
        case GET_RECENT_HISTORY:
            return{
                ...state,
                recentRecords: payload,
                loading: false
            };
        case CLEAR_HISTORY:
            return{
                ...state,
     
            };
        case HISTORY_ERROR:
            return{
                ...state,
            //   Tempo
            };
         
        default:
            return state;    
    }
}