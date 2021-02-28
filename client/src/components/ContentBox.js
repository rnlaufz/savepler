import React, {Fragment, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import propTypes from 'prop-types';

import {getGoal} from '../actions/goal';



 const ContentBox = ({children, goal: {uGoal}, getGoal})  => {
     useEffect(() => {
        getGoal()
     }, [uGoal, getGoal])
     const goalData = uGoal[0];
    return (
        <Fragment>
           {goalData === undefined ? <Redirect to="/set_goal" /> : ( <div id="content-box" className='pos-flex'>
                {children}
            </div>)}
       </Fragment>
    )
}

ContentBox.propTypes = {
    goal: propTypes.object.isRequired,
    getGoal: propTypes.func.isRequired,
}

const mapStateToProps = state => ({
    goal: state.goal,
    uGoal: state.goal.uGoal
})

export default connect(mapStateToProps, {getGoal})(ContentBox)