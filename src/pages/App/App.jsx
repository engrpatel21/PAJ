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
import * as userApi from '../../services/userService'
import Profile from '../Profile/Profile'
import FriendsProfile from '../FriendsProfile/FriendsProfile'
import MessageBoard from '../MessagePage/MessagePage'
import Staff from '../Staff/Staff'
import AllUserProjects from '../AllProjects/AllProjects'
import "./App.css";
import FriendsList from '../FriendsList/FriendsList'

class App extends Component {
  state = {
    user: authService.getUser(),


  };

  handleLogout = () => {
    authService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  };

  async componentDidMount(){

    const user = await userApi.getOneUser()
    this.setState({user: user})
  }
  
 

  handleUpdateUser = async userData => {
    const updatedUser = await userApi.updateUserInfo(userData)
    this.setState({updatedUser})
  }

  handleAddFriend = async friend => {
    const updatedUser = await userApi.addFriend(friend)
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
          user={this.state.user}
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
        render={({history}) => (
        user ? <ProjectCreation 
        history={history}
        />
        : 
        <Redirect to="/login" />
        )}/>

        <Route 
        exact path='/profile'
        render={() => (
        user ? <Profile 
        
        />
        : 
        <Redirect to="/login" />
        )}/>

        <Route 
        exact path='/profile/:userId'
        render={({match, location}) => (
        user ? <FriendsProfile
        match={match}
        location={location}
        addFriend={this.handleAddFriend}
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
        <Route exact path='/friendlist' 
        render={()=>(
          user ? <FriendsList
  
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

// 01
