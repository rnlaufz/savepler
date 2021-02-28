import React, {Fragment, useEffect, useState} from 'react';
import {connect} from 'react-redux';
import propTypes from 'prop-types';

import {getGoal, editGoal} from '../actions/goal';

 const EditGoal = ({getGoal, goal:{uGoal}, editGoal}) =>  {
     const currGoal = uGoal[0]
    const [formData, setFormData] = useState({
        _id: '',
        goal: '',
        sum: 0,
        currency: '',
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
     }, [getGoal, uGoal]);
  
     const {_id, goal, sum, currency, edited } = formData;
    const onChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
        setFormData({...formData, sum: Number.parseInt(e.target.value)})
     
};
    const setSum = e => {
        setFormData({...formData, sum: Number.parseInt(e.target.value)})
     
};

    const onSubmit = e => {
        e.preventDefault()
        const sendData = formData;
       editGoal(formData, goal, _id ? true && sendData : false);
       setFormData({...formData, edited: !edited})
    }
  
    return (
        <Fragment>
            {!edited ?  <div className="goal-form pos-flex">
            <h2 className="title-l">Manage goal</h2>
            <p>Edit name, money amount or the currency</p>
            <form onSubmit={onSubmit}>
            <div className='inputs'>
            <div>
                <input className="form-control" type="text" placeholder="Goal Name" name="goal" value={goal} onChange={onChange} />
            </div>
            <div>
                <input className="form-control" type="number" placeholder="Reqired sum" name="sum" value={sum} onChange={setSum} />
            </div>
            <div>
                <select className="form-control" name="currency" id="curr" name="currency" value={currency} onChange={onChange} >
                    <option value="RUB">RUB</option>
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                </select>
            </div>
            <div>
                <input className="form-control" type="submit" value="Change Goal Data"/>
            </div>
            </div>
           
            
            </form>
        </div> : null}
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