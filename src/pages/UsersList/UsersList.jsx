import React, { Component } from 'react';
import { getAllUsers } from "../../services/userService";
import UserCard from '../../components/UserCard/UserCard'


class UsersList extends Component {
    state = { 
        users: [],
     }

     async componentDidMount(){
        const users = await getAllUsers();
        this.setState({ users });
     }

    render() { 
        return (  
            <>
        <h1>Hi, This is a list of all the users.</h1>
        {this.state.users.map((user) => (
          <UserCard 
          key={user._id}
          user={user}
          />
        ))}
            </>
        );
    }
}
 
export default UsersList;