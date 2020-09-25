import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Grid, Image, Button, Icon, Divider, Card, Message, Form  } from 'semantic-ui-react'
import * as userApi from "../../services/userService";
import ProjectListContainer from '../../components/ProjectListContainer/ProjectListContainer'
import './Profile'

class Profile extends Component {
  state = {
    editUser: false,
    userFormData: this.props.user, 
    user: {}
   
    
  };


 async componentDidMount(){
   const user = await userApi.getOneUser()
   this.setState({user})
 }

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
    const {user} = this.state
    return (
      <>
      <body style={{
        backgroundColor:'#1b1c1d'
      }}>
        <Grid celled style={{
          height:'910px',
        }}>
          <Grid.Row style={{left:'500px', bottom:'40px'}}>
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
                  <p>{user.bio}</p>

                </Card.Description>
              </>


              } 
            

        
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
              as={Link} to={{pathname:'/friendList/'}}
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