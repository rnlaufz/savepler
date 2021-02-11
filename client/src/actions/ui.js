import {CALL_ADD, CALL_LEND} from './types';

export const showAddForm = () => dispatch => {
    dispatch({
        type: CALL_ADD,
        formAction: "add"
    })
}
export const showLendForm = () => dispatch => {
    dispatch({
        type: CALL_LEND,
        formAction: "lend"
    })
}