import React, {Fragment, useState} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import { goalAction, getGoal } from '../actions/goal';
import propTypes from 'prop-types';

const LendMoney = ({goalAction, getGoal}) => {
    const [formData, setFormData] = useState({
        actionType: "lend",
        sendSum: 0,
        holder: "noholder",
        // red - is for checking if the goal was edited | if not and user submits, nothing happens and form hides 
        red: false,
    });

    const {actionType, sendSum, holder, red} = formData;

    const onChange = (e) => {
        setFormData({...formData, sendSum: Number.parseInt(e.target.value)})
       
    }

    const setHolder = (e) => {
        setFormData({...formData, holder: e.target.value});
    }


    const onSubmit = async (e)  => { 
        e.preventDefault()
      if(sendSum !== 0){  
        setFormData({...formData, red: !red}) 
        goalAction(actionType, sendSum, holder); 
        getGoal()
    }  setFormData({...formData, red: !red})
    }

    return (
        <Fragment>
      {!red ? ( <div className='form-container'>
        <form onSubmit={onSubmit}> 
            <div>
                <input className="form-control input-fix" type="number" placeholder="Enter sum" onChange={onChange}/>
            </div>
            <div>
                <select className="form-control input-fix" onChange={setHolder}>
                    <option defaultChecked value="noholder">Select holder</option>
                    <option value="cash">Cash</option>
                    <option value="card">Card</option>
                </select>    
            </div>
            <div>
                <input className="form-control" type="submit" value="Lend"/>
            </div>
        </form>
    </div>) : <Redirect to="/" /> }
      </Fragment> 
    )
}

LendMoney.propTypes = {
    goalAction: propTypes.func.isRequired,
    getGoal: propTypes.func.isRequired,
}

const mapStateToProps = state => ({
    goal: state.goal
})

export default connect(mapStateToProps, { goalAction, getGoal})(LendMoney);