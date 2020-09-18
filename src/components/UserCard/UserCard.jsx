import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Image } from 'semantic-ui-react'

const UserCard = ({ user }) => { 
    return ( 
      <div> 
        <Card style={{marginBottom: '2rem'}}
          image={user.avatar? user.avatar : 'https://picsum.photos/200/300'}
          header={user.name}
          meta={user.email}
          description={user.bio ? user.bio : 'Bio goes here'}
        />
    </div>
         );
    }

 
export default UserCard ;