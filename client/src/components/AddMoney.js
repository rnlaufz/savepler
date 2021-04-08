import React, {Fragment, useState} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import { goalAction} from '../actions/goal';
import propTypes from 'prop-types';


const AddMoney = ({goalAction}) => {
    // @TO_DO: write complete submit event
    const [formData, setFormData] = useState({
        red: false, 
        actionType: "add",
        sendSum: 0,
        holder: 'noholder'
    });

    const {red, actionType, sendSum, holder} = formData;

    const onChange = (e) => {
        e.preventDefault()
        setFormData({...formData, sendSum: Number.parseInt(e.target.value)})
       
    }

    const setHolder = (e) => {
        setFormData({...formData, holder: e.target.value});
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        if(sendSum !== 0){
            setFormData({...formData, red: !red})  
        goalAction(actionType, sendSum, holder);
    }  setFormData({...formData, red: !red})
  
    }
    return (
        <Fragment>
        {!red ? ( <div className='form-container'>
        <form onSubmit={onSubmit}> 
            <div className="pos-flex-split">
            <div>
                <input className="form-control input-fix" type="number" placeholder="Enter sum" onChange={onChange}/>
            </div>
            </div>
            <div>
                <select className="form-control input-fix" onChange={setHolder}>
                    <option defaultChecked value="selectholder">Select holder</option>
                    <option value="cash">Cash</option>
                    <option value="card">Card</option>
                </select>    
            </div>
            <div>
                <input className="form-control" type="submit" value="Add"/>
            </div>
        </form>
    </div>) :  <Redirect to="/" />}
      </Fragment> 
    )
}

AddMoney.propTypes = {
    goalAction: propTypes.func.isRequired,
}

const mapStateToProps = state => ({
    goal: state.goal
})

export default connect(mapStateToProps, {goalAction})(AddMoney);