import React from 'react'
import { Card } from 'semantic-ui-react'

const UserCard = ({ user }) => { 
    return ( 
      <>
          <Card as={Link} to={{pathname: `/profile/${user._id}`}}
            centered items style={{marginBottom: '2rem'}}
            image={user.avatar? user.avatar : 'https://picsum.photos/200/300'}
            header={user.name}
            meta={user.email}
            description={user.bio ? user.bio : 'Bio goes here'}
          />
      </>
         );
    }

 
export default UserCard ;