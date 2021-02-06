import {GET_HISTORY, GET_RECENT_HISTORY, HISTORY_ERROR} from './types';
import axios from 'axios';

export const getAllRecords = () =>  async dispatch => {
    try {
        const res = await axios.get('/api/histories');
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
        const res = await axios.get('/api/histories/me');
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