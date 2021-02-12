import React, {Fragment, useState} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import { goalAction, getGoal } from '../actions/goal';

import {hideForms} from '../actions/ui';

const AddMoney = ({hideForms, ui:{formAction}, goalAction, getGoal}) => {
    // @TO_DO: write complete submit event
    const [formData, setFormData] = useState({
        hide: '', 
        action: 'add',
        sendSum: 0
    });

    const {hide, action, sendSum} = formData;

    const onChange = (e) => {
        e.preventDefault()
        setFormData({...formData, sendSum: Number.parseInt(e.target.value)})
       
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setFormData({...formData, hide:formAction})
        goalAction(action, sendSum);
        getGoal()
    }
    return (
        <Fragment>
        {hide === "hide"  ? (null) : ( <div className='form-container'>
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
    </div>)}
      </Fragment> 
    )
}

const mapStateToProps = state => ({
    ui: state.ui
})

export default connect(mapStateToProps, {hideForms, goalAction, getGoal})(AddMoney);