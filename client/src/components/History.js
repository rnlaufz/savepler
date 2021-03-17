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
        currentPage: 0,
        debug: ''
     })
     let {currentPage, debug} = compState
    useEffect(() => {
        getPages()
        getAllRecords(currentPage)

    }, [getPages, getAllRecords, currentPage]);

   const pageNum = pages - 1;
   const nextPage = () => {
   setCompState({
    currentPage: currentPage >= 0 && currentPage < pageNum ? currentPage+1 : 0,
    debug: currentPage >= 0 && currentPage < pageNum ? "proper condition fires" : "else condition fires"
   })
   getAllRecords(currentPage)
   }
   const prevPage = () => {
    setCompState({
        currentPage: currentPage === 0  ? Math.abs(pageNum) : currentPage-1,
        debug: currentPage >= 0 && currentPage < pageNum ? "proper condition fires" : "else condition fires"
    })
    getAllRecords(currentPage)
   }

   console.log(`Page: ${currentPage}, pageNum:${pageNum}, status: ${debug}`)
    return (
        <Fragment>
        <div className="history-container pos-flex">
            <h2>Saving History:</h2>
            {allRecords.length === 0 ?   <Loader /> : <Fragment>
            <ul className="history-list">
            {allRecords.map((record) => (<HistoryItem id={uuid()} key={uuid()} record={record} />))}
            </ul>
            <div className="history-nav-btns">
              
                <button onClick={prevPage} className="history-nav-btn">
                <FontAwesomeIcon icon={faChevronLeft}/>
                </button>
                <button onClick={nextPage} className="history-nav-btn">
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