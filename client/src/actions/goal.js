import axios from 'axios';
import goal from '../reducers/goal';
import {ADD_GOAL, GET_GOAL, UPDATE_GOAL, DELETE_GOAL, GOAL_ERROR} from './types';

export const createGoal = (goalData) => async dispatch => {
    try{
        console.log(goalData)
       const res = await axios.post('/api/goals', goalData);
       dispatch({
           type: ADD_GOAL,
           payload: res.data
       })
    } catch (err) {
        dispatch({
            type: GOAL_ERROR
        })
    }
}

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
export const goalAction = (actionType, sendSum) => async dispatch => {
    const body = await {actionType, sendSum}
    try {
       
        const res = await axios.post(`/api/goals/update`, body);
        console.log(body)
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
export const editGoal = (goalData) => async dispatch => {
    try {
        const res = await axios.post(`/api/goals/me`, goalData);
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
export const deleteGoal = (id) => async dispatch => {
    try {
        const res = await axios.delete(`/api/goals/${id}`);
        dispatch ({
            type: DELETE_GOAL,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: GOAL_ERROR
        })
    }
}