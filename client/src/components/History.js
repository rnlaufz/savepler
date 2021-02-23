import { connect } from 'react-redux';
import React, {Fragment, useEffect, useState} from 'react';
import {v4 as uuid} from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons'

import { getAllRecords, getPages } from "../actions/history";
import HistoryItem from './HistoryItem';

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
//    const nextPage = () => {
//     if(currentPage > pageNum){
//         setCompState({currentPage: 0})
//        }
//     if(currentPage >= 0 && currentPage <= pageNum){
//         setCompState({currentPage: currentPage > pageNum ? 0 : currentPage-1})
//         if(numRecords >= 15 && currentPage > 0 && currentPage <= pageNum){
//             getAllRecords(currentPage)
//         }
//        }
//    }
//    const prevPage = () => {
//        if(currentPage > pageNum){
//         setCompState({currentPage: 0})
//        }
//        if(currentPage >= 0 && currentPage <= pageNum){
//         setCompState({currentPage: currentPage > pageNum ? 0 : currentPage+1})
//         if(numRecords >= 15 && currentPage > 0 && currentPage <= pageNum){
//             getAllRecords(currentPage)
//         }
//        }
//    }
   const nextPage = () => {
   setCompState({
       currentPage: numRecords >= 15 && currentPage === 0 && currentPage <= pageNum ? currentPage-1 : 0 
   })
   getAllRecords(currentPage)
   }
   const prevPage = () => {
    setCompState({
        currentPage: numRecords >= 15 && currentPage === 0 && currentPage <= pageNum ? currentPage+1 : 0 
    })
    getAllRecords(currentPage)
   }
   console.log(currentPage)
   console.log(pageNum)
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
    history: state.history,
    pages: state.pages
})

export default connect(mapStateToProps, {getAllRecords, getPages})(History);