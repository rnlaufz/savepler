import React, {Fragment} from 'react'

 const History = () => {
    //  The component shows all operations 
    // @TO_DO: UI move component to the left of the content box 
    return (
        <Fragment>
        <div className="history-container pos-flex">
            <h2>Saving History:</h2>
            <ul className="history-list">
                {/* Map state with records and render HistoryItem */}
                {/* Tempo Dummy Code */}
                <li className="history-item"><p className="pos-flex-split"><span className="sign">+{/* @TO_DO: Plus or minus depending on operatiion */}</span> <span className="sum">1000 <span>&#8381;</span></span><span className="date">1.01.21 {/* @TO_DO: date of operation */}</span></p></li>
                <li className="history-item"><p className="pos-flex-split"><span className="sign">+{/* @TO_DO: Plus or minus depending on operatiion */}</span> <span className="sum">100000 <span>&#8381;</span></span> <span className="date">1.01.21 {/* @TO_DO: date of operation */}</span></p></li>
                <li className="history-item"><p className="pos-flex-split"><span className="sign">+{/* @TO_DO: Plus or minus depending on operatiion */}</span> <span className="sum">100 <span>&#36;</span></span> <span className="date">1.01.21 {/* @TO_DO: date of operation */}</span></p></li>
                <li className="history-item"><p className="pos-flex-split"><span className="sign">-{/* @TO_DO: Plus or minus depending on operatiion */}</span> <span className="sum">10 <span>&euro;</span></span> <span className="date">1.01.21 {/* @TO_DO: date of operation */}</span></p></li>
                <li className="history-item"><p className="pos-flex-split"><span className="sign">{/* @TO_DO: Plus or minus depending on operatiion */}-</span><span className="sum">1000 <span>&#8381;</span></span> <span className="date">1.01.21 {/* @TO_DO: date of operation */}</span></p></li>
               
            </ul>
        </div>
       </Fragment>
    )
}

export default History;