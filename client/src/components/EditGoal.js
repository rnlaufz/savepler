import React, {Fragment, useEffect, useState} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import propTypes from 'prop-types';

import Loader from '../components/Loader'

import {getGoal, editGoal} from '../actions/goal';

 const EditGoal = ({getGoal, goal:{uGoal}, editGoal}) =>  {
     const currGoal = uGoal[0]
    const [formData, setFormData] = useState({
        _id: '',
        goal: '',
        sum: 0,
        edited: false
     }) 
     useEffect(() => {
         if(!currGoal) getGoal();
        if(currGoal){ 
            const goalData = {...formData, _id: currGoal._id};
            for(const key in goalData) {
                if(key in goalData) goalData[key] = currGoal[key]
                if(key in formData) formData[key] = currGoal[key]
            }  
            setFormData(currGoal._id ? {...formData, _id: currGoal._id} : false)
        }
     }, []);
  
     const {_id, goal, sum, edited } = formData;
     const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});
 


    const onSubmit = e => {
        e.preventDefault()
        setFormData({...formData, sum: Number.parseInt(e.target.value)})
        const sendData = formData;
       editGoal(formData, goal, _id ? true && sendData : false);
       setFormData({...formData, edited: !edited})
    }
  
    return (
        <Fragment>
            {!edited ? (currGoal === undefined || currGoal === null ?(<Loader />) :
        <Fragment>
           <div className="goal-form pos-flex">
            <h2 className="title-l">Manage goal</h2>
            <p>Edit name, money amount or the currency</p>
            <form onSubmit={onSubmit}>
            <div className='inputs'>
            <div>
                <input className="form-control" type="text" placeholder="Goal Name" name="goal" value={goal} onChange={onChange} />
            </div>
            <div>
                <input className="form-control" type="number" placeholder="Reqired sum" name="sum" value={sum} onChange={onChange} />
            </div>
            <div>
                <input className="form-control" type="submit" value="Change Goal Data"/>
            </div>
            </div>
           
            
            </form>
        </div> 
        </Fragment>) : <Redirect to="/" />
        }
       </Fragment>
    )
}

EditGoal.propTypes = {
    goal: propTypes.object.isRequired,
    getGoal: propTypes.func.isRequired,
    editGoal: propTypes.func.isRequired,
}

const mapStateToProps = state => ({
    goal: state.goal,
    uGoal: state.goal.uGoal
})

export default connect(mapStateToProps, {getGoal, editGoal})(EditGoal);