import React, {Fragment, useState} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import { goalAction, getGoal } from '../actions/goal';



const AddMoney = ({goalAction, getGoal}) => {
    // @TO_DO: write complete submit event
    const [formData, setFormData] = useState({
        red: false, 
        actionType: "add",
        sendSum: 0
    });

    const {red, actionType, sendSum} = formData;

    const onChange = (e) => {
        e.preventDefault()
        setFormData({...formData, sendSum: Number.parseInt(e.target.value)})
       
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        if(sendSum !== 0){
            setFormData({...formData, red: !red})  
        goalAction(actionType, sendSum);
    }  setFormData({...formData, red: !red})
  
    }
    return (
        <Fragment>
        {!red ? ( <div className='form-container'>
        <form onSubmit={onSubmit}> 
            <div className="pos-flex-split">
            <div>
                <input className="form-control" type="number" placeholder="Enter sum" onChange={onChange}/>
            </div>
            </div>
           
            <div>
                <input className="form-control" type="submit" value="Add"/>
            </div>
        </form>
    </div>) :  <Redirect to="/" />}
      </Fragment> 
    )
}

const mapStateToProps = state => ({
    goal: state.goal
})

export default connect(mapStateToProps, {goalAction, getGoal})(AddMoney);