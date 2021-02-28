import React, {Fragment} from 'react';
import Moment from 'react-moment';
 const HistoryItem = ({record: {action, amount, currency, date}}) => {
    return (
        <li className="history-item"><p className="pos-flex-split"><span className="sign">{action === 'add' ? "+" : action === "lend" ? "-" : action}</span> <span className="sum">{amount} <span>{currency === "RUB" ? <Fragment>&#8381;</Fragment>: currency === "USD" ? <Fragment>&#36;</Fragment> : currency === "EUR" ? <Fragment>&#8364;</Fragment> : null}</span></span><span className="date"><Moment format="YYYY.MM.DD" date={date} /></span></p></li>
    )
}


export default HistoryItem;