import React, {useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import propTypes from 'prop-types';
import {connect} from 'react-redux'; 

import {register} from '../../../actions/user';
import {setAlert} from '../../../actions/alert';

import Alert from '../../Alert';


 const Register = ({register, isAuthenticated, setAlert}) => {
    const [formData, setFormData] = useState({
        name: "",
        email:  "",
        password: "",
        passwordTwo: ""  
    });

    const {name, email, password, passwordTwo} = formData;

   const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = async e => {
        e.preventDefault();

        if(password !== passwordTwo){ 
            setAlert("Passwords do not match", 'danger')
        } else {
         register({name, email, password});
       
        }
    }
    
    // Redirect after registration 
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
                <input className="form-control" type="text" placeholder="Name" name="name" onChange={onChange}/>
                <br/>
                <input className="form-control" type="email" placeholder="Email Address" name="email" onChange={onChange}/>
                <br/>
                <input className="form-control" type="password" placeholder="Password" name="password" onChange={onChange}/>
                <br/>
                <input className="form-control" type="password" placeholder="Confirm Password" name="passwordTwo" onChange={onChange}/>
                <br/>
                <input className="form-control" type="submit" value="Sign Up"/>    
            </form>
            <div className="links">
                <p>Already have an account?</p>
                <Link to="/sign_in"> Sign In Here!</Link>
            </div>
          </div>  
            
        </div>
    )
}

Register.propTypes = {
    setAlert: propTypes.func.isRequired,
    register: propTypes.func.isRequired,
    isAuthenticated: propTypes.bool
}

 const mapStateToProps = state => ({
    isAuthenticated: state.user.isAuthenticated
 })

export default connect(mapStateToProps, {register, setAlert})(Register);