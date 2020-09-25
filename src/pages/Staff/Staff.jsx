import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Divider } from 'semantic-ui-react'
import StaffComp from '../../components/StaffComp/StaffComp'
import * as userApi from '../../services/userService'

class Staff extends Component {
    state = { 
    users: [],
     }

     async componentDidMount(){
        const users = await userApi.getAllUsers()
        this.setState({users})
     }

render() { 

    return ( 
    <>
    
        {this.state.users.length ? 
        
        <>
        <Divider></Divider>
           {this.state.users.map(user => 
                <>
                    {user.email === '12@12.com' || user.email === 'j@j.com' || user.email === 'gundam@rx.com' ?   <StaffComp user={user} /> : ''}
                  
                </>
            )}
        </>
        
        
        
        : 'not l'}
    </>
    );
    }
}
 
export default Staff;
