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

// Import pages
import Register from './components/pages/auth/Register';
import Login from './components/pages/auth/Login';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

const App = () => {
  return (
    <Router>
    <div className="container pos-flex-split">
     
        <Switch>
            <Route exact path="/sign_in" render={props =>(<Login  />)}/>
            <Route exact path="/sign_up" render={props =>(<Register  /> )}/>
            <Route exact path="/about_app" render={props =>(<About  /> )}/>
            <Route exact path="/contact" render={props =>(<Contact  /> )}/>
             <Route exact path="/" render={(props) => 
                <Fragment>
                 <NavBar />
                 <ContentBox>
                    <CurrentGoal/>
                    <InfoCards/>
                    <CallButtons />
                    <Route exact path="/add" render={(props) => <AddMoney />} />
                    <Route exact path="/lend" render={(props) => <LendMoney />} />
                    <LatestHistory />
                 </ContentBox> 
                </Fragment>
        } />
             <Route exact path="/history" render={(props) => 
                <Fragment>
                 <NavBar />
                 <ContentBox>
                    <History />
                 </ContentBox> 
                </Fragment>
        } />
     </Switch>
      </div>

    </Router>
  );
}

export default App;
