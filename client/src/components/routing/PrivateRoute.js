import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import propTypes from 'prop-types';


const PrivateRoute = ({component: Component, user: {isAuthenticated, loading}, ...rest}) => (
    <Route {...rest} render={ props => !isAuthenticated && !loading  ? (<Redirect to="/sign_in" />): (<Component {...props} />)} />
)
PrivateRoute.propTypes = {
      user: propTypes.object.isRequired
  }

  const mapStateToProps = state => ({
      user: state.user
  });
  
  export default connect(mapStateToProps)(PrivateRoute);