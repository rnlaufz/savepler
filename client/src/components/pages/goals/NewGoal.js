import React, {useState, Fragment} from 'react'

// Import components
import PagesNav from '../PagesNav';
import PagesFooter from '../PagesFooter';

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
          
        ],

        // Stages of loading parts of the component
        createName: true,
        setSum: false,
        checkAdded: false,
        allowAdding: false
            
        } 
    );

    const {pageNavLinks, createName, setSum, checkAdded, allowAdding} = compState;

    const setName = () => {
        setCompState({...compState, createName: !createName, setSum: !setSum})
    }
    const setSumm = () => {
        setCompState({...compState, setSum: !setSum, checkAdded: !checkAdded})
    }
    const allowAdd = () => {
        setCompState({...compState, checkAdded: !checkAdded, allowAdding: !allowAdding})
    }
    const addSaving = () => {
        setCompState({
            ...compState,
            createName: false,
            setSum: false,
            checkAdded: false,
            allowAdding: false 
            })
            console.log('All stages completed')
    }
    const createGoal = () => {
        setCompState({
        ...compState,
        createName: false,
        setSum: false,
        checkAdded: false,
        allowAdding: false 
        })
        console.log('All stages completed')
    }

    return (
        <div className="page-container pos-flex">
            <PagesNav pageNavLinks={pageNavLinks} /> 
             <div className="new-goal-form">
            <div className="goal-card">
            <h1 className="title-l">Let's get started!</h1>

            {/* Set goal name */}
            <Fragment>
           {createName ? ( <Fragment><p>Give your goal a name</p>
            <form onSubmit={setName}>
            <div className="inputs">
            <div>
                <input className="form-control" type="text" placeholder="Goal Name"/>
            </div>
            <div>
                <input className="form-control" type="submit" value="Continue"/>
            </div>
            </div>
            </form> </Fragment>) : null}
            </Fragment>

            {/* Set goal sum and currency */}
            <Fragment>
           {setSum ? ( <Fragment><p>Set the sum you need</p>
            <form onSubmit={setSumm}>
            <div className="inputs">
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
                <input className="form-control" type="submit" value="Continue"/>
            </div>
            </div>
            </form> </Fragment>) : null}
            </Fragment>

            {/* Ask user for any savings */}
            <Fragment>
           {checkAdded ? ( <Fragment>
            <div>
                <h2>Do you already have any savings?</h2>
                <div>
                    <button onClick={allowAdd}>Yes</button>
                </div>
                <div>
                    <button onClick={createGoal}>No</button>
                </div>
            </div>
             </Fragment>) : null}
            </Fragment>

             {/* Add existing savings*/}
             <Fragment>
           {allowAdding ? ( <Fragment><p>Add saving</p>
            <form onSubmit={addSaving}>
            <div className="inputs">
            <div>
                <input className="form-control" type="number" placeholder="Saving amount"/>
            </div>
            <div>
                <input className="form-control" type="submit" value="Continue"/>
            </div>
            </div>
            </form> </Fragment>) : null}
            </Fragment>


           </div>  
        </div>
        <PagesFooter />
        </div>
       
    )
}

export default NewGoal;