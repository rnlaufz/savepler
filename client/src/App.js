import React, { Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import './App.scss';


// Import components
import NavBar from './components/NavBar';
import ContentBox from './components/ContentBox';
import History from './components/History';
import EditGoal from './components/EditGoal';

// Import pages
import Register from './components/pages/auth/Register';
import Login from './components/pages/auth/Login';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Settings from './components/pages/Settings';
import NewGoal from './components/pages/goals/NewGoal';

// Import actions 
import {loadUser} from './actions/user';
import setAuthToken from './utils/setAuthToken';

// Import routing
import PrivateRoute from './components/routing/PrivateRoute';
import { getGoal } from './actions/goal';



export class App extends Component {
   componentDidMount(){
      store.dispatch(loadUser())
      store.dispatch(getGoal())
    }
      // Rendering application
      render() {
        if(localStorage.token){
          setAuthToken(localStorage.token);
      }
    

      return (
         <Provider store={store}>
         <Router>
         <div className="container">
          
             <Switch>
                 <Route exact path="/sign_in" render={props =>(<Login  />)}/>
                 <Route exact path="/sign_up" render={props =>(<Register  /> )}/>
                 <Route exact path="/about_app" render={props =>(<About  /> )}/>
                 <Route exact path="/contact" render={props =>(<Contact  /> )}/>
                 <Route exact path="/set_goal" render={props =>(<NewGoal  /> )}/>
                
                  <PrivateRoute exact path="/" component={(props) => 
                  
                         <div className="wrapper">
                      <NavBar />
                      <ContentBox />
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
                  <Route exact path="/edit" render={(props) => 
                     <Fragment>
                      <NavBar />
                      <ContentBox>
                         <EditGoal />
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
         </Provider>
      )
   }
}





export default App;
