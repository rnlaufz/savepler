import {CALL_ADD, CALL_LEND, HIDE_FORM} from './types';

export const showAddForm = () => dispatch => {
    dispatch({
        type: CALL_ADD,
        payload: "add"
    })
}
export const showLendForm = () => dispatch => {
    dispatch({
        type: CALL_LEND,
        payload: "lend"
    })
}
export const hideForms = () => dispatch => {
    dispatch({
        type: HIDE_FORM,
        payload: "hide"
    })
}