import { connect } from 'react-redux';
import React, {Fragment, useEffect, useState} from 'react';
import {v4 as uuid} from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons'

import { getAllRecords } from "../actions/history";
import HistoryItem from './HistoryItem';

 const History = ({getAllRecords, history:{allRecords}}) => {
    const [compState, setCompState] = useState({
        currentPage: 0
     })

     let {currentPage} = compState
    useEffect(() => {
        getAllRecords(currentPage)
    }, [getAllRecords, allRecords]);
   const numRecords = allRecords.length;
   const nextPage = () => {
    setCompState({currentPage: currentPage-1})
    if(numRecords >= 14){getAllRecords(currentPage)}
   }
   const prevPage = () => {
    setCompState({currentPage: currentPage+1})
    if(numRecords >= 14){getAllRecords(currentPage)}

   }
    return (
        <Fragment>
        <div className="history-container pos-flex">
            <h2>Saving History:</h2>
            <ul className="history-list">
            {allRecords.map((record) => (<HistoryItem id={uuid()} key={uuid()} record={record} />))}
            </ul>
            <div className="history-nav-btns">
              
                <button onClick={nextPage} className="history-nav-btn">
                <FontAwesomeIcon icon={faChevronLeft}/>
                </button>
                <button onClick={prevPage} className="history-nav-btn">
                <FontAwesomeIcon icon={faChevronRight}/>
                </button>
              
            </div>
           
        </div>
       </Fragment>
    )
}

const mapStateToProps = state => ({
    history: state.history
})

export default connect(mapStateToProps, {getAllRecords})(History);