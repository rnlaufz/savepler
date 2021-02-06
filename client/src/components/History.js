import { connect } from 'react-redux';
import React, {Fragment, useEffect} from 'react';
import {v4 as uuid} from 'uuid';

import { getAllRecords } from "../actions/history";
import HistoryItem from './HistoryItem';

 const History = ({getAllRecords, history:{allRecords}}) => {
    useEffect(() => {
        getAllRecords()
    }, [getAllRecords, allRecords])
    return (
        <Fragment>
        <div className="history-container pos-flex">
            <h2>Saving History:</h2>
            <ul className="history-list">
            {allRecords.map((record) => (<HistoryItem id={uuid()} key={uuid()} record={record} />))}
            </ul>
        </div>
       </Fragment>
    )
}

const mapStateToProps = state => ({
    history: state.history
})

export default connect(mapStateToProps, {getAllRecords})(History);