import React, { Component } from 'react';
import Dasboard from './components/dashboard/Dashboard';
import NavBar from './components/layout/Navbar'
import { Route} from 'react-router-dom'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'

class App extends Component {
  state = {}
  


  render() { 
    return ( 
      <div className="App">
        <NavBar />
        <Route exact path='/' render={() => (<Dasboard />)} />
        <Route exact path='/project/:id'
          render={({ history, location, match }) => (
            <ProjectDetails
              history={history}
              location={location}
              match={match}
            />)} />
        <Route exact path='/signin'
          render={() => (
            <SignIn/>
          )} />
        <Route exact path='/signup'
          render={() => (
            <SignUp/>
          )} />
        <Route exact path='/create'
          render={() => (
            <CreateProject />
          )}/>
      </div>
     );
  }
}


export default App;
