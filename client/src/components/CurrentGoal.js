import React, {Fragment, useEffect} from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux';
import {getGoal} from '../actions/goal';


 const CurrentGoal = ({uGoal}) => {
   
    //  console.log(uGoal.length !==0 ? uGoal : "Not loaded")
    return (
        <Fragment>
        <div className="content-card-out curr-goal-card pos-flex">
            {/* Create redux action for getting the name of goal and the money */}
            <h2 className="title-l">{uGoal[0].goal}</h2>
            <div className="content-money-card curr-goal-sum">
                <span>{uGoal[0].sum} &#8381;</span>
            </div>
        </div>
        
        </Fragment>
    )
}

CurrentGoal.propTypes = {
getGoal: propTypes.func.isRequired,
uGoal: propTypes.array.isRequired,
}

const mapStateToProps = state => ({
    goal: state.goal,
    user: state.user,
    uGoal: state.goal.uGoal
})

export default connect(mapStateToProps,{getGoal})(CurrentGoal);