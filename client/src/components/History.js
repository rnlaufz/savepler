import { connect } from 'react-redux';
import React, {Fragment, useEffect} from 'react';
import {v4 as uuid} from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons'

import { getAllRecords } from "../actions/history";
import HistoryItem from './HistoryItem';

 const History = ({getAllRecords, history:{allRecords}}) => {
    useEffect(() => {
        getAllRecords()
    }, [getAllRecords, allRecords]);
    const numRecords = allRecords.length;
    console.log(numRecords)
    return (
        <Fragment>
        <div className="history-container pos-flex">
            <h2>Saving History:</h2>
            <ul className="history-list">
            {allRecords.map((record) => (<HistoryItem id={uuid()} key={uuid()} record={record} />))}
            </ul>
            {numRecords > 16 ? ( <div className="history-nav-btns">
                <button className="history-nav-btn">
                    <FontAwesomeIcon icon={faChevronLeft}/>
                    <FontAwesomeIcon icon={faChevronLeft}/>
                </button>
                <button className="history-nav-btn">
                <FontAwesomeIcon icon={faChevronLeft}/>
                </button>
                <button className="history-nav-btn">
                <FontAwesomeIcon icon={faChevronRight}/>
                </button>
                <button className="history-nav-btn">
                <FontAwesomeIcon icon={faChevronRight}/>
                <FontAwesomeIcon icon={faChevronRight}/>
                </button>
            </div>) : null }
           
        </div>
       </Fragment>
    )
}

const mapStateToProps = state => ({
    history: state.history
})

export default connect(mapStateToProps, {getAllRecords})(History);