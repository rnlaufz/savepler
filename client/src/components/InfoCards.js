import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

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
                <div data-tip data-for="saved" className="content-money-card pos-flex">
                <span>{goalData ? goalData.added : 0} &#8381;</span>
                </div>
                <ReactTooltip id="saved" place="bottom" effect="solid" >
                    Amount of money you've saved.
                </ReactTooltip> 
            </div>
            <div className="info-card content-card-out pos-flex">
                <h4>Left</h4>
                <div data-tip data-for="residue"  className="content-money-card pos-flex">
                <span>{goalData ? goalData.residue : 0} &#8381;</span>
                </div>
                <ReactTooltip id="residue" place="bottom" effect="solid">
                    Money left to save in order to reach goal.
                </ReactTooltip> 
            </div>
            <div className="info-card content-card-out pos-flex">
                <h4>Debt</h4>
                <div data-tip data-for="debt"  className="content-money-card pos-flex">
                <span>{goalData ? goalData.lended : 0} &#8381;</span>
                </div>
                <ReactTooltip id="debt" place="bottom" effect="solid" min-height="100px" min-width="50px">
                    Debt increases every time you lend, even if goal was reached.
                </ReactTooltip>      
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