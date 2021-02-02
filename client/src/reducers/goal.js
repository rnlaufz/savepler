import {ADD_GOAL, GET_GOAL, UPDATE_GOAL, DELETE_GOAL, GOAL_ERROR} from '../actions/types';

const initialState = {
    goal: null,
    loading: true,
    error: {}
}

export default function(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case ADD_GOAL:
        case GET_GOAL:
        case UPDATE_GOAL:        
            return {
                ...state,
                goal: payload,
                loading: false

            };
        case DELETE_GOAL:
            return {
                ...state
            };
        case GOAL_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };

        default:
            return state;    
    }
}