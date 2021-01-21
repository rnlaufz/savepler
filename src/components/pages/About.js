import React, {useState} from 'react';

// Import components
import PagesNav from './PagesNav';
import PagesFooter from './PagesFooter';


 const About = () => {
    const [compState, setCompState] = useState({

        // Links for authenticated user
        pageNavLinks: [
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
          
        ]

        // @TO_DO: add links for non authenticated user 
            
        } 
    );
    const {pageNavLinks} = compState;
    return (
        <div className="page-container">
           <PagesNav pageNavLinks={pageNavLinks} /> 
           <div className="about-content pos-flex ">
               <div className="about-info">
                   <h2>About Savepler</h2>
                   <p>Savepler is a simple money manager tool, whish provides it's users an ability to track their savings. It's simple to use: you set up your goal and the amount of money it demands and Savepler tracks your savings as steps for reaching your desires.
                   </p>
               </div>
               <div className="about-card"></div>
           </div>
           <PagesFooter />
        </div>
    )
}

export default About;