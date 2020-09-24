import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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

    // {this.state.users ? 'isloading' : 'not loading'}
    // const filterUsers = users.filter(user => (users.name.includes('j@j.com', '12@12.com', 'gundam@rx.com')))

    return ( 
    <>
    
        {this.state.users.length ? 
        
        <>
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
