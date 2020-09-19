import React from 'react'
import { Grid, Image, Button, Icon, Divider, Card, } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import user from '../../../models/user'


const UsersProfile = ({userInfo}) => {
    const {userInfo} = this.state
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
              <Image src={userInfo.avatar} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{userInfo.name}</Card.Header>
                <Card.Meta>
                  <span className='date'>{userInfo.bio}</span>
                </Card.Meta>
                <Card.Description>
                  {userInfo.bio}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='userInfo' />
                  22 Friends
                </a>
              </Card.Content>
            </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </>
     );
}
 
export default UsersProfile;