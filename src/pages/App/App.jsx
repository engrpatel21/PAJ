import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService";
import UsersList from "../UsersList/UsersList";
import LandingPage from '../../pages/LandingPage/LandingPage'
import ProjectBoard from '../../pages/ProjectBoard/ProjectBoard'
import ProjectDetails from '../../pages/ProjectDetails/ProjectDetails'
import ProjectCreation from '../ProjectCreation/ProjectCreation'
import * as projectApi from '../../services/projectService'
import * as userApi from '../../services/userService'
import Profile from '../Profile/Profile'
import FriendsProfile from '../FriendsProfile/FriendsProfile'
import MessageBoard from '../MessagePage/MessagePage'
import Staff from '../Staff/Staff'
import AllUserProjects from '../AllProjects/AllProjects'
import "./App.css";

class App extends Component {
  state = {
    user: authService.getUser(),
    updatedUser: {},
    projects: [],

  };

  handleLogout = () => {
    authService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  };

  async componentDidMount(){
    const projects = await projectApi.getAllProjects()
    const user = await userApi.getOneUser()
    this.setState({projects, updatedUser: user})
  }

  

  handleAddProject = async projectData =>{
    const newProject = await projectApi.createProject(projectData)
    this.setState({projects: [...this.state.projects, newProject]},
     ()=> this.props.history.push(`/projectdetails/${newProject._id}`)
      )
  }

  handleUpdateUser = async userData => {
    const updatedUser = await userApi.updateUserInfo(userData)
    this.setState({updatedUser})
  }
  render() {
    
    const {user} = this.state
    return (
      <>
        <NavBar user={user} handleLogout={this.handleLogout} />
        <Route
          exact
          path="/"
          render={() => (
          
            <main>
              {/* <h1>Welcome. This is an authorization template.</h1> */}
              <LandingPage /> 
            </main>
            
          )}
        />
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <Signup
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <Login
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/users"
          render={() => (user ? <UsersList/> : <Redirect to="/login" />)}
        />
        {/* Route to Project Details Page */}
        <Route 
          exact path='/projectdetails/:projectId'
          render={( {match, history} ) => (
          user ? <ProjectDetails
          match={match}
          history={history}
          user={this.state.updatedUser._id ? this.state.updatedUser : ''}
        />
        : 
        <Redirect to="/login" />
        )}/>

        {/* Route to Project Board Page */}
        <Route 
          exact path='/projectboard/:projectId/:featureId'
          render={( {match, history} ) => (
          user ? <ProjectBoard
          match={match}
          history={history}
        />
        : 
        <Redirect to="/login" />
        )}/>
        
        <Route 
        exact path='/createproject'
        render={() => (
        user ? <ProjectCreation 
        handleAddProject={this.handleAddProject}
        />
        : 
        <Redirect to="/login" />
        )}/>

        <Route 
        exact path='/profile'
        render={() => (
        user ? <Profile 
        user={this.state.updatedUser._id ? this.state.updatedUser : ''}
        handleUpdateUser={this.handleUpdateUser}
        />
        : 
        <Redirect to="/login" />
        )}/>

        <Route 
        exact path='/profile/:userId'
        render={({match}) => (
        user ? <FriendsProfile
        match={match}
        />
        : 
        <Redirect to="/login" />
        )}/>

        <Route
        exact
        path="/messageboard"
        render={() => (user ? <MessageBoard 
        /> 
        : <Redirect to="/login" />)}
        />
     
        <Route
        exact
        path="/allprojects"
        render={() => (user ? <AllUserProjects /> 
        : <Redirect to="/   login" />)}
        />

        <Route 
        exact path='/staff'
        render={() => (
        user ? <Staff

        user={this.state.updatedUser._id ? this.state.updatedUser: ''}
        

        />
        : 
        <Redirect to="/login" />
        )}
        
        />

      </>
    );
  }
}

export default App;
