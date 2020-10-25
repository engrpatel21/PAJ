import React from 'react'
import { Card, Icon, Image, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const UserCard = ({ user }) => { 
    return ( 
      <>
      <body style={{
        backgroundColor:'#1b1c1d'

      }}>
          <Card as={Link} to={{pathname: `/profile/${user._id}`, state: {user}}}  style={{marginBottom: '5px'}}>
            <Image src={user.avatar? user.avatar : 'https://picsum.photos/200/300'} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{user.name }
                
                  <Grid.Column floated='right' width={5}>
                    <Icon name='user plus' />
                  </Grid.Column>
               
              </Card.Header>
              <Card.Meta>
                <span className='date'>{user.email}</span>
              </Card.Meta>
              <Card.Description>
              {user.bio ? user.bio : 'Bio goes here'}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
            
                <Icon name='user' />
            
            </Card.Content>
          </Card>
          </body>
      </>
         );
    }

 
export default UserCard;
