import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {deleteGoal} from '../../actions/goal';
import {deleteUser, updateEmail} from '../../actions/user';
import {removeRecords} from '../../actions/history';

 const Settings = ({goal:{uGoal}, deleteGoal, deleteUser, removeRecords, updateEmail})  => {
    const goal = uGoal[0];
   const [formData, setFormData] = useState({
         callForm: false,
         email: ''
     });

     const {callForm, email} = formData; 

     useEffect(() => {
         return email
     }, [email])

   

    const showForm = () => {setFormData({...formData, callForm: !callForm})};

    const onChange = (e) => {
        e.persist()
        setFormData({...formData, [e.target.name]: e.target.value}); 
        console.log(email)};

    const onSubmit = (e) => {
        e.preventDefault()
        const conf = window.confirm('Are you sure you want to change your email?')
        if(email !== '' && conf){
            updateEmail(email)
        }
        
    }
     
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
            {!callForm ? (<ul>
                <li><button onClick={showForm}>Change email</button></li>
                <li><button onClick={deleteData}>Delete data</button></li>
                <li><button onClick={deleteAccount}>Delete account</button></li>
            </ul>) : 
             <div className="form-card">
         <form onSubmit={onSubmit}>
             <br/>
             <br/>
               <input className="form-control" type="email" placeholder="New email Address" name="email" onChange={onChange}/>
               <br/>
               <input className="form-control" type="submit" value="Update email"/>    
           </form>
         </div>  
            }
        </div>
    )
}

const mapStateToProps = state => ({
    goal: state.goal,
    uGoal: state.goal.uGoal
})

export default connect(mapStateToProps, {deleteGoal, deleteUser, removeRecords, updateEmail})(Settings);
