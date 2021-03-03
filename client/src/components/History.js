import { connect } from 'react-redux';
import React, {Fragment, useEffect, useState} from 'react';
import {v4 as uuid} from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import propTypes from 'prop-types';

import { getAllRecords, getPages } from "../actions/history";

import HistoryItem from './HistoryItem';
import Loader from '../components/Loader';

 const History = ({getAllRecords, history:{allRecords, pages}, getPages}) => {
    const [compState, setCompState] = useState({
        currentPage: 0
     })
     let {currentPage} = compState
    useEffect(() => {
        getPages()
        getAllRecords(currentPage)

    }, [getAllRecords, allRecords, getPages]);
   const numRecords = allRecords.length;
   const pageNum = pages - 1;
   console.log(allRecords)
   const nextPage = () => {
   setCompState({
       currentPage: currentPage === 0 && currentPage <= pageNum ? currentPage-1 : 0 
   })
   getAllRecords(currentPage)
   }
   const prevPage = () => {
    setCompState({
        currentPage: currentPage === 0 && currentPage <= pageNum ? currentPage+1 : 0 
    })
    getAllRecords(currentPage)
   }
    return (
        <Fragment>
        <div className="history-container pos-flex">
            <h2>Saving History:</h2>
            {allRecords.length === 0 ?   <Loader /> : <Fragment>
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
           </Fragment>}
           
        </div>
       </Fragment>
    )
}

History.propTypes = {
    history: propTypes.object.isRequired,
    getAllRecords: propTypes.func.isRequired,
    getPages: propTypes.func.isRequired,
}

const mapStateToProps = state => ({
    history: state.history,
    pages: state.pages
})

export default connect(mapStateToProps, {getAllRecords, getPages})(History);