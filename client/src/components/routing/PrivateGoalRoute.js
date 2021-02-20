import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import propTypes from 'prop-types';


const PrivateGoalRoute = ({component: Component, user: {isAuthenticated, loading}, goal:{uGoal}, ...rest}) =>

(
    <Route {...rest} render={ props => isAuthenticated && !uGoal[0] ? (<Redirect to="/" />): (<Component {...props} />)} />
)
PrivateGoalRoute.propTypes = {
      user: propTypes.object.isRequired
  }

  const mapStateToProps = state => ({
      user: state.user,
      goal: state.goal
  });
  
  export default connect(mapStateToProps)(PrivateGoalRoute);