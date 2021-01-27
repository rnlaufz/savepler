import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.scss';


// Import components
import NavBar from './components/NavBar';
import ContentBox from './components/ContentBox';
import CurrentGoal from './components/CurrentGoal';
import InfoCards from './components/InfoCards';
import CallButtons from './components/CallButtons';
import AddMoney from './components/AddMoney';
import LendMoney from './components/LendMoney';
import LatestHistory from './components/LatestHistory';
import History from './components/History';
import EditGoal from './components/EditGoal';

// Import pages
import Register from './components/pages/auth/Register';
import Login from './components/pages/auth/Login';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Settings from './components/pages/Settings';
import NewGoal from './components/pages/goals/NewGoal';


const App = () => {
  return (
    <Router>
    <div className="container">
     
        <Switch>
            <Route exact path="/sign_in" render={props =>(<Login  />)}/>
            <Route exact path="/sign_up" render={props =>(<Register  /> )}/>
            <Route exact path="/about_app" render={props =>(<About  /> )}/>
            <Route exact path="/contact" render={props =>(<Contact  /> )}/>
            <Route exact path="/set_goal" render={props =>(<NewGoal  /> )}/>
           
             <Route exact path="/" render={(props) => 
             
                    <div className="wrapper">
                 <NavBar />
                 <ContentBox>
                    <CurrentGoal/>
                    <InfoCards/>
                    <CallButtons />
                    {/* @TO_DO: action to show or hide lend or add  */}
                    {/* <AddMoney /> 
                    <LendMoney /> */}
                    <LatestHistory />
                 </ContentBox> 
                 </div>
             
        } />
      
             <Route exact path="/history" render={(props) => 
                <Fragment>
                 <NavBar />
                 <ContentBox>
                    <History />
                 </ContentBox> 
                </Fragment>
        } />
             {/* <Route exact path="/add" render={(props) => 
                <Fragment>
                 <NavBar />
                 <ContentBox>
                    <AddMoney />
                 </ContentBox> 
                </Fragment>
        } />
             <Route exact path="/lend" render={(props) => 
                <Fragment>
                 <NavBar />
                 <ContentBox>
                    <LendMoney />
                 </ContentBox> 
                </Fragment>
        } /> */}
             <Route exact path="/settings" render={(props) => 
                <Fragment>
                 <NavBar />
                 <ContentBox>
                    <Settings />
                 </ContentBox> 
                </Fragment>
        } />
     </Switch>
      </div>

    </Router>
  );
}

export default App;
