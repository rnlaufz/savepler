import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';


// Import components
import PagesNav from './PagesNav';
import PagesFooter from './PagesFooter';

// Import functions
import {loadUser} from '../../actions/user';


 const About = ({loadUser, user:{isAuthenticated}}) => {
     useEffect(() => {
         loadUser()
     }, [loadUser, isAuthenticated])
    const [compState, setCompState] = useState({

        // Links for authenticated user
        authNavLinks: [
            {
                name: "",
                path: '/'
            },
    
            {
                name: "Settings",
                path: '/settings'
            }
          
        ],

        guestNavLinks: [
          
            {
                name: "Sign In",
                path: '/sign_in'
            }, 
            {
                name: "Sign Up",
                path: '/sign_up'
            } 
        ]        
        } 
    );
    const {authNavLinks, guestNavLinks} = compState;
    // @TO_DO: redo page UI
    return (
        <div className="page-container">
           <PagesNav pageNavLinks={isAuthenticated ? authNavLinks : guestNavLinks} /> 
           <div className="about-content">
               <div>
               <h2>Money saving manager</h2>
               <p>Savepler is a simple tool for tracking savings needed for particular goal.</p>
               <Link to="sign_up">Get started!</Link>
               </div>
           </div>
           <PagesFooter />   
        </div>
    )
}

About.propTypes = {
    user: propTypes.object.isRequired,
    loadUser: propTypes.func.isRequired,
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, {loadUser})(About);