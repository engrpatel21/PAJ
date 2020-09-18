import React from 'react'
import { Link } from 'react-router-dom'
import { Icon, Divider, Button, Message, Card, Image, Grid } from 'semantic-ui-react'

const UserCard = ({ user }) => { 
    return ( 
      <> 
        <h1>User Name: {user.name}</h1>
        <br></br>
        <Grid>
          <Card centered items style={{marginBottom: '2rem'}}
            image={user.avatar? user.avatar : 'https://picsum.photos/200/300'}
            header={user.name}
            meta={user.email}
            description={user.bio ? user.bio : 'Bio goes here'}
          />
        </Grid>
    </>
         );
    }

 
export default UserCard ;