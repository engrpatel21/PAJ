import React, { Component } from 'react';
import * as userApi from "../../services/userService";
import UserCard from '../../components/UserCard/UserCard'
import SearchBar from '../../components/SearchBar/SearchBar'
import { Divider,Button } from 'semantic-ui-react'
import './FriendsList.css'

class FriendsList extends Component {
    state = { 
        users: [],
        // Added for search.
        searchField: ''
     }

    async componentDidMount(){
        const users = await userApi.getOneUser()
        this.setState({users})
    }

    render() { 
        const {users, searchField} = this.state
        // const filteredUsers = users.friends.filter(user =>(
        //     user.name.toLowerCase().includes(searchField.toLowerCase())
        // ))
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
                    <div className="FriendsList-grid">
                    {users._id? users.friends.map(f=> <UserCard  key={users._id} user={f ? f : ''}/>)  : ''}
                        
                   
                    </div>
            </body>
            
         );
    }
}
 
export default FriendsList;