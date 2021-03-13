import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import propTypes from 'prop-types';

import {login} from '../../../actions/user';

import Alert from '../../Alert';

 const Login = ({login, isAuthenticated}) =>  {
  const [formData, setFormData] = useState({
    email:  "",
    password: "",
  });

const {email, password} = formData;

const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});


const onSubmit = async e => {
    e.preventDefault();
     login(email, password)
}

// Redirect if logged in
if(isAuthenticated){
    return <Redirect to="/" />
}
    return (
        <div className="auth-form-container pos-flex">
          <Alert />
        <div className="form-card">
            <h2>Savepler</h2>  
            <p>Money saving manager</p>
        <form onSubmit={onSubmit}>
            <br/>
            <br/>
              <input className="form-control" type="email" placeholder="Email Address" name="email" onChange={onChange}/>
              <br/>
              <input className="form-control" type="password" placeholder="Password" name="password" onChange={onChange}/>
              <br/>
             
              <input className="form-control" type="submit" value="Sign In"/>    
          </form>
          <div className="links">
              <p>Don't have an account?</p>
              <Link to="/sign_up"> Sign Up Here!</Link>
          </div>
        </div>  
          
      </div>
    )
}

Login.propTypes = {
  login: propTypes.func.isRequired,
  isAuthenticated: propTypes.bool,
}

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated
})

export default connect(mapStateToProps, {login})(Login);
