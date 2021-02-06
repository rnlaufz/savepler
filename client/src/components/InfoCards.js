import React, {useEffect} from 'react'
import { connect } from 'react-redux';

import {getGoal} from '../actions/goal';

 const InfoCards = ({uGoal}) =>  {
  
    return (
        <div className="info-cards pos-flex-split">
            <div className="info-card content-card-out pos-flex">
                <h4>Saved</h4>
                <div className="content-money-card pos-flex">
                <span>{uGoal[0].added} &#8381;</span>
                </div>
            </div>
            <div className="info-card content-card-out pos-flex">
                <h4>Left</h4>
                <div className="content-money-card pos-flex">
                <span>{uGoal[0].residue} &#8381;</span>
                </div>
              
            </div>
            <div className="info-card content-card-out pos-flex">
                <h4>Debt</h4>
                <div className="content-money-card pos-flex">
                <span>{uGoal[0].lended} &#8381;</span>
                </div>
                
            </div>
        </div>
    )
}


const mapStateToProps = state =>  ({
    goal: state.goal
})
export default connect(mapStateToProps, {getGoal})(InfoCards);