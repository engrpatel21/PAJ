import React, { Component } from 'react';
import * as userApi from "../../services/userService";
import UserCard from '../../components/UserCard/UserCard'
import { Icon, Divider, Button, Message, Card, Image, Grid } from 'semantic-ui-react'
import './UserList.css'

class UserList extends Component {
    state = { 
        users: []
     }

    async componentDidMount(){
        const users = await userApi.getAllUsers()
        this.setState({users})
    }

    render() { 
        const {users} = this.state
        return ( 
            <>
                <h1>User List Page</h1>
                <Divider>
                </Divider>
                    <div className="UserList-grid">
                    {users.map(user => 
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