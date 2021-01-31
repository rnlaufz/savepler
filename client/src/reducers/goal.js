import {ADD_GOAL, GET_GOAL, UPDATE_GOAL, DELETE_GOAL, GOAL_ERROR} from '../actions/types';

const initialState = []

export default function(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case ADD_GOAL:
            return {
                ...state
            };
        case GET_GOAL:
            return {
                ...state
            };
        case UPDATE_GOAL:
            return {
                ...state
            };
        case DELETE_GOAL:
            return {
                ...state
            };
        case GOAL_ERROR:
            return {
                ...state
            };

        default:
            return state;    
    }
}