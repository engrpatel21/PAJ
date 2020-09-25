import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Grid, Image, Button, Icon, Divider, Card, Message, Form  } from 'semantic-ui-react'
import * as userApi from "../../services/userService";
import MessagesAndFriends from '../../components/MessagesAndFriends/MessagesAndFriends'
import ProjectListContainer from '../../components/ProjectListContainer/ProjectListContainer'

class Profile extends Component {
  state = {
    editUser: false,
    userFormData: this.props.user, 
   
    
  };

 

handleSubmit = (e) => {
  e.preventDefault()
  this.setState({editUser: !this.state.editUser})
  this.props.handleUpdateUser(this.state.userFormData)
}
  
handleChange = e => {
  const userFormData = {...this.state.userFormData, [e.target.name]: e.target.value}
  this.setState({
    userFormData
  })
}
formRef = React.createRef()
  render() {
    const {user} = this.props
    return (
      <>
        <h1>Your Profile Page</h1>
        <Divider>
        </Divider>
        <Grid celled>
          <Grid.Row>
          <Grid.Column width={3}>
          <Button.Group>
            <Link to='/messageboard'>
              <Button>Messages</Button>
            </Link>
              <Button.Or />
              <Button>Friends</Button>
            </Button.Group>
            <br></br>
            <br></br>
            <Link to='/createproject'>
            <Button color='blue'>
              <label>
              <Icon name='add'/> Add Project
              </label>
            </Button>
            </Link>
          </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={5}>
            <Card>
              <Image src={user.avatar} wrapped ui={true} />
              <Card.Content>
                
              {this.state.editUser ? 
               
               <>
               <Form ref={this.formRef} onSubmit={this.handleSubmit}>
               <Card.Header>
                 <Form.Input
                  name='name'
                  onChange={this.handleChange}
                  value={this.state.userFormData.name}
                 ></Form.Input>
               <Grid.Column floated='right' width={5}>
               </Grid.Column>
               </Card.Header>
               <Card.Meta>
                 <span className='date'></span>
               </Card.Meta>
               <Card.Description>
                <Form.TextArea rows={6} 
                placeholder='Enter Bio Info' 
                name='bio'
                onChange={this.handleChange}
                value={this.state.userFormData.bio}></Form.TextArea>
                
               </Card.Description>
               <Form.Button size='tiny' content='Submit' positive icon='check'/>
               </Form>
                </>

              :
              
              <>
                <Card.Header>{user.name}
                <Grid.Column floated='right' width={5}>
                    <Icon name='edit' onClick={()=>this.setState({editUser: !this.state.editUser})}/>
                </Grid.Column>
                </Card.Header>
                <Card.Meta>
                  Bio
                </Card.Meta>
                <Card.Description>
                  {user.bio}
                </Card.Description>
              </>


              } 
            

        
              </Card.Content>
              <Card.Content extra>
        
                  <Icon name='user' />
                  22 Friends
            
              </Card.Content>
            </Card>
            </Grid.Column>
            <ProjectListContainer
              
            />
          </Grid.Row>
        </Grid>
      </>
    );
  }
}

export default Profile;