import React, {useState, Fragment, useEffect} from 'react';
import {connect} from 'react-redux';

// Import components
import PagesNav from '../PagesNav';
import PagesFooter from '../PagesFooter';

import {createGoal, getGoal} from '../../../actions/goal';
import { Redirect } from 'react-router-dom';


 const NewGoal = ({createGoal, goal: {uGoal}, getGoal}) =>  {
     useEffect(() => {
        getGoal()
     }, [getGoal, uGoal])

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
        allowAdding: false,

        // Goal data
        goal: '',
        sum: 0,
        currency: 'RUB',
        added: 0
            
        } 
    );

    const checkGoal = uGoal[0];

    const {pageNavLinks, createName, setSum, checkAdded, allowAdding} = compState;
    const nameGoal = (e) => {setCompState({...compState, goal: e.target.value})}
    const setName = (e) => {
        e.preventDefault()
        setCompState({...compState, createName: !createName, setSum: !setSum})
    }

    const sumGoal = (e) => {setCompState({...compState, sum: e.target.value})}
    const currencyGoal = (e) => {setCompState({...compState, currency: e.target.value})}
    const setSumm = (e) => {
        e.preventDefault()
        setCompState({...compState, setSum: !setSum, checkAdded: !checkAdded})
    }

    
    const allowAdd = () => {
        setCompState({...compState, checkAdded: !checkAdded, allowAdding: !allowAdding})
    }
    const addedToGoal = (e) => {if(allowAdding){setCompState({...compState, added: e.target.value})}}

    const addSaving = (e) => {
        e.preventDefault()
        setCompState({
            ...compState,
            createName: false,
            setSum: false,
            checkAdded: false,
            allowAdding: false 
            })
            const goalData = {goal: compState.goal, sum: Number.parseInt(compState.sum), currency: compState.currency, added: Number.parseInt(compState.added)}
            createGoal(goalData)
            getGoal()
         
    }
    const addGoal = () => {
        setCompState({
        ...compState,
        createName: false,
        setSum: false,
        checkAdded: false,
        allowAdding: false 
        })
        const goalData = {goal: compState.goal, sum: Number.parseInt(compState.sum), currency: compState.currency, added: Number.parseInt(compState.added)}
        createGoal(goalData)
        getGoal()
       
    }

    return (
        <Fragment>
            {checkGoal !== undefined ? <Redirect to="/" /> :
            (<div className="page-container pos-flex">
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
                <input className="form-control" type="text" placeholder="Goal Name" onChange={nameGoal}/>
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
                <input className="form-control" type="number" placeholder="Reqired sum" onChange={sumGoal}/>
            </div>
            <div>
                <select className="form-control" name="currency" id="curr" onChange={currencyGoal}>
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
                <div className="button-holder">
                <div>
                    <button onClick={allowAdd}>Yes</button>
                </div>
                <div>
                    <button onClick={addGoal}>No</button>
                </div>
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
                <input className="form-control" type="number" placeholder="Saving amount" onChange={addedToGoal}/>
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
        </div>)
            }
      
        </Fragment>
       
    )
}

const mapStateToProps = state => ({
    goal: state.goal,
    uGoal: state.goal.uGoal
})

export default connect(mapStateToProps, {createGoal, getGoal})(NewGoal);