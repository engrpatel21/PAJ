import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import * as userApi from "../../services/userService";

class ProjectUsersCard extends Component {
    state = {
        userProjects: [],
    };

    async componentDidMount(){
        const userProjects = await userApi.getAllUserProjects(this.props.usersId)
        console.log({userProjects})
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

export default ProjectUsersCard;