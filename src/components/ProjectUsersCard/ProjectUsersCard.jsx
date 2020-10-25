import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Grid, Card, Icon } from 'semantic-ui-react'


class ProjectUsersCard extends Component {
    state = {
        userProjects: [],
    };

    

render() {
    const {projects} = this.props
    return (
    <>
        <Grid.Column width={3} style={{
                width: '100%',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridGap: '10px',
                justifyItems: 'center',
                margin:'10px 20px 200px',
                padding: '-110px',
                left:'200px'

            }}>
        {projects ? projects.map((project)=>
        <div key={project._id}>
          <Card
          as={Link}
          to={{pathname: `/projectdetails/${project._id}`}}
          style={{
            height:'100px',
            color:'seashell',
            textShadow:'#1b1c1d 2px 2px',
            fontSize:'20px',
            textAlign:'center',
            fontWeight: 'bold',
            backgroundColor:'cornflowerblue',
            boxShadow:'gray 2px 2px',
            marginBottom:'20px',
            display:'flex',
            flexFlow:'column nowrap',
            justifyContent:'center',
            opacity:'.8',
            bottom: '5px',
            left:'200px'
            }} 
          >     
        {project.name ? project.name : 'Link to Project'}
        <Icon disabled name='users' 
        style={{
            position:'absolute',
            top:'70px',
            left:'7px'
            }}
        />
        </Card>
        </div>
        ) : ''}
        </Grid.Column>
        </>
    );
  }
}

export default ProjectUsersCard;