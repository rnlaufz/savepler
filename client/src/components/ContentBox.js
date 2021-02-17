import React, {Fragment, useEffect, useState} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {getGoal} from '../actions/goal';


 const ContentBox = ({children, goal: uGoal, getGoal})  => {
     const checkGoal = uGoal[0]
    console.log(uGoal.length)
    return (
        <Fragment>
            {
            !checkGoal
            ? 
            <Redirect to="set_goal" /> 
            :  
            <div id="content-box" className='pos-flex'>
                {children}
            </div>
        }
       </Fragment>
    )
}

const mapStateToProps = state => ({
    goal: state.goal,
    uGoal: state.goal.uGoal
})

export default connect(mapStateToProps, {getGoal})(ContentBox)