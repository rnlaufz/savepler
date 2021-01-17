import React, {Fragment} from 'react'

 const CurrentGoal = () => {
    return (
        <Fragment>
        <div className="content-card-out curr-goal-card pos-flex">
            {/* Create redux action for getting the name of goal and the money */}
            <h2 className="title-l">Move to another city</h2>
            <div className="content-money-card curr-goal-sum">
                <span>250 000 &#8381;</span>
            </div>
        </div>
        
        </Fragment>
    )
}


export default CurrentGoal;