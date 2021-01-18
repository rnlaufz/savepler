import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
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

const App = () => {
  return (
    <Router>
    <div className="container">
      <div id="content-container" className="pos-flex-split">
      <NavBar />
      <ContentBox>
        <CurrentGoal/>
        <InfoCards/>
        <CallButtons />
        <Route exact path="/add" render={(props) => <AddMoney />} />
        <Route exact path="/lend" render={(props) => <LendMoney />} />
        <LatestHistory />
      </ContentBox>  
      </div>
    </div>
    </Router>
  );
}

export default App;
