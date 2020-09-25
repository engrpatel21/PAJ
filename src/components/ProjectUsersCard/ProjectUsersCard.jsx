import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'


class ProjectUsersCard extends Component {
    state = {
        userProjects: [],
    };

    

render() {
    const {projects} = this.props
    return (
    <>
        <Grid.Column width={3}>
        {projects ? projects.map((project)=>
            <div key={project._id}>
        <Link
        to={{
            pathname: `/projectdetails/${project._id}`
        }}
        >
        {project.name ? project.name : 'Link to Project'}
        </Link>
        </div>
        ) : ''}
        </Grid.Column>
        </>
    );
  }
}

export default ProjectUsersCard;