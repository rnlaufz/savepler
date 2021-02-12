import React, {Fragment, useEffect} from 'react';
import {connect} from 'react-redux';
import {v4 as uuid} from 'uuid';

import { getLatestRecords } from "../actions/history";
import HistoryItem from './HistoryItem';

 const LatestHistory = ({getLatestRecords, history:{recentRecords}}) => {
    //  The component shows five recent operations 
    // @TO_DO: UI move component to the left of the content box 
    useEffect(() => {
        getLatestRecords()
    }, [getLatestRecords, recentRecords])
    return (
       
        <div className="latest-history-container pos-flex">
            <h2>Latest Saving History:</h2>
            <ul>
               {recentRecords.map((record) => (<HistoryItem id={uuid()} key={uuid()} record={record} />))}
               
            </ul>
        </div>
 
    )
}

const mapStateToProps = state => ({
    history: state.history
})

export default connect(mapStateToProps, {getLatestRecords})(LatestHistory);