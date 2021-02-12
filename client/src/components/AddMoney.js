import React, {Fragment, useState} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {hideForms} from '../actions/ui';

const AddMoney = ({hideForms, ui:{formAction}}) => {
    // @TO_DO: write complete submit event
    const [formData, setFormData] = useState({
        hide: ''
    });

    const {hide} = formData;

    const onSubmit = () => {
        setFormData({...formData, hide:formAction})
    }
    return (
        <Fragment>
        {hide === "hide"  ? (null) : ( <div className='form-container'>
        <form onSubmit={onSubmit}> 
            <div className="pos-flex-split">
            <div>
                <input className="form-control" type="number" placeholder="Enter sum"/>
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

export default connect(mapStateToProps, {hideForms})(AddMoney);