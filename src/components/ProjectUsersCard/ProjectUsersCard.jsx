import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Grid, Image, Button, Icon, Divider, Card, Message } from 'semantic-ui-react'
import * as userApi from "../../services/userService";






class ProjectUsersList extends Component {
  state = {
    userProjects: [],
  };

  async componentDidMount(){
    const userProjects = await userApi.getUserProjects(this.props.user)
    this.setState({userProjects})
}

render() {
    const {user} = this.props
    return (
<>
<Grid.Column width={3}>

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

</Grid.Column>

</>
    );
  }
}

export default ProjectUsersList;