import axios from 'axios';
import {ADD_GOAL, GET_GOAL, UPDATE_GOAL, DELETE_GOAL, GOAL_ERROR} from './types';

export const getGoal = () => async dispatch => {
    try {
        const res = await axios.get('/api/goals/me');
        dispatch ({
            type: GET_GOAL,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: GOAL_ERROR
        })
    }
}
export const goalAction = (action, sendSum) => async dispatch => {
    console.log(sendSum)
    try {
       const body = {sendSum}
        const res = await axios.post(`/api/goals/${action}`, body);
        dispatch ({
            type: UPDATE_GOAL,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: GOAL_ERROR
        })
    }
}