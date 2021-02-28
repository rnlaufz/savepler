import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import propTypes from 'prop-types';

// Import fontawesome icons
import {faGithub, faInstagram, faGooglePlus, faVk} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Import components
import PagesNav from './PagesNav';
import PagesFooter from './PagesFooter';

// Import functions 
import {loadUser} from '../../actions/user';


 const Contact = ({loadUser, user: {isAuthenticated}}) => {
     useEffect(() => {
       loadUser()
     }, [loadUser, isAuthenticated])
    const [compState, setCompState] = useState({
        pageNavLinks: [
            {
                name: "Dashboard",
                path: '/'
            },
            {
                name: "About",
                path: '/about_app'
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
    const {pageNavLinks, guestNavLinks} = compState;
    return (
        <div className="page-container">
           <PagesNav pageNavLinks={isAuthenticated ? pageNavLinks : guestNavLinks} /> 
           <div className="contact-content pos-flex">
                <h2>Contact Me</h2>
                <br/>
                <p>Have any questions, suggestions or you have faced with some issue while using tha app?</p>
                <br/>
                <br/>
                <div className="pos-flex-split info-cards">
                <div className="info-card content-card-out pos-flex">
                <h4>Email</h4>
                <p><FontAwesomeIcon icon={faGooglePlus} /> rnloftz@gmail.com</p>
                <p>Regina Zaripova</p>
            </div>
                <div className="info-card content-card-out pos-flex">
                <h4>Social Media</h4>
                <ul>
                    <li><a href="https://github.com/rnlaufz"><FontAwesomeIcon icon={faGithub} /> rnlaufz</a></li>
                    <li><a href="https://www.instagram.com/loft_rn"><FontAwesomeIcon icon={faInstagram} /> @loft_rn</a></li>
                    <li><a href="https://vk.com/id219014064"><FontAwesomeIcon icon={faVk} /> Regina Zaripova</a></li>
                </ul>
            </div>
                </div>
           </div>
           <PagesFooter />
        </div>
    )
}

Contact.propTypes = {
    user: propTypes.object.isRequired,
    loadUser: propTypes.func.isRequired,
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, {loadUser})(Contact);