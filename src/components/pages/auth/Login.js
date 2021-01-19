import React from 'react';
import {Link} from 'react-router-dom';

 const Login = () =>  {
    return (
        <div className="auth-form-container pos-flex">
        <div className="form-card">
            <h2>Savepler</h2>  
            <p>Money saving manager</p>
        <form>
            <br/>
            <br/>
              <input className="form-control" type="email" placeholder="Email Address"/>
              <br/>
              <input className="form-control" type="password" placeholder="Password"/>
              <br/>
             
              <input className="form-control" type="submit" value="Sign Up"/>    
          </form>
          <div className="links">
              <p>Don't have an account?</p>
              <Link to="/sign_in"> Sign Up Here!</Link>
          </div>
        </div>  
          
      </div>
    )
}

export default Login;
