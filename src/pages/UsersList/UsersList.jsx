import React, { Component } from 'react';
import * as userApi from "../../services/userService";
import UserCard from '../../components/UserCard/UserCard'
import SearchBar from '../../components/SearchBar/SearchBar'
import { Divider } from 'semantic-ui-react'
import './UserList.css'

class UserList extends Component {
    state = { 
        users: [],
        // Added for search.
        searchField: ''
     }

    async componentDidMount(){
        const users = await userApi.getAllUsers()
        this.setState({users})
    }

    render() { 
        const {users, searchField} = this.state
        const filteredUsers = users.filter(user =>(
            user.name.toLowerCase().includes(searchField.toLowerCase())
        ))
        return ( 
            
            <body style={{
                backgroundColor: '#1b1c1d' 
            }}>
                <Divider>
                </Divider>
                    <SearchBar 
                    handleChange={(e) => this.setState({searchField: e.target.value})
                    }/>
                <br></br>
                    <div className="UserList-grid">
                    {filteredUsers.map(user => 
                        <UserCard  key={user._id} user={user}/>
                    )}
                    </div>
            </body>
            
         );
    }
}
 
export default UserList;