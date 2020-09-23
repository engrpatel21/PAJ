import React from 'react'
import { Card, Icon, Image, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const UserCard = ({ user }) => { 
    return ( 
      <>
          <Card as={Link} to={{pathname: `/profile/${user._id}`}} >
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
              <a>
                <Icon name='user' />
                22 Friends
              </a>
            </Card.Content>
          </Card>

          {/* as={Link} to={{pathname: `/profile/${user._id}`}}
            centered items style={{marginBottom: '2rem'}}
            image={user.avatar? user.avatar : 'https://picsum.photos/200/300'}
            header={user.name }<Icon = 'edit'/>
            
            meta={user.email}
            description={user.bio ? user.bio : 'Bio goes here'} 
          /> */} 
      </>
         );
    }

 
export default UserCard;
