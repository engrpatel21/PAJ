import React, { Component } from 'react';
import * as userApi from "../../services/userService";
import UserCard from '../../components/UserCard/UserCard'
import { Divider, Input, Grid } from 'semantic-ui-react'
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
                <Grid>
                <Grid.Column textAlign="center">
                    <Input 
                        huge icon='search' 
                        focus 
                        placeholder='Search for Users...' 
                        type='text' 
                        value ={this.state.user}
                        onChange={this.state.user}
                    />
                </Grid.Column>
                </Grid>
                    <br></br>
                    <br></br>
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