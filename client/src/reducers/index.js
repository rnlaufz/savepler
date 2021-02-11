import {combineReducers} from 'redux';

// Import reducers 
import user from './user'; 
import goal from './goal'; 
import history from './history'; 
import ui from './ui'; 


export default combineReducers({
    user,
    goal, 
    history, 
    ui
});