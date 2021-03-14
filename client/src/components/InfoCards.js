import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import {getGoal} from '../actions/goal';

 const InfoCards = ({getGoal, goal:{uGoal}}) =>  {
    useEffect(() => {
        getGoal()
    }, []);
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

InfoCards.propTypes = {
    goal: propTypes.object.isRequired,
    getGoal: propTypes.func.isRequired,
}

const mapStateToProps = state =>  ({
    goal: state.goal,
    uGoal: state.goal.uGoal
})
export default connect(mapStateToProps, {getGoal})(InfoCards);