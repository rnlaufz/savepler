import React, {Fragment, useEffect} from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux';
import {getGoal} from '../actions/goal';


 const CurrentGoal = ({getGoal, goal:{uGoal}}) => {
    useEffect(() => {
        getGoal()
    }, []);
   const goalData = uGoal[0]
    return (
    <Fragment>
     { goalData ? (
        <div className="content-card-out curr-goal-card pos-flex">
            {/* Create redux action for getting the name of goal and the money */}
            <h2 className="title-l">{goalData.goal}</h2>
            <div className="content-money-card curr-goal-sum">
                <span>{goalData.sum} {goalData.currency === "RUB" ? <Fragment> &#8381;</Fragment> : goalData.currency === "EUR" ? <Fragment>&#8364;</Fragment> : goalData.currency === "USD" ? <Fragment>&#36;</Fragment> : null}</span>
            </div>
        </div>
        
      ) : null}
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