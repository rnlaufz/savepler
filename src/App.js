import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.scss';

// Import components
import NavBar from './components/NavBar';
import ContentBox from './components/ContentBox';
import CurrentGoal from './components/CurrentGoal';

const App = () => {
  return (
    <Router>
    <div className="container">
      <div id="content-container" className="pos-flex-split">
      <NavBar />
      <ContentBox>
        <CurrentGoal/>
      </ContentBox>  
      </div>
    </div>
    </Router>
  );
}

export default App;
