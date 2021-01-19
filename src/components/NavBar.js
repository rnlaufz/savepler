import React from 'react';
import {Link} from 'react-router-dom';
import {v4 as uuid} from 'uuid';

// @TO_DO: create logout fubc

 const NavBar = ()  => {
    return (
        <div id="nav-box">
          <h2 className="title-sm">Name</h2>
          <div id="nav-list">
          <ul>
            <li key={uuid()}><Link to="/">Dashboard</Link></li>
            <li key={uuid()}><Link to="/my_goals">My Goals</Link></li>
            <li key={uuid()}><Link to="/history">Saving History</Link></li>
            {/* Logout link */}
            <li key={uuid()}><Link to="javascript:;">Logout</Link></li>
          </ul>
             </div>
         
          <div id="nav-footer">
            <ul id="nav-footer-list" className="pos-flex-split">
              <li key={uuid()}><Link>About</Link></li>
              <li key={uuid()}><Link>Contact</Link></li>
            </ul>
            <p>&copy;All Rights Reserved
              <br/>
              Build by /RZ</p>
          </div>
        </div>
    )
}

export default NavBar;