import {GET_PAGES, GET_HISTORY, GET_RECENT_HISTORY, CLEAR_HISTORY, HISTORY_ERROR} from './types';
import axios from 'axios';

export const getPages = () => async dispatch => {
    try {

        const res = await axios.get('/api/histories');
        dispatch({
            type: GET_PAGES,
            payload: res.data
        })

    } catch(err){
        dispatch({
            type: HISTORY_ERROR
        })
    }
}

export const getAllRecords = (page) =>  async dispatch => {
    try {
        const res = await axios.get(`/api/histories/${page}`);
        dispatch({
            type: GET_HISTORY,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: HISTORY_ERROR
        })
    }
}
export const getLatestRecords = () =>  async dispatch => {
    try {
        const res = await axios.get('/api/histories/latest/records');
        dispatch({
            type: GET_RECENT_HISTORY,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: HISTORY_ERROR
        })
    }
}

// Delete all history records if: goal or user were deleted or the current goal was completed
export const removeRecords = () =>  async dispatch => {
    try {
        const res = await axios.delete('/api/histories/me');
        dispatch({
            type: CLEAR_HISTORY,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: HISTORY_ERROR
        })
    }
}