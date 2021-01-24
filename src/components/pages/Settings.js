import React from 'react';
import {Link} from 'react-router-dom';

 const Settings = ()  => {
    return (
        <div className='settings-container pos-flex'>
            <h2>Settings</h2>
            <ul>
                <li><Link to="#">Change email</Link></li>
                <li><Link to="#">Delete data</Link></li>
                <li><Link to="#">Delete account</Link></li>
            </ul>
        </div>
    )
}

export default Settings;
