import React, { Component } from 'react';
import * as userApi from "../../services/userService";
import UserCard from '../../components/UserCard/UserCard'
import SearchBar from '../../components/SearchBar/SearchBar'
import { Divider, Input, Grid } from 'semantic-ui-react'
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
        // Added searchField for search.
        const {users, searchField} = this.state
        // Added for search.
        const filteredUsers = users.filter(user =>(
            user.name.toLowerCase().includes(searchField.toLowerCase())
        ))
        return ( 
            <>
                <h1>User List Page</h1>
                <Divider>
                </Divider>
                {/* Added for search function. */}
                    <SearchBar 
                    handleChange={(e) => this.setState({searchField: e.target.value})
                    }/>
                <br></br>
                    <div className="UserList-grid">
                    {/* Added filterUsers from users for search function. */}
                    {filteredUsers.map(user => 
                        <UserCard  key={user._id} user={user}/>
                    )}
                    </div>
            </>
         );
    }
}
 
export default UserList;


// const UserList = ({users}) => {
//     return ( 
//         <>
//          {users.map(user =>
//             <div>{user.name}</div>
//             )}
//         </>
//      );
// }
 
// export default UserList;