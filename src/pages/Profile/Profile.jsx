import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Grid, Image, Button, Icon, Divider, Card, Message } from 'semantic-ui-react'
import * as userApi from "../../services/userService";
import ProjectListContainer from '../../components/ProjectListContainer/ProjectListContainer'
import './Profile'

class Profile extends Component {
  state = {
    userProjects: [],
    
  };

  async componentDidMount(){
    const userProjects = await userApi.getUserProjects(this.props.user)
    this.setState({userProjects})
}

handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const {user} = this.props
    return (
      <>
      <body style={{
        backgroundColor:'#1b1c1d'
      }}>
        <Grid celled style={{
          height:'910px',
        }}>
          <Grid.Row style={{left:'1500px'}}>
          <Grid.Column width={3}>
            <br></br>
            <br></br>
            <Link to='/createproject'>
            <Button style={{
              width:'200px',
              color:'white',
              textShadow:'#1b1c1d 2px 2px',
              fontSize:'16px',
              textAlign:'center',
              fontWeight: 'bold',
              backgroundColor:'cornflowerblue',
              boxShadow:'gray 2px 2px',
              justifyContent:'center',
              
            }}>
              <label>
              <Icon name='add'/> New Project
              </label>
            </Button>
            </Link>
          </Grid.Column>
          </Grid.Row>

          <Grid>
            <Grid.Column width={5}>
            <Card style={{
              bottom:'100px',
              left: '150px'
            }}>
              <Image src={user.avatar} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{user.name}
                <Grid.Column floated='right' width={5}>
                    <Icon name='edit' />
                </Grid.Column>
                </Card.Header>
                <Card.Meta>
                </Card.Meta>
                <Card.Description>
                  <p>{user.bio}</p>
                  
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
            
          
              <Button
              as={Link}
              to='/messageboard'
              style={{
        
                width:'120px',
                color:'white',
                textShadow:'#1b1c1d 2px 2px',
                fontSize:'16px',
                textAlign:'center',
                fontWeight: 'bold',
                backgroundColor:'cornflowerblue',
                boxShadow:'gray 2px 2px',
                justifyContent:'center',
            }}
              >Messages</Button>
              
              <Button 
              style={{
                width:'120px',
                color:'white',
                textShadow:'#1b1c1d 2px 2px',
                fontSize:'16px',
                textAlign:'center',
                fontWeight: 'bold',
                backgroundColor:'cornflowerblue',
                boxShadow:'gray 2px 2px',
                justifyContent:'center',
            }} 
              >Friends</Button>
        
              </Card.Content>
            </Card>
            </Grid.Column>
            <ProjectListContainer
            />
          </Grid>
        </Grid>
        </body>
      </>
    );
  }
}

export default Profile;