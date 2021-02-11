import React from 'react';
import Moment from 'react-moment'
;
 const HistoryItem = ({record: {action, amount, currency, date}}) => {
    return (
        <li className="history-item"><p className="pos-flex-split"><span className="sign">{action === 'add' ? "+" : "-"}</span> <span className="sum">{amount} <span>&#8381;</span></span><span className="date"><Moment format="YYYY.MM.DD" date={date} /></span></p></li>
    )
}


export default HistoryItem;