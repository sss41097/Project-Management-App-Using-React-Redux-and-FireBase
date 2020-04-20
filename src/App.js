import React, {Component} from 'react';
import Navbar from './components/layout/navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DashBoard from './components/dashboard/dashboard'
import ProjectDetails from './components/projects/projectdetail'
import signInPage from './components/auth/signinpage'
import signUpPage from './components/auth/signuppage'
import createProject from './components/projects/createproject'

class App extends Component {
    render() {
      return (
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path='/'component={DashBoard} />
              <Route path='/project/:id' component={ProjectDetails} />
              <Route path='/signinpage' component={signInPage} />
              <Route path='/signuppage' component={signUpPage} />
              <Route path='/createProject' component={createProject} />
            </Switch>
          </div>
        </BrowserRouter>
      );
    }
  }


export default App;
