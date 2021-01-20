import React, {useState} from 'react';

// Import components
import PagesNav from './PagesNav';
import PagesFooter from './PagesFooter';


 const About = () => {
    const [compState, setCompState] = useState({
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
            
        } 
    );
    const {pageNavLinks} = compState;
    return (
        <div className="page-container">
           <PagesNav pageNavLinks={pageNavLinks} /> 
           <PagesFooter />
        </div>
    )
}

export default About;