import React, { Component } from 'react'
import UsersProfile from '../../components/UsersProfile/UsersProfile'
import * as userApi from "../../services/userService";


class FriendsProfile extends Component {
    state = { 
        userInfo: {
           
        }
     }
     async componentDidMount(){
        const userInfo = await userApi.differentUser(this.props.match.params.userId)
        this.setState({userInfo})
    }


    render() { 
        const {userInfo} = this.state
        return ( 
            <>
            <UsersProfile 
            usersInfo = {userInfo ? userInfo : 'LOADING'}
            addFriend = {this.props.addFriend}
            usersId = {this.props.match.params.userId}
            />
            </>
         );
    }
}
 
export default FriendsProfile;