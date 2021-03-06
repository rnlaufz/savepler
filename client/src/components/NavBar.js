import React, {Fragment, useEffect} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {v4 as uuid} from 'uuid';
import propTypes from 'prop-types';
import { logout} from '../actions/user';


 const NavBar = ({logout, user: {userData}})  => {
  useEffect(() => {}, [userData,])
 

    return (
      <Fragment>
        <div className="nav-box">
        <h2>{userData.name}</h2>
        <div className="nav-list">
        <ul>
          <li key={uuid()}><Link to="/">Home</Link></li>
          <li key={uuid()}><Link to="/edit">Edit</Link></li>
          <li key={uuid()}><Link to="/history">History</Link></li>
          <li key={uuid()}><Link to="/settings">Settings</Link></li>
          {/* Logout link */}
          <li key={uuid()}><a onClick={logout}>Logout</a></li>
        </ul>
           </div>
       
        <div className="nav-footer">
          <ul className="pos-flex-split">
            <li key={uuid()}><Link to="/about_app">About</Link></li>
          </ul>
          <p>2021&copy;All Rights Reserved
            <br/>
            Build by /RZ</p>
        </div>
      </div>
        
        
        </Fragment>
    )
}

NavBar.propTypes = {
  logout: propTypes.func.isRequired,
  user: propTypes.object.isRequired,
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, {logout})(NavBar);