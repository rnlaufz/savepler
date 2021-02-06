import React, {Fragment, useEffect} from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom'

import {getGoal} from '../actions/goal';


import CurrentGoal from './CurrentGoal';
import InfoCards from './InfoCards';
import LatestHistory from './LatestHistory';
import History from './History';
import NavBar from './NavBar';

 const ContentBox = ({children, getGoal, goal:{uGoal}, })  => {
     useEffect(() => {
         getGoal()
     }, [uGoal, getGoal])
    return (
        <div id="content-box" className='pos-flex'>
            <Route exact path="/" component = {(props) => 
            <Fragment>
                    {uGoal.length!==0 ? (
                    <Fragment> 
                        <CurrentGoal uGoal={uGoal} />
                        <InfoCards uGoal={uGoal} />
                        <LatestHistory />
                     </Fragment> ): null}
                    
            </Fragment>
            } />
            <Route exact path="/history" component = {(props) => 
            <Fragment>
                <History />
             </Fragment>
            } />
       
        </div>
    )
}

const mapStateToProps = state => ({
    goal: state.goal,

})

export default connect(mapStateToProps, {getGoal})(ContentBox)