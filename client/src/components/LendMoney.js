import React, {Fragment, useState} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import { goalAction, getGoal } from '../actions/goal';
import {hideForms} from '../actions/ui';

const LendMoney = ({hideForms, ui:{formAction}, goalAction, getGoal}) => {
    const [formData, setFormData] = useState({
        actionType: "lend",
        sendSum: 0,
        red: false,
    });

    const {actionType, sendSum, red} = formData;

    const onChange = (e) => {
        setFormData({...formData, sendSum: Number.parseInt(e.target.value)})
       
    }

    const onSubmit = async (e)  => { 
        e.preventDefault()
        setFormData({...formData, red: !red}) 
        goalAction(actionType, sendSum); 
        getGoal()
      
    
    
    }

    return (
        <Fragment>
      {!red ? ( <div className='form-container'>
        <form onSubmit={onSubmit}> 
            <div>
                <input className="form-control input-fix" type="number" placeholder="Enter sum" onChange={onChange} value={sendSum}/>
            </div>
            <div>
                <input className="form-control" type="submit" value="Lend"/>
            </div>
        </form>
    </div>) : <Redirect to="/" /> }
      </Fragment> 
    )
}

const mapStateToProps = state => ({
    ui: state.ui,
    goal: state.goal
})

export default connect(mapStateToProps, {hideForms, goalAction, getGoal})(LendMoney);