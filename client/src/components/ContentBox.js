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

 const ContentBox = (props)  => {
    
    //  const [goalState, updateState] = useState({
    //      callAdd: false,
    //      callLend: false
    //  })
    return (
        <div id="content-box" className='pos-flex'>
           {props.children}
       
        </div>
    )
}



export default ContentBox