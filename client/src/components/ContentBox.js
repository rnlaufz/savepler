import React, {Fragment, useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom'

import {getGoal} from '../actions/goal';


import CurrentGoal from './CurrentGoal';
import InfoCards from './InfoCards';
import LatestHistory from './LatestHistory';
import History from './History';
import NavBar from './NavBar';
import CallButtons from './CallButtons';
import AddMoney from './AddMoney';
import LendMoney from './LendMoney';

 const ContentBox = ({children, getGoal, goal:{uGoal}, ui:{formAction}})  => {
     useEffect(() => {
         getGoal()
     }, [uGoal]);
     const [goalState, updateState] = useState({
         callAdd: false,
         callLend: false
     })
    return (
        <div id="content-box" className='pos-flex'>
            <Route exact path="/" component = {(props) => 
            <Fragment>
                    {uGoal.length!==0 ? (
                    <Fragment> 
                        <CurrentGoal uGoal={uGoal} />
                        <InfoCards uGoal={uGoal} />
                        <CallButtons />
                        {formAction === "add" ? <AddMoney /> : null}
                        {formAction === "lend" ? <LendMoney /> : null}
                        <LatestHistory />
                     </Fragment> ): null}
                    
            </Fragment>
            } />
            <Route ecact path="/add" component = {(props) => 
            <Fragment>
                    <CurrentGoal uGoal={uGoal} />
                    <InfoCards uGoal={uGoal} />
                        {/* <CallButtons /> */}
                    <AddMoney />
                    <LatestHistory />       
            </Fragment>
            } />
            <Route exact path="/lend" component = {(props) => 
            <Fragment>
                    <Fragment> 
                        <CurrentGoal uGoal={uGoal} />
                        <InfoCards uGoal={uGoal} />
                        <CallButtons />
                        <LendMoney />
                        <LatestHistory />
                     </Fragment>
                    
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
    ui: state.ui

})

export default connect(mapStateToProps, {getGoal})(ContentBox)