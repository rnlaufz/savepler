import React from 'react';
import {Link} from 'react-router-dom';
import {v4 as uuid} from 'uuid';



export default function MediaFooter() {
    return (
        <div className="nav-footer media">
        <ul className="pos-flex-split">
          <li key={uuid()}><Link to="/about_app">About</Link></li>
          <li key={uuid()}><Link to="/contact">Contact</Link></li>
        </ul>
        <p>2021&copy;All Rights Reserved
          <br/>
          Build by /RZ</p>
      </div>
    )
}


