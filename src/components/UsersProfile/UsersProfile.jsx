import React from 'react'
import { Divider, Grid, Icon, Image, Card, Message, Button } from 'semantic-ui-react'
import ProjectUsersCard from '../ProjectUsersCard/ProjectUsersCard'

const UsersProfile = (props, mobile) => {
    const {usersInfo} = props
    const handleAddFriend =(e) => {
        e.preventDefault()
        props.addFriend({friends: usersInfo._id})
    }

    return ( 
    <>
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
                    <Button onClick={handleAddFriend} icon='user plus'/>
                   
                  </Grid.Column></Card.Header>
                <Card.Meta>
                  <span className='date'>{usersInfo.bio}</span>
                </Card.Meta>
                <Card.Description>
                  {usersInfo.bio}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
      
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