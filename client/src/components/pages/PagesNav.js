import React from 'react';
import {Link} from 'react-router-dom';
import {v4 as uuid} from 'uuid';

const PagesNav = (props) => {
    return (
        <div className="page-nav pos-flex">
            <h2>Savepler</h2>
            <ul className="pos-flex">
               {props.pageNavLinks.map(link => (
                   <li key={uuid()}><Link to={link.path}>{link.name}</Link></li>
    ))}
            </ul>
        </div>
    )
}

export default PagesNav