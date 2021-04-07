import React, {Fragment} from 'react';
import Moment from 'react-moment';
import propTypes from 'prop-types';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCreditCard} from '@fortawesome/free-solid-svg-icons';
import {faMoneyBill} from '@fortawesome/free-solid-svg-icons';

 const HistoryItem = ({record: {action, amount, currency, date, form}}) => {
    return (
        <li className="history-item">
            <p className="pos-flex-split">
                <span className="sign">
                    {action === 'add' ? "+" : action === "lend" ? "-" : 
                <span className="history-action">{action}</span>}</span> 
                <span className="holder">{form === 'card' ? <FontAwesomeIcon icon={faCreditCard} /> : form === 'cash' ? <FontAwesomeIcon icon={faMoneyBill} /> : null}</span>
                <span className="sum">{action !== "add" && action !== "lend" ? null : amount} 
                <span>{action !== "add" && action !== "lend" ? null : currency === "RUB" ? 
                <Fragment> &#8381;</Fragment> : currency === "USD" ? 
                <Fragment> &#36;</Fragment> : currency === "EUR" ? 
                <Fragment> &#8364;</Fragment> : null}</span></span>
                <span className="date"><Moment format="YYYY.MM.DD" date={date} /></span>
                </p>
                </li>
    )
}

HistoryItem.propTypes = {
    record: propTypes.object.isRequired,
}

export default HistoryItem;