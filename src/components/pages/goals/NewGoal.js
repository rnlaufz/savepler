import React, {useState} from 'react'

// Import components
import PagesNav from '../../pages/PagesNav';
import PagesFooter from '../../pages/PagesFooter';

 const NewGoal = () =>  {
    const [compState, setCompState] = useState({

        // Links for authenticated user
        pageNavLinks: [
            {
                name: "About",
                path: '/about_app'
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
        <div className="page-container pos-flex">
            <PagesNav pageNavLinks={pageNavLinks} /> 
             <div className="new-goal-form">
            <div className="goal-card">
            <h1 className="title-l">Let's get started!</h1>
            <h2 className="title-sm">Create a new goal</h2>
            <p>Give your goal a name, set the amount of money and the currency you prefer</p>
            <form>
            <div className="inputs">
            <div>
                <input className="form-control" type="text" placeholder="Goal Name"/>
            </div>
            <div>
                <input className="form-control" type="number" placeholder="Reqired sum"/>
            </div>
            <div>
                <select className="form-control" name="currency" id="curr">
                    <option defaultChecked value="RUB">RUB</option>
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                </select>
            </div>
            <div>
                <input className="form-control" type="submit" value="Create Goal"/>
            </div>
            </div>
           
           
            </form>
            </div>
           
        </div>
        <PagesFooter />
        </div>
       
    )
}

export default NewGoal;