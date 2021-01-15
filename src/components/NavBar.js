import React from 'react';
import {Link} from 'react-router-dom';
import {v4 as uuid} from 'uuid';

// @TO_DO: add 'to' attr to Links

 const NavBar = ()  => {
    return (
        <div id="nav-box">
          <h2 className="title-sm">Name</h2>
          <ul id="nav-list">
            <li key={uuid()}><Link>Goals</Link></li>
            <li key={uuid()}><Link>Saving History</Link></li>
            <li key={uuid()}><Link>Statictics</Link></li>
          </ul>
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