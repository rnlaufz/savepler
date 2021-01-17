import React from 'react'
import {Link} from 'react-router-dom';

 const CallButtons = () =>  {
    return (
        <div className="call-buttons-container content-card-out pos-flex">
            <div>
            <Link  className="pos-flex-split"><p>Add</p> <span>&#43;</span></Link>
            </div>
           <hr/>
            <div>
            <Link  className="pos-flex-split"><p>Lend</p> <span>&minus;</span></Link>
            </div>
        </div>
    )
}

export default CallButtons;