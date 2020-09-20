import React from 'react'
import { Grid, Image, Button, Icon, Divider, Card, } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import MessagesAndFriends from '../../components/MessagesAndFriends/MessagesAndFriends'



const UsersProfile = (props) => {
    const {usersInfo} = props
    return ( 
    <>
        <h1>Profile Page</h1>
        <Divider>
        </Divider>
        <Grid celled>
          <Grid.Row>
          <Grid.Column width={3}>
            <MessagesAndFriends />
            <br></br>
            <br></br>
            <Button>
              <label>Add Project</label>
            <Link to='/createproject'>
              <Icon name='add'/>
            </Link>
            </Button>
          </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={5}>
            <Card>
              <Image src={usersInfo.avatar} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{usersInfo.name}</Card.Header>
                <Card.Meta>
                  <span className='date'>{usersInfo.bio}</span>
                </Card.Meta>
                <Card.Description>
                  {usersInfo.bio}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
             
                  <Icon name='userInfo' />
                  22 Friends
             
              </Card.Content>
            </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid> 
        </>
     );
}
 
export default UsersProfile;