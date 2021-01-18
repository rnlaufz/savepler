import React from 'react'
import {Link} from 'react-router-dom';

 const CallButtons = () =>  {
    return (
        // Add toggle event to buttons so they might hide/show forms onClick
        <div className="call-buttons-container content-card-out pos-flex">
            <div>
            <Link to="/add"  className="pos-flex-split"><p>Add</p> <span>&#43;</span></Link>
            </div>
           <hr/>
            <div>
            <Link to="/lend"  className="pos-flex-split"><p>Lend</p> <span>&minus;</span></Link>
            </div>
        </div>
    )
}

export default CallButtons;