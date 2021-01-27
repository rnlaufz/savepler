import React, {Fragment, useState} from 'react';
import {Redirect} from 'react-router-dom';

const AddMoney = () => {
    // @TO_DO: write complete submit event
    const [formData, setFormData] = useState({
        done: false
    });

    const {done} = formData;

    const onSubmit = () => {
        setFormData({...formData, done: !done})
    }
    return (
        <Fragment>
        {done === true  ? (<Redirect to="/" />) : ( <div className='form-container'>
        <form onSubmit={onSubmit}> 
            <div className="pos-flex-split">
            <div>
                <input className="form-control" type="number" placeholder="Enter sum"/>
            </div>
            <div>
                <select className="form-control" name="currency" id="curr">
                    <option defaultChecked value="RUB">RUB</option>
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                </select>
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

export default AddMoney;