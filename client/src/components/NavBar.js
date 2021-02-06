import React, {Fragment, useEffect} from 'react';
import { connect } from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {v4 as uuid} from 'uuid';
import propTypes from 'prop-types';
import { logout} from '../actions/user';

// @TO_DO: create logout func

 const NavBar = ({logout, user: {isAuthneticated, userData}})  => {
   useEffect(() => {

   }, [userData])
    return (
      <Fragment>
        <div className="nav-box">
        <h2>{ userData.name}</h2>
        <div className="nav-list">
        <ul>
          <li key={uuid()}><Link to="/">Dashboard</Link></li>
          <li key={uuid()}><Link to="/edit">Manage Goal</Link></li>
          <li key={uuid()}><Link to="/history">Saving History</Link></li>
          <li key={uuid()}><Link to="/settings">Settings</Link></li>
          {/* Logout link */}
          <li key={uuid()}><a onClick={logout}>Logout</a></li>
        </ul>
           </div>
       
        <div className="nav-footer">
          <ul className="pos-flex-split">
            <li key={uuid()}><Link to="/about_app">About</Link></li>
            <li key={uuid()}><Link to="/contact">Contact</Link></li>
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

}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, {logout})(NavBar);