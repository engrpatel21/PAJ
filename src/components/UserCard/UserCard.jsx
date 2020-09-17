import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Image } from 'semantic-ui-react'

const UserCard = ({ user }) => { 
    return ( 
      <div> 
    <Card.Group>
    <Card>
      <Card.Content>
        <Image
          floated='center'
          size='mini'
          src= {user.avatar}
        />
        <Card.Header></Card.Header>
        <Card.Meta>{user.name}</Card.Meta>
        <Card.Description>
          email: {user.email}
          Bio: {user.bio}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        Recent Projects: {user.projects}
        <Link 
            to={{
            pathname: '/profile',
            state: {user}
            }}
            >
                <button>Profile</button>
            </Link>

      </Card.Content>
    </Card>
    </Card.Group>
    </div>
         );
    }

 
export default UserCard ;