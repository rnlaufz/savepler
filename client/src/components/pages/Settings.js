import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {deleteGoal} from '../../actions/goal';
import {deleteUser} from '../../actions/user';
import {removeRecords} from '../../actions/history';

 const Settings = ({goal:{uGoal}, deleteGoal, deleteUser, removeRecords})  => {
    const goal = uGoal[0]; 
    const deleteData = () => {
        if(goal._id){
            deleteGoal(goal._id)
            removeRecords()
        } 
    }

    const deleteAccount = () => {
        deleteUser()
        removeRecords()
    }
    return (
        <div className='settings-container pos-flex'>
            <h2>Settings</h2>
            <ul>
                <li><Link to="#">Change email</Link></li>
                <li><button onClick={deleteData}>Delete data</button></li>
                <li><button onClick={deleteAccount}>Delete account</button></li>
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    goal: state.goal,
    uGoal: state.goal.uGoal
})

export default connect(mapStateToProps, {deleteGoal, deleteUser, removeRecords})(Settings);
