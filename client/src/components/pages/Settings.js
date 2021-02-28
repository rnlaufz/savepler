import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import propTypes from 'prop-types';

import {deleteGoal} from '../../actions/goal';
import {deleteUser, updateEmail} from '../../actions/user';
import {removeRecords} from '../../actions/history';

 const Settings = ({goal:{uGoal}, deleteGoal, deleteUser, removeRecords, updateEmail})  => {
    const goal = uGoal[0];
   const [formData, setFormData] = useState({
         email: '',
         callForm: false,
        
     });

     const {callForm, email} = formData; 

     useEffect(() => {
         return email
     }, [email, uGoal])

   

    const showForm = () => {setFormData({...formData, callForm: !callForm})};

    const onChange = (e) => {
        e.persist()
        setFormData({...formData, [e.target.name]: e.target.value})};

    const onSubmit = (e) => {
        e.preventDefault()
        const conf = window.confirm('Are you sure you want to change your email?')
        const sendEmail = email
        if(sendEmail !== '' && conf){
            updateEmail(sendEmail)
        }  
    }
     
    const deleteData = () => {
        const conf = window.confirm('Are you sure you want to delete your goal data?')
        if(conf && goal._id){
            deleteGoal(goal._id)
            removeRecords()
        } 
    }

    const deleteAccount = () => {
        const conf = window.confirm('Are you sure you want to delete your account?')
       if(conf){ 
        deleteUser()
        removeRecords()}
    }
    return (
        <div className='settings-container pos-flex'>
            <h2>{callForm ? "Change Email" : "Settings"}</h2>
            {!callForm ? (<ul>
                <li><button onClick={showForm}>Change email</button></li>
                <li><button onClick={deleteData}>Delete data</button></li>
                <li><button onClick={deleteAccount}>Delete account</button></li>
            </ul>) : 
             <div className="form-card">
         <form onSubmit={onSubmit}>
               <input className="form-control" type="email" placeholder="New email Address" name="email" onChange={onChange}/>
               <br/>
               <input className="form-control" type="submit" value="Update email"/>    
           </form>
         </div>  
            }
        </div>
    )
}

Settings.propTypes = {
    goal: propTypes.object.isRequired,
    deleteGoal: propTypes.func.isRequired,
    deleteUser: propTypes.func.isRequired,
    removeRecords: propTypes.func.isRequired,
    updateEmail: propTypes.func.isRequired,
}

const mapStateToProps = state => ({
    goal: state.goal,
    uGoal: state.goal.uGoal
})

export default connect(mapStateToProps, {deleteGoal, deleteUser, removeRecords, updateEmail})(Settings);
