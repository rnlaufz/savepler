import React, {useEffect} from 'react'
import { connect } from 'react-redux';

import {getGoal} from '../actions/goal';

 const InfoCards = ({getGoal, goal:{uGoal}}) =>  {
    useEffect(() => {
        getGoal()
    }, [getGoal, uGoal]);
    const goalData = uGoal[0]
    return (
        <div className="info-cards pos-flex-split">
            <div className="info-card content-card-out pos-flex">
                <h4>Saved</h4>
                <div className="content-money-card pos-flex">
                <span>{goalData ? goalData.added : 0} &#8381;</span>
                </div>
            </div>
            <div className="info-card content-card-out pos-flex">
                <h4>Left</h4>
                <div className="content-money-card pos-flex">
                <span>{goalData ? goalData.residue : 0} &#8381;</span>
                </div>
              
            </div>
            <div className="info-card content-card-out pos-flex">
                <h4>Debt</h4>
                <div className="content-money-card pos-flex">
                <span>{goalData ? goalData.lended : 0} &#8381;</span>
                </div>
                
            </div>
        </div>
    )
}


const mapStateToProps = state =>  ({
    goal: state.goal,
    uGoal: state.goal.uGoal
})
export default connect(mapStateToProps, {getGoal})(InfoCards);