import React, {Fragment, useState} from 'react';
import {Redirect} from 'react-router-dom';

const LendMoney = () => {
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
            <div>
                <input className="form-control input-fix" type="number" placeholder="Enter sum"/>
            </div>
            <div>
                <input className="form-control" type="submit" value="Lend"/>
            </div>
        </form>
    </div>)}
      </Fragment> 
    )
}

export default LendMoney;