import React, { Component } from "react";
import { Grid, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import * as userApi from "../../services/userService";





class Profile extends Component {
  state = {
    userProjects: []
  };

  async componentDidMount(){
    const userProjects = await userApi.getUserProjects(this.props.user)
    this.setState({userProjects})
}
  

  render() {
    return (
      <Grid celled>
    <Grid.Row>
      <Grid.Column width={3}>
        <Image src='https://picsum.photos/200/300' />
      </Grid.Column>
      <Grid.Column width={13}>
        <Button>
          <Link
          to='/createproject'
          >
          <Icon name='add'/>
          </Link>
        </Button>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={3}>
        <Image src='https://picsum.photos/200/300' />
      </Grid.Column>
      <Grid.Column width={10}>
        <Image src='https://picsum.photos/200/300' />
      </Grid.Column>
      <Grid.Column width={3}>
      {/* {this.state.users.map((project) => (
          <UserCard 
          key={user._id}
              user={user}
              project={project._id}
          />
        ))} */}
      </Grid.Column>
    </Grid.Row>
  </Grid>
    );
  }
}

export default Profile;