import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {v4 as uuid} from 'uuid';
import propTypes from 'prop-types';

import { getLatestRecords } from "../actions/history";
import HistoryItem from './HistoryItem';

 const LatestHistory = ({getLatestRecords, history:{recentRecords}}) => {
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

LatestHistory.propTypes = {
    history: propTypes.object.isRequired,
    getLatestRecords: propTypes.func.isRequired,
}

const mapStateToProps = state => ({
    history: state.history
})

export default connect(mapStateToProps, {getLatestRecords})(LatestHistory);