import React, { Component } from 'react';
import * as userApi from "../../services/userService";
import UserCard from '../../components/UserCard/UserCard'



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
                {users.map(user => 
                    <UserCard  key={user._id} user={user}/>
                    )}
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