import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Grid, Image, Button, Icon, Divider, Card, Message } from 'semantic-ui-react'
import profile from './profile.jpg';
import * as userApi from "../../services/userService";
import MessagesAndFriends from '../../components/MessagesAndFriends/MessagesAndFriends'





class Profile extends Component {
  state = {
    userProjects: [],
    name: "Mr. PAJ"
  };

  async componentDidMount(){
    const userProjects = await userApi.getUserProjects(this.props.user)
    this.setState({userProjects})
}
  

  render() {
    const {name} = this.state
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
              <Image src={profile} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Meta>
                  <span className='date'>Joined in 2035</span>
                </Card.Meta>
                <Card.Description>
                  PAJ is a software engineer living on Mars.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='user' />
                  22 Friends
                </a>
              </Card.Content>
            </Card>
            </Grid.Column>
            <Grid.Column width={3}>
              <Message floating>
              {this.state.userProjects.map((project)=>
                <div key={project._id}>
              <Link
                to={{
                  pathname: `/projectdetails/${project._id}`
                }}
              >
                {project.name ? project.name : 'Link to Project'}
              </Link>
                </div>
              )}
              </Message>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    );
  }
}

export default Profile;