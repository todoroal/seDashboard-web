import './App.css';
import BurgerMenu from './components/layout/BurgerMenu';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, {Fragment} from 'react'
import setAuthToken from './utils/setAuthToken';



import Alert from './components/layout/Alerts'

//*import pages below *//
import Register from './components/login/Register';
import Login from './components/login/Login';
import About from './components/pages/About'
import Home from './components/pages/Home';

//*import states below*//
import AuthState from './context/auth/AuthState';
import AlertState from'./context/alert/AlertState';

if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () =>  {
  return (
  <AuthState>
    <Router>
      <AlertState>
        <Fragment>
          <BurgerMenu></BurgerMenu>
            <div className="container">
            
            <Alert></Alert>
           
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/about' component={About}></Route>
              <Route exact path='/login' component={Login}></Route>
              <Route exact path='/register' component={Register}></Route>
            </Switch>
          </div>
        </Fragment>
      </AlertState>
    </Router>
  </AuthState>



    
     


  );
}

export default App;
