import React from 'react'
import { Divider, Grid, Icon, Image, Card, Message } from 'semantic-ui-react'
import ProjectUsersCard from '../ProjectUsersCard/ProjectUsersCard'

const UsersProfile = (props, mobile) => {
    const {usersInfo} = props
    return ( 
    <>
        <h1>User's Profile Page</h1>
        <Divider>
        </Divider>
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={5}>
            <Card>
              <Image src={usersInfo.avatar} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{usersInfo.name}
                <Grid.Column floated='right' width={5}>
                    <Icon name='user plus' />
                  </Grid.Column></Card.Header>
                <Card.Meta>
                  <span className='date'>{usersInfo.bio}</span>
                </Card.Meta>
                <Card.Description>
                  {usersInfo.bio}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
             
                  {/* <Icon name='userInfo' />
                  22 Friends */}
      
              </Card.Content>
            </Card>
            
            </Grid.Column>
            <Grid.Column width={3}>
              <Message floating>
              <ProjectUsersCard projects={usersInfo.projects ? usersInfo.projects : ''}/>
            
               
              
              </Message>
            </Grid.Column>
          </Grid.Row>
        </Grid> 
        </>
     );
}
 
export default UsersProfile;