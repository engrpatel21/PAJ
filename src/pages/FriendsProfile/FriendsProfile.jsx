import React, { Component } from 'react'
import UsersProfile from '../../components/UsersProfile/UsersProfile'
import * as userApi from "../../services/userService";


class FriendsProfile extends Component {
    state = { 
        userInfo: {
            name: '',
            bio: '',
            email: ''
        }
     }
     async componentDidMount(){
        const users = await userApi.getOneUser()
        this.setState({users})
    }

    render() { 
        return ( 
            <>
            <UsersProfile 
            usersInfo = {userInfo}

            />
            </>
         );
    }
}
 
export default FriendsProfile;