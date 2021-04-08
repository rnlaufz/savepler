import React, {Fragment, useEffect, useState} from 'react'
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';

import {getGoal} from '../actions/goal';

 const InfoCards = ({getGoal, goal:{uGoal}}) =>  {
   const [compState, changeCompState] = useState({
    showHolders: false
    })
    useEffect(() => {
        getGoal()
    }, []);
    const goalData = uGoal[0];
    const {showHolders} = compState;
    const toggleHolders = (e) => {
        e.preventDefault()
        changeCompState({showHolders: !showHolders})
    }
    return (
        <div className="info-cards pos-flex-split">
            <div className="info-card content-card-out pos-flex">
                <h4>Saved</h4>
                <div data-tip data-for="saved" className="content-money-card pos-flex">
                <span>{goalData ? goalData.added : 0} {goalData.currency === "RUB" ? <Fragment> &#8381;</Fragment> : goalData.currency === "EUR" ? <Fragment>&#8364;</Fragment> : goalData.currency === "USD" ? <Fragment>&#36;</Fragment> : null}</span>
                </div>
                <ReactTooltip id="saved" place="bottom" effect="solid" >
                   Amount of money you've saved.
                </ReactTooltip>
                {goalData.card === 0 && goalData.cash === 0 ? null : <button onClick={toggleHolders} id="saved-details"><FontAwesomeIcon icon={faAngleDown} /></button>}
               
            </div>
            {showHolders ?  
            <div className="holders content-card-out">
                <h2>Card: {goalData.card}</h2>
                <hr/>
                <h2>Cash: {goalData.cash}</h2>
            </div> : null}
           
            <div className="info-card content-card-out pos-flex">
                <h4>Left</h4>
                <div data-tip data-for="residue"  className="content-money-card pos-flex">
                <span>{goalData ? goalData.residue : 0} {goalData.currency === "RUB" ? <Fragment> &#8381;</Fragment> : goalData.currency === "EUR" ? <Fragment>&#8364;</Fragment> : goalData.currency === "USD" ? <Fragment>&#36;</Fragment> : null}</span>
                </div>
                <ReactTooltip id="residue" place="bottom" effect="solid">
                    Money left to save in order to reach goal.
                </ReactTooltip> 
            </div>
            <div className="info-card content-card-out pos-flex">
                <h4>Debt</h4>
                <div data-tip data-for="debt"  className="content-money-card pos-flex">
                <span>{goalData ? goalData.lended : 0} {goalData.currency === "RUB" ? <Fragment> &#8381;</Fragment> : goalData.currency === "EUR" ? <Fragment>&#8364;</Fragment> : goalData.currency === "USD" ? <Fragment>&#36;</Fragment> : null}</span>
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