import React from 'react'
import {Link} from 'react-router-dom';

 const CallButtons = () =>  {
    return (
        // Add toggle event to buttons so they might hide/show forms onClick
        <div className="call-buttons-container content-card-out pos-flex">
            <div className="line">
            <Link to="/add"  className="pos-flex-split"><span>&#43;</span></Link>
            </div>
            <div>
            <Link to="/lend"  className="pos-flex-split"><span>&minus;</span></Link >
            </div>
        </div>
    )
}


export default CallButtons;