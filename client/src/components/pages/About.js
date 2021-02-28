import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

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
                name: "Dashboard",
                path: '/'
            },
            {
                name: "Contact",
                path: '/contact'
            },
            {
                name: "Settings",
                path: '/settings'
            }
          
        ],

        guestNavLinks: [
            {
                name: "Contact",
                path: '/contact'
            },
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
    return (
        <div className="page-container">
           <PagesNav pageNavLinks={isAuthenticated ? authNavLinks : guestNavLinks} /> 
           <div className="about-content pos-flex ">
               <div className="about-info">
                   <h2>About Savepler</h2>
                   <p>Savepler is a simple money manager tool, whish provides it's users an ability to track their savings. It's simple to use: you set up your goal and the amount of money it demands and Savepler tracks your savings as steps for reaching your desires.
                   </p>
               </div>
               <div className="about-card">
               </div>
           </div>
           <PagesFooter />
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, {loadUser})(About);