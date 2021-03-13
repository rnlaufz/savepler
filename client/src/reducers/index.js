import {combineReducers} from 'redux';

// Import reducers 
import user from './user'; 
import goal from './goal'; 
import history from './history'; 
import alert from './alert';



export default combineReducers({
    user,
    goal, 
    history,
    alert
});