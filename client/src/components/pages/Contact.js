import React, {useState} from 'react';
import {Link} from 'react-router-dom';

// Import components
import PagesNav from './PagesNav';
import PagesFooter from './PagesFooter';

 const Contact = () => {
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
          
        ]
            
        } 
    );
    const {pageNavLinks} = compState;
    return (
        <div className="page-container">
           <PagesNav pageNavLinks={pageNavLinks} /> 
           <div className="contact-content pos-flex">
                <h2>Contact Me</h2>
                <br/>
                <p>Have any questions, suggestions or you have faced with some issue while using tha app?</p>
                <br/>
                <br/>
                <div className="pos-flex-split info-cards">
                <div className="info-card content-card-out pos-flex">
                <h4>Email</h4>
                <p>rnloftz@gmail.com</p>
                <p>Regina Zaripova</p>
            </div>
                <div className="info-card content-card-out pos-flex">
                <h4>Social Media</h4>
                <ul>
                    <li><Link to="https://github.com/rnlaufz">GitHub: rnlaufz</Link></li>
                    <li><Link to="https://www.instagram.com/loft_rn">Instagram: @loft_rn</Link></li>
                    <li><Link to="https://vk.com/id219014064">VK: Regina Zaripova</Link></li>
                </ul>
            </div>
                </div>
           </div>
           <PagesFooter />
        </div>
    )
}

export default Contact;